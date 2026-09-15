---
schema_version: 1
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.interchangeable-tools-for-hand-tools-or-for-machine-tools-including-dies-for-drawing-or-6e18c194
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 手工工具或机床的可互换工具，包括金属拉制或压挤模具、用于钻岩或土钻的工具；机器用刀具；烧结金属碳化物或金属陶瓷制的用作工具而未安装的板、杆及类似品

## 1. 范围与适用性

本 PCR 适用于 CPC 42922 语义边界内成品的从摇篮到工厂大门前景数据包。覆盖可互换的切削、成形、钻削、镗削及类似工具，金属拉制或压挤模具，钻岩或土钻工具，机器用刀具，以及烧结金属碳化物或金属陶瓷制的未安装板、杆、尖及类似工具用品。本规则通过明确的路线条件兼容钢制、硬质合金和金属陶瓷路线，不把每种材料和工具几何形状拆成不同 PCR。

前景边界始于制造场址接收的可追溯钢棒、钢板、近净成形坯件或分别明确的硬质合金/金属陶瓷粉末，止于制造厂大门处的合格成品及其销售包装。各项采购投入的上游生产采用供应商特定数据集，或技术、地理具有代表性的背景数据集。资本设备、客户使用、使用阶段工具磨损、重磨和报废处理不在默认边界内。研究可扩展至工厂大门之外，但应单独报告这些阶段。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.interchangeable-tools-for-hand-tools-or-for-machine-tools-including-dies-for-drawing-or-6e18c194 |
| classification_refs | CPC 3.0: 42922 |
| covered_products | 手工工具或机床的可互换工具；金属拉制或压挤模具；钻岩或土钻工具；机器用刀具；烧结金属碳化物或金属陶瓷制的未安装板、杆、尖及类似工具用品。 |
| excluded_products | 与可互换工作工具分开分类的完整手工工具；不含工作工具的刀柄或工具夹；完整机床；不具有工具功能的通用紧固件或耐磨件。 |
| representative_product | 已声明且合格的单件成品工具或同质批次，按成品净质量归一化。 |
| production_route | 钢坯机械加工与热处理路线，或硬质合金/金属陶瓷粉末制备、压制与烧结路线，之后进行磨削/精加工；CVD 涂层为条件过程；包括检验和销售包装。 |
| market_state | 制造厂大门处已完工、经检验、可销售的工具产品，并声明涂层和包装状态。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 执行已声明切削、成形、钻削或耐磨工具功能的合格成品可互换工具、模具、机器用刀具、钻削/钻探工具或未安装硬质合金/金属陶瓷工具用品。 |
| How much | 成品净质量 1 kg，不含销售包装。 |
| How well | 满足已声明图纸或产品标准、尺寸、公差、硬度或其他规定性能、表面处理和验收准则。 |
| How long or cycle | 一次工厂大门产出；不主张使用寿命，比较使用性能时应另行建模。 |
| reference_flow_link | `out_finished_interchangeable_tool` 表示的合格成品实测净质量，并归一化至 1 kg。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 成品净质量 1 kg |
| 参考产品流 | CPC 42922 成品可互换工具产品 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 工具族和几何形状；图纸或产品标准；基体材料和牌号；适用时的再生粉末含量；热处理或烧结路线；涂层化学组成和技术或未涂层状态；硬度和验收准则；产品净质量；包装状态；制造场址和地理区域；数据期 |

构建前景数据包时，`必需限定信息` 的每一项都应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。限定信息缺失时参考流不完整。当数据包表示其他覆盖产品族时，不得用范围较窄的硬质合金刀片或仅硬质合金 UUID 替代尚未解决的广义产品流 UUID。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品和最终产出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在所有纳入的精加工和涂层工序完成后、销售包装前计量合格成品；排除包装、废品、夹具和可重复使用载具。 |
| `item_to_mass` | 以件数记录的生产数据 | Mass | kg | 使用批次实测净质量或经核实的产品特定单件质量换算；披露件数、实测质量、产品几何形状和换算来源。 |
| `electricity_energy` | 电力投入 | Net calorific value | MJ | 保留电表原始能量基准；电表以 kWh 报告时，严格按 1 kWh = 3.6 MJ 换算并保留原始读数。 |
| `gas_reference_conditions` | 气体燃料和涂层气体投入 | 所选流指定的 Volume 或 Mass | m3 或 kg | 对每项体积记录声明参比温度和压力；没有书面换算时不得混用标准立方米和实际立方米。 |
| `mass_balance_basis` | 材料、中间体、产品、废钢和污泥行 | Mass | kg | 一个生产周期内采用一致的含水率和库存变化口径，并核对投入质量与产品、内部结转、可回收废料、废物及实测损失。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 前景制造场址接收的可追溯工具钢棒、钢板或近净成形坯件，或分别明确的硬质合金/金属陶瓷粉末和再生粉末。 |
| starting_condition_role | 场址前景采集的物理入口；每项采购投入的上游生产和交付均需链接背景数据集。 |
| product_classification_scope | CPC 42922 语义边界内的成品，不受供应商数据集采用的分类体系限制。 |
| recursive_input_rule | 采购的半成品或成品 CPC 42922 工具用品作为一项产品投入记录并链接其上游数据集；同一前景数据包内不再重建其生产。 |
| upstream_dataset_requirement | 优先采用供应商特定数据集；否则选用在技术、材料牌号、再生含量、地理和交付状态方面具有代表性的背景数据集，并披露替代。 |
| disclosure | 声明产品族、基体路线、采购投入状态、再生含量、涂层路线、包装状态、场址地理、数据期、外包工序以及每个排除或新增的生命周期阶段。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景制造 | 纳入采购材料制备、路线适用的热固结或热处理、机械加工/磨削、路线适用的涂层、检验和销售包装，直至工厂大门。 | `loglisci-priarone-settineri-2013-tool-manufacturing`; `hsu-2024-turning-insert-lca` |
| `boundary_atomic_actuals` | 所有纳入过程 | 将每项实际采购材料、气体、公用工程、废物和直接基本流排放分别记录为原子交换；保密配方可以隐去数量，但不得隐去完整模型所需的存在性和化学身份。 | `hsu-2024-turning-insert-lca`; `ec-2001-non-ferrous-metals-bref` |
| `boundary_outsourced_steps` | 外包热处理、涂层或精加工 | 外包工序仍在从摇篮到工厂大门产品系统内；把运输的中间体链接到供应商过程数据集，并披露运输和供应商技术。 | `loglisci-priarone-settineri-2013-tool-manufacturing` |
| `boundary_internal_recycling` | 返工和回收硬质合金 | 内部返工作为内部循环处理，不重复给予产品抵扣；分别计量采购或外部回收的粉末，并披露其来源和再生含量。 | `hsu-2024-turning-insert-lca`; `ec-2001-non-ferrous-metals-bref` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `material_preparation` | 材料接收、粉末/混合料制备和坯件成形 | required | 纳入产品实际使用的钢材或粉末投入；对不适用的路线行记录有依据的零用量。 | 前景材料制备 | 每个实测生产周期的已制备坯件 kg |
| `thermal_consolidation` | 路线特定的热处理或粉末压制与烧结 | conditional | 制造场址或纳入范围的供应商实施热处理、压制、烧结或等效热固结时纳入。 | 前景热加工 | 每批处理或烧结坯件 kg |
| `machining_grinding` | 机械加工、磨削、刃口钝化和尺寸精加工 | required | 纳入已声明工具族实际采用的机械加工和磨削精加工顺序。 | 前景形状和刃口生成 | 每个生产周期合格机加工产出 kg |
| `cvd_coating` | 化学气相沉积涂层 | conditional | 仅在采用 CVD 涂层时纳入；配方特定前驱体若未列出，应各自增加一个原子行。 | 前景表面处理 | 涂层批次数和涂层产出 kg |
| `inspection_packaging` | 最终检验、标记和销售包装 | required | 纳入最终验收、标记和实际销售包装配置；只有有记录的散装无包装产品才可记录零包装。 | 前景最终处理 | 合格成品净质量 kg |

### 过程：材料接收、粉末/混合料制备和坯件成形（`material_preparation`）

#### 输入

##### 产品流

###### 高速工具钢圆棒（`in_tool_steel_bar`）

记录钢制路线所用的已接收高速工具钢或其他已声明工具钢圆棒。仅采用粉末的硬质合金/金属陶瓷路线不适用本行。

- 选定流：高速工具钢圆棒
- 流属性/单位：Mass / kg
- 数量规则：实测消耗的接收质量，并按期初和期末库存调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`loglisci-priarone-settineri-2013-tool-manufacturing`

###### 碳化钨粉末（`in_tungsten_carbide_powder`）

记录硬质合金或金属陶瓷配料所消耗的单独明确碳化钨粉末；再生含量和供应商粉末路线为必需限定信息。

- 选定流：碳化钨粉末 `e2c47d47-229c-44f3-9ed0-e74fbbf0176f`
- 流属性/单位：Mass / kg
- 数量规则：实测领用质量扣除经核实的退库质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`hsu-2024-turning-insert-lca`; `ec-2001-non-ferrous-metals-bref`

###### 钴粉（`in_cobalt_powder`）

粉末混合料中添加钴结合剂粉末时单独记录；按所选流属性一致使用钴含量质量。

- 选定流：钴粉 `abe5e361-25a1-4258-a481-589bf66e3b13`
- 流属性/单位：Cobalt content / kg
- 数量规则：投入已声明粉末配方的实测钴含量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`hsu-2024-turning-insert-lca`

###### 材料制备用电力（`in_prep_electricity`）

记录输送至混料、压制或坯件成形设备及可直接归属辅助设备的电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量能量，或生产周期运行时长乘以经核实负荷，包括可归属待机和辅助用能
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meters`
- 来源：`loglisci-priarone-settineri-2013-tool-manufacturing`; `hsu-2024-turning-insert-lca`

#### 输出

##### 产品流

###### 已制备工具坯件（`out_prepared_tool_blank`）

记录转入热加工或机械加工的路线特定已制备坯件，作为内部中间体。

- 选定流：已制备工具坯件
- 流属性/单位：Mass / kg
- 数量规则：离开本过程的合格已制备坯件实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_outputs`
- 来源：`loglisci-priarone-settineri-2013-tool-manufacturing`; `hsu-2024-turning-insert-lca`

### 过程：路线特定的热处理或粉末压制与烧结（`thermal_consolidation`）

#### 输入

##### 产品流

###### 热固结用电力（`in_thermal_electricity`）

记录已声明路线中电炉、粉末压制、真空系统、冷却系统和可直接归属辅助设备的电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：实测批次能量，并分配至合格处理产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meters`
- 来源：`hsu-2024-turning-insert-lca`

###### 炉加热用天然气（`in_thermal_natural_gas`）

只有纳入范围的炉直接燃烧气态天然气时才记录；否则对本行记录有依据的零用量。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：按已声明参比条件计量的交付气体，并分配至生产批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_combustion`
- 来源：`loglisci-priarone-settineri-2013-tool-manufacturing`

###### 热工设备用工艺用水（`in_thermal_process_water`）

记录冷却或热工设备跨越前景边界的补充水；内部循环水不重复记录。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量或储罐平衡得到的补充水，扣除有记录的边界外回流水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_meters`
- 来源：`hsu-2024-turning-insert-lca`

#### 输出

##### 产品流

###### 经热处理或烧结的工具坯件（`out_treated_tool_blank`）

记录转入机械加工的合格热处理或烧结坯件，作为内部中间体。

- 选定流：经热处理或烧结的工具坯件
- 流属性/单位：Mass / kg
- 数量规则：热加工后、机械加工前的合格坯件实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_outputs`
- 来源：`loglisci-priarone-settineri-2013-tool-manufacturing`; `hsu-2024-turning-insert-lca`

##### 基本流

###### 炉燃烧产生的直接化石源二氧化碳（`out_furnace_co2_fossil`）

只记录燃料燃烧产生的场内直接化石源二氧化碳；电力上游排放保留在电力数据集中。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测直接排放，或依据计量燃料、书面碳分数、书面氧化分数及 44/12 分子质量比计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_fuel_combustion`
- 来源：

### 过程：机械加工、磨削、刃口钝化和尺寸精加工（`machining_grinding`）

#### 输入

##### 产品流

###### 机械加工和磨削用电力（`in_machining_electricity`）

记录机床、磨床、过滤、泵、冷却液调温及可直接归属辅助设备的电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：生产周期分表能量，包括可归属产品的生产、运行、待机、过滤、冷却和泵送用能
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meters`
- 来源：`loglisci-priarone-settineri-2013-tool-manufacturing`; `hsu-2024-turning-insert-lca`

###### 切削液（`in_cutting_fluid`）

记录跨越边界的实际矿物切削油或配制磨削冷却液补充量；披露配方、含水量、循环和库存变化。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：Mass / kg
- 数量规则：采购量加期初库存减期末库存再减有记录的转出量，并分配至生产周期
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_consumables`
- 来源：`loglisci-priarone-settineri-2013-tool-manufacturing`; `hsu-2024-turning-insert-lca`

###### 陶瓷结合剂氧化铝砂轮（`in_alumina_grinding_wheel`）

根据领用、修整和更换记录计量消耗的陶瓷结合剂氧化铝砂轮质量；不得用散装氧化铝或铝土矿流替代。

- 选定流：陶瓷结合剂氧化铝砂轮
- 流属性/单位：Mass / kg
- 数量规则：期初砂轮质量加领用砂轮质量减期末可复用砂轮质量，并分配至合格产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_consumables`
- 来源：`loglisci-priarone-settineri-2013-tool-manufacturing`

###### 机械加工和刃口钝化用工艺用水（`in_machining_process_water`）

记录水基冷却液、刃口钝化或湿法精加工的工艺补充水；纯油且无水路线应记录有依据的零用量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量补充水，或有记录的批次配制质量，扣除内部循环水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_meters`
- 来源：`hsu-2024-turning-insert-lca`

#### 输出

##### 产品流

###### 涂层前已机加工和刃口钝化工具（`out_machined_tool`）

把可选涂层前的合格机加工产出作为内部中间体记录。

- 选定流：涂层前已机加工和刃口钝化工具
- 流属性/单位：Mass / kg
- 数量规则：机械加工和刃口钝化后的合格产出实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_outputs`
- 来源：`loglisci-priarone-settineri-2013-tool-manufacturing`; `hsu-2024-turning-insert-lca`

##### 废物流

###### 工业后钢废料（`out_postindustrial_steel_scrap`）

记录离开前景边界并送往回收或处理的分类钢屑、棒头和边角料。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：称量的外运质量，并校正有记录的冷却液夹带
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_transfers`
- 来源：`loglisci-priarone-settineri-2013-tool-manufacturing`

###### 含金属磨削污泥（`out_metal_grinding_sludge`）

把离开场址、含金属、磨料和冷却液且已脱水的磨削污泥记录为一种物理上独立的废物流；声明干物质和残余液体口径。

- 选定流：含金属磨削污泥
- 流属性/单位：Mass / kg
- 数量规则：称量的外运湿质量，并提供实测或有记录的干物质分数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_transfers`
- 来源：`hsu-2024-turning-insert-lca`; `ec-2001-non-ferrous-metals-bref`

### 过程：化学气相沉积涂层（`cvd_coating`）

#### 输入

##### 产品流

###### CVD 涂层用电力（`in_cvd_electricity`）

记录装炉、加热、真空、涂层、后清洗及可直接归属辅助设备的电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：实测涂层批次能量，并分配至合格涂层产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meters`
- 来源：`hsu-2024-turning-insert-lca`

###### CVD 涂层用氮气（`in_cvd_nitrogen`）

按已声明参比条件记录输送至 CVD 配方的气态氮气。

- 选定流：氮气 `96ba4c16-fd7c-424e-b318-d87484d3d7c0`
- 流属性/单位：Volume / m3
- 数量规则：配方控制器或气表体积，并按合格涂层质量分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_recipe`
- 来源：`hsu-2024-turning-insert-lca`

###### CVD 涂层用氢气（`in_cvd_hydrogen`）

记录输送至已声明 CVD 配方的工业氢气；不得用含氢酸或混合工艺气体替代。

- 选定流：氢气
- 流属性/单位：Volume / m3
- 数量规则：配方控制器或气表体积，并按合格涂层质量分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_recipe`
- 来源：`hsu-2024-turning-insert-lca`

###### 甲烷（`in_cvd_methane`）

把作为 CVD 前驱体消耗的甲烷与作为燃料的天然气分开记录。

- 选定流：甲烷 `59aebe7f-6f66-41b4-aa71-49bea068dc7b`
- 流属性/单位：Mass / kg
- 数量规则：计量或配方控制器记录的甲烷质量，并记录所有体积转质量的条件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_recipe`
- 来源：`hsu-2024-turning-insert-lca`

###### CVD 涂层用二氧化碳气体（`in_cvd_carbon_dioxide`）

把已声明 CVD 配方消耗的气态二氧化碳记录为产品投入；本行不得采用化石源基本流排放身份。

- 选定流：CVD 涂层用二氧化碳气体
- 流属性/单位：Volume / m3
- 数量规则：配方控制器或气表体积，并按合格涂层质量分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_recipe`
- 来源：`hsu-2024-turning-insert-lca`

#### 输出

##### 产品流

###### CVD 涂层工具（`out_coated_tool`）

把转入最终检验的合格涂层工具记录为内部中间体。

- 选定流：CVD 涂层工具
- 流属性/单位：Mass / kg
- 数量规则：离开涂层批次的合格涂层产出实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_outputs`
- 来源：`hsu-2024-turning-insert-lca`

### 过程：最终检验、标记和销售包装（`inspection_packaging`）

#### 输入

##### 产品流

###### 检验、标记和包装用电力（`in_packaging_electricity`）

记录检验设备、激光标记、包装机械和可直接归属辅助设备的电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：实测或按运行时长推算的能量，并分配至合格发运产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meters`
- 来源：`hsu-2024-turning-insert-lca`

###### 纸盒（`in_paper_box`）

记录随参考产品跨越工厂大门的纸盒总质量；声明各纸盒为折叠纸盒纸板或瓦楞纸板。

- 选定流：纸盒 `12d5d744-7725-4dbc-b102-43c80547f777`
- 流属性/单位：Mass / kg
- 数量规则：包装物料清单质量与已发运销售单元核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_dispatch`
- 来源：`hsu-2024-turning-insert-lca`

###### 聚丙烯刀片托盘（`in_polypropylene_tray`）

记录随产品发运的聚丙烯托盘质量；未确认材料和形态时不得用通用塑料容器 UUID 替代。

- 选定流：聚丙烯刀片托盘
- 流属性/单位：Mass / kg
- 数量规则：包装物料清单质量与已发运销售单元核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_dispatch`
- 来源：`hsu-2024-turning-insert-lca`

#### 输出

##### 产品流

###### CPC 42922 成品可互换工具产品（`out_finished_interchangeable_tool`）

只记录合格可销售产品的净质量。参考产品 UUID 仍未解决，因为所有直读候选均按材料、功能或产品形态缩窄，不能覆盖完整产品边界。

- 选定流：CPC 42922 成品可互换工具产品
- 流属性/单位：Mass / kg
- 数量规则：依据合格批次实测净质量归一化后严格等于 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_batch_outputs`
- 来源：`unsd-cpc-3-0-structure-2025`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 多产品制造 | 应先进行过程细分并采用产品、生产线、批次或配方特定实测值，再实施分配。 | `loglisci-priarone-settineri-2013-tool-manufacturing`; `hsu-2024-turning-insert-lca` |
| `allocation_shared_batch` | 共用炉、压制、涂层和包装批次 | 按有记录的因果驱动因子分配共用实测投入；未证明更强因果关系时采用合格产出质量，并披露批次产品构成、废品和驱动因子。 | `hsu-2024-turning-insert-lca` |
| `allocation_scrap_boundary` | 离开前景的废钢和回收硬质合金 | 在工厂边界记录实测废物或回收材料流，前景清单不计避免生产抵扣；下游回收在单独声明的情景中一致建模。 | `ec-2001-non-ferrous-metals-bref` |
| `allocation_internal_rework` | 在制废品和退回材料 | 退回同一生产系统的材料作为内部循环；纳入额外能源和耗材，只有离开边界的材料才计为废物。 | `hsu-2024-turning-insert-lca` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `material_preparation` | 钢材和粉末投入 | 采购、领用、退库和库存记录 | 材料身份；牌号；供应商；批号；再生含量；期初库存；收货；领用；退库；期末库存；质量 | 核对可追溯仓库和配方记录 | kg | 每批物料和生产周期 | 代表性生产期，通常至少 12 个月或完整披露的生产周期 | 所有纳入范围的生产和储存地点 | 期初 + 收货 - 期末 - 有记录的转移，并分配至合格周期产出 | 供应商证书、校准秤、库存核对、配方放行 |
| `cp_energy_meters` | 所有 process_id | 电力投入 | 电表和设备日志 | 电表编号；起止读数；单位；过程；运行状态；批次；产品产出；分配驱动因子 | 校准分表；否则用经核实负荷乘记录时长 | kWh 和 MJ | 每批或每月并链接批次 | 与生产产出相同期间 | 所有纳入生产线和可归属辅助设备 | 能单独测量时扣除非生产基荷，再按因果驱动因子分配 | 校准记录、电表照片/导出、运行日志、换算记录 |
| `cp_fuel_combustion` | `thermal_consolidation` | 炉燃料和直接二氧化碳 | 燃料表、发票、组成和排放记录 | 气体体积；参比条件；碳分数；氧化分数；批次；炉；直接排放实测值 | 校准流量表或核对发票；采用批准的场址 CO2 计算 | m3 和 kg | 每批或每月并链接炉 | 与处理产出相同期间 | 所有纳入的直接燃烧源 | 向批次分配计量燃料；仅按有记录组成和氧化率计算 CO2 | 仪表校准、供应商气体规格、计算工作簿、监测记录 |
| `cp_water_meters` | `thermal_consolidation`; `machining_grinding` | 工艺补充水 | 水表、储罐和批次记录 | 来源；水表读数；补充质量/体积；密度；循环；排放；批次 | 校准水表或储罐质量平衡 | kg | 每批或每月并链接生产线 | 与生产产出相同期间 | 所有纳入水系统 | 只计跨越前景边界的水，并按实测用量或批次驱动因子分配 | 仪表校准、储罐日志、密度换算、水系统图 |
| `cp_consumables` | `machining_grinding` | 切削液和砂轮 | 采购、领用、更换、修整和库存记录 | 产品身份；配方；期初库存；收货；添加；退回；期末库存；砂轮初始/剩余质量；批次 | 库存变化与更换和修整日志核对 | kg | 每次添加或更换；按生产周期汇总 | 与机加工产出相同期间 | 所有纳入机床和冷却液系统 | 期初 + 收货 - 期末 - 转移，并分配至合格机加工产出 | 发票、安全数据表、领用日志、称量记录、砂轮更换日志 |
| `cp_waste_transfers` | `machining_grinding` | 废钢和磨削污泥 | 容器称量和废物转移记录 | 废物身份；容器皮重/毛重；去向；回收/处置路线；干物质；冷却液夹带；批次链接 | 校准秤及依法或按操作受控的转移单 | kg | 每次运输 | 与生产产出相同期间 | 所有纳入废物收集点 | 汇总外运净质量并分配至关联生产周期；单独报告干物质校正 | 秤校准、转移单、实验室干物质结果、接收回执 |
| `cp_coating_recipe` | `cvd_coating` | 涂层气体 | 配方控制器、气表和气瓶库存记录 | 化学身份；纯度；配方；流量/消耗；参比条件；气瓶期初/期末质量；批次；合格涂层质量 | 控制器导出或气表/气瓶质量平衡 | m3 或 kg | 每个涂层批次 | 数据期内所有纳入涂层批次 | 所有纳入涂层批次 | 按披露的批次驱动因子把每种原子气体分别分配至合格涂层质量 | 配方批准、控制器导出、仪表校准、气瓶核对 |
| `cp_packaging_dispatch` | `inspection_packaging` | 销售包装 | 物料清单、包装领用和发运记录 | 组件身份；材料；单件质量；领用数；退回数；发运产品质量；包装配置 | 经核实的组件称量和发运核对 | kg | 每种包装配置和发运批次 | 与成品产出相同期间 | 所有纳入销售包装 | 净组件数 × 经核实单件质量，并按发运产品净质量归一化 | 包装规格、校准秤、领用记录、发运记录 |
| `cp_batch_outputs` | 所有 process_id | 中间体和最终产出 | 批次流转、验收、废品、返工和质量记录 | 批次编号；产品编号；路线；投入质量；中间体质量；合格质量；废品质量；返工返回；件数；单件质量 | 校准称量并链接质量放行 | kg | 每批 | 数据集表示的所有批次 | 所有纳入生产线、外包步骤和验收点 | 汇总合格净质量；返工保持内部；最终产出归一化至 1 kg | 秤校准、批次流转单、质量放行、废品/返工日志 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个清单行 | 归一化数量 = 生产周期数量 / 合格成品净质量 | 生产周期交换量；合格净产出质量 | 每 1 kg 成品净质量的交换量 |  |
| `calc_shared_batch_allocation` | 共用热加工、涂层或包装批次 | 分配数量 = 实测批次数量 × 已声明因果份额；采用质量时，因果份额 = 产品合格质量 / 批次合格总质量 | 实测批次数量；产品和批次合格总产出；已声明驱动因子 | 分配给产品的批次交换量 | `hsu-2024-turning-insert-lca` |
| `calc_furnace_co2` | `out_furnace_co2_fossil` | 化石源 CO2 质量 = 燃料质量 × 化石碳质量分数 × 氧化分数 × 44/12；燃料以体积计量时，先按已声明条件采用供应商密度 | 计量燃料；密度；化石碳分数；氧化分数 | 直接化石源 CO2 kg |  |
| `calc_material_balance` | 每个生产周期 | 未解释差额 = 材料总投入 - 合格产出 - 实测内部结转 - 作为废料或废物离开的产出 - 有记录的库存变化 | 同一口径的材料、产品、中间体、废物和库存记录 | 质量平衡残差和百分比 |  |
| `calc_packaging_mass` | 纸盒和聚丙烯托盘 | 包装质量 = 发运组件净数量 × 经核实组件单件质量 | 领用/退回数；发运数；单件质量 | 每 1 kg 产品净质量的包装 kg | `hsu-2024-turning-insert-lca` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和所有材料流 | 保留产品图纸、牌号、化学或商品身份、供应商、批号、交付状态、涂层状态和所选 TianGong 身份；记录每个未解决 UUID，不得用代理替代。 | 产品规格、证书、发票、批号记录、UUID 审计 |
| `dq_temporal` | 前景活动数据 | 覆盖有代表性的连续期间，通常至少 12 个月；较短周期只有在覆盖完整披露的生产周期且季节性或负荷变化不显著时才可接受。 | 仪表期间、批次清单、生产计划、代表性说明 |
| `dq_completeness` | 过程清单 | 对照生产和采购记录核对所有过程阶段、实际原子投入、直接排放、废物转移、外包工序、返工循环和包装。 | 完整性检查表、台账、批次流转单、转移单 |
| `dq_measurement` | 仪表、秤和控制器数据 | 使用校准仪器并保留原始读数、参比条件、换算和数据缺口处理。 | 校准证书、原始导出、换算工作簿 |
| `dq_allocation` | 共用过程 | 证明已尝试细分，并保留因果依据、批次产品构成、合格质量、废品及所选分配驱动因子的敏感性。 | 过程图、仪表归属、分配工作簿、敏感性记录 |
| `dq_geography_technology` | 上游数据集 | 匹配材料牌号、再生含量、生产技术、地理和交付状态；披露并评估每个代理。 | 供应商数据集、技术说明、地理匹配审查 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity_scope` | 参考产品 | 产品不在 CPC 42922 语义边界内，或未声明工具族、材料/牌号、几何形状、路线、涂层状态、工厂大门状态和净质量时，校验失败。 | `unsd-cpc-3-0-structure-2025` |
| `validate_reference_mass` | 参考流 | 要求归一化的合格成品净质量严格为 1 kg，并确认排除包装、废品、夹具和可重复使用载具。 |  |
| `validate_route_processes` | 过程图 | 要求材料制备、机械加工/磨削以及最终检验/包装；只有满足声明的路线条件时才要求热固结和 CVD 涂层，并要求披露外包工序。 | `loglisci-priarone-settineri-2013-tool-manufacturing`; `hsu-2024-turning-insert-lca` |
| `validate_atomic_inventory` | 所有清单行 | 若选定流合并多种化学品、公用工程、燃料、材料、废物或排放，或把实际配方组分藏在集合行中，则校验失败。 |  |
| `validate_uuid_semantics` | 带 UUID 的行 | 要求公开 state-100 身份、正确流类型、属性和单位组、精确语义匹配及 TianGong 正式中文 baseName；拒绝范围较窄或代理 UUID。 |  |
| `validate_mass_balance` | 生产周期清单 | 调查并披露质量平衡残差；库存变化、内部返工、冷却液夹带或废物流缺失导致无法核对时，校验结论不确定。 |  |
| `validate_energy_and_gases` | 能源、燃料和涂层气体 | 核实 kWh 至 MJ 换算、气体参比条件、甲烷前驱体与天然气燃料的区分，以及产品二氧化碳与化石源基本流 CO2 的区分。 |  |
| `validate_allocation` | 共用批次和废料 | 要求记录过程细分、因果分配驱动因子、批次产品构成、废品处理和前景废料一致的不抵扣处理。 | `hsu-2024-turning-insert-lca`; `ec-2001-non-ferrous-metals-bref` |
| `validate_unresolved_evidence` | 未解决 UUID 和范围 | 保持身份和范围证据需求可见；不得虚构 UUID、代理、单值范围，或缺少两个兼容独立原始来源的来源型范围。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 已声明 CPC 42922 工具产品和路线的前景产品制造数据包。 |
| downstream_use | `secondary_dataset`; 经代表性和未解决事项审查后可作为 `background_dataset` |
| allowed_use | 适用于匹配工具族、牌号、路线、涂层、地理和期间的从摇篮到工厂大门产品足迹、供应链清单、过程改进及下游 process 或 lifecyclemodel 投影。 |
| excluded_use | 没有性能等效功能单位时对工具寿命或加工性能作比较声明；在不同工具族或牌号间替代；参考产品或材料身份未解决时作为通用代理。 |
| required_metadata | PCR id 和版本；产品图纸/产品族；净质量；材料和牌号；再生含量；路线和设备；涂层化学组成/状态；包装状态；场址/地理；数据期；上游数据集选择；分配；外包工序；未解决事项。 |
| required_quality_disclosure | 计量覆盖和校准；库存变化；质量平衡残差；分配驱动因子；废品和返工处理；废物去向；气体参比条件；数据缺口；UUID 和范围证据状态。 |
| update_trigger | 产品几何形状或牌号、材料或再生含量、热加工/涂层路线、主要设备或能源供应、包装、供应商地理、分配方法或归一化清单发生实质变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，《CPC Version 3.0 Structure》，2025 年 6 月 30 日。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 当前 CPC 42922 身份和英文产品边界。 |
| `unsd-cpc-1-1-chinese-2007` | official_guidance | 联合国，《产品总分类版本1.1》，正式中文出版物。https://digitallibrary.un.org/record/536544/files/M_77ver1_1c.pdf | 经核验的专业中文标题和 CPC 42922 范围连续性。 |
| `loglisci-priarone-settineri-2013-tool-manufacturing` | literature | Loglisci, G.; Priarone, P. C.; Settineri, L. (2013). Cutting tool manufacturing: a sustainability perspective. Proceedings of the 11th Global Conference on Sustainable Manufacturing, ISBN 978-3-7983-2609-5. https://d-nb.info/1078666539/34 | 钢制丝锥路线、机械加工/磨削投入、计量、废料和过程分配。 |
| `hsu-2024-turning-insert-lca` | literature | Hsu, E. H.-W. (2024). Enabling emission tracking in tool manufacturing: Life cycle assessment of turning insert production. KTH. https://www.diva-portal.org/smash/get/diva2:1894895/FULLTEXT01.pdf | WC-Co 刀片路线、压制/烧结、磨削、CVD 气体、包装、废物、批次分配和前景采集。 |
| `ec-2001-non-ferrous-metals-bref` | official_guidance | European Commission (2001). Reference Document on Best Available Techniques in the Non Ferrous Metals Industries. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-03/superseded_nfm_bref_1201.pdf | 碳化钨生产背景、硬质合金投入和残余物及再生硬质合金披露。 |
