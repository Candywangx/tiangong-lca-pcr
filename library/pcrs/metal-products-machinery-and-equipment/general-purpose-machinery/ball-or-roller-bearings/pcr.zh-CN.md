---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.ball-or-roller-bearings
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 滚珠轴承或滚柱轴承

## 1. 范围与适用性

本 PCR 适用于作为成品供应的完整滚珠轴承或滚柱轴承，覆盖径向和推力结构，以及以滚珠或滚柱在滚道之间滚动的常规轴承变型。保持架、密封件、防尘盖、润滑剂或防锈处理属于销售产品组成时一并纳入。本 PCR 支持以轴承净质量归一化的从摇篮到制造商工厂大门前景数据包。

单独销售的轴承零件、滚珠或滚柱，轴承座和滑动轴承，齿轮和齿轮箱，滚珠或滚柱丝杠，磁轴承和流体膜轴承，以及维护、再制造和使用阶段性能均不在范围内。轴承单元只有在销售产品分类和申报为完整滚珠或滚柱轴承时才可纳入，否则应采用其实际产品类别 PCR。CPC 身份由 `un-cpc-3-0-structure-2025` 支持，类别边界与 `international-epd-pcr-2023-03` 一致。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.ball-or-roller-bearings |
| classification_refs | CPC 3.0：43310，滚珠轴承或滚柱轴承（`un-cpc-3-0-structure-2025`） |
| covered_products | 滚珠或滚柱在轴承滚道之间滚动的完整成品轴承；径向或推力型；开式、带防尘盖或密封型；以润滑或防锈涂层状态销售的变型 |
| excluded_products | 散装零件和滚动体；轴承座及滑动轴承；齿轮、齿轮箱、丝杠、联轴器和传动装置；磁轴承或流体膜轴承；服务；下游应用设备 |
| representative_product | 具有已申报类型、尺寸、质量、材料规格、精度、内部游隙、额定载荷、密封和润滑状态，且已完成检验的滚珠轴承或滚柱轴承 |
| production_route | 成形与车削；热处理；磨削与珩磨或超精加工；清洗；装配；适用时润滑或防锈；检验；包装。外包步骤采用具体上游数据集表示 |
| market_state | 制造商工厂大门处的合格成品轴承，按销售状态完成防锈和包装；包装质量与轴承净质量分开报告 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造商工厂大门处的滚珠轴承或滚柱轴承成品 |
| How much | 1 kg 合格轴承产品净质量，不含另行报告的包装 |
| How well | 符合已申报产品规格，并通过适用的尺寸、内部游隙、表面、外观、旋转灵活性、振动或噪声及标识检验 |
| How long or cycle | 工厂大门申报单位，不表示使用寿命周期。下游研究若建模使用阶段，须另行申报应用、载荷、转速、润滑、环境、维护和寿命假设。 |
| reference_flow_link | 输出行 `final_bearing_output` 为参考流并严格归一化为 1 kg。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 滚珠轴承或滚柱轴承 `9b10184f-db9d-4cc7-94b5-02ab19ca370d` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 制造商和场址地理；报告期；产品代号；滚珠或滚柱类型及子型；径向或推力结构；内径、外径和宽度；轴承净质量；套圈和滚动体材料牌号；保持架材料及有无；密封或防尘盖状态；润滑剂类型和填充量；防锈状态；精度与内部游隙等级；基本额定载荷或已申报性能规格；自制与外包制造步骤；分配方法；包装组成和质量 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `measurement_reference_mass` | 参考产品和所有质量归一化交换 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在最终检验后、加入另行报告的包装前称量或计算合格轴承净质量。所有清单交换归一化为每 1 kg 轴承净产出。 |
| `measurement_electricity` | 电力行 | 净热值 `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留天工能量属性。实测 kWh 乘以 3.6 换算为 MJ，并保留原始电表记录、计量边界和电力供应结构。 |
| `measurement_gas_volume` | 气态天然气 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按已申报参考温度和压力报告计量体积。若记录采用质量或能量，应使用供应商或仪表特定换算数据并披露换算依据，不得使用无依据通用系数。 |
| `measurement_water_mass` | 工艺用水和清洗废水 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先采用直接质量记录。体积表记录应以实测或场址特定密度换算，并保留体积、密度、温度和换算记录。 |
| `measurement_material_balance` | 钢输入、轴承输出、钢加工切屑和钢磨屑 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 对报告期内接收钢材、在制品、合格产出、不合格品、切屑、磨屑和库存变化进行核对。废物所含油、水和磨料应单列或披露其已包含在实测废物质量中。 |

## 5. 系统边界

前景边界始于钢材、外购零件、辅助材料、能源、水和包装到达报告制造场址，或始于归属于产品的合同加工工序；终于合格、防锈、检验和包装后的轴承离开工厂大门。工序顺序和检验阶段依据 `skf-insert-bearings-18033`，材料、辅助品、能源、清洗、包装和残余物流的相关性依据 `skf-green-bearings`。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 交付至报告场址大门的轴承级钢材、外购轴承零件、辅助材料、能源、工艺用水和包装，并注明供应商、材料牌号、产品状态、已知再生含量和上游数据集 |
| starting_condition_role | 前景制造输入；外购商品和能源的开采与生产通过链接的上游数据集表示，不在前景过程中重复 |
| product_classification_scope | 完整滚珠轴承或滚柱轴承；散装零件和其他动力传动产品不属于参考产品身份 |
| recursive_input_rule | 作为组件购入的完整滚珠或滚柱轴承只记录一次上游产品输入及其数据集；除非研究明确用主要组件记录替代供应商数据集，否则不得在本 PCR 下递归拆解 |
| upstream_dataset_requirement | 轴承钢、外购组件、润滑剂、防锈油、包装、电力、天然气和水优先采用供应商特定数据集；否则采用地理、技术、时间和材料代表性数据并披露替代 |
| disclosure | 申报现场与外包工序，钢材和零件来料状态，炉型与精加工技术，清洗路线，润滑和防锈状态，不合格品与返工，废物去向，包装，场址地理，报告期和排除项 |

### 系统边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | foreground_operations | 纳入生产者控制或归属的合同制造中的成形与车削、热处理、磨削与珩磨或超精加工、清洗、装配、适用时润滑或密封、检验、防锈和包装。 | `skf-insert-bearings-18033`; `skf-green-bearings` |
| `boundary_rule_2` | purchased_inputs | 为每种外购材料、组件、辅助品、能源载体、水和包装链接从摇篮到大门的上游数据集；不得把报告场址大门视为零负荷起点。 | `skf-green-bearings`; `eu-recommendation-2021-2279` |
| `boundary_rule_3` | outsourced_steps | 外包制造步骤只表示一次，采用供应商特定过程或包含在外购组件数据集中；不得在报告场址清单再次计入相同能源、辅助品、废物或排放。 | `skf-insert-bearings-18033` |
| `boundary_rule_4` | downstream_stages | 本申报单位不含工厂大门后的分销、安装、运行、维护、更换、再制造和寿命终止。下游模型只能在另行申报应用和情景数据后增加这些阶段。 | `international-epd-pcr-2023-03` |
| `boundary_rule_5` | capital_goods_and_minor_flows | 不自动采用质量或成本截断。纳入实测生产交换；排除资本品或微量流时，应针对研究目的开展并记录重要性检查。 | `eu-recommendation-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `forming_and_turning` | 组件成形与车削 | `required` | 报告生产者自行成形或车削套圈或滚动体时建模现场记录；否则链接供应商特定组件过程且不重复现场负荷。 | 前景材料转化与机械加工 | 每 1 kg 合格轴承成品产出 |
| `heat_treatment` | 热处理 | `required` | 按实际电加热、燃气或外包路线建模；天然气和直接燃烧行仅适用于前景边界内燃气设备。 | 前景淬硬与稳定化 | 每 1 kg 合格轴承成品产出 |
| `grinding_honing_cleaning` | 磨削、珩磨、超精加工与清洗 | `required` | 按实际湿式或干式精加工及水基或非水基清洗建模；水和废水行仅在工艺用水跨越边界时适用。 | 前景精密精加工与清洗 | 每 1 kg 合格轴承成品产出 |
| `assembly_lubrication_preservation` | 装配、润滑、密封与防锈 | `required` | 润滑脂和防锈油行仅在前景边界内添加时适用；申报开式、带防尘盖或密封产品状态。 | 前景最终装配与防护 | 每 1 kg 合格轴承成品产出 |
| `inspection_packaging` | 最终检验与包装 | `required` | 建模已申报产品规格要求的检验及实际使用的每种包装组件；瓦楞纸箱行仅在实际使用时适用。 | 前景合格放行与工厂大门产出 | 每 1 kg 合格轴承成品产出 |

### 过程：组件成形与车削（`forming_and_turning`）

#### 输入

##### 产品流

###### 轴承级高碳铬钢输入（`bearing_steel_input`）

记录进入生产者控制成形与车削的轴承级钢棒、钢管、钢丝、锻件或其他已申报原料质量。记录合金牌号、冶金状态、产品形态、供应商、已知再生含量和上游数据集。

- 选定流：轴承级高碳铬钢
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测接收质量减去有记录的退回和报告期库存增加，并归属于合格产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格轴承成品产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`skf-green-bearings`

###### 成形与车削用电力（`forming_electricity`）

记录交付至锻造、冷成形、车削、材料搬运和本阶段可直接归属辅助设备的外购或自发电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：实测阶段电力换算为 MJ 并归属于合格产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格轴承成品产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stage_electricity`
- 来源：`skf-green-bearings`

##### 废物流

本过程边界没有默认废物输入。

##### 基本流

不规定默认基本输入。

#### 输出

##### 产品流

内部在制品转移不是外部清单交换；应保留在场址质量平衡中且不得重复计为外购产品。

##### 废物流

###### 车削产生的钢加工切屑（`steel_machining_chips`）

记录车削及其他产屑加工形成的单独收集含铁切屑，并申报合金牌号、切削液污染、现场回收和去向。

- 选定流：钢切屑 `69609b56-5e59-4f7d-9847-2eae3ea031b7`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：离开过程并进入内部回收或外部处理的实测湿态或干态切屑质量，同时申报测量状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格轴承成品产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`
- 来源：`skf-green-bearings`

##### 基本流

实测直接粉尘或其他基本排放应在前景数据包中按具体物质另列；此处不规定类别泛化默认值。

### 过程：热处理（`heat_treatment`）

#### 输入

##### 产品流

###### 热处理用电力（`heat_treatment_electricity`）

记录供给炉体、淬火循环、清洗、控制系统及可直接归属热处理辅助设备的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：实测热处理电力换算为 MJ 并归属于合格产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格轴承成品产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stage_electricity`
- 来源：`skf-insert-bearings-18033`

###### 热处理用气态天然气（`natural_gas_heat_treatment`）

仅在生产者控制的热处理或可直接归属热力设备中燃烧天然气时记录，并申报参考条件、供应商、组成或热值记录及炉型技术。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3 `93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：已申报参考条件下的计量气体体积；全电或外包路线记录零值和不适用证据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格轴承成品产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_natural_gas`
- 来源：`skf-insert-bearings-18033`

##### 废物流

本过程边界没有默认废物输入。使用后的淬火油、盐或浴液应在适用时按具体化学身份另列。

##### 基本流

不规定默认基本输入。

#### 输出

##### 产品流

热处理在制品在生产记录中追踪，不重复作为外部产品流。

##### 废物流

适用时将每种废淬火介质、炉渣或不合格热处理组件作为具体废物流另列。

##### 基本流

###### 天然气燃烧直接排放的化石二氧化碳（`fossil_co2_heat_treatment`）

仅记录前景边界内天然气燃烧直接排入空气的化石二氧化碳，不得把上游电力或燃料供应排放复制到本行。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测烟气质量，或依据 `calc_direct_fossil_co2` 由计量燃料和供应商特定碳含量计算化石 CO2
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格轴承成品产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_combustion`
- 来源：`skf-green-bearings`

### 过程：磨削、珩磨、超精加工与清洗（`grinding_honing_cleaning`）

#### 输入

##### 产品流

###### 磨削、珩磨、超精加工与清洗用电力（`grinding_electricity`）

记录磨削、珩磨或超精加工、冷却液循环、水基清洗、过滤以及可直接归属辅助设备的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：实测阶段电力换算为 MJ 并归属于合格产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格轴承成品产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stage_electricity`
- 来源：`skf-insert-bearings-18033`; `skf-green-bearings`

###### 水基清洗用工艺用水（`process_water_cleaning`）

仅当前景边界内运行水基清洗路线时记录交付至该操作的工艺用水，并申报水源、水质、循环边界、补充水与总循环量和交付边界。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：跨越场址或过程边界的实测补充水；不得重复报告循环水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格轴承成品产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water`
- 来源：`skf-green-bearings`

##### 废物流

本过程边界没有默认废物输入。

##### 基本流

不规定默认基本输入。

#### 输出

##### 产品流

内部精加工组件在生产记录中追踪，不重复作为外部产品流。

##### 废物流

###### 磨削产生的钢磨屑（`steel_grinding_swarf`）

记录磨削、珩磨或超精加工去除的细钢磨屑，并申报实测质量是否包含磨削液、磨料、水或过滤介质及其处理去向。

- 选定流：钢切屑 `6a16eab5-8097-4e37-8d28-aa1e81b8bb5c`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：以已申报湿态或干态离开过程并进入回收或处理的实测磨屑质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格轴承成品产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`
- 来源：`skf-green-bearings`

###### 水基清洗废水（`cleaning_wastewater`）

记录送至现场处理、下水道或外部废物处理方的清洗废水，并申报清洗化学品、污染负荷、内部循环、处理边界和去向。

- 选定流：清洗废水 `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：跨越所选处理边界的实测废水质量，扣除有记录的内部循环量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格轴承成品产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_wastewater`
- 来源：`skf-green-bearings`

##### 基本流

清洗或精加工的实测释放物按具体物质和环境介质另列基本流，不得使用笼统排放行。

### 过程：装配、润滑、密封与防锈（`assembly_lubrication_preservation`）

#### 输入

##### 产品流

###### 滚动轴承润滑脂（`bearing_lubricating_grease`）

仅对脂润滑产品记录加入轴承的润滑脂，并申报制造商和牌号、基础油、稠化剂、锥入度或规格、填充质量以及是否终身密封。

- 选定流：滚动轴承润滑脂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：向合格轴承发放的实测润滑脂，减去有记录的可回收退料和报告期库存增加
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格轴承成品产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_auxiliary_mass`
- 来源：`skf-insert-bearings-18033`; `skf-green-bearings`

###### 轴承防锈油（`bearing_rust_preventive_oil`）

仅当防锈属于工厂大门产品状态时记录涂覆于成品轴承的防锈油，并申报配方或牌号、施用方法、留存质量和相关挥发分。

- 选定流：轴承防锈油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测发油量减去有记录的退回量，并核对留存和废弃部分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格轴承成品产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_auxiliary_mass`
- 来源：`skf-insert-bearings-18033`; `skf-green-bearings`

##### 废物流

每种废润滑剂、废防锈槽液、不合格密封件、保持架、套圈或滚动体跨越所选边界时，应分别作为具体废物流增加。

##### 基本流

不规定默认基本输入。

#### 输出

##### 产品流

装配后的轴承作为内部在制品进入最终检验与包装，不重复作为外部产品流。

##### 废物流

不规定类别泛化装配废物，应使用实际物种或材料特定记录。

##### 基本流

适用时将实测挥发性物质或其他直接释放按具体物质和环境介质另列。

### 过程：最终检验与包装（`inspection_packaging`）

#### 输入

##### 产品流

###### 瓦楞纸箱（`packaging_corrugated_boxes`）

只有在交付参考轴承时实际使用才记录瓦楞纸箱，并申报箱体规格、质量、供应商、已知再生含量及其他包装组件是否另列。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：向已包装合格轴承产出发放的实测纸箱质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格轴承成品产出；包装不计入参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_mass`
- 来源：`skf-green-bearings`

##### 废物流

本过程边界没有默认废物输入。

##### 基本流

不规定默认基本输入。

#### 输出

##### 产品流

###### 工厂大门处的合格轴承成品（`final_bearing_output`）

仅记录在完成适用游隙、旋转灵活性、振动或噪声、外观、尺寸、标识、防锈和包装检查后放行的合格产品。包装质量不属于 1 kg 轴承净产出。

- 选定流：滚珠轴承或滚柱轴承 `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：根据参考流定义严格为 1 kg 合格轴承净产出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：

##### 废物流

每个不合格轴承或组件按其物理身份和实际处理路线另列；不得与加工切屑或磨屑合并。

##### 基本流

最终检验与包装不规定默认直接基本输出。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | shared_processes | 优先通过细分生产线、批次、仪表、炉体和废物记录避免分配，使可直接归属已申报轴承的输入输出单独采集。 | `eu-recommendation-2021-2279` |
| `allocation_rule_2` | unavoidable_shared_burdens | 无法细分时，采用机器时间、炉内占用、计量能源、加工质量、表面积或批次时间等因果物理关系，并记录驱动因子、分子、分母、受影响产品和敏感性。 | `eu-recommendation-2021-2279` |
| `allocation_rule_3` | non_physical_allocation | 只有在说明无法细分且不存在相关物理关系后才采用经济或其他非物理关系，并记录价格、期间、地理、共产品状态和敏感性。 | `eu-recommendation-2021-2279` |
| `allocation_rule_4` | recycled_metal_and_waste | 切屑、磨屑、废水和其他废物在已申报处理或废物终止边界前的收集、调理和处理负荷归于产生系统。回收信用或替代情景另行报告，不得从前景数量中隐含扣减。 | `eu-recommendation-2021-2279` |
| `allocation_rule_5` | rework_and_internal_recycling | 追踪内部返工和循环材料但不创建第二产品输出。只计净外部输入输出，同时保留总过程记录供审计和质量平衡。 | `skf-green-bearings` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `forming_and_turning` | `bearing_steel_input` | 秤量与库存记录 | 合金牌号；交付形态；毛重和皮重；期初期末库存；退回；在制品 | 按合金和路线称量投料钢材，核对库存、退回、切屑和在制品。 | kg | 每次接收和生产批次 | 代表性报告期 | 报告场址及归属的合同成形 | 净归属质量除以合格产出质量 | 秤具身份、校准状态、库存核对、供应商记录 |
| `cp_stage_electricity` | `forming_and_turning`; `heat_treatment`; `grinding_honing_cleaning` | `forming_electricity`; `heat_treatment_electricity`; `grinding_electricity` | 电表记录 | 表读数；时间戳；计量边界；阶段；批次；共用负荷驱动因子 | 分阶段计量；共用电表只按有记录的机器时间、经核验额定负荷或炉内占用分配。 | kWh 和 MJ | 连续或每批次 | 与产出同期 | 每个纳入场址和外包操作 | 阶段总量换算 MJ 后除以合格产出质量 | 电表身份、校准、分配表、电费账单核对 |
| `cp_waste_mass` | `forming_and_turning`; `grinding_honing_cleaning` | `steel_machining_chips`; `steel_grinding_swarf` | 废物称量和转移记录 | 毛重；皮重；干湿状态；合金；夹带液体；去向；废物终止状态 | 每次移出时分别称量，并扣除有记录容器皮重。 | kg | 每次移出 | 与产出同期 | 每个废物产生操作 | 净废物流质量除以合格产出质量 | 过磅单、皮重记录、废物转移单、水分或夹带液体说明 |
| `cp_natural_gas` | `heat_treatment` | `natural_gas_heat_treatment` | 气表或核对后的账单记录 | 体积；温度；压力；时间戳；炉体；组成或热值 | 读取热处理气表，或将账单体积与炉体运行核对并注明参考条件。 | m3 | 连续或每炉批次 | 与热处理产出同期 | 前景边界内燃气热处理 | 归属的参考条件体积除以合格产出质量 | 仪表身份、校准、账单核对、供应商规格 |
| `cp_direct_combustion` | `heat_treatment` | `fossil_co2_heat_treatment` | 烟气结果或燃料碳计算 | 烟气质量或燃料量；碳含量或排放因子；氧化率；单位换算 | 优先使用现场烟气或燃料碳记录；否则按计量燃气、供应商因子和氧化假设计算。 | kg | 每监测期或炉批次 | 与燃料记录同期 | 仅前景燃气设备 | 直接化石 CO2 除以合格产出质量 | 烟气报告或完整因子出处与计算表 |
| `cp_process_water` | `grinding_honing_cleaning` | `process_water_cleaning` | 水表或秤量记录 | 补充量；水源；水质；温度；密度；循环边界 | 计量或称量交付清洗的净补充水，排除总循环流。 | kg | 连续或每清洗批次 | 与清洗产出同期 | 前景水基清洗系统 | 净补充水质量除以合格产出质量 | 仪表身份、校准、密度换算、水平衡 |
| `cp_cleaning_wastewater` | `grinding_honing_cleaning` | `cleaning_wastewater` | 出水仪表、秤量和转移记录 | 数量；温度；密度；去向；污染物表征 | 计量或称量离开前景边界的废水，并与用水、留存和蒸发核对。 | kg | 连续或每次排放 | 与清洗输入同期 | 前景水基清洗系统 | 跨边界废水质量除以合格产出质量 | 仪表或过磅单、密度换算、水平衡、处理记录 |
| `cp_auxiliary_mass` | `assembly_lubrication_preservation` | `bearing_lubricating_grease`; `bearing_rust_preventive_oil` | 秤量、采购与库存记录 | 产品名；牌号；供应商；批号；毛重皮重；期初期末库存 | 称量或核对每种实际使用或留存在轴承上的具体辅助品。 | kg | 每批次和报告期 | 与装配产出同期 | 装配和防锈操作 | 净归属产品质量除以合格产出质量 | 秤具校准、采购库存核对、产品规格或安全数据标识 |
| `cp_packaging_mass` | `inspection_packaging` | `packaging_corrugated_boxes` | 包装称量和领用记录 | 箱体规格；毛重皮重；领用、未用和退回量；再生含量 | 称量已申报产出使用的纸箱，扣除未用和退回量，并与轴承净质量分开。 | kg | 每包装批次 | 与包装产出同期 | 最终包装操作 | 纸箱质量除以合格轴承净质量 | 秤具校准、包装领用核对、供应商规格 |
| `cp_output_mass` | `inspection_packaging` | `final_bearing_output` | 放行秤量和生产记录 | 产品代号；净质量；合格数量；不合格品；在制品；发运 | 放行检验后、运输包装前称量合格轴承净质量，并核对生产和发运。 | kg | 每放行批次 | 代表性报告期 | 所有纳入的轴承生产场址 | 合格净质量为分母并归一化为 1 kg | 秤具校准、检验放行、生产与发运核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 报告期归属于合格轴承的每项交换除以相同期间和边界的合格轴承净质量。 | 归属交换量；合格产出质量 | 每 1 kg 参考流的交换量 | `eu-recommendation-2021-2279` |
| `calc_electricity_conversion` | 分阶段电力行 | 实测 kWh 乘以 3.6，并保留仪表记录和换算系数。 | 电力 kWh | 电力 MJ |  |
| `calc_water_mass` | 水相关行 | 实测体积乘以适合实测温度和组成的已申报密度。 | 体积；温度；水组成；密度 | 水质量 kg |  |
| `calc_direct_fossil_co2` | `fossil_co2_heat_treatment` | 计量燃料量乘以有记录的化石碳或供应商排放因子及氧化率；排除上游排放。 | 燃料量；因子；氧化率；单位换算 | 直接化石 CO2 质量 | `eu-recommendation-2021-2279` |
| `calc_metal_balance` | 成形、车削、磨削和最终产出 | 按合金核对钢输入、合格产品、切屑、磨屑、不合格品、在制品和库存变化，并调查材料不平衡。 | 合金特定材料记录 | 有记录的金属平衡和差异 | `skf-green-bearings` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 记录轴承系列、滚动体类型、主要尺寸、适用额定载荷或公差等级、密封或防尘盖状态、保持架和套圈材料、热处理路线、润滑及包装状态。 | 产品规格、图纸、检验和放行记录 |
| `dq_measurement` | 所有实测行 | 优先采用经校准直接测量，并记录仪器身份、分辨率、校准状态、间隔、缺失数据处理和不确定性。 | 校准证书、仪表日志、秤量记录、不确定性说明 |
| `dq_temporal` | 所有前景行 | 可用时采用连续 12 个月代表期，或说明能捕捉批次和运行变异的较短活动；分子和分母期间一致。 | 报告期声明和代表性评估 |
| `dq_site_scope` | 所有过程 | 识别每个纳入场址和外包操作；不得因实质步骤在场外发生而遗漏。 | 场址与供应商过程图、合同、采购记录 |
| `dq_completeness` | 所有清单行 | 核对外购材料、场址记录、废物、直接排放和合格产出；逐项识别并定量论证排除项。 | 质量与能量核对、排除项登记 |
| `dq_technology` | 所有过程 | 充分描述成形、加工、热处理气氛和炉型、磨削珩磨、清洗、装配、润滑、防锈、检验和包装技术，以区分实质不同路线。 | 过程规格、设备清单、生产指令 |
| `dq_upstream_data` | 所有外购输入 | 数据集匹配实际合金、辅助品牌号、能源供应、水源、包装、地理、技术、产品状态和交付边界；记录代理和敏感性。 | 数据集选择日志和敏感性评估 |

本 PCR 不规定外部数值清单范围。在至少两项相互独立、经原文核验且产品状态、功能单位和系统边界兼容的来源支持可辩护经验范围前，每行均保持为前景采集要求。

## 9. 校验规则

| rule_id | 规则 |
| --- | --- |
| `validation_rule_1` | 确认申报产品是所述边界下的完整滚珠轴承或滚柱轴承，而不是轴承座、滑动轴承、散装滚珠、散装滚柱、范围外轴承单元或备件。 |
| `validation_rule_2` | 确认参考产品严格为工厂大门处 1 kg 合格轴承净质量，且包装质量不计入净质量。 |
| `validation_rule_3` | 确认五个必需制造阶段均有表示，包括外包阶段，并明确说明排除或不适用步骤。 |
| `validation_rule_4` | 确认每个清单行都是原子物理、化学、废物、能源或基本交换，且没有笼统公用工程、燃料、包装、化学品、废水、残余物或排放行。 |
| `validation_rule_5` | 确认成形、热处理和磨削电力分别采集与报告，即使共用电表需要分配。 |
| `validation_rule_6` | 确认加工切屑和磨削磨屑保持为不同废物流，且不与轴承钢输入抵扣或与不合格轴承合并。 |
| `validation_rule_7` | 确认直接化石二氧化碳只表示前景气态天然气燃烧，并排除上游能源系统排放。 |
| `validation_rule_8` | 确认完成金属平衡和清洗水平衡并记录材料差异。 |
| `validation_rule_9` | 确认带 UUID 行匹配已审核的天工中英文 baseName、流类型、分类、流属性、单位组和公开状态；未解决行 UUID 为空且保留清单审查记录。 |
| `validation_rule_10` | 确认未使用只有一项来源的外部推断范围；范围必须有至少两项相互独立且经原文核验、边界和单位兼容的来源。 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 单项已申报完整滚珠轴承或滚柱轴承的从摇篮到工厂大门前景数据包，以合格净质量归一化 |
| downstream_use | 链接产品流、单元过程数据集、制造商产品足迹、支持 EPD 的模型，或另行增加下游阶段与情景的生命周期模型 |
| allowed_use | 仅在产品功能、已申报轴承规格、参考流、地理、技术、报告期、系统边界、分配和数据质量兼容时比较或汇总 |
| excluded_use | 不得直接表示散装零件、轴承座、滑动轴承、身份边界外轴承单元、使用阶段性能、维护、再制造或寿命终止情景 |
| required_metadata | 生产地理和场址；报告期；产品代号和设计；质量与尺寸；材料；制造与外包路线；润滑和防锈状态；检验依据；分配；包装；上游数据集选择 |
| required_quality_disclosure | 主要数据份额与覆盖；仪表和秤量证据；缺失数据；排除项；分配驱动；质量、水和能量核对；代理数据集；不确定性；代表性；未解决 UUID 和范围证据 |
| update_trigger | 轴承设计、质量、合金、供应路线、制造场址或技术、炉用燃料、电力供应、清洗系统、润滑或防锈产品、包装、分配、数据覆盖或报告期发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，CPC 3.0 结构，2025 年 6 月 30 日。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 已核验原始 CSV 中 CPC 43310 的产品分类身份。 |
| `un-cpc-1-1-chinese-2002` | official_guidance | 联合国统计司，《产品总分类 1.1 版》中文本。https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf | 已核验官方中文原文中的专业名称“滚珠轴承或滚柱轴承”。 |
| `international-epd-pcr-2023-03` | standard | International EPD System，PCR 2023:03 Bearings, bearing units and parts。https://www.environdec.com/pcr-library/pcr_c8639225-b509-4a82-6b78-08d9caad768c | 已核验官方原始页面中类别对应 UN CPC 4331 及轴承生产与下游生命周期阶段的区分。 |
| `skf-insert-bearings-18033` | handbook | SKF，Insert bearings，18033 EN。https://cdn.skfmediahub.skf.com/api/public/0901d196807f0c2f/pdf_preview_medium/Insert_bearings_booklet_-_18033_EN_pdf_preview_medium.pdf | 已核验原始 PDF 中热处理、磨削、珩磨、装配、润滑或密封、检验、防锈、标识和包装工序。 |
| `skf-green-bearings` | literature | SKF Evolution，Green bearings。https://cdn.skfmediahub.skf.com/api/public/0901d1968031d53b/pdf_preview_medium/0901d1968031d53b_pdf_preview_medium.pdf | 已核验完整原始 PDF 中钢材和辅助品、能源、水基清洗、润滑、包装、切屑、磨屑、废油和废物处理。 |
| `eu-recommendation-2021-2279` | official_guidance | 欧盟委员会关于环境足迹方法的建议（EU）2021/2279。https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | 已核验官方法律原文中的功能单位定义、分配层级、数据质量和前景清单规则。 |
