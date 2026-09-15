---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.cottonseed-oil-crude
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 粗棉籽油

## 1. 范围与适用性

本 PCR 适用于油厂以非种用棉籽生产散装粗棉籽油的前景过程。门到门前景边界从接收轧花厂送来的棉籽开始，到产出可储存、出厂或进入后续精炼的已澄清未精炼棉籽油为止。连续螺旋机械压榨、预榨—溶剂萃取、直接或膨化辅助溶剂萃取是互斥的路线选项；数据包必须声明实际路线，不得把所有路线同时建模。

范围包括棉籽接收和清理、残绒去除、脱壳、籽仁调质、压片和蒸炒、按路线采用的压榨或己烷萃取、适用时的溶剂回收和粕脱溶、粗油澄清，以及适用时的场内供热与废水处理。范围不包括棉花种植、油厂接收前的轧花、未明确纳入的进厂运输、化学或物理精炼、脱色、脱臭、氢化、包装、分销、使用和生命末期。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.cottonseed-oil-crude |
| classification_refs | CPC 3.0：21681 — 粗棉籽油 |
| covered_products | 精炼前由机械压榨、预榨—溶剂萃取或直接/膨化辅助溶剂萃取得到的粗棉籽油 |
| excluded_products | 精炼棉籽油；氢化或其他化学改性棉籽油；混合植物油；作为参考产品出售的棉籽粕、棉籽壳和棉短绒 |
| representative_product | 油厂门口的散装已澄清粗棉籽油 |
| production_route | 声明的实际路线：连续螺旋机械压榨；预榨后己烷萃取；或直接/膨化辅助己烷萃取 |
| market_state | 澄清后、精炼前的散装未精炼油，并披露实际水分、不溶性杂质和残留溶剂状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产供下游精炼或已声明技术用途使用的粗棉籽油 |
| How much | 1 kg 粗棉籽油 |
| How well | 在油厂门口计量的已澄清未精炼油；数据集应披露水分、不溶性杂质和残留溶剂状态，不得假定其符合精炼油规格 |
| How long or cycle | 前景数据所代表的一个生产核算期，通常为一个连续生产期或年度 |
| reference_flow_link | 按已声明路线萃油并澄清后可出厂的 1 kg 粗棉籽油 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 粗棉籽油 — Tiangong UUID 未解析 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 萃取路线；直接萃取、膨化或预榨配置；棉籽接收状态和水分基准；产品水分和不溶性杂质基准；残留溶剂状态；地理范围；技术和设备年代；报告期；联产品处理和分配选择；溶剂回收配置；外购或场内蒸汽/热；废水处理边界 |

构建前景数据包时，`必需限定信息` 中的每一项都应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。限定信息缺失时，参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品以及质量平衡中的产品、联产品、残余物和废物行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将报告期清单归一化为 1 kg 已澄清粗棉籽油。每项质量均应声明为接收态、湿基、干基或含溶剂基准；没有记录换算时不得混用。 |
| `internal_transfer_reconciliation` | 预处理籽仁、压榨饼、混合油、含溶剂棉籽粕和中间粗油转移 | Mass | kg | 连续单元过程之间的内部转移必须按声明路线核对，不得再次计为外部输入或输出。 |
| `energy_accounting` | 电力、蒸汽、天然气和燃料油 | 计量所用能量或质量 | kWh、MJ 或 kg | 保留发票或仪表单位，仅用有记录的系数换算；燃料应报告数量、低位热值及燃烧是否在前景边界内。 |
| `water_accounting` | 工艺用水、锅炉给水和废水 | 质量或体积 | kg 或 m3 | 分开记录供水、回用水、冷凝水和排放废水；体积转质量时声明密度假设。 |
| `hexane_balance` | 溶剂萃取和脱溶过程 | Mass | kg | 核对期初库存、采购、期末库存、回收溶剂、产品或废水夹带溶剂以及实测或计算损失；不得把大豆系数当作棉籽证据。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 轧花后送达油厂的棉籽，并声明接收质量、水分、杂质和残绒状态 |
| starting_condition_role | 门到门前景起始输入；种植和轧花负荷由上游棉籽数据集带入 |
| product_classification_scope | 仅限粗棉籽油；CPC 3.0 子类 21681 只是映射语境，不把本 PCR 扩展到精炼植物油 |
| recursive_input_rule | 若同类粗棉籽油因返工或混合进入系统，应将其作为带上游数据集的单独外部输入，不得在本前景包内递归重建其生产过程 |
| upstream_dataset_requirement | 为接收棉籽、外购能源、水、己烷、清洗剂和其他外部输入链接具有代表性的上游数据集，并披露未解决的代理 |
| disclosure | 声明萃取路线、纳入的单元过程、内部转移、场内公用工程、溶剂回收、废水处理、联产品去向、分配方法、排除项和任何截断 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | foreground_start_and_end | 从轧花厂棉籽进厂开始，到已澄清粗棉籽油在油厂门口结束；除非明确纳入并披露，否则种植、轧花和下游精炼在本前景边界之外。 | `unsd-cpc-3-0-structure-2025`; `us-epa-ap42-vegetable-oil-background-1995` |
| `boundary_rule_2` | route_selection | 只建模已声明的机械、预榨—溶剂或直接/膨化—溶剂路线。纯机械路线不适用溶剂萃取和脱溶。 | `us-epa-ap42-vegetable-oil-background-1995`; `zia-cottonseed-oil-review-2021` |
| `boundary_rule_3` | solvent_route | 采用己烷萃取时，应纳入萃取、油/溶剂蒸发汽提、粕脱溶、冷凝回收、补充溶剂、含溶剂废水及有组织或无组织己烷排放。 | `us-epa-ap42-vegetable-oil-processing-1995`; `eu-bat-food-drink-milk-2019` |
| `boundary_rule_4` | utilities_and_treatment | 只有报告设施实际运行场内蒸汽/供热和废水处理时才将其纳入；否则把外购蒸汽/热和外部处理表示为产品或废物服务输入。 | `eu-bat-food-drink-milk-2019`; `eu-pef-method-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `seed_preparation` | 棉籽接收、清理、脱绒和脱壳 | required | 始终纳入 | 前景原料预处理 | 接收棉籽质量 |
| `conditioning_flaking` | 调质、压片和蒸炒 | required | 始终纳入，并声明设备顺序 | 前景萃取预处理 | 预处理棉籽仁质量 |
| `mechanical_pressing` | 机械压榨 | conditional | 机械单独路线和预榨—溶剂路线纳入 | 前景取油 | 调质棉籽仁质量 |
| `hexane_extraction` | 己烷萃取 | conditional | 预榨—溶剂和直接/膨化—溶剂路线纳入 | 前景取油 | 萃取器进料质量 |
| `desolventizing_stripping` | 棉籽粕脱溶与油汽提 | conditional | 纳入己烷萃取时必须纳入 | 前景溶剂回收 | 混合油和含溶剂粕质量 |
| `crude_oil_clarification` | 粗油澄清和储罐转移 | required | 对路线产生的粗油始终纳入 | 前景后处理 | 已澄清粗棉籽油质量 |
| `onsite_heat_generation` | 场内蒸汽或工艺热生产 | conditional | 仅在设施边界内生产蒸汽或热时纳入 | 前景公用工程 | 产生的蒸汽或有用热 |
| `onsite_wastewater_treatment` | 场内废水处理 | conditional | 仅在设施边界内处理废水时纳入 | 前景废物处理 | 进入处理的废水质量 |

### 过程：棉籽接收、清理、脱绒和脱壳（`seed_preparation`）

#### 输入

##### 产品流

###### 从轧花厂接收的棉籽（`received_cottonseed`）

记录进入油厂的非种用棉籽及其接收水分和杂质。

- 选定流：其他棉籽 `5ec72013-512e-4bb6-a5e6-648551f35d9d`
- 流属性/单位：Mass / kg
- 数量规则：按校准地磅或秤记录的净接收质量，仅对有单独记录的退货作调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_seed_preparation_records`
- 来源：`us-epa-ap42-vegetable-oil-background-1995`

###### 棉籽预处理用电（`seed_cleaning_electricity`）

记录输送、筛分、风选、锯齿脱绒、脱壳、打击分离和除尘设备用电。

- 选定流：中压电力 — Tiangong UUID 未解析
- 流属性/单位：Energy / kWh
- 数量规则：棉籽预处理过程的计量或分摊电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_seed_preparation_records`
- 来源：`eu-bat-food-drink-milk-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 脱绒回收的棉短绒（`cotton_linters`）

记录接收后脱除并作为联产品输出的可销售棉短绒。

- 选定流：棉短绒 `6587eccc-106f-4941-be4a-afdbe46df8b5`
- 流属性/单位：Mass / kg
- 数量规则：实测棉短绒干质量或生产态质量，并声明基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_seed_preparation_records`
- 来源：`us-epa-ap42-vegetable-oil-background-1995`

###### 脱壳回收的棉籽壳（`cottonseed_hulls`）

记录出售、饲用、能源利用或送往其他已声明去向的棉籽壳。

- 选定流：棉籽壳 — Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：按去向和水分基准计量的棉籽壳质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_seed_preparation_records`
- 来源：`us-epa-ap42-vegetable-oil-background-1995`

##### 废物流

###### 清理去除的杂质（`seed_cleaning_rejects`）

仅在枝梗、石块、金属、泥土等由场址作为同一废物流管理时记录该具体混合废物。

- 选定流：棉籽清理杂质 — Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：送往已声明处理或处置去向的实测杂质质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_seed_preparation_records`
- 来源：`us-epa-ap42-vegetable-oil-processing-1995`

##### 基本流

###### 棉籽处理粉尘排入空气（`seed_dust_air`）

记录接收、清理、脱绒和脱壳经控制后的实测或计算颗粒物排放。

- 选定流：颗粒物，排入空气 — Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：烟道监测量加有记录的预处理无组织排放估算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_air_emission_records`
- 来源：`us-epa-ap42-vegetable-oil-processing-1995`; `eu-bat-food-drink-milk-2019`

### 过程：调质、压片和蒸炒（`conditioning_flaking`）

#### 输入

##### 产品流

###### 预处理棉籽仁（`prepared_cottonseed_meats`）

记录从脱壳转入调质的内部籽仁流，不重复增加上游负荷。

- 选定流：预处理棉籽仁 — Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：从脱壳到调质的内部转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`us-epa-ap42-vegetable-oil-background-1995`

###### 调质和压片用电（`conditioning_electricity`）

记录压片辊、蒸炒设备、适用时的膨化机、驱动和控制用电。

- 选定流：中压电力 — Tiangong UUID 未解析
- 流属性/单位：Energy / kWh
- 数量规则：调质、压片、蒸炒及已声明膨化过程的计量或分摊电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`eu-bat-food-drink-milk-2019`

###### 调质加入的工艺用水（`conditioning_process_water`）

记录调质或蒸炒中直接加入以控制水分的水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：仪表或批次记录的加水量，不包括单独记录的回用冷凝水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`us-epa-ap42-vegetable-oil-background-1995`

###### 调质注入蒸汽（`conditioning_steam`）

仅在采用蒸汽调质或蒸炒时记录外购或内部转移蒸汽。

- 选定流：蒸汽 — Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：送入调质器或蒸炒设备的计量蒸汽；不用蒸汽时标为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`us-epa-ap42-vegetable-oil-background-1995`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 调质压片后的棉籽仁（`conditioned_cottonseed_meats`）

记录送往已声明压榨或直接溶剂路线的内部预处理物料。

- 选定流：调质棉籽仁 — Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：送往压榨或萃取的内部转移质量，包括已声明的膨化处理
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`us-epa-ap42-vegetable-oil-background-1995`; `zia-cottonseed-oil-review-2021`

##### 废物流

##### 基本流

### 过程：机械压榨（`mechanical_pressing`）

#### 输入

##### 产品流

###### 进入螺旋压榨机的调质籽仁（`press_feed`）

仅对机械单独路线或预榨—溶剂路线记录内部压榨进料。

- 选定流：调质棉籽仁 — Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：进入压榨机的内部转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pressing_records`
- 来源：`us-epa-ap42-vegetable-oil-background-1995`; `zia-cottonseed-oil-review-2021`

###### 机械压榨用电（`pressing_electricity`）

记录螺旋压榨机、给料器、泵和本地控制用电。

- 选定流：中压电力 — Tiangong UUID 未解析
- 流属性/单位：Energy / kWh
- 数量规则：压榨过程的计量或设备分摊电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pressing_records`
- 来源：`eu-pef-method-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 压榨粗棉籽油（`pressed_crude_oil`）

记录送往粗油澄清的未澄清内部油流。

- 选定流：压榨粗棉籽油 — Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：离开压榨和相关筛分设备的实测油质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pressing_records`
- 来源：`us-epa-ap42-vegetable-oil-background-1995`

###### 压榨棉籽饼（`pressed_cottonseed_cake`）

机械单独路线将其记录为联产品，预榨—溶剂路线将其记录为内部萃取进料；同一质量不得兼具两种角色。

- 选定流：压榨棉籽饼 — Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：按去向分开的实测压榨饼质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pressing_records`
- 来源：`us-epa-ap42-vegetable-oil-background-1995`; `zia-cottonseed-oil-review-2021`

##### 废物流

##### 基本流

### 过程：己烷萃取（`hexane_extraction`）

#### 输入

##### 产品流

###### 直接溶剂萃取用棉籽片（`direct_extraction_feed`）

仅对直接/膨化—溶剂路线记录调质棉籽片或膨化物料。

- 选定流：调质棉籽仁 — Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：从调质进入萃取器的内部转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_records`
- 来源：`us-epa-ap42-vegetable-oil-background-1995`; `zia-cottonseed-oil-review-2021`

###### 预榨—溶剂萃取用压榨饼（`prepress_extraction_feed`）

仅对预榨—溶剂路线记录进入萃取器的压榨饼。

- 选定流：压榨棉籽饼 — Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：从压榨转入萃取器的内部转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_records`
- 来源：`us-epa-ap42-vegetable-oil-background-1995`; `zia-cottonseed-oil-review-2021`

###### 补充正己烷（`extraction_hexane`）

记录进入闭路溶剂系统的外购正己烷；回收溶剂是内部循环，不是新的外部输入。

- 选定流：正己烷 — Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：采购量加期初库存减期末库存，并与回收量和损失核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_solvent_balance_records`
- 来源：`us-epa-ap42-vegetable-oil-processing-1995`; `eu-bat-food-drink-milk-2019`

###### 萃取和溶剂循环用电（`extraction_electricity`）

记录萃取器、泵、输送设备及分配给萃取的溶剂回收辅助设备用电。

- 选定流：中压电力 — Tiangong UUID 未解析
- 流属性/单位：Energy / kWh
- 数量规则：萃取过程的计量或设备分摊电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_records`
- 来源：`eu-bat-food-drink-milk-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 棉籽油混合油（`cottonseed_oil_miscella`）

记录转入蒸发和汽提的内部油—己烷溶液。

- 选定流：棉籽油混合油 — Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：实测或按质量平衡计算的混合油转移质量和组成
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_extraction_records`
- 来源：`us-epa-ap42-vegetable-oil-processing-1995`

###### 含溶剂棉籽粕（`solvent_laden_cottonseed_meal`）

记录送往脱溶蒸脱机的萃余固体，并声明残留溶剂和水分基准。

- 选定流：含溶剂棉籽粕 — Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：实测萃取器固体输出及取样溶剂含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_records`
- 来源：`us-epa-ap42-vegetable-oil-processing-1995`; `eu-bat-food-drink-milk-2019`

##### 废物流

##### 基本流

###### 萃取过程己烷/VOC 排入空气（`extraction_hexane_air`）

记录分配给萃取过程的萃取器排气和有记录的无组织损失。

- 选定流：正己烷，排入空气 — Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：实测有组织排放加设备泄漏估算，并与场址溶剂平衡核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_solvent_balance_records`
- 来源：`us-epa-ap42-vegetable-oil-processing-1995`; `eu-bat-food-drink-milk-2019`

### 过程：棉籽粕脱溶与油汽提（`desolventizing_stripping`）

#### 输入

##### 产品流

###### 送往蒸发汽提的混合油（`miscella_to_stripping`）

记录从萃取转入的内部混合油。

- 选定流：棉籽油混合油 — Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：核对后的内部转移质量和油/己烷组成
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_desolventizing_records`
- 来源：`us-epa-ap42-vegetable-oil-processing-1995`

###### 送往脱溶的含溶剂粕（`meal_to_desolventizing`）

记录从萃取转入的内部棉籽粕。

- 选定流：含溶剂棉籽粕 — Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：核对后的内部转移质量和残留溶剂含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_desolventizing_records`
- 来源：`eu-bat-food-drink-milk-2019`

###### 脱溶和汽提用蒸汽（`desolventizing_steam`）

记录蒸发器、汽提塔和脱溶蒸脱机使用的直接及间接蒸汽。

- 选定流：蒸汽 — Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：送往脱溶和汽提过程的计量蒸汽
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_desolventizing_records`
- 来源：`us-epa-ap42-vegetable-oil-processing-1995`; `eu-bat-food-drink-milk-2019`

###### 脱溶和溶剂回收用电（`desolventizing_electricity`）

记录分配给蒸发、真空、冷凝、泵送、粕干燥冷却和溶剂回收的电力。

- 选定流：中压电力 — Tiangong UUID 未解析
- 流属性/单位：Energy / kWh
- 数量规则：脱溶、汽提、干燥、冷却和溶剂回收的计量或设备分摊电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_desolventizing_records`
- 来源：`eu-bat-food-drink-milk-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 萃取粗棉籽油（`extracted_crude_oil`）

记录脱除溶剂后送往澄清的内部粗油。

- 选定流：萃取粗棉籽油 — Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：转移点实测的汽提后粗油质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_desolventizing_records`
- 来源：`us-epa-ap42-vegetable-oil-processing-1995`

###### 脱溶棉籽粕（`cottonseed_meal`）

记录干燥冷却后作为联产品输出的棉籽粕，并声明水分和残留溶剂基准。

- 选定流：棉籽饼粉 `a5d3b1ef-9fde-4393-af7b-5ec33451551d`
- 流属性/单位：Mass / kg
- 数量规则：按销售或使用去向计量的棉籽粕质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_desolventizing_records`
- 来源：`us-epa-ap42-vegetable-oil-background-1995`

##### 废物流

###### 含溶剂冷凝废水（`solvent_condensate_wastewater`）

记录从相分离或蒸馏排出并送处理的水相冷凝液。

- 选定流：含溶剂废水 — Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：计量废水质量及实测己烷含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`us-epa-ap42-vegetable-oil-processing-1995`; `eu-bat-food-drink-milk-2019`

##### 基本流

###### 脱溶和回收过程己烷/VOC 排入空气（`desolventizing_hexane_air`）

记录主排气、粕干燥冷却、储存和无组织己烷损失，并避免与萃取排放重复。

- 选定流：正己烷，排入空气 — Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：实测和计算排放并与场址溶剂平衡核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_solvent_balance_records`
- 来源：`us-epa-ap42-vegetable-oil-processing-1995`; `eu-bat-food-drink-milk-2019`

### 过程：粗油澄清和储罐转移（`crude_oil_clarification`）

#### 输入

##### 产品流

###### 压榨粗油转入澄清（`pressed_oil_to_clarification`）

仅对机械单独路线或预榨—溶剂路线记录进入澄清的压榨油。

- 选定流：压榨粗棉籽油 — Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：从压榨过程核对后的内部转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_clarification_records`
- 来源：`us-epa-ap42-vegetable-oil-background-1995`

###### 萃取粗油转入澄清（`extracted_oil_to_clarification`）

仅对溶剂路线记录进入澄清的汽提后粗油。

- 选定流：萃取粗棉籽油 — Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：从脱溶汽提过程核对后的内部转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_clarification_records`
- 来源：`us-epa-ap42-vegetable-oil-processing-1995`

###### 澄清和转移用电（`clarification_electricity`）

记录筛分、沉降或离心、过滤、泵送和储罐转移用电。

- 选定流：中压电力 — Tiangong UUID 未解析
- 流属性/单位：Energy / kWh
- 数量规则：粗油澄清和转移过程的计量或设备分摊电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_clarification_records`
- 来源：`eu-pef-method-2021`

###### 澄清设备工艺用水（`clarification_process_water`）

记录接触油品或澄清设备的工艺水，不包括单独记录的一般卫生用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：进入澄清设备或油接触清洗的计量用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_clarification_records`
- 来源：`eu-bat-food-drink-milk-2019`

###### 碱性清洗剂（`alkaline_cleaning_agent`）

记录油接触或工艺设备实际使用的外购碱性清洗配方；不得把精炼碱计入本行。

- 选定流：碱性清洗剂 — Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：按粗棉籽油生产线分摊的领用或采购记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_clarification_records`
- 来源：`eu-pef-method-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已澄清粗棉籽油（`crude_cottonseed_oil_reference`）

记录澄清后、任何精炼步骤之前的参考产品。

- 选定流：粗棉籽油 — Tiangong UUID 未解析
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：固定为 1 kg 参考输出；报告期可出厂产量归一化到该数量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：来源规则（`source_rule`）
- 采集协议：`cp_clarification_records`
- 来源：`unsd-cpc-3-0-structure-2025`

###### 澄清产生的棉籽油油脚（`cottonseed_oil_foots`）

按实际去向记录分离的含油细渣或油脚。场址若称其为皂脚，应披露本地名称，但不得与边界外碱炼皂脚合并。

- 选定流：棉籽油油脚 — Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：回配棉籽粕、回收、出售、处理或处置的实测油脚质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_clarification_records`
- 来源：`us-epa-ap42-vegetable-oil-background-1995`

##### 废物流

###### 澄清和清洗含油废水（`clarification_wastewater`）

记录从澄清和设备清洗送往场内或外部处理的废水。

- 选定流：含油废水 — Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：计量排放质量，并记录去向及油和固体含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-bat-food-drink-milk-2019`

##### 基本流

### 过程：场内蒸汽或工艺热生产（`onsite_heat_generation`）

#### 输入

##### 产品流

###### 场内燃烧的天然气（`natural_gas_fuel`）

只有场内锅炉或直接加热器在前景边界内燃烧天然气时才记录。

- 选定流：天然气 — Tiangong UUID 未解析
- 流属性/单位：Energy / MJ
- 数量规则：实测燃料量按有记录的低位热值换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_heat_generation_records`
- 来源：`eu-bat-food-drink-milk-2019`

###### 场内燃烧的燃料油（`fuel_oil_fuel`）

实际燃烧燃料油时将其作为单独替代燃料记录，不得与天然气合并。

- 选定流：燃料油 — Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：储罐或采购记录按期初、期末库存修正
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_heat_generation_records`
- 来源：`eu-bat-food-drink-milk-2019`

###### 锅炉给水（`boiler_feed_water`）

记录进入场内蒸汽系统的外部补充水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量锅炉补水量扣除返回冷凝水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_generation_records`
- 来源：`eu-bat-food-drink-milk-2019`

###### 场内供热用电（`heat_generation_electricity`）

记录锅炉房泵、风机、控制和燃料处理用电。

- 选定流：中压电力 — Tiangong UUID 未解析
- 流属性/单位：Energy / kWh
- 数量规则：锅炉房计量或设备分摊电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_generation_records`
- 来源：`eu-bat-food-drink-milk-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 场内产生的蒸汽（`generated_steam`）

记录内部转移到调质、脱溶、汽提或其他已声明用户的蒸汽。

- 选定流：蒸汽 — Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：计量总产汽量扣除排污和输配损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_generation_records`
- 来源：`eu-bat-food-drink-milk-2019`

##### 废物流

##### 基本流

###### 燃料燃烧化石二氧化碳（`fossil_carbon_dioxide_air`）

记录场内燃料燃烧释放的化石二氧化碳。

- 选定流：二氧化碳，化石，排入空气 — Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：直接监测或根据采集燃料量和有记录的碳因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_emission_records`
- 来源：`eu-pef-method-2021`

###### 燃料燃烧一氧化碳（`carbon_monoxide_air`）

记录实际锅炉或直接加热器释放的一氧化碳。

- 选定流：一氧化碳，排入空气 — Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：实测排放或根据采集燃料量和有记录的设备特定因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_emission_records`
- 来源：`eu-pef-method-2021`

###### 燃料燃烧氮氧化物（`nitrogen_oxides_air`）

记录实际锅炉或直接加热器释放的氮氧化物。

- 选定流：氮氧化物，排入空气 — Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：实测排放或根据采集燃料量和有记录的设备特定因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_emission_records`
- 来源：`eu-pef-method-2021`

###### 燃料燃烧二氧化硫（`sulfur_dioxide_air`）

按实际燃料硫含量记录二氧化硫；只有证明未燃烧含硫燃料时才可标为不适用。

- 选定流：二氧化硫，排入空气 — Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：实测排放或根据采集燃料量和硫含量进行硫平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_emission_records`
- 来源：`eu-pef-method-2021`

###### 燃料燃烧颗粒物（`combustion_particulate_air`）

记录场内锅炉或直接加热器经控制后的颗粒物排放。

- 选定流：颗粒物，排入空气 — Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：实测烟道排放或根据采集燃料量和有记录的设备特定因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_emission_records`
- 来源：`eu-pef-method-2021`

### 过程：场内废水处理（`onsite_wastewater_treatment`）

#### 输入

##### 产品流

###### 废水处理用电（`wastewater_treatment_electricity`）

记录场内均质、分离、曝气、泵送和污泥处理用电。

- 选定流：中压电力 — Tiangong UUID 未解析
- 流属性/单位：Energy / kWh
- 数量规则：废水处理计量或设备分摊电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-bat-food-drink-milk-2019`

##### 废物流

###### 进入处理的含溶剂废水（`solvent_wastewater_to_treatment`）

溶剂路线适用时，记录从溶剂回收转入的内部废水。

- 选定流：含溶剂废水 — Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：核对后的内部转移质量和污染物负荷
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`us-epa-ap42-vegetable-oil-processing-1995`; `eu-bat-food-drink-milk-2019`

###### 进入处理的含油废水（`oily_wastewater_to_treatment`）

记录从澄清和清洗转入的内部废水。

- 选定流：含油废水 — Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：核对后的内部转移质量和污染物负荷
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-bat-food-drink-milk-2019`

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 处理后工业废水（`treated_wastewater`）

记录离开前景边界的处理后排水，并声明受纳去向和监测污染物负荷。

- 选定流：处理后工业废水 — Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：计量排水质量或体积，并记录密度基准和污染物浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-bat-food-drink-milk-2019`

###### 工业废水处理污泥（`wastewater_sludge`）

记录离开处理设施的脱水或湿污泥，并声明干固体基准和去向。

- 选定流：工业废水处理污泥 — Tiangong UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：实测污泥质量、干固体比例和处理去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棉籽油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-bat-food-drink-milk-2019`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | route_and_unit_processes | 首先用仪表、批次记录、设备运行时间或其他有记录的因果键细分棉籽预处理、调质、萃取、澄清、公用工程和处理负荷。不得分配未运行路线步骤的负荷。 | `eu-pef-method-2021` |
| `allocation_rule_2` | residual_common_burdens | 归因基线在细分后，按离开系统的粗棉籽油和可销售棉短绒、棉籽壳、压榨饼及棉籽粕的干质量分配剩余共同前景负荷。废物流不分配联产品份额。记录水分换算和全部分配因子。 | `eu-pef-method-2021` |
| `allocation_rule_3` | system_expansion_alternative | 仅当研究目标需要，且每个获得抵扣的联产品都有透明、质量匹配的替代产品模型时，系统扩展才可代替质量分配基线。应报告被替代产品、替代比例、地理范围、质量修正和敏感性结果；同一负荷不得同时使用系统扩展和分配。 | `eu-pef-method-2021` |
| `allocation_rule_4` | foots_and_internal_recycling | 回配棉籽粕的油脚和返回萃取的回收己烷属于内部循环。只对净外部输出进行分配或抵扣，并披露出售或送废物处理的油脚。 | `us-epa-ap42-vegetable-oil-background-1995`; `eu-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_seed_preparation_records` | `seed_preparation` | 棉籽、电力、棉短绒、棉籽壳、杂质 | 地磅、秤、仪表、生产日志 | 接收质量；水分；杂质；电量；短绒质量；壳质量；杂质质量 | 校准仪器和核对后的生产记录 | kg；kWh | 每车或每班，按月汇总 | 代表性连续生产期或至少 12 个月 | 服务于产品的全部预处理设备 | 汇总外部流并按质量核对籽仁内部转移 | 校准证书；磅单；仪表映射；核对表 |
| `cp_conditioning_records` | `conditioning_flaking` | 籽仁、水、蒸汽、电力 | 转移秤、流量计、蒸汽表、电表、批次日志 | 进出料质量；水分；水；蒸汽；电力；膨化状态 | 直接计量或有记录的设备分摊 | kg；kWh | 每班或每批 | 与参考产品相同报告期 | 全部调质、压片、蒸炒和膨化设备 | 按声明路线汇总并核对内部转移 | 仪表校准；运行日志；水分检测 |
| `cp_pressing_records` | `mechanical_pressing` | 压榨进料、电力、油、饼 | 秤、电表、压榨日志 | 进料质量；电力；压榨油；饼质量；饼去向 | 直接测量或有记录的设备分摊 | kg；kWh | 每班或每批 | 路线运行期 | 服务于声明路线的全部压榨设备 | 仅汇总压榨运行期间 | 秤校准；压榨日志；质量平衡 |
| `cp_extraction_records` | `hexane_extraction` | 萃取进料、电力、混合油、含溶剂粕 | 转移计量、电表、组成取样 | 各路线进料；电力；混合油质量和组成；粕质量和溶剂含量 | 直接测量和实验室取样 | kg；kWh；质量分数 | 每班或每批 | 溶剂路线运行期 | 萃取器及分配的辅助设备 | 核对油、固体、水和溶剂转移 | 仪表校准；实验方法；溶剂平衡 |
| `cp_desolventizing_records` | `desolventizing_stripping` | 混合油、粕、蒸汽、电力、粗油、粕产品 | 转移秤、蒸汽表、电表、实验室样品 | 内部输入；蒸汽；电力；粗油；粕；水分；残留溶剂 | 直接测量和实验室取样 | kg；kWh；质量分数 | 每班或每批 | 溶剂路线运行期 | 蒸发器、汽提塔、脱溶蒸脱机、干燥冷却和冷凝设备 | 汇总路线运行并核对内部转移 | 校准；实验室 QA；生产平衡 |
| `cp_solvent_balance_records` | `hexane_extraction`; `desolventizing_stripping` | 补充己烷和空气排放 | 储罐液位、采购、流量计、烟道测试、泄漏巡检 | 期初库存；采购；期末库存；回收己烷；夹带溶剂；废水溶剂；有组织排放；无组织估算 | 测量支持的场址溶剂质量平衡 | kg | 日或月平衡，年度核对 | 完整溶剂路线报告期 | 全部溶剂储存、使用和回收设备 | 采购加期初减期末及各项转移得到损失，并披露不确定性 | 储罐校准；采购记录；烟道测试；泄漏巡检；闭合误差 |
| `cp_clarification_records` | `crude_oil_clarification` | 油转移、参考产品、电力、水、清洗剂、油脚 | 储罐或秤记录、仪表、领用日志、实验室检测 | 进油；可出厂粗油；电力；水；清洗剂；油脚；水分；不溶性杂质；残留溶剂 | 直接测量和代表性取样 | kg；kWh；质量分数 | 每批或每班 | 完整产品报告期 | 澄清、过滤、储罐和分配的清洗 | 将进油与粗油、油脚、废水和库存变化核对 | 储罐校准；实验室 QA；清洗领用记录；质量平衡 |
| `cp_heat_generation_records` | `onsite_heat_generation` | 燃料、给水、电力、蒸汽 | 燃料表或储罐、发票、水表、电表、蒸汽表 | 天然气；燃料油；低位热值；水；电力；蒸汽；冷凝水返回；排污 | 直接测量和库存核对 | MJ；kg；kWh | 日或月 | 完整报告期 | 服务前景生产的场内锅炉和直接加热器 | 可行时先按计量细分再分配 | 仪表校准；燃料证书；锅炉日志；蒸汽平衡 |
| `cp_combustion_emission_records` | `onsite_heat_generation` | 燃烧排放 | 烟道监测或燃料特定计算 | 燃料量；碳硫含量；烟气浓度和流量；运行小时；排放因子 | 直接监测或基于采集活动数据的有记录计算 | kg | 许可证或监测频率并年度汇总 | 完整报告期 | 范围内每台锅炉或直接加热器 | 汇总实测/计算排放且不重复 | 烟道测试；燃料分析；计算工作簿 |
| `cp_wastewater_records` | `desolventizing_stripping`; `crude_oil_clarification` | 废水 | 流量计、储罐记录、实验室分析 | 流量；油脂；悬浮固体；适用时己烷；去向 | 连续或批次流量测量和代表性取样 | kg 或 m3；浓度 | 每日或每批 | 完整运行期 | 范围内全部废水源 | 按来源和去向汇总质量及污染负荷 | 流量计校准；样品流转；实验室 QA |
| `cp_wastewater_treatment_records` | `onsite_wastewater_treatment` | 处理排水、电力、污泥 | 进出水表、电表、污泥秤、实验室检测 | 进水；出水；电力；污泥质量；干固体；污染物浓度；去向 | 直接测量和实验室分析 | kg；m3；kWh；浓度 | 日、批次或许可证频率 | 完整处理运行期 | 场内废水处理站 | 核对进水、出水、污泥、蒸发和库存变化 | 校准；许可证报告；实验室 QA；处理平衡 |
| `cp_air_emission_records` | `seed_preparation` | 工艺粉尘 | 烟道测试、袋滤器/旋风监控、无组织巡检 | 浓度；气量；运行时间；控制状态；无组织估算 | 直接监测和有记录计算 | kg | 按监测频率并年度汇总 | 完整运行期 | 分配给本 PCR 的接收、清理、脱绒、脱壳和粕处理 | 按源汇总受控和无组织排放 | 烟道测试；控制设备检查；计算工作簿 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | 全部外部清单行 | 报告期清单行数量 / 报告期已澄清粗棉籽油质量 | 采集的清单行数量；参考产品质量 | 每 1 kg 粗棉籽油的数量 | `eu-pef-method-2021` |
| `calc_internal_mass_balance` | 每个单元过程 | 期初库存 + 输入 = 期末库存 + 产品 + 联产品 + 废物 + 实测排放 + 已报告未平衡差 | 转移、库存、产品、废物和排放记录 | 过程质量平衡闭合和差异 | `eu-pef-method-2021` |
| `calc_hexane_loss` | 溶剂路线 | 期初己烷 + 采购 - 期末己烷 - 回收库存净变化 - 产品/废水夹带己烷 = 己烷总损失；按实测来源划分并将剩余项报告为无组织/未解决 | 溶剂记录、样品、排气数据 | 每参考流的己烷补充量和损失 | `us-epa-ap42-vegetable-oil-processing-1995`; `eu-bat-food-drink-milk-2019` |
| `calc_fuel_energy` | 场内供热 | 实测燃料量 × 有记录的低位热值 | 燃料量；低位热值 | 每参考流燃料能量（MJ） | `eu-bat-food-drink-milk-2019` |
| `calc_allocation_mass` | 剩余共同负荷 | 负荷 × 所选可销售输出干质量 / 全部所选可销售输出干质量之和 | 共同负荷；输出湿质量；水分比例 | 分配负荷和分配因子 | `eu-pef-method-2021` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和路线 | 证明输出是粗棉籽油而不是精炼油，并识别实际萃取路线和溶剂配置。 | 产品规格或出厂记录；工艺流程图；路线声明 |
| `dq_temporal` | 全部前景数据 | 使用一致报告期，覆盖代表性运行、停机、启停、路线变化和季节性生产，并披露排除项。 | 带日期日志；生产日历；报告期核对 |
| `dq_completeness` | 质量、能源、溶剂、水、联产品、废物和排放 | 记录每项重要流，或说明其原子行为何不适用于声明技术。 | 完整性矩阵；签署的不适用说明；质量和公用工程平衡 |
| `dq_measurement` | 仪表、秤、储罐和实验室结果 | 保存仪器身份、校准或核查状态、取样方法、检出限和单位换算。 | 校准记录；实验室 QA/QC；计算工作簿 |
| `dq_representativeness` | 上游和次级数据集 | 报告技术、地理和时间代表性，并识别全部代理，特别是棉籽供应、电力、燃料、己烷和废物处理。 | 数据集元数据；代理清单；数据质量评价 |
| `dq_allocation` | 联产品 | 保存未分配总量、细分键、干质量换算、分配因子、去向及任何系统扩展敏感性模型。 | 分配工作簿；销售或出厂记录；水分检测；敏感性结果 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | reference_flow | 若参考输出为精炼棉籽油、用已知精炼油 UUID 表示参考产品，或输出未按声明质量基准以 kg 计量，则校验失败。 | `unsd-cpc-3-0-structure-2025` |
| `validation_rule_2` | route_consistency | 若纯机械数据包含己烷萃取/脱溶负荷，或已声明溶剂路线遗漏己烷补充、回收、废水和空气损失核算，则校验失败。 | `us-epa-ap42-vegetable-oil-processing-1995`; `eu-bat-food-drink-milk-2019` |
| `validation_rule_3` | inventory_completeness | 适用时应分别设置棉籽、电力、蒸汽、每种燃料、工艺用水、己烷、清洗剂、棉短绒、棉籽壳、棉籽粕、油脚、废水、污泥、己烷/VOC、粉尘及每项燃烧排放的原子行。 | `eu-pef-method-2021`; `us-epa-ap42-vegetable-oil-processing-1995` |
| `validation_rule_4` | balances | 要求披露过程质量平衡闭合、溶剂路线的场址溶剂平衡、水/废水平衡和燃料—能量计算。未解释差异应标记，不得强行计入参考产品。 | `us-epa-ap42-vegetable-oil-processing-1995`; `eu-bat-food-drink-milk-2019` |
| `validation_rule_5` | allocation | 细分后应声明一个归因质量分配结果，或一个完整记录的系统扩展替代方案；负荷未分配，或同一联产品同时获得分配和替代抵扣时校验失败。 | `eu-pef-method-2021` |
| `validation_rule_6` | quantitative_ranges | 在核验至少两项具有相容棉籽油路线、边界、单位和归一化基准的独立原始来源前，本候选 PCR 的所有数量范围均为未解决；不得由单点或大豆、菜籽、葵花籽 BAT 数值推断范围。 | `us-epa-ap42-vegetable-oil-background-1995`; `eu-bat-food-drink-milk-2019` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 粗棉籽油生产前景单元过程数据包，评审后可作为 secondary_dataset 或 background_dataset 发布 |
| downstream_use | 构建需要油厂门口粗棉籽油的产品流、过程数据集和 lifecyclemodel |
| allowed_use | 使用已声明质量分配的归因建模；完整记录时的系统扩展情景；不把不受支持数量范围当作事实的路线特定基准分析 |
| excluded_use | 精炼棉籽油；未披露身份的通用植物油；边界和数据质量未对齐的路线比较声明；自动采用未解决 UUID 或范围 |
| required_metadata | 地理范围；报告期；棉籽接收状态；萃取路线；技术；产品水分和杂质；残留溶剂状态；过程覆盖；能源供应；溶剂回收；废水边界；联产品去向；分配方法；上游数据集身份 |
| required_quality_disclosure | 前景覆盖；测量与计算划分；质量/溶剂/水平衡闭合；缺失流说明；代理清单；分配因子；不确定性和检出限；未解决参考产品和清单 UUID；缺少来源支持范围的事实 |
| update_trigger | 新的公开 Tiangong 精确粗棉籽油流；重要路线或设备改变；官方 BAT/PEF 方法修订；出现两项相容定量来源可支持范围；溶剂、能源、联产品或处理实践改变；评审发现 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，《Central Product Classification Version 3.0 structure》，代码 21681，https://unstats.un.org/unsd/classifications/Meetings/UNCEISC2023/8-3_Background3_CPC3_Structure.pdf（访问于 2026-08-24） | 官方产品类别身份以及排除精炼棉籽油 |
| `us-epa-ap42-vegetable-oil-background-1995` | official_guidance | 美国 EPA，《Background Report, AP-42 Section 9.11.1, Vegetable Oil Processing》，1995 年 11 月，https://www.epa.gov/sites/default/files/2020-10/documents/b9s11-1.pdf（访问于 2026-08-24） | 棉籽特定清理、脱绒、脱壳、调质、压片、压榨、预榨—溶剂、棉籽粕和油脚过程分解及证据限制 |
| `us-epa-ap42-vegetable-oil-processing-1995` | official_guidance | 美国 EPA，《AP-42 Section 9.11.1, Vegetable Oil Processing》，1995 年 11 月，https://www.epa.gov/sites/default/files/2020-10/documents/c9s11-1.pdf（访问于 2026-08-24） | 溶剂萃取、蒸发、汽提、脱溶、回收、废水、粉尘、VOC/己烷来源和场址溶剂平衡方法 |
| `eu-bat-food-drink-milk-2019` | standard | 欧盟委员会实施决定 (EU) 2019/2031，食品、饮料和乳品行业 BAT 结论，特别是油籽加工和植物油精炼，https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj/eng（访问于 2026-08-24） | 能源和水监测、籽料/粕粉尘、溶剂回收配置、己烷损失核算和废水管理；非棉籽定量 BAT 水平不作为范围 |
| `eu-pef-method-2021` | official_guidance | 欧盟委员会建议 (EU) 2021/2279，《Environmental Footprint methods》，英文合并文本，https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（访问于 2026-08-24） | 企业特定前景数据、完整性、数据质量、多功能层级、细分、分配和系统扩展 |
| `zia-cottonseed-oil-review-2021` | literature | Zia, M. A. 等，“Physicochemical features, functional characteristics, and health benefits of cottonseed oil: a review,” Brazilian Journal of Biology 82，DOI：10.1590/1519-6984.243511，https://www.scielo.br/j/bjb/a/yQYp7FmKD5bbJzMqxm3Zs6x/?format=pdf&lang=en（访问于 2026-08-24） | 仅用于佐证机械螺旋压榨、预榨—溶剂和膨化—溶剂路线选项；不用于 LCA 范围 |
