---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.other-milk-and-cream-in-solid-forms-n-e-c
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他固态乳和奶油，未另分类

## 1. 范围与适用性

本 PCR 只适用于经过明确产品识别 gate 后仍归入 CPC 22219 的固态乳或奶油产品。由于 `n.e.c.` 是剩余类别而非所有乳粉的同义词，使用本 PCR 前，前景数据包必须记录以下全部事实：

1. 产品在所声明工厂门处以固态供应；
2. 商业名称、乳源物种、配料或乳成分物料清单及实测组成能证明产品本质为乳或奶油，而非非乳配制食品；
3. 产品既不是 CPC 22211 全脂奶粉，也不是 CPC 22212 脱脂乳粉或乳清粉；
4. 没有其他更具体的 CPC 叶节点或适用产品类别规则描述该产品；
5. 实际浓缩与干燥路线以及进入前景边界的全部中间状态均已声明。

奶油粉或其他固态乳/奶油产品只有在具体产品通过上述 gate 时才可纳入。下述代表性奶油粉路线只是建模代表，不扩大分类范围。任何 gate 条件不满足的产品均不适用本 PCR。

排除产品包括：全脂奶粉；脱脂乳粉；乳清粉；液态乳、奶油、乳清或液态浓缩物；黄油、奶酪、酸奶及其他发酵或酸化产品；另有分类的酪蛋白、乳糖和分离乳配料；婴幼儿配方食品和本质并非固态乳或奶油的其他配制食品；以及缺少批次或产品记录以证明身份、物种、组成或路线的产品。

Codex CXS 206-1999 可用于解释乳品术语。Codex CXS 207-1999 仅在具体产品经证明确实处于该标准适用范围内时使用。其组成规定不得外推至整个 CPC 22219 剩余类别，也不得作为 LCI 数量。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.other-milk-and-cream-in-solid-forms-n-e-c |
| classification_refs | CPC 3.0：22219，其他固态乳和奶油，未另分类（2221 下的 exact 剩余叶） |
| covered_products | 通过强制剩余类别 gate 的固态乳或奶油产品；数据集必须说明商业名称、乳源物种、实测组成、配料或乳成分以及适用产品标准。 |
| excluded_products | CPC 22211 全脂奶粉；CPC 22212 脱脂乳粉和乳清粉；液态或浓缩液态乳和奶油；以及归入更具体乳品、配料或配制食品类别的全部产品。 |
| representative_product | 由已声明牛乳奶油经有记录的浓缩和干燥路线制成的奶油粉；仅为代表，不是全部 CPC 22219 产品的默认身份。 |
| production_route | 接收与身份 gate；实际执行时的配制或标准化；可选膜法或热浓缩；已声明干燥技术；干燥后处理；包装；清洗和排放控制作业。 |
| market_state | 工厂门处货架稳定固体或粉末；包装纳入产品系统，但不计入 1 kg 净参考数量。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供通过 CPC 22219 剩余类别 gate 且有完整记录的固态乳或奶油产品。 |
| How much | 工厂门处 1 kg 净产品，不含包装质量。 |
| How well | 数据包声明商业身份、乳源物种、实测水分或总固形物基准、相关时的脂肪和蛋白质组成、全部添加配料或乳成分、CXS 207 适用状态、浓缩路线、干燥技术和包装配置。 |
| How long or cycle | 工厂门处所代表的一个已声明生产批次或生产期；平均期间及任何货架期声明另行报告。 |
| reference_flow_link | 下述参考产品流是唯一的定量参考；所有清单数量均归一化至 1 kg 净合格产品。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 工厂门处 1 kg 净合格产品，不含包装质量 |
| 参考产品流 | 其他固态乳和奶油，未另作规定的 `5f6f1d34-4370-4557-99b2-a84879462c51` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | CPC 22219 gate 结果及被排除的备选类别；商业产品名称；乳源物种；配料或成分物料清单；实测组成和分析基准；适用标准及 CXS 207 范围判定；接收进料状态；浓缩路线；干燥技术；返工政策；净水分基准；工厂门包装；场址、批次或生产期和时间期间 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息时，参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用校准设备测量净合格产品质量。参考数量不含初级、次级和运输包装，但包装须另列清单。 |
| `moisture_solids_basis` | 接收进料、中间品、最终产品、回收固形物和不合格品 | 质量和质量分数 | kg 和 kg/kg | 记录水分或总固形物的分析方法、取样点、湿基或干基及批次结果。不得以标准组成限值替代实测批次结果。 |
| `composition_identity` | 产品 gate 和配制 | 质量和质量分数 | kg 和 kg/kg | 保留产品特定物料清单和实测组成，以区分本剩余产品与全脂奶粉、脱脂乳粉、乳清粉及非乳配制食品。 |
| `internal_flow_consistency` | 配制进料、浓缩物和散装干燥产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 关联中间流采用同一批次边界和分析基准；通过已记录产出、残余物、废水和排放核对水和乳固形物质量变化。 |
| `energy_records` | 电力、燃料、蒸汽和外购热 | 发票所列能量或燃料质量/体积 | 原始单位及 kWh 或 MJ | 保留仪表或发票原始单位和换算因子。共享能源只能采用有记录的物理驱动量或另一项已披露、符合 PEF 的方法分配。 |
| `water_and_effluent` | 工艺水、清洗水、冷凝水和废水 | 质量或体积；适用时含浓度 | kg 或 m3；适用时 kg/m3 | 按批次或监测期记录水和废水体积。污染物质量只能由时间匹配的流量和浓度记录计算；法规或 BAT 浓度水平不是 LCI 数值。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在前景设施门接收的乳、奶油或有记录的乳/奶油中间品；声明物种、供应商、物理状态、具有实质影响时的温度、组成以及水分或总固形物基准。 |
| starting_condition_role | 上游乳业生产和任何供应商加工由关联上游数据集表示；前景始于场址接收、身份 gate 及对已声明进料的储存或处理。 |
| product_classification_scope | 仅限 CPC 3.0 代码 22219，且必须先通过剩余类别 gate，排除 CPC 22211、CPC 22212 和每个更具体的适用产品类别。 |
| recursive_input_rule | 购入投入若本身符合 CPC 22219，则只作为技术圈产品投入记录一次，关联兼容上游数据集并声明状态；除非其生产处于前景运营控制之下，否则不递归重建。 |
| upstream_dataset_requirement | 对接收乳料、添加配料或乳成分、电力、燃料或热、水供应、清洗化学品、包装材料、纳入研究范围的运输和废物处理提供可追溯上游数据集。 |
| disclosure | 说明物种、组成、接收进料状态、浓缩和干燥路线、纳入的场址过程、外包步骤、分配选择、返工、产品损失、监测覆盖、排除项，以及各投入属于原始数据、供应商特定数据或次级数据。 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_scope_gate` | 产品资格 | 建模前应用并保留 CPC 22219 gate。身份未解决或匹配 CPC 22211、CPC 22212 或其他更具体类别的产品不得使用本 PCR。 | `unsd-cpc-3-0-2025`; `codex-cxs-206-1999`; `codex-cxs-207-1999` |
| `boundary_foreground_operations` | 前景设施 | 纳入接收与 gate 记录、实际执行的配制或标准化、实际执行的浓缩、干燥、干燥后处理、包装、清洗、产品回收、场内废水或废物处理及受控直接排放。 | `eu-fdm-bat-2019` |
| `boundary_upstream_inputs` | 购入投入和服务 | 对跨越边界的全部环境相关乳料、配料、公用工程、化学品、包装、运输和处理服务关联上游数据集。 | `eu-pef-2021` |
| `boundary_complete_inventory` | 截断和遗漏 | 记录全部已知环境相关物料、能源、产品、共产品、废物和基本流。披露并论证每项遗漏；产品标准或 BAT 性能水平均不构成 LCI 截断授权。 | `eu-pef-2021`; `eu-fdm-bat-2019` |
| `boundary_route_disclosure` | 路线特定建模 | 对实际采用的膜浓缩、蒸发、喷雾干燥、滚筒干燥、冷冻干燥、流化床后处理、团聚或其他已声明路线分别保留记录。不得把未经核实的代表路线建模为场址事实。 | `eu-fdm-bat-2019` |
| `boundary_downstream_exclusion` | 默认工厂门研究 | 分销、零售、使用和生命末期不在默认前景边界内。只有在明确扩展研究范围时纳入，并单独报告。 | `eu-pef-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receipt_and_identity_gate` | 接收、储存和剩余类别身份 gate | `required` | 始终必需。 | 在生产建模前确定合格接收物料和产品身份。 | 每批 kg 合格乳料及实测组成 |
| `formulation_and_standardisation` | 配制和标准化 | `conditional` | 加入、移除、混合、分离或标准化乳成分、配料或物流时纳入。 | 确定进入浓缩或干燥的已声明进料组成。 | 每批 kg 配制进料及成分质量平衡 |
| `concentration` | 膜法或热浓缩 | `conditional` | 纳入前景边界内实际执行的每项膜法、蒸发或其他浓缩步骤；未浓缩时须声明。 | 脱除水并生产干燥机进料。 | 每批 kg 浓缩物及 kg 脱除水 |
| `drying` | 干燥和粉体回收 | `required` | 始终必需；识别实际干燥机和后处理阶段。 | 将已声明乳料转为散装固态产品，并控制粉尘和产品损失。 | 每批 kg 合格散装干燥产品 |
| `conditioning_and_packaging` | 干燥后处理和包装 | `required` | 工厂门产品始终必需；列出实际采用的全部后处理和包装步骤。 | 生产可销售净产品并核算包装。 | 1 kg 工厂门净合格产品 |
| `cleaning_and_environmental_control` | 清洗、废水、废物和排放控制 | `required` | 前景作业始终必需；处理可在场内进行，也可作为外部服务关联。 | 核算 CIP、清洗、产品回收、废水、废物和受控排放。 | 分配至同一生产批次或生产期的记录 |

### 过程：接收、储存和剩余类别身份 gate（`receipt_and_identity_gate`）

#### 输入

##### 产品流

###### 接收乳料（`received_dairy_feed`）

记录模型批次接收的每项乳、奶油或乳/奶油中间品，包括获准使用的退回或返工物料。

- 选定流：已声明乳、奶油或乳/奶油中间品
- 流属性/单位：质量 / kg
- 数量规则：按供应商批号和生产批次测得接收质量，并匹配组成及水分或总固形物记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_identity_and_composition`

###### 接收和冷藏用电（`receipt_electricity`）

记录前景运营控制下卸料、输送、冷却和储存的计量电力。

- 选定流：电力，声明供应商或电网组合
- 流属性/单位：能量 / kWh
- 数量规则：分表计量批次用电，或使用运行时间和有记录物理驱动量分配共享表用电
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_site_energy_records`
- 来源：`eu-pef-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 进入生产的合格乳料（`accepted_dairy_feed`）

只记录通过接收检查并放行至已声明生产路线的质量。

- 选定流：合格乳料
- 流属性/单位：质量 / kg
- 数量规则：实测放行质量，并与接收、退回、取样和拒收量核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每批放行至配制、浓缩或干燥的物料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_receipt_identity_and_composition`

##### 废物流

###### 拒收或退回接收物料（`rejected_received_material`）

记录生产前被拒收、退回、处置或改送的物料，并说明去向。

- 选定流：拒收乳料
- 流属性/单位：质量 / kg
- 数量规则：按处置记录测得质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每批合格乳料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_identity_and_composition`

##### 基本流

### 过程：配制和标准化（`formulation_and_standardisation`）

#### 输入

##### 产品流

###### 合格乳料（`standardisation_dairy_feed`）

记录进入分离、混合或标准化的合格进料。

- 选定流：合格乳料
- 流属性/单位：质量 / kg
- 数量规则：从接收过程实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每批配制进料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_and_standardisation`

###### 添加乳成分或配料（`added_constituents_and_ingredients`）

把每项添加乳成分、允许配料、留在产品中的加工助剂或其他配制投入作为单独底层清单项记录，并保留供应商身份。

- 选定流：已声明乳成分或配料
- 流属性/单位：质量 / kg
- 数量规则：由产品特定批次配方和领料记录获得的称量或计量添加量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每批配制进料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_and_standardisation`
- 来源：`eu-pef-2021`

###### 标准化用电（`standardisation_electricity`）

纳入本过程时，记录分离机、均质机、泵、混合机和换热辅助设备用电。

- 选定流：电力，声明供应商或电网组合
- 流属性/单位：能量 / kWh
- 数量规则：计量用电或根据设备运行记录分配共享表用电
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每批配制进料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_site_energy_records`
- 来源：`eu-pef-2021`; `eu-fdm-bat-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 进入浓缩或干燥的配制进料（`prepared_dairy_feed`）

记录交付至下一已声明步骤时配制进料的实测质量、组成和总固形物。

- 选定流：配制乳料
- 流属性/单位：质量 / kg
- 数量规则：实测转移质量，并匹配组成和总固形物结果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每批配制进料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_and_standardisation`

###### 分离乳物流或可销售共产品（`standardisation_coproduct`）

记录每项分离或输出乳物流及其组成、去向和经济状态；不得把可销售产出隐藏为废物。

- 选定流：已声明分离乳物流或共产品
- 流属性/单位：质量 / kg
- 数量规则：按批次实测质量和组成
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每批配制进料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_and_standardisation`

##### 废物流

###### 配制和转移损失（`standardisation_loss`）

记录未在其他位置表示的泄漏、管线滞留、不合格物料和未回收含产品残余物。

- 选定流：乳品残余物
- 流属性/单位：质量 / kg
- 数量规则：实测或批次质量平衡核对的损失，并说明去向
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每批配制进料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_formulation_and_standardisation`

##### 基本流

### 过程：膜法或热浓缩（`concentration`）

#### 输入

##### 产品流

###### 浓缩进料（`concentration_feed`）

记录进入每一浓缩阶段的进料质量、具有实质影响时的温度及总固形物组成。

- 选定流：配制乳料
- 流属性/单位：质量 / kg
- 数量规则：实测阶段进料质量，并匹配总固形物结果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每批浓缩物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_concentration_mass_energy_and_water`

###### 浓缩用电（`concentration_electricity`）

记录实际路线的泵、真空系统、机械蒸汽再压缩及其他电力负荷。

- 选定流：电力，声明供应商或电网组合
- 流属性/单位：能量 / kWh
- 数量规则：阶段分表用电或有记录的共享表分配量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每批浓缩物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_concentration_mass_energy_and_water`
- 来源：`eu-pef-2021`; `eu-fdm-bat-2019`

###### 浓缩热能（`concentration_thermal_energy`）

记录外购蒸汽或热，或燃料及场内直接产热，不得重复计算热回收。

- 选定流：已声明蒸汽、热或燃料投入
- 流属性/单位：能量或燃料质量/体积 / 原始单位及 MJ
- 数量规则：计量或发票批次用量，并记录换算和热回收处理
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每批浓缩物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_concentration_mass_energy_and_water`
- 来源：`eu-fdm-bat-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 进入干燥机的浓缩进料（`concentrated_dairy_feed`）

记录干燥机进料点的质量、水分或总固形物和组成。

- 选定流：浓缩乳料
- 流属性/单位：质量 / kg
- 数量规则：实测转移质量，并匹配批次分析
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每批浓缩物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_concentration_mass_energy_and_water`

###### 回收冷凝水或渗透液（`recovered_concentration_water`）

冷凝水或渗透液被回用或输出时，作为产品流记录，并声明质量、去向及任何处理。

- 选定流：回收水流
- 流属性/单位：质量或体积 / kg 或 m3
- 数量规则：按去向实测回收量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每批浓缩物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_concentration_mass_energy_and_water`
- 来源：`eu-fdm-bat-2019`

##### 废物流

###### 浓缩排出物或含产品废水（`concentration_reject`）

按实际处置记录膜排出流、未回收冷凝水、含产品废水和残余物。

- 选定流：浓缩排出物或含产品废水
- 流属性/单位：质量或体积 / kg 或 m3
- 数量规则：实测数量，并在相关时匹配组成或污染物记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每批浓缩物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_concentration_mass_energy_and_water`

##### 基本流

### 过程：干燥和粉体回收（`drying`）

#### 输入

##### 产品流

###### 干燥机进料（`dryer_feed`）

记录进入已声明干燥机的实际液态、浓缩或以其他方式配制的进料。

- 选定流：已声明乳品干燥机进料
- 流属性/单位：质量 / kg
- 数量规则：实测进料质量，并进行水分或总固形物分析
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每批合格散装干燥产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_batch_records`

###### 干燥用电（`drying_electricity`）

记录风机、雾化、泵、输送、流化床后处理、粉体回收及实际干燥机其他电力负荷。

- 选定流：电力，声明供应商或电网组合
- 流属性/单位：能量 / kWh
- 数量规则：干燥机和后处理分表用电，或有记录的共享表分配量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每批合格散装干燥产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_drying_batch_records`
- 来源：`eu-pef-2021`; `eu-fdm-bat-2019`

###### 干燥热能（`drying_thermal_energy`）

记录干燥路线和任何下游干燥设备实际使用的外购热、蒸汽或燃料，并披露回收能源扣除方式。

- 选定流：已声明热、蒸汽或燃料投入
- 流属性/单位：能量或燃料质量/体积 / 原始单位及 MJ
- 数量规则：计量或发票批次用量，记录换算且不重复计算回收能源
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每批合格散装干燥产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_drying_batch_records`
- 来源：`eu-fdm-bat-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格散装干燥产品（`bulk_dried_product`）

只记录批次组成和质量检查后放行至后处理或包装的干燥产品。

- 选定流：合格散装固态乳或奶油产品
- 流属性/单位：质量 / kg
- 数量规则：实测放行质量，并匹配水分或总固形物及组成结果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每干燥批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_batch_records`

###### 返回产品的回收粉体（`recovered_powder_to_product`）

只有质量放行允许返回同一批次或已声明返工池时，才记录从旋风器、过滤器或其他系统回收的粉体。

- 选定流：回收乳粉
- 流属性/单位：质量 / kg
- 数量规则：实测回收和放行质量，并记录内部循环处理以防重复计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每干燥批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_batch_records`

##### 废物流

###### 不合格或未回收干燥产品（`drying_product_loss`）

按去向记录不合格粉体、启停损失、未返回产品的过滤细粉和其他干燥残余物。

- 选定流：不合格乳粉或干燥残余物
- 流属性/单位：质量 / kg
- 数量规则：实测质量或批次质量平衡核对量，并说明去向
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每干燥批次
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_drying_batch_records`

##### 基本流

###### 有组织干燥粉尘排入空气（`drying_dust_to_air`）

由烟道测试或时间匹配的气体流量和浓度测量记录控制后的实际排放质量。BAT 排放水平是合规参考，不得替代场址 LCI 数据。

- 选定流：排入空气的颗粒物，实测时声明粒径组分
- 流属性/单位：质量 / kg
- 数量规则：所代表运行期间的实测或计算排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_emissions_and_effluent_monitoring`
- 来源：`eu-fdm-bat-2019`

### 过程：干燥后处理和包装（`conditioning_and_packaging`）

#### 输入

##### 产品流

###### 进入后处理的散装干燥产品（`conditioning_bulk_product`）

记录进入实际冷却、团聚、筛分、混合、储存和包装步骤的散装产品。

- 选定流：合格散装固态乳或奶油产品
- 流属性/单位：质量 / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每包装批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_and_packaging`

###### 包装材料（`packaging_materials`）

按材料和实际批次领料或物料清单记录每项初级、次级和运输包装组件。

- 选定流：已声明包装材料或组件
- 流属性/单位：质量 / kg
- 数量规则：产品特定包装物料清单，并与领用、退回和报废包装核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_and_packaging`
- 来源：`eu-pef-2021`

###### 后处理和包装用电（`packaging_electricity`）

记录冷却、输送、筛分、混合、采用时的惰性气体系统、前景控制的仓储及包装用电。

- 选定流：电力，声明供应商或电网组合
- 流属性/单位：能量 / kWh
- 数量规则：分表用电或依据场址记录的设备时间分配量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_site_energy_records`
- 来源：`eu-pef-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 工厂门参考产品（`reference_product_output`）

记录已放行合格产品的净质量。包装保留在系统清单中，但不计入该净质量。

- 选定流：其他固态乳和奶油，未另作规定的 `5f6f1d34-4370-4557-99b2-a84879462c51`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次归一化后 1 kg 净放行产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 后处理产品损失和包装废料（`packing_losses`）

在底层记录中分别记录未回收筛下细粉、泄漏、不合格包装产品和包装废料，并说明去向。

- 选定流：产品损失或包装废料，按材料分列
- 流属性/单位：质量 / kg
- 数量规则：实测批次处置量和包装核对量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_and_packaging`

##### 基本流

### 过程：清洗、废水、废物和排放控制（`cleaning_and_environmental_control`）

#### 输入

##### 产品流

###### 清洗和 CIP 用水（`cleaning_water`）

记录前景边界内设备清洗、CIP、冲洗、湿法排放控制和卫生作业用水。

- 选定流：工艺水
- 流属性/单位：质量或体积 / kg 或 m3
- 数量规则：计量清洗用水并分配至所代表批次或生产期
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_and_environmental_records`
- 来源：`eu-fdm-bat-2019`

###### 清洗和处理化学品（`cleaning_chemicals`）

记录实际消耗的每项清洗、消毒、中和和废水处理化学品。

- 选定流：已声明清洗或处理化学品
- 流属性/单位：质量 / kg
- 数量规则：领用、加药或采购记录，并核对浓度和溶液强度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_and_environmental_records`

###### 清洗和处理能源（`cleaning_and_treatment_energy`）

记录 CIP、卫生、空气污染控制、废水输送和场内处理的电力及热能，不得与过程仪表重复计算。

- 选定流：已声明电力、热、蒸汽或燃料投入
- 流属性/单位：能量或燃料质量/体积 / 原始单位及 kWh 或 MJ
- 数量规则：计量用量或由设备运行记录得到的有记录分配量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_and_environmental_records`
- 来源：`eu-fdm-bat-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 回收产品或可回用水（`recovered_cleaning_stream`）

记录清洗前回收的产品和任何回用或输出水流，并记录质量、去向和内部循环处理。

- 选定流：回收乳料或可回用水流
- 流属性/单位：质量或体积 / kg 或 m3
- 数量规则：按批次和去向实测数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_and_environmental_records`
- 来源：`eu-fdm-bat-2019`

##### 废物流

###### 送处理或排放的废水（`wastewater_output`）

记录模型所表示点位的废水体积、去向和时间匹配污染物测量值；区分未处理、预处理和最终出水。

- 选定流：乳品加工废水
- 流属性/单位：体积和污染物质量 / m3 和 kg
- 数量规则：用监测期实测流量和匹配浓度记录计算污染物质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_emissions_and_effluent_monitoring`
- 来源：`eu-fdm-bat-2019`

###### 处理污泥和其他受控废物（`treatment_residues`）

按实测质量、水分基准和去向记录污泥、废过滤器、未回收收集粉尘及其他处理残余物。

- 选定流：已声明处理残余物
- 流属性/单位：质量 / kg
- 数量规则：称重清运量或有记录的废物转移量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_and_environmental_records`

##### 基本流

###### 场内公用工程和处理的直接排放（`direct_site_emissions`）

只有跨越环境边界时，才记录场内燃料燃烧和处理产生的相关直接空气、水或土壤排放；底层清单中按污染物分列。

- 选定流：已声明直接基本排放
- 流属性/单位：质量 / kg
- 数量规则：直接测量，或由采集活动数据和有记录因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_emissions_and_effluent_monitoring`
- 来源：`eu-pef-2021`; `eu-fdm-bat-2019`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 多功能前景过程 | 首先使用独立仪表、批次记录和单元过程细分，直接归属投入、产出、废物和排放。只有附加功能和研究结果能一致报告时才考虑系统扩展。 | `eu-pef-2021` |
| `allocation_physical_relationship` | 不可分离共享作业 | 无法细分或系统扩展时，采用表示共享作业因果使用的可量化物理关系，例如实测设备时间、蒸发水负荷、干燥机进料固形物、净产品质量或占用储存体积-时间。记录驱动量和计算。 | `eu-pef-2021` |
| `allocation_other_relationship` | 剩余多功能性 | 只有不存在可辩护物理关系时才采用经济或其他关系。使用共生产点的同期价值，披露期间和敏感性，不得使用通用乳业分配因子。 | `eu-pef-2021` |
| `allocation_internal_recovery` | 回收粉体、冷凝水、渗透液、返工和可回用水 | 内部回收循环作为内部流处理，避免负担或抵扣重复计算。输出物流根据有记录去向和法规状态作为共产品或废物。 | `eu-fdm-bat-2019`; `eu-pef-2021` |
| `allocation_mass_balance_check` | 全部分配结果 | 将分配后的物料、能源、产品、共产品、废物和排放总量与未分配设施或批次记录核对。报告未分配残差及原因。 | `eu-pef-2021`; `eu-fdm-bat-2019` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receipt_identity_and_composition` | `receipt_and_identity_gate` | 接收、合格、拒收和退回乳料；身份 gate | 地磅、罐表、批号记录、产品规格、证书、实验室结果、处置记录 | 供应商批号；物种；商业名称；接收状态；质量；具有实质影响时的温度；水分或总固形物；脂肪；蛋白质；其他身份成分；配料；标准状态；gate 决定；去向 | 校准质量测量，加代表性批次取样和有记录分析方法；保留 gate 检查表及被排除备选类别。 | kg；kg/kg；已声明分析单位 | 每接收批号和生产批次 | 所代表批次或生产期的全部贡献批号 | 每供应场址和接收设施 | 只有批号身份和分析基准对齐后才汇总质量；分别保留加权组成和拒收质量。 | 校准、取样计划、实验室方法、证书、监管链及放行或拒收记录 |
| `cp_formulation_and_standardisation` | `formulation_and_standardisation` | 配制投入、配制进料、分离流和损失 | 配方、批次表、秤或流量计、分离机记录、实验室结果、领料、处置记录 | 成分身份；供应商批号；投入和产出质量；组成；总固形物；设备时间；分离物流；损失；去向 | 以一致湿质量和固形物基准，将配方领料及实测过程转移量与批次产出核对。 | kg；kg/kg；h | 每纳入批次 | 完整代表批次或生产期 | 每纳入产线和设施 | 归一化前计算每批成分和固形物平衡；不得跨实质不同配方平均。 | 批准配方、秤或仪表校准、实验室结果、批次核对及偏差记录 |
| `cp_concentration_mass_energy_and_water` | `concentration` | 进料、浓缩物、冷凝水或渗透液、排出物、电力和热 | 流量计、罐表、实验室结果、公用工程仪表、蒸汽表、燃料发票、运行日志 | 技术；阶段；进料和产出质量；水分或总固形物；电力；蒸汽或热；燃料；回收水；排出物；运行时间；热回收 | 对每个浓缩阶段同步采集物料和公用工程记录，并记录换算和回收能源处理。 | kg；kg/kg；m3；kWh；MJ；发票原始单位 | 每批次、仪表间隔和生产期 | 对数据集有贡献的全部浓缩运行 | 每纳入浓缩线和公用工程来源 | 核对阶段质量和固形物，再按有记录物理驱动量分配共享公用工程并归一化至净参考产品。 | 仪表校准、实验室结果、发票核对、设备日志及质量平衡审核 |
| `cp_drying_batch_records` | `drying` | 干燥机进料、能源、散装产品、回收粉体和干燥损失 | 批次表、进料和产品秤、水分分析、电力和热仪表、回收系统记录、废物记录 | 干燥技术；进料质量和固形物；产品质量和水分；电力；热或燃料；回收粉体；返工；不合格质量；运行时间 | 将进料、放行、公用工程、回收和处置记录同步到同一干燥批次或生产期。 | kg；kg/kg；kWh；MJ；h | 每干燥批次和仪表间隔 | 对代表产品有贡献的全部干燥运行 | 每纳入干燥机和后处理阶段 | 归一化前计算湿质量、固形物和脱水平衡；总产出不含内部再循环。 | 校准仪表和秤、分析方法、放行记录、返工追踪及批次质量平衡签核 |
| `cp_conditioning_and_packaging` | `conditioning_and_packaging` | 散装转移、净产品、包装、包装用电和损失 | 批次转移、检重秤、包装规格、材料领退、电表、废料和处置记录 | 散装投入；净放行产品；产品水分；包装组件和质量；包装单元；电力；产品损失；包装废料 | 将净包装产品和每项包装组件与批次领用、退回和废料核对。 | kg；件；kWh | 每包装批次 | 对数据集有贡献的全部包装批次 | 每包装线和包装配置 | 将包装和能源归一化至净产品质量；包装不计入 1 kg 参考数量。 | 检重秤核验、包装物料清单、仪表记录、库存核对和放行记录 |
| `cp_site_energy_records` | `receipt_and_identity_gate` | 共享和过程电力 | 分表、总表、发票、设备运行日志 | 仪表编号；时间间隔；kWh；供应商组合；设备；运行时间；批次；物理分配驱动量 | 优先采用过程分表；否则核对场址总表或发票，并只按有记录物理驱动量分配。 | kWh；h；驱动量特定单位 | 仪表间隔和每生产期 | 覆盖全部模型批次的代表性运行期 | 每纳入场址和电力来源 | 已分配过程电力加披露的未分配用电必须与同期场址总量核对。 | 仪表校准或核验、发票、供应商证据、运行日志和分配工作表 |
| `cp_cleaning_and_environmental_records` | `cleaning_and_environmental_control` | 水、清洗和处理化学品、能源、回收、废水、污泥和废物 | 水表、加药日志、化学品领料、CIP 日志、能源表、回收流日志、废物转移记录 | 水；化学品身份和强度；剂量；循环；电力；热；回收物料；废水；污泥；废物质量；去向 | 记录每次 CIP 或清洗循环及环保控制作业，区分可回用流、废水和废物。 | kg；m3；kWh；MJ；循环 | 每循环和监测间隔 | 服务于代表批次或生产期的全部作业 | 共享清洗只按有记录设备、循环或生产驱动量分配；可测时将水投入与回用、出水、滞留和损失核对。 | 校准仪表、加药核验、CIP 日志、废物联单、去向证据和水平衡审核 |
| `cp_emissions_and_effluent_monitoring` | `cleaning_and_environmental_control` | 干燥粉尘、废水污染物和场址直接排放 | 烟道测试、连续或定期监测、废水流量计、实验室结果、燃料记录、排放因子计算 | 来源；污染物；流量；浓度；取样时间；运行状态；处理状态；燃料活动量；因子；结果；检出限 | 时间匹配流量和浓度，或用采集活动数据及有记录因子计算；识别未处理、已处理和排放点。 | kg；m3；kg/m3；仪器原始单位 | 每项要求的监测事件和代表性运行期 | 与代表生产期对齐的期间 | 每个相关受控排放和排水点 | 换算为同期排放质量，再归一化至净产品；不得以许可或 BAT 限值替代测量。 | 适用时的认可方法、取样监管链、实验室 QA、仪器校准、运行日志和计算记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalisation` | 每个清单行 | 归一化数量 = 可归属至代表批次的数量 / 工厂门净合格产品质量；分母不含包装质量 | 可归属流数量；净放行产品质量 | 每 1 kg 参考产品的数量 | `eu-pef-2021` |
| `calc_product_specific_bom` | 配制和包装 | 由领用量减去退回量及另行记录废料，建立产品特定配料和包装物料清单；每项组件保留为底层流。 | 配方；领用；退回；废料；净产品 | 每 kg 净产品的组件 kg | `eu-pef-2021` |
| `calc_solids_and_water_balance` | 接收、配制、浓缩和干燥 | 对每个对齐批次，核对投入、产品、共产品、回收流、废水、粉尘、拒收物、滞留和已记录不确定性之间的湿质量及实测固形物；不得由 CXS 限值推断组成。 | 质量；水分或总固形物分析；回收和损失记录 | 批次固形物和水平衡及未解决残差 | `eu-fdm-bat-2019`; `eu-pef-2021` |
| `calc_shared_utility_assignment` | 共享电力、热、水、清洗、储存和处理 | 优先归属直接测量用量；否则用匹配设施总量乘以有记录物理驱动量份额。报告未分配用量，避免重复计算回收能源或内部循环。 | 设施总量；过程仪表；设备时间或其他因果驱动量；回收记录 | 每过程和批次的可归属公用工程量 | `eu-pef-2021`; `eu-fdm-bat-2019` |
| `calc_emission_mass` | 烟道和废水排放 | 排放质量 = 时间匹配流量或排水体积 × 实测浓度，并说明单位换算和处理点；或用采集活动量乘有记录来源因子。 | 流量或体积；浓度；活动量；因子；时间对齐 | 每代表期间及每 kg 产品的污染物 kg | `eu-fdm-bat-2019`; `eu-pef-2021` |
| `calc_allocation_reconciliation` | 多功能过程 | 汇总全部产出的直接归属和分配负担，并与同期未分配过程总量比较；披露分配驱动量、残差及采用其他关系时的敏感性。 | 过程总量；直接归属；产出量；分配驱动量 | 按产出核对的负担 | `eu-pef-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_scope_identity` | 产品资格 | 保留 CPC gate 决定、商业身份、物种、物料清单、组成、适用标准决定，以及排除 CPC 22211、CPC 22212 和其他具体类别的理由。 | 产品规格、标签或销售说明、批次配方、实验室结果、供应商证据及签署的 gate 审核 |
| `dq_route_specificity` | 过程图 | 识别接收进料状态及每项实际配制、分离、浓缩、干燥、后处理、回收和处理技术；不得以代表性奶油粉路线替代未经核实的场址事实。 | 过程流程图、设备清单、操作规程、批次表和场址确认 |
| `dq_temporal_alignment` | 全部前景记录 | 采用覆盖同一批次、生产期或有理由的代表期间的记录。说明参考年、季节性、停机、异常运行和被排除批次。 | 带时间戳的批次、仪表、实验室、发票、维护和偏差记录 |
| `dq_completeness` | 物料、能源、废物和排放 | 在过程和场址层面核对全部已知投入和产出，包括内部回收、返工、损失、废水、粉尘、包装和直接排放。列出每个数据缺口或遗漏。 | 产品和固形物平衡、公用工程核对、水平衡、废物联单、排放清单和完整性检查表 |
| `dq_measurement_quality` | 实测和计算数量 | 记录仪器身份、校准或核验、取样、分析方法、适用时的检出限、单位换算和计算版本。 | 校准证书、取样计划、实验室 QA、仪表检查、发票和计算工作表 |
| `dq_representativeness` | 前景和上游数据集 | 对重要数据集评估技术、地理和时间代表性、精度、完整性、方法一致性、文档、命名法和审核。 | 与研究目标一致的数据质量评估和来源元数据 |
| `dq_no_limit_as_inventory` | 标准和 BAT 引用 | 产品标准规定和 BAT 水平只用于适用性、规格或 QA 语境。不得把它们作为实测组成、资源用量、废水、粉尘或其他 LCI 数量。 | 来源用途审核，证明每项数值清单数据来自场址、批次、供应商、数据集或有记录因子记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_residual_gate` | 产品身份 | 数据集未记录 CPC 22219 正向 gate 结果，并明确排除 CPC 22211、CPC 22212 和每个其他合理具体类别时，校验失败。 | `unsd-cpc-3-0-2025` |
| `validate_required_qualifiers` | 参考流 | 缺少商业名称、物种、实测组成基准、配料或成分、适用标准决定、接收进料状态、浓缩路线、干燥技术、批次、场址或时间期间时，校验失败。 | `codex-cxs-206-1999`; `codex-cxs-207-1999` |
| `validate_reference_mass` | 参考产品 | 定量参考必须使用规定 Mass 流属性和单位组等于 1 kg 净合格产品；包装须列清单，但从净质量中排除。 | `eu-pef-2021` |
| `validate_process_route` | 过程图和清单 | 必须包含接收与 gate、干燥、后处理和包装、清洗和环境控制。配制和浓缩必须与已声明路线一致，实际执行时不得静默遗漏。 | `eu-fdm-bat-2019` |
| `validate_product_specific_records` | 前景清单 | 要求产品特定 BOM、制造活动、组成和放行记录时，拒绝通用或标准限值推导的清单。 | `eu-pef-2021`; `codex-cxs-207-1999` |
| `validate_mass_and_solids` | 批次平衡 | 要求覆盖产品、共产品、回收流、返工、损失、废水、粉尘和已声明残余不确定性的湿质量和乳固形物核对。 | `eu-fdm-bat-2019`; `eu-pef-2021` |
| `validate_energy_water_emissions` | 公用工程和直接流 | 要求电力、热或燃料、水、清洗化学品、废水、粉尘和其他实质直接排放的场址或批次记录。BAT 或许可限值不可作为 LCI 数值。 | `eu-fdm-bat-2019`; `eu-pef-2021` |
| `validate_allocation` | 多功能性 | 核验先细分或系统扩展、再物理关系、最后其他已披露关系的层级；要求与未分配总量核对并防止内部回收重复计算。 | `eu-pef-2021` |
| `validate_upstream_linkage` | 购入物料和服务 | 对乳料、配料、公用工程、化学品、包装、范围内运输和处理服务，要求可追溯上游数据集及状态、地理、时间、技术和质量元数据。 | `eu-pef-2021` |
| `validate_data_quality_and_gaps` | 数据集发布 | 要求时间覆盖、校准和分析证据、代表性评估、完整性审核、排除项和数据缺口披露及更新触发条件。 | `eu-pef-2021`; `eu-fdm-bat-2019` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 针对一个已声明 CPC 22219 固态乳或奶油产品及工厂门路线的产品特定前景生产数据集。 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 只有产品通过同一剩余类别 gate，且物种、组成、接收进料状态、技术、地理、时间、分配和包装条件匹配时，才可用作工厂门前景数据集或经审核背景数据集。 |
| excluded_use | 不得用于全脂奶粉、脱脂乳粉、乳清粉、液态产品、其他具体分类乳品、未经核实配方、通用乳粉平均值或未建模下游阶段。 |
| required_metadata | PCR id；CPC gate 及被排除备选类别；产品和商业名称；物种；物料清单；实测组成和基准；适用标准；场址和地理；参考期间；接收进料状态；浓缩和干燥路线；过程图；分配；包装；上游数据集引用；采集和计算协议版本。 |
| required_quality_disclosure | 每项重要流的数据来源；仪表和实验室覆盖；技术、地理和时间代表性；精度；完整性；质量、固形物、公用工程和水平衡；直接排放监测；分配驱动量；数据缺口；排除项；偏差；审核状态。 |
| update_trigger | 产品身份或分类变化；物种、配方、组成、供应商进料状态、浓缩或干燥技术、回收、包装、场址、分配、监测方法、产品标准或来源证据发生实质变化；或代表数据期间不再反映正常生产时，重新评估并更新。 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | `official_guidance` | 联合国统计司，《Central Product Classification Version 3.0 structure》，2025-06-30，官方源文件：https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期 2026-06-23） | CPC 22219 剩余叶身份，以及排除具名兄弟叶 CPC 22211 和 CPC 22212。 |
| `codex-cxs-206-1999` | `standard` | Codex Alimentarius，CXS 206-1999，《General Standard for the Use of Dairy Terms》。 | 仅用于乳品术语适用性和产品身份 gate；不提供 LCI 数量。 |
| `codex-cxs-207-1999` | `standard` | Codex Alimentarius，CXS 207-1999，《Standard for Milk Powders and Cream Powder》。 | 仅在具体产品适用时用于范围和规格判定；组成规定不外推至 CPC 22219，也不作为 LCI 数量。 |
| `eu-pef-2021` | `official_guidance` | 欧盟委员会建议 (EU) 2021/2279，环境足迹方法，CELEX 32021H2279：https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279（检索日期 2026-08-12） | 产品特定物料清单和制造数据、完整 LCI、企业特定数据、分配层级、数据质量、包装和披露。 |
| `eu-fdm-bat-2019` | `official_guidance` | 欧盟委员会执行决定 (EU) 2019/2031，食品、饮料和乳品行业 BAT 结论，CELEX 32019D2031：https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019D2031（检索日期 2026-08-12） | 乳品过程分解、资源和排放清单、浓缩与干燥路线披露、清洗、废水、粉尘、监测和记录质量要求；BAT 水平不作为 LCI 数值。 |
