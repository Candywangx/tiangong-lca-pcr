---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.fans-except-domestic-type-centrifuges-except-cream-separators-and-clothes-dryers
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 非家用风扇；离心机（乳脂分离机及干衣机除外）

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 子类 43931 所列完整非家用风扇和离心机从摇篮到工厂大门的前景生产。其覆盖作为完整产品供应的工业轴流式、离心式、混流式、横流式及射流式风扇，以及利用离心力分离物料的工业或实验室离心机；覆盖成品随附的电动机或驱动装置、叶轮或转鼓、外壳或机罩、结构机架、防护装置、控制装置及其他组件。

本 PCR 不覆盖家用型风扇、乳脂分离机、干衣机、单独销售的替换零件、非离心式过滤或净化机械、现场安装、工厂大门之后的配送、使用阶段电力和维护以及报废处理。裸机子总成和零件只有在装入完整参考产品时才是本 PCR 的投入，其本身不是参考产品。

该产品类别差异较大。每个前景数据包均须声明产品属于风扇还是离心机、工作原理与型号、随附驱动边界、材料配置、工厂大门包装状态、制造地域及参考年份。风扇特有的性能描述与离心机特有的运行描述不得跨产品系列混合或平均。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.fans-except-domestic-type-centrifuges-except-cream-separators-and-clothes-dryers |
| classification_refs | CPC 3.0：43931（精确分类背景） |
| covered_products | 完整非家用风扇；乳脂分离机及干衣机以外的完整离心机 |
| excluded_products | 家用型风扇；乳脂分离机；干衣机；单独销售的零件；非离心式过滤器或净化器；安装、使用及报废服务 |
| representative_product | 一个已声明且可销售的完整非家用风扇或离心机型号 |
| production_route | 接收采购的材料和组件；适用时进行厂内组件制造与表面处理；装配；验收试验；工厂大门交付包装 |
| market_state | 在工厂大门处已完成、通过验收且可销售的设备，包含该型号随附的已声明附件、控制装置、驱动装置和包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在工厂大门处提供一个已声明型号的成品非家用风扇或离心机 |
| How much | 可销售设备净质量 1 kg；包装单独编入清单 |
| How well | 已声明型号及随附配置通过制造商验收准则；披露适用的风扇性能描述或离心机运行描述 |
| How long or cycle | 工厂大门处的一次生产输出；使用寿命不属于从摇篮到工厂大门的参考流，下游使用比较时须另行声明 |
| reference_flow_link | 参考产品输出行 `reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 风扇，家用型除外，离心机，乳脂分离机及干衣机除外 `a48b3c52-704f-4843-9325-a30168349fe5` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品系列（风扇或离心机）；子类型及工作原理；型号标识；产品净质量；随附电动机/驱动装置及控制装置边界；叶轮/转鼓及外壳/机罩材料；离心机接液部件材料；适用时的风扇输入功率和已声明工况点；适用时的离心机最高转速和分离任务；验收试验依据；附件；包装状态和质量；制造场址地域；参考年份 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品和所有质量归一化交换 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 以通过验收的可销售设备实测净质量作为分母。不得将单独编入清单的包装计入产品净质量。 |
| `electricity_energy` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留计量能源数据并按 1 kWh = 3.6 MJ 将 kWh 换算为 MJ；披露电表边界、电压等级和分配方法。 |
| `gas_volume` | 气态天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按已声明的温度和压力基准状态报告体积；不得将气态天然气与其他燃料合并。 |
| `mass_balance` | 金属投入、产品和分类收集的金属废料 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 归一化之前，分别核对各金属的采购投入、产品含量、退回材料、在制品及分类废料。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 采购的材料、组件、包装和公用工程在制造场址接收时进入边界；其上游生产由链接的背景数据集表示 |
| starting_condition_role | 前景工厂大门制造模型的进入条件 |
| product_classification_scope | CPC 3.0 子类 43931 的完整产品；分类范围不延伸至被排除的家用风扇、乳脂分离机、干衣机或单独零件 |
| recursive_input_rule | 采购的完整风扇或离心机作为组件使用时，仅作为具有自身数据集的上游产品投入记录一次，不得在同一前景系统内使用本 PCR 递归展开 |
| upstream_dataset_requirement | 每项采购材料、组件、能源载体、化学品及包装流均须链接在地域、技术和时间上具有代表性的上游数据集 |
| disclosure | 披露厂内制造与采购组件边界、外协加工、场址覆盖、电表分配、共用服务处理、试验不合格品、包装状态以及每个被排除的生命周期阶段 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_factory_gate` | 前景产品系统 | 纳入报告场址开展的从材料接收到工厂大门的组件制造和表面处理、装配、验收试验、归属于合格产品的返工、包装、直接排放和废物。排除配送、安装、使用、维护和报废。 | `eu-2021-2279-pef` |
| `sb_complete_configuration` | 产品识别 | 纳入已声明型号随附的电动机、驱动装置、控制装置、防护装置及重要空气动力或分离组件；披露省略的附件和采购子总成。 | `eu-2024-1834-fans`; `alfa-laval-decanter-operating-principles` |
| `sb_outsourced_processes` | 外协制造 | 将外协制造、涂装、热处理或动平衡作为上游产品或服务投入记录，并记录送出和返回质量，防止与厂内同一工序重复计数。 | `eu-2021-2279-pef` |
| `sb_inventory_completeness` | 所有前景过程 | 在所生成的数据集中，将每项实际材料、能源、水、化学品、废物和直接基本交换增加为单独原子行，即使下列常见 PCR 行中未列出。 | `eu-2021-2279-pef` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_fabrication_finishing` | 组件制造与表面处理 | `conditional` | 报告场址开展任何组件切割、成形、机加工、焊接、清洗或涂装时纳入；否则披露相应采购组件或外协工序。 | 前景组件制造与表面处理 | 每 1 kg 合格参考产品 |
| `assembly_test_packaging` | 装配、验收试验与包装 | `required` | 完整可销售设备始终纳入；仅当已声明型号随附相应物品时，才适用电动机、轴承及各包装行。 | 最终装配、工厂验收、返工归属和包装 | 1 kg 合格参考产品输出 |

### 过程：组件制造与表面处理（`component_fabrication_finishing`）

#### 输入

##### 产品流

###### 非合金钢板或钢卷（`non_alloy_steel_sheet`）

记录进入厂内切割、成形或焊接的非合金扁轧钢材。须声明牌号、尺寸、涂层和供应商。

- 选定流：非合金钢板，卷 `ce3ac926-5d6f-4558-9edc-67179d93dde4`
- 流属性/单位：Mass / kg
- 数量规则：接收实测质量减去有记录的退回量，再按合格参考产品归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_receipts`
- 来源：

###### 不锈钢板材（`stainless_steel_sheet`）

当接液、耐腐蚀、转动、机罩或防护部件使用不锈钢板材时记录。Tiangong 精确 UUID 尚未解决；须保留合金牌号和产品形态。

- 选定流：不锈钢板材
- 流属性/单位：Mass / kg
- 数量规则：接收实测质量减去有记录的退回量，再按合格参考产品归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_receipts`
- 来源：`alfa-laval-decanter-operating-principles`

###### 初级铝合金板材（`primary_aluminium_alloy_sheet`）

仅在已声明产品使用初级铝合金板材时记录。不得将本行用于再生合金板材或铸铝。

- 选定流：初级铝合金板材 `2a9549cc-dc9e-43a7-9379-7a0c0a0e4832`
- 流属性/单位：Mass / kg
- 数量规则：接收实测质量减去有记录的退回量，再按合格参考产品归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_receipts`
- 来源：

###### 制造与表面处理用电力（`electricity_fabrication`）

记录厂内切割、成形、机加工、焊接、清洗和涂装消耗的外购电力，包括经分配的共用负荷。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量电量或从场址总表按文件化方法分配的电量，再按合格参考产品归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_records`
- 来源：

###### 清洗用工艺用水（`process_water`）

记录厂内水基清洗或漂洗使用的工艺用水。须声明水质、水源及交付边界。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：适用清洗批次的计量用水量或槽体衡算用水量，再按合格参考产品归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_cleaning_records`
- 来源：

###### 碱性清洗用氢氧化钠（`sodium_hydroxide`）

碱性清洗槽使用氢氧化钠产品时记录。溶液浓度与活性氢氧化钠质量须分别报告。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：活性氢氧化钠补充和配槽质量，再按合格参考产品归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_chemical_records`
- 来源：

###### 直接工艺供热用气态天然气（`natural_gas`）

仅当场内燃烧天然气用于干燥、固化或其他可归属工艺供热时记录。须声明基准状态和气体组成。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：在已声明基准状态下计量的可归属天然气体积，再按合格参考产品归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_natural_gas_records`
- 来源：

###### 热切割用工业氧气（`industrial_oxygen`）

使用氧燃料切割时记录工业氧气。须声明纯度、压力、基准状态及现场制气边界。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：可归属于合格产品的计量氧气或钢瓶库存耗用量，再按合格参考产品归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_welding_cutting_gas_records`
- 来源：

###### 二氧化碳保护气（`carbon_dioxide_shielding_gas`）

记录作为焊接保护气使用的二氧化碳产品。须声明纯度、供应压力及钢瓶或散装交付边界。

- 选定流：二氧化碳 `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- 流属性/单位：Mass / kg
- 数量规则：可归属于合格产品的钢瓶库存或质量流量二氧化碳耗用量，再按合格参考产品归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_welding_cutting_gas_records`
- 来源：

###### 粉末涂层（`powder_coating`）

厂内表面处理使用配制粉末涂层时记录。须声明树脂化学组成、颜色、固化制度和转移效率。

- 选定流：粉末涂层 `0c581697-0eed-4b86-a070-b94966eb7344`
- 流属性/单位：Mass / kg
- 数量规则：发放涂料质量减去有记录的可回收退料量，再按合格参考产品归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_receipts`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 分类收集的钢制制造废料（`steel_scrap`）

将离开前景过程的黑色金属边角料、切屑和不合格钢件作为一个分类废物流记录。须声明污染和去向。

- 选定流：废钢 `37997e0e-e34b-4ab9-a642-5d86f4333919`
- 流属性/单位：Mass / kg
- 数量规则：离场分类钢废料称重质量扣除有记录的内部回用量，再按合格参考产品归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_dispatch_records`
- 来源：

###### 分类收集的铝制制造废料（`aluminium_scrap`）

将离开前景过程的铝边角料、切屑和不合格铝件作为一个分类废物流记录。须声明合金混杂、污染和去向。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass / kg
- 数量规则：离场分类铝废料称重质量扣除有记录的内部回用量，再按合格参考产品归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_dispatch_records`
- 来源：

###### 清洗废水（`cleaning_wastewater`）

记录厂内组件清洗和漂洗排放的水基废水。须声明清洗化学品、pH、悬浮物、金属、现场处理及接收路径。

- 选定流：清洗废水 `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- 流属性/单位：Mass / kg
- 数量规则：适用清洗批次的计量排放量或槽体衡算量，再按合格参考产品归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_wastewater_records`
- 来源：

##### 基本流

###### 天然气燃烧直接排放的化石源二氧化碳（`carbon_dioxide_fossil`）

仅记录现场天然气燃烧直接进入空气的化石源二氧化碳。本基本流不包括上游电力和燃料供应排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：场址报告的直接化石 CO2，或计量天然气乘以文件化的场址碳因子和氧化因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_co2_records`
- 来源：

### 过程：装配、验收试验与包装（`assembly_test_packaging`）

#### 输入

##### 产品流

###### 设备随附电动机（`electric_motor`）

当采购电动机作为完整风扇或离心机的一部分随附时记录。须声明功率、效率等级、电压、电动机类型及驱动边界。

- 选定流：电动机 `014f80a3-c257-425b-9b75-3e5a18573695`
- 流属性/单位：Mass / kg
- 数量规则：装入合格产品的电动机实测质量，再按合格参考产品归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_receipts`
- 来源：`eu-2024-1834-fans`; `alfa-laval-decanter-operating-principles`

###### 完整滚珠轴承（`ball_bearing`）

记录装入已声明产品的采购完整滚珠轴承。Tiangong 精确 UUID 尚未解决；须保留轴承类型、尺寸、材料和润滑状态。

- 选定流：完整滚珠轴承
- 流属性/单位：Mass / kg
- 数量规则：装入合格产品的轴承实测质量，再按合格参考产品归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_receipts`
- 来源：`alfa-laval-decanter-operating-principles`

###### 装配与验收试验用电力（`electricity_assembly_test`）

记录装配工具、动平衡、磨合、性能试验或泄漏试验以及可归属返工所用外购电力。须声明试验持续时间和负荷条件。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：试验与装配分表计量电量或从场址总表按文件化方法分配的电量，再按合格参考产品归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_records`
- 来源：`eu-2024-1834-fans`

###### 瓦楞纸箱（`corrugated_board_boxes`）

记录随产品供应的成形瓦楞纸箱。须声明纸板等级、尺寸、印刷和再生材料含量。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：合格产品消耗的纸箱实测质量扣除退回或重复使用量，再按合格参考产品归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 木制托盘（`wooden_pallet`）

工厂大门交付时随附木制托盘的，予以记录。须声明托盘规格、木材处理、含水率及已声明重复使用次数。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass / kg
- 数量规则：托盘质量按有记录的使用次数分配至合格产品，再按合格参考产品归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格参考产品（`reference_product`）

记录验收试验后合格且可销售的完整设备净质量。包装仍保留在单独的投入行中。

- 选定流：风扇，家用型除外，离心机，乳脂分离机及干衣机除外 `a48b3c52-704f-4843-9325-a30168349fe5`
- 流属性/单位：Mass / kg
- 数量规则：1 kg 合格参考产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`un-cpc-3-0-2025`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共用制造、装配、试验和公用工程系统 | 在技术可行时，先对产品系列和型号特定过程进行细分或分表计量，再进行分配。 | `eu-2021-2279-pef` |
| `allocation_physical_causality` | 剩余共用负荷 | 采用机时、试验时间、加工质量或计量能源等有文件记录的物理因果动因分配剩余共用负荷；除非物理因果性明确不可得且已披露敏感性，否则不得使用收入分配。 | `eu-2021-2279-pef` |
| `allocation_scrap` | 金属废料及其他可回收输出 | 在工厂边界将废料报告为废物输出。不得在本前景清单内计入避免初级材料生产的抵扣；任何回收处理或替代抵扣属于单独声明的下游模型。 | `eu-2021-2279-pef` |
| `allocation_rejects_rework` | 不合格产品和返工 | 在已声明报告期内，将返工和生产不合格品的材料与能源归属于合格输出；披露被排除的异常样机或灾难性失效。 | `eu-2021-2279-pef` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_component_receipts` | `component_fabrication_finishing`; `assembly_test_packaging` | 材料、组件和涂层投入 | 采购、收货、领料及 BOM 记录 | 流身份；牌号/型号；接收质量；退回质量；领用质量；产品型号；批次；供应商 | 将采购/收货记录与 BOM 领料和退料记录核对 | kg | 每批或每次领料 | 至少一个有代表性的连续 12 个月；生产期较短时覆盖完整生产批次 | 生产已声明产品的全部场址 | 可归属净投入除以合格产品净质量 | 校准秤；发票/BOM 核对；供应商规格；差异说明 |
| `cp_electricity_records` | `component_fabrication_finishing`; `assembly_test_packaging` | 外购电力 | 电表及生产记录 | 电表期初/期末值；倍率；电压；可再生电力合同边界；过程/型号；运行小时；合格质量 | 读取专用分表；否则按有记录的机时或试验时间分配场址总表 | MJ | 每月；可得时按每个试验批次 | 与合格输出相同的报告期 | 所有纳入的制造场址 | 过程可归属电力除以合格产品净质量 | 电表校准；账单核对；分配工作表；覆盖声明 |
| `cp_water_cleaning_records` | `component_fabrication_finishing` | 工艺用水 | 电表、槽体及批次记录 | 电表/槽体读数；水源；水质；批次；补水；循环；合格质量 | 计量进水或开展有记录的槽体衡算 | kg | 每个清洗批次及每月 | 与清洗组件相同的报告期 | 每条纳入的清洗线 | 进入前景边界的净用水量除以合格产品净质量 | 电表校准或槽体几何；循环边界；衡算核查 |
| `cp_cleaning_chemical_records` | `component_fabrication_finishing` | 氢氧化钠 | 配槽和补充记录 | 溶液质量；浓度；活性 NaOH；补充量；处置量；批次；合格质量 | 依据经验证的浓度和批次记录计算活性产品质量 | kg | 每次配槽或补充 | 覆盖与报告期相交的全部槽液周期 | 每条纳入的碱性清洗线 | 活性氢氧化钠投入除以合格产品净质量 | 供应商证书；浓度试验；批次日志；库存核对 |
| `cp_natural_gas_records` | `component_fabrication_finishing` | 气态天然气 | 电表和燃料记录 | 电表读数；温度；压力；基准状态；组成；过程小时；合格质量 | 读取过程分表或按有记录的燃烧器负荷分配场址总表 | m3 | 每月 | 与合格输出相同的报告期 | 所有纳入的直接燃烧设备 | 可归属标准状态天然气体积除以合格产品净质量 | 电表校准；供应商声明；基准状态换算；账单核对 |
| `cp_welding_cutting_gas_records` | `component_fabrication_finishing` | 氧气和二氧化碳 | 钢瓶、储罐及质量流量记录 | 期初库存；采购；期末库存；压力；纯度；基准状态；过程/型号；合格质量 | 分别对每种气体开展库存衡算或校准流量测量 | m3 氧气；kg 二氧化碳 | 每个钢瓶/散装交付及每月 | 与焊接或切割生产相同的报告期 | 所有纳入的切割和焊接工位 | 各气体净用量除以合格产品净质量 | 交付单；钢瓶/储罐核对；流量计校准；泄漏调查 |
| `cp_waste_dispatch_records` | `component_fabrication_finishing` | 分类金属废料 | 称量单和废物转移记录 | 废物身份；毛重/皮重/净重；污染；去向；内部回用；日期；产品归属 | 每次发运称重并核对内部金属回用 | kg | 每次发运 | 与材料投入相同的报告期 | 所有纳入的制造线 | 分类废料净发运量除以合格产品净质量 | 校准秤单；废物承运记录；污染及去向声明 |
| `cp_cleaning_wastewater_records` | `component_fabrication_finishing` | 清洗废水 | 排放计量、槽体及处理记录 | 体积或质量；换算时的密度；pH；化学组成；悬浮物；金属；处理；去向；批次 | 计量排放或开展有记录的槽体衡算；保留表征试验 | kg | 每批次及每月 | 与清洗投入相同的报告期 | 所有纳入的清洗和漂洗线 | 跨越场址边界的清洗废水净量除以合格产品净质量 | 电表/槽体证据；密度依据；实验室分析；处理和接收路径记录 |
| `cp_direct_co2_records` | `component_fabrication_finishing` | 直接化石源二氧化碳 | 排放监测或场址计算记录 | 直接 CO2；气体活动数据；碳因子；氧化因子；化石比例；方法；期间；合格质量 | 使用场址报告的直接测量值，或依据采集的天然气数据和完整记录的因子计算 | kg | 每月或法规报告间隔 | 与天然气投入相同的报告期 | 所有纳入的直接燃烧源 | 可归属直接化石 CO2 除以合格产品净质量 | 监测/计算方法；因子来源；天然气核对；不确定性声明 |
| `cp_packaging_records` | `assembly_test_packaging` | 瓦楞纸箱和木制托盘 | 包装 BOM、领用及复用记录 | 包装身份；质量；领用数量；退回数量；复用次数；处理；产品型号；合格质量 | 称量代表性包装并核对领用、退回和复用 | kg | 每种包装设计及每月领用 | 与合格输出相同的报告期 | 每项工厂大门包装作业 | 可归属于已声明产品的包装质量除以合格产品净质量 | 称量记录；包装规格；复用台账；领用核对 |
| `cp_finished_product_mass` | `assembly_test_packaging` | 合格参考产品 | 序列号、验收和发运记录 | 型号；序列号/批次；净质量；附件；电动机/驱动边界；验收结果；包装质量；日期 | 称量合格配置，或使用与序列生产核对的已验证型号质量 | kg | 每种型号及生产批次 | 与所有投入相同的报告期 | 所有纳入的最终装配场址 | 汇总合格净质量；将所有交换归一化为 1 kg | 校准秤；验收记录；BOM 核对；包装扣除核查 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个清单数量 | 归一化数量 = 报告期可归属数量 / 合格产品净质量 | 协议特定的可归属数量；`cp_finished_product_mass` 合格净质量 | 每 1 kg 参考产品的流数量 | `eu-2021-2279-pef` |
| `calc_electricity_conversion` | 电力行 | MJ = 计量 kWh × 3.6；保留原始电表单位和换算记录 | `cp_electricity_records` 的计量 kWh | 以 MJ 表示的电力 | |
| `calc_active_sodium_hydroxide` | 氢氧化钠投入 | 活性 NaOH 质量 = 溶液质量 × 经验证的 NaOH 质量分数 | 溶液质量；浓度证书或试验 | 以活性质量计的氢氧化钠产品 kg | |
| `calc_direct_fossil_co2` | 直接化石源二氧化碳 | 使用直接监测质量，或计算质量 = 标准状态燃料活动量 × 文件化碳因子 × 氧化因子 × 化石比例；不得嵌入未声明的默认因子 | `cp_natural_gas_records`；`cp_direct_co2_records` 保留的因子和方法 | 直接化石 CO2 kg | |
| `calc_metal_balance` | 每种金属 | 投入 = 合格产品含量 + 分类废料发运量 + 有记录的内部库存变化 + 其他单独识别输出 | 材料接收；BOM 含量；废料称量单；在制品和退回记录 | 金属特定核对结果及无法解释的差异 | `eu-2021-2279-pef` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 保留型号标识、系列、子类型、完整随附配置、净质量、性能或运行描述及验收状态。 | 产品规格、BOM、验收记录和校准质量记录 |
| `dq_temporal` | 所有前景行 | 连续生产采用一个有代表性的连续 12 个月；生产期较短时采用完整已声明批次；所有分子与分母时间对齐。 | 期间覆盖表及生产记录核对 |
| `dq_geography_technology` | 前景及上游链接 | 识别每个制造场址，选择与材料牌号、能源系统、地域及参考年份相匹配的上游数据集；披露代理且不得将其表述为精确匹配。 | 场址清单、供应商地域、数据集选择日志和代理披露 |
| `dq_completeness` | 过程清单 | 证明纳入过程的所有已知产品、废物和基本投入与输出均已覆盖，并解释每个省略或不适用的常见行。 | BOM 和采购核对、公用工程衡算、废物台账、排放台账和完整性检查表 |
| `dq_measurement` | 计量和称量流 | 对每套重要测量系统保留校准状态、分配方法、原始单位、换算以及不确定性或差异说明。 | 校准证书、电表/秤记录和计算工作底稿 |
| `dq_representativeness` | 发布数据集 | 评价技术、地域、时间和精度代表性，并按主要流披露局限。 | 按 `eu-2021-2279-pef` 开展的数据质量评价 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | 参考流 | 产品系列、型号、随附配置、验收状态、净质量或其他必需限定信息缺失，或产品属于被排除类别时，校验失败。 | `un-cpc-3-0-2025`; `eu-2024-1834-fans`; `alfa-laval-decanter-operating-principles` |
| `val_inventory_atomicity` | 过程清单 | 选定流为复数集合、混合公用工程、合并燃料、混合包装标签或未指定废物/排放伞形项，而非一个原子交换时，校验失败。 | `eu-2021-2279-pef` |
| `val_mass_reconciliation` | 金属投入和输出 | 适用时分别对非合金钢、不锈钢和铝开展质量衡算；发布前调查并披露无法解释的差异。 | `eu-2021-2279-pef` |
| `val_energy_emission_consistency` | 电力、天然气和直接 CO2 | 核查电表边界、单位换算、基准状态、燃料归属和直接 CO2 计算方法；确保上游电力排放不作为前景直接排放重复计数。 | `eu-2021-2279-pef` |
| `val_completeness` | 整个前景数据包 | 开展过程、投入/输出、时间、场址和来源覆盖核查；结论不明确的完整性核查不得判定为通过。 | `eu-2021-2279-pef` |
| `val_range_status` | 重要流 | 在至少两项相互独立、经原文核实且边界兼容的来源支持综合结果之前，不得应用外部经验范围；在此期间保留前景要求和未解决的范围证据需求。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个已声明完整非家用风扇或离心机型号从摇篮到工厂大门的前景生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 需要型号特定工厂大门制造数据的产品碳足迹和 LCA 模型；须保留参考流限定信息、场址期间、上游数据集选择和排除项 |
| excluded_use | 在功能、工况点、使用寿命和使用情景不等效时直接比较风扇与离心机型号；使用阶段声明；安装系统性能；家用风扇；乳脂分离机；干衣机；单独零件 |
| required_metadata | PCR id；产品系列及子类型；型号；验收准则；净质量；随附驱动装置、控制装置和附件；材料配置；包装状态；场址地域；参考年份；报告期；厂内和外协过程边界；分配方法；上游数据集版本 |
| required_quality_disclosure | 数据覆盖；电表和秤质量；代表性；代理使用；未解决 UUID；范围证据缺口；金属衡算差异；不合格品、返工、废料、包装复用和外协过程的处理 |
| update_trigger | 型号配置、质量、电动机/驱动装置、主要材料、制造路线、场址、能源系统、包装、分配方法、上游数据集或报告期发生重大变化；或 UUID/范围证据缺口得到解决 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | official_guidance | 联合国统计司，《CPC 第 3.0 版结构》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（2026-09-05 检索；已核实原始 CSV 哈希） | CPC 43931 身份和排除项 |
| `eu-2024-1834-fans` | official_guidance | Commission Regulation (EU) 2024/1834 of 3 July 2024，ELI：http://data.europa.eu/eli/reg/2024/1834/oj（2026-09-06 已核实原文） | 风扇定义、重要随附组件、类别和性能限定信息 |
| `alfa-laval-decanter-operating-principles` | handbook | Alfa Laval，Decanter Centrifuge Operating Principles，文件 200000331-4-EN-GB，https://www.alfalaval.com/globalassets/documents/products/separation/centrifugal-separators/decanters/alfa-laval-decanter-centrifuge-operating-principles.pdf（2026-09-06 已核实原文） | 卧螺离心机组件、轴承、驱动装置及分离任务分解 |
| `eu-2021-2279-pef` | official_guidance | Commission Recommendation (EU) 2021/2279，Annex I Product Environmental Footprint Method，ELI：http://data.europa.eu/eli/reco/2021/2279/oj（2026-09-06 已核实原文） | 前景清单完整性、分配层级、数据质量、稳健性和校验检查 |
