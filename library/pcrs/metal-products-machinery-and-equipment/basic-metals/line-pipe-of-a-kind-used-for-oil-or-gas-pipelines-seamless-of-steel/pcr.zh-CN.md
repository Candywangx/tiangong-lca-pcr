---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.line-pipe-of-a-kind-used-for-oil-or-gas-pipelines-seamless-of-steel
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 石油或天然气管道用无缝钢管

## 1. 范围与适用性

本候选规则覆盖制造验收后供油气管道使用的无缝钢管。分别声明碳素/非合金、低合金或其他规定钢级，不预设牌号、成分、直径、壁厚或处理范围。排除直缝/螺旋焊管、钻探套管/油管/钻杆、非圆异型材、管件、管材制造后弯制件及已安装管道施工/使用。上游金属铁、炼钢及铸坯通过供应负荷关联，不重复编入轧管方法。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.line-pipe-of-a-kind-used-for-oil-or-gas-pipelines-seamless-of-steel |
| classification_refs | CPC 3.0:41281 |
| covered_products | 石油或天然气管道用无缝钢管 |
| excluded_products | 焊管；OCTG；空心异型材；管件；已安装管道 |
| representative_product | 验收合格无缝钢制管线管 |
| production_route | 热穿孔/延伸/轧制或实际挤压，有条件冷减径及热处理、验收和实际表面体系 |
| market_state | 声明制造出口的净验收钢管 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 石油或天然气管道用无缝钢管 |
| How much | 1 kg |
| How well | 油气输送管用途；规范及版本；产品规范等级；钢级及炉次化学成分；外径、壁厚与长度；无缝成形路线；热/冷加工；交货热处理状态；酸性服役要求；检验与水压试验验收；表面/涂层体系与涂层质量；端部加工；场址、期间及进料起始状态 |
| How long or cycle | 制造出口一次供应，不声明管道服役寿命 |
| reference_flow_link | `final_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收合格无缝钢制管线管 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 油气输送管用途；规范及版本；产品规范等级；钢级及炉次化学成分；外径、壁厚与长度；无缝成形路线；热/冷加工；交货热处理状态；酸性服役要求；检验与水压试验验收；表面/涂层体系与涂层质量；端部加工；场址、期间及进料起始状态 |

在数据集元数据声明全部限定信息。D 为匹配报告期的正验收净质量，附着涂层仅在属于声明交货产品时计入。分别记录钢体及涂层质量，排除包装、不合格批次及游离试验水。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | final_product | Mass | kg | cp_final_product 测量 D；各交换以可归属期间数量除以 D。 |
| conversion | all exchanges | 各行流属性 | kg; m3; kWh; MJ | 保留原单位与转换证据：1 kWh = 3.6 MJ。燃料体积需声明温压下实测低位热值；湿废物需固含量及金属比例。 |
| balance | production | Mass | kg | 分别保留接收钢料、合格钢体、废钢、湿固体、水及期初/期末在制品的总质量，不将含铁质量与钢材总质量相加。按同一含 Fe 基准核对元素铁平衡：外部进料及期初在制品中实测 Fe = 合格钢体、外送废钢、氧化皮、污泥及废水中实测 Fe + 期末在制品及其他各项实测 Fe 释放。每项由自身实测总质量及 Fe 化验推导，废水采用匹配浓度与体积。分别保留碳和各实际合金元素的氧化、释放、留存质量及化学反应记录，形成单独元素平衡。计入氧吸收、水分及实际反应产物，不假设纯铁、共同组成、固定换算或虚构成材率。抵消内部返工转移，保留其重复能耗及化学品。补水 + 期初储量 = 外送 + 排放 + 蒸发 + 产品带水 + 期末储量；依据实测不确定性核对酸/化学品有效组分库存、反应、带出与废物平衡。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收固体钢坯/大方坯/棒材或购入热加工空心管，声明上游已完成工序及温度 |
| starting_condition_role | 供应半成品 |
| product_classification_scope | 石油或天然气管道用无缝钢管 |
| recursive_input_rule | 购入同类钢管携带独立供应负荷，内部返工转移抵消，不获得替代抵扣 |
| upstream_dataset_requirement | 关联实际钢料路线、电力、各燃料/化学品、运输与废物去向，披露缺口不能视为零 |
| disclosure | 油气输送管用途；规范及版本；产品规范等级；钢级及炉次化学成分；外径、壁厚与长度；无缝成形路线；热/冷加工；交货热处理状态；酸性服役要求；检验与水压试验验收；表面/涂层体系与涂层质量；端部加工；场址、期间及进料起始状态 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_manufacturing | all processes | 纳入实际准备、加热、无缝成形、采用时冷加工、全部道次间/交货热处理、除鳞、端部加工、验收、表面处理及截至声明出口的可归属公用工程。 | `ec-fmp-bref-2022`; `api-5l-announcement-2026` |
| boundary_surface | surface_dispatch | 裸管与保护/涂层管是不同声明状态，出口内纳入实际合同涂层；委外涂层携带供应处理及运输负荷。排除后续现场接头涂层及安装。 | `tenaris-coatings` |
| boundary_site | all exchanges | 纳入按份额归属的搬运、维护耗材及污染控制。论证基础设施/资本排除或关联可归属服务。每种实际化学品、燃料、废物、排放及直接水源增设原子行，这些候选卡不能替代场址审计。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | 纳入条件 | 角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| feed_receipt | 供应进料接收与准备 | required | 接收并追溯实际固体进料或购入空心管，声明供应方工序及温度。 | 前景制造 | per 1 kg reference flow |
| hot_forming | 进料准备、加热与无缝热成形 | conditional | 固体坯/大方坯/棒材进料时，切坯/修磨、复热、穿孔后按实际芯棒/顶管/周期轧管路线延伸定径，采用热挤压时纳入。购入空心管仅跳过已由供应方实施的工序。 | 前景制造 | per 1 kg reference flow |
| cold_finish | 有条件酸洗与冷拔或冷轧 | conditional | 仅在声明管线管实际采用时，纳入除鳞、脱脂、冲洗、润滑及多道次冷减径；道次间退火纳入 heat_treatment。 | 前景制造 | per 1 kg reference flow |
| heat_treatment | 交货状态热处理与矫直 | conditional | 记录实际正火、退火、淬火/回火及矫直，不假设各钢级均采用全部处理。 | 前景制造 | per 1 kg reference flow |
| acceptance | 端部加工、检验与水压试验 | required | 切割/坡口、取样试验、按要求实施无损检测与水压试验，隔离不合格品，标识并追溯验收钢管。试验压力/时间由实际订单规范确定。 | 前景制造 | per 1 kg reference flow |
| surface_dispatch | 有条件表面保护与出口交付 | required | 记录裸管、临时保护或合同涂层状态，纳入实际磨料清理、涂层/固化、搬运及单独计量包装。 | 前景制造 | per 1 kg reference flow |
| water_controls | 共享水循环与污染控制 | required | 冷却、除鳞、淬火、水压及酸洗循环，水处理与空气污染控制，各共享负荷只分配一次。 | 前景制造 | per 1 kg reference flow |

### 过程：供应进料接收与准备 (`feed_receipt`)

#### 输入

##### 产品流

###### 无缝管制造用钢坯 (`steel_billet`)

非合金/中合金管采用实际圆坯/大方坯，高铬钢可能需由铸坯轧制的圆棒；声明实际钢级与供应起始温度，上游关联完整炼钢/铸坯负荷，不规定成分或管坯成材率。

- 选定流: 无缝管制造用钢坯
- 流属性 / 单位: Mass / kg
- 数量规则: cp_steel_billet 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_steel_billet`
- 来源: `ec-fmp-bref-2022`

###### 购入热加工无缝钢制空心管 (`purchased_hollow`)

仅作为替代购入进料，供应负荷包含已完成加热与成形。同一物料路径不与钢坯重复计入。

- 选定流: 购入热加工无缝钢制空心管
- 流属性 / 单位: Mass / kg
- 数量规则: cp_purchased_hollow 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_purchased_hollow`
- 来源: `ec-fmp-bref-2022`

###### 购入厂用电 (`feed_receipt_electricity`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 购入厂用电
- 流属性 / 单位: Energy / kWh
- 数量规则: cp_feed_receipt_electricity 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_feed_receipt_electricity`
- 来源: `ec-fmp-bref-2022`

### 过程：进料准备、加热与无缝热成形 (`hot_forming`)

#### 输入

##### 产品流

###### 购入厂用电 (`hot_forming_electricity`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 购入厂用电
- 流属性 / 单位: Energy / kWh
- 数量规则: cp_hot_forming_electricity 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_hot_forming_electricity`
- 来源: `ec-fmp-bref-2022`

###### 燃烧用供给天然气 (`hot_forming_natural_gas`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 燃烧用供给天然气
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: cp_hot_forming_natural_gas 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_hot_forming_natural_gas`
- 来源: `ec-fmp-bref-2022`

###### 燃烧用燃料油 (`hot_forming_fuel_oil`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 燃烧用燃料油
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: cp_hot_forming_fuel_oil 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_hot_forming_fuel_oil`
- 来源: `ec-fmp-bref-2022`

###### 轧管润滑油 (`rolling_oil`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 轧管润滑油
- 流属性 / 单位: Mass / kg
- 数量规则: cp_rolling_oil 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_rolling_oil`
- 来源: `ec-fmp-bref-2022`

#### 输出

##### 废物流

###### 氧化铁轧钢氧化皮 (`mill_scale`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 氧化铁轧钢氧化皮
- 流属性 / 单位: Mass / kg
- 数量规则: cp_mill_scale 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_mill_scale`
- 来源: `ec-fmp-bref-2022`

###### 废钢 (`hot_scrap`)

称量离开边界的切头尾及不合格热成形管，保留废钢去向与金属化验。内部返工仅计入周转记录。

- 选定流: 废钢 `21cb9bfe-3598-416d-b127-9e94906f80cc`
- 流属性 / 单位: Mass / kg
- 数量规则: cp_hot_scrap 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_hot_scrap`
- 来源: `ec-fmp-bref-2022`

##### 基本流

###### 化石二氧化碳，排入空气 (`hot_forming_co2`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 化石二氧化碳，排入空气
- 流属性 / 单位: Mass / kg
- 数量规则: cp_hot_forming_co2 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_hot_forming_co2`
- 来源: `ec-fmp-bref-2022`

###### 氮氧化物，以 NO2 计，排入空气 (`hot_forming_nox`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 氮氧化物，以 NO2 计，排入空气
- 流属性 / 单位: Mass / kg
- 数量规则: cp_hot_forming_nox 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_hot_forming_nox`
- 来源: `ec-fmp-bref-2022`

###### 一氧化碳，排入空气 (`hot_forming_co`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 一氧化碳，排入空气
- 流属性 / 单位: Mass / kg
- 数量规则: cp_hot_forming_co 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_hot_forming_co`
- 来源: `ec-fmp-bref-2022`

###### 二氧化硫，排入空气 (`hot_forming_so2`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 二氧化硫，排入空气
- 流属性 / 单位: Mass / kg
- 数量规则: cp_hot_forming_so2 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_hot_forming_so2`
- 来源: `ec-fmp-bref-2022`

###### 小于 2.5 微米的颗粒物，排入空气 (`hot_forming_dust`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 小于 2.5 微米的颗粒物，排入空气
- 流属性 / 单位: Mass / kg
- 数量规则: cp_hot_forming_dust 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_hot_forming_dust`
- 来源: `ec-fmp-bref-2022`

### 过程：有条件酸洗与冷拔或冷轧 (`cold_finish`)

#### 输入

##### 产品流

###### 购入厂用电 (`cold_finish_electricity`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 购入厂用电
- 流属性 / 单位: Energy / kWh
- 数量规则: cp_cold_finish_electricity 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_cold_finish_electricity`
- 来源: `ec-fmp-bref-2022`

###### 酸洗用盐酸 (`hcl`)

仅在实际配方采用时计入，记录购入浓度及有效质量，未同时使用两种酸时不得同时计入。其他槽液化学品须逐种具名增行。

- 选定流: 酸洗用盐酸
- 流属性 / 单位: Mass / kg
- 数量规则: cp_hcl 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_hcl`
- 来源: `ec-fmp-bref-2022`

###### 酸洗用硫酸 (`h2so4`)

仅在实际配方采用时计入，记录购入浓度及有效质量，未同时使用两种酸时不得同时计入。其他槽液化学品须逐种具名增行。

- 选定流: 酸洗用硫酸
- 流属性 / 单位: Mass / kg
- 数量规则: cp_h2so4 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_h2so4`
- 来源: `ec-fmp-bref-2022`

###### 脱脂用氢氧化钠 (`naoh`)

仅在实际配方采用时计入，记录购入浓度及有效质量，未同时使用两种酸时不得同时计入。其他槽液化学品须逐种具名增行。

- 选定流: 脱脂用氢氧化钠
- 流属性 / 单位: Mass / kg
- 数量规则: cp_naoh 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_naoh`
- 来源: `ec-fmp-bref-2022`

###### 冷拔润滑油 (`drawing_oil`)

仅在实际配方采用时计入，记录购入浓度及有效质量，未同时使用两种酸时不得同时计入。其他槽液化学品须逐种具名增行。

- 选定流: 冷拔润滑油
- 流属性 / 单位: Mass / kg
- 数量规则: cp_drawing_oil 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_drawing_oil`
- 来源: `ec-fmp-bref-2022`

#### 输出

##### 废物流

###### 废盐酸酸洗液 (`spent_hcl`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 废盐酸酸洗液
- 流属性 / 单位: Mass / kg
- 数量规则: cp_spent_hcl 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_spent_hcl`
- 来源: `ec-fmp-bref-2022`

###### 废硫酸酸洗液 (`spent_h2so4`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 废硫酸酸洗液
- 流属性 / 单位: Mass / kg
- 数量规则: cp_spent_h2so4 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_spent_h2so4`
- 来源: `ec-fmp-bref-2022`

##### 基本流

###### 氯化氢，排入空气 (`acid_mist`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 氯化氢，排入空气
- 流属性 / 单位: Mass / kg
- 数量规则: cp_acid_mist 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_acid_mist`
- 来源: `ec-fmp-bref-2022`

### 过程：交货状态热处理与矫直 (`heat_treatment`)

#### 输入

##### 产品流

###### 购入厂用电 (`heat_treatment_electricity`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 购入厂用电
- 流属性 / 单位: Energy / kWh
- 数量规则: cp_heat_treatment_electricity 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_heat_treatment_electricity`
- 来源: `ec-fmp-bref-2022`

###### 燃烧用供给天然气 (`heat_treatment_natural_gas`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 燃烧用供给天然气
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: cp_heat_treatment_natural_gas 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_heat_treatment_natural_gas`
- 来源: `ec-fmp-bref-2022`

###### 燃烧用燃料油 (`heat_treatment_fuel_oil`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 燃烧用燃料油
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: cp_heat_treatment_fuel_oil 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_heat_treatment_fuel_oil`
- 来源: `ec-fmp-bref-2022`

###### 热处理淬火油 (`quench_oil`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 热处理淬火油
- 流属性 / 单位: Mass / kg
- 数量规则: cp_quench_oil 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_quench_oil`
- 来源: `ec-fmp-bref-2022`

#### 输出

##### 废物流

###### 废淬火油 (`spent_quench_oil`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 废淬火油
- 流属性 / 单位: Mass / kg
- 数量规则: cp_spent_quench_oil 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_spent_quench_oil`
- 来源: `ec-fmp-bref-2022`

##### 基本流

###### 化石二氧化碳，排入空气 (`heat_treatment_co2`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 化石二氧化碳，排入空气
- 流属性 / 单位: Mass / kg
- 数量规则: cp_heat_treatment_co2 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_heat_treatment_co2`
- 来源: `ec-fmp-bref-2022`

###### 氮氧化物，以 NO2 计，排入空气 (`heat_treatment_nox`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 氮氧化物，以 NO2 计，排入空气
- 流属性 / 单位: Mass / kg
- 数量规则: cp_heat_treatment_nox 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_heat_treatment_nox`
- 来源: `ec-fmp-bref-2022`

###### 一氧化碳，排入空气 (`heat_treatment_co`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 一氧化碳，排入空气
- 流属性 / 单位: Mass / kg
- 数量规则: cp_heat_treatment_co 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_heat_treatment_co`
- 来源: `ec-fmp-bref-2022`

###### 二氧化硫，排入空气 (`heat_treatment_so2`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 二氧化硫，排入空气
- 流属性 / 单位: Mass / kg
- 数量规则: cp_heat_treatment_so2 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_heat_treatment_so2`
- 来源: `ec-fmp-bref-2022`

###### 小于 2.5 微米的颗粒物，排入空气 (`heat_treatment_dust`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 小于 2.5 微米的颗粒物，排入空气
- 流属性 / 单位: Mass / kg
- 数量规则: cp_heat_treatment_dust 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_heat_treatment_dust`
- 来源: `ec-fmp-bref-2022`

### 过程：端部加工、检验与水压试验 (`acceptance`)

#### 输入

##### 产品流

###### 购入厂用电 (`acceptance_electricity`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 购入厂用电
- 流属性 / 单位: Energy / kWh
- 数量规则: cp_acceptance_electricity 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_acceptance_electricity`
- 来源: `ec-fmp-bref-2022`

#### 输出

##### 废物流

###### 钢制试验样品废料 (`test_sample`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 钢制试验样品废料
- 流属性 / 单位: Mass / kg
- 数量规则: cp_test_sample 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_test_sample`
- 来源: `ec-fmp-bref-2022`

###### 外送回收的不合格无缝钢制管线管 (`rejected_pipe`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 外送回收的不合格无缝钢制管线管
- 流属性 / 单位: Mass / kg
- 数量规则: cp_rejected_pipe 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_rejected_pipe`
- 来源: `ec-fmp-bref-2022`

### 过程：有条件表面保护与出口交付 (`surface_dispatch`)

#### 输入

##### 产品流

###### 购入厂用电 (`surface_dispatch_electricity`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 购入厂用电
- 流属性 / 单位: Energy / kWh
- 数量规则: cp_surface_dispatch_electricity 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_surface_dispatch_electricity`
- 来源: `ec-fmp-bref-2022`

###### 燃烧用供给天然气 (`surface_dispatch_natural_gas`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 燃烧用供给天然气
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: cp_surface_dispatch_natural_gas 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_surface_dispatch_natural_gas`
- 来源: `ec-fmp-bref-2022`

###### 燃烧用燃料油 (`surface_dispatch_fuel_oil`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 燃烧用燃料油
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: cp_surface_dispatch_fuel_oil 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_surface_dispatch_fuel_oil`
- 来源: `ec-fmp-bref-2022`

###### 抛丸清理用钢砂 (`abrasive`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 抛丸清理用钢砂
- 流属性 / 单位: Mass / kg
- 数量规则: cp_abrasive 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_abrasive`
- 来源: `tenaris-coatings`

###### 熔结环氧涂层粉末 (`epoxy`)

仅用于实际订购的交货表面体系，记录配方、层质量及损失。PE 与 PP 是不同备选项，实际内液体环氧组分须单独增行。

- 选定流: 熔结环氧涂层粉末
- 流属性 / 单位: Mass / kg
- 数量规则: cp_epoxy 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_epoxy`
- 来源: `tenaris-coatings`

###### 聚烯烃涂层共聚物胶粘剂 (`adhesive`)

仅用于实际订购的交货表面体系，记录配方、层质量及损失。PE 与 PP 是不同备选项，实际内液体环氧组分须单独增行。

- 选定流: 聚烯烃涂层共聚物胶粘剂
- 流属性 / 单位: Mass / kg
- 数量规则: cp_adhesive 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_adhesive`
- 来源: `tenaris-coatings`

###### 聚乙烯涂层树脂 (`pe`)

仅用于实际订购的交货表面体系，记录配方、层质量及损失。PE 与 PP 是不同备选项，实际内液体环氧组分须单独增行。

- 选定流: 聚乙烯涂层树脂
- 流属性 / 单位: Mass / kg
- 数量规则: cp_pe 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_pe`
- 来源: `tenaris-coatings`

###### 聚丙烯涂层树脂 (`pp`)

仅用于实际订购的交货表面体系，记录配方、层质量及损失。PE 与 PP 是不同备选项，实际内液体环氧组分须单独增行。

- 选定流: 聚丙烯涂层树脂
- 流属性 / 单位: Mass / kg
- 数量规则: cp_pp 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_pp`
- 来源: `tenaris-coatings`

###### 临时防锈油 (`preservative`)

仅用于实际订购的交货表面体系，记录配方、层质量及损失。PE 与 PP 是不同备选项，实际内液体环氧组分须单独增行。

- 选定流: 临时防锈油
- 流属性 / 单位: Mass / kg
- 数量规则: cp_preservative 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_preservative`
- 来源: `tenaris-coatings`

###### 钢制包装带 (`strapping`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 钢制包装带
- 流属性 / 单位: Mass / kg
- 数量规则: cp_strapping 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_strapping`
- 来源: `ec-fmp-bref-2022`

###### 木制运输垫块 (`wood`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 木制运输垫块
- 流属性 / 单位: Mass / kg
- 数量规则: cp_wood 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_wood`
- 来源: `ec-fmp-bref-2022`

###### 聚乙烯端部保护帽 (`cap`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 聚乙烯端部保护帽
- 流属性 / 单位: Mass / kg
- 数量规则: cp_cap 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_cap`
- 来源: `ec-fmp-bref-2022`

#### 输出

##### 产品流

###### 验收合格无缝钢制管线管 (`final_product`)

D 为称量的验收净交货钢管，含声明附着涂层，不含包装及游离试验水。分别报告钢体与涂层质量。

- 选定流: 验收合格无缝钢制管线管
- 流属性 / 单位: Mass / kg
- 数量规则: 1 kg
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_final_product`
- 来源: `api-5l-announcement-2026`

##### 废物流

###### 废抛丸钢砂 (`spent_grit`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 废抛丸钢砂
- 流属性 / 单位: Mass / kg
- 数量规则: cp_spent_grit 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_spent_grit`
- 来源: `ec-fmp-bref-2022`

###### 废熔结环氧粉末 (`coating_waste`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 废熔结环氧粉末
- 流属性 / 单位: Mass / kg
- 数量规则: cp_coating_waste 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_coating_waste`
- 来源: `tenaris-coatings`

##### 基本流

###### 化石二氧化碳，排入空气 (`surface_dispatch_co2`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 化石二氧化碳，排入空气
- 流属性 / 单位: Mass / kg
- 数量规则: cp_surface_dispatch_co2 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_surface_dispatch_co2`
- 来源: `ec-fmp-bref-2022`

###### 氮氧化物，以 NO2 计，排入空气 (`surface_dispatch_nox`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 氮氧化物，以 NO2 计，排入空气
- 流属性 / 单位: Mass / kg
- 数量规则: cp_surface_dispatch_nox 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_surface_dispatch_nox`
- 来源: `ec-fmp-bref-2022`

###### 一氧化碳，排入空气 (`surface_dispatch_co`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 一氧化碳，排入空气
- 流属性 / 单位: Mass / kg
- 数量规则: cp_surface_dispatch_co 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_surface_dispatch_co`
- 来源: `ec-fmp-bref-2022`

###### 二氧化硫，排入空气 (`surface_dispatch_so2`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 二氧化硫，排入空气
- 流属性 / 单位: Mass / kg
- 数量规则: cp_surface_dispatch_so2 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_surface_dispatch_so2`
- 来源: `ec-fmp-bref-2022`

###### 小于 2.5 微米的颗粒物，排入空气 (`surface_dispatch_dust`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 小于 2.5 微米的颗粒物，排入空气
- 流属性 / 单位: Mass / kg
- 数量规则: cp_surface_dispatch_dust 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_surface_dispatch_dust`
- 来源: `ec-fmp-bref-2022`

### 过程：共享水循环与污染控制 (`water_controls`)

#### 输入

##### 产品流

###### 购入厂用电 (`water_controls_electricity`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 购入厂用电
- 流属性 / 单位: Energy / kWh
- 数量规则: cp_water_controls_electricity 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_water_controls_electricity`
- 来源: `ec-fmp-bref-2022`

###### 购入工业工艺水 (`freshwater`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 购入工业工艺水
- 流属性 / 单位: Volume / m3
- 数量规则: cp_freshwater 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_freshwater`
- 来源: `ec-fmp-bref-2022`

###### 废水中和用氢氧化钙 (`lime`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 废水中和用氢氧化钙
- 流属性 / 单位: Mass / kg
- 数量规则: cp_lime 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_lime`
- 来源: `ec-fmp-bref-2022`

###### 聚丙烯酰胺絮凝剂 (`polymer`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 聚丙烯酰胺絮凝剂
- 流属性 / 单位: Mass / kg
- 数量规则: cp_polymer 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_polymer`
- 来源: `ec-fmp-bref-2022`

##### 基本流

###### 河流取水 (`riverwater`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 河流取水
- 流属性 / 单位: Volume / m3
- 数量规则: cp_riverwater 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_riverwater`
- 来源: `ec-fmp-bref-2022`

#### 输出

##### 废物流

###### 外送处理的工业废水 (`wastewater`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 外送处理的工业废水
- 流属性 / 单位: Volume / m3
- 数量规则: cp_wastewater 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_wastewater`
- 来源: `ec-fmp-bref-2022`

###### 含油含铁水处理污泥 (`sludge`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 含油含铁水处理污泥
- 流属性 / 单位: Mass / kg
- 数量规则: cp_sludge 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_sludge`
- 来源: `ec-fmp-bref-2022`

##### 基本流

###### 处理水排入河流 (`water_release`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 处理水排入河流
- 流属性 / 单位: Volume / m3
- 数量规则: cp_water_release 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_water_release`
- 来源: `ec-fmp-bref-2022`

###### 排入河流水中的溶解铁 (`iron_release`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 排入河流水中的溶解铁
- 流属性 / 单位: Mass / kg
- 数量规则: cp_iron_release 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_iron_release`
- 来源: `ec-fmp-bref-2022`

###### 排入河流水中的石油烃 (`oil_release`)

该交换跨越选定过程边界时记录，区分不发生与数量未知。

- 选定流: 排入河流水中的石油烃
- 流属性 / 单位: Mass / kg
- 数量规则: cp_oil_release 的可归属报告期数量 / D；先核对库存、内部转移及分配。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_oil_release`
- 来源: `ec-fmp-bref-2022`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | joint operations | 优先细分，否则证明物理因果关系。经济分配为后备，须匹配期间/货币/价格并做敏感性分析，保留未分配总量。未经证明管重可解释钢级、热循环及装炉差异时，不得仅按管重分配炉耗。 | `ef-allocation-2021` |
| allocation_rework | rework and residue | 保留返工/复试批次全部重复加工能耗及物料，抵消内部转移量。分别测量外送废钢、氧化皮及污泥，实际处理只计一次。出售本身不证明联产品地位，披露回收分配，不假定避免钢材抵扣。 | `ef-allocation-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_steel_billet | feed_receipt | steel_billet | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 校准称量并核对期初库存 + 收料 - 期末库存，关联批次与钢级。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_purchased_hollow | feed_receipt | purchased_hollow | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 校准称量并核对期初库存 + 收料 - 期末库存，关联批次与钢级。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_feed_receipt_electricity | feed_receipt | feed_receipt_electricity | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 分时读取工序分表并与场址购电核对，按实测设备工时/负荷分配辅助用电，保留电压、电网地域与供电年份。 | kWh | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_hot_forming_electricity | hot_forming | hot_forming_electricity | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 分时读取工序分表并与场址购电核对，按实测设备工时/负荷分配辅助用电，保留电压、电网地域与供电年份。 | kWh | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_cold_finish_electricity | cold_finish | cold_finish_electricity | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 分时读取工序分表并与场址购电核对，按实测设备工时/负荷分配辅助用电，保留电压、电网地域与供电年份。 | kWh | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_heat_treatment_electricity | heat_treatment | heat_treatment_electricity | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 分时读取工序分表并与场址购电核对，按实测设备工时/负荷分配辅助用电，保留电压、电网地域与供电年份。 | kWh | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_acceptance_electricity | acceptance | acceptance_electricity | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 分时读取工序分表并与场址购电核对，按实测设备工时/负荷分配辅助用电，保留电压、电网地域与供电年份。 | kWh | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_surface_dispatch_electricity | surface_dispatch | surface_dispatch_electricity | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 分时读取工序分表并与场址购电核对，按实测设备工时/负荷分配辅助用电，保留电压、电网地域与供电年份。 | kWh | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_water_controls_electricity | water_controls | water_controls_electricity | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 分时读取工序分表并与场址购电核对，按实测设备工时/负荷分配辅助用电，保留电压、电网地域与供电年份。 | kWh | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_hot_forming_natural_gas | hot_forming | hot_forming_natural_gas | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 计量气体体积及声明压力/温度，采用实测低位热值，保留供应组成并换算为 MJ，不采用假设气体因子。 | MJ | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_hot_forming_fuel_oil | hot_forming | hot_forming_fuel_oil | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 称量燃料油并采用批次低位热值，实际其他燃料逐项增加独立卡片。 | MJ | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_hot_forming_co2 | hot_forming | hot_forming_co2 | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 采用匹配的烟囱/逸散监测：浓度、干/湿烟气基准、流量及治理后运行时间。化石 CO2 采用实际燃料碳平衡，报告物种及介质，本规则不设默认因子。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_hot_forming_nox | hot_forming | hot_forming_nox | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 采用匹配的烟囱/逸散监测：浓度、干/湿烟气基准、流量及治理后运行时间。化石 CO2 采用实际燃料碳平衡，报告物种及介质，本规则不设默认因子。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_hot_forming_co | hot_forming | hot_forming_co | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 采用匹配的烟囱/逸散监测：浓度、干/湿烟气基准、流量及治理后运行时间。化石 CO2 采用实际燃料碳平衡，报告物种及介质，本规则不设默认因子。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_hot_forming_so2 | hot_forming | hot_forming_so2 | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 采用匹配的烟囱/逸散监测：浓度、干/湿烟气基准、流量及治理后运行时间。化石 CO2 采用实际燃料碳平衡，报告物种及介质，本规则不设默认因子。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_hot_forming_dust | hot_forming | hot_forming_dust | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 采用匹配的烟囱/逸散监测：浓度、干/湿烟气基准、流量及治理后运行时间。化石 CO2 采用实际燃料碳平衡，报告物种及介质，本规则不设默认因子。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_heat_treatment_natural_gas | heat_treatment | heat_treatment_natural_gas | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 计量气体体积及声明压力/温度，采用实测低位热值，保留供应组成并换算为 MJ，不采用假设气体因子。 | MJ | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_heat_treatment_fuel_oil | heat_treatment | heat_treatment_fuel_oil | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 称量燃料油并采用批次低位热值，实际其他燃料逐项增加独立卡片。 | MJ | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_heat_treatment_co2 | heat_treatment | heat_treatment_co2 | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 采用匹配的烟囱/逸散监测：浓度、干/湿烟气基准、流量及治理后运行时间。化石 CO2 采用实际燃料碳平衡，报告物种及介质，本规则不设默认因子。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_heat_treatment_nox | heat_treatment | heat_treatment_nox | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 采用匹配的烟囱/逸散监测：浓度、干/湿烟气基准、流量及治理后运行时间。化石 CO2 采用实际燃料碳平衡，报告物种及介质，本规则不设默认因子。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_heat_treatment_co | heat_treatment | heat_treatment_co | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 采用匹配的烟囱/逸散监测：浓度、干/湿烟气基准、流量及治理后运行时间。化石 CO2 采用实际燃料碳平衡，报告物种及介质，本规则不设默认因子。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_heat_treatment_so2 | heat_treatment | heat_treatment_so2 | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 采用匹配的烟囱/逸散监测：浓度、干/湿烟气基准、流量及治理后运行时间。化石 CO2 采用实际燃料碳平衡，报告物种及介质，本规则不设默认因子。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_heat_treatment_dust | heat_treatment | heat_treatment_dust | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 采用匹配的烟囱/逸散监测：浓度、干/湿烟气基准、流量及治理后运行时间。化石 CO2 采用实际燃料碳平衡，报告物种及介质，本规则不设默认因子。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_surface_dispatch_natural_gas | surface_dispatch | surface_dispatch_natural_gas | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 计量气体体积及声明压力/温度，采用实测低位热值，保留供应组成并换算为 MJ，不采用假设气体因子。 | MJ | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_surface_dispatch_fuel_oil | surface_dispatch | surface_dispatch_fuel_oil | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 称量燃料油并采用批次低位热值，实际其他燃料逐项增加独立卡片。 | MJ | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_surface_dispatch_co2 | surface_dispatch | surface_dispatch_co2 | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 采用匹配的烟囱/逸散监测：浓度、干/湿烟气基准、流量及治理后运行时间。化石 CO2 采用实际燃料碳平衡，报告物种及介质，本规则不设默认因子。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_surface_dispatch_nox | surface_dispatch | surface_dispatch_nox | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 采用匹配的烟囱/逸散监测：浓度、干/湿烟气基准、流量及治理后运行时间。化石 CO2 采用实际燃料碳平衡，报告物种及介质，本规则不设默认因子。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_surface_dispatch_co | surface_dispatch | surface_dispatch_co | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 采用匹配的烟囱/逸散监测：浓度、干/湿烟气基准、流量及治理后运行时间。化石 CO2 采用实际燃料碳平衡，报告物种及介质，本规则不设默认因子。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_surface_dispatch_so2 | surface_dispatch | surface_dispatch_so2 | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 采用匹配的烟囱/逸散监测：浓度、干/湿烟气基准、流量及治理后运行时间。化石 CO2 采用实际燃料碳平衡，报告物种及介质，本规则不设默认因子。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_surface_dispatch_dust | surface_dispatch | surface_dispatch_dust | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 采用匹配的烟囱/逸散监测：浓度、干/湿烟气基准、流量及治理后运行时间。化石 CO2 采用实际燃料碳平衡，报告物种及介质，本规则不设默认因子。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_rolling_oil | hot_forming | rolling_oil | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 校准称量并核对期初库存 + 收料 - 期末库存，关联批次与钢级。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_mill_scale | hot_forming | mill_scale | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 校准称量并核对期初库存 + 收料 - 期末库存，关联批次与钢级。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_hot_scrap | hot_forming | hot_scrap | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 校准称量并核对期初库存 + 收料 - 期末库存，关联批次与钢级。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_hcl | cold_finish | hcl | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 校准称量并核对期初库存 + 收料 - 期末库存，关联批次与钢级。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_h2so4 | cold_finish | h2so4 | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 校准称量并核对期初库存 + 收料 - 期末库存，关联批次与钢级。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_naoh | cold_finish | naoh | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 校准称量并核对期初库存 + 收料 - 期末库存，关联批次与钢级。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_drawing_oil | cold_finish | drawing_oil | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 校准称量并核对期初库存 + 收料 - 期末库存，关联批次与钢级。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_spent_hcl | cold_finish | spent_hcl | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 校准称量并核对期初库存 + 收料 - 期末库存，关联批次与钢级。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_spent_h2so4 | cold_finish | spent_h2so4 | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 校准称量并核对期初库存 + 收料 - 期末库存，关联批次与钢级。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_acid_mist | cold_finish | acid_mist | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 监测捕集/洗涤后酸洗排气浓度与通风流量，单独计量逸散损失。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_quench_oil | heat_treatment | quench_oil | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 校准称量并核对期初库存 + 收料 - 期末库存，关联批次与钢级。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_spent_quench_oil | heat_treatment | spent_quench_oil | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 校准称量并核对期初库存 + 收料 - 期末库存，关联批次与钢级。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_test_sample | acceptance | test_sample | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 校准称量并核对期初库存 + 收料 - 期末库存，关联批次与钢级。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_rejected_pipe | acceptance | rejected_pipe | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 校准称量并核对期初库存 + 收料 - 期末库存，关联批次与钢级。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_abrasive | surface_dispatch | abrasive | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 校准称量并核对期初库存 + 收料 - 期末库存，关联批次与钢级。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_epoxy | surface_dispatch | epoxy | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 校准称量并核对期初库存 + 收料 - 期末库存，关联批次与钢级。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_adhesive | surface_dispatch | adhesive | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 校准称量并核对期初库存 + 收料 - 期末库存，关联批次与钢级。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_pe | surface_dispatch | pe | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 校准称量并核对期初库存 + 收料 - 期末库存，关联批次与钢级。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_pp | surface_dispatch | pp | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 校准称量并核对期初库存 + 收料 - 期末库存，关联批次与钢级。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_preservative | surface_dispatch | preservative | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 校准称量并核对期初库存 + 收料 - 期末库存，关联批次与钢级。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_strapping | surface_dispatch | strapping | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 校准称量并核对期初库存 + 收料 - 期末库存，关联批次与钢级。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_wood | surface_dispatch | wood | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 校准称量并核对期初库存 + 收料 - 期末库存，关联批次与钢级。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_cap | surface_dispatch | cap | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 校准称量并核对期初库存 + 收料 - 期末库存，关联批次与钢级。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_spent_grit | surface_dispatch | spent_grit | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 校准称量并核对期初库存 + 收料 - 期末库存，关联批次与钢级。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_coating_waste | surface_dispatch | coating_waste | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 校准称量并核对期初库存 + 收料 - 期末库存，关联批次与钢级。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_final_product | surface_dispatch | final_product | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 采用校准衡器称量合格批次，核对生产验收、发运及期初期末成品库存，保留钢级、尺寸及涂层质量。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_freshwater | water_controls | freshwater | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 分别计量冷却/除鳞/淬火/试验/冲洗循环外部补水，记录排污及库存变化，内部循环量不是外部取水。 | m3 | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_riverwater | water_controls | riverwater | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 仅计量直接河流取水，记录流域、季节及处理，不与购入水重复。 | m3 | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_lime | water_controls | lime | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 校准称量并核对期初库存 + 收料 - 期末库存，关联批次与钢级。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_polymer | water_controls | polymer | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 校准称量并核对期初库存 + 收料 - 期末库存，关联批次与钢级。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_wastewater | water_controls | wastewater | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 采用校准转移/排放流量计，匹配期间与去向，保留温度、悬浮物及质量转换时的密度，留样开展污染物化验。 | m3 | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_sludge | water_controls | sludge | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 校准称量并核对期初库存 + 收料 - 期末库存，关联批次与钢级。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_water_release | water_controls | water_release | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 采用校准转移/排放流量计，匹配期间与去向，保留温度、悬浮物及质量转换时的密度，留样开展污染物化验。 | m3 | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_iron_release | water_controls | iron_release | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 处理后匹配废水体积乘溶解铁浓度，所选方法要求时扣除有记录的进水负荷。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |
| cp_oil_release | water_controls | oil_release | measurement_record | 场址；期间；批次；钢级；原始数量/单位；库存；校准；不确定性；路线条件；分配；D | 采用物种/级分特定废水化验及体积，实验室综合油类指标不得映射为化学上不相容的基本流。 | kg | 逐批次或计量区间，按月核对 | 完整年度或有据的代表周期，包含不合格及返工 | 声明轧管线及共享服务 | per 1 kg reference flow | 原始记录；校准；化验；验收及平衡证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all exchanges | q_i = 分配后外部数量_i / D，参考产出 = 1 kg。计算前核对物料库存并抵消内部转移。 | cp_final_product; row-specific cp | per 1 kg |  |
| physical_balance | site | 分别保留接收钢料、合格钢体、废钢、湿固体、水及期初/期末在制品的总质量，不将含铁质量与钢材总质量相加。按同一含 Fe 基准核对元素铁平衡：外部进料及期初在制品中实测 Fe = 合格钢体、外送废钢、氧化皮、污泥及废水中实测 Fe + 期末在制品及其他各项实测 Fe 释放。每项由自身实测总质量及 Fe 化验推导，废水采用匹配浓度与体积。分别保留碳和各实际合金元素的氧化、释放、留存质量及化学反应记录，形成单独元素平衡。计入氧吸收、水分及实际反应产物，不假设纯铁、共同组成、固定换算或虚构成材率。抵消内部返工转移，保留其重复能耗及化学品。补水 + 期初储量 = 外送 + 排放 + 蒸发 + 产品带水 + 期末储量；依据实测不确定性核对酸/化学品有效组分库存、反应、带出与废物平衡。 | 钢/铁化验；水表；酸浓度；库存；废物记录 | 平衡残差及测量不确定性，不虚构容差 |  |
| energy_conversion | utilities | 计量 kWh × 3.6 = MJ；燃料质量 × 实测低位热值 = MJ。共享服务分配和等于计量总量。 | 计量；低位热值；校准；分配依据 | MJ |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| qualification | pipe | 油气输送管用途；规范及版本；产品规范等级；钢级及炉次化学成分；外径、壁厚与长度；无缝成形路线；热/冷加工；交货热处理状态；酸性服役要求；检验与水压试验验收；表面/涂层体系与涂层质量；端部加工；场址、期间及进料起始状态 | 订单；材质证明；尺寸/热处理及试验记录 |
| coverage | all rows | 适用性记录为发生、不发生、实测零或未知，不将缺测视为零。数据集完成前解析准确流身份、供应地域/年份、处理去向及排放介质。 | manifest review_metadata |
| ranges | all rows | 不设默认工序强度、成材率、化学组成或经验范围，采用前景记录，独立相容范围证据仍待补充。 | 保留记录及不确定性 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | 核对正实测 D、1 kg 参考、验收产品、钢体/涂层分离及全部限定信息，不将通用管或焊管/OCTG UUID 标为无缝管线管。 |  |
| validate_balance | production | 分别保留接收钢料、合格钢体、废钢、湿固体、水及期初/期末在制品的总质量，不将含铁质量与钢材总质量相加。按同一含 Fe 基准核对元素铁平衡：外部进料及期初在制品中实测 Fe = 合格钢体、外送废钢、氧化皮、污泥及废水中实测 Fe + 期末在制品及其他各项实测 Fe 释放。每项由自身实测总质量及 Fe 化验推导，废水采用匹配浓度与体积。分别保留碳和各实际合金元素的氧化、释放、留存质量及化学反应记录，形成单独元素平衡。计入氧吸收、水分及实际反应产物，不假设纯铁、共同组成、固定换算或虚构成材率。抵消内部返工转移，保留其重复能耗及化学品。补水 + 期初储量 = 外送 + 排放 + 蒸发 + 产品带水 + 期末储量；依据实测不确定性核对酸/化学品有效组分库存、反应、带出与废物平衡。 |  |
| validate_complete | dataset | 核对适用路线、各原子外部交换、归一化、供应方/废物去向及治理后排放。未解决 UUID、必需未知数量或无依据单位转换阻止完整数据集，候选方法检查不构成产品符合性。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | process; lifecyclemodel |
| allowed_use | 指定无缝管线管制造，关联上游负荷 |
| excluded_use | 焊管/OCTG或已安装管道，由本 PCR 推断完整 API 符合性 |
| required_metadata | 油气输送管用途；规范及版本；产品规范等级；钢级及炉次化学成分；外径、壁厚与长度；无缝成形路线；热/冷加工；交货热处理状态；酸性服役要求；检验与水压试验验收；表面/涂层体系与涂层质量；端部加工；场址、期间及进料起始状态 |
| required_quality_disclosure | 路线、上游覆盖、身份/测量缺口、不确定性、分配及废物去向 |
| update_trigger | 钢级/规范、工艺路线、涂层、成材率、供应或验收要求变化 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| ec-fmp-bref-2022 | official_guidance | European Commission JRC, Ferrous Metals Processing BREF (2022), DOI 10.2760/196475, chapter 1 steel tubes; 2.2.1.6 tube mills; 2.2.18 wastes; 2.3.2 energy; 2.3.5 emissions. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-12/FMP%20BREF_Final%20Version.pdf | 无缝管坯加热、穿孔、延伸、终轧及热处理；有条件冷拔；水、油、氧化皮及燃烧控制。不采用通用强度或温度。 |
| api-5l-announcement-2026 | official_guidance | API, API Announces 47th Edition of Foundational Line Pipe Standard, 2 June 2026. https://www.api.org/news-policy-and-issues/news/2026/06/02/api-announces-47th-edition-of-api-specification-5l | 仅提供官方范围及制造/检验/试验/标记/追溯类别。公告不是规范：符合性须取得订单实际版本及条款。 |
| tenaris-coatings | extension_guidance | Tenaris, Offshore and Onshore Pipeline Coating Solutions, pages 4 and 6, undated brochure, retrieved 2 October 2026. https://www.tenaris.com/media/1jtmlf5o/offshore-onshore-pipeline-coatingsolutions.pdf | 有条件的熔结环氧、胶粘层与聚乙烯/聚丙烯层，单独内涂层。厂商方案不构成必需涂层或通用厚度/强度。 |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | 细分、物理因果及其他关系的分配层级，不宣称完全符合 PEF。 |
