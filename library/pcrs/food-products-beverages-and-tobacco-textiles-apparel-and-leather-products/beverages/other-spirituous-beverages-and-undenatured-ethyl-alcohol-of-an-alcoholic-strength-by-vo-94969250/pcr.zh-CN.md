---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.other-spirituous-beverages-and-undenatured-ethyl-alcohol-of-an-alcoholic-strength-by-vo-94969250
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他烈性饮料及酒精度低于 80% vol 的未改性乙醇

## 1. 范围与适用性

本 PCR 适用于经审查语义边界内的其他烈性饮料，以及实际酒精度低于 80% vol 的未改性乙醇的工厂门生产。边界从可发酵的农业或食品工业原料进厂，或从外购农业来源乙醇或馏出物进厂开始，覆盖按具体路线启用的原料制备、发酵、蒸馏或精馏、熟成、调配、过滤、清洗、质量放行以及灌装和包装。

本类别有意保持比任何单一酒种、原料、酒精度、熟成期或包装形式更宽。具体数据包必须说明产品属于烈性酒、其他饮用烈性饮料还是低于 80% vol 的未改性乙醇，并声明法定销售名称、原料路线、20 °C 实际酒精度、熟成状态、配方和市场状态。官方 CPC 名称界定分类背景，适用市场法规和产品规范决定具体法律身份。来源：`unsd-cpc-3-24139`；`eu-reg-2019-787`。

排除改性乙醇、酒精度不低于 80% vol 的乙醇、啤酒、葡萄酒、苹果酒、梨酒、蜂蜜酒及其他未蒸馏或不符合烈性饮料身份的发酵饮料，以及已有单独审查的更窄 PCR 所覆盖的烈性酒产品。农业生产、外购乙醇或馏出物制造、桶制造、包装制造和下游配送使用上游或下游数据集衔接，除非明确纳入所声明的前景边界。

乳清烈酒与白威士忌研究只是澄清型未熟成产品的单一案例。它只支持乳清条件路线及其过程拆分，不定义本类别，也不支持任何类别层面的数量范围。来源：`risner-et-al-2018-whey-spirits`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.other-spirituous-beverages-and-undenatured-ethyl-alcohol-of-an-alcoholic-strength-by-vo-94969250 |
| classification_refs | CPC 3.0: 24139 |
| covered_products | 其他烈性饮料；低于 80% vol 的未改性乙醇；通过已声明的发酵-蒸馏、再蒸馏、外购乙醇调配或相容组合路线生产的成品 |
| excluded_products | 改性乙醇；不低于 80% vol 的乙醇；未蒸馏的啤酒、葡萄酒、苹果酒、梨酒、蜂蜜酒和其他发酵饮料；已有单独审查的更窄 PCR 所覆盖的产品 |
| representative_product | 一种酒精度低于 80% vol 的未改性成品含酒精液体，以工厂门净产品质量表示，并用其具体饮料或乙醇身份加以限定 |
| production_route | 已声明的原料制备、发酵、蒸馏或精馏、可选熟成、调配、稀释、加糖、着色、调味和过滤、清洗和废水处理以及可选灌装包装组合 |
| market_state | 合格散装或包装液体，已声明法定销售名称、原料来源、20 °C 实际酒精度、配方、熟成、过滤和包装形式 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应一种合格的其他烈性饮料或低于 80% vol 的未改性乙醇产品 |
| How much | 1,000 kg 净产品，不含一级、二级和三级包装质量 |
| How well | 符合已声明的法律身份和产品规范，包括 20 °C 实际酒精度、原料来源、配方、熟成状态和放行质量 |
| How long or cycle | 一个完成生产并在适用时完成包装、交付至工厂门的批次；熟成期属于必需限定信息，不是服务寿命 |
| reference_flow_link | 扣除所有已声明损耗、返工、过滤和质量拒收后，批次放行的合格成品净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg 净成品 |
| 参考产品流 | 酒精度低于 80% vol 的未改性成品含酒精液体 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品类别和法定销售名称；目标市场和适用规范；原料身份和来源；外购乙醇或馏出物身份；发酵微生物和酶路线；蒸馏或精馏技术；20 °C 实际酒精度；体积-质量换算使用的实测密度和温度；熟成容器和时长；调配、加糖、着色和调味配方；过滤路线；散装或包装状态；包装组件质量；场址、地理、批次和参考期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 合格参考产品净产出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将所有前景交换归一化到 1,000 kg 净放行产品。包装质量单独列清单。 |
| `alcoholic_strength` | 参考产品和中间含酒精液体 | Alcoholic strength by volume | % vol at 20 °C | 使用适用的经验证方法测量并报告 20 °C 实际酒精度；不得用标签酒精度或名义配方目标代替批次实测结果。来源：`eu-reg-2019-787`；`oiv-spirit-analysis-compendium-2023`。 |
| `volume_mass_conversion` | 以体积记录的液体 | Mass and volume | kg；L 或 m3（注明温度） | 使用同一声明温度下的实测产品密度将体积换算为质量，优先采用 20 °C，并保留密度、温度、仪器和公式。不得对乙醇-水混合物使用水的密度。来源：`eu-reg-2019-787`；`oiv-spirit-analysis-compendium-2023`。 |
| `absolute_alcohol_check` | 产品和中间酒精平衡 | Volume of pure alcohol | L alcohol at 20 °C | 20 °C 纯酒精升数等于 20 °C 液体体积乘以实测 ABV/100；该值只用于组成和收率核查，不作为 PCR 参考数量。 |
| `ingredient_mass` | 每种发酵原料、酵母、酶、营养物、添加剂和加工助剂 | Mass | kg | 每种物料分别记录净批次领用量；不接受配方组或合并物料行。 |
| `energy_records` | 电力、蒸汽、外购热及每种燃料 | Energy or Mass | kWh、MJ、kg 或 m3 | 保留每种实测载能体及其单位；仅使用有文件记录的低位热值或计量能量基准换算，清单报告前不得合并载能体。 |
| `refrigerant_balance` | 每个制冷回路 | Mass | kg | 根据期初充注量、补加量、回收量和期末充注量，分别计算每种制冷剂的补加和泄漏。 |
| `packaging_mass` | 每个瓶、封口件、标签、纸箱和膜组件 | Mass | kg | 每个组件用领用数量和核实的单件质量或直接称量分别记录。 |
| `wastewater_load` | 每个实测废水指标 | Mass | kg | 在已声明的处理或排放点，用排放体积乘以代表性浓度，分别计算各污染物负荷。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景生产 | 纳入从已声明起始物料进入设施到合格散装或包装参考产品放行之间的全部直接控制作业。 | `eu-jrc-fdm-bref-2019`; `eu-reg-2019-787` |
| `boundary_conditional_routes` | 路线选择 | 原料制备、发酵、蒸馏或精馏、熟成、调配、过滤、场内供能、制冷和包装仅在为参考产品实际实施时启用，并披露每条未启用路线。 | `eu-jrc-fdm-bref-2019`; `eu-reg-2019-787` |
| `boundary_upstream_inputs` | 外购物料和服务 | 每种发酵原料、外购乙醇或馏出物、酵母、酶、辅料、水、载能体、制冷剂、桶和包装组件分别链接上游数据集。 | `eu-ef-method-2021` |
| `boundary_wastes_emissions` | 前景输出 | 分别纳入发酵二氧化碳、乙醇损失、燃烧排放、制冷剂泄漏、每股酒糟或废液、清洗废水、处理污泥、每个监测废水指标和每种包装废物。 | `eu-jrc-fdm-bref-2019` |
| `boundary_atomic_inventory` | 所有清单行 | 拒绝聚合的公用工程、燃料、配料、包装、废物或排放标签；一个选定流只表示一个物理或化学交换及一个适用路线条件。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 前景数据包声明设施接收可发酵原料、已发酵液、外购馏出物、外购农业来源乙醇或其组合，并识别第一个直接控制的转化 |
| starting_condition_role | 进厂物料为上游产品输入；前景边界从接收开始，包含分配给参考产品的每项场内转化 |
| product_classification_scope | 酒精度低于 80% vol 的其他烈性饮料或未改性乙醇成品，并声明具体法律身份和市场规范 |
| recursive_input_rule | 已属于本类别的退回、返工或外购产品仍作为单独量化的同类别产品输入；其既有负荷通过上游数据集链接，不得静默截断 |
| upstream_dataset_requirement | 对每项主要原料、酒精输入、载能体、制冷剂、桶和包装组件使用与路线、地理和技术相容的上游数据集，并披露代理和分配 |
| disclosure | 声明原料制备、发酵、蒸馏、精馏、熟成、调配、过滤、清洗、废水处理、供能、制冷、包装和配送哪些在前景边界内，哪些通过外部数据集衔接 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `feedstock_preparation` | 可发酵原料制备 | conditional | 谷物、糖蜜、葡萄酒、乳清或其他已声明可发酵物料在场内制备时纳入 | 为已声明路线生产已制备的可发酵液 | kg 已制备可发酵液 |
| `alcoholic_fermentation` | 酒精发酵 | conditional | 场内发酵生产酒精时纳入；仅有文件证明的外购乙醇或外购馏出物路线方可省略 | 将可发酵基质转化为含酒精液体和发酵二氧化碳 | kg 发酵液 |
| `onsite_energy_generation` | 场内蒸汽或热生成 | conditional | 场内燃烧燃料提供工艺蒸汽或热时纳入 | 供应实测蒸汽或热，并记录每种燃料和直接排放 | MJ 交付蒸汽或热 |
| `cooling_refrigeration` | 冷却与制冷 | conditional | 制冷回路服务于发酵、冷凝、熟成、调质或包装时纳入 | 供应冷量并核算每种制冷剂补加和泄漏 | kWh 制冷电力及 kg 制冷剂 |
| `distillation_rectification` | 蒸馏与精馏 | conditional | 已发酵液或进厂馏出物在场内蒸馏、再蒸馏或精馏时纳入 | 分离和浓缩酒精，生产已声明的含酒精中间体或产品 | kg 馏出物或乙醇产出 |
| `maturation` | 熟成或陈酿 | conditional | 产品在木桶或其他容器中存放以形成规定特征时纳入 | 生产熟成含酒精液体并记录容器和储存损失 | kg 熟成液体 |
| `blending_conditioning` | 调配、调质、过滤与放行 | required | 始终纳入最终产品核对；仅在实际使用时启用稀释、加糖、着色、调味或过滤行 | 生产合格散装参考产品 | 1,000 kg 合格散装产品 |
| `cleaning_wastewater` | 设备清洗与废水处理 | required | 纳入分配给前景作业的清洗和任何场内废水处理 | 核算每项清洗输入、废水流、污泥和实测排放指标 | 清洗循环及 m3 废水 |
| `filling_packaging` | 灌装与包装 | conditional | 包装产品在工厂门交付时纳入；仅明确散装交付的参考产品方可省略 | 灌装、封口、贴标、装箱和裹膜 | 1,000 kg 净包装产品 |

### 过程：可发酵原料制备（`feedstock_preparation`）

#### 输入

##### 产品流

###### 麦芽大麦（`malted_barley`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：麦芽大麦
- 流属性/单位：Mass / kg
- 数量规则：记录谷物路线领用的麦芽大麦净量；不使用时标记为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已制备可发酵液
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feedstock_materials`
- 来源：`eu-jrc-fdm-bref-2019`

###### 小麦籽粒（`wheat_grain`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：小麦籽粒
- 流属性/单位：Mass / kg
- 数量规则：记录谷物路线领用的小麦净量；不使用时标记为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已制备可发酵液
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feedstock_materials`
- 来源：`eu-jrc-fdm-bref-2019`

###### 玉米籽粒（`maize_grain`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：玉米籽粒
- 流属性/单位：Mass / kg
- 数量规则：记录谷物路线领用的玉米净量；不使用时标记为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已制备可发酵液
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feedstock_materials`
- 来源：`eu-jrc-fdm-bref-2019`

###### 黑麦籽粒（`rye_grain`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：黑麦籽粒
- 流属性/单位：Mass / kg
- 数量规则：记录谷物路线领用的黑麦净量；不使用时标记为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已制备可发酵液
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feedstock_materials`
- 来源：`eu-jrc-fdm-bref-2019`

###### α-淀粉酶（`alpha_amylase`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：α-淀粉酶制剂
- 流属性/单位：Mass / kg
- 数量规则：记录淀粉液化投加的酶制剂质量；不使用时标记为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 已制备可发酵液
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feedstock_auxiliaries`
- 来源：`eu-jrc-fdm-bref-2019`

###### 糖化酶（`glucoamylase`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：糖化酶制剂
- 流属性/单位：Mass / kg
- 数量规则：记录糖化投加的酶制剂质量；不使用时标记为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 已制备可发酵液
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feedstock_auxiliaries`
- 来源：`eu-jrc-fdm-bref-2019`

###### 制备用水（`feedstock_water`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：饮用级工艺水
- 流属性/单位：Volume / m3
- 数量规则：记录粉碎、糖化、稀释、水解或原料输送用水，和清洗水及冷却水分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已制备可发酵液
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water`
- 来源：`eu-jrc-fdm-bref-2019`

###### 制备电力（`feedstock_electricity`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：工厂中压电力
- 流属性/单位：Energy / kWh
- 数量规则：记录制备过程分表用电，或按设备运行时间形成有文件依据的分配量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已制备可发酵液
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`eu-jrc-fdm-bref-2019`

###### 制备蒸汽（`feedstock_steam`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：工艺蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：记录烹煮、糊化或水解交付的净蒸汽；无加热路线标记为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 已制备可发酵液
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`eu-jrc-fdm-bref-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：酒精发酵（`alcoholic_fermentation`）

#### 输入

##### 产品流

###### 甜菜糖蜜（`sugar_beet_molasses`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：甜菜糖蜜
- 流属性/单位：Mass / kg
- 数量规则：使用该路线时记录进入发酵的糖蜜净量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 发酵液
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fermentation_materials`
- 来源：`eu-jrc-fdm-bref-2019`

###### 甘蔗糖蜜（`sugar_cane_molasses`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：甘蔗糖蜜
- 流属性/单位：Mass / kg
- 数量规则：使用该路线时记录进入发酵的甘蔗糖蜜净量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 发酵液
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fermentation_materials`
- 来源：`eu-jrc-fdm-bref-2019`

###### 蒸馏用葡萄酒（`grape_wine`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：蒸馏用葡萄酒
- 流属性/单位：Mass / kg
- 数量规则：记录进入已声明发酵-蒸馏路线的葡萄酒净量；不使用时标记为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 发酵液或蒸馏进料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fermentation_materials`
- 来源：`eu-reg-2019-787`

###### 奶酪乳清（`cheese_whey`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：奶酪乳清
- 流属性/单位：Mass / kg
- 数量规则：记录进入乳糖发酵路线的乳清净量；其他路线均标记为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 乳清发酵液
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fermentation_materials`
- 来源：`risner-et-al-2018-whey-spirits`

###### 发酵用水（`fermentation_water`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：饮用级工艺水
- 流属性/单位：Volume / m3
- 数量规则：记录加入发酵的水，并与制备水、清洗水、冷却水和调配水分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 发酵液
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water`
- 来源：`eu-jrc-fdm-bref-2019`

###### 酿酒酵母（`saccharomyces_cerevisiae`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：酿酒酵母制剂
- 流属性/单位：Mass / kg
- 数量规则：记录碳水化合物发酵投加的酵母制剂；使用其他微生物时标记为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 发酵液
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fermentation_auxiliaries`
- 来源：`eu-jrc-fdm-bref-2019`

###### 马克斯克鲁维酵母（`kluyveromyces_marxianus`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：马克斯克鲁维酵母制剂
- 流属性/单位：Mass / kg
- 数量规则：记录乳清路线投加的乳糖发酵酵母；其他路线均标记为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 乳清发酵液
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fermentation_auxiliaries`
- 来源：`risner-et-al-2018-whey-spirits`

###### 硫酸（`sulfuric_acid`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：硫酸
- 流属性/单位：Mass / kg
- 数量规则：记录用于 pH 控制或酵母洗涤的酸净投加量；不使用时标记为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 发酵液
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fermentation_auxiliaries`
- 来源：`eu-jrc-fdm-bref-2019`

###### 磷酸氢二铵营养盐（`diammonium_phosphate`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：磷酸氢二铵
- 流属性/单位：Mass / kg
- 数量规则：记录发酵投加的营养盐质量；不使用时标记为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 发酵液
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fermentation_auxiliaries`
- 来源：`eu-jrc-fdm-bref-2019`

###### 发酵电力（`fermentation_electricity`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：工厂中压电力
- 流属性/单位：Energy / kWh
- 数量规则：记录分配给发酵的搅拌、泵送、通气、控制和输送用电。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 发酵液
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`eu-jrc-fdm-bref-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 蒸馏用发酵液（`fermented_mash`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：蒸馏用发酵液
- 流属性/单位：Mass / kg
- 数量规则：记录各发酵批次的转移质量和 20 °C 实测 ABV。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个发酵批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_alcoholic_liquid_balance`
- 来源：`eu-jrc-fdm-bref-2019`

##### 废物流

##### 基本流

###### 发酵二氧化碳（`fermentation_carbon_dioxide`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：排放到空气的生物源二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：分别计量回收量和释放量，或用有文件依据的碳平衡计算释放量；不得与燃烧二氧化碳合并。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 发酵液
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-fdm-bref-2019`; `risner-et-al-2018-whey-spirits`

### 过程：场内蒸汽或热生成（`onsite_energy_generation`）

#### 输入

##### 产品流

###### 天然气燃料（`natural_gas`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：天然气
- 流属性/单位：Energy / MJ
- 数量规则：记录供应锅炉或加热器的计量天然气；不使用时标记为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 MJ 交付蒸汽或热
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_and_steam`
- 来源：`eu-jrc-fdm-bref-2019`

###### 煤燃料（`coal`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：烟煤
- 流属性/单位：Mass / kg
- 数量规则：记录供应场内供能设施的称重煤量；不使用时标记为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 MJ 交付蒸汽或热
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_and_steam`
- 来源：`eu-jrc-fdm-bref-2019`

###### 生物质燃料（`biomass_fuel`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：锅炉用木片
- 流属性/单位：Mass / kg
- 数量规则：记录入厂木片净质量和实测含水率；不使用时标记为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 MJ 交付蒸汽或热
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_and_steam`
- 来源：`eu-jrc-fdm-bref-2019`

###### 燃料油（`fuel_oil`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：残余燃料油
- 流属性/单位：Mass / kg
- 数量规则：用校准储罐或交付核对记录燃料油净用量；不使用时标记为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 MJ 交付蒸汽或热
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_and_steam`
- 来源：`eu-jrc-fdm-bref-2019`

###### 锅炉电力（`boiler_electricity`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：工厂中压电力
- 流属性/单位：Energy / kWh
- 数量规则：记录分配给场内供能的给水、泵、风机、控制和处理用电。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 MJ 交付蒸汽或热
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`eu-jrc-fdm-bref-2019`

###### 锅炉补给水（`boiler_water`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：饮用级工艺水
- 流属性/单位：Volume / m3
- 数量规则：锅炉补给水与产品用水、清洗水和冷却水分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 MJ 交付蒸汽或热
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water`
- 来源：`eu-jrc-fdm-bref-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 工艺蒸汽（`process_steam_output`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：工艺蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：记录扣除输配损失后的净交付蒸汽或热；内部转移不得重复外购蒸汽负荷。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个供能报告期
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_and_steam`
- 来源：`eu-jrc-fdm-bref-2019`

##### 废物流

##### 基本流

###### 化石二氧化碳（`fossil_carbon_dioxide_to_air`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：排放到空气的化石二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：根据每种化石燃料记录及有文件依据的含碳量分别计算，或采用烟气直接测量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 MJ 交付蒸汽或热
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_emissions`
- 来源：`eu-jrc-fdm-bref-2019`

###### 燃料生物源二氧化碳（`biogenic_carbon_dioxide_to_air`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：排放到空气的生物源二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：根据生物质燃料记录单独计算；不得与发酵二氧化碳合并。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 MJ 交付蒸汽或热
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_emissions`
- 来源：`eu-jrc-fdm-bref-2019`

###### 甲烷（`methane_to_air`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：排放到空气的甲烷
- 流属性/单位：Mass / kg
- 数量规则：记录烟气实测甲烷，或按每种燃料和燃烧技术分别计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 MJ 交付蒸汽或热
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_emissions`
- 来源：`eu-jrc-fdm-bref-2019`

###### 氧化亚氮（`nitrous_oxide_to_air`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：排放到空气的氧化亚氮
- 流属性/单位：Mass / kg
- 数量规则：记录烟气实测 N2O，或按每种燃料和燃烧技术分别计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 MJ 交付蒸汽或热
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_emissions`
- 来源：`eu-jrc-fdm-bref-2019`

###### 一氧化氮（`nitrogen_monoxide_to_air`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：排放到空气的一氧化氮
- 流属性/单位：Mass / kg
- 数量规则：记录实测 NO 质量，或按燃料和燃烧技术分别计算；不得与 NO2 合并。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 MJ 交付蒸汽或热
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_emissions`
- 来源：`eu-jrc-fdm-bref-2019`

###### 二氧化氮（`nitrogen_dioxide_to_air`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：排放到空气的二氧化氮
- 流属性/单位：Mass / kg
- 数量规则：记录实测 NO2 质量，或按燃料和燃烧技术分别计算；不得与 NO 合并。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 MJ 交付蒸汽或热
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_emissions`
- 来源：`eu-jrc-fdm-bref-2019`

###### 二氧化硫（`sulfur_dioxide_to_air`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：排放到空气的二氧化硫
- 流属性/单位：Mass / kg
- 数量规则：记录实测 SO2 或按各燃料含硫量计算；只有燃料数据支持时方可标记为不适用。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 MJ 交付蒸汽或热
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_emissions`
- 来源：`eu-jrc-fdm-bref-2019`

###### 颗粒物（`particulate_matter_to_air`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：排放到空气的颗粒物
- 流属性/单位：Mass / kg
- 数量规则：按已声明的测量粒径级和控制设备边界记录烟气颗粒物；不得与气态污染物合并。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 MJ 交付蒸汽或热
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_emissions`
- 来源：`eu-jrc-fdm-bref-2019`

### 过程：冷却与制冷（`cooling_refrigeration`）

#### 输入

##### 产品流

###### 制冷电力（`cooling_electricity`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：工厂中压电力
- 流属性/单位：Energy / kWh
- 数量规则：记录分配给参考产品的压缩机、泵、风机和冷却塔分表用电。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`eu-jrc-fdm-bref-2019`

###### 冷却水（`cooling_water`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：饮用级工艺水
- 流属性/单位：Volume / m3
- 数量规则：冷却系统补给水与发酵水、产品用水、清洗水和锅炉水分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water`
- 来源：`eu-jrc-fdm-bref-2019`

###### 氨制冷剂补加（`ammonia_refrigerant`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：制冷剂级氨
- 流属性/单位：Mass / kg
- 数量规则：根据回路记录计算 R717 净补加量；使用其他制冷剂时标记为不适用。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`
- 来源：`eu-jrc-fdm-bref-2019`

###### 二氧化碳制冷剂补加（`carbon_dioxide_refrigerant`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：制冷剂级二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：根据回路记录计算 R744 净补加量；不使用时标记为不适用。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`
- 来源：`eu-jrc-fdm-bref-2019`

###### R404A 制冷剂补加（`r404a_refrigerant`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：R404A 制冷剂
- 流属性/单位：Mass / kg
- 数量规则：根据回路记录计算 R404A 净补加量；不使用时标记为不适用。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`
- 来源：`eu-jrc-fdm-bref-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 氨制冷剂泄漏（`ammonia_to_air`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：排放到空气的氨
- 流属性/单位：Mass / kg
- 数量规则：单独报告 R717 计算或实测泄漏，不与其他制冷剂合并。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`
- 来源：`eu-jrc-fdm-bref-2019`

###### 二氧化碳制冷剂泄漏（`carbon_dioxide_refrigerant_to_air`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：排放到空气的制冷剂二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：单独报告 R744 计算或实测泄漏，不与燃烧和发酵二氧化碳合并。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`
- 来源：`eu-jrc-fdm-bref-2019`

###### R404A 制冷剂泄漏（`r404a_to_air`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：排放到空气的 R404A 制冷剂
- 流属性/单位：Mass / kg
- 数量规则：单独报告 R404A 计算或实测泄漏，不与其他制冷剂合并。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`
- 来源：`eu-jrc-fdm-bref-2019`

### 过程：蒸馏与精馏（`distillation_rectification`）

#### 输入

##### 产品流

###### 发酵液进料（`fermented_liquid_feed`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：蒸馏用发酵液
- 流属性/单位：Mass / kg
- 数量规则：记录各蒸馏釜投料或连续进料期的净转移质量和 20 °C 实测 ABV。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 馏出物或乙醇产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_alcoholic_liquid_balance`
- 来源：`eu-jrc-fdm-bref-2019`

###### 蒸馏电力（`distillation_electricity`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：工厂中压电力
- 流属性/单位：Energy / kWh
- 数量规则：记录蒸馏辅助设备、泵、冷凝器、控制和输送用电。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 馏出物或乙醇产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`eu-jrc-fdm-bref-2019`

###### 蒸馏蒸汽（`distillation_steam`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：工艺蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：记录交付给壶式或塔式蒸馏器的计量净蒸汽，并披露外购或内部来源。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 馏出物或乙醇产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`eu-jrc-fdm-bref-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 酒精度低于 80% vol 的未改性乙醇（`undenatured_ethyl_alcohol_below_80_vol`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：酒精度低于 80% vol 的未改性乙醇
- 流属性/单位：Mass / kg
- 数量规则：当其为参考产品或中间体时记录放行质量和 20 °C 实测 ABV，否则标记为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个蒸馏或精馏批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_alcoholic_liquid_balance`
- 来源：`unsd-cpc-3-24139`; `eu-reg-2019-787`

###### 其他烈性饮料（`other_spirituous_beverage`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：其他烈性饮料
- 流属性/单位：Mass / kg
- 数量规则：路线生产已声明烈性饮料时记录放行馏出物质量和 20 °C 实测 ABV，否则标记为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个蒸馏批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_alcoholic_liquid_balance`
- 来源：`unsd-cpc-3-24139`; `eu-reg-2019-787`

##### 废物流

###### 蒸馏酒糟液（`stillage`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：蒸馏酒糟液
- 流属性/单位：Mass / kg
- 数量规则：记录离开蒸馏器的酒糟液净量和去向，并与废醪液及废酒脚分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 馏出物或乙醇产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_distillation_residues`
- 来源：`eu-jrc-fdm-bref-2019`

###### 蒸馏废醪液（`spent_wash`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：蒸馏厂废醪液
- 流属性/单位：Mass / kg
- 数量规则：记录废醪液净量和处理去向，并与酒糟液及废酒脚分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 馏出物或乙醇产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_distillation_residues`
- 来源：`eu-jrc-fdm-bref-2019`

###### 蒸馏废酒脚（`spent_lees`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：蒸馏厂废酒脚
- 流属性/单位：Mass / kg
- 数量规则：记录废酒脚净量和去向，并与酒糟液及废醪液分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 馏出物或乙醇产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_distillation_residues`
- 来源：`eu-jrc-fdm-bref-2019`

###### 蒸馏固体污泥（`distillation_sludge`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：蒸馏固体污泥
- 流属性/单位：Mass / kg
- 数量规则：称量蒸馏残余物处理产生并离场的酵母和悬浮固体污泥。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 馏出物或乙醇产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_distillation_residues`
- 来源：`eu-jrc-fdm-bref-2019`

##### 基本流

###### 蒸馏乙醇排放（`ethanol_to_air`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：排放到空气的乙醇
- 流属性/单位：Mass / kg
- 数量规则：记录实测排气损失，或用闭合酒精平衡计算；与发酵和熟成损失分开。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 馏出物或乙醇产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-fdm-bref-2019`

### 过程：熟成或陈酿（`maturation`）

#### 输入

##### 产品流

###### 橡木熟成桶（`maturation_oak_barrel`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：烈性酒熟成用橡木桶
- 流属性/单位：Mass / kg
- 数量规则：按有文件依据的首次使用、复用次数和占用期分配桶皮重；非橡木或未熟成路线标记为不适用。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 熟成液体产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_maturation_records`
- 来源：`eu-reg-2019-787`

###### 熟成电力（`maturation_electricity`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：工厂中压电力
- 流属性/单位：Energy / kWh
- 数量规则：按罐或桶占用时间分配储存通风、泵送、监测和环境调节用电。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 熟成液体产出
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_maturation_records`
- 来源：`eu-reg-2019-787`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 熟成含酒精液体（`matured_alcoholic_liquid`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：熟成烈性酒液
- 流属性/单位：Mass / kg
- 数量规则：记录放行质量、20 °C ABV、容器身份和熟成时长。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个熟成批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_maturation_records`
- 来源：`eu-reg-2019-787`

##### 废物流

###### 废橡木桶（`waste_oak_barrel`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：废橡木桶
- 流属性/单位：Mass / kg
- 数量规则：木桶退出使用时记录退役质量和去向。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按分配的木桶使用次数计算的每 kg 熟成液体产出
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_maturation_records`
- 来源：

##### 基本流

###### 熟成乙醇排放（`maturation_loss_ethanol_to_air`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：排放到空气的乙醇
- 流属性/单位：Mass / kg
- 数量规则：由期初和期末液体质量、实测 ABV、转移量和取样量计算乙醇损失；不得与水损失或蒸馏排气合并。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 熟成液体产出
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_maturation_records`
- 来源：`eu-reg-2019-787`

### 过程：调配、调质、过滤与放行（`blending_conditioning`）

#### 输入

##### 产品流

###### 农业来源乙醇（`agricultural_ethyl_alcohol`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：农业来源乙醇
- 流属性/单位：Mass / kg
- 数量规则：记录加入批次的外购或内部转移乙醇，并保留来源、纯度和 20 °C ABV。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blending_materials`
- 来源：`eu-reg-2019-787`

###### 调配用水（`formulation_water`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：饮用级工艺水
- 流属性/单位：Volume / m3
- 数量规则：记录进入产品的水，并与清洗水、冷却水和洗瓶水分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blending_materials`
- 来源：`eu-reg-2019-787`

###### 蔗糖（`sucrose`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：精制蔗糖
- 流属性/单位：Mass / kg
- 数量规则：记录用于加糖或调和口感的蔗糖净量；不使用时标记为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blending_materials`
- 来源：`eu-reg-2019-787`

###### 焦糖色（`caramel_colour`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：E150a 焦糖色
- 流属性/单位：Mass / kg
- 数量规则：记录加入批次的焦糖色制剂；其他着色剂另建卡，不使用时标记为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blending_materials`
- 来源：`eu-reg-2019-787`

###### 天然香料制剂（`natural_flavouring_preparation`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：天然香料制剂
- 流属性/单位：Mass / kg
- 数量规则：每种已声明香料制剂作为独立批次领用记录；本卡只适用于已具体识别的制剂。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blending_materials`
- 来源：`eu-reg-2019-787`

###### 硅藻土助滤剂（`filter_aid`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：硅藻土助滤剂
- 流属性/单位：Mass / kg
- 数量规则：记录过滤投加的干助滤剂质量；不采用该助剂的路线标记为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filtration_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 调质电力（`conditioning_electricity`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：工厂中压电力
- 流属性/单位：Energy / kWh
- 数量规则：记录调配、泵送、冷却、过滤和质量放行输送用电。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`eu-jrc-fdm-bref-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格参考产品（`reference_product_output`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：酒精度低于 80% vol 的未改性成品含酒精液体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录质量放行后的净质量，并附法律身份、20 °C 实测 ABV、密度、路线和配方限定信息。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_release`
- 来源：`unsd-cpc-3-24139`; `eu-reg-2019-787`; `oiv-spirit-analysis-compendium-2023`

##### 废物流

###### 过滤残渣（`filtration_residue`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：废硅藻土过滤残渣
- 流属性/单位：Mass / kg
- 数量规则：称量过滤路线产生的湿废助滤剂并记录去向；无过滤时标记为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filtration_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 不合格烈性酒液（`off_spec_spirit`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：不合格烈性酒液
- 流属性/单位：Mass / kg
- 数量规则：将拒收液体质量与退回返工及放行产品分开记录，并注明去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_release`
- 来源：

##### 基本流

###### 调质乙醇排放（`conditioning_ethanol_to_air`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：排放到空气的乙醇
- 流属性/单位：Mass / kg
- 数量规则：记录实测排气损失或用闭合批次酒精平衡计算；与蒸馏和熟成排放分开。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-fdm-bref-2019`

### 过程：设备清洗与废水处理（`cleaning_wastewater`）

#### 输入

##### 产品流

###### 清洗用水（`cleaning_water`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：饮用级工艺水
- 流属性/单位：Volume / m3
- 数量规则：预冲洗、清洗、消毒和末次漂洗用水与产品用水及冷却水分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 氢氧化钠清洗剂（`sodium_hydroxide`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：氢氧化钠
- 流属性/单位：Mass / kg
- 数量规则：记录 CIP 加入、补充和排放的 NaOH 活性质量；不使用时标记为不适用。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 硝酸清洗剂（`nitric_acid`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：硝酸
- 流属性/单位：Mass / kg
- 数量规则：记录酸洗加入和排放的硝酸活性质量；不使用时标记为不适用。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 过乙酸消毒剂（`peracetic_acid`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：过乙酸
- 流属性/单位：Mass / kg
- 数量规则：记录消毒投加的过乙酸活性质量；不使用时标记为不适用。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 清洗电力（`cleaning_electricity`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：工厂中压电力
- 流属性/单位：Energy / kWh
- 数量规则：记录分配给前景清洗的 CIP 泵、加热辅助和废水处理用电。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`eu-jrc-fdm-bref-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 清洗废水（`cleaning_wastewater`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：蒸馏厂清洗废水
- 流属性/单位：Volume / m3
- 数量规则：在已声明的未处理、处理进口或排放点记录废水体积；不得与酒糟液、废醪液或废酒脚合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：`eu-jrc-fdm-bref-2019`

###### 废水处理污泥（`wastewater_treatment_sludge`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：蒸馏厂废水处理污泥
- 流属性/单位：Mass / kg
- 数量规则：记录脱水或湿污泥质量、干物质含量和去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：`eu-jrc-fdm-bref-2019`

##### 基本流

###### 排入水体的化学需氧量（`wastewater_cod`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：排入水体的化学需氧量
- 流属性/单位：Mass / kg
- 数量规则：用分别测量的废水体积和声明点位的代表性 COD 浓度计算排放负荷。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：`eu-jrc-fdm-bref-2019`

###### 排入水体的五日生化需氧量（`wastewater_bod5`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：排入水体的五日生化需氧量
- 流属性/单位：Mass / kg
- 数量规则：根据体积和代表性 BOD5 浓度独立计算排放负荷。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：`eu-jrc-fdm-bref-2019`

###### 排入水体的总氮（`wastewater_total_nitrogen`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：排入水体的总氮
- 流属性/单位：Mass / kg
- 数量规则：根据体积和代表性总氮浓度独立计算排放负荷。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：`eu-jrc-fdm-bref-2019`

###### 排入水体的总磷（`wastewater_total_phosphorus`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：排入水体的总磷
- 流属性/单位：Mass / kg
- 数量规则：根据体积和代表性总磷浓度独立计算排放负荷。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：`eu-jrc-fdm-bref-2019`

### 过程：灌装与包装（`filling_packaging`）

#### 输入

##### 产品流

###### 玻璃瓶（`glass_bottle`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：饮料用玻璃瓶
- 流属性/单位：Mass / kg
- 数量规则：用净领用数量和核实的单瓶质量计算瓶质量；非玻璃包装标记为不适用。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_components`
- 来源：`eu-reg-2019-787`

###### 铝制封口件（`aluminium_closure`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：铝制瓶封口件
- 流属性/单位：Mass / kg
- 数量规则：用净领用数量和核实的单件质量计算封口件质量；不使用时标记为不适用。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_components`
- 来源：`eu-reg-2019-787`

###### 天然软木塞（`natural_cork_closure`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：天然软木瓶塞
- 流属性/单位：Mass / kg
- 数量规则：用净领用数量和核实的单件质量计算软木塞质量；不使用时标记为不适用。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_components`
- 来源：`eu-reg-2019-787`

###### 纸标签（`paper_label`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：涂布纸饮料标签
- 流属性/单位：Mass / kg
- 数量规则：用净领用数量和核实的单张质量计算标签质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_components`
- 来源：`eu-reg-2019-787`

###### 瓦楞纸箱（`corrugated_box`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：瓦楞纤维板运输箱
- 流属性/单位：Mass / kg
- 数量规则：用净领用数量和核实的单箱质量计算纸箱质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_components`
- 来源：

###### 聚乙烯收缩膜（`polyethylene_shrink_film`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：低密度聚乙烯收缩膜
- 流属性/单位：Mass / kg
- 数量规则：记录包装批次领用的膜质量；不使用时标记为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_components`
- 来源：

###### 洗瓶用水（`bottle_rinsing_water`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：饮用级工艺水
- 流属性/单位：Volume / m3
- 数量规则：洗瓶水与产品用水、清洗水和冷却水分开记录；干式或不冲洗包装标记为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_water`
- 来源：`eu-jrc-fdm-bref-2019`

###### 包装电力（`packaging_electricity`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：工厂中压电力
- 流属性/单位：Energy / kWh
- 数量规则：记录分配给包装批次的灌装机、封口机、贴标机、装箱机、输送机和裹膜机用电。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`eu-jrc-fdm-bref-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废玻璃瓶（`waste_glass`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：废玻璃瓶
- 流属性/单位：Mass / kg
- 数量规则：称量拒收玻璃瓶，或用拒收数量乘以核实的单瓶质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_wastes`
- 来源：

###### 废铝制封口件（`waste_aluminium`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：废铝制瓶封口件
- 流属性/单位：Mass / kg
- 数量规则：用拒收封口件数量和核实的单件质量核对废物质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_wastes`
- 来源：

###### 废天然软木塞（`waste_cork`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：废天然软木瓶塞
- 流属性/单位：Mass / kg
- 数量规则：用拒收软木塞数量和核实的单件质量核对废物质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_wastes`
- 来源：

###### 废纸标签（`waste_paper_label`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：废涂布纸饮料标签
- 流属性/单位：Mass / kg
- 数量规则：称量外运标签废物，或核对领用和已贴标签质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_wastes`
- 来源：

###### 废瓦楞纸箱（`waste_corrugated_board`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：废瓦楞纤维板
- 流属性/单位：Mass / kg
- 数量规则：称量拒收纸箱，或核对领用和已用纸箱质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_wastes`
- 来源：

###### 废聚乙烯膜（`waste_polyethylene_film`）

本原子卡记录适用路线中的所列交换；其数量按下列规则取得。

- 选定流：废低密度聚乙烯收缩膜
- 流属性/单位：Mass / kg
- 数量规则：称量废弃收缩膜，或核对膜领用量和使用量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_wastes`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | 产品特定批次和路线 | 首先细分罐、仪表、发酵批次、蒸馏批次、熟成批次、清洗循环和包装线，使投入与产出直接归属于产品和路线。 | `eu-ef-method-2021` |
| `allocation_causal` | 共用公用工程和清洗 | 无法细分时，采用能代表因果关系且有文件依据的物理驱动量，例如计量能量、设备运行时间、蒸汽需求、储罐占用、清洗循环或灌装件数。 | `eu-ef-method-2021` |
| `allocation_mass` | 功能相当且不可分离的产品 | 只有无法细分且没有更具代表性的因果关系时才使用净产出质量，并披露分子、分母、期间和敏感性。 | `eu-ef-method-2021` |
| `allocation_co_products` | 酒糟、蒸馏固体、回收二氧化碳及其他可销售产出 | 按实测产出量记录每项共产品。采用研究接受的分配层级，并单独披露替代或回收信用；不得通过减少废物或燃料行隐藏。 | `eu-jrc-fdm-bref-2019`; `eu-ef-method-2021` |
| `allocation_rework` | 同类别返工 | 将退回或返工含酒精产品作为单独量化输入，并避免重复计算其上游数据集已携带的负荷。 | `eu-ef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_feedstock_materials` | `feedstock_preparation` | 每种发酵原料 | 秤、筒仓、罐和批次领料记录 | 物料身份；供应商批次；毛重；皮重；退料；批次号 | 校准称量或储罐核对 | kg | 每批 | 代表性连续 12 个月全部生产批次 | 所有原料制备线 | 按物料和路线分别汇总净领用量 | 校准；供应商规范；批次谱系 |
| `cp_feedstock_auxiliaries` | `feedstock_preparation` | 每种酶或制备辅料 | 批次领料和配方记录 | 化学身份；活性浓度；毛重；皮重；退料；批次号 | 校准秤或计量泵 | kg | 每批 | 代表性 12 个月 | 所有制备线 | 分别计算各物料的活性或制剂质量 | 校准；安全或技术说明书；配方 |
| `cp_fermentation_materials` | `alcoholic_fermentation` | 每种糖蜜、葡萄酒、乳清或其他发酵投入 | 罐、秤和批次记录 | 物料身份；来源；质量或体积；密度；温度；批次号 | 校准罐、流量计或秤 | kg；L；m3 | 每批 | 代表性 12 个月全部生产批次 | 所有发酵罐 | 每种物料分别换算和汇总 | 罐容表；密度记录；批次谱系 |
| `cp_fermentation_auxiliaries` | `alcoholic_fermentation` | 每种酵母、营养盐、酸或辅料 | 投加和批次记录 | 身份；菌株或等级；活性浓度；数量；批次号 | 校准秤或计量泵 | kg | 每批 | 代表性 12 个月 | 所有发酵罐 | 按身份分别汇总净投加量 | 校准；菌种或供应商规范；配方 |
| `cp_process_water` | 每个适用过程 | 每种用水用途 | 水表和批次记录 | 期初期末读数；过程号；批次或期间 | 优先专用分表，否则使用有文件依据的水量平衡 | m3 | 每批、每日或每月 | 代表性 12 个月 | 所有前景用水点 | 制备、发酵、锅炉、冷却、产品、清洗和冲洗用水分开 | 水表校准；水量平衡 |
| `cp_process_energy` | 每个适用过程 | 电力或交付蒸汽 | 能量表和运行记录 | 载能体；表读数；过程号；运行时间；分配驱动量 | 优先分表，否则采用有文件依据的工程分配 | kWh；MJ | 每批或每月 | 代表性 12 个月 | 所有前景设备 | 按过程和载能体分别汇总 | 仪表校准；设备日志；分配工作表 |
| `cp_alcoholic_liquid_balance` | `alcoholic_fermentation`; `distillation_rectification` | 每种含酒精液体投入和产出 | 校准罐、流量计和实验室记录 | 质量或体积；温度；密度；ABV；期初期末库存；批次号 | 罐或流量计核对并配合实验室 ABV | kg；L；% vol | 每次转移或每批 | 报告期全部批次 | 所有相关罐和流量计 | 按记录密度将体积换算为质量，并保持每种液体身份分开 | 校准；OIV 相容方法记录；批次核对 |
| `cp_fuel_and_steam` | `onsite_energy_generation` | 每种燃料和交付蒸汽或热 | 交付、库存、仪表和锅炉记录 | 燃料身份；数量；水分；热值；蒸汽表；凝结水回收 | 校准燃料和蒸汽计量 | kg；m3；MJ | 每次交付及每月 | 代表性 12 个月 | 所有锅炉和加热器 | 每种燃料分别与净交付能量核对 | 仪表校准；交付单；燃料分析；锅炉日志 |
| `cp_combustion_emissions` | `onsite_energy_generation` | 每种直接燃烧排放 | 烟气测试、连续监测和燃料计算记录 | 污染物身份；浓度；流量；时间；燃料量；因子 | 优先直接监测，否则采用已声明的燃料特定因子 | kg | 许可频率或代表性测试 | 代表性运行条件 | 每个排放点 | 化石 CO2、生物源 CO2、CH4、N2O、NO、NO2、SO2 和颗粒物分别计算 | 实验室或监测 QA；因子来源；计算表 |
| `cp_refrigerant_balance` | `cooling_refrigeration` | 每种制冷剂补加和泄漏 | 回路检修和充注记录 | 制冷剂身份；期初充注；补加；回收；期末充注；设备号 | 按回路年度质量平衡，并用检漏检修记录支持 | kg | 每次检修及每年 | 代表性 12 个月 | 所有相关制冷回路 | 各制冷剂独立计算，并按有文件依据的制冷服务分配 | 技师记录；钢瓶称重；回路台账 |
| `cp_distillation_residues` | `distillation_rectification` | 每种酒糟液、废醪液、废酒脚或污泥 | 罐、秤和外运记录 | 废物身份；质量或体积；密度；干物质；去向；批次 | 校准罐、秤或核实的容器方法 | kg；m3 | 每批或每次外运 | 代表性 12 个月 | 所有蒸馏器和残余物系统 | 按废物身份和去向分别汇总 | 校准；外运单；干物质测试 |
| `cp_direct_air_emissions` | 适用过程 | 发酵 CO2 或乙醇释放 | 监测或闭合平衡记录 | 流身份；排气浓度和流量；酒精投入产出；回收量 | 优先直接测量，否则采用碳或酒精平衡 | kg | 每批或代表性测试 | 代表性 12 个月 | 每个适用排气口或过程 | 每种来源和物质分别报告 | 校准；平衡闭合；工程审查 |
| `cp_maturation_records` | `maturation` | 桶、储存能耗、熟成产出、废桶和乙醇损失 | 容器台账、罐记录、仪表和实验室记录 | 容器号；材料；皮重；灌装；复用次数；日期；质量；ABV；温度；电力 | 逐容器或逐罐批核对 | kg；kWh；天 | 每次灌装、转移和放行 | 期间放行的完整熟成批次 | 所有熟成库 | 按占用分配容器和能耗，乙醇损失单独计算 | 容器台账；校准；实验室结果；库存核对 |
| `cp_blending_materials` | `blending_conditioning` | 每种乙醇、水、甜味剂、着色剂或香料投入 | 配方、秤、罐和领料记录 | 身份；等级；浓度；毛重；皮重；退料；批次号 | 校准计量、秤或储罐核对 | kg；m3 | 每批 | 代表性 12 个月 | 所有调配罐 | 每种物料分别汇总并归一化到合格产出 | 校准；配方批准；供应商规范 |
| `cp_filtration_records` | `blending_conditioning` | 助滤剂和过滤残渣 | 领用、过滤和废物记录 | 助剂身份；干投料；湿残渣；水分；产品回收；批次 | 秤和过滤批次核对 | kg | 每个过滤批次 | 代表性 12 个月 | 所有过滤器 | 助剂投入和残渣产出分开 | 校准；过滤日志；废物单据 |
| `cp_product_release` | `blending_conditioning` | 参考产品和不合格液体 | 罐放行和质量记录 | 产品身份；法定名称；质量；体积；密度；温度；ABV；处置；批次 | 校准罐配合实验室放行测试 | kg；L；% vol | 每批 | 期间全部放行批次 | 所有放行罐 | 合格净质量作为分母，返工和拒收分开 | 罐校准；放行证书；批次核对 |
| `cp_cleaning_records` | `cleaning_wastewater` | 每种清洗水、清洗剂、消毒剂和电力投入 | CIP 配方、仪表、罐和循环记录 | 化学品身份；活性浓度；加入；回收；排放；用水；能量；设备 | 校准化学品、水和能量计量 | kg；m3；kWh | 每个清洗循环 | 包含换产品的代表性 12 个月 | 所有前景 CIP 回路和人工清洗 | 按分配循环分别计算每种化学品和用水用途 | 校准；CIP 日志；浓度测试 |
| `cp_wastewater_monitoring` | `cleaning_wastewater` | 废水、污泥、COD、BOD5、氮或磷 | 排放计量、取样、实验室和污泥记录 | 体积；浓度；时间；处理阶段；污泥质量；干物质；去向 | 流量加权代表性取样和校准体积计量 | m3；mg/L；kg | 每次测试或许可频率 | 包括生产峰值的代表性 12 个月 | 所有前景排放点 | 在声明点位独立计算每项负荷 | 仪表校准；认可实验室报告；取样计划 |
| `cp_packaging_components` | `filling_packaging` | 每种瓶、封口件、标签、纸箱或膜 | 物料清单、领用、计数和单件质量记录 | 组件身份；领用数；退回数；单件质量；供应商批次 | 净件数乘核实单件质量或直接领用质量 | kg | 每个包装批次 | 代表性 12 个月 | 所有包装形式和灌装线 | 每个组件分别计算 | 供应商规范；单件质量样本；库存核对 |
| `cp_packaging_water` | `filling_packaging` | 洗瓶水 | 产线水表和循环记录 | 表读数；产线；包装形式；批次；干洗状态 | 产线分表或核实的循环体积计算 | m3 | 每批或每月 | 代表性 12 个月 | 所有灌装线 | 洗瓶水与清洗废水分开 | 仪表校准；产线日志；水量平衡 |
| `cp_packaging_wastes` | `filling_packaging` | 每种包装废物 | 拒收和废物外运记录 | 材料身份；拒收数量或质量；去向；批次 | 直接称量或拒收件数乘核实单件质量 | kg | 每批和每次外运 | 代表性 12 个月 | 所有灌装线 | 玻璃、铝、软木、纸、瓦楞纸板和聚乙烯膜分别汇总 | 拒收日志；废物单据；单件质量核实 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_exchange` | 每个清单行 | 归一化数量 = 过程净数量 / 合格参考产品净质量 × 1,000 kg | 净交换记录；合格产出质量 | 每 1,000 kg 参考产品数量 |  |
| `volume_to_mass` | 每种按体积记录的含酒精液体 | 质量 = 声明温度下实测体积 × 同温度实测密度 | 体积；密度；温度 | kg 含酒精液体 | `oiv-spirit-analysis-compendium-2023` |
| `litres_pure_alcohol` | 酒精平衡核查 | 20 °C 纯酒精升数 = 20 °C 液体体积 × 实测 ABV/100 | 20 °C 体积；实测 ABV | L 纯酒精 | `eu-reg-2019-787`; `oiv-spirit-analysis-compendium-2023` |
| `refrigerant_leak` | 每个制冷回路 | 泄漏 = 期初充注 + 补加 − 回收 − 期末充注，并披露无法解释的余量 | 回路充注和检修记录 | 按身份的制冷剂泄漏 kg |  |
| `wastewater_load` | 每个废水指标 | 负荷 = 排放体积 × 流量加权浓度并进行单位换算；各指标独立计算 | m3 废水；mg/L 指标 | 每 1,000 kg 产品的指标 kg | `eu-jrc-fdm-bref-2019` |
| `packaging_component_mass` | 每个包装组件 | 组件质量 =（领用件数 − 未用退回件数）× 核实单件质量 | 件数；单件质量 | 每 1,000 kg 产品的组件 kg |  |
| `maturation_alcohol_loss` | 熟成含酒精液体 | 乙醇损失 = 期初纯酒精质量 + 加入量 − 期末纯酒精质量 − 转移或取样纯酒精质量 | 质量、密度、ABV、转移、取样 | 排放到空气的乙醇 kg 及余量不确定性 | `eu-reg-2019-787` |
| `batch_mass_balance` | 每个过程和总前景 | 闭合量 = 已核算产品 + 废物 + 基本流释放 + 期末库存 − 期初库存，并与实测投入比较；调查余量 | 全部投入、产出和库存记录 | 闭合率和无法解释的余量 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 每个产品流、废物流和基本流 | 每行保留一个物理或化学身份，以及匹配上游或接收流所需的等级、组成、供应商、路线和去向。 | 规范；安全说明书；配方；废物单据；确认后的 Tiangong UUID |
| `dq_temporal` | 前景记录 | 连续生产至少使用代表性的连续 12 个月；批次生产和熟成放行应纳入全部相关批次，并披露季节性和库存变化。 | 仪表导出；批次台账；熟成台账；生产日历 |
| `dq_measurement` | 质量、体积、ABV、密度、能量和排放 | 使用校准仪器和经验证的实验室方法；无法直接测量时记录估算、换算和分配。 | 校准证书；实验室方法；分配工作表 |
| `dq_route_completeness` | 过程图 | 将已声明起始条件和每条启用路线与详细过程行核对，并解释每项省略的条件过程。 | 路线图；批次谱系；供应商记录 |
| `dq_inventory_completeness` | 所有交换 | 核对原料、酵母、酶、辅料、水、电力、蒸汽、每种燃料、每种制冷剂、桶、包装、废物、废水指标和直接排放，不得使用聚合占位符。 | 完整性矩阵；质量和酒精平衡 |
| `dq_geography_technology` | 上游链接 | 原料、乙醇、电力、燃料、水、制冷剂、桶和包装数据集应匹配供应地理和生产技术，否则披露代理。 | 供应商地点；公用工程合同；代理说明 |
| `dq_case_evidence` | 外部数量证据 | 不得将单一工厂、批次、产品或文献情景转成类别范围。只有至少两份独立且边界相容的原始来源支持综合时才可形成范围。 | 来源审查记录；边界比较 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | 参考产品 | 产品必须属于已声明语义边界内的其他烈性饮料或酒精度低于 80% vol 的未改性乙醇；拒绝改性乙醇、不低于 80% vol 的乙醇和被排除的发酵饮料。 | `unsd-cpc-3-24139`; `eu-reg-2019-787` |
| `validate_reference_identity` | 参考流 | 净质量、产品身份、法定名称、原料路线、20 °C ABV、密度、熟成状态、配方、包装状态、Mass UUID、单位组 UUID 和 kg 单位必须存在且一致；未解决的产品流 UUID 仍是发布审查阻塞项。 | `eu-reg-2019-787`; `oiv-spirit-analysis-compendium-2023` |
| `validate_abv_conversion` | 含酒精液体 | 每项体积-质量和纯酒精换算保留实测体积、密度、温度、ABV 方法、公式和单位换算；不得用水密度或标签名义酒精度替代。 | `eu-reg-2019-787`; `oiv-spirit-analysis-compendium-2023` |
| `validate_route_coverage` | 过程图 | 场内原料制备、发酵、供能、制冷、蒸馏、精馏、熟成、调配、过滤、清洗、废水和包装作业均须启用或明确记录为不适用。 | `eu-jrc-fdm-bref-2019`; `eu-reg-2019-787` |
| `validate_atomic_flows` | 清单 | 每种发酵原料、酵母、酶、辅料、用水用途、电力用途、蒸汽或热载体、燃料、制冷剂、清洗剂、桶、瓶、封口件、标签、纸箱、膜、废物、废水指标和空气排放均为独立原子行。 |  |
| `validate_energy_no_double_count` | 蒸汽和燃料 | 核对外购蒸汽与场内燃料燃烧，确保内部蒸汽转移不会再次分配上游生产负荷。 | `eu-jrc-fdm-bref-2019` |
| `validate_refrigerants` | 制冷回路 | 每种制冷剂身份均有根据回路质量平衡形成的独立补加和泄漏行；不得合并制冷剂或将其隐藏在电力中。 | `eu-jrc-fdm-bref-2019` |
| `validate_waste_emissions` | 输出 | 发酵 CO2、各过程乙醇释放、燃烧污染物、酒糟液、废醪液、废酒脚、污泥、清洗废水、COD、BOD5、总氮、总磷和每种包装废物均须在已声明边界和去向上独立报告。 | `eu-jrc-fdm-bref-2019` |
| `validate_mass_balance` | 过程和总前景 | 物料和纯酒精平衡应核对投入、合格产品、共产品、废物、直接释放、取样、返工和库存变化；调查并披露余量。 |  |
| `validate_ranges` | 所有数量范围 | 不得把单一案例值表达为类别范围。外部来源经验范围必须由至少两份独立且边界相容的原始来源和明确综合支持；否则省略范围，并在 manifest 审查元数据中保留证据需求。 | `risner-et-al-2018-whey-spirits` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一种酒精度低于 80% vol 的其他烈性饮料或未改性乙醇成品的前景生产数据集 |
| downstream_use | `secondary_dataset`；完成方法审查、UUID 解析和发布后可作 `background_dataset` |
| allowed_use | 在产品身份、原料路线、ABV、技术、地理、熟成、配方和包装形式相容时，用于生命周期清单、产品碳足迹、环境足迹、供应链评价和设施改进 |
| excluded_use | 改性乙醇；不低于 80% vol 的乙醇；被排除的啤酒、葡萄酒、苹果酒、梨酒、蜂蜜酒或其他发酵饮料；未经相容性审查的其他酒种或路线；忽视配方、ABV、熟成或包装差异的比较性声明 |
| required_metadata | PCR id 和版本；产品类别和法定名称；目标市场；场址和期间；原料和乙醇来源；酵母和酶路线；过程图；蒸馏技术；声明温度下实测 ABV 和密度；熟成容器和时长；配方和过滤；散装或包装形式；分配；上游数据集 |
| required_quality_disclosure | 一手数据覆盖率；校准和实验室方法；质量和纯酒精平衡闭合；分配；共产品处理；废水取样；直接排放方法；制冷剂平衡；包装证据；代理；排除项；不确定性；未解决 UUID 和范围证据 |
| update_trigger | 产品身份、法律规范、原料、发酵微生物、酶路线、蒸馏或精馏技术、燃料或电力供应、制冷剂、熟成、配方、过滤、清洗、废水处理、包装形式、分配、场址或适用市场要求发生实质变化 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-24139` | 官方指南（`official_guidance`） | 联合国统计司，Central Product Classification Version 3.0，subclass 24139，https://unstats.un.org/unsd/classifications/Econ/CPC（检索于 2026-08-23） | 官方分类坐标和类别名称；仅用于范围背景，不用于过程数量范围 |
| `eu-reg-2019-787` | 标准（`standard`） | Regulation (EU) 2019/787 on spirit drinks and agricultural ethyl alcohol，官方合并文本，https://eur-lex.europa.eu/eli/reg/2019/787/oj/eng（检索于 2026-08-23） | 烈性酒身份；农业来源乙醇；蒸馏、熟成、调味、着色、调配、包装及 20 °C ABV 定义 |
| `oiv-spirit-analysis-compendium-2023` | 标准（`standard`） | OIV，Compendium of International Methods of Analysis for Spirituous Beverages and Alcohols，2023，https://www.oiv.int/sites/default/files/publication/2023-09/Compendium%20MA%20BOISPI%202023_EN%20.pdf（检索于 2026-08-23） | 20 °C 实际酒精度和密度分析的官方原始方法 |
| `eu-jrc-fdm-bref-2019` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，Best Available Techniques Reference Document for the Food, Drink and Milk Industries，JRC118627，2019，第 2 和第 6 章，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf（检索于 2026-08-23） | 原料制备、发酵、蒸馏和精馏、酒糟及废液、CO2、乙醇和其他排放、能源、水、燃料、制冷、清洗、废水、污泥和灌装的官方原始过程证据 |
| `risner-et-al-2018-whey-spirits` | 文献（`literature`） | Risner, D. 等（2018），Fermentation and distillation of cheese whey: Carbon dioxide-equivalent emissions and water use in the production of whey spirits and white whiskey，Journal of Dairy Science 101(4)，2963-2973，https://doi.org/10.3168/jds.2017-13774 | 原文支持乳清烈酒条件路线、乳糖发酵酵母、发酵、蒸馏、水、能源和发酵 CO2；明确不作为类别范围证据 |
| `eu-ef-method-2021` | 方法因子（`method_factor`） | Commission Recommendation (EU) 2021/2279 on the Environmental Footprint methods，Annex I，https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng（检索于 2026-08-23） | 系统建模、过程细分、分配层级、共产品处理、数据质量和上游数据集要求 |
