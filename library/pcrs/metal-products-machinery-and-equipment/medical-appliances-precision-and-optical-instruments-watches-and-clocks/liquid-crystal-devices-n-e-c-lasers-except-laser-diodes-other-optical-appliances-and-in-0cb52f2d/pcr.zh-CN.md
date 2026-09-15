---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.liquid-crystal-devices-n-e-c-lasers-except-laser-diodes-other-optical-appliances-and-in-0cb52f2d
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 未另列明的液晶装置；激光器（激光二极管除外）；未另列明的其他光学器械和仪器

## 1. 范围与适用性

本 PCR 适用于以下成品在工厂大门交付前的生产：未另列明的液晶装置、激光器（激光二极管除外）以及未另列明的其他光学器械和仪器。PCR 设置三条互斥的前景路线：液晶装置路线、非二极管激光器路线和其他光学仪器路线。每个数据包必须只选择一条路线，并声明实际产品功能、架构、性能规格、随附附件和市场状态。

本 PCR 不包括作为产品销售的激光二极管；归入其他类别且单独供应的光纤、透镜、棱镜、反射镜及其他光学元件；另行分类的照相设备；作为独立产品供应的零部件和附件；外购材料与部件的上游生产；研究明确纳入范围之外的资本设备；以及工厂大门之后的配送、使用、维护和报废。非二极管激光器可将外购激光二极管作为部件记录，但最终参考产品本身不得是激光二极管。

本类别具有异质性。清单卡片是依据已核验产品和过程证据形成的最小路线特定集合。实际物料清单、工艺化学品、气体、废物和直接排放只要跨越声明边界，前景数据包就必须为其增设原子交换行，不得合并成笼统流。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.liquid-crystal-devices-n-e-c-lasers-except-laser-diodes-other-optical-appliances-and-in-0cb52f2d |
| classification_refs | CPC 3.0: 48315 |
| covered_products | 未另列明的液晶装置成品；非激光二极管的激光器成品；未另列明的其他光学器械和仪器成品 |
| excluded_products | 作为产品的激光二极管；归入其他类别的单独供应光学元件；另行分类的照相设备；单独供应的零部件和附件；未在声明工厂大门形成成品的不完整原型 |
| representative_product | CPC 48315 范围内验收合格的成品，并已声明质量、光学功能、架构、性能等级、随附附件和路线 |
| production_route | `lcd_device_manufacturing`、`non_diode_laser_manufacturing` 或 `other_optical_instrument_manufacturing` 三者之一且仅一个 |
| market_state | 已完成并通过验收测试，在工厂大门交付；声明是否包含包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 交付一件提供所声明液晶、激光或其他光学功能的 CPC 48315 成品 |
| How much | 工厂大门处 1 kg 验收合格成品净质量 |
| How well | 满足所声明的光学功能、架构、适用时的波长或光谱范围、性能等级、尺寸配置、适用时的安全等级及验收测试准则 |
| How long or cycle | 一次工厂大门交付；不主张使用寿命等效性 |
| reference_flow_link | 下列参考产品流为所选路线生产的验收合格产品净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 未另列明的液晶装置，激光器，激光二极管除外，未另列明的其他光学器械和仪器 `e2494992-0c4a-4d0f-9ef2-34c4eeedce96` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 所选路线；产品子型与预期光学功能；适用时的激光架构与增益介质或液晶技术；适用时的波长或光谱范围；性能等级与验收准则；随附部件与附件；产品净质量基准；是否包含包装；制造地理位置；技术时期；工厂大门状态 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 验收合格参考成品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用经校准衡器测量验收合格产品净质量。除非参考流限定信息明确包含包装，否则排除包装。将所有路线清单数量归一化为 1 kg 验收合格产品净质量。 |
| `electricity_energy_conversion` | 外购电力行 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留电表原始记录，并按 1 kWh = 3.6 MJ 将 kWh 转为 MJ。不得将上游电网排放作为前景基本流重复加入。 |
| `water_mass_conversion` | 产品水行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先采用直接质量记录。按体积计量时，使用适用于测量温度和水质的有记录密度换算，并保留原始体积及密度证据。 |
| `gas_reference_conditions` | 气态天然气和二氧化碳产品行 | 与所选 Tiangong 流相符的 Volume 或 Mass | m3 或 kg | 体积记录必须声明温度、压力以及读数为实际体积还是标准化体积。没有成分和状态特定换算时不得在体积与质量间替代。 |

## 5. 系统边界

前景边界从外购材料、部件、化学品、气体、水和能源跨越制造场址大门开始，包括所选路线在场内实施的成形、镀膜或图形化、清洗、装配、光学对准、测试、返工以及废物管理，终止于验收合格成品在工厂大门交付。上游生产由链接的产品数据集表示。工厂大门之后的配送、使用、维护和报废不纳入。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购材料、部件、化学品、气体、水和能源已到制造场址大门，并声明来料产品状态及供应商地理位置 |
| starting_condition_role | 与上游产品数据集链接的门到门前景起始状态 |
| product_classification_scope | 仅限 CPC 48315 成品；所选路线和产品子型是必需限定信息 |
| recursive_input_rule | 若外购输入本身属于本 PCR 类别，则作为一个原子产品输入记录一次并链接上游数据集，不在同一前景过程中递归重建 |
| upstream_dataset_requirement | 每项外购输入均采用地理、技术、产品状态和时间具有代表性的上游数据集；披露代理和缺失部件覆盖 |
| disclosure | 声明路线、产品架构、光学性能、随附部件与附件、包装处理、制造地理位置、技术时期、分配、截断、返工、废品、废水去向以及所有省略的资本或下游阶段 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_route_selection` | foreground model | 三条过程路线只能选择一条，不得把液晶装置、非二极管激光器和其他光学仪器平均合并。 | `un-cpc-3-0-structure-2025` |
| `sb_atomic_bom_completion` | purchased inputs and outputs | 实际路线中的每项额外材料、部件、工艺化学品、气体、废物或直接排放均须增设独立行；不得使用“光学材料”“公用工程”“化学品”或“废物”等聚合标签。 | `us-epa-2001-computer-display-lca`; `janssen-et-al-2024-mosaic-instrument-lca` |
| `sb_upstream_separation` | purchased inputs | 上游生产通过链接的产品数据集建模，供应商生产负荷保持在门到门前景清单之外。 | `us-epa-2001-computer-display-lca`; `janssen-et-al-2024-mosaic-instrument-lca` |
| `sb_testing_and_rework` | selected manufacturing route | 纳入报告场址控制的验收测试、光学对准、测试失败、返工能源与材料及相应废品。 | `nasa-cr-95573-1968`; `janssen-et-al-2024-mosaic-instrument-lca` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `lcd_device_manufacturing` | 液晶装置制造 | `conditional` | 仅当参考产品是 CPC 48315 范围内液晶装置时纳入 | 前景面板/装置制造、清洗、装配、测试、返工及废品处理 | 1 kg 验收合格液晶装置成品 |
| `non_diode_laser_manufacturing` | 非二极管激光器制造 | `conditional` | 仅当参考产品是非激光二极管的激光器时纳入 | 前景激光头/系统装配、对准、冷却集成、测试、返工及废品处理 | 1 kg 验收合格非二极管激光器成品 |
| `other_optical_instrument_manufacturing` | 其他光学仪器制造 | `conditional` | 仅当参考产品是未另列明的其他光学器械或仪器时纳入 | 前景光学部件制备、电子集成、装配、对准、测试、返工及废品处理 | 1 kg 验收合格其他光学仪器成品 |

合规前景数据包在过程图中恰好只有一个适用过程。

### 过程：液晶装置制造（`lcd_device_manufacturing`）

#### 输入

##### 产品流

###### 铟锡氧化物镀膜玻璃（`lcd_ito_coated_glass`）

记录液晶装置路线消耗的镀膜玻璃片。

- 选定流：铟锡氧化物镀膜玻璃 `8b595156-1e52-4615-aebf-2e9f72658a27`
- 流属性/单位：Mass / kg
- 数量规则：发给该路线的来料实测质量，扣除已退回未使用玻璃片
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lcd_inputs`
- 来源：`us-epa-2001-computer-display-lca`

###### 显示面板用液晶混合物（`lcd_liquid_crystal_mixture`）

记录注入液晶盒的特定配方液晶混合物；在禁止公开保密配方时仍须声明可区分的配方标识。

- 选定流：显示面板用液晶混合物
- 流属性/单位：Mass / kg
- 数量规则：领用实测质量减去有记录的可回收退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lcd_inputs`
- 来源：`us-epa-2001-computer-display-lca`

###### 液晶显示器用偏振膜（`lcd_polarizer_film`）

记录层压进装置的偏振膜质量；领用量包含本路线控制的裁切损耗。

- 选定流：液晶显示器用偏振膜
- 流属性/单位：Mass / kg
- 数量规则：发给层压工序的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lcd_inputs`
- 来源：`us-epa-2001-computer-display-lca`

###### 氢氧化钠（`lcd_sodium_hydroxide`）

记录为场内清洗或蚀刻跨越边界的氢氧化钠；声明溶液浓度并一致报告产品有效质量。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：发给该路线的氢氧化钠产品实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lcd_inputs`
- 来源：`us-epa-2001-computer-display-lca`

###### 外购电力（`lcd_electricity`）

记录面板/装置加工、分配给该路线的洁净室支持、装配、测试和返工用电。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：归属该路线的电表读数换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lcd_inputs`
- 来源：`us-epa-2001-computer-display-lca`

###### 工艺用水（`lcd_process_water`）

记录清洗、漂洗及其他场内路线作业供应的工艺用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：实测供应工艺用水质量，或依据 `water_mass_conversion` 换算体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lcd_inputs`
- 来源：`us-epa-2001-computer-display-lca`

###### 气态天然气（`lcd_natural_gas`）

仅当气态天然气作为所选 LCD 路线的燃料或工艺气体跨越前景边界时记录，并声明用途和参考状态。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：按所声明参考状态计量交付体积；不存在时记录不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lcd_inputs`
- 来源：`us-epa-2001-computer-display-lca`

##### 废物流

##### 基本流

不规定默认基本流输入。直接取用资源跨越所选前景边界时，须逐一添加原子行。

#### 输出

##### 产品流

###### 验收合格液晶装置成品（`lcd_reference_product`）

记录离开过程且通过验收测试的液晶装置成品净质量。

- 选定流：未另列明的液晶装置，激光器，激光二极管除外，未另列明的其他光学器械和仪器 `e2494992-0c4a-4d0f-9ef2-34c4eeedce96`
- 流属性/单位：Mass / kg
- 数量规则：归一化前实测验收合格产品净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：归一化为 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lcd_outputs`
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

###### 玻璃生产废料（`lcd_glass_production_waste`）

记录裁切、图形化、破损或质量淘汰产生的镀膜或未镀膜玻璃废料，并声明污染状态和去向。

- 选定流：玻璃生产废料 `9e75655e-039d-421e-abec-bbe625491bc6`
- 流属性/单位：Mass / kg
- 数量规则：移交回收、处理或处置的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lcd_outputs`
- 来源：`us-epa-2001-computer-display-lca`

###### 废液晶混合物（`lcd_spent_liquid_crystal_mixture`）

废弃或不合格液晶混合物须与水性废水及其他溶剂分开记录。

- 选定流：废液晶混合物
- 流属性/单位：Mass / kg
- 数量规则：移交回收、处理或处置的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lcd_outputs`
- 来源：`us-epa-2001-computer-display-lca`

###### 液晶装置工艺废水（`lcd_process_wastewater`）

记录 LCD 前景过程离开场内、进入下一处理边界前的水性废水，并声明是否已扣除场内循环水。

- 选定流：液晶装置工艺废水
- 流属性/单位：Volume / m3
- 数量规则：排至下一处理边界的实测体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lcd_outputs`
- 来源：`us-epa-2001-computer-display-lca`

##### 基本流

每种实测直接排放只要跨越场址边界，均须单独建立基本流卡片。不得把上游电网排放作为前景输出。

### 过程：非二极管激光器制造（`non_diode_laser_manufacturing`）

#### 输入

##### 产品流

###### Nd:YAG 激光晶体（`laser_nd_yag_crystal`）

仅对采用 Nd:YAG 的固体激光器架构记录成品增益晶体；其他增益介质须建立自己的原子产品流卡片。

- 选定流：Nd:YAG 激光晶体增益介质
- 流属性/单位：Mass / kg
- 数量规则：发给合格及淘汰激光头的来料晶体实测质量；架构不采用 Nd:YAG 时记录不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_laser_inputs`
- 来源：`nasa-cr-95573-1968`

###### 二氧化碳激光气体（`laser_carbon_dioxide`）

仅对二氧化碳激光器架构记录所供应二氧化碳；其他激光气体须单独建立原子行。

- 选定流：二氧化碳 `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- 流属性/单位：Mass / kg
- 数量规则：实测供应的二氧化碳产品质量；架构不采用二氧化碳时记录不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_laser_inputs`
- 来源：`nasa-cr-95573-1968`

###### 光学玻璃（`laser_optical_glass`）

记录纳入激光谐振腔或光束调理组件的光学玻璃；单独外购的成品反射镜或透镜须建立各自的原子部件行。

- 选定流：光学玻璃 `23ec9229-12c9-4994-b7ec-ccb2220a7b2f`
- 流属性/单位：Mass / kg
- 数量规则：发给该路线的来料光学玻璃实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_laser_inputs`
- 来源：`nasa-cr-95573-1968`

###### 外购电力（`laser_electricity`）

记录装配、光学对准、功率转换测试、冷却测试、验收测试和返工的电表用电。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：归属该路线的电表读数换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_laser_inputs`
- 来源：`nasa-cr-95573-1968`

###### 工艺用水（`laser_process_water`）

记录场内冷却和清洗供应的工艺用水；闭路循环须披露，循环水不得作为新鲜输入重复计量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：实测补水与一次通过工艺用水质量，或依据 `water_mass_conversion` 换算体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_laser_inputs`
- 来源：`nasa-cr-95573-1968`

##### 废物流

##### 基本流

不规定默认基本流输入。直接取用资源跨越所选前景边界时，须逐一添加原子行。

#### 输出

##### 产品流

###### 验收合格非二极管激光器成品（`laser_reference_product`）

记录离开过程且通过验收测试的非二极管激光器成品净质量。

- 选定流：未另列明的液晶装置，激光器，激光二极管除外，未另列明的其他光学器械和仪器 `e2494992-0c4a-4d0f-9ef2-34c4eeedce96`
- 流属性/单位：Mass / kg
- 数量规则：归一化前实测验收合格产品净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：归一化为 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_laser_outputs`
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

###### 废弃 Nd:YAG 激光晶体（`laser_rejected_nd_yag_crystal`）

淘汰或破损的 Nd:YAG 增益晶体须与其他玻璃及电子废物分开记录；不采用 Nd:YAG 的架构记录不适用。

- 选定流：废弃 Nd:YAG 激光晶体
- 流属性/单位：Mass / kg
- 数量规则：移交回收、处理或处置的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_laser_outputs`
- 来源：`nasa-cr-95573-1968`

###### 非二极管激光器工艺废水（`laser_process_wastewater`）

记录清洗或一次通过冷却产生、在场外处理前的水性废水，并排除场内循环水。

- 选定流：非二极管激光器工艺废水
- 流属性/单位：Volume / m3
- 数量规则：排至下一处理边界的实测体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_laser_outputs`
- 来源：`nasa-cr-95573-1968`

##### 基本流

激光气体、清洗化学品、燃烧产物或其他物质每种实测直接释放均须建立独立基本流卡片。不得把上游电力排放复制进前景清单。

### 过程：其他光学仪器制造（`other_optical_instrument_manufacturing`）

#### 输入

##### 产品流

###### 光学玻璃（`optical_optical_glass`）

记录发给场内成形、抛光或装配的光学玻璃；单独外购的成品光学元件须建立各自部件行。

- 选定流：光学玻璃 `23ec9229-12c9-4994-b7ec-ccb2220a7b2f`
- 流属性/单位：Mass / kg
- 数量规则：发给该路线的来料光学玻璃实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_optical_inputs`
- 来源：`janssen-et-al-2024-mosaic-instrument-lca`

###### 印制线路板（`optical_printed_wire_board`）

记录纳入仪器控制、传感或读出组件的印制线路板，并声明为已装联还是未装联来料状态。

- 选定流：印制线路板 `a8bd954c-59b3-4317-b4de-02a17d6da5ca`
- 流属性/单位：Mass / kg
- 数量规则：纳入合格和淘汰组件的来料线路板实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_optical_inputs`
- 来源：`janssen-et-al-2024-mosaic-instrument-lca`

###### 外购电力（`optical_electricity`）

记录光学部件制备、分配给该路线的洁净室或受控空间支持、电子集成、对准、验收测试和返工用电。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：归属该路线的电表读数换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_optical_inputs`
- 来源：`janssen-et-al-2024-mosaic-instrument-lca`

###### 工艺用水（`optical_process_water`）

记录场内玻璃制备、抛光和清洗供应的工艺用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：实测工艺用水质量，或依据 `water_mass_conversion` 换算体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_optical_inputs`
- 来源：`janssen-et-al-2024-mosaic-instrument-lca`

##### 废物流

##### 基本流

不规定默认基本流输入。直接取用资源跨越所选前景边界时，须逐一添加原子行。

#### 输出

##### 产品流

###### 验收合格其他光学仪器成品（`optical_reference_product`）

记录离开过程且通过验收测试的其他光学仪器成品净质量。

- 选定流：未另列明的液晶装置，激光器，激光二极管除外，未另列明的其他光学器械和仪器 `e2494992-0c4a-4d0f-9ef2-34c4eeedce96`
- 流属性/单位：Mass / kg
- 数量规则：归一化前实测验收合格产品净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：归一化为 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_optical_outputs`
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

###### 玻璃抛光污泥（`optical_glass_polishing_sludge`）

记录场内光学玻璃抛光产生、含玻璃细粉和抛光介质的污泥，并声明含水率和处理去向。

- 选定流：玻璃抛光污泥
- 流属性/单位：Mass / kg
- 数量规则：移交回收、处理或处置的湿重实测质量，同时报告干固体分数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_optical_outputs`
- 来源：`janssen-et-al-2024-mosaic-instrument-lca`

###### 光学仪器工艺废水（`optical_process_wastewater`）

记录抛光与清洗产生、在场外处理前的水性废水，并排除已计入单独污泥流的水分。

- 选定流：光学仪器工艺废水
- 流属性/单位：Volume / m3
- 数量规则：排至下一处理边界的实测体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_optical_outputs`
- 来源：`janssen-et-al-2024-mosaic-instrument-lca`

##### 基本流

抛光、镀膜、清洗、燃烧或测试产生的每种实测直接排放均须建立独立基本流卡片。不得把上游电力排放作为前景输出。

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_subdivision_first` | shared lines, clean rooms, utilities, and test facilities | 技术可行时，先细分或计量路线特定过程，再实施分配。 |  |
| `al_physical_driver` | unavoidable shared burdens | 无法细分的共同负荷采用能代表资源使用因果关系的物理驱动因子，如设备时间、计量能源、受控空间占用时间或加工质量。 |  |
| `al_economic_fallback` | shared burdens without defensible physical relation | 只有不存在合理物理关系时才将经济分配作为披露的后备方法，并报告收入基准、价格期、币种及对重大价格变化的敏感性。 |  |
| `al_recycling_boundary` | recovered glass, metal, boards, or process chemicals | 在工厂大门报告废物数量和回收去向。除非明确声明下游建模方法和分配约定，否则不得在前景清单中主张避免负荷或再生含量抵扣。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_lcd_inputs` | `lcd_device_manufacturing` | each listed atomic product input | purchase, issue, return, meter, and batch records | row_id; supplier flow identity; quantity; unit; concentration or reference conditions; issue and return quantity; meter boundary; batch_id; timestamp | 将采购和仓储记录与路线计量及生产领料进行核对 | row unit | 每批次或连续计量，并按月核对 | 有代表性的连续 12 个月；较短生产期覆盖全部批次 | 为所选 LCD 路线服务的全部场址作业 | 每行净领用量求和后除以验收合格产品净质量 | 发票；领退料记录；仪表校准；批次谱系；核对记录 |
| `cp_lcd_outputs` | `lcd_device_manufacturing` | accepted product and each listed waste output | scale, acceptance, reject, discharge, and waste-transfer records | row_id; quantity; unit; batch_id; acceptance status; contamination; destination; discharge meter; timestamp | 将成品衡器记录与废品日志、排水表和废物联单核对 | kg or m3 | 每批或每次移交，并按月核对 | 与 `cp_lcd_inputs` 相同 | 相同前景场址和路线 | 每项输出按行求和后除以验收合格产品净质量 | 经校准衡器；验收记录；废物联单；排水表记录；质量平衡核对 |
| `cp_laser_inputs` | `non_diode_laser_manufacturing` | each listed atomic product input | purchase, issue, gas, water, electricity, and test records | row_id; architecture; material or gas identity; quantity; unit; gas conditions; meter boundary; serial_or_batch_id; timestamp | 将部件领用和公用工程计量与所声明激光架构及合格序列号核对 | row unit | 每台构建或连续计量，并按月核对 | 有代表性的连续 12 个月；较短生产期覆盖全部构建 | 为所选激光器路线服务的全部场址作业 | 每行路线归属量求和后除以验收合格产品净质量 | 供应商记录；领料记录；仪表校准；架构物料清单；序列号谱系 |
| `cp_laser_outputs` | `non_diode_laser_manufacturing` | accepted product and each listed waste output | scale, acceptance-test, reject, discharge, and waste-transfer records | row_id; quantity; unit; architecture; serial_or_batch_id; acceptance status; destination; timestamp | 将成品衡器记录与测试日志、废品记录、废水表和废物联单核对 | kg or m3 | 每台构建、测试或移交，并按月核对 | 与 `cp_laser_inputs` 相同 | 相同前景场址和路线 | 每项输出按行求和后除以验收合格产品净质量 | 经校准衡器；测试记录；废品记录；废物联单；排水表记录 |
| `cp_optical_inputs` | `other_optical_instrument_manufacturing` | each listed atomic product input | purchase, issue, water, electricity, and production records | row_id; component state; quantity; unit; meter boundary; instrument_id_or_batch; timestamp | 将物料清单领用和路线计量与合格仪器构建核对 | row unit | 每台构建或连续计量，并按月核对 | 有代表性的连续 12 个月；较短生产期覆盖全部构建 | 为所选光学仪器路线服务的全部场址作业 | 每行路线归属量求和后除以验收合格产品净质量 | 供应商记录；领料记录；物料清单；仪表校准；构建谱系 |
| `cp_optical_outputs` | `other_optical_instrument_manufacturing` | accepted product and each listed waste output | scale, acceptance-test, sludge, discharge, and waste-transfer records | row_id; quantity; unit; instrument_id_or_batch; acceptance status; sludge solids fraction; destination; timestamp | 将成品衡器记录与测试日志、污泥记录、排水表和废物联单核对 | kg or m3 | 每台构建或每次移交，并按月核对 | 与 `cp_optical_inputs` 相同 | 相同前景场址和路线 | 每项输出按行求和后除以验收合格产品净质量 | 经校准衡器；验收记录；污泥取样；废物联单；排水表记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cr_reference_normalization` | every selected-route inventory row | 归一化量 = 路线期间该行数量 ÷ 路线期间验收合格产品净质量 | 核对后的行数量；验收合格产品净质量 | 每 1 kg 验收合格成品的行数量 |  |
| `cr_electricity_mj` | electricity rows | electricity_MJ = metered_electricity_kWh × 3.6 MJ/kWh | 路线归属电表读数（kWh） | 每参考流电力（MJ） |  |
| `cr_water_mass` | process-water rows measured by volume | water_mass_kg = measured_volume_m3 × documented_density_kg_per_m3 | 实测水体积；适用的实测或供应商密度 | 每参考流工艺用水质量（kg） |  |
| `cr_route_mass_balance` | each selected route | 核对实测总进料与合格产品、单独报告废物、直接排放、库存变化和披露的平衡差；发布前调查重大差异 | 原子输入输出记录；期初及期末库存 | 路线质量平衡检查和未解释差异 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all flows | 保留供应商产品身份、已确认的 Tiangong UUID 及准确产品或废物状态；不得用宽泛类别流替代未解决原子交换。 | 供应商规格；直读身份审计；批次或废物记录 |
| `dq_route` | product and process identity | 证明只有一条路线适用，并披露子型、架构、光学功能、波长或光谱范围、性能等级及验收准则。 | 产品规格；工艺路线；物料清单；验收计划 |
| `dq_measurement` | mass, volume, and electricity records | 使用有明确覆盖范围的经校准仪器，并保留全部换算、浓度、气体参考状态和计量分配因子。 | 校准证书；原始读数；换算工作表 |
| `dq_temporal` | foreground dataset period | 优先采用连续 12 个月；较短或批次生产覆盖全部构建，并说明季节性、利用率、启动和返工代表性。 | 生产日历；计量期间；批次记录 |
| `dq_completeness` | selected route | 核对采购、领用、退料、合格输出、废品、废物移交、废水、直接排放及库存变化；披露缺失的电子部件、原型、测试和制造损失。 | 核对表；质量平衡；省略项登记；数据覆盖矩阵 |
| `dq_source_fit` | linked upstream datasets | 披露每个材料上游数据集的地理、技术、时间、产品状态及代理适配性。 | 数据集映射表和代理理由 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `vr_identity_and_route` | dataset identity | 确认参考产品属于 CPC 48315、不是激光二极管，并只选择一条过程路线且具备全部必需限定信息。 | `un-cpc-3-0-structure-2025` |
| `vr_reference_mass` | reference flow and inventory | 确认归一化后验收合格产品净质量为 1 kg，且所有纳入行采用相同的合格产品分母。 |  |
| `vr_uuid_semantics` | UUID-bearing rows | 确认所选 Tiangong UUID、流类型、属性、单位组、产品状态和正式中文 baseName 与直读身份一致；不得采用代理 UUID。 |  |
| `vr_unresolved_atomic_rows` | UUID-empty rows | 确认每个 UUID 空缺行仍为化学或物理特定流、出现在 manifest 未解决元数据中，且未被宽泛候选替换。 |  |
| `vr_inventory_completeness` | selected route | 确认实际物料清单投入、公用工程、化学品、气体、废物、废水、直接排放、测试、返工及废品均以原子行表示或明确声明不存在。 | `us-epa-2001-computer-display-lca`; `nasa-cr-95573-1968`; `janssen-et-al-2024-mosaic-instrument-lca` |
| `vr_balance_and_allocation` | selected route | 确认质量平衡差异已调查，全部共同负荷采用已披露的细分或分配驱动因子。 |  |
| `vr_range_status` | quantitative QA | 除非至少两个相互独立、已核验原文且边界兼容的来源支持，否则不得声称外部经验范围；证据不足时保留前景采集和 manifest 证据需求。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景产品制造数据集 |
| downstream_use | `secondary_dataset`；经独立审查并解决预期用途完整性后可作 `background_dataset` |
| allowed_use | 当路线、功能、架构、性能、地理、技术时期、边界和数据质量与研究匹配时，用于所声明 CPC 48315 装置的产品碳足迹或 LCA 建模 |
| excluded_use | 三条路线的通用平均；激光二极管生产；使用阶段服务比较；医疗或安全性能等效；替代另行分类光学元件；超出所声明产品与工厂大门边界的主张 |
| required_metadata | PCR id 与版本；产品子型；所选路线；光学功能；适用时的架构与增益介质或液晶技术；波长或光谱范围；性能等级；随附附件；净质量；包装处理；地理位置；技术时期；数据期间；分配；截断；上游数据集映射；未解决 UUID |
| required_quality_disclosure | 一手数据占比；仪表与衡器覆盖；时间与生产覆盖；质量平衡差；返工与废品覆盖；洁净室或测试设施分配；缺失物料清单项目；废水与直接排放覆盖；代理数据集；范围证据缺口 |
| update_trigger | 产品架构、液晶或激光技术、光学性能、供应商物料清单、场址、洁净室或测试分配、收率、能源或用水系统、废物处理、上游数据集适配性发生重大变化，或 UUID/范围证据需求得到解决 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，《CPC Version 3.0 Structure》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期 2026-09-07） | CPC 48315 正式产品类别身份，以及激光器产品表述对激光二极管的排除 |
| `us-epa-2001-computer-display-lca` | `official_guidance` | 美国环境保护署，*Desktop Computer Displays: A Life-Cycle Assessment, Volume 1*，2001-12，https://www.epa.gov/sites/default/files/2014-01/documents/computer_display_lca.pdf（检索日期 2026-09-07） | LCD 过程分解；玻璃、面板部件、液晶材料、偏振片、线路板、电力、燃料、水、废物、废水、测试、收率和不确定性采集需求；不用于数值范围 |
| `nasa-cr-95573-1968` | `official_guidance` | NASA Contractor Report NASA-CR-95573，*Deep Space Communication and Navigation Study, Volume 2: Communication Technology*，1968-05-01，https://ntrs.nasa.gov/citations/19680019322（检索日期 2026-09-07） | 非二极管激光器架构、增益介质、功率转换、辅助部件和冷却边界；不用于数值范围 |
| `janssen-et-al-2024-mosaic-instrument-lca` | `literature` | Janssen 等，*Estimate of the environmental impact of the ELT instrument MOSAIC*，Proceedings of SPIE 13099，130990P，2024，https://doi.org/10.1117/12.3018865（检索日期 2026-09-07） | 其他光学仪器子系统与材料边界；电子部件、原型、测试、制造损失、运输和不确定性披露；不用于数值范围 |
