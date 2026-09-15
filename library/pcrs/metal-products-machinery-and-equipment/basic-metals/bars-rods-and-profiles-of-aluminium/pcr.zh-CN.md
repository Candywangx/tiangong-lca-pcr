---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.bars-rods-and-profiles-of-aluminium
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 铝制棒、杆及型材

## 1. 范围与适用性

本 PCR 适用于以均质化铝铸锭为坯料，经热挤压生产并在挤压工厂门口交付的铝或铝合金轧制表面棒材、杆材及型材。边界包括坯料预热、在挤压厂进行的坯料剪切、模具挤压、冷却或淬火、拉伸或矫直、切割，以及声明状态要求的时效处理。

本 PCR 不包括铝管、铝制管件、铝线、轧制板带、箔、粉末和片状粉末、未锻轧铝生产、铸锭铸造及均质化、前景工厂进出运输、包装、下游机械加工或装配、阳极氧化、涂漆、涂清漆、安装、使用和寿命终止处理。若数据集纳入任何被排除的操作，必须将其作为单独识别的过程报告；未进行拆分时，不得将结果表述为本 PCR 的门到门轧制表面型材数据集。

本 PCR 的语义边界是由细长棒材、杆材或恒定截面型材形态定义的铝半成品，不由特定合金、用途或外部分类代码定义。仓库中未发现具有同一产品身份的其他实质性 PCR。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.bars-rods-and-profiles-of-aluminium |
| classification_refs | CPC 3.0: 41532, Bars, rods and profiles, of aluminium |
| covered_products | 轧制表面的实心铝或铝合金棒材和杆材；不作为管材出售的开口或空心恒定截面铝型材 |
| excluded_products | 管材和管件；线材；轧制板带；箔；粉末和片状粉末；未锻轧铝；除非表面处理过程单独拆分，否则不包括涂层或阳极氧化产品 |
| representative_product | 切割至销售长度的轧制表面热挤压铝型材 |
| production_route | 均质化挤压铸锭预热、热挤压、冷却或淬火、矫直、切割及有条件的时效处理 |
| market_state | 挤压工厂门口、达到可销售长度的轧制表面半成品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应已声明合金、几何形状、状态和表面状况的可销售轧制表面铝制棒、杆或型材 |
| How much | 1 m3 可销售产品净实体金属体积 |
| How well | 符合声明的合金牌号、尺寸公差、状态、表面状况及验收规范 |
| How long or cycle | 一个生产批次完成挤压和热处理路线；不规定使用阶段持续时间 |
| reference_flow_link | 参考流是在切头尾、切割、剔除及分离工艺废料后的合格产品净实体金属体积，依据验收截面和长度确定，或由净质量和经核验的合金密度确定 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 铝挤压型材 `779eeee0-048a-4559-aa19-cf246c835580` |
| 参考流属性 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` |
| 参考单位组 | Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` |
| 参考单位 | m3 |
| 必需限定信息 | 产品形态（棒材、杆材或型材）；合金牌号；铸锭原生铝和再生铝含量核算基础；标称截面及尺寸；实体金属体积计算方法；经核验的合金密度和质量当量；状态和热处理状态；冷却或淬火路线；表面状况；生产地域；技术和挤压机等级；报告期；任何被排除的表面处理操作是否单独报告 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_volume` | 参考产品 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 使用净实体金属体积，排除空心部分、包装和非产品附件。依据验收截面及长度确定体积，或以经核验净质量除以有记录的合金密度。所有清单量归一化至 1 m3。 |
| `metal_mass` | 铸锭投入和铝废料产出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用经核验的净质量，排除托盘、包膜、料架及其他包装，并保留用于金属平衡校验的质量记录。 |
| `electricity_energy` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留电表原始数据，并严格按 1 kWh = 3.6 MJ 转换；披露电压等级、电网地域、合同电力工具的处理方式以及是否包括变压器损耗。 |
| `gas_volume` | 气态天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按供应商或仪表的参考温度和压力报告体积并保留这些条件；未经换算，不得比较参考条件不同的体积。 |
| `water_mass` | 工艺用水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用实测供水质量，或采用与温度相适应且有记录的密度将实测体积换算为质量；不把未跨越前景边界的循环水重复计为投入。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 挤压工厂门口接收的均质化铝挤压铸锭，按合金、铸锭尺寸、供应商、再生含量核算基础及上游数据集识别 |
| starting_condition_role | 前景挤压过程的外购或转移铝半成品投入 |
| product_classification_scope | 轧制表面的铝或铝合金棒材、杆材及恒定截面型材；不包括管材、管件、线材、轧制产品、箔、粉末、片状粉末及未锻轧铝 |
| recursive_input_rule | 作为投入购入的棒材、杆材或型材按具有自身数据集的上游同类产品流记录，不在本前景过程中重复创建 |
| upstream_dataset_requirement | 每项铸锭投入必须链接在地域、技术、组成和时间上具有代表性的上游铸锭数据集，并披露原生/再生金属核算 |
| disclosure | 声明合金、产品形态、尺寸、状态、冷却路线、挤压机和加热技术、轧制表面状态、场址地域、报告期、成材率基准、废料去向、内部返回处理及每项被排除或单独报告的操作 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 前景挤压数据集 | 边界始于接收均质化挤压铸锭，止于挤压工厂门口的可销售轧制表面铝制棒、杆或型材净产出。纳入铸锭预热、厂内剪切、挤压、冷却或淬火、拉伸或矫直、切割及路线适用的时效处理。 | `european-aluminium-environmental-profile-2018`; `aluminum-association-extruded-aluminum-epd-2022` |
| `boundary_excluded_operations` | 声明产品状态之外的操作 | 排除铸锭生产、运输、包装、阳极氧化、涂漆、涂清漆、下游加工或装配、安装、使用及寿命终止。若为更广泛研究而采集，须将各操作单独拆分。 | `aluminum-association-extruded-aluminum-epd-2022` |
| `boundary_scrap_loop` | 挤压工艺废料 | 记录离开过程的全部铝切头尾、压余、切割和修边废料以及不合格长度。内部返回并非零负担投入：应披露该循环，避免将同一金属同时计为铸锭投入和回收产出。 | `european-aluminium-environmental-profile-2018`; `aluminum-association-extruded-aluminum-epd-2022` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `aluminium_extrusion_and_thermal_finishing` | 铝挤压与热处理 | required | 声明产品始终纳入 | 前景生产 | 1 m3 可销售轧制表面铝制棒、杆或型材净实体金属体积 |

### 过程：铝挤压与热处理（`aluminium_extrusion_and_thermal_finishing`）

#### 输入

##### 产品流

###### 均质化铝挤压铸锭（`homogenized_aluminium_ingot`）

记录跨越工厂门口进入挤压路线的均质化铸锭质量，包括后续切除或报废的铸锭部分。

- 选定流：均质化铝铸锭 `5f84bf23-8a6f-4816-98ec-cb358579250f`
- 流属性/单位：Mass / kg
- 数量规则：分配给生产批次的实测接收铸锭质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 m3 可销售参考产品净实体体积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_aluminium_billet_receipts`
- 来源：`european-aluminium-environmental-profile-2018`; `aluminum-association-extruded-aluminum-epd-2022`

###### 外购电力（`electricity`）

记录为铸锭加热、挤压机驱动、冷却、物料搬运、矫直、切割、时效设备及所分配辅助设施而跨越场址边界输入的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分配给生产批次并按照 `electricity_energy` 换算的实测输入电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 可销售参考产品净实体体积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_meter`
- 来源：`european-aluminium-environmental-profile-2018`

###### 气态天然气（`natural_gas`）

仅当天然气为直接燃烧式铸锭炉或时效炉跨越前景边界的投入时记录；否则在所生产的数据集中将本行报告为不适用。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：按参考条件校正并分配给生产批次的供应商或仪表体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 m3 可销售参考产品净实体体积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_natural_gas_meter`
- 来源：`european-aluminium-environmental-profile-2018`

###### 直接工艺用水（`process_water`）

记录为淬火或直接冷却而跨越过程边界的补充水或直流水。不把闭路循环水重复计为投入。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：分配给生产批次的实测补充水和直流水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 m3 可销售参考产品净实体体积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water_meter`
- 来源：`aluminum-association-extruded-aluminum-epd-2022`

##### 废物流

声明的前景过程没有废物流投入。

##### 基本流

声明的前景过程没有基本流投入。

#### 输出

##### 产品流

###### 可销售铝制棒、杆及型材净产出（`aluminium_bars_rods_profiles`）

仅记录放行销售的合格轧制表面产品。所选 state-100 参考流是 CPC 41532 内具有代表性的铝挤压型材；产品形态限定信息将 PCR 边界扩展至棒材和杆材，但不改变该参考身份。

- 选定流：铝挤压型材 `779eeee0-048a-4559-aa19-cf246c835580`
- 流属性/单位：Volume / m3
- 数量规则：归一化后恰好为 1 m3 可销售参考产品净实体金属体积
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：每 1 m3 可销售参考产品净实体体积
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`unsd-cpc-3-0-structure-2025`

##### 废物流

###### 铝工艺废料（`aluminium_process_scrap`）

记录离开过程并送往内部或外部回收的铝铸锭端头、挤压压余、切割和修边废料以及不合格长度。受污染废料须在数据集元数据中单独说明。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass / kg
- 数量规则：在任何回收抵扣或替代前，分配给生产批次的实测废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 m3 可销售参考产品净实体体积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_aluminium_scrap_mass`
- 来源：`european-aluminium-environmental-profile-2018`; `aluminum-association-extruded-aluminum-epd-2022`

##### 基本流

###### 直接排入空气的化石源二氧化碳（`carbon_dioxide_fossil_to_air`）

记录本过程所纳入天然气在前景场址燃烧产生的直接化石源二氧化碳排放。不得在此加入上游电力排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：分配给生产批次的场址特定监测值或有记录的燃料碳质量平衡结果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 可销售参考产品净实体体积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`european-aluminium-environmental-profile-2018`

###### 直接排入空气的氮氧化物（`nitrogen_oxides_to_air`）

按照设施报告方式记录前景燃料燃烧产生的氮氧化物，包括声明 NOx 以 NO2 计的约定。经审计的候选项均为一氧化二氮而不是氮氧化物，因此 UUID 保持未解决。

- 选定流：氮氧化物
- 流属性/单位：Mass / kg
- 数量规则：分配给生产批次的场址特定烟气监测量或许可证报告质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 可销售参考产品净实体体积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`european-aluminium-environmental-profile-2018`

本 PCR 不规定外部数值范围。在至少两项相互独立、边界兼容的原始来源或经审查前景数据集支持经验范围之前，每项重要流均保持为前景采集要求。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共用仪表和多产品挤压线 | 优先按生产批次、挤压机、炉或实测运行时间段拆分。无法拆分时，按设备时间和负荷等有记录的因果参数分配共用物料和能源；只有在不存在更具因果性的参数时才使用合格产品净质量。 | `aluminum-association-extruded-aluminum-epd-2022` |
| `allocation_scrap_no_credit` | 铝工艺废料 | 报告废料质量和去向，不在前景清单内分配避免原生金属的抵扣。任何替代、再生含量、截断或闭环约定须在下游模型中明确说明，并防止在铸锭组成与废料回收之间重复计量。 | `european-aluminium-environmental-profile-2018`; `aluminum-association-extruded-aluminum-epd-2022` |
| `allocation_rework` | 内部返工或重新挤压物料 | 将返工的全部能源、水、排放及未回收损失计入最终形成合格产品的批次；不得将内部转移重复计为第二次外部铸锭投入或最终产品产出。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_aluminium_billet_receipts` | `aluminium_extrusion_and_thermal_finishing` | 均质化铝铸锭投入 | 收货秤、ERP 收货单和批次谱系 | 时间戳；供应商；铸锭批次；合金；尺寸；毛质量；皮重；再生含量基础 | 将校准的收货秤记录与 ERP 领料及挤压批次核对 | kg | 每次收货和每个生产批次 | 完整报告期 | 进入声明过程的全部铸锭 | 汇总分配给合格及不合格批次产出的铸锭净质量；防止内部返回重复计量 | 秤校准；收货单；ERP 核对；批次追溯 |
| `cp_electricity_meter` | `aluminium_extrusion_and_thermal_finishing` | 外购电力投入 | 结算电表和分表 | 起始读数；结束读数；区间用量；单位；仪表编号；挤压机/炉分配；损耗边界 | 将场址输入电力与设备分表核对，并按因果关系分配辅助设施余量 | kWh and MJ | 区间数据按批次汇总，至少每月核对 | 完整报告期 | 声明过程内的全部设备 | 扣除外送电，kWh 换算为 MJ，按实测区间或有记录的设备负荷和时间分配，并按产品净实体体积归一化 | 仪表校准；电费账单；分表核对；分配工作表 |
| `cp_natural_gas_meter` | `aluminium_extrusion_and_thermal_finishing` | 气态天然气投入 | 供应商账单和炉用仪表 | 体积；参考温度；参考压力；仪表编号；炉；运行区间；批次分配 | 将供应商体积与炉用仪表核对 | m3 | 区间数据按批次汇总，至少每月核对 | 完整报告期 | 声明过程内的直接燃烧设备 | 校正至声明的参考条件，扣除边界外用途，按实测炉运行区间分配，并按产品净实体体积归一化 | 仪表校准；供应商报表；炉日志；核对记录 |
| `cp_process_water_meter` | `aluminium_extrusion_and_thermal_finishing` | 直接工艺用水投入 | 补充水或直流水仪表 | 起始读数；结束读数；水源；去向；循环状态；排放关联；批次分配 | 计量跨越边界的补充水和直流水；排除内部循环水 | kg or m3 | 区间数据按批次汇总，至少每月核对 | 完整报告期 | 声明过程内的淬火和直接冷却系统 | 必要时用有记录的密度将体积转换为质量，扣除非工艺用途，并按产品净实体体积归一化 | 仪表校准；水平衡；密度基础；维护记录 |
| `cp_product_mass` | `aluminium_extrusion_and_thermal_finishing` | 可销售产品净产出 | 成品秤、几何记录、发运记录和质量放行 | 批次；合金；形态；验收截面；长度；密度；实体体积；毛质量；皮重；不合格质量；放行状态 | 根据验收几何形状或经核验的净质量与合金密度确定实体金属体积，并与发运及质量记录核对 | m3 and kg | 每个批次 | 完整报告期 | 声明过程内的全部合格产出 | 仅汇总已放行的净实体金属体积；排除空心部分、包装、附件及不合格物料 | 秤及尺寸测量设备校准；密度基础；放行证书；发运核对；尺寸和状态检验 |
| `cp_aluminium_scrap_mass` | `aluminium_extrusion_and_thermal_finishing` | 铝工艺废料产出 | 废料秤和容器移动记录 | 批次；废料类型；合金；污染状态；毛质量；皮重；去向；内部返回标记 | 称量每次废料移动并与铸锭/产品质量平衡核对 | kg | 每次移动和每个生产批次 | 完整报告期 | 声明过程内产生的全部工艺废料 | 按状态和去向汇总废料净质量，识别内部返回，并按产品净实体体积归一化 | 秤校准；移动票据；去向收据；质量平衡核对 |
| `cp_direct_air_emissions` | `aluminium_extrusion_and_thermal_finishing` | 直接化石源二氧化碳和氮氧化物产出 | 烟气监测、许可证报告和燃料碳计算记录 | 污染物；浓度；烟气流量；运行时间；燃料体积；燃料组成；氧化因子；NOx 报告约定；排气筒；批次分配 | 可用时采用经校准的连续或定期监测；否则化石源 CO2 采用有记录的设施燃料碳平衡 | kg | 监测区间或许可证规定频次，并按月与批次核对 | 完整报告期 | 声明过程内的直接燃烧设备 | 扣除非本过程排放源，按排气筒和批次汇总污染物质量并按产品净实体体积归一化；不得纳入上游电力排放 | 分析仪校准；实验室证书；许可证报告；燃料分析；计算工作表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_volume` | 每项清单行 | 归一化量 = 分配给批次的交换量 / 未包装合格产品净实体金属体积 | 交换量；验收截面和长度，或净质量和经核验的合金密度 | 每 1 m3 参考产品的交换量 |  |
| `calc_metal_mass_balance` | 铸锭、产品、废料及有记录的金属损失 | 在计入有记录的内部转移后，铸锭金属投入 = 合格产品 + 铝废料 + 单独计量的未回收金属损失 | 铸锭质量；产品质量；废料质量；内部转移；实测金属损失 | 经核对的金属平衡及闭合率 | `european-aluminium-environmental-profile-2018` |
| `calc_electricity_conversion` | 外购电力 | 电力（MJ）= 电表读数（kWh）× 3.6 | 以 kWh 计的实测电力 | 以 MJ 计的外购电力 |  |
| `calc_water_volume_to_mass` | 按体积记录的工艺用水 | 水质量 = 实测体积 × 声明温度下有记录的水密度 | 水体积；温度；密度 | 以 kg 计的工艺用水质量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和铸锭 | 保留批次级合金、形态、尺寸、状态、表面状况和铸锭谱系；不得将涂层或阳极氧化产品汇总进入本轧制表面数据集。 | 材料证书；批次谱系；质量放行；产品规范 |
| `dq_measurement` | 质量、电力、天然气、水和排放 | 使用经校准的仪器或经核对的供应商记录，保留单位和参考条件，并记录换算及分配键。 | 校准证书；账单；仪表提取数据；计算工作表 |
| `dq_temporal` | 全部前景交换 | 在可行时覆盖一个具有代表性的连续 12 个月；披露停机、启动、异常生产、缺失区间及替代数据。 | 报告期登记；生产日历；缺口日志 |
| `dq_completeness` | 过程清单 | 核对铸锭、产品和废料质量以及场址到分表的能源。解释每项物料或能源余量，以及许可证或监测涉及但被省略的每项直接排放。 | 质量和能源平衡；核对报告；许可证清单；省略项登记 |
| `dq_representativeness` | 发布数据集 | 报告按产量加权的合金、形态、状态、挤压机等级、加热路线、地域和技术覆盖；不得声称超出采集场址和期间的代表性。 | 生产汇总；场址清单；加权文件；代表性说明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | 参考流和数据集元数据 | canonical PCR id、产品形态、合金、状态、表面状况、生产地域、报告期、实体体积计算方法、合金密度或质量当量缺失或不一致时，校验失败。 | `unsd-cpc-3-0-structure-2025` |
| `validation_boundary` | 过程图和清单 | 铸锭生产、包装、涂层、阳极氧化、下游加工、运输、使用或寿命终止未单独拆分而汇总进入前景结果时，校验失败。 | `aluminum-association-extruded-aluminum-epd-2022` |
| `validation_mass_balance` | 铸锭、产品、废料和金属损失 | 要求提供有记录的金属质量平衡；标记无法解释的不平衡，并拒绝将内部返回同时作为外部投入和回收产出重复计量。 | `european-aluminium-environmental-profile-2018` |
| `validation_energy_and_emissions` | 电力、天然气、化石源二氧化碳和氮氧化物 | 要求明确适用性、计量边界、单位、分配以及直接排放与上游排放的区分。天然气行报告不适用时，必须提供无天然气跨越边界的证据。 | `european-aluminium-environmental-profile-2018` |
| `validation_uuid_and_ranges` | UUID 为空的清单行和重要流范围 | 将未解决的氮氧化物流 UUID 和已记录的独立范围证据需求作为审查发现；不得替换为代理 UUID 或无依据的数值范围。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审查后适合发布为 `secondary_dataset` 或 `background_dataset` 的前景生产数据集 |
| downstream_use | 用于轧制表面铝制棒、杆及型材产品 LCA 和生命周期模型的门到门构件 |
| allowed_use | 合金、产品形态、状态、表面状况、技术、地域、时间期间、铸锭供应及分配约定兼容或经明确调整的研究 |
| excluded_use | 未锻轧铝、铸锭生产、轧制产品、管材和管件、线材、未增加表面处理过程的涂层或阳极氧化产品、下游加工，或缺少兼容上游数据集的摇篮到大门声明 |
| required_metadata | canonical PCR id；参考产品和数量；合金；形态和尺寸；状态；表面状况；地域；技术和挤压机等级；报告期；铸锭再生含量基础；上游数据集链接；能源和用水边界；废料去向；分配方法；UUID 解决状态 |
| required_quality_disclosure | 来源覆盖；计量和校准基础；时间覆盖；场址加权；质量和能源核对；缺失数据；替代数据；直接排放方法；不确定性；未解决 UUID 和范围证据需求 |
| update_trigger | 铸锭供应或再生含量核算、合金/产品组合、挤压机或炉技术、冷却路线、状态组合、场址覆盖、能源供应、分配方法、直接排放控制、参考流身份或会实质性改变清单的证据发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，《产品总分类（CPC）3.0 版结构》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-04） | CPC 41532 的正式产品类别身份 |
| `european-aluminium-environmental-profile-2018` | dataset | European Aluminium, Environmental Profile Report for the European Aluminium Industry, 2018, https://european-aluminium.eu/wp-content/uploads/2022/10/environmental-profile-report-for-the-european-aluminium-industry.pdf（检索日期：2026-09-04） | 挤压起始材料和过程顺序、相关直接物料与能源交换、工艺废料产生和回收边界，以及欧洲技术背景 |
| `aluminum-association-extruded-aluminum-epd-2022` | dataset | The Aluminum Association, Environmental Product Declaration: Extruded Aluminum, 2022, https://www.aluminum.org/sites/default/files/2022-10/104.1_EPD_AA_Extrusion.pdf（检索日期：2026-09-04） | 交付产品状态、挤压/冷却/拉伸/切割/时效顺序、表面处理与包装操作的区别、前景边界及废料处理 |
