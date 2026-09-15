---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.tubes-and-pipes-of-non-circular-cross-section-and-hollow-profiles-seamless-of-steel
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 无缝非圆形截面钢管和空心异型材

## 1. 范围与适用性

本 PCR 适用于成品截面为非圆形、管壁不含纵向或螺旋焊缝的钢管、管道及空心型材的工厂门生产。适用产品以实心钢坯或钢棒为原料，经穿孔或挤压、延伸、定径或成形及精整制成。前景数据包必须说明合金类别和钢级，不得以非合金钢路线代替合金钢产品路线而不作说明。

圆形无缝钢管、焊接钢管或空心型材、离心铸钢管及铸铁管不属于本产品边界。下游部件制造、安装、使用、维修和生命末期阶段不包括在内。若涂层、镀锌、机加工或其他表面处理在声明的工厂门之前实施，则应纳入边界，并以独立过程及原子交换表示，不得并入下述两个核心过程清单而不作区分。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.tubes-and-pipes-of-non-circular-cross-section-and-hollow-profiles-seamless-of-steel |
| classification_refs | CPC 3.0：41284，精确分类身份 |
| covered_products | 工厂门声明销售状态下，截面为方形、矩形、椭圆形、多边形或其他非圆形的无缝钢管、管道和空心型材 |
| excluded_products | 圆形无缝钢管；焊接钢管或空心型材；离心铸钢管；铸铁管；下游已安装部件和制造组件 |
| representative_product | 满足声明钢级、尺寸、公差、热处理状态和表面状态要求的无缝矩形或其他非圆形钢制空心型材成品 |
| production_route | 接收实心钢坯或钢棒；再加热；穿孔或挤压；延伸；非圆形定径或成形；冷却；路线特定热处理；矫直、切割、检验、标记和出厂 |
| market_state | 制造场址工厂门处的可销售成品；明确说明包装是否计入以及是否已实施涂层或表面处理 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产具有声明非圆形截面和声明技术规范的无缝钢管、管道或空心型材 |
| How much | 制造场址工厂门处 1 kg 可销售产品 |
| How well | 符合声明的钢级、截面几何形状、尺寸及公差、热处理状态、表面状态和适用产品规范 |
| How long or cycle | 工厂门处一个生产输出；不表示使用阶段寿命 |
| reference_flow_link | 该功能单位由下述单一参考产品流实现 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 无缝非圆形截面钢管和空心异型材 `13a951fc-19a6-4ff3-98a7-9cb44ed2db2f` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 钢的合金类别和钢级；非圆形截面几何形状；外形尺寸和壁厚；尺寸公差或产品标准；热处理状态；表面状态和涂层状态；生产技术；工厂门位置；生产年份；包装是否计入 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass_basis` | 参考产品及全部质量平衡行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 干基或交付状态质量必须保持一致；应声明氧化铁皮和废钢采用的质量基准，并将可销售产品输出归一化为恰好 1 kg。 |
| `electricity_energy_basis` | 交流电投入 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 在计算记录中保留电表原始单位和换算系数；换算为 MJ 时不得改变所选电力身份，也不得将电力与燃料合并。 |
| `gas_volume_basis` | 气态天然气投入 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 应记录仪表参比状态、气体组成或供应商规范；发票或仪表采用其他体积或能量基准时，应记录换算方法。 |

## 5. 系统边界

前景边界始于接收钢坯或实心钢棒，终止于制造场址工厂门处合格、可销售的无缝非圆形截面钢管或空心型材。边界包括内部搬运、坯料准备、再加热、穿孔或挤压、延伸、定径或成形、冷却、路线特定热处理、矫直、切割、检验、标记，以及可归属于产品的场内辅助服务。钢坯、电力、燃料、水及其他单独加入的耗材的上游生产和运输应链接背景数据集。跨越前景边界的直接排放、废物和回收材料应分别记录为原子交换。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在无缝空心型材制造场址接收的钢坯或实心钢棒，并声明钢级、质量、适用时的含水或表面基准、供应商、来源及运输交接点 |
| starting_condition_role | 第一个前景热成形过程的上游产品投入 |
| product_classification_scope | 成品截面为非圆形的无缝钢管、管道和空心型材；圆形、焊接、离心铸造及铸铁产品不在范围内 |
| recursive_input_rule | 若购入投入已经属于同一产品类别的无缝非圆形钢管或空心型材，则仅作为具有自身数据集的上游产品建模，并从报告场址实施的第一项转化开始前景采集；不得重复供应商先前工序。 |
| upstream_dataset_requirement | 钢坯或钢棒、交流电、天然气、工艺用水及每项单独加入的耗材均应采用在地理和技术方面具有代表性的上游数据集；经核实的供应商特定数据应予保留。 |
| disclosure | 声明钢坯或钢棒状态、已知时的炼钢路线、合金类别和钢级、穿孔或挤压技术、成形顺序、热处理、表面处理、内部回收、包装是否计入、地理范围、参考年份及确切工厂门。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground_system | 纳入从接收钢坯或实心钢棒至制造场址工厂门处可销售成品的全部操作，以及可归属的场内辅助服务；排除下游安装、使用和生命末期。 | `worldsteel-lci-methodology-2017`; `worldsteel-lci-study-2021` |
| `boundary_atomic_completeness` | all_foreground_processes | 跨越前景过程边界的每项材料、能源、废物、回收材料和直接基本流交换均应单独记录为原子行；任何经核实的排除均须说明。 | `worldsteel-lci-methodology-2017`; `eu-jrc-fmp-bref-2022` |
| `boundary_no_double_count` | upstream_and_internal_recovery | 不得在前景和上游数据集之间重复计算供应商工序、内部循环的中间产品、回收的氧化铁皮或废钢、废水处理或回收信用。 | `worldsteel-lci-methodology-2017` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `hot_forming_and_sizing` | 钢坯再加热、穿孔或挤压、延伸和非圆形定径 | `required` | 纳入场址从接收实心坯料至形成热成形无缝非圆形空心型材的实际工序顺序。 | 前景热成形 | 每 kg 转入精整的热成形型材 |
| `finishing_and_dispatch` | 冷却、热处理、矫直、切割、检验、标记和出厂 | `required` | 纳入声明工厂门之前实施的全部精整工序；仅在未采用直接燃烧供热时，才可将直接燃烧供热行标为不适用。 | 前景精整和参考产品生产 | 每 1 kg 可销售参考产品 |

### 过程：钢坯再加热、穿孔或挤压、延伸和非圆形定径（`hot_forming_and_sizing`）

#### 输入

##### 产品流

###### 声明钢级的实心钢坯料（`hf_steel_billet`）

记录进入无缝成形线的具体钢坯或实心钢棒质量。数据集应说明合金类别、钢级、几何形状、供应状态，以及上游是否实施表面处理。

- 选定流：声明钢级钢坯
- 流属性/单位：Mass / kg
- 数量规则：计量投入过程的接收状态质量，并与生产和库存记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 热成形无缝非圆形空心型材输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hot_forming_material_balance`
- 来源：`worldsteel-lci-study-2021`; `eu-jrc-fmp-bref-2022`

###### 钢坯再加热用天然气（`hf_natural_gas`）

记录供应至再加热或直接燃烧热成形设备的气态天然气。若未使用天然气，应记录不适用证据，并将每种实际燃料分别作为原子交换加入。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：计量或开票的可归属热成形天然气体积，并保留仪表参比状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 热成形无缝非圆形空心型材输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hot_forming_energy`
- 来源：`worldsteel-lci-methodology-2017`; `eu-jrc-fmp-bref-2022`

###### 热成形用交流电（`hf_electricity`）

记录坯料搬运、穿孔或挤压、延伸、定径、泵、风机及分配的辅助设备所耗电力，不得与燃料合并。

- 选定流：交流电 `8bfc48b1-c262-4156-a817-b2c8a1b21598`
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量可归属于热成形的电力，并采用披露的换算方法转换为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 热成形无缝非圆形空心型材输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hot_forming_energy`
- 来源：`worldsteel-lci-methodology-2017`; `eu-jrc-fmp-bref-2022`

###### 热成形工艺用水（`hf_process_water`）

记录用于除鳞、冷却及其他热成形用途的补充工艺用水；应从总循环量中扣除有记录的闭路循环量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量跨越过程边界的补充水；采用密度换算时应记录换算依据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 热成形无缝非圆形空心型材输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hot_forming_water`
- 来源：`worldsteel-lci-methodology-2017`; `eu-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入精整的热成形无缝非圆形空心型材（`hf_hot_formed_profile_output`）

记录在最终热处理、矫直、切割、检验和出厂之前从热成形转入精整的计量质量。该流是场址特定内部中间产品，并非可销售参考产品。

- 选定流：热成形无缝非圆形钢制空心型材
- 流属性/单位：Mass / kg
- 数量规则：计量由精整过程接收的转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 热成形无缝非圆形空心型材输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hot_forming_material_balance`
- 来源：`worldsteel-lci-study-2021`

##### 废物流

###### 热成形过程中去除的氧化铁皮（`hf_mill_scale`）

记录从产品或水系统中分离并跨越过程边界的氧化铁皮。应声明含水率、含油量以及回收或处置去向。

- 选定流：氧化铁皮 `aad763e2-78ab-4fcb-8a3b-8d8525c9e6ca`
- 流属性/单位：Mass / kg
- 数量规则：按声明湿基或干基计量离开热成形过程的氧化铁皮质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 热成形无缝非圆形空心型材输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hot_forming_material_balance`
- 来源：`worldsteel-lci-methodology-2017`; `eu-jrc-fmp-bref-2022`

###### 热成形产生的工业后钢制切头和边角料（`hf_steel_scrap`）

将在精整之前产生的钢制切头和废品记录为工业后钢废料。去向记录应区分场内回炉材料和场外废钢转移。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：计量热成形产生并离开本过程边界的废钢质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 热成形无缝非圆形空心型材输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hot_forming_material_balance`
- 来源：`worldsteel-lci-methodology-2017`

##### 基本流

###### 热成形燃烧产生的化石源二氧化碳（`hf_fossil_co2`）

记录热成形设备燃料燃烧直接排入空气的化石源二氧化碳。排除上游电力排放，并保留燃料碳计算或烟气测量证据。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：直接烟气计量质量，或根据化石燃料计量值和有记录的碳平衡计算质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 热成形无缝非圆形空心型材输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hot_forming_emissions`
- 来源：`worldsteel-lci-methodology-2017`; `eu-jrc-fmp-bref-2022`

### 过程：冷却、热处理、矫直、切割、检验、标记和出厂（`finishing_and_dispatch`）

#### 输入

##### 产品流

###### 热成形过程转入的无缝非圆形空心型材（`fd_hot_formed_profile_input`）

记录进入精整的内部热成形型材计量质量。考虑已声明库存变化后，其身份和数量应与 `hf_hot_formed_profile_output` 相符。

- 选定流：热成形无缝非圆形钢制空心型材
- 流属性/单位：Mass / kg
- 数量规则：计量精整过程接收的转移质量，仅按有记录的库存变化调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_material_balance`
- 来源：`worldsteel-lci-study-2021`

###### 精整用交流电（`fd_electricity`）

记录冷却系统、矫直、切割、无损检测、泵、标记及分配的辅助设备所耗电力，不得与热或燃料合并。

- 选定流：交流电 `8bfc48b1-c262-4156-a817-b2c8a1b21598`
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量可归属于精整的电力，并采用披露的换算方法转换为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_energy`
- 来源：`worldsteel-lci-methodology-2017`; `eu-jrc-fmp-bref-2022`

###### 直接燃烧精整供热用天然气（`fd_natural_gas`）

仅在声明路线包含直接燃烧热处理或其他精整炉时记录气态天然气。无天然气的路线应记录不适用证据；采用其他燃料时，每种实际燃料应分别作为交换加入。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：计量或开票的可归属精整供热天然气体积，并保留仪表参比状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_energy`
- 来源：`worldsteel-lci-methodology-2017`; `eu-jrc-fmp-bref-2022`

###### 冷却和产品试验用工艺用水（`fd_process_water`）

当精整冷却、水压试验或清洗使用的补充工艺用水跨越精整边界时予以记录。不得将闭路系统总循环量作为补充水报告。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量可归属于精整的补充水，并记录用途和密度换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_water`
- 来源：`worldsteel-lci-methodology-2017`; `eu-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可销售无缝非圆形钢管或空心型材（`fd_reference_product`）

仅记录声明工厂门处的合格可销售产品。其数量即参考流，不包括废品、切头和单独转移的废钢。

- 选定流：无缝非圆形截面钢管和空心异型材 `13a951fc-19a6-4ff3-98a7-9cb44ed2db2f`
- 流属性/单位：Mass / kg
- 数量规则：计量可销售产品质量并归一化为恰好 1 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_material_balance`
- 来源：`un-cpc-3-0-structure-2025`; `worldsteel-lci-study-2021`

##### 废物流

###### 精整产生的工业后钢制边角料和废品（`fd_steel_scrap`）

记录离开精整过程的切头、试样和废品，并将其作为工业后钢废料。应声明钢级、污染情况、内部循环和场外回收去向。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：计量离开过程边界的精整废钢质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_material_balance`
- 来源：`worldsteel-lci-methodology-2017`

##### 基本流

###### 直接燃烧精整供热产生的化石源二氧化碳（`fd_fossil_co2`）

记录精整过程中天然气或其他化石燃料燃烧直接排入空气的化石源二氧化碳。未使用直接化石燃料时标为不适用；排除上游电力排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：直接烟气计量质量，或根据化石燃料计量值和有记录的碳平衡计算质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_emissions`
- 来源：`worldsteel-lci-methodology-2017`; `eu-jrc-fmp-bref-2022`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | foreground_processes | 优先通过计量和过程细分避免分配；在技术可行时，应分别计量热成形、精整、辅助能源、水处理和回收操作。 | `worldsteel-lci-methodology-2017` |
| `allocation_internal_recovery` | internal_scale_scrap_and_intermediates | 内部转移应记录为相互匹配的输出和输入，不给予外部信用；仅跨越场址边界的净量可链接上游处理或回收数据集。 | `worldsteel-lci-methodology-2017` |
| `allocation_exported_coproduct` | exported_material_with_market_function | 氧化铁皮、废钢或其他材料以有记录的市场功能离开场址时，优先采用功能等效替代产品进行系统扩展并披露替代关系；若适用项目规则禁止系统扩展，则采用有依据的物理关系并报告敏感性。 | `worldsteel-lci-methodology-2017` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_hot_forming_material_balance` | `hot_forming_and_sizing` | 钢坯投入、中间产品输出、氧化铁皮和废钢 | 地磅、秤、生产及库存记录 | 时间戳；批次；钢级；投入质量；中间产品质量；氧化铁皮质量及基准；废钢质量；库存变化；去向 | 经校准称量和批次核对 | kg | 每批采集并按月核对 | 至少一个有代表性的生产年度 | 报告的热成形生产线 | 汇总验收记录，按核实的库存变化调整，再除以热成形输出 | 校准记录；批次核对；钢级追溯；去向记录 |
| `cp_hot_forming_energy` | `hot_forming_and_sizing` | 天然气和交流电 | 燃气表、电表和生产记录 | 计量周期；期初和期末读数；参比状态；电力单位；换算系数；分配基准；输出质量 | 经校准分表或有记录的总表分配 | m3 和 MJ | 按计量周期采集并按月核对 | 与生产相同的代表年度 | 报告生产线及可归属共用设备 | 扣除非生产用量，按记录分配共用量，各能源载体分别除以热成形输出 | 仪表校准；发票核对；分配工作表 |
| `cp_hot_forming_water` | `hot_forming_and_sizing` | 工艺补充水 | 水表和循环水系统记录 | 补充水体积或质量；密度；总循环量；排污；过程归属；输出质量 | 经校准补充水表；不得采用闭路总循环量 | kg | 按计量周期采集并按月核对 | 与生产相同的代表年度 | 热成形水系统 | 必要时按有记录的密度换算，仅汇总补充水，并除以热成形输出 | 仪表校准；水平衡；系统图 |
| `cp_hot_forming_emissions` | `hot_forming_and_sizing` | 直接化石源二氧化碳 | 烟气监测或燃料碳计算记录 | 烟气结果或燃料量；碳含量；氧化系数；周期；设备；输出质量 | 经核实烟气测量或基于计量化石燃料的碳平衡 | kg | 监测周期或燃料核算周期 | 与生产相同的代表年度 | 热成形直接燃烧源 | 仅汇总直接化石源二氧化碳，并除以热成形输出 | 监测报告；燃料证书；计算工作表 |
| `cp_finishing_material_balance` | `finishing_and_dispatch` | 中间产品投入、可销售产品和废钢 | 生产、称量、检验和库存记录 | 时间戳；批次；钢级；中间产品质量；可销售质量；废钢质量；库存变化；处置 | 经校准称量和批次核对 | kg | 每批采集并按月核对 | 至少一个有代表性的生产年度 | 报告的精整生产线 | 核对投入、可销售产品、废钢和库存变化；归一化为 1 kg 可销售产品 | 校准记录；检验放行；核对记录；钢级追溯 |
| `cp_finishing_energy` | `finishing_and_dispatch` | 交流电和路线特定天然气 | 燃气表、电表、炉窑日志和生产记录 | 计量周期；读数；参比状态；热处理路线；电力单位；换算系数；输出质量 | 经校准分表或有记录的总表分配 | m3 和 MJ | 按计量周期采集并按月核对 | 与生产相同的代表年度 | 精整生产线及可归属共用设备 | 电力与天然气分开；仅凭路线证据将天然气标为不适用；各能源载体除以可销售输出 | 仪表校准；发票核对；炉窑日志；分配工作表 |
| `cp_finishing_water` | `finishing_and_dispatch` | 工艺补充水 | 水表、试验区和循环系统记录 | 补充水体积或质量；密度；用途；总循环量；排污；输出质量 | 按冷却、清洗或试验归属的经校准补充水表 | kg | 按计量周期采集并按月核对 | 与生产相同的代表年度 | 精整和试验水系统 | 汇总跨越边界的补充水，并除以可销售输出 | 仪表校准；水平衡；试验记录 |
| `cp_finishing_emissions` | `finishing_and_dispatch` | 直接化石源二氧化碳 | 烟气监测或燃料碳计算记录 | 烟气结果或燃料量；碳含量；氧化系数；周期；设备；输出质量 | 经核实烟气测量或基于计量化石燃料的碳平衡 | kg | 监测周期或燃料核算周期 | 与生产相同的代表年度 | 精整直接燃烧源 | 仅汇总直接化石源二氧化碳；未使用直接化石燃料时标为不适用 | 监测报告；燃料证书；计算工作表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_process_rows` | 每个清单行 | 归一化数量 = 经核实周期或批次交换量除以匹配的过程输出；最终过程各行再按 1 kg 可销售产品表示。 | 交换记录；过程输出；库存变化；适用时的换算系数 | 各行声明单位下每过程输出或参考流的数量 | `worldsteel-lci-methodology-2017`; `worldsteel-lci-study-2021` |
| `calc_intermediate_reconciliation` | `hf_hot_formed_profile_output`; `fd_hot_formed_profile_input` | 精整投入 = 热成形输出 + 中间产品期初库存 - 期末库存 - 精整之前单独记录的损失。 | 两过程转移记录；中间产品库存记录；有记录损失 | 核对后的中间产品转移质量 | `worldsteel-lci-methodology-2017` |
| `calc_fossil_co2` | `hf_fossil_co2`; `fd_fossil_co2` | 优先采用经核实的烟气质量；否则根据计量化石燃料、有记录的碳含量和氧化基准计算直接化石源 CO2，并将生物源碳和上游排放分开。 | 烟气测量或燃料量；碳含量；氧化基准；输出质量 | 每过程输出的化石源 CO2 kg | `worldsteel-lci-methodology-2017`; `eu-jrc-fmp-bref-2022` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 参考产品和钢投入 | 保留钢级、合金类别、截面几何形状、壁厚、产品标准或公差、热处理、表面状态、批次、供应商和工厂门追溯信息。 | 材质证书；批次流转卡；检验放行；产品规范 |
| `dq_temporal_representativeness` | 全部前景记录 | 在可行时采用有代表性的年度周期；早于五年的记录或较短周期应提供有记录的代表性说明。 | 周期覆盖报告；生产计划；例外说明；`worldsteel-lci-methodology-2017` |
| `dq_meter_and_balance_quality` | 材料、能源、水和排放 | 优先采用测量数据，保留校准和换算记录，并在过程层面实施质量、碳、能源载体和水的平衡检查。 | 校准证书；核对工作表；平衡检查；`worldsteel-lci-methodology-2017`; `eu-jrc-fmp-bref-2022` |
| `dq_geography_technology` | 前景和上游数据集 | 匹配前景技术和地理范围；电力及其他上游数据集应采用代表报告周期的供应商或区域数据，并披露有依据的代理数据。 | 技术说明；场址位置；供应商记录；上游数据集元数据 |
| `dq_complete_atomic_inventory` | 全部前景过程 | 每项额外实际燃料、耗材、废物、回收材料以及监测或许可报告中的基本流排放均应作为独立原子交换加入；不得以统称行代替。 | 采购台账；工艺配方；废物联单；许可报告；完整性检查表 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference_flow | 确认产品为钢制、无缝且非圆形；若参考输出为圆形、焊接、离心铸造、铸铁，或缺少钢级和尺寸状态，则拒绝该数据集。 | `un-cpc-3-0-structure-2025`; `worldsteel-lci-study-2021` |
| `validate_mass_reconciliation` | both_foreground_processes | 核对钢坯或中间产品投入、可销售或转移输出、氧化铁皮、废钢、其他原子材料输出和库存变化；调查并披露任何差额。 | `worldsteel-lci-methodology-2017` |
| `validate_energy_separation` | energy_inputs | 电力、天然气及每种其他实际能源载体必须分别表示，并具有一致换算、路线适用性和上游数据集，且不得重复计算。 | `worldsteel-lci-methodology-2017`; `eu-jrc-fmp-bref-2022` |
| `validate_emission_scope` | direct_emissions | 确认直接化石源二氧化碳不含上游电力排放；每项其他已报告的直接空气、水或土壤排放均应作为独立基本流加入。 | `worldsteel-lci-methodology-2017`; `eu-jrc-fmp-bref-2022` |
| `validate_intermediate_transfer` | internal_intermediate | 确认 `hf_hot_formed_profile_output` 和 `fd_hot_formed_profile_input` 采用相同身份、钢级、单位和库存调整后数量，且不会作为外部生产重复计算。 | `worldsteel-lci-methodology-2017` |
| `validate_range_status` | important_inventory_rows | 在至少两项相互独立、边界兼容的原始来源或经审查的前景分布提供支持之前，不得将前景值作为有来源支持的典型值或 QA 范围。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 指定无缝非圆形钢管、管道或空心型材的前景工厂门生产数据集 |
| downstream_use | 经方法审查和发布后可作为 `secondary_dataset`；`background_dataset` |
| allowed_use | 需要质量基准工厂门钢制空心型材投入，且保留声明钢级、几何形状、路线、地理、时间、分配和回收假设的产品碳足迹与 LCA 模型 |
| excluded_use | 在功能不等效或边界未协调时直接比较不同钢级、形状、工厂或技术；使用阶段性能；下游制造；未披露地替代圆形或焊接钢管 |
| required_metadata | PCR id 和版本；参考 UUID；钢的合金类别和钢级；截面几何形状和尺寸；产品标准或公差；路线；热处理；表面状态；涂层和包装是否计入；场址和地理；参考年份；工厂门；分配；上游数据集版本；未解决 UUID 和范围状态 |
| required_quality_disclosure | 数据覆盖；仪表和秤校准；质量与碳核对；分配或替代；内部回收；上游代表性；排除项；代理数据；不确定性；审查状态 |
| update_trigger | 钢级类别、钢坯来源或炼钢路线、穿孔或挤压技术、成形或热处理路线、能源或水系统、回收去向、分配方法、工厂门、地理范围或代表生产周期发生变化 |

## 11. 数据源

| 来源 id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，《CPC 3.0 版结构》，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-04） | CPC 41284 精确分类身份和产品边界术语 |
| `worldsteel-lci-methodology-2017` | `official_guidance` | 世界钢铁协会，《生命周期清单方法报告》，2017，https://worldsteel.org/media/publications/lci-report-2017-pdf/?do_download_id=7f96813a-3756-4842-8dbc-38ce201f2914（检索日期：2026-09-04） | 声明单位、工厂门边界、前景清单、数据采集、质量、校验、回收和分配规则 |
| `worldsteel-lci-study-2021` | `dataset` | 世界钢铁协会，《生命周期清单研究报告（2021 年数据发布）》，https://worldsteel.org/wp-content/uploads/2021-LCA-Study-Report.pdf（检索日期：2026-09-04） | 1 kg 工厂门生产基准，以及采用穿孔或挤压并继续成形的无缝管工艺说明 |
| `eu-jrc-fmp-bref-2022` | `official_guidance` | 欧盟委员会联合研究中心，《黑色金属加工行业最佳可行技术参考文件》，EUR 31321 EN，JRC131649，doi:10.2760/196475，https://publications.jrc.ec.europa.eu/repository/handle/JRC131649（检索日期：2026-09-04） | 热轧过程边界；能源、水、排放、废物、监测和技术披露 |
