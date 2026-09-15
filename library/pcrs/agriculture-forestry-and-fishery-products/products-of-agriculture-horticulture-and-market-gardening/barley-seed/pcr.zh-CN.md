---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.barley-seed
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 大麦种子

## 1. 范围与适用性

本 PCR 适用于专门为播种而种植、并以适播种子质量在声明农场门交付的大麦（*Hordeum* 属，主要为栽培大麦）前景数据包。范围包括繁种作物、田间作业、收获和农场内处理、清选和分级，以及声明边界之前发生的处理、包装或储存。其用于以质量为基准的产品、过程、数据集和生命周期模型投影。

本 PCR 不涵盖为食品、饲料、制麦、酿造或工业用途而种植的普通大麦籽粒、营养繁殖材料、其他谷物种子、已售种子的下游播种，或声明农场门之后的配送。无论种子批是否经过认证均可纳入，但必须声明品种、种子级别、认证或质量保证方案、处理状态和检测状态。可销售阈值由司法辖区和合同决定，并非本 PCR 的通用合格阈值。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.barley-seed |
| classification_refs | CPC 3.0: 01151, Barley, seed，精确范围语境 |
| covered_products | 专门为播种而生产的大麦种子；在声明产品仍为有活力的播种用种子时，包括已清选、分级、未处理、已处理、经认证及有质量声明的种子批 |
| excluded_products | 非专门用于种子目的的大麦籽粒；制麦大麦；饲料大麦；食用大麦；无活力籽粒；非大麦物种种子；使用所售种子的下游作物生产 |
| representative_product | 一批可追溯、已清选至播种状态并在声明农场门放行的种子级大麦 |
| production_route | 亲本种子接收与繁种作物建植；田间生产；收获及收获后干燥或处理；种子清选和分级；放行前有条件发生的处理、包装和储存 |
| market_state | 种子级、已清选至播种状态、农场门生产组合；逐批声明处理、包装、认证、检测和储存状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在声明农场门交付一批可追溯的适播大麦种子 |
| How much | 1 kg 已接受参考产品的接收状态质量 |
| How well | 种子级且已清选至播种状态；声明品种、种子级别、处理状态、认证或质量保证方案、发芽结果、净度分析结果、水分结果、检测方法与日期及种子批身份 |
| How long or cycle | 一个声明的繁种与加工周期；当前景系统包含声明边界前储存时亦包括该储存 |
| reference_flow_link | 功能单位由下列单一参考产品流表示；不合格种子、清选废料、秸秆及其他输出不是参考产品 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 大麦，种子 `c0da91a0-5054-4e3c-954f-80ceb0f6dac5` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 大麦物种和品种；种子级别或繁殖类别；认证或质量保证方案及司法辖区；未处理状态或处理产品及载量；发芽结果及其方法/检测日期/实验室；净度分析结果及方法；水分结果及其方法和基准；种子批标识和批质量；生产地理；收获年份；清选和分级状态；包装状态；储存时长和条件；声明农场门 |

构建前景数据包时，`必需限定信息` 中每一项都必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺少限定信息会使参考流定义不完整。种子检测和认证记录描述产品质量，不能替代前景清单记录。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 已接受的大麦种子参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在声明边界按接收状态计量已接受产品。单独报告水分，不得将参考数量静默换算为干物质。 |
| `lot_mass_traceability` | 亲本种子、收获种子、已接受种子、废料和共产品 | Mass | kg | 按种子批和过程核对校准衡器记录；适用时保留毛重、皮重、净重、退回、返工和拒收质量。 |
| `moisture_basis` | 已收获、干燥、加工和放行的种子 | Moisture content | 按声明检测基准的百分比 | 识别取样时间、方法、湿基或干基约定及种子批。任何水分基准换算均须展示输入结果和公式。 |
| `area_and_yield` | 繁种田 | Area and mass | ha and kg | 分别记录收获面积和已接受参考产品质量；仅从地理、作物周期和种子批范围匹配的数据计算产量。 |
| `energy_consistency` | 燃料、电力、热和干燥能源 | 所选流支持的质量或能量 | kg, kWh, or MJ | 保留发票或仪表单位。仅按声明的因子和基准换算；仅在计算燃料能量时使用低位热值。 |
| `water_consistency` | 灌溉水 | 所选 Tiangong 流的 Mass | kg | 可得时记录计量体积；仅在披露密度和温度基准后换算为质量，并保留原始仪表记录。 |
| `quality_test_basis` | 发芽、净度、水分、生活力、活力和种子健康结果 | 检测结果和方法 | 方法规定 | 结果必须针对具体种子批，并关联样品身份、取样日期、方法版本、实验室和检测日期。不得以司法辖区限值替代实测结果。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 一批可追溯亲本大麦种子进入声明繁种田或签约种植者系统，并声明品种、级别、处理状态、数量、来源及上游数据集状态 |
| starting_condition_role | 繁种前景系统的上游产品输入，而非无负担生物材料 |
| product_classification_scope | 专门为种子用途栽培并作为适播种子放行的大麦；普通大麦籽粒不属于本产品类别 |
| recursive_input_rule | 将亲本大麦种子一次性记录为繁种过程的产品输入，并在可得时链接上游种子数据集；不得把同一前景周期递归展开为自身输入 |
| upstream_dataset_requirement | 对亲本种子和其他产品输入使用在地理、时间、技术及种子级别上具有代表性的上游数据集；披露代理、排除项和缺失的上游数据集 |
| disclosure | 声明亲本种子级别和来源、作物周期、田块地理、栽培制度、灌溉状态、收获和干燥路线、清选和分级路线、处理和包装状态、储存、产品和废料去向、分配选择及准确放行边界 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_required_stages` | 前景种子生产 | 纳入亲本种子供应、整地和播种、作物管理、使用时的灌溉、肥料和植保品施用、机械和能源使用、收获、收获后干燥或处理、清选和分级，以及在声明边界前发生的处理、包装和储存。 | `environdec-pcr-2020-07`; `fao-seeds-toolkit-module-2` |
| `boundary_upstream_inputs` | 购入投入和服务 | 对跨越系统边界的种子、肥料、土壤改良剂、植保品、灌溉供应、燃料、电力、热、包装、处理产品和外包作业链接上游数据集。 | `environdec-pcr-2020-07`; `ec-pef-2021-2279` |
| `boundary_field_emissions` | 管理土壤和田间作业 | 纳入对声明路线具有重要性的直接和间接田间排放。使用实测数据或适用的国家、区域或 IPCC 方法，并披露活动数据、因子、环境区室及气候或淋溶条件。 | `ipcc-2019-managed-soils-n2o` |
| `boundary_reject_destinations` | 不合格种子、清选废料、秸秆和残余物 | 记录每项输出及去向。依据证据将其归为参考产品、共产品、可回收材料、废物或还田残余物；不得因“废料”标签推断零负担。 | `fao-seeds-toolkit-module-2`; `ec-pef-2021-2279` |
| `boundary_quality_operations` | 种子放行 | 当取样、检测、认证、加工、加签及其他质量作业在声明边界前消耗材料或能源时将其纳入；即便负担可忽略，也始终保留种子批级记录。 | `fao-seeds-toolkit-module-3`; `ista-rules-seed-testing`; `eu-cereal-seed-directive-66-402` |
| `boundary_data_gaps` | 所有必需过程 | 不得仅因缺少前景或上游数据而省略必需过程。使用明确披露的代理，或报告数据缺口及其可能重要性。 | `ec-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `seed_crop_production` | 大麦繁种作物生产 | required |  | 建立并管理繁种作物，包括田间投入、机械、灌溉和管理土壤排放 | 声明作物周期的 kg 未加工收获种子 |
| `harvest_postharvest` | 收获及收获后干燥或处理 | required |  | 收获种子作物并使其达到声明的加工接收状态 | 交付加工的 kg 未加工种子 |
| `seed_conditioning` | 种子接收、清选、分级和放行 | required |  | 识别种子批、按需干燥、清选和分级、检测，并分离已接受种子和废料 | kg 已接受种子级大麦种子 |
| `treatment_packaging_storage` | 种子处理、包装和储存 | conditional | 纳入声明农场门前实际发生的每项作业；否则记录为未发生 | 施用声明种子处理、包装和标识种子批，并在放行前储存 | 声明农场门的 kg 已接受参考产品 |

Tiangong 过程检索确认 `e2def1f7-e0e3-4946-8ee4-46bec2bf3c58`（Barley crop production for seed purpose）和 `071917c6-aa61-4ac4-80c2-35c2ccad9e93`（Barley seed cleaning/conditioning）因输出所选大麦种子流而可作为身份候选。二者不是默认清单数据集：使用前必须检查地理、技术、输入/输出状态、区室和定量参考，其交换量均不构成本 PCR 默认值。

### 过程：大麦繁种作物生产（`seed_crop_production`）

#### 输入

##### 产品流

###### 亲本大麦种子批（`parent_seed_input`）

亲本种子是建立繁种作物的可追溯生物产品输入，其上游负担须按边界概化仅链接一次。

- 选定流：大麦，种子 `c0da91a0-5054-4e3c-954f-80ceb0f6dac5`
- 流属性/单位：Mass / kg
- 数量规则：发放并播入声明田块的实测亲本种子净质量，仅按有记录的退回量调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 匹配作物周期的未加工收获种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_seed_lot_inputs`

###### 肥料与土壤改良产品（`fertiliser_products`）

对每种购入配方和改良剂在生成数据集中分别建行。选择与声明产品和养分形态相符的 Tiangong 流；已知配方不得以通用肥料替代。

- 选定流：配方和分类审查后选定的精确肥料或土壤改良产品
- 流属性/单位：Mass / kg 产品，另行保留养分含量
- 数量规则：交付量扣除有记录的退回量，并与声明田块施用日志核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 匹配作物周期的未加工收获种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs_operations`

###### 植物保护产品（`crop_protection_products`）

分别记录每种活性产品或配方。仅在没有配方特定流且披露代理限制时使用通用 Tiangong 农药流。

- 选定流：农药 `4b5aaf18-4297-4ff1-aaef-237d08e4b8f1`
- 流属性/单位：Mass / kg 产品及 kg 活性成分
- 数量规则：发放量扣除退回量和未开封结转量，并与施用日志核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 匹配作物周期的未加工收获种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs_operations`

###### 田间灌溉供水（`irrigation_water_input`）

仅在实际灌溉时纳入灌溉水。保留水源、取水或供应路线、仪表基准及灌溉面积。

- 选定流：灌溉用水 `4ad684b1-8e85-4dee-8d9c-55d1fa2d4432`
- 流属性/单位：Mass / kg
- 数量规则：计量或以其他记录证明的声明田块供水量；仅按 `water_consistency` 从体积换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 匹配作物周期的未加工收获种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_water`

###### 田间机械用柴油（`field_diesel`）

记录前景边界内自有或外包田间作业所供应的燃料。避免重复计算已含在外包作业数据集中的燃料。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg；可选的 net calorific value / MJ 另列
- 数量规则：按声明田块和周期分配的燃料发票、油罐记录或承包商特定燃料记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 匹配作物周期的未加工收获种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs_operations`

##### 废物流

##### 基本流

###### 土地占用与转化（`field_land_use`）

使用场址面积、作物持续时间、先前土地状态及所选评价约定，记录适用的土地占用和转化基本流。

- 选定流：针对声明土地状态和区室选定的精确 Tiangong 土地利用流
- 流属性/单位：Area*time 或 Area / 方法支持的单位
- 数量规则：根据有地理定位的田块面积、作物持续时间和有记录的土地利用历史计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 匹配作物周期的未加工收获种子
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_field_inputs_operations`

#### 输出

##### 产品流

###### 未加工收获大麦种子（`harvested_seed_output`）

该中间输出是在最终清选和分级之前收获的种子作物。除非已达到声明放行状态，否则不得表示为已清选参考产品。

- 选定流：声明未加工状态的前景中间大麦种子流；无默认 Tiangong UUID
- 流属性/单位：Mass / kg
- 数量规则：分配至声明种子批和田块的校准净收获质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未加工收获种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_output_mass`

###### 秸秆或其他可销售作物共产品（`field_coproduct`）

仅在材料为有益用途或销售而离开田间系统时记录单独产品输出；否则依据有记录去向分类和建模。

- 选定流：针对声明材料和去向选定的精确共产品流
- 流属性/单位：Mass / kg
- 数量规则：离开田间系统的实测或有记录质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未加工收获种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_waste_destinations`

##### 废物流

##### 基本流

###### 直接和间接氧化亚氮排放至空气（`managed_soil_n2o`）

根据匹配的氮活动数据和适用区域或 IPCC 方法计算管理土壤氧化亚氮。在计算记录中保持直接和间接组分可区分。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass / kg N2O
- 数量规则：由 `calc_managed_soil_n2o` 根据采集的氮投入、作物残余物、土壤和气候条件及声明因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 匹配作物周期的未加工收获种子
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_field_emissions`
- 来源：`ipcc-2019-managed-soils-n2o`

###### 氨挥发至空气（`fertiliser_ammonia`）

根据实际氮形态、施用方法、混入方式、天气或气候类别及适用区域方法计算或测量氨挥发。

- 选定流：氨 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：Mass / kg NH3
- 数量规则：由 `calc_n_volatilisation_and_leaching` 计算，或使用有记录的周期特定方法测量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 匹配作物周期的未加工收获种子
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_field_emissions`
- 来源：`ipcc-2019-managed-soils-n2o`

###### 硝酸盐损失至水体（`nitrate_to_water`）

仅以适用于场址条件的方法记录硝酸盐淋溶或径流，并选择得到方法和场址证据支持的受纳水区室。

- 选定流：硝酸根, emissions to water, unspecified `fe0acd60-3ddc-11dd-aa31-0050c2490048`；有支持时替换为更具体受纳区室
- 流属性/单位：Mass / kg nitrate
- 数量规则：由 `calc_n_volatilisation_and_leaching` 根据采集的氮活动数据和声明的淋溶或径流条件计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 匹配作物周期的未加工收获种子
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_field_emissions`
- 来源：`ipcc-2019-managed-soils-n2o`

###### 植保品排放（`crop_protection_emissions`）

当适用清单方法支持排放时，按每种已排放活性物质和受纳区室建立一行基本流。不得将施用产品质量视为与环境排放相同。

- 选定流：经方法审查后选定的精确活性物质基本流和受纳区室
- 流属性/单位：Mass / kg 已排放物质
- 数量规则：按声明清单方法根据施用记录实测或计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 匹配作物周期的未加工收获种子
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_field_emissions`

### 过程：收获及收获后干燥或处理（`harvest_postharvest`）

#### 输入

##### 产品流

###### 进入收获后处理的收获种子（`postharvest_seed_input`）

接收来自繁种田的匹配未加工种子批，在干燥和处理全程保留种子批身份。

- 选定流：声明未加工状态的前景中间大麦种子流；无默认 Tiangong UUID
- 流属性/单位：Mass / kg
- 数量规则：按种子批记录的校准接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 交付加工的收获后种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_postharvest_mass_energy`

###### 收获和干燥能源（`postharvest_energy`）

按所选供应流和设备分别记录燃料、电力和热。仅纳入归属于声明种子批的能源。

- 选定流：与载能体、电压或等级、地理及组合相匹配的精确燃料、电力或热供应流
- 流属性/单位：所选流支持的 Energy 或 Mass / kWh、MJ 或 kg
- 数量规则：按匹配种子批和作业分配的仪表、燃料、发票或承包商记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 交付加工的收获后种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_postharvest_mass_energy`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 交付加工的未加工种子（`conditioning_intake_output`）

在田间收获和任何农场内干燥或临时储存后，记录交付加工时的种子批质量和水分。

- 选定流：声明未加工状态的前景中间大麦种子流；无默认 Tiangong UUID
- 流属性/单位：Mass / kg
- 数量规则：按种子批记录的校准净输出质量，并链接交接时水分结果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 交付加工的未加工种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_postharvest_mass_energy`

##### 废物流

##### 基本流

###### 返回环境的收获和收获后损失（`postharvest_field_losses`）

具有重要性时记录损失至田间或其他环境区室的种子和作物材料。选择与观测去向相符的流和区室。

- 选定流：针对观测去向选定的精确生物质损失基本流和区室
- 流属性/单位：Mass / kg
- 数量规则：实测损失或由质量平衡推导的损失，并披露不确定性和方法
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 交付加工的未加工种子
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_postharvest_mass_energy`

### 过程：种子接收、清选、分级和放行（`seed_conditioning`）

#### 输入

##### 产品流

###### 接收加工的未加工大麦种子（`conditioning_seed_input`）

在清选和分级前接收、称量、识别并取样每个来料种子批。

- 选定流：声明未加工状态的前景中间大麦种子流；无默认 Tiangong UUID
- 流属性/单位：Mass / kg
- 数量规则：按种子批记录的校准净接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已接受种子级大麦种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_mass_energy`

###### 电力和其他加工能源（`conditioning_energy`）

记录接收、干燥、清选、分级、输送、除尘、取样和检测设备使用的电力、燃料和热。

- 选定流：与载能体、电压或等级、地理及消费组合相匹配的精确能源供应流；无通用默认 UUID
- 流属性/单位：所选流支持的 Energy 或 Mass / kWh、MJ 或 kg
- 数量规则：通过直接分表、运行时间和额定负荷或披露的设施分配键，将仪表或发票数量分配到声明种子批
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已接受种子级大麦种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_mass_energy`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已接受种子级大麦种子（`accepted_barley_seed`）

已接受输出已清选至播种状态，并链接种子批特定质量结果和放行证据。

- 选定流：大麦，种子 `c0da91a0-5054-4e3c-954f-80ceb0f6dac5`
- 流属性/单位：Mass / kg
- 数量规则：加工放行的校准已接受净质量，不含废料、仍在制的返工及非参考共产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已接受种子级大麦种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_seed_quality_release`

##### 废物流

###### 种子清选废料（`seed_cleaning_rejects`）

仅当有记录去向符合数据集废物分类时，才将筛余物和不合格种子记录为废物；若销售或有益利用，则建模为共产品。

- 选定流：种子清选废弃物 `6bfe90ae-a960-45dd-b1fa-89581c562763`
- 流属性/单位：Mass / kg
- 数量规则：按种子批和废料流记录的校准废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已接受种子级大麦种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_waste_destinations`

##### 基本流

###### 加工粉尘排放至空气（`conditioning_dust`）

在有测量或适用的有记录计算方法时记录控制设备后的粉尘排放。不得将收集粉尘等同于排放粉尘。

- 选定流：经设备和粒径审查后选定的精确颗粒物基本流和空气区室
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或根据处理质量、控制效率和引用的设施方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 已接受种子级大麦种子
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_mass_energy`

### 过程：种子处理、包装和储存（`treatment_packaging_storage`）

#### 输入

##### 产品流

###### 进入最终作业的已接受种子（`final_operations_seed_input`）

仅当处理、包装或储存在声明边界前发生时，才将已接受种子批转入这些作业。

- 选定流：大麦，种子 `c0da91a0-5054-4e3c-954f-80ceb0f6dac5`
- 流属性/单位：Mass / kg
- 数量规则：进入所纳入最终作业的校准净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 声明农场门已接受参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_operations`

###### 种子处理产品（`seed_treatment_products`）

分别记录每种处理配方和活性成分，并将处理质量和施用率链接至种子批。

- 选定流：配方和分类审查后选定的精确处理产品流
- 流属性/单位：Mass / kg 产品及 kg 活性成分
- 数量规则：发放量扣除退回量和残余物，并与已处理种子批质量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 声明农场门已接受参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_operations`

###### 包装材料（`seed_packaging_materials`）

记录随参考产品离开的袋、内衬、标签、托盘和其他包装。可重复使用包装须披露使用次数和分配。

- 选定流：针对每种材料和路线选定的精确包装材料流
- 流属性/单位：Mass 或件数 / kg 或 item
- 数量规则：发放给放行种子批的包装扣除未使用退回量，并记录重复使用次数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 声明农场门已接受参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_operations`

###### 处理、包装和储存能源（`final_operations_energy`）

记录所纳入最终作业和储存的实际电力、燃料或热。

- 选定流：与载能体、电压或等级、地理及消费组合相匹配的精确能源供应流；无通用默认 UUID
- 流属性/单位：所选流支持的 Energy 或 Mass / kWh、MJ 或 kg
- 数量规则：按披露键将仪表或发票数量分配至声明种子批；储存能源还应反映持续时间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 声明农场门已接受参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_operations`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 声明农场门的大麦种子（`reference_barley_seed_output`）

这是声明边界前所有纳入作业之后的最终参考产品，其处理、包装、储存、认证和检测状态必须与声明限定信息一致。

- 选定流：大麦，种子 `c0da91a0-5054-4e3c-954f-80ceb0f6dac5`
- 流属性/单位：Mass / kg
- 数量规则：在声明边界放行的校准种子批净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 声明农场门已接受参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_seed_quality_release`

##### 废物流

###### 处理和包装废物（`final_operations_waste`）

按类型和去向记录未用处理残余物、受污染包装、破损袋及其他废物。

- 选定流：针对材料、危害状态和处理路线选定的精确废物流
- 流属性/单位：Mass / kg
- 数量规则：按类型和去向实测的废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 声明农场门已接受参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_waste_destinations`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | 所有多功能前景过程 | 首先通过细分单独计量的作业，或在与目标和范围一致时通过系统扩展避免分配。记录决定和受影响流。 | `ec-pef-2021-2279` |
| `allocation_physical_relation` | 无法避免的多功能性 | 若细分或系统扩展不适用，使用能反映负担随共产品变化的因果物理关系。说明关系、公式、数量和敏感性。 | `ec-pef-2021-2279` |
| `allocation_other_relation` | 无可辩护物理关系 | 仅当不存在可辩护物理关系时，使用经济价值等其他经论证关系。采用地理和期间匹配数据，披露价格来源和波动，并报告敏感性。 | `ec-pef-2021-2279` |
| `allocation_output_classification` | 秸秆、不合格种子、清选废料和包装退回 | 分配前确定去向及经济或功能角色。出售的饲料流或有用材料不会自动成为废物；废物标签本身也不支持零负担。 | `fao-seeds-toolkit-module-2`; `ec-pef-2021-2279` |
| `allocation_parent_seed` | 亲本大麦种子输入 | 将上游亲本种子数据集作为输入负担带入。不得把当前周期向后分配至自身亲本种子输入。 | `ec-pef-2021-2279` |
| `allocation_reusable_packaging` | 可重复使用的袋、箱和托盘 | 按有记录的预期使用次数分配生产和生命周期末负担，并在范围内纳入损失、清洗和返程运输。 | `ec-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_seed_lot_inputs` | seed_crop_production | 亲本种子输入 | 种子采购、发放、退回和种子批记录 | 种子批 id；品种；级别；处理；供应商；来源地理；认证方案；毛重、皮重、净重、发放、退回和播种质量；上游数据集引用 | 核对供应商文件、校准衡器票据、库房发放、播种机装载记录和田间日志 | kg 和描述字段 | 每个种子批及田间发放 | 完整声明作物周期 | 所有声明田块和亲本种子批 | 按匹配田块和周期汇总净播种质量；保留种子批链接 | 供应商记录、种子批标签、认证或质量记录、衡器校准、核对签字 |
| `cp_field_inputs_operations` | seed_crop_production | 肥料、改良剂、植保品、燃料、土地和作业 | 发票、库存流动、施用日志、机械日志、承包商记录、田间 GIS 和土壤记录 | 产品身份；配方；养分或活性含量；数量；退回；施用日期和用量；田块 id 和面积；机械工时；燃料；土壤和土地利用历史 | 将采购和库存与有地理定位的田间作业记录核对 | kg、kg 养分、kg 活性成分、L 或 kg 燃料、h、ha、日期 | 每次交付和施用；周期核对 | 完整声明作物周期 | 所有声明田块和承包商 | 仅在身份、田块、期间和单位协调后汇总；按披露的因果键分配共享作业 | 发票、标签、校准施用器或油罐记录、承包商声明、田块图、土壤分析 |
| `cp_irrigation_water` | seed_crop_production | 灌溉水 | 仪表、取水、泵和灌溉日志 | 来源；仪表起止；体积；灌溉田块和面积；日期；泵能耗；换算密度 | 优先使用校准仪表；否则采用披露不确定性的有记录工程估算 | 原始 m3 和换算 kg | 每次灌溉事件或仪表间隔 | 完整灌溉季 | 所有声明灌溉田块 | 汇总匹配事件；保留来源和换算记录 | 仪表校准、取水许可或供应商发票、泵记录、田间日志 |
| `cp_field_output_mass` | seed_crop_production | 收获种子和田间共产品 | 收割机、地磅、入库、水分和去向记录 | 田块 id；种子批 id；毛重、皮重、净重；水分；收获日期；共产品质量和去向 | 采用校准地磅或衡器并核对种子批 | kg 和水分百分比 | 每车和每批 | 声明作物周期的完整收获 | 所有声明田块和接收仓库 | 汇总匹配净质量；防止票据重复；保留水分基准 | 衡器校准、票据序列检查、水分检测、田块至种子批核对 |
| `cp_field_emissions` | seed_crop_production | 管理土壤和植保品排放 | 链接田间活动数据的排放计算工作簿 | N 形态和含量；施用 N；有机 N；作物残余物 N；土壤和气候类别；挥发和淋溶条件；方法版本；因子来源；活性物质；区室 | 使用声明区域或 IPCC 清单方法，根据经批准田间记录计算 | kg N、kg N2O、kg NH3、kg nitrate、kg 已排放物质 | 每田块和作物周期一次；输入数据变化时更新 | 完整声明作物周期 | 所有声明田块 | 先按田块计算再按输出质量汇总；保留直接/间接组分和区室 | 锁定公式、方法引用、因子表、审查者检查、输入记录链接 |
| `cp_postharvest_mass_energy` | harvest_postharvest | 收获种子、损失、干燥和处理能源 | 进出衡器票据、水分检测、仪表、燃料、运行时间和储存日志 | 种子批 id；输入输出质量；输入输出水分；载能体和数量；干燥温度；运行时间；损失和去向 | 校准衡器和仪表；仅在无分表时按运行时间分配 | kg、水分百分比、kWh、MJ、h | 每个种子批、批次和仪表间隔 | 收获至加工交接 | 所有纳入的收获、干燥和处理场址 | 将种子批质量和能源核对至加工接收；披露共享设施分配 | 校准、票据、仪表或发票记录、水分检测、操作员签字 |
| `cp_conditioning_mass_energy` | seed_conditioning | 接收、清选、分级、废料、粉尘和能源 | 接收、批次、设备、仪表、衡器、除尘和废料记录 | 种子批 id；输入质量；接受质量；各废料质量；返工；仪表值；运行时间；设备；捕集和排放粉尘数据 | 校准衡器和仪表并进行批次质量平衡 | kg、kWh、MJ、h | 每个种子批或加工批次 | 完整加工周期 | 所有纳入加工线和种子批 | 批次质量平衡后汇总；按披露因果键分配共享能源 | 校准、种子批追溯、批次报告、仪表或发票、除尘记录、主管签字 |
| `cp_seed_quality_release` | seed_conditioning | 已接受参考产品和质量放行 | 取样、实验室、认证、加签和放行记录 | 种子批 id；样品 id；取样方法和日期；实验室；方法版本；发芽；净度分析；水分；种子健康；品种身份；放行决定；接受质量 | 按声明方案进行代表性种子批取样和胜任实验室检测 | kg、百分比、计数、日期、描述字段 | 每种子批及所需复检 | 对放行种子批保持当前有效 | 每个参考产品种子批 | 除非方案允许混批且保持追溯，否则不得跨种子批平均 | 样品监管链、实验室报告、认证或质量声明、标签、放行批准 |
| `cp_final_operations` | treatment_packaging_storage | 处理、包装、储存和最终能源 | 处理批次、配方、包装发放、仪表、库存和储存日志 | 种子批 id；处理质量；产品和活性成分；数量；包装材料和件数或质量；复用次数；仪表数据；储存日期和条件 | 将发放材料和能源与放行种子批核对 | kg、item、kWh、MJ、天、描述字段 | 每批、每次包装发放和仪表间隔 | 加工放行至声明边界 | 所有纳入的处理、包装和储存场址 | 按放行种子批汇总；储存分配反映时长；披露复用模型 | 批次记录、标签、安全和产品记录、库存核对、仪表或发票、仓库日志 |
| `cp_coproduct_waste_destinations` | seed_crop_production; seed_conditioning; treatment_packaging_storage | 共产品、废料、残余物和废物 | 衡器票据、转移单、销售、处理和去向记录 | 材料身份；质量；污染或危害状态；去向；价格或物理关系；日期；接收方 | 称量每个外运流并与接收证据核对 | kg、使用经济分配时的货币、描述字段 | 每次发运或处置事件 | 完整声明作物和加工周期 | 所有前景场址和外运流 | 按材料和去向汇总；保留共产品与废物决定和分配证据 | 衡器校准、转移或托运单、发票、接收方验收、处理证明 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个清单行 | 归一化数量 = 适用时经分配后的过程范围数量 / 声明边界已接受参考产品质量 | 过程数量；已接受参考产品质量；分配因子 | 每 1 kg 参考产品的数量 |  |
| `calc_process_mass_balance` | 田间输出、收获后、加工和最终作业 | 质量平衡差 = 同一水分基准下实测总输入质量 - 产品、共产品、废物、环境损失和库存变化总输出质量 | 匹配种子批质量；水分基准；库存变化；实测或计算损失 | 带解释的绝对和百分比核对差 | `fao-seeds-toolkit-module-2` |
| `calc_moisture_conversion` | 明确要求的干基或统一水分比较 | 仅在声明湿基或干基约定后换算；保留实测接收状态质量和水分结果作为源值 | 质量；实测水分；基准约定 | 换算后的比较质量，绝不静默替代参考流 | `fao-seeds-toolkit-module-3`; `ista-rules-seed-testing` |
| `calc_managed_soil_n2o` | 管理土壤直接和间接 N2O | 对匹配的合成 N、有机 N、作物残余物 N、矿化、挥发、淋溶、土壤和气候活动数据应用所选国家、区域或 IPCC 层级公式；需要时明确将 N2O-N 换算为 N2O | 田间 N 活动数据；方法公式；因子；气候和淋溶条件 | 按田块和周期的 kg 直接 N2O 与 kg 间接 N2O | `ipcc-2019-managed-soils-n2o` |
| `calc_n_volatilisation_and_leaching` | 氨和硝酸盐损失 | 应用适合肥料形态、施用和混入、土壤、气候、灌溉及受纳区室的方法；保留 N 物种换算 | 田间 N 活动数据；方法；因子；场址条件 | kg NH3 至空气及 kg nitrate 至所选水区室 | `ipcc-2019-managed-soils-n2o` |
| `calc_energy_conversion` | 燃料和能源 | 换算能量 = 记录的载能体数量 × 声明换算因子；不得对电力应用热值 | 发票或仪表；载能体；低位热值或其他换算因子及来源 | 载能体特定数量及可选比较用 MJ |  |
| `calc_allocation` | 多功能前景过程 | 仅在筛查细分和系统扩展后使用所选分配规则；已分配数量 = 未分配数量 × 有记录分配因子 | 未分配清单；共产品数量；物理关系或匹配经济数据 | 已分配清单及敏感性结果 | `ec-pef-2021-2279` |
| `calc_seed_quality_status` | 参考产品种子批 | 将种子批特定检测结果与明确声明的方案、司法辖区、合同和种子级别比较；分别报告实测值和决定 | 实验室结果；方法版本；声明限值；种子批身份 | 有证据的接受、扣留、返工或拒收状态 | `fao-seeds-toolkit-module-3`; `ista-rules-seed-testing`; `eu-cereal-seed-directive-66-402` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 所有前景记录 | 保持田块、亲本种子、收获载荷、加工批次、质量样品、放行种子批与参考产品质量之间不中断的链接。 | 种子批台账、标签、衡器票据、批次记录、实验室监管链和放行记录；`fao-seeds-toolkit-module-2`; `fao-seeds-toolkit-module-3` |
| `dq_temporal_coverage` | 作物和加工周期 | 覆盖完整作物和加工周期，包括期初期末库存及声明边界前储存。说明活动数据与背景数据集年份不匹配。 | 带日期记录、库存核对和时间代表性审查；`ec-pef-2021-2279` |
| `dq_geographic_technology` | 前景和上游数据集 | 匹配生产地区、栽培制度、灌溉状态、机械、干燥、加工、处理和能源组合；论证代理。 | 场址说明及地理和技术代表性评价；`ec-pef-2021-2279` |
| `dq_completeness_mass_balance` | 所有必需过程 | 完成过程质量平衡并核对采购、施用、输出、废料、废物和库存变化。解释未解决差异，不得强行平衡。 | 核对报告、缺失记录日志和审查者签字。 |
| `dq_measurement_control` | 仪表、衡器、实验室检测和计算值 | 记录校准或能力证据、原始单位、换算因子、公式、因子版本和责任审查者。 | 校准证书、实验室能力范围、锁定计算工作簿和审计轨迹。 |
| `dq_seed_quality` | 参考产品种子批 | 对发芽、净度分析、水分及其他声明属性使用代表性种子批取样和已识别检测方法。保持实测结果与法律或合同限值分离。 | `fao-seeds-toolkit-module-3`; `ista-rules-seed-testing`; `eu-cereal-seed-directive-66-402` |
| `dq_phytosanitary_scope` | 国际流通种子或受管制有害生物声明 | 声明适用植物检疫要求并保留检查、取样、检测和认证证据；不得将一个目的地要求泛化至所有种子批。 | `ippc-ispm-38` 和种子批特定植物检疫文件。 |
| `dq_emission_method` | 田间和设施排放 | 说明方法、版本、因子、单位、换算步骤、区室、区域条件及结果为实测还是计算。 | 计算记录和引用方法；`ipcc-2019-managed-soils-n2o`。 |
| `dq_yield_context` | 产量合理性审查 | 仅与匹配的官方国家或区域序列比较，并将其作为 QA 语境，不作为合格阈值或实测产量替代。 | 前景田间/输出记录和 `faostat-crops-livestock-production`。 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 产品类别和参考流 | 确认产品是专门用于种子目的的大麦，且所选 Tiangong 参考流、Mass 属性、Units of mass 单位组及 kg 单位与第 3 节标识符完全一致。 |  |
| `validate_required_qualifiers` | 每个参考产品种子批 | 任一必需限定信息缺失，或处理、认证、质量检测、包装、储存、地理或边界声明冲突时，完整性不通过。 | `fao-seeds-toolkit-module-3`; `ista-rules-seed-testing`; `eu-cereal-seed-directive-66-402` |
| `validate_process_coverage` | 前景系统 | 确认所有必需过程及声明边界前实际发生的每项条件过程均已表示；核实亲本种子和购入投入的上游链接或明确数据缺口。 | `environdec-pcr-2020-07`; `fao-seeds-toolkit-module-2`; `ec-pef-2021-2279` |
| `validate_lot_mass_balance` | 每个过程和种子批 | 在一致水分基准上重算质量平衡，识别返工和库存变化并调查无法解释的差异。 | `fao-seeds-toolkit-module-2` |
| `validate_field_emissions` | 管理土壤和植保品排放 | 检查活动数据血缘、方法适用性、因子版本、物种换算、受纳区室和归一化。不得接受施用产品质量作为排放质量。 | `ipcc-2019-managed-soils-n2o` |
| `validate_allocation` | 多功能过程 | 核实分配层级、输出分类、公式、因子之和、匹配价格或物理数据及敏感性披露。 | `ec-pef-2021-2279` |
| `validate_flow_identity` | 每个含 UUID 的行 | 不带数据集版本重新查询 Tiangong，并确认流名称、流类型、分类或区室、参考属性及建模角色。语义相似但不匹配的行不得作为默认值。 |  |
| `validate_data_quality` | 前景和上游证据 | 检查完整性、时间、地理、技术、计量和精度证据，并披露代理或缺失数据限制。 | `ec-pef-2021-2279` |
| `validate_quality_release` | 已接受参考产品 | 确认种子批特定代表性取样、实验室方法、实测结果、放行决定及适用方案或司法辖区。本 PCR 不提供通用发芽、净度或水分阈值。 | `fao-seeds-toolkit-module-3`; `ista-rules-seed-testing`; `eu-cereal-seed-directive-66-402` |
| `validate_reasoned_estimates` | 任何未来暂定定量范围 | `reasoned_estimate` 只能用作可替换的 QA 筛查范围，绝不得作为默认清单数量、法律限值、接受阈值或合格证明；须明确识别，并在获得经审查证据后替换。 |  |
| `validate_sources` | 所有有来源支持的规则 | 确认每个引用来源 id 均存在于第 11 节，且网络来源记录检索日期；来源发现摘要和 Tiangong 查询轨迹不是证据记录。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景大麦种子数据包及链接的单元过程清单；仅在前景数据包通过校验后方可派生汇总数据集 |
| downstream_use | secondary_dataset; background_dataset; 支持 flow、process 和 lifecyclemodel 投影 |
| allowed_use | 当范围、地理、作物周期、种子级别、处理、质量、包装、储存、分配和数据质量兼容时，用于声明大麦种子批或代表性生产组合的归因型摇篮到声明农场门建模 |
| excluded_use | 普通大麦籽粒；制麦、饲料或食用大麦；其他谷物种；销售后下游作物生产；通用种子质量阈值；将候选 Tiangong 过程作为未经审查默认值；没有明确后果型模型的后果型声明 |
| required_metadata | PCR id 和内容版本；参考流 UUID；地理和边界；作物与加工周期；品种；种子级别；认证或质量方案；种子批或汇总逻辑；处理、包装和储存状态；过程覆盖；上游数据集；分配；排放方法；来源 id；校验结果 |
| required_quality_disclosure | 前景覆盖；记录和校准证据；样品和检测方法；缺失数据和代理；代表性；质量平衡差；排放因子选择；分配敏感性；不确定性；任何暂定 QA 筛查范围 |
| update_trigger | 产品身份或 Tiangong UUID、栽培或加工路线、法律或认证框架、检测方法、排放方法或因子、分配选择、地理、技术、背景数据集，或改变规范性规则的证据发生重大变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `environdec-pcr-2020-07` | standard | EPD International, PCR 2020:07, *Arable and vegetable crops*, official PCR file: https://api.environdec.com/api/v1/EPDLibrary/Files/e8d0a500-4a67-4923-28e9-08db259f9365/Data（检索于 2026-08-07） | 农业 PCR 范围、栽培边界、上游投入、田间排放和农业数据覆盖 |
| `ec-pef-2021-2279` | official_guidance | European Commission, Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method: https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng（检索于 2026-08-07） | 多功能性层级、企业特定数据、代表性、数据质量、代理和数据缺口披露 |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC, *2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories*, Volume 4, Chapter 11, N2O emissions from managed soils and CO2 emissions from lime and urea application: https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf（检索于 2026-08-07） | 管理土壤直接和间接 N2O、氮活动数据、挥发及淋溶方法结构 |
| `fao-seeds-toolkit-module-2` | official_guidance | FAO and AfricaSeeds, *Seeds Toolkit, Module 2: Seed processing: principles, equipment and practice*: https://openknowledge.fao.org/server/api/core/bitstreams/2019283b-6271-4b2e-82c0-19ac6256c591/content（检索于 2026-08-07） | 接收、种子批识别、干燥、清选、分级、处理、包装、储存、追溯和过程分解 |
| `fao-seeds-toolkit-module-3` | official_guidance | FAO and AfricaSeeds, *Seeds Toolkit, Module 3: Seed quality assurance*: https://openknowledge.fao.org/server/api/core/bitstreams/b601435e-9c03-4ca5-8927-9f712418ec38/content（检索于 2026-08-07） | 取样、物理净度、发芽、水分、生活力、活力、种子健康、品种身份、认证和质量记录 |
| `ista-rules-seed-testing` | standard | International Seed Testing Association, *International Rules for Seed Testing*: https://www.seedtest.org/en/publications/international-rules-seed-testing.html（检索于 2026-08-07） | 统一取样、种子批检测、报告及发芽方法身份 |
| `eu-cereal-seed-directive-66-402` | standard | Council Directive 66/402/EEC on the marketing of cereal seed, consolidated access: https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:31966L0402（检索于 2026-08-07） | 谷物种子身份、认证、发芽、净度分析、健康、种子批和标签证据；仅在适用时使用 |
| `ippc-ispm-38` | standard | International Plant Protection Convention, ISPM 38, *International movement of seeds*: https://www.ippc.int/en/publications/84340/（检索于 2026-08-07） | 国际流通种子的有害生物风险范围、检查、取样、检测和植物检疫认证 |
| `faostat-crops-livestock-production` | dataset | FAO, FAOSTAT Crops and Livestock Products data: https://www.fao.org/faostat/（检索于 2026-08-07） | 按匹配地理和年份进行产量与生产合理性审查；不是默认清单或阈值 |
