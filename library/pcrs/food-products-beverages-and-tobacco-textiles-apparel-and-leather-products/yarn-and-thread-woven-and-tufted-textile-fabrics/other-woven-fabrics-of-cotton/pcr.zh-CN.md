---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.other-woven-fabrics-of-cotton
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他棉机织织物

## 1. 范围与适用性

本 PCR 适用于声明为棉织物，且在排除更具体的棉机织物类别后归入“其他棉机织织物”这一剩余产品类别的可销售机织纺织物。只要声明实际路线和组成，坯布、已准备、漂白、染色、印花及其他整理后的工厂门口织物均可纳入。

前景边界始于纱线和其他供应材料进入织物生产场址，终于可销售织物在工厂门口交付。边界纳入实际发生的织造准备、织造、路线特定的湿法加工、印花或染色、整理、检验、包装、直接相关公用工程，以及场内排放或废水处理。棉花种植、轧花、纺纱、外购化学品、燃料、电力和运输通过关联上游数据集表示，不在前景清单中重复构建。

针织、钩编、簇绒、非织造、窄幅、绒类、毛巾、纱罗、特殊技术织物及制成品原则上不在范围内，除非其产品身份仍满足所声明的剩余棉机织物边界。纱线和纤维生产不属于前景过程边界。数据包不得仅因织物含有棉就使用本 PCR；必须记录适用的分类判断、纤维组成、组织结构和生产路线。

天工流 **Printed cotton cloth / 印花棉布** 仅作为紧密机织、轻至中等克重、印花、服装级的一条代表路线身份。它不是整个类别的默认生产路线、组成、克重、质量等级、印花技术或市场平均。未印花、坯布、染色、采用不同整理或不同结构的产品必须声明自身路线限定信息，同时遵守质量参考流合同。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.other-woven-fabrics-of-cotton |
| classification_refs | CPC 3.0：26690，其他棉机织织物 |
| covered_products | 在排除更具体细类后属于其他棉机织物剩余类别的可销售坯布、已准备、漂白、染色、印花或整理棉机织物 |
| excluded_products | 纱线和纤维；分类在其他处的针织、钩编、簇绒、非织造、窄幅、绒类、毛巾、纱罗及特殊织物；制成品；声明的主要纺织身份不是棉的产品 |
| representative_product | Printed cotton cloth / 印花棉布仅代表紧密机织、轻至中等克重、印花、服装级的一条路线，不代表类别内所有产品 |
| production_route | 外购纱线 -> 整经与可选浆纱 -> 织造 -> 检验/修补 -> 可选退浆、精练、漂白或丝光 -> 可选染色或印花 -> 可选功能性或机械整理与热处理 -> 最终检验和包装 |
| market_state | 工厂门口以卷、包或等效散装形式交付的可销售干织物；包装不计入参考质量并单独报告 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在工厂门口提供具有已声明纤维组成、组织/结构、路线、单位面积质量、有效幅宽、整理和质量等级的可销售棉机织物 |
| How much | 1 kg 可销售织物，不含包装 |
| How well | 符合生产者声明的产品规格以及适用合同或经验证性能等级；不暗示类别统一的印花或整理等级 |
| How long or cycle | 一个生产批次直至工厂门口放行；该中间产品参考流不包含使用阶段寿命 |
| reference_flow_link | 参考产品输出行 `saleable_cotton_woven_fabric` 归一化为 1 kg |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | Printed cotton cloth / 印花棉布 `00665421-6d29-46d6-83cb-28766e3dec4b` |
| 参考流属性 | Mass / 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass / 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 实际路线：坯布/已准备/漂白/染色/印花/整理；按干质量计的纤维组成；纱线类型/支数；组织与结构；单位面积质量 g/m2；有效幅宽；称量时水分状态；适用的着色/印花技术；化学或机械整理；性能/质量等级与测试依据；生产地域；技术和报告期；包装处理；共产品与废料分类；分配方法 |

构建前景数据包时，全部必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺少限定信息即视为参考流定义不完整。产品不是印花棉布时，天工 UUID 仅保留为类别代表身份，数据包必须明确语义差异，不得把实际产品改称为印花棉布。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 可销售参考织物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将所有前景数量归一化至 1 kg 验收合格的可销售织物。纸管、包膜、托盘等包装不计入织物质量并单独列入清单。记录称量基准和水分状态。 |
| `dry_mass_and_moisture` | 纱线、织物中间品和可销售织物 | Mass | kg | 全批次一致采用干质量或声明商业回潮质量。使用商业质量时，记录实测或规定水分及质量平衡换算。 |
| `area_mass_check` | 可销售织物 | 面积、质量、长度和有效幅宽 | m2、kg、m、m、g/m2 | 用有效长度 x 有效幅宽 x 实测单位面积质量交叉核对批次质量。显著不符必须调查；未经说明不得用面积计算替代实测参考质量。 |
| `composition_basis` | 纤维组成 | 质量分数 | 质量 % | 在同一声明质量基准上报告各纤维比例，并要求在记录的舍入容差内合计为 100%。 |
| `water_accounting` | 湿法过程和清洗 | Volume | m3 | 分别记录新水总输入、内部再用/循环水和净耗水；仅转移到另一场内过程的水不得在未记录转移时扣除。 |
| `energy_accounting` | 电力、燃料、蒸汽和热 | 能量或载能体特定属性 | kWh、MJ、kg 或 m3 | 分别记录外购电力、各燃料、进口蒸汽/热、场内发电、回收能和外送能。换算因子必须有来源，不得混用低位与高位热值。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购纱线、加工化学品、包装、公用工程及其他材料进入织物生产场址，并声明其实际供应者、状态和上游数据集链接 |
| starting_condition_role | 前景织物制造始于纱线接收，终于可销售棉机织物在工厂门口放行 |
| product_classification_scope | 棉机织物剩余类别；分类不强制印花路线，使用前必须排除更具体织物类别 |
| recursive_input_rule | 输入为本 PCR 类别内的另一产品时，按外购中间品记录并链接独立建模的上游数据集及路线；不得在接收过程中递归重建其制造 |
| upstream_dataset_requirement | 为纱线/纤维供应、化学品、电力、燃料/热、水供应、包装、运输和场外处理关联有代表性的上游数据集，并披露地域、技术、时间和代理缺口 |
| disclosure | 声明纳入与排除的路线阶段、场内或场外湿法加工、处理地点、产品组成与结构、参考流水分基准、回收/循环流、截断、代理和分配选择 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `boundary_route_specific` | 纳入从外购纱线至工厂门口放行期间实际发生的每个过程。预处理、染色、印花、整理、直接加热和场内处理按条件纳入，不得假定印花代表路线。 | eu-txt-bat-2022 |
| `boundary_inputs_outputs` | 对每个纳入过程盘点材料和化学品、水、能量、产品、废物、废水及相关直接排放，并维护将产出和排放关联到源过程的流程图。 | eu-txt-bat-2022 |
| `boundary_recursive_inputs` | 将外购同类织物表示为带独立参考流和限定信息的上游数据集，禁止形成自引用前景循环。 | eu-pef-2021-2279 |
| `boundary_shared_services` | 纳入直接相关的共享公用工程、热处理、废气治理和废水处理，并按第 7 节层级分配。 | eu-txt-bat-2022; eu-pef-2021-2279 |
| `boundary_omissions` | 避免未量化截断。任何排除流或过程必须具名，筛查材料、能量和环境显著性，给出理由并计入完整性披露。 | eu-pef-2021-2279 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `weaving` | 织造准备与织造 | `required` | 纳入场内实际发生的纱线接收、整经、穿经、可选浆纱、织造、织机清洁和中间检验 | 将外购纱线转化为棉坯布 | 每 1 kg 可销售参考织物 |
| `pretreatment` | 棉织物预处理 | `conditional` | 报告边界内发生烧毛、退浆、洗涤/精练、漂白、丝光、漂洗、干燥或相关准备时纳入 | 为销售或后续着色/整理念准备坯布 | 每 1 kg 可销售参考织物 |
| `colouration_printing` | 染色或印花 | `conditional` | 纳入边界内实际发生的染色和/或印花技术、固着、洗涤、干燥、设备清洗和浆料管理 | 施加颜色或图案；印花棉布只是一条代表路线 | 每 1 kg 可销售参考织物 |
| `finishing` | 机械、化学与热整理 | `conditional` | 仅纳入实际施加的处理，如柔软、免烫、范围内涂层、轧光、起绒、预缩、干燥、焙烘或热定型 | 提供声明的手感、尺寸、外观或功能性能 | 每 1 kg 可销售参考织物 |
| `utilities_treatment` | 场内公用工程与排放/废水处理 | `conditional` | 纳入服务于所含过程的场内锅炉、直接加热、压缩空气、水处理、热回收、废气治理和废水处理 | 提供共享服务并记录场址直接排放和处理产出 | 每 1 kg 可销售参考织物 |
| `inspection_packaging` | 最终检验、分等与包装 | `required` | 纳入工厂门口放行前的最终计量、测试、分等、修剪、卷/包准备和包装 | 产出合格可销售参考织物并识别不合格材料 | 1 kg 验收合格可销售织物 |

### 过程：织造准备与织造（`weaving`）

#### 输入

##### 产品流

###### 外购棉纱及声明的混纺纱（`yarn_input`）

按纤维组成、纱支/类型、供应商、批次和质量记录各纱线，并链接供应商数据集，保持混纺组分可区分。

- 选定流：Cotton yarn or declared blend yarn
- 流属性/单位：Mass / kg
- 数量规则：按声明水分基准调整、归属于生产批次的实测收货或领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving_batch`

###### 浆料和织造准备化学品（`weaving_chemicals`）

实际使用时记录各浆料、润滑剂、抗静电剂、清洗剂及其他准备化学品，保留产品身份和浓度。

- 选定流：Site-specific sizing or weaving preparation chemical
- 流属性/单位：Mass / kg
- 数量规则：期初库存加收货减期末库存和有记录的转移，并与批次投料记录核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_weaving_batch`
- 来源：eu-txt-bat-2022

###### 织造电力及直接用能（`weaving_energy`）

记录基于仪表的电力及各直接用载能体。共享服务可记入 `utilities_treatment` 并仅分配一次，不得遗漏或重复。

- 选定流：Electricity and site-specific energy carrier
- 流属性/单位：Energy / kWh 或 MJ；必要时用载能体特定属性
- 数量规则：分表计量，或由经核对的场址总表按有记录方法分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving_batch`
- 来源：eu-txt-bat-2022

##### 废物流

不规定默认废物输入。仅当退回或外购材料在法律和物理上属于废物且接收过程确实处理时，才记为废物输入。

##### 基本流

默认不预期直接基本流输入。只有资源在本过程直接跨越环境边界而非通过水或公用工程供应过程时，才记录场址资源取用。

#### 输出

##### 产品流

###### 棉坯布中间品（`greige_fabric`）

记录转至后续场内加工或作为坯布销售的质量，并记录结构、有效幅宽、单位面积质量和水分基准。

- 选定流：Greige woven cotton fabric
- 流属性/单位：Mass / kg
- 数量规则：按批次实测的合格转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving_batch`

##### 废物流

###### 纱头、织造废料和不合格坯布（`weaving_waste`）

区分内部再用材料、外售回收共产品及送处理废物，不得将这些产出与纱线投入净额抵消。

- 选定流：Site-specific cotton textile residue or waste
- 流属性/单位：Mass / kg
- 数量规则：按去向和目的地实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving_batch`

##### 基本流

织造不规定默认基本流输出。相关且未在 `utilities_treatment` 中记录时，记录实测粉尘或其他直接排放。

### 过程：棉织物预处理（`pretreatment`）

#### 输入

##### 产品流

###### 进入预处理的坯布（`pretreatment_fabric_input`）

记录转入坯布质量，并链接织造输出或外购上游中间品。

- 选定流：Greige woven cotton fabric
- 流属性/单位：Mass / kg
- 数量规则：按声明水分基准实测批次投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pretreatment_batch`

###### 预处理水和化学品（`pretreatment_materials`）

记录实际使用的水以及各退浆、精练、漂白、丝光、pH 调节、洗涤或清洁化学品；即使按一个角色汇总，数据包中也要保持水与各化学品可分。

- 选定流：Process water and site-specific pretreatment chemical
- 流属性/单位：水用 Volume / m3；化学品用 Mass / kg
- 数量规则：水采用仪表或批控记录，各化学品采用经核对的投料或库存记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pretreatment_batch`
- 来源：eu-txt-bat-2022

###### 预处理电力与热（`pretreatment_energy`）

分别记录电力、蒸汽、热和直接燃烧燃料，包括过程使用的回收能。

- 选定流：Electricity, steam, heat, or site-specific fuel
- 流属性/单位：Energy / kWh 或 MJ；必要时用载能体特定属性
- 数量规则：分表或批次归属用量，并与场址总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pretreatment_batch`
- 来源：eu-txt-bat-2022

##### 废物流

不规定默认废物输入。

##### 基本流

仅当直接跨越环境边界时记录地下水或地表水取用；否则使用供水产品输入。

#### 输出

##### 产品流

###### 已准备棉织物（`prepared_fabric`）

记录退浆、精练、漂白、丝光或其他准备后转移/销售织物的质量和状态。

- 选定流：Prepared woven cotton fabric
- 流属性/单位：Mass / kg
- 数量规则：按批次实测的合格输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pretreatment_batch`

##### 废物流

###### 预处理废水和分离残余物（`pretreatment_wastewater`）

记录送场内或场外处理的废水体积及相关负荷，并按去向分别记录残余物和空化学品容器。

- 选定流：Wastewater from cotton pretreatment and site-specific residues
- 流属性/单位：废水用 Volume / m3；残余物用 Mass / kg
- 数量规则：流量计或批次体积和实测/分析污染物负荷；按去向称量残余物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pretreatment_batch`
- 来源：eu-txt-bat-2022

##### 基本流

只有在另行建模的处理过程之前直接排放时才记直接排放；避免把同一污染物同时记作送处理废水和最终入水排放。

### 过程：染色或印花（`colouration_printing`）

#### 输入

##### 产品流

###### 进入染色或印花的织物（`colouration_fabric_input`）

记录实际的已准备或坯布输入及其路线状态。不得由代表流 UUID 推断印花。

- 选定流：Woven cotton fabric intermediate
- 流属性/单位：Mass / kg
- 数量规则：实测批次投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_colouration_batch`

###### 染料、颜料、印花浆、助剂和水（`colouration_materials`）

记录各着色剂、黏合剂、增稠剂、固着剂、助剂、印花浆组分、清洗化学品和水，识别实际技术并保留浓度和安全数据身份。

- 选定流：Site-specific colourant, printing chemical, auxiliary, and process water
- 流属性/单位：化学品用 Mass / kg；水用 Volume / m3
- 数量规则：配方/投料记录与库存变动核对；水按计量或批控并含设备清洗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_colouration_batch`
- 来源：eu-txt-bat-2022

###### 染色或印花用能（`colouration_energy`）

记录施加、固着、洗涤、干燥和设备清洗所用电力、蒸汽、热和直接燃料。

- 选定流：Electricity, steam, heat, or site-specific fuel
- 流属性/单位：Energy / kWh 或 MJ；必要时用载能体特定属性
- 数量规则：分表或批次归属用量，并与场址总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_colouration_batch`
- 来源：eu-txt-bat-2022

##### 废物流

不规定默认废物输入。

##### 基本流

不规定默认基本流输入。

#### 输出

##### 产品流

###### 染色或印花织物（`coloured_fabric`）

记录合格输出质量、着色/印花路线、固着和洗涤状态及适用质量测试结果。

- 选定流：Dyed or printed woven cotton fabric
- 流属性/单位：Mass / kg
- 数量规则：实测合格批次输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_colouration_batch`

##### 废物流

###### 着色废水、残余浆料和清洗残余物（`colouration_waste`）

计量废水，并区分回收/再用浆料与送处理的残浆及其他废物；没有记录不得假定回收或再用。

- 选定流：Dyeing/printing wastewater and site-specific colouration residue
- 流属性/单位：废水用 Volume / m3；浆料和固体用 Mass / kg
- 数量规则：计量排放量及按类别和去向实测的残余物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_colouration_batch`
- 来源：eu-txt-bat-2022

##### 基本流

###### 着色和印花直接大气排放（`colouration_air_emissions`）

记录印花、固着、干燥和清洗在过程内控制后的相关实测排放；污染物集合由化学品清单和许可相关性判断确定。

- 选定流：Site-specific direct emission to air
- 流属性/单位：Mass / kg
- 数量规则：实测浓度 x 生产期经验证废气体积，或其他有记录且符合许可的质量方法
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_colouration_batch`
- 来源：eu-txt-bat-2022

### 过程：机械、化学与热整理（`finishing`）

#### 输入

##### 产品流

###### 进入整理的织物（`finishing_fabric_input`）

记录进入每个整理序列的织物状态和质量。

- 选定流：Woven cotton fabric intermediate
- 流属性/单位：Mass / kg
- 数量规则：实测批次投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_batch`

###### 整理化学品、水和能量（`finishing_inputs`）

记录各施加整理剂、载体/工艺水，以及机械处理、施加、干燥、焙烘或热定型用电/热。

- 选定流：Site-specific finishing chemical, process water, electricity, steam, heat, or fuel
- 流属性/单位：按适用情况采用 Mass / kg、Volume / m3 或 Energy / kWh 或 MJ
- 数量规则：配方/投料和计量记录与批次及场址总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_batch`
- 来源：eu-txt-bat-2022

##### 废物流

不规定默认废物输入。

##### 基本流

不规定默认基本流输入。

#### 输出

##### 产品流

###### 整理棉机织物（`finished_fabric`）

记录合格输出质量及每项声明的化学、机械、尺寸、外观或功能整理。

- 选定流：Finished woven cotton fabric
- 流属性/单位：Mass / kg
- 数量规则：实测合格批次输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_batch`

##### 废物流

###### 整理废水和残余物（`finishing_waste`）

按目的地分别记录废水、残余整理剂、滤材、容器及其他送处理残余物。

- 选定流：Finishing wastewater and site-specific residue
- 流属性/单位：Volume / m3 或 Mass / kg
- 数量规则：按类别和去向计量或称量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_batch`
- 来源：eu-txt-bat-2022

##### 基本流

###### 整理和热处理直接排放（`finishing_air_emissions`）

采用由施加化学品和热操作确定的污染物清单，记录治理后的相关直接大气排放。

- 选定流：Site-specific direct emission to air
- 流属性/单位：Mass / kg
- 数量规则：实测浓度 x 生产期经验证废气体积，或其他有记录且符合许可的质量方法
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_batch`
- 来源：eu-txt-bat-2022

### 过程：场内公用工程与排放/废水处理（`utilities_treatment`）

#### 输入

##### 产品流

###### 公用工程燃料、外购能、处理化学品和补充水（`utility_inputs`）

分别记录各载能体和处理材料，包括锅炉燃料、外购电力/蒸汽、水处理与废水处理化学品及补充水。

- 选定流：Site-specific fuel, purchased energy, treatment chemical, or supplied water
- 流属性/单位：载能体特定质量/体积或 Energy / kWh 或 MJ
- 数量规则：供应商发票与仪表/库存核对；穷尽直接分表后才分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities_treatment`
- 来源：eu-txt-bat-2022

##### 废物流

###### 进入场内处理的废水（`wastewater_to_site_treatment`）

将废水输入链接到产生过程，不得重复其体积或污染负荷。

- 选定流：Textile-process wastewater to treatment
- 流属性/单位：Volume / m3 和污染物特定 Mass / kg
- 数量规则：按来源水流核对的进水体积和分析负荷
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities_treatment`
- 来源：eu-txt-bat-2022

##### 基本流

场址直接从环境取水时在此记录直接水资源取用。

#### 输出

##### 产品流

###### 内部转移的回收水或能量（`recovered_utility`）

将内部回收记为降低总需求的可追踪转移；除非下游模型明确支持，不得建立避免负荷抵扣。

- 选定流：Recovered process water, condensate, or heat
- 流属性/单位：Volume / m3 或 Energy / MJ
- 数量规则：纳入系统内实际再用的计量转移
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities_treatment`
- 来源：eu-txt-bat-2022

##### 废物流

###### 处理污泥和治理残余物（`treatment_residue`）

记录干/湿质量基准、必要组成、危险属性和处理去向。

- 选定流：Wastewater-treatment sludge or air-abatement residue
- 流属性/单位：Mass / kg
- 数量规则：实测外运质量并记录水分或干固体含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities_treatment`
- 来源：eu-txt-bat-2022

##### 基本流

###### 处理后废水和公用工程排放（`treated_direct_emissions`）

记录处理后最终入水和入气污染物释放（包括直接燃烧排放），不得把同一负荷同时作为未处理直接排放。

- 选定流：Site-specific elementary emission to water or air
- 流属性/单位：Mass / kg
- 数量规则：实测浓度 x 报告期经验证排水/废气体积，并记录低于检出限处理
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_utilities_treatment`
- 来源：eu-txt-bat-2022

### 过程：最终检验、分等与包装（`inspection_packaging`）

#### 输入

##### 产品流

###### 进入最终放行检查的织物（`final_fabric_input`）

记录送最终检验织物的质量、长度、幅宽、单位面积质量、路线状态和批次身份。

- 选定流：Woven cotton fabric for final inspection
- 流属性/单位：Mass / kg
- 数量规则：实测送检批次质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_release`

###### 包装材料（`packaging_input`）

分别记录纸管、包膜、捆扎带、标签、托盘及其他包装，不计入参考织物质量。

- 选定流：Site-specific packaging material
- 流属性/单位：按适用情况采用 Mass / kg 或 Item / unit
- 数量规则：实测或物料清单数量，并与放行卷/包核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_release`

##### 废物流

不规定默认废物输入。

##### 基本流

不规定默认基本流输入。

#### 输出

##### 产品流

###### 可销售其他棉机织织物（`saleable_cotton_woven_fabric`）

这是定量参考输出。记录实际产品名称和限定信息；仅当产品确为符合该代表路线的印花棉布时才使用“Printed cotton cloth / 印花棉布”名称。

- 选定流：以 Printed cotton cloth `00665421-6d29-46d6-83cb-28766e3dec4b` 为代表身份；必须提供实际产品说明
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归一化后恰为 1 kg 合格可销售织物，不含包装
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_final_release`

##### 废物流

###### 不合格织物、修剪物和包装废物（`final_release_waste`）

按实际去向记录各材料。留在同一批次内的返工材料是内部转移而非输出；外售回收材料与废物保持区分。

- 选定流：Site-specific textile residue or packaging waste
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_release`

##### 基本流

不规定默认基本流输出。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 专用生产线、批次步骤、仪表和处理系统 | 首先通过过程细分以及直接归属于参考织物的批次、生产线、仪表或处理记录避免分配。存在可分记录时，不得把路线特定湿法加工与未加工坯布生产合并。 | eu-pef-2021-2279 |
| `allocation_physical` | 不可避免且产出多种织物的共享操作 | 无法细分或进行合理系统扩展时，采用有记录的因果物理关系，如机器时间、计量能量、浴液体积、处理负荷或加工质量。选择最能解释消耗或排放形成的驱动因素，不得自动采用产品质量。 | eu-pef-2021-2279 |
| `allocation_economic_last_resort` | 缺乏合理物理关系的多产出操作 | 仅在最后手段下采用收入分配，并记录产品数量、价格、币种、地域、价格期、零值/负值处理和价格变化敏感性。 | eu-pef-2021-2279 |
| `allocation_residues` | 纱线废料、织物边料、回收浆料、污泥和不合格材料 | 分配前先分类各产出。内部再用是受跟踪的内部转移；有外部市场的产出按层级处理为共产品；废物产出按选定废物模型承担处理。没有明确下游方法时不得在前景清单中主张避免负荷。 | eu-pef-2021-2279; eu-txt-bat-2022 |
| `allocation_shared_treatment` | 公用工程、废水处理和废气治理 | 优先采用过程专用仪表和污染负荷；否则按因果需求分配电/热，并按实测体积和相关污染负荷分配处理负担，披露其余场址共享分配。 | eu-txt-bat-2022; eu-pef-2021-2279 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_weaving_batch` | `weaving` | 纱线、化学品、能量、坯布产出和织造残余物 | 批次领退、库存、仪表、生产和废物记录 | lot_id; yarn_id/composition/count; opening/receipt/issue/return/closing mass; chemical_id/concentration; meter_start/end; greige_mass; width; length; area_mass; moisture; residue_mass/disposition | 用经校准秤和电力/能量表核对仓库与批次记录 | kg; kWh; MJ; m; m2; g/m2; % | 每批次及每月核对 | 有代表性的连续 12 个月，或完整较短生产季并披露季节性限制 | 报告场址内所有纳入织造线 | 汇总归属记录，解决库存变化和返工后按 `calc_reference_normalization` 归一化 | 秤/仪表校准；签署库存核对；批次流转卡；生产和废物票据 |
| `cp_pretreatment_batch` | `pretreatment` | 织物输入/输出、水、化学品、能量、废水和残余物 | 配方、批控、仪表、实验室、库存和外运记录 | batch_id; input/output_mass; moisture; water_intake/reuse/discharge; chemical_id/concentration/dose; electricity/steam/heat/fuel; wastewater_volume/analysis; residue_mass/destination | 读取批控和分表，核对化学品库存和实验室样品 | kg; m3; kWh; MJ; mg/L or kg pollutant | 每批；按适用许可进行排水采样；每月核对 | 有代表性的连续 12 个月或完整生产季 | 所有纳入预处理线和关联处理水流 | 按路线和批次汇总，区分总水/再用水/净水并归一化至合格参考输出 | 仪表校准；配方授权；实验室 QA/QC；质量和水平衡；废物联单 |
| `cp_colouration_batch` | `colouration_printing` | 织物、着色剂/浆料/助剂、水、能量、废物和排放 | 配方、投料、仪表、浆料退回、实验室、废气和废物记录 | batch/design_id; technology; fabric_mass; chemical_id/concentration/dose; paste_prepared/returned/reused/waste; water; electricity/heat; wastewater_volume/analysis; exhaust_flow/concentration/time; output_mass; test_result | 采集机器配方和投料、仪表读数、浆料核对及经验证采样 | kg; m3; kWh; MJ; mg/L; mg/Nm3; Nm3; h | 每批/花型；按许可采样；每月核对 | 有代表性的连续 12 个月或完整生产季 | 所有纳入染色/印花/固着/洗涤/干燥线 | 核对配制浆料和化学品，计算实测排放负荷并归一化至合格输出 | 经校准投料/仪表；实验室 QA/QC；浆料平衡；采样报告；批次质量证明 |
| `cp_finishing_batch` | `finishing` | 织物、整理化学品、水、能量、残余物和大气排放 | 配方、投料、仪表、生产线、实验室和废物记录 | batch_id; finish/function; input/output_mass; chemical_id/concentration/dose; water; electricity/steam/heat/fuel; exhaust_flow/concentration/time; wastewater/residue; process_temperature/time; quality_test | 采集生产线配方和仪表，保留化学品身份并采用经验证排放/测试方法 | kg; m3; kWh; MJ; mg/Nm3; Nm3; h; degC | 每批；按许可采样；每月核对 | 有代表性的连续 12 个月或完整生产季 | 所有纳入整理和热处理线 | 仅汇总等效整理路线，计算负荷并归一化至合格输出 | 校准；配方批准；安全数据；采样 QA/QC；产品测试报告 |
| `cp_utilities_treatment` | `utilities_treatment` | 燃料、外购/自产能、水、处理材料、废水负荷、回收公用工程、污泥和直接排放 | 发票、仪表、库存、处理日志、实验室和外运记录 | carrier_id; quantity; heating_value_basis; electricity/steam/heat import/generation/export; water_withdrawal/supply/reuse; chemical_id/dose; inflow/outflow_volume/concentration; exhaust_flow/concentration; sludge_mass/dry_solids/destination | 核对场址总表与分表，采用流量比例或有记录的代表性采样和可追溯实验室方法 | kg; m3; kWh; MJ; mg/L; mg/Nm3; kg pollutant; % solids | 连续/每日仪表、批次日志、每月平衡、按许可采样 | 与生产数据相同期间 | 服务于纳入过程的全部公用工程和处理设施 | 仅扣除有记录外送一次；直接归属后再分配；计算负荷并归一化 | 仪表/校准；燃料证书；实验室 QA/QC；许可报告；处理和废物日志 |
| `cp_final_release` | `inspection_packaging` | 送检/合格织物、限定信息、质量结果、包装、不合格材料和参考质量 | 批次流转、秤、尺寸、测试、物料清单、分等和出货记录 | lot_id; product_name; composition; route; yarn/weave; input/accepted/rejected_mass; moisture; length; usable_width; area_mass; colour/print/finish; test_method/result/grade; packaging_id/mass; disposition | 经校准称量和尺寸测量、适用的经验证质量测试及出货核对 | kg; m; m2; g/m2; %; test-specific unit | 每个放行批次 | 与过程清单相同期间 | 报告场址全部放行参考产品 | 仅汇总合格质量，单独保留不合格/返工量，并将归一化输出设为恰好 1 kg | 秤和尺寸校准；测试报告；签署放行证；包装 BOM；出货记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有前景清单数量 | 归一化数量 = 归属于纳入产品的数量 / 参考水分基准上的合格可销售织物质量 | 归属数量；合格可销售织物质量；适用的水分换算 | 每 1 kg 参考织物的数量 |  |
| `calc_area_mass_crosscheck` | 最终织物批次 | 计算质量 kg = 有效长度 m x 有效幅宽 m x 单位面积质量 g/m2 / 1000；与经校准实测质量比较并调查显著差异 | 长度；有效幅宽；单位面积质量；实测质量 | 质量一致性结果和差异 |  |
| `calc_net_water` | 各湿法过程和场址总量 | 净耗水 = 外部水总输入 - 边界外送水；内部再用/循环水单独报告且不得重复扣除 | 水输入；内部再用/循环；外送；排放；适用的库存变化 | 每参考流的总水、再用/循环水、净水和排水 | eu-txt-bat-2022 |
| `calc_direct_emission_load` | 实测废水和大气排放 | 污染物负荷 = 代表性浓度 x 同期经验证排水或废气体积，并记录单位换算和低于检出限处理 | 浓度；匹配体积/流量和时间；检出限；运行期 | 每参考流污染物质量 | eu-txt-bat-2022 |
| `calc_mass_balance` | 纱线到织物及化学品/浆料阶段 | 投入 + 期初库存 = 合格产出 + 残余物/废物 + 外送/转移 + 期末库存 + 有记录水分变化；报告未解释差异而非强制闭合 | 批次和库存质量；转移；水分基准 | 阶段质量平衡和未解释差异 | eu-txt-bat-2022 |
| `calc_allocation` | 共享过程或设施 | 按第 7 节顺序：可行时细分/系统扩展，其次因果物理关系，最后才经济分配；分配因子须在记录的舍入范围内合计为 1 | 直接记录；因果驱动量；共产品量；仅必要时使用价格 | 已分配清单和披露的因子集合 | eu-pef-2021-2279 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和中间品 | 保留批次级组成、纱线、组织/结构、单位面积质量、幅宽、路线、颜色/印花、整理、水分基准、等级和实际产品名称；明确产品是否匹配或不同于印花棉布。 | 产品规格；批次流转卡；实验室/测试报告；放行证明 |
| `dq_primary_period` | 前景活动数据 | 全年运行时使用有代表性的连续 12 个月。较短期间仅在覆盖完整生产季并披露季节性、停机和代表性限制时允许。 | 带日期仪表、生产、库存和出货序列；覆盖声明 |
| `dq_site_coverage` | 纳入前景边界 | 纳入服务于声明路线的全部生产线、公用工程和处理设施；否则披露并量化排除份额和代理方法。 | 场址流程图；生产线清单；仪表图；生产核对 |
| `dq_completeness` | 投入、产出、废物和直接排放 | 筛查全部过程投入产出，具名并说明遗漏，证明同一废水或排放负荷未在处理前后重复计数。 | 投入产出清单；化学品登记；质量/水/能平衡；遗漏清单 |
| `dq_measurement` | 质量、水、能量和排放数据 | 保留校准状态、采样方法、实验室 QA/QC、低于检出限处理和单位换算；共享场址分配前优先直接批次/生产线仪表。 | 校准证书；采样计划；实验室报告；换算因子登记 |
| `dq_representativeness` | 上游和代理数据集 | 评估并披露技术、地域、时间和精度代表性，以及方法一致性与完整性。 | 数据集元数据和数据质量评价 |
| `dq_traceability` | 计算值和分配值 | 保留原始记录标识、公式、分配驱动/因子、来源标识、复核人和可复算计算版本。 | 计算工作簿或脚本输出；批准记录；来源登记 |

## 9. 校验规则

| rule_id | 检查 | 要求 | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | 产品身份和类别 | 数据包缺少实际产品名称、纤维组成、组织/结构、路线、单位面积质量、有效幅宽、水分基准、整理/等级，或没有考虑更具体产品类别的证据时失败。 | unsd-cpc-3-0 |
| `validation_representative_route` | 印花流代表性 | 未印花或语义不同织物被称为 Printed cotton cloth / 印花棉布，且没有代表身份限制和实际产品说明时失败。 |  |
| `validation_reference_flow` | 定量参考 | 归一化后合格织物输出不恰为 1 kg、包装计入织物质量，或 Mass 流属性、单位组或 kg 单位与第 3 节不一致时失败。 |  |
| `validation_route_coverage` | 过程覆盖 | 实际发生的织造准备、湿法加工、染色/印花、整理、公用工程、处理、检验或包装阶段无量化理由而遗漏时失败。 | eu-txt-bat-2022 |
| `validation_inventory_balance` | 材料、水和能量核算 | 要求核对纱线/织物质量平衡；湿法路线报告总水/再用水/净水；电力、燃料、蒸汽/热、回收和外送可分别追踪。标记未解释差异和重复计数。 | eu-txt-bat-2022 |
| `validation_chemicals_emissions` | 化学品、废水和大气排放 | 要求路线特定化学品身份和数量、实测废水体积/负荷、相关直接大气排放、处理去向，并避免处理前后排放重复。 | eu-txt-bat-2022 |
| `validation_allocation` | 多产出和共享服务 | 可细分却先分配、缺乏因果或末选经济依据、因子未在披露舍入范围内合计为 1，或废物/再用/共产品处理不一致时失败。 | eu-pef-2021-2279 |
| `validation_quality` | 适用性和放行质量 | 要求声明实际产品适用的性能/质量测试和结果；不得对不适用产品强制印花织物或 EU Ecolabel 阈值。 | eu-ecolabel-textiles-2014-350 |
| `validation_data_quality` | 时间、地域、技术和精度质量 | 要求覆盖期、场址/生产线范围、一次/二次数据划分、代表性评价、校准/采样证据、来源可追溯性和明确局限性声明。 | eu-pef-2021-2279 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明棉机织物路线的前景工厂门口数据集，可在后续评审后发布为二次或背景数据集 |
| downstream_use | `secondary_dataset`；`background_dataset`；保留全部路线和质量限定信息时可作为 `process` 和 `lifecyclemodel` 投影来源 |
| allowed_use | 需要工厂门口棉机织物投入，且可接受声明的组成、结构、路线、地域、技术、期间、分配和数据质量画像的产品特定从摇篮到工厂门口或全生命周期模型 |
| excluded_use | 作为所有棉织物通用市场平均；自动用于针织/非织造/特殊织物；替代棉种植、纺纱、服装制造、使用或生命末期；把所有 CPC 26690 产品表示为印花棉布；功能与质量规格不兼容时用于比较声明 |
| required_metadata | 规范 PCR id；实际产品名称；CPC 背景；组成；纱线与组织/结构；单位面积质量；有效幅宽；水分基准；实际坯布/预处理/染色/印花/整理路线；性能等级和测试；参考流；场址地域；技术；报告期；过程图；上游数据集链接；处理；分配；包装；复核人和计算版本 |
| required_quality_disclosure | 一次与二次数据占比；生产线/场址和时间覆盖；质量/水/能核对；仪表和采样质量；化学品和排放覆盖；代理代表性；遗漏；分配敏感性；印花代表身份的局限性 |
| update_trigger | 产品组成/结构、路线、场址或设备、印花/整理化学品、能源/水供应、处理、分配、分类、产品流身份、法规或 BAT 依据发生重大变化，或前景数据超过组织评审周期 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | `official_guidance` | 联合国统计司，Central Product Classification Version 3.0 资源，https://unstats.un.org/unsd/classifications/Econ/CPC（检索于 2026-08-11） | CPC 分类背景和剩余类别标题 |
| `eu-txt-bat-2022` | `official_guidance` | 欧盟委员会，Commission Implementing Decision (EU) 2022/2508，纺织行业 BAT 结论，ELI：https://data.europa.eu/eli/dec_impl/2022/2508/oj（通过 EUR-Lex 访问；检索于 2026-08-11） | 过程分解、投入产出清单、棉预处理、印花和整理、水、能量、化学品、排放、监测、回收及处理记录 |
| `eu-pef-2021-2279` | `official_guidance` | 欧盟委员会，Commission Recommendation (EU) 2021/2279，环境足迹方法，ELI：https://data.europa.eu/eli/reco/2021/2279/oj（通过 EUR-Lex 访问；检索于 2026-08-11） | 参考流规范、多功能层级、截断披露、完整性、代表性和数据质量要求 |
| `eu-ecolabel-textiles-2014-350` | `standard` | 欧盟委员会，Commission Decision 2014/350/EU，纺织品 EU Ecolabel 准则，合并文本：https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02014D0350-20201201（检索于 2026-08-11） | 中间机织物路线和产品特定适用性属性示例，包括尺寸变化和色牢度测试；不作为本 PCR 通用阈值 |
