---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.plates-sheet-strip-and-foil-of-nickel
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 镍板、镍薄板、镍带条及镍箔

## 1. 范围与适用性

本 PCR 适用于以卷状或定尺状态交付的平表面镍或镍合金板、薄板、带条及箔的工厂门生产。前景边界始于接收成分已识别的固态轧制坯料或明确声明的内部轧制中间品，止于制造厂门处经检验合格的可售平材。边界涵盖实际采用的热轧、冷轧、固溶或其他热处理、酸洗或表面处理、修边和检验工序。

本 PCR 不包括镍矿及精矿生产、作为上游过程单独建模以外的初级熔炼与精炼、作为商品出售的未锻轧镍、棒、杆、型材、丝、管、粉末、片状粉、拉网板、以非镍材料为主体的复合板、制成品、使用和寿命终止阶段。包装和出厂运输不计入核心参考产品；研究范围需要时，应作为独立下游或补充过程添加。

本 PCR 产出带有全部外购投入上游数据集链接的门到门前景生产数据集。仅当上游数据集完整且相容时，方可据此形成从摇篮到大门的结果。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.plates-sheet-strip-and-foil-of-nickel |
| classification_refs | CPC 3.0：41523，精确分类语境参考 |
| covered_products | 卷状或定尺的平表面非合金镍或镍合金板、薄板、带条及箔；包括经声明且仍保持平材属性的轧制态、热处理态、酸洗态、抛光态或其他表面精整交付状态 |
| excluded_products | 矿石、冶金中间品、作为商品出售的未锻轧镍、棒、杆、型材、丝、管、粉末、片状粉、拉网板、以非镍材料为主体的复合产品及制成品 |
| representative_product | 符合已声明牌号、平材形态、尺寸、状态或热处理状态、表面状态和检验规范的可售镍或镍合金平材 |
| production_route | 接收固态含镍轧制坯料 → 热轧和/或冷轧 → 条件适用的热处理与表面处理 → 修边与检验 |
| market_state | 制造厂门处干燥且可售的镍板、薄板、带条或箔，采用已声明的卷状或定尺状态，不含包装质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供已声明材料牌号、几何形状、状态、表面状态及合格性的镍或镍合金平材 |
| How much | 1,000 kg 可售产品净质量，不含包装 |
| How well | 符合已声明的客户或产品规范，包括化学成分、厚度、宽度、长度或卷状状态、状态或热处理、表面状态和检验状态 |
| How long or cycle | 制造厂门处完成的一个生产批次；不表示使用阶段持续时间 |
| reference_flow_link | 以 1,000 kg 已声明参考产品流实现功能单位 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 镍板、镍薄板、镍带条及镍箔 `ffa8544a-b9fb-44e1-abb5-14032f03ecf7` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 镍或镍合金牌号与成分；板、薄板、带条或箔的形态；厚度；宽度；定尺长度或卷重及卷材尺寸；热轧、冷轧或组合路线；状态或热处理状态；表面状态与酸洗状态；边部状态；适用产品规范；制造场址与地理范围；报告期；包装排除或单独纳入方式 |

构建前景数据包时，所有必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺失限定信息将导致参考流不完整。

## 4. 计量与单位规则

| 规则编号 | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品及含镍物料流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用经校准的衡器确定净干质量；排除托盘、包裹物、捆带及其他包装。将验收合格的可售产出归一化至恰好 1,000 kg。 |
| `electricity_energy` | 电力投入 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 按 1 kWh = 3.6 MJ 将计量电力转换为 MJ，保留原始电表单位，并披露电网、 电压等级、地理范围及所含损耗。 |
| `gas_volume` | 气态天然气投入 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按已声明的温度和压力基准条件报告计量体积；无记录的换算不得混用标准立方米和实际立方米。 |
| `solution_product_mass` | 硫酸与氢氧化钠投入 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告购入产品溶液质量并披露浓度；除非保留换算与浓度证据，不得用有效溶质质量替代。 |
| `mass_balance_consistency` | 各过程物料平衡 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 归一化前，按同一报告期核对含镍投入、可售或中间产出、金属废料、在制品和实测损失。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在第一个纳入工序入口计量的、成分已识别的固态镍或镍合金轧制坯料，或已声明的内部镍平材中间品 |
| starting_condition_role | 门到门前景起始产品；其上游生产通过链接数据集表示，不在本 PCR 内重构 |
| product_classification_scope | 经语义边界审查、由 CPC 3.0 代码 41523 表示的镍或镍合金板、薄板、带条及箔 |
| recursive_input_rule | 当投入已经属于本类别的镍平材并进一步减薄或精整时，将其作为产品投入及其上游数据集记录一次，不递归重构其早期轧制历史 |
| upstream_dataset_requirement | 为外购镍坯料、电力、天然气、水、冷轧油、硫酸和氢氧化钠链接在成分、产品状态、地理、技术和时间方面相容的上游数据集 |
| disclosure | 披露坯料形态及再生料含量、纳入的轧制道次、炉型与酸洗路线、内部循环、场内处理、排除项、截断、分配、数据缺口，以及结果属于门到门还是已补全至从摇篮到大门 |

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 前景制造 | 纳入从轧制坯料首次接收或内部转入直至可售平材净产出的全部场内工序，包括路线特定的轧制、热处理、表面处理、修边、检验、公用工程、直接排放和废物。 | `baosteel-nuclear-power-steel-2018` |
| `boundary_upstream_links` | 外购产品与能源 | 通过链接上游数据集表示已声明起始条件之前的生产；披露供应商特定数据或区域代理数据的使用，不得将供应商或行业协会成员平均数据作为全球行业平均值。 |  |
| `boundary_environmental_exchanges` | 直接交换 | 对纳入工序的实测水和能源使用、废物产生以及向空气或水体的直接排放进行核算；不得隐去场内处理或内部循环。 | `eu-jrc-nfm-bref-2017` |
| `boundary_exclusions` | 下游阶段 | 核心结果排除包装、出厂运输、零部件制造、使用、维护和寿命终止；如需纳入，必须作为独立过程建模并披露。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `rolling` | 热轧和/或冷轧 | required | 纳入已声明产品实际采用的热轧、冷轧或组合道次。 | 前景厚度压下与平材成形 | 轧线输出的镍平材轧制中间品质量 |
| `thermal_surface_conditioning` | 热处理与表面处理 | conditional | 当已声明状态、固溶状态、氧化皮去除、酸洗状态、清洗或场内中和需要时纳入。 | 前景冶金状态与表面状态控制 | 工序输出的经处理镍平材中间品质量 |
| `finishing_inspection` | 最终修边与检验 | required | 始终纳入最终尺寸精整、净质量确定、合格检验和工厂门转移。 | 前景最终产品准备 | 1,000 kg 可售参考产品净质量 |

### 过程：热轧和/或冷轧（`rolling`）

#### 输入

##### 产品流

###### 镍或镍合金轧制坯料（`rolling_feedstock`）

记录进入第一个纳入轧制道次的已识别固态含镍坯料实测质量。

- 选定流：镍或镍合金轧制坯料
- 流属性/单位：Mass / kg
- 数量规则：实测接收或内部转入坯料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rolling_material_balance`
- 来源：`baosteel-nuclear-power-steel-2018`

###### 轧制设备所用电力（`rolling_electricity`）

记录传动、泵、控制系统及路线特定辅助设备的计量或分摊电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：纳入轧制批次的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rolling_energy`
- 来源：

###### 热轧燃烧所用气态天然气（`rolling_natural_gas`）

仅当再加热或其他纳入的轧制工序使用天然气时记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：纳入批次轧制炉计量消耗的天然气；不存在时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rolling_energy`
- 来源：

###### 轧线除鳞或漂洗所用工艺用水（`rolling_process_water`）

记录因除鳞或漂洗跨越边界的工艺补充水；内部循环水不得计入总投入，并应披露循环回路。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：纳入轧制批次实测净补充工艺用水；干式轧制无用水时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rolling_water`
- 来源：

###### 冷轧道次所用冷轧油（`cold_rolling_oil`）

仅对使用该润滑剂的路线记录冷轧油净补充量，并披露配方与回收油回流。

- 选定流：冷轧油 `a9417245-6f45-4df3-8f04-227ed8a1be58`
- 流属性/单位：Mass / kg
- 数量规则：实测新油加入量减去跨报告边界返回的可回收油量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rolling_material_balance`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 轧制镍平材中间品（`rolled_nickel_intermediate`）

记录转入处理或最终精整的热轧或冷轧镍平材中间品实测质量。

- 选定流：轧制镍平材中间品
- 流属性/单位：Mass / kg
- 数量规则：与轧制物料平衡核对后的实测中间产出质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位轧制过程产出
- 基准类型：过程产出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_rolling_material_balance`
- 来源：`baosteel-nuclear-power-steel-2018`

##### 废物流

###### 分类收集的镍轧制及修边废料（`rolling_nickel_scrap`）

记录离开前景过程并送往回收或处理的洁净含镍金属切头、边料及轧废料；未跨越边界而在内部重熔的物料不计。

- 选定流：分类收集的镍轧制及修边废料
- 流属性/单位：Mass / kg
- 数量规则：按去向实测纳入批次的废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rolling_material_balance`
- 来源：

##### 基本流

###### 轧制炉直接排放的化石源二氧化碳（`rolling_fossil_co2`）

记录纳入轧制炉燃烧化石天然气产生的烟气直接二氧化碳；排除上游电力排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：纳入批次的场址实测烟气直接排放；未燃烧化石燃料时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rolling_air_emissions`
- 来源：

### 过程：热处理与表面处理（`thermal_surface_conditioning`）

#### 输入

##### 产品流

###### 进入处理工序的轧制镍平材中间品（`conditioning_nickel_intermediate`）

记录进入所纳入热处理或表面处理路线的轧制中间品实测质量。

- 选定流：进入处理工序的轧制镍平材中间品
- 流属性/单位：Mass / kg
- 数量规则：实测转入中间品质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位处理过程产出
- 基准类型：过程产出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_material_balance`
- 来源：`baosteel-nuclear-power-steel-2018`

###### 处理设备所用电力（`conditioning_electricity`）

记录炉、泵、槽液循环、漂洗、通风及其他纳入处理设备的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：纳入处理批次的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_energy_water`
- 来源：

###### 热处理燃烧所用气态天然气（`conditioning_natural_gas`）

仅当纳入的退火炉或固溶处理炉使用天然气时记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：纳入处理炉计量消耗的天然气；不存在时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_energy_water`
- 来源：

###### 酸洗与漂洗所用工艺用水（`conditioning_process_water`）

在纳入湿法表面处理时，记录槽液配制和漂洗的工艺补充水净量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：纳入处理批次的实测净补充水；仅采用干法处理时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_energy_water`
- 来源：

###### 已声明酸洗槽所用硫酸（`conditioning_sulfuric_acid`）

仅当场址特定酸洗配方使用硫酸时记录购入硫酸，并披露产品浓度。

- 选定流：硫酸 `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- 流属性/单位：Mass / kg
- 数量规则：实测加入槽液及补充用硫酸产品质量；不存在时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_material_balance`
- 来源：

###### 场内中和所用氢氧化钠（`conditioning_sodium_hydroxide`）

仅当纳入酸洗废水流在边界内进行场内中和时记录购入氢氧化钠，并披露产品浓度。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：纳入废水流使用的氢氧化钠产品实测质量；场外中和时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_material_balance`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 经处理的镍平材中间品（`conditioned_nickel_intermediate`）

记录转入最终精整的经热处理或表面处理镍平材中间品实测质量。

- 选定流：经热处理或表面处理的镍平材中间品
- 流属性/单位：Mass / kg
- 数量规则：与处理工序物料平衡核对后的实测处理产出质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位处理过程产出
- 基准类型：过程产出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_material_balance`
- 来源：`baosteel-nuclear-power-steel-2018`

##### 废物流

###### 酸洗产生的含镍酸性废水（`nickel_acidic_wastewater`）

记录酸洗和漂洗后送往场内或场外处理的水相含镍酸性物流，并披露 pH、溶解镍、悬浮物及去向。

- 选定流：酸洗产生的含镍酸性废水
- 流属性/单位：Mass / kg
- 数量规则：在已声明转移点实测该定义废水流的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_wastewater`
- 来源：`eu-jrc-nfm-bref-2017`

##### 基本流

###### 处理炉直接排放的化石源二氧化碳（`conditioning_fossil_co2`）

记录纳入热处理炉燃烧化石天然气产生的烟气直接二氧化碳；排除上游电力排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：纳入批次的场址实测烟气直接排放；未燃烧化石燃料时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_air_emissions`
- 来源：

### 过程：最终修边与检验（`finishing_inspection`）

#### 输入

##### 产品流

###### 进入最终精整的镍平材中间品（`finishing_nickel_intermediate`）

记录进入最终修边与检验的轧制态或处理态镍平材中间品实测质量。

- 选定流：用于最终精整的镍平材中间品
- 流属性/单位：Mass / kg
- 数量规则：进入最终精整的实测中间品质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位精整过程产出
- 基准类型：过程产出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_material_balance`
- 来源：

###### 精整设备所用电力（`finishing_electricity`）

记录分条、剪切、矫平、纳入时的抛光、检验设备以及最终精整内部搬运所用电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：纳入精整批次的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可售镍板、镍薄板、镍带条或镍箔（`reference_nickel_flat_product`）

记录最终检验后、包装前的合格产品净质量。

- 选定流：镍板、镍薄板、镍带条及镍箔 `ffa8544a-b9fb-44e1-abb5-14032f03ecf7`
- 流属性/单位：Mass / kg
- 数量规则：归一化后 1,000 kg 合格产出净质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_material_balance`
- 来源：`un-cpc-3-0-2025`；`baosteel-nuclear-power-steel-2018`

##### 废物流

###### 最终修边产生的分类收集镍废料（`finishing_nickel_scrap`）

记录离开最终精整并送往回收或处理的洁净含镍金属边料和不合格定尺切片。

- 选定流：最终修边产生的分类收集镍废料
- 流属性/单位：Mass / kg
- 数量规则：按去向实测最终修边废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_material_balance`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_avoid_subdivide` | 共用的轧制、处理和精整工序 | 优先按批次、产线或路线进行专门计量与过程细分，使已声明产品承担其实测工序投入，从而避免分配。 |  |
| `allocation_recycled_scrap` | 送出前景边界的含镍废料 | 分别报告废料质量、成分、去向和任何收益。不得在前景清单内扣除所避免的初级镍信用；应在下游采用已声明且全研究一致的回收建模方法。 |  |
| `allocation_shared_utilities` | 无法细分的公用工程 | 仅对剩余共用量采用已记录的物理驱动因素分配，例如计量运行时间、设备负荷或加工质量；披露驱动因素，并在对结果有实质影响时进行敏感性检验。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_rolling_material_balance` | `rolling` | 坯料、冷轧油、轧制中间品及镍废料 | 磅单、生产订单、库存移动、油品领用与回收记录 | 批次；牌号；坯料形态；投入质量；加油量；回收油量；中间产出质量；废料质量；去向；在制品变化 | 校准衡器及经核对的物料台账 | kg | 每批次，按月核对 | 有代表性的连续 12 个月或已声明生产期 | 生产已声明产品的全部轧线 | 汇总匹配记录，调整期初与期末在制品后，按合格产出归一化 | 衡器校准、批次谱系、库存核对及废料出厂记录 |
| `cp_rolling_energy` | `rolling` | 电力与天然气 | 分表、公用工程账单及炉台记录 | 仪表；起止读数；单位；分配驱动；炉号；基准温度和压力 | 优先直接分表；剩余共用量按已记录物理驱动分配 | kWh、MJ 或 m3 | 每批次或班次，按月核对 | 与产品记录相同期间和产线 | 仅纳入轧制设备 | 扣除输出量及有记录的非产品负荷，换算单位并按合格产出归一化 | 仪表校准、账单核对及分配工作表 |
| `cp_rolling_water` | `rolling` | 工艺补充水净量 | 水表及循环记录 | 水源；仪表读数；补充量；排污量；回流量；单位；批次或期间分配 | 在轧制用水系统边界直接计量 | kg 或 m3 | 每日或每生产期，按月核对 | 与轧制生产相同期间 | 纳入的轧制用水回路 | 仅计入跨越边界的补充水并披露循环 | 仪表检查及水量平衡核对 |
| `cp_rolling_air_emissions` | `rolling` | 化石源二氧化碳直接排放 | 连续排放监测或经验证的烟气测试 | 排口；时间；气体浓度；流量；运行时间；覆盖的炉及批次 | 在纳入排口进行场址测量 | kg | 连续监测或每个代表性测试期 | 同一报告年度并记录生产覆盖率 | 纳入的轧制炉 | 对实测排放积分，仅按有记录的炉运行情况分配 | 仪器校准、测试方法、检出限及覆盖说明 |
| `cp_conditioning_material_balance` | `thermal_surface_conditioning` | 镍中间品、硫酸、氢氧化钠及处理后产出 | 转移称重、槽液配制、化学品交付及库存记录 | 批次；牌号；投入和产出质量；化学品质量；浓度；槽号；处理路线 | 校准衡器及经核对的化学品库存 | kg | 每批次和每次槽液添加，按月核对 | 有代表性的连续 12 个月或已声明生产期 | 纳入的热处理与表面处理线 | 汇总匹配的添加和转移记录，调整库存变化后按合格产出归一化 | 校准、供应商证书、浓度检测及槽液记录 |
| `cp_conditioning_energy_water` | `thermal_surface_conditioning` | 电力、天然气与工艺用水 | 分表、炉台记录及水系统记录 | 仪表；读数；单位；炉或槽；基准条件；补充量；回流量；排污量 | 优先直接计量；剩余共用量采用已记录物理驱动 | kWh、MJ、m3 或 kg | 每批次或班次，按月核对 | 与处理生产相同期间 | 纳入的处理设备及水回路 | 换算单位，计入跨边界净投入，并按合格产出归一化 | 仪表校准及公用工程核对 |
| `cp_conditioning_wastewater` | `thermal_surface_conditioning` | 含镍酸性废水 | 转移流量、罐体称重及实验室分析 | 流编号；质量或体积；密度；pH；溶解镍；悬浮物；处理去向；时间 | 在已声明处理转移点测量并对同一物流取样 | kg | 每排放批次，或连续累计并代表性取样 | 与纳入酸洗生产相同期间 | 纳入的酸洗与漂洗用水系统 | 仅用实测密度换算体积，汇总各批次并按合格产出归一化 | 仪表校准、样品链、实验室方法及处理联单 |
| `cp_conditioning_air_emissions` | `thermal_surface_conditioning` | 化石源二氧化碳直接排放 | 连续排放监测或经验证的烟气测试 | 排口；时间；浓度；流量；运行时间；覆盖的炉及批次 | 在纳入排口进行场址测量 | kg | 连续监测或每个代表性测试期 | 同一报告年度并记录生产覆盖率 | 纳入的处理炉 | 对实测排放积分，仅按有记录的炉运行情况分配 | 仪器校准、测试方法、检出限及覆盖说明 |
| `cp_finishing_material_balance` | `finishing_inspection` | 精整投入、参考产品及最终修边废料 | 转移称重、成品台账、检验记录及废料磅单 | 批次；牌号；尺寸；状态；表面；投入质量；合格质量；不合格质量；废料质量；去向 | 与检验处置关联的校准衡器 | kg | 每批次，按月核对 | 有代表性的连续 12 个月或已声明生产期 | 已声明产品的全部精整线 | 核对投入、合格产出、废料、不合格品及在制品变化；将合格产出归一化至 1,000 kg | 衡器校准、检验证书、批次谱系及库存核对 |
| `cp_finishing_energy` | `finishing_inspection` | 电力 | 分表及设备运行记录 | 仪表；读数；单位；设备；运行时间；加工质量 | 优先直接分表；剩余共用量采用已记录物理驱动 | kWh 或 MJ | 每批次或班次，按月核对 | 与成品记录相同期间 | 纳入的精整设备 | 扣除非产品负荷，换算为 MJ，并按合格产出归一化 | 仪表校准及分配工作表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_mass` | 每个清单行 | 归一化数量 = 同一边界及期间的行数量 × 1,000 kg / 参考产品合格净质量 | 行数量；参考产品合格净质量 | 每 1,000 kg 参考产品的数量 |  |
| `convert_electricity_to_mj` | 电力行 | 电力 MJ = 计量 kWh × 3.6 MJ/kWh；保留原始 kWh 读数 | 计量 kWh | 以 MJ 表示的电力 |  |
| `reconcile_nickel_mass` | 各过程物料平衡 | 含镍投入 = 中间品或产品产出 + 分类收集废料 + 其他实测含镍产出 + 期末在制品 − 期初在制品 + 已调查的平衡差 | 投入、产出、废料、其他含镍产出、在制品变化 | 经核对的质量平衡及披露差值 |  |
| `convert_water_volume_to_mass` | 工艺用水及废水行 | 质量 = 实测体积 × 记录温度下的实测密度；当浓度显著影响密度时不得假定密度 | 体积、密度、温度 | 以 kg 表示的水或废水质量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品及含镍投入 | 为每条纳入产品记录保留牌号或成分、形态、尺寸、状态或热处理、表面状态和批次谱系。 | 产品证书、规范、生产订单及检验放行 |
| `dq_temporal_alignment` | 全部前景记录 | 生产、公用工程、化学品、废物和排放采用同一有代表性的连续 12 个月或明确声明的生产期；解释替代数据及异常运行。 | 带日期台账、仪表导出及覆盖核对 |
| `dq_measurement` | 计量与称量物流 | 使用经校准仪器并记录单位与基准条件；仅对剩余共用物流记录分配。 | 校准证书、仪表图、衡器检查及分配工作表 |
| `dq_completeness` | 过程清单 | 核对全部纳入过程，并披露缺失仪表、排除物流、零值或不适用行、内部循环和处理转移。 | 签署的完整性检查表和过程流程审查；`eu-jrc-nfm-bref-2017` |
| `dq_upstream_representativeness` | 链接的上游数据集 | 匹配坯料状态、成分、技术、地理与时间；披露代理数据限制，不得宣称供应商或行业协会成员平均数据具有全球代表性。 | 供应商数据或数据集元数据及代表性说明 |

## 9. 校验规则

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_reference_flow` | 参考产品 | 确认归一化后合格产出净质量恰为 1,000 kg、不含包装，并具备全部必需限定信息。 | `un-cpc-3-0-2025`；`baosteel-nuclear-power-steel-2018` |
| `validate_route_consistency` | 过程图与清单 | 确认纳入的每项热轧、冷轧、热处理、酸洗、精整及场内处理均具有相应投入、产出、公用工程、废物和直接排放；明确标识不适用的条件行。 | `baosteel-nuclear-power-steel-2018`；`eu-jrc-nfm-bref-2017` |
| `validate_uuid_semantics` | 带 UUID 的流 | 依据公开 state-100 直读记录确认流类型、中英文 baseName、分类、属性、单位组、产品状态、地理、技术和 generalComment。 |  |
| `validate_material_balance` | 轧制、处理及精整 | 发布前调查并披露每项含镍质量平衡差；不得通过分配或未明确废物流掩盖差值。 |  |
| `validate_no_double_counting` | 能源、水、循环与上游链接 | 确认内部循环、内部转移中间品和上游负荷仅记录一次，且上游电力排放未重复计作直接排放。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 已声明镍或镍合金平材的前景生产数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 产品碳足迹、LCA、EPD、供应链和设计研究，且其产品、路线、地理、时间、边界和数据质量需求与已声明数据集相匹配 |
| excluded_use | 在无披露情况下替代实质不同的镍牌号、产品形态、轧制或热处理路线、表面状态、地理或期间；在未证明代表性时作为全球行业平均值使用 |
| required_metadata | PCR 标识与版本；产品牌号与成分；平材形态；尺寸；卷状或定尺状态；状态或热处理；表面状态；场址与地理；技术与过程路线；报告期；再生料含量定义；上游数据集；截断；分配；包装处理；数据所有者与审查状态 |
| required_quality_disclosure | 仪表与衡器覆盖；质量平衡差；时间、技术和地理代表性；来源及供应商数据占比；分配驱动；内部循环处理；废水与直接排放覆盖；不确定性及未解决证据缺口 |
| update_trigger | 坯料成分或来源、产品规范、轧制或炉技术、酸洗化学品、能源或水系统、处理路线、分配、报告期或上游数据集代表性发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | 官方指南（`official_guidance`） | 联合国统计司，CPC 3.0 版结构，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv，检索日期 2026-09-04 | CPC 41523 英文产品正式名称与分类语境 |
| `baosteel-nuclear-power-steel-2018` | 手册（`handbook`） | 宝山钢铁股份有限公司，《核电用钢》产品手册，PDF 修改于 2018 年，https://ecommerce.ibaosteel.com/portal/download/manual/NPS.pdf，检索日期 2026-09-04 | 镍基合金热轧和冷轧平材形态、固溶处理与酸洗、交付状态及尺寸限定信息 |
| `eu-jrc-nfm-bref-2017` | 官方指南（`official_guidance`） | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Non-Ferrous Metals Industries, EUR 28648 EN, JRC107041, DOI 10.2760/8224, https://publications.jrc.ec.europa.eu/repository/handle/JRC107041，检索日期 2026-09-04 | 有色金属工序原料、水、能源、废物与直接排放完整性，以及一体化上游边界披露 |
