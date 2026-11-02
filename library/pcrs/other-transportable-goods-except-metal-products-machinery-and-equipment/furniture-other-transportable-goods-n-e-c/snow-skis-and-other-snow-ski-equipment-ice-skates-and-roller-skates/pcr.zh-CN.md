---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.snow-skis-and-other-snow-ski-equipment-ice-skates-and-roller-skates
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
schema_version: 1
translation_status: aligned
---

# 木芯玻纤/环氧湿法层压高山滑雪板制造

## 1. 范围与适用性

适用于完整未装固定器高山滑雪板制造：采购层压糖枫木芯坯并现场成形，干态机织玻纤配真实环氧体系湿铺，采用供货烧结UHMWPE底片、P-tex侧墙、淬硬钢刃和已装饰尼龙顶片。包括真实电热气囊压合/固化、修边、底面/钢刃研磨、角度检查、蜡/红外/刷蜡及首次质量放行。实物产品为单板，一对含两板。来源支持的材料/作业综合定义适用路线，不声称同一当代SKU、工厂订单、通用铺层或实测工厂清单。来源：`wagner-custom`; `wagner-materials`; `wagner-core`; `wagner-fiberglass`; `wagner-press`; `wagner-finish`; `wagner-graphics`。

排除固定器/靴/雪杖/冰鞋、雪具套装、单板滑雪、结构不同的越野/跳台板、玩具、不完整木芯/底材/钢条/板坯、购成品再包装和雪场使用。碳纤维/Titanal/芳纶/预浸料/泡沫/全金属路线、现场木芯层压或顶片印染须重新取得证据和适用性判断并增加真实原子清单，不得默换。上游供货准备通过相容数据集链接保留一次。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.snow-skis-and-other-snow-ski-equipment-ice-skates-and-roller-skates |
| classification_refs | CPC 3.0 38410；narrower；当前接受关系以`classifications/mappings/cpc-3.0-to-pcr.yaml`及`docs/adr/cpc3-additional34-20261029-38410.md`为准；须满足完整方法范围与排除项，不表示整类覆盖或科学/翻译批准 |
| covered_products | 完整木芯玻纤/环氧湿铺未装固定器高山滑雪板 |
| excluded_products | 第1节不同结构/路线及全部雪具/部件/使用排除项 |
| representative_product | 安装固定器前一块完整声明高山板，不假定质量 |
| production_route | 供货木芯/层材/钢刃准备；湿铺；电热压合固化；修边/研磨/磨刃/蜡；放行 |
| market_state | 首次质量放行门的新制完整未装固定器成品板 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 提供声明未装固定器配置的完整已制造高山滑雪板 |
| How much | 1 kg首次放行完整净板质量；逐单板实测 |
| How well | 满足声明结构及底面/钢刃/角度/蜡完工状态的真实厂家/规格要求，不编性能或认证 |
| How long or cycle | 一次制造首次放行事件，不声称使用寿命或雪场服务 |
| reference_flow_link | finished_ski |

| Field | Value |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 雪橇及其他滑雪设备，冰鞋及旱冰鞋 `218cc119-aab7-4ba5-b8b0-2c05509e2df3` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 完整未装固定器高山滑雪板单板及唯一序号/批组; 层压糖枫木芯供货与实际含水状态; 干态机织玻纤及实际整份树脂/固化剂制剂; 烧结UHMWPE底片及实际P-tex侧墙状态; 淬硬钢刃型及供货组件边界; 真实已装饰尼龙顶片及条件橡胶条; 实际外形/拱形/翘度及批准材料配置; 实际固化/底面/钢刃/角度/蜡放行记录; 有校准的单板实测净质量并排除固定器/包装; 首次放行Q及原料/WIP逐交换继承向量; 原已放行FG批组Q_H及真实观测时域H; 真实供方地区/时期及原生流限制; 完整包装六腿毛流及资产/部件/流体保管; 独立湿质量/碳/元素/水/物种证据 |

每项必需限定信息均须进入真实数据集元数据、参考备注、产品/过程说明或等效完整数据包语境。原生产品族相容不等于真实供方、配方、合格或质量已测得。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| release_mass | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q为选定批组首次放行唯一完整单板实测净质量之和。真实完工后校准称重；排除包装、固定器、雪杖及独立附件。记录型号/配置、序号及真实含水。首次放行期末FG已在Q内，不是第二成品。不假定每板kg或借次级属性质量。 |
| native_units | all inventory rows | 每卡真实原生广延属性 | native unit | 保留每行原生参考属性单位。电力为原生净热值/MJ；1 kWh=3.6 MJ仅转换一次。液压流体为体积/m3，独立实测该流体密度用于kg物理量。质量行用kg。只积分真实速率，已积分气液体积不再乘时间。计数转质量需同配置实测净M；Item(s)与item仅作为计数因子1。不推定层数/面积/密度/重量系数。 |
| single_result | all inventory rows | 真实分子维度 | native unit | 全部采集为未除原始量。第8节calc_raw及归属/服务规则构造分子；只有calc_quotient执行N_i/Q_c一次。实物卡用完整毛V_i，不作库存/分配修正；负荷卡用应归属向量一次。卡片及汇总均引用同一结果。Q_c=0保留全部原始负荷和实物存量，不出单位结果。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 供货层压枫木芯坯、干态机织玻纤、整份配制环氧/固化剂、烧结底片/侧墙/钢刃组件及装饰尼龙顶片；真实公用工程及条件辅料 |
| starting_condition_role | foreground starting gate; upstream supply linked once |
| product_classification_scope | CPC 3.0 38410 narrower semantic route |
| recursive_input_rule | 同类板中间件需真实状态/历史及成对内部交接，不以购成品再包装替代完整制造 |
| upstream_dataset_requirement | 匹配供货形态、路线、地区、时期及真实整制剂/制品边界；上游已完工操作不在现场重做 |
| disclosure | 制造首次放行加单列原批组服务观测H；明示真实存量/向量/物理缺口 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_route | whole manufacture | 包括准备、铺层/配胶、电热固化、完工/检查/蜡、真实失败批、零产出作业、启停、闲置、清洗、样品及返工。不假定蒸汽锅炉、燃料、外购压缩气或固化系数；数值使用前增加任何真实额外原子进出。 | wagner-core; wagner-press; wagner-finish |
| b_cohort | stocks and gates | 每交换保留期初原料/WIP/未分配非WIP负荷向量及实物存量、当期新增和完整期末状态。制造期末负荷排除已首次放行FG，其历史制造保留在原Q。已净化消耗不再次扣库存。产品门交接只抵消匹配内部腿。实物毛质量不按负荷/经济份额缩量。 | ilcd-attributional-2010 |
| b_service | postrelease and dispatch | 在原Q_H下保留观测H内实际仓储、包装、搬运和发运增量，包括留库FG。单纯交付/复验不造新Q，不使用净交付分母。未来净交付研究须完整期初/期末FG负荷、毛G/R、真实原交付逆向和增量返工桥，不假定退回质量等于原交付。 | ilcd-attributional-2010 |
| b_physical | all gross stocks and species | 在制造、FG服务及合并门独立闭合湿质量、相关元素、碳来源及真实化学/游离/相态水。组分、供方活动及载水各计一次。自然吸脱湿与真实维修加/失水均采集。一个闭合残差不能拟合两个未知；VOC/NOx/COD/总尘为指标，不编成分子。 | ilcd-attributional-2010 |
| b_pack | packaging and assets | 每个真实包材池逐一追溯P+I+ER=C+毛S+EO+W，以六张事件卡、完整湿态空置/附WIP/FG/可复用存量、供方含入流和一次负荷owner实现。维修/水X_in/X_out只去重其他同侧进出项，不能取消真实留存新增流入或完整期末质量。湿整件与独立新增组件桥须不重叠。内部复用抵消，包材不入净板Q。 | ilcd-attributional-2010 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| prep | 供料验收及数控部件准备 | required | 仅真实声明作业及交换 | 制造 | first-release Q |
| laminate | 湿法铺层及电热压合固化 | required | 仅真实声明作业及交换 | 制造 | first-release Q |
| finish | 修边底面研磨钢刃处理打蜡及首次放行 | required | 仅真实声明作业及交换 | 制造 | first-release Q |
| service | 实际放行后保管与服务 | conditional | 仅真实声明作业及交换 | 观测服务及实物保管 | original Q_H and H |
| packaging | 包装保管及应归属服务 | conditional | 仅真实声明作业及交换 | 观测服务及实物保管 | original Q_H and H |
| assets | 资产部件流体及实际服务 | conditional | 仅真实声明作业及交换 | 观测服务及实物保管 | original Q_H and H |

### 过程：供料验收及数控部件准备 (`prep`)

全部卡片继承完整参考配置、真实适用条件及第4/5/7/8/9节。条件缺席须有证据，信息缺失不是零。实际已发生作业即使许可、试验或验收失败仍保留真实物流及负荷。

#### 输入

##### 产品流

###### 层压糖枫滑雪板木芯坯 (`maple_core_blank`)

采购层压木芯坯，现场数控加工周界和厚度轮廓。保留真实层压/胶/含水/供货状态及边角料；不重做上游原木锯切、干燥或木芯胶合。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_attribution；N_i=A_m_i后引用calc_quotient唯一x_i；cp_material_prep。不再相除或增加实物采购。

- 选定流：层压糖枫滑雪板木芯坯
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_material_prep。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_material_prep
- 来源：wagner-core

###### 烧结超高分子量聚乙烯滑雪板底片 (`base_sheet`)

一份供应的烧结滑雪底片，声明真实碳/助剂及表面处理。现场裁切，不重做树脂烧结或聚合。不得绑定纤维形态UHMWPE或显示为PVA的身份。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_attribution；N_i=A_m_i后引用calc_quotient唯一x_i；cp_material_prep。不再相除或增加实物采购。

- 选定流：烧结超高分子量聚乙烯滑雪板底片
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_material_prep。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_material_prep
- 来源：wagner-materials

###### P-tex聚乙烯滑雪板侧墙条 (`sidewall_strip`)

一种供应的侧墙条，不是底片，也不是同一内含部件二购。记录实际聚合物牌号/形态；尖尾封边件若独立供应则单独记录。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_attribution；N_i=A_m_i后引用calc_quotient唯一x_i；cp_material_prep。不再相除或增加实物采购。

- 选定流：P-tex聚乙烯滑雪板侧墙条
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_material_prep。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_material_prep
- 来源：wagner-custom

###### 淬硬钢滑雪板刃条 (`steel_edge`)

实际淬硬供货钢刃型条，按该板需要裁切/成形；钢刃组件只计一次，不同时采购原钢和整份供货钢刃。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_attribution；N_i=A_m_i后引用calc_quotient唯一x_i；cp_material_prep。不再相除或增加实物采购。

- 选定流：淬硬钢滑雪板刃条
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_material_prep。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_material_prep
- 来源：wagner-base

###### 硬质合金铣刀磨损 (`carbide_wear`)

仅为真实辅助铣削磨损。 原生限定: 厂内. 原生限定: 通用铣削加工刀具磨损消耗品. 原生接口为数控铣削辅助硬质合金刀具磨损，不是整台新机器或任意每板刀具系数。匹配实际硬质合金及铣削路线。另记完整在装/新收/拆出刀具实物，不将整刀与同一磨损负荷重复采购。 经calc_raw及calc_attribution；N_i=A_m_i后引用calc_quotient唯一x_i；cp_material_prep。不再相除或增加实物采购。

- 选定流：硬质合金切削刀具 `94633cf9-686a-4903-b879-b65be812ba1e`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_material_prep。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_material_prep
- 来源：wagner-core

###### 电网电力 (`prep_electricity`)

计量真实作业及相关启停、闲置、通风、清理、试验和返工电耗。电压机/红外加热已包含在电表中，不再采购第二份热或蒸汽。 原生限定: 1–35千伏. 原生限定: 消费组合，到用户. 原生限定: 电网平均供电. 仅用于实际1–35 kV电网平均消费组合的用户端供电。原生参考为净热值/MJ，在此记录广延电能，不是kg或燃料采购。供方地区/时期及变压边界仍需匹配；低电压或专门发电需另设相容原子行。不使用垃圾焚烧电力身份，也不自动追加上游损耗。 经calc_raw及calc_attribution；N_i=A_m_i后引用calc_quotient唯一x_i；cp_utilities_prep。不再相除或增加实物采购。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：引用第8节唯一商结果x_i；cp_utilities_prep。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_utilities_prep
- 来源：ilcd-attributional-2010

###### 经处理的工业供水 (`prep_water`)

仅在该作业、清洗/冷却或湿度控制实际购水时纳入。保留真实供水状态/供方、原始体积或湿质量及实测密度；毛水量不是电能/热能。不套巴西HIPS或香港水身份。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_attribution；N_i=A_m_i后引用calc_quotient唯一x_i；cp_utilities_prep。不再相除或增加实物采购。

- 选定流：经处理的工业供水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_utilities_prep。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_utilities_prep
- 来源：ilcd-attributional-2010

###### 层压枫木芯加工废物处理服务 (`core_shavings_treatment`)

仅为此唯一链接真实废物出口的实际供方处理服务。采集真实受纳作业、原生广延服务单位和有据活动转换。一真实混合出口只配一个供方，来源池W不构成另一总量。现场处理须采全部真实原子进出；无自动回收/能源信用，也不扣普通制造废物负荷。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_attribution；N_i=A_m_i后引用calc_quotient唯一x_i；cp_waste_prep。不再相除或增加实物采购。

- 选定流：层压枫木芯加工废物处理服务
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_waste_prep。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_waste_prep
- 来源：ilcd-attributional-2010

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 层压枫木芯加工废物 (`core_shavings`)

实际分出口湿态加工废物，含木芯已有胶，不假定未经处理的纯木料。 即使出售/外送/失败仍保留实际制造和处理负荷；真实独立功能须有明确正当移交，不能自动扣除。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_waste_prep。

- 选定流：层压枫木芯加工废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_waste_prep。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_waste_prep
- 来源：wagner-core; ilcd-attributional-2010

##### 基本流

### 过程：湿法铺层及电热压合固化 (`laminate`)

全部卡片继承完整参考配置、真实适用条件及第4/5/7/8/9节。条件缺席须有证据，信息缺失不是零。实际已发生作业即使许可、试验或验收失败仍保留真实物流及负荷。

#### 输入

##### 产品流

###### 干态机织玻璃纤维布 (`glass_cloth`)

一种实际干态机织增强布供货，现场裁切和浸润。已供应预浸料不属本干布湿铺路线；不得把布和含同一布的整份预浸料同时采购。不设层数、面密度或玻纤/树脂比例。 原生限定: 生产混合，在工厂. 原生限定: 成品，已制造. 仅限干态机织玻纤布，不是纱、棉、缝编无纺布、预浸料或固化复合件。原生备注提及纺织分类27/271；披露此孤立分类文字，不据此改变一致物理身份，也不忽略实际材质/形态冲突。 经calc_raw及calc_attribution；N_i=A_m_i后引用calc_quotient唯一x_i；cp_material_laminate。不再相除或增加实物采购。

- 选定流：玻璃纤维织物（包括狭幅织物） `59caf1b9-5a05-4eef-8ba2-bc94aa28f43f`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_material_laminate。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_material_laminate
- 来源：wagner-fiberglass

###### 配制环氧层压树脂A组分 (`epoxy_a`)

实际湿铺使用的整份树脂侧供货制剂。须确定供方配方及树脂化学，不从“环氧”一词推定DGEBA。测量配胶损失/锅底残留，与独立采购固化剂分开。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_attribution；N_i=A_m_i后引用calc_quotient唯一x_i；cp_material_laminate。不再相除或增加实物采购。

- 选定流：配制环氧层压树脂A组分
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_material_laminate。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_material_laminate
- 来源：wagner-press

###### 环氧固化剂制剂B组分 (`hardener_b`)

一种指定环氧体系的实际固化剂供货配方；化学族和混合要求来自真实供方，不臆测某纯胺。现场混合能耗、损失和固化残余仍在前景内。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_attribution；N_i=A_m_i后引用calc_quotient唯一x_i；cp_material_laminate。不再相除或增加实物采购。

- 选定流：环氧固化剂制剂B组分
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_material_laminate。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_material_laminate
- 来源：wagner-press

###### 已装饰尼龙滑雪板顶片 (`nylon_topsheet`)

采购已装饰尼龙顶片，作为最后铺层；供方印染、转印纸及能耗属于该一份顶片上游。不假定现场印染、二次购买油墨或重复加工。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_attribution；N_i=A_m_i后引用calc_quotient唯一x_i；cp_material_laminate。不再相除或增加实物采购。

- 选定流：已装饰尼龙滑雪板顶片
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_material_laminate。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_material_laminate
- 来源：wagner-graphics

###### 硫化橡胶滑雪板减振条 (`rubber_damping`)

实际批准物料表存在时才纳入一种硫化橡胶减振条；不是轮胎胶料，不假定厚度，也不强制增加一层。未使用时保留缺席证据。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_attribution；N_i=A_m_i后引用calc_quotient唯一x_i；cp_material_laminate。不再相除或增加实物采购。

- 选定流：硫化橡胶滑雪板减振条
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_material_laminate。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_material_laminate
- 来源：wagner-factory

###### 电网电力 (`laminate_electricity`)

计量真实作业及相关启停、闲置、通风、清理、试验和返工电耗。电压机/红外加热已包含在电表中，不再采购第二份热或蒸汽。 原生限定: 1–35千伏. 原生限定: 消费组合，到用户. 原生限定: 电网平均供电. 仅用于实际1–35 kV电网平均消费组合的用户端供电。原生参考为净热值/MJ，在此记录广延电能，不是kg或燃料采购。供方地区/时期及变压边界仍需匹配；低电压或专门发电需另设相容原子行。不使用垃圾焚烧电力身份，也不自动追加上游损耗。 经calc_raw及calc_attribution；N_i=A_m_i后引用calc_quotient唯一x_i；cp_utilities_laminate。不再相除或增加实物采购。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：引用第8节唯一商结果x_i；cp_utilities_laminate。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_utilities_laminate
- 来源：wagner-press

###### 经处理的工业供水 (`laminate_water`)

仅在该作业、清洗/冷却或湿度控制实际购水时纳入。保留真实供水状态/供方、原始体积或湿质量及实测密度；毛水量不是电能/热能。不套巴西HIPS或香港水身份。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_attribution；N_i=A_m_i后引用calc_quotient唯一x_i；cp_utilities_laminate。不再相除或增加实物采购。

- 选定流：经处理的工业供水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_utilities_laminate。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_utilities_laminate
- 来源：ilcd-attributional-2010

###### 未固化环氧混合废料处理服务 (`uncured_resin_treatment`)

仅为此唯一链接真实废物出口的实际供方处理服务。采集真实受纳作业、原生广延服务单位和有据活动转换。一真实混合出口只配一个供方，来源池W不构成另一总量。现场处理须采全部真实原子进出；无自动回收/能源信用，也不扣普通制造废物负荷。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_attribution；N_i=A_m_i后引用calc_quotient唯一x_i；cp_waste_laminate。不再相除或增加实物采购。

- 选定流：未固化环氧混合废料处理服务
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_waste_laminate。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_waste_laminate
- 来源：ilcd-attributional-2010

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 未固化环氧混合废料 (`uncured_resin`)

一个真实锅底/未固化混合物出口，树脂/固化剂子账不是新增废物总量。 即使出售/外送/失败仍保留实际制造和处理负荷；真实独立功能须有明确正当移交，不能自动扣除。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_waste_laminate。

- 选定流：未固化环氧混合废料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_waste_laminate。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_waste_laminate
- 来源：wagner-press; ilcd-attributional-2010

##### 基本流

### 过程：修边底面研磨钢刃处理打蜡及首次放行 (`finish`)

全部卡片继承完整参考配置、真实适用条件及第4/5/7/8/9节。条件缺席须有证据，信息缺失不是零。实际已发生作业即使许可、试验或验收失败仍保留真实物流及负荷。

#### 输入

##### 产品流

###### 调制软质滑雪底蜡 (`soft_wax`)

完工时使用的整份软质滑雪底蜡制剂。分别测供入/留附/移除蜡及真实蒸气，不假定纯石蜡。 原生限定: 生产混合，在工厂. 原生限定: 成品，已制造. 本卡仅为一种整份供应的调制滑雪蜡制剂，不是所有蜡或其组成化学品。组成、含氟状态、供方及底蜡/滑行蜡牌号需真实规格；原生产品族未给固定配方或性能。 经calc_raw及calc_attribution；N_i=A_m_i后引用calc_quotient唯一x_i；cp_finish。不再相除或增加实物采购。

- 选定流：人造蜡及调制蜡 `554ecf09-e83f-4f0d-b777-342cf04a7643`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_finish。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_finish
- 来源：wagner-finish

###### 调制滑雪滑行蜡 (`running_wax`)

另一种真实按温况选用的滑行蜡制剂，随后实际红外加热和刷蜡。不规定蜡质量、温度、停留时间、含氟状态或滑行寿命。 原生限定: 生产混合，在工厂. 原生限定: 成品，已制造. 本卡仅为一种整份供应的调制滑雪蜡制剂，不是所有蜡或其组成化学品。组成、含氟状态、供方及底蜡/滑行蜡牌号需真实规格；原生产品族未给固定配方或性能。 经calc_raw及calc_attribution；N_i=A_m_i后引用calc_quotient唯一x_i；cp_finish。不再相除或增加实物采购。

- 选定流：人造蜡及调制蜡 `554ecf09-e83f-4f0d-b777-342cf04a7643`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_finish。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_finish
- 来源：wagner-finish

###### 钢带锯条 (`saw_blade`)

实际切除溢边/飞边的锯条消耗。 原生限定: 生产混合, 工厂内, 全球. 原生限定: 锯切或剪切用辅助切削耗材. 原生切削耗材为钢锯片/剪切刀片，全球工厂生产组合，未给磨耗率。本卡限定实际修边带锯条消耗，不是硬质合金刀具或整台带锯。完整新旧收存退废与服务另账且不重叠。 经calc_raw及calc_attribution；N_i=A_m_i后引用calc_quotient唯一x_i；cp_finish。不再相除或增加实物采购。

- 选定流：钢锯片或剪切刀片 `970801c9-08c1-4d9c-999d-4b66609430be`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_finish。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_finish
- 来源：wagner-finish

###### 滑雪板精加工砂带 (`abrasive_belt`)

整份真实砂带，记录磨粒/基材/粘结剂和服务使用；不假定中国专用供方。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_attribution；N_i=A_m_i后引用calc_quotient唯一x_i；cp_finish。不再相除或增加实物采购。

- 选定流：滑雪板精加工砂带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_finish。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_finish
- 来源：wagner-finish

###### 滑雪板底面磨石 (`grinding_stone`)

用于底面纹理的真实整磨石，不设无证据的磨料化学、等级或磨耗率。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_attribution；N_i=A_m_i后引用calc_quotient唯一x_i；cp_finish。不再相除或增加实物采购。

- 选定流：滑雪板底面磨石
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_finish。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_finish
- 来源：wagner-finish

###### 橡胶结合磨刃石 (`gummy_stone`)

一种实际供货橡胶结合磨石，用于尖尾刃处理。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_attribution；N_i=A_m_i后引用calc_quotient唯一x_i；cp_finish。不再相除或增加实物采购。

- 选定流：橡胶结合磨刃石
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_finish。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_finish
- 来源：wagner-finish

###### 金刚石涂覆磨刃石 (`diamond_stone`)

一份金刚石涂覆刀具制品，不是散装工业金刚石。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_attribution；N_i=A_m_i后引用calc_quotient唯一x_i；cp_finish。不再相除或增加实物采购。

- 选定流：金刚石涂覆磨刃石
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_finish。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_finish
- 来源：wagner-finish

###### 滑雪蜡旋转刷 (`roto_brush`)

用于刷蜡的实际整旋转刷，声明真实刷毛/本体组成及实测服务。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_attribution；N_i=A_m_i后引用calc_quotient唯一x_i；cp_finish。不再相除或增加实物采购。

- 选定流：滑雪蜡旋转刷
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_finish。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_finish
- 来源：wagner-finish

###### 电网电力 (`finish_electricity`)

计量真实作业及相关启停、闲置、通风、清理、试验和返工电耗。电压机/红外加热已包含在电表中，不再采购第二份热或蒸汽。 原生限定: 1–35千伏. 原生限定: 消费组合，到用户. 原生限定: 电网平均供电. 仅用于实际1–35 kV电网平均消费组合的用户端供电。原生参考为净热值/MJ，在此记录广延电能，不是kg或燃料采购。供方地区/时期及变压边界仍需匹配；低电压或专门发电需另设相容原子行。不使用垃圾焚烧电力身份，也不自动追加上游损耗。 经calc_raw及calc_attribution；N_i=A_m_i后引用calc_quotient唯一x_i；cp_utilities_finish。不再相除或增加实物采购。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：引用第8节唯一商结果x_i；cp_utilities_finish。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_utilities_finish
- 来源：ilcd-attributional-2010

###### 经处理的工业供水 (`finish_water`)

仅在该作业、清洗/冷却或湿度控制实际购水时纳入。保留真实供水状态/供方、原始体积或湿质量及实测密度；毛水量不是电能/热能。不套巴西HIPS或香港水身份。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_attribution；N_i=A_m_i后引用calc_quotient唯一x_i；cp_utilities_finish。不再相除或增加实物采购。

- 选定流：经处理的工业供水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_utilities_finish。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_utilities_finish
- 来源：ilcd-attributional-2010

###### 水性设备清洗制剂 (`cleaner`)

仅在实际使用时纳入的整份供货制剂，使用前确定配方。其内含水作为子账，额外稀释水是实际新增流。采集真实调配/清洗损失，不以印刷油墨清洗剂或矿石替代。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_attribution；N_i=A_m_i后引用calc_quotient唯一x_i；cp_finish。不再相除或增加实物采购。

- 选定流：水性设备清洗制剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_finish。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_finish
- 来源：ilcd-attributional-2010

###### 研磨冷却液浓缩制剂 (`coolant`)

仅在实际使用时纳入的整份供货制剂，使用前确定配方。其内含水作为子账，额外稀释水是实际新增流。采集真实调配/清洗损失，不以印刷油墨清洗剂或矿石替代。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_attribution；N_i=A_m_i后引用calc_quotient唯一x_i；cp_finish。不再相除或增加实物采购。

- 选定流：研磨冷却液浓缩制剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_finish。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_finish
- 来源：ilcd-attributional-2010

###### 固化层压滑雪板修边废物处理服务 (`trim_waste_treatment`)

仅为此唯一链接真实废物出口的实际供方处理服务。采集真实受纳作业、原生广延服务单位和有据活动转换。一真实混合出口只配一个供方，来源池W不构成另一总量。现场处理须采全部真实原子进出；无自动回收/能源信用，也不扣普通制造废物负荷。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_attribution；N_i=A_m_i后引用calc_quotient唯一x_i；cp_waste_finish。不再相除或增加实物采购。

- 选定流：固化层压滑雪板修边废物处理服务
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_waste_finish。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_waste_finish
- 来源：ilcd-attributional-2010

###### 湿态滑雪板研磨污泥处理服务 (`grinding_sludge_treatment`)

仅为此唯一链接真实废物出口的实际供方处理服务。采集真实受纳作业、原生广延服务单位和有据活动转换。一真实混合出口只配一个供方，来源池W不构成另一总量。现场处理须采全部真实原子进出；无自动回收/能源信用，也不扣普通制造废物负荷。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_attribution；N_i=A_m_i后引用calc_quotient唯一x_i；cp_waste_finish。不再相除或增加实物采购。

- 选定流：湿态滑雪板研磨污泥处理服务
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_waste_finish。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_waste_finish
- 来源：ilcd-attributional-2010

###### 滑雪板完工清洗废水处理服务 (`process_wastewater_treatment`)

仅为此唯一链接真实废物出口的实际供方处理服务。采集真实受纳作业、原生广延服务单位和有据活动转换。一真实混合出口只配一个供方，来源池W不构成另一总量。现场处理须采全部真实原子进出；无自动回收/能源信用，也不扣普通制造废物负荷。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_attribution；N_i=A_m_i后引用calc_quotient唯一x_i；cp_waste_finish。不再相除或增加实物采购。

- 选定流：滑雪板完工清洗废水处理服务
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_waste_finish。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_waste_finish
- 来源：ilcd-attributional-2010

###### 不合格层压高山滑雪板处理服务 (`rejected_ski_treatment`)

仅为此唯一链接真实废物出口的实际供方处理服务。采集真实受纳作业、原生广延服务单位和有据活动转换。一真实混合出口只配一个供方，来源池W不构成另一总量。现场处理须采全部真实原子进出；无自动回收/能源信用，也不扣普通制造废物负荷。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_attribution；N_i=A_m_i后引用calc_quotient唯一x_i；cp_waste_finish。不再相除或增加实物采购。

- 选定流：不合格层压高山滑雪板处理服务
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_waste_finish。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_waste_finish
- 来源：ilcd-attributional-2010

###### 废滑雪板精加工砂带处理服务 (`spent_abrasive_treatment`)

仅为此唯一链接真实废物出口的实际供方处理服务。采集真实受纳作业、原生广延服务单位和有据活动转换。一真实混合出口只配一个供方，来源池W不构成另一总量。现场处理须采全部真实原子进出；无自动回收/能源信用，也不扣普通制造废物负荷。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_attribution；N_i=A_m_i后引用calc_quotient唯一x_i；cp_waste_finish。不再相除或增加实物采购。

- 选定流：废滑雪板精加工砂带处理服务
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_waste_finish。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_waste_finish
- 来源：ilcd-attributional-2010

##### 废物流

##### 基本流

###### 分子氧 (`finish_o2_in`)

在声明物理门逐一记录该真实气态物种，包括相关通风、压缩空气损失和自然储运吸脱湿。毛进出与净生成分离，不将空气总量和这些物种叠加。自然湿度交换不需要维修许可。不得从NOx/VOC/COD/总尘推物种，也不能以一个残差拟合两个未知。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_physical_finish。

- 选定流：分子氧
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_physical_finish。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_physical_finish
- 来源：ilcd-attributional-2010

###### 分子氮 (`finish_n2_in`)

在声明物理门逐一记录该真实气态物种，包括相关通风、压缩空气损失和自然储运吸脱湿。毛进出与净生成分离，不将空气总量和这些物种叠加。自然湿度交换不需要维修许可。不得从NOx/VOC/COD/总尘推物种，也不能以一个残差拟合两个未知。 CAS 7727-37-9. 原生区室：Resources / Resources from air / Renewable element resources from air. 仅限取自空气的分子N2资源；原生CAS 7727-37-9不代表总氮、NOx、溶解氮或化合氮。不代表外购液氮或气体生产供方。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_physical_finish。

- 选定流：二氮 `08a91e70-3ddc-11dd-96e4-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_physical_finish。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_physical_finish
- 来源：ilcd-attributional-2010

###### 稳定氩气 (`finish_ar_in`)

在声明物理门逐一记录该真实气态物种，包括相关通风、压缩空气损失和自然储运吸脱湿。毛进出与净生成分离，不将空气总量和这些物种叠加。自然湿度交换不需要维修许可。不得从NOx/VOC/COD/总尘推物种，也不能以一个残差拟合两个未知。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_physical_finish。

- 选定流：稳定氩气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_physical_finish。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_physical_finish
- 来源：ilcd-attributional-2010

###### 水蒸气 (`finish_h2o_in`)

在声明物理门逐一记录该真实气态物种，包括相关通风、压缩空气损失和自然储运吸脱湿。毛进出与净生成分离，不将空气总量和这些物种叠加。自然湿度交换不需要维修许可。不得从NOx/VOC/COD/总尘推物种，也不能以一个残差拟合两个未知。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_physical_finish。

- 选定流：水蒸气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_physical_finish。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_physical_finish
- 来源：ilcd-attributional-2010

#### 输出

##### 产品流

###### 首次放行完整高山滑雪板 (`finished_ski`)

实际固化、外形/底面/钢刃处理、角度检查、打蜡及声明厂家/规格放行检查后的唯一成品参考输出。只计首次放行，已放行留库FG包含其中。真实单板在未装固定器组件边界内完整；一对是两块分别识别的板，不能视作一套未定义雪具。 原生限定: 生产混合，在工厂. 原生限定: 成品，已制造. 本宽泛已制造产品族在此限定为完整未装固定器的木芯玻纤/环氧高山滑雪板单板，不是雪杖、固定器、冰鞋、单板滑雪板、板坯或部件。原生记录不限定特定材质、牌号、相态、地区或供方；具体性来自完整产品原始证据和实际物料表。原生参考为质量/kg；净板质量排除包装和固定器。

- 选定流：雪橇及其他滑雪设备，冰鞋及旱冰鞋 `218cc119-aab7-4ba5-b8b0-2c05509e2df3`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_release
- 来源：wagner-custom; wagner-finish

##### 废物流

###### 固化层压滑雪板修边废物 (`trim_waste`)

一个真实混合飞边/修边出口，玻纤、环氧及实际木/聚合物/钢分量不重叠测量，不套船厂专用玻璃钢。 即使出售/外送/失败仍保留实际制造和处理负荷；真实独立功能须有明确正当移交，不能自动扣除。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_waste_finish。

- 选定流：固化层压滑雪板修边废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_waste_finish。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_waste_finish
- 来源：wagner-finish; ilcd-attributional-2010

###### 湿态滑雪板研磨污泥 (`grinding_sludge`)

仅为真实独立湿磨出口，含真实载水、蜡和磨料；与废水及干收尘区分。不编通用污泥配方。 即使出售/外送/失败仍保留实际制造和处理负荷；真实独立功能须有明确正当移交，不能自动扣除。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_waste_finish。

- 选定流：湿态滑雪板研磨污泥
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_waste_finish。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_waste_finish
- 来源：wagner-finish; ilcd-attributional-2010

###### 滑雪板完工清洗废水 (`process_wastewater`)

一个实际独立废水出口，湿总量含溶质一次，COD为指标而非特定化学品。 即使出售/外送/失败仍保留实际制造和处理负荷；真实独立功能须有明确正当移交，不能自动扣除。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_waste_finish。

- 选定流：滑雪板完工清洗废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_waste_finish。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_waste_finish
- 来源：wagner-finish; ilcd-attributional-2010

###### 不合格层压高山滑雪板 (`rejected_ski`)

仅为实际独立报废整板或破坏试验样品出口。若并入修边/污泥出口，则仅设独立来源池，不再计第二废物总量。不形成Q或自动信用。 即使出售/外送/失败仍保留实际制造和处理负荷；真实独立功能须有明确正当移交，不能自动扣除。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_waste_finish。

- 选定流：不合格层压高山滑雪板
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_waste_finish。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_waste_finish
- 来源：wagner-finish; ilcd-attributional-2010

###### 废滑雪板精加工砂带 (`spent_abrasive`)

实际独立拆出废砂带出口，基材/粘结剂/磨粒整件一次，与粉尘分量分离。 即使出售/外送/失败仍保留实际制造和处理负荷；真实独立功能须有明确正当移交，不能自动扣除。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_waste_finish。

- 选定流：废滑雪板精加工砂带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_waste_finish。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_waste_finish
- 来源：wagner-finish; ilcd-attributional-2010

##### 基本流

###### 分子氧 (`finish_o2_out`)

在声明物理门逐一记录该真实气态物种，包括相关通风、压缩空气损失和自然储运吸脱湿。毛进出与净生成分离，不将空气总量和这些物种叠加。自然湿度交换不需要维修许可。不得从NOx/VOC/COD/总尘推物种，也不能以一个残差拟合两个未知。 CAS 7782-44-7. 原生区室：Emissions / Emissions to air / Emissions to air, unspecified. 仅限分子气态物种，非长期未细分空气排放，不是大气资源输入、溶解组分、空气总量或外购气体。匹配真实受纳介质，有测量时解析更细区室。原生质量/kg为广延量；毛通过量与生成量或净摄入分离。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_physical_finish。

- 选定流：氧 `08a91e70-3ddc-11dd-9745-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_physical_finish。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_physical_finish
- 来源：ilcd-attributional-2010

###### 分子氮 (`finish_n2_out`)

在声明物理门逐一记录该真实气态物种，包括相关通风、压缩空气损失和自然储运吸脱湿。毛进出与净生成分离，不将空气总量和这些物种叠加。自然湿度交换不需要维修许可。不得从NOx/VOC/COD/总尘推物种，也不能以一个残差拟合两个未知。 CAS 7727-37-9. 原生区室：Emissions / Emissions to air / Emissions to air, unspecified. 仅限分子气态物种，非长期未细分空气排放，不是大气资源输入、溶解组分、空气总量或外购气体。匹配真实受纳介质，有测量时解析更细区室。原生质量/kg为广延量；毛通过量与生成量或净摄入分离。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_physical_finish。

- 选定流：二氮 `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_physical_finish。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_physical_finish
- 来源：ilcd-attributional-2010

###### 稳定氩气 (`finish_ar_out`)

在声明物理门逐一记录该真实气态物种，包括相关通风、压缩空气损失和自然储运吸脱湿。毛进出与净生成分离，不将空气总量和这些物种叠加。自然湿度交换不需要维修许可。不得从NOx/VOC/COD/总尘推物种，也不能以一个残差拟合两个未知。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_physical_finish。

- 选定流：稳定氩气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_physical_finish。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_physical_finish
- 来源：ilcd-attributional-2010

###### 水蒸气 (`finish_h2o_out`)

在声明物理门逐一记录该真实气态物种，包括相关通风、压缩空气损失和自然储运吸脱湿。毛进出与净生成分离，不将空气总量和这些物种叠加。自然湿度交换不需要维修许可。不得从NOx/VOC/COD/总尘推物种，也不能以一个残差拟合两个未知。 CAS 7732-18-5. 原生区室：Emissions / Emissions to air / Emissions to air, unspecified. 仅限分子气态物种，非长期未细分空气排放，不是大气资源输入、溶解组分、空气总量或外购气体。匹配真实受纳介质，有测量时解析更细区室。原生质量/kg为广延量；毛通过量与生成量或净摄入分离。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_physical_finish。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_physical_finish。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_physical_finish
- 来源：ilcd-attributional-2010

### 过程：实际放行后保管与服务 (`service`)

全部卡片继承完整参考配置、真实适用条件及第4/5/7/8/9节。条件缺席须有证据，信息缺失不是零。实际已发生作业即使许可、试验或验收失败仍保留真实物流及负荷。

#### 输入

##### 产品流

###### 电网电力 (`service_electricity`)

计量真实作业及相关启停、闲置、通风、清理、试验和返工电耗。电压机/红外加热已包含在电表中，不再采购第二份热或蒸汽。 原生限定: 1–35千伏. 原生限定: 消费组合，到用户. 原生限定: 电网平均供电. 仅用于实际1–35 kV电网平均消费组合的用户端供电。原生参考为净热值/MJ，在此记录广延电能，不是kg或燃料采购。供方地区/时期及变压边界仍需匹配；低电压或专门发电需另设相容原子行。不使用垃圾焚烧电力身份，也不自动追加上游损耗。 经calc_raw及calc_service；N_i=A_h_i后引用calc_quotient唯一x_i；cp_utilities_service。不再相除或增加实物采购。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：引用第8节唯一商结果x_i；cp_utilities_service。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_utilities_service
- 来源：ilcd-attributional-2010

###### 经处理的工业供水 (`service_water`)

仅在该作业、清洗/冷却或湿度控制实际购水时纳入。保留真实供水状态/供方、原始体积或湿质量及实测密度；毛水量不是电能/热能。不套巴西HIPS或香港水身份。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_service；N_i=A_h_i后引用calc_quotient唯一x_i；cp_utilities_service。不再相除或增加实物采购。

- 选定流：经处理的工业供水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_utilities_service。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_utilities_service
- 来源：ilcd-attributional-2010

###### 服务接收的完整已放行高山滑雪板 (`service_ski_received`)

仅为实物保管腿，与原序号/批组及毛发运/退回记录对应。不是新增外购、首次放行Q，也不是扣留库FG制造负荷的理由。同产品过程间交接成对并在合并时抵消；真实外部退回不得默默抵消。 原生限定: 生产混合，在工厂. 原生限定: 成品，已制造. 本宽泛已制造产品族在此限定为完整未装固定器的木芯玻纤/环氧高山滑雪板单板，不是雪杖、固定器、冰鞋、单板滑雪板、板坯或部件。原生记录不限定特定材质、牌号、相态、地区或供方；具体性来自完整产品原始证据和实际物料表。原生参考为质量/kg；净板质量排除包装和固定器。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_service。

- 选定流：雪橇及其他滑雪设备，冰鞋及旱冰鞋 `218cc119-aab7-4ba5-b8b0-2c05509e2df3`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_service。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_service
- 来源：ilcd-attributional-2010

##### 废物流

##### 基本流

###### 分子氧 (`service_o2_in`)

在声明物理门逐一记录该真实气态物种，包括相关通风、压缩空气损失和自然储运吸脱湿。毛进出与净生成分离，不将空气总量和这些物种叠加。自然湿度交换不需要维修许可。不得从NOx/VOC/COD/总尘推物种，也不能以一个残差拟合两个未知。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_physical_service。

- 选定流：分子氧
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_physical_service。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_physical_service
- 来源：ilcd-attributional-2010

###### 分子氮 (`service_n2_in`)

在声明物理门逐一记录该真实气态物种，包括相关通风、压缩空气损失和自然储运吸脱湿。毛进出与净生成分离，不将空气总量和这些物种叠加。自然湿度交换不需要维修许可。不得从NOx/VOC/COD/总尘推物种，也不能以一个残差拟合两个未知。 CAS 7727-37-9. 原生区室：Resources / Resources from air / Renewable element resources from air. 仅限取自空气的分子N2资源；原生CAS 7727-37-9不代表总氮、NOx、溶解氮或化合氮。不代表外购液氮或气体生产供方。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_physical_service。

- 选定流：二氮 `08a91e70-3ddc-11dd-96e4-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_physical_service。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_physical_service
- 来源：ilcd-attributional-2010

###### 稳定氩气 (`service_ar_in`)

在声明物理门逐一记录该真实气态物种，包括相关通风、压缩空气损失和自然储运吸脱湿。毛进出与净生成分离，不将空气总量和这些物种叠加。自然湿度交换不需要维修许可。不得从NOx/VOC/COD/总尘推物种，也不能以一个残差拟合两个未知。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_physical_service。

- 选定流：稳定氩气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_physical_service。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_physical_service
- 来源：ilcd-attributional-2010

###### 水蒸气 (`service_h2o_in`)

在声明物理门逐一记录该真实气态物种，包括相关通风、压缩空气损失和自然储运吸脱湿。毛进出与净生成分离，不将空气总量和这些物种叠加。自然湿度交换不需要维修许可。不得从NOx/VOC/COD/总尘推物种，也不能以一个残差拟合两个未知。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_physical_service。

- 选定流：水蒸气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_physical_service。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_physical_service
- 来源：ilcd-attributional-2010

#### 输出

##### 产品流

###### 服务发出的完整已放行高山滑雪板 (`service_ski_dispatched`)

仅为实物保管腿，与原序号/批组及毛发运/退回记录对应。不是新增外购、首次放行Q，也不是扣留库FG制造负荷的理由。同产品过程间交接成对并在合并时抵消；真实外部退回不得默默抵消。 原生限定: 生产混合，在工厂. 原生限定: 成品，已制造. 本宽泛已制造产品族在此限定为完整未装固定器的木芯玻纤/环氧高山滑雪板单板，不是雪杖、固定器、冰鞋、单板滑雪板、板坯或部件。原生记录不限定特定材质、牌号、相态、地区或供方；具体性来自完整产品原始证据和实际物料表。原生参考为质量/kg；净板质量排除包装和固定器。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_service。

- 选定流：雪橇及其他滑雪设备，冰鞋及旱冰鞋 `218cc119-aab7-4ba5-b8b0-2c05509e2df3`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_service。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_service
- 来源：ilcd-attributional-2010

##### 废物流

##### 基本流

###### 分子氧 (`service_o2_out`)

在声明物理门逐一记录该真实气态物种，包括相关通风、压缩空气损失和自然储运吸脱湿。毛进出与净生成分离，不将空气总量和这些物种叠加。自然湿度交换不需要维修许可。不得从NOx/VOC/COD/总尘推物种，也不能以一个残差拟合两个未知。 CAS 7782-44-7. 原生区室：Emissions / Emissions to air / Emissions to air, unspecified. 仅限分子气态物种，非长期未细分空气排放，不是大气资源输入、溶解组分、空气总量或外购气体。匹配真实受纳介质，有测量时解析更细区室。原生质量/kg为广延量；毛通过量与生成量或净摄入分离。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_physical_service。

- 选定流：氧 `08a91e70-3ddc-11dd-9745-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_physical_service。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_physical_service
- 来源：ilcd-attributional-2010

###### 分子氮 (`service_n2_out`)

在声明物理门逐一记录该真实气态物种，包括相关通风、压缩空气损失和自然储运吸脱湿。毛进出与净生成分离，不将空气总量和这些物种叠加。自然湿度交换不需要维修许可。不得从NOx/VOC/COD/总尘推物种，也不能以一个残差拟合两个未知。 CAS 7727-37-9. 原生区室：Emissions / Emissions to air / Emissions to air, unspecified. 仅限分子气态物种，非长期未细分空气排放，不是大气资源输入、溶解组分、空气总量或外购气体。匹配真实受纳介质，有测量时解析更细区室。原生质量/kg为广延量；毛通过量与生成量或净摄入分离。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_physical_service。

- 选定流：二氮 `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_physical_service。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_physical_service
- 来源：ilcd-attributional-2010

###### 稳定氩气 (`service_ar_out`)

在声明物理门逐一记录该真实气态物种，包括相关通风、压缩空气损失和自然储运吸脱湿。毛进出与净生成分离，不将空气总量和这些物种叠加。自然湿度交换不需要维修许可。不得从NOx/VOC/COD/总尘推物种，也不能以一个残差拟合两个未知。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_physical_service。

- 选定流：稳定氩气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_physical_service。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_physical_service
- 来源：ilcd-attributional-2010

###### 水蒸气 (`service_h2o_out`)

在声明物理门逐一记录该真实气态物种，包括相关通风、压缩空气损失和自然储运吸脱湿。毛进出与净生成分离，不将空气总量和这些物种叠加。自然湿度交换不需要维修许可。不得从NOx/VOC/COD/总尘推物种，也不能以一个残差拟合两个未知。 CAS 7732-18-5. 原生区室：Emissions / Emissions to air / Emissions to air, unspecified. 仅限分子气态物种，非长期未细分空气排放，不是大气资源输入、溶解组分、空气总量或外购气体。匹配真实受纳介质，有测量时解析更细区室。原生质量/kg为广延量；毛通过量与生成量或净摄入分离。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_physical_service。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_physical_service。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_physical_service
- 来源：ilcd-attributional-2010

### 过程：包装保管及应归属服务 (`packaging`)

全部卡片继承完整参考配置、真实适用条件及第4/5/7/8/9节。条件缺席须有证据，信息缺失不是零。实际已发生作业即使许可、试验或验收失败仍保留真实物流及负荷。

#### 输入

##### 产品流

###### 瓦楞滑雪板运输纸箱 (`carton_p`)

该一种真实瓦楞滑雪板运输纸箱池按实际条件采集期初湿态保管存量，记录完整湿态实物V_carton_P，不是库存修正消耗、所分服务或经济份额。P为存量事件而非采购。完整保留期初/期末空置、附着WIP、附着FG和可复用状态。供方包含但无单独发票的入流仍需实测。整件含实际水/部件一次，组件桥须不重叠。X只去重其他同侧进出项，不能取消真实留存新增流入。内部复用既不是I也不是ER。若实际仅一混合废物出口，只用一张Waste卡及各池独立W子账，不重复废物总量。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_pack。

- 选定流：瓦楞滑雪板运输纸箱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_pack
- 来源：ilcd-attributional-2010

###### 瓦楞滑雪板运输纸箱 (`carton_i`)

该一种真实瓦楞滑雪板运输纸箱池按实际条件采集外部新增流入，记录完整湿态实物V_carton_I，不是库存修正消耗、所分服务或经济份额。P为存量事件而非采购。完整保留期初/期末空置、附着WIP、附着FG和可复用状态。供方包含但无单独发票的入流仍需实测。整件含实际水/部件一次，组件桥须不重叠。X只去重其他同侧进出项，不能取消真实留存新增流入。内部复用既不是I也不是ER。若实际仅一混合废物出口，只用一张Waste卡及各池独立W子账，不重复废物总量。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_pack。

- 选定流：瓦楞滑雪板运输纸箱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_pack
- 来源：ilcd-attributional-2010

###### 瓦楞滑雪板运输纸箱 (`carton_er`)

该一种真实瓦楞滑雪板运输纸箱池按实际条件采集接收外部退回，记录完整湿态实物V_carton_ER，不是库存修正消耗、所分服务或经济份额。P为存量事件而非采购。完整保留期初/期末空置、附着WIP、附着FG和可复用状态。供方包含但无单独发票的入流仍需实测。整件含实际水/部件一次，组件桥须不重叠。X只去重其他同侧进出项，不能取消真实留存新增流入。内部复用既不是I也不是ER。若实际仅一混合废物出口，只用一张Waste卡及各池独立W子账，不重复废物总量。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_pack。

- 选定流：瓦楞滑雪板运输纸箱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_pack
- 来源：ilcd-attributional-2010

###### 瓦楞滑雪板运输纸箱 (`carton_charge`)

本卡只承载同一真实包材的一次应归属上游/服务负荷，与六腿实物账和真实owner链接；不是I之外新增实物流入或采购。仅未用/未分配期末charge结转，已为原批组执行的服务即使FG留库仍保留。不设固定复用次数或寿命。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_service；N_i=A_h_i后引用calc_quotient唯一x_i；cp_pack。不再相除或增加实物采购。

- 选定流：瓦楞滑雪板运输纸箱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_pack
- 来源：ilcd-attributional-2010

###### 聚乙烯滑雪板套膜 (`film_p`)

该一种真实聚乙烯滑雪板套膜池按实际条件采集期初湿态保管存量，记录完整湿态实物V_film_P，不是库存修正消耗、所分服务或经济份额。P为存量事件而非采购。完整保留期初/期末空置、附着WIP、附着FG和可复用状态。供方包含但无单独发票的入流仍需实测。整件含实际水/部件一次，组件桥须不重叠。X只去重其他同侧进出项，不能取消真实留存新增流入。内部复用既不是I也不是ER。若实际仅一混合废物出口，只用一张Waste卡及各池独立W子账，不重复废物总量。 原生限定: 生产混合，在工厂. CAS 9002-88-4聚乙烯薄膜，用于一个真实套膜/缠膜池；不强加固定支化结构或制膜路线。原生说明把PET与PE作比较，不允许将PET套膜识别为PE。整份供应薄膜及其内含助剂只采购一次。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_pack。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_pack
- 来源：ilcd-attributional-2010

###### 聚乙烯滑雪板套膜 (`film_i`)

该一种真实聚乙烯滑雪板套膜池按实际条件采集外部新增流入，记录完整湿态实物V_film_I，不是库存修正消耗、所分服务或经济份额。P为存量事件而非采购。完整保留期初/期末空置、附着WIP、附着FG和可复用状态。供方包含但无单独发票的入流仍需实测。整件含实际水/部件一次，组件桥须不重叠。X只去重其他同侧进出项，不能取消真实留存新增流入。内部复用既不是I也不是ER。若实际仅一混合废物出口，只用一张Waste卡及各池独立W子账，不重复废物总量。 原生限定: 生产混合，在工厂. CAS 9002-88-4聚乙烯薄膜，用于一个真实套膜/缠膜池；不强加固定支化结构或制膜路线。原生说明把PET与PE作比较，不允许将PET套膜识别为PE。整份供应薄膜及其内含助剂只采购一次。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_pack。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_pack
- 来源：ilcd-attributional-2010

###### 聚乙烯滑雪板套膜 (`film_er`)

该一种真实聚乙烯滑雪板套膜池按实际条件采集接收外部退回，记录完整湿态实物V_film_ER，不是库存修正消耗、所分服务或经济份额。P为存量事件而非采购。完整保留期初/期末空置、附着WIP、附着FG和可复用状态。供方包含但无单独发票的入流仍需实测。整件含实际水/部件一次，组件桥须不重叠。X只去重其他同侧进出项，不能取消真实留存新增流入。内部复用既不是I也不是ER。若实际仅一混合废物出口，只用一张Waste卡及各池独立W子账，不重复废物总量。 原生限定: 生产混合，在工厂. CAS 9002-88-4聚乙烯薄膜，用于一个真实套膜/缠膜池；不强加固定支化结构或制膜路线。原生说明把PET与PE作比较，不允许将PET套膜识别为PE。整份供应薄膜及其内含助剂只采购一次。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_pack。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_pack
- 来源：ilcd-attributional-2010

###### 聚乙烯滑雪板套膜 (`film_charge`)

本卡只承载同一真实包材的一次应归属上游/服务负荷，与六腿实物账和真实owner链接；不是I之外新增实物流入或采购。仅未用/未分配期末charge结转，已为原批组执行的服务即使FG留库仍保留。不设固定复用次数或寿命。 原生限定: 生产混合，在工厂. CAS 9002-88-4聚乙烯薄膜，用于一个真实套膜/缠膜池；不强加固定支化结构或制膜路线。原生说明把PET与PE作比较，不允许将PET套膜识别为PE。整份供应薄膜及其内含助剂只采购一次。 经calc_raw及calc_service；N_i=A_h_i后引用calc_quotient唯一x_i；cp_pack。不再相除或增加实物采购。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_pack
- 来源：ilcd-attributional-2010

###### 木制运输托盘 (`pallet_p`)

该一种真实木制运输托盘池按实际条件采集期初湿态保管存量，记录完整湿态实物V_pallet_P，不是库存修正消耗、所分服务或经济份额。P为存量事件而非采购。完整保留期初/期末空置、附着WIP、附着FG和可复用状态。供方包含但无单独发票的入流仍需实测。整件含实际水/部件一次，组件桥须不重叠。X只去重其他同侧进出项，不能取消真实留存新增流入。内部复用既不是I也不是ER。若实际仅一混合废物出口，只用一张Waste卡及各池独立W子账，不重复废物总量。 原生限定: 生产混合，在木材厂. 原生限定: 木板 / 木条. 木材厂生产接口的完整木板/木条托盘，不是维修木板、钉、塑料托盘或光伏安装专用身份。声明真实树种、湿质量、内含部件及相容上游供方。不假定寿命或固定托盘计数质量转换。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_pack。

- 选定流：木质托盘 `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_pack
- 来源：ilcd-attributional-2010

###### 木制运输托盘 (`pallet_i`)

该一种真实木制运输托盘池按实际条件采集外部新增流入，记录完整湿态实物V_pallet_I，不是库存修正消耗、所分服务或经济份额。P为存量事件而非采购。完整保留期初/期末空置、附着WIP、附着FG和可复用状态。供方包含但无单独发票的入流仍需实测。整件含实际水/部件一次，组件桥须不重叠。X只去重其他同侧进出项，不能取消真实留存新增流入。内部复用既不是I也不是ER。若实际仅一混合废物出口，只用一张Waste卡及各池独立W子账，不重复废物总量。 原生限定: 生产混合，在木材厂. 原生限定: 木板 / 木条. 木材厂生产接口的完整木板/木条托盘，不是维修木板、钉、塑料托盘或光伏安装专用身份。声明真实树种、湿质量、内含部件及相容上游供方。不假定寿命或固定托盘计数质量转换。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_pack。

- 选定流：木质托盘 `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_pack
- 来源：ilcd-attributional-2010

###### 木制运输托盘 (`pallet_er`)

该一种真实木制运输托盘池按实际条件采集接收外部退回，记录完整湿态实物V_pallet_ER，不是库存修正消耗、所分服务或经济份额。P为存量事件而非采购。完整保留期初/期末空置、附着WIP、附着FG和可复用状态。供方包含但无单独发票的入流仍需实测。整件含实际水/部件一次，组件桥须不重叠。X只去重其他同侧进出项，不能取消真实留存新增流入。内部复用既不是I也不是ER。若实际仅一混合废物出口，只用一张Waste卡及各池独立W子账，不重复废物总量。 原生限定: 生产混合，在木材厂. 原生限定: 木板 / 木条. 木材厂生产接口的完整木板/木条托盘，不是维修木板、钉、塑料托盘或光伏安装专用身份。声明真实树种、湿质量、内含部件及相容上游供方。不假定寿命或固定托盘计数质量转换。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_pack。

- 选定流：木质托盘 `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_pack
- 来源：ilcd-attributional-2010

###### 木制运输托盘 (`pallet_charge`)

本卡只承载同一真实包材的一次应归属上游/服务负荷，与六腿实物账和真实owner链接；不是I之外新增实物流入或采购。仅未用/未分配期末charge结转，已为原批组执行的服务即使FG留库仍保留。不设固定复用次数或寿命。 原生限定: 生产混合，在木材厂. 原生限定: 木板 / 木条. 木材厂生产接口的完整木板/木条托盘，不是维修木板、钉、塑料托盘或光伏安装专用身份。声明真实树种、湿质量、内含部件及相容上游供方。不假定寿命或固定托盘计数质量转换。 经calc_raw及calc_service；N_i=A_h_i后引用calc_quotient唯一x_i；cp_pack。不再相除或增加实物采购。

- 选定流：木质托盘 `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_pack
- 来源：ilcd-attributional-2010

###### 废弃瓦楞滑雪板运输纸箱处理服务 (`carton_w_treatment`)

仅为此唯一链接真实废物出口的实际供方处理服务。采集真实受纳作业、原生广延服务单位和有据活动转换。一真实混合出口只配一个供方，来源池W不构成另一总量。现场处理须采全部真实原子进出；无自动回收/能源信用，也不扣普通制造废物负荷。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_service；N_i=A_h_i后引用calc_quotient唯一x_i；cp_waste_packaging。不再相除或增加实物采购。

- 选定流：废弃瓦楞滑雪板运输纸箱处理服务
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_waste_packaging。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_waste_packaging
- 来源：ilcd-attributional-2010

###### 废弃聚乙烯滑雪板套膜处理服务 (`film_w_treatment`)

仅为此唯一链接真实废物出口的实际供方处理服务。采集真实受纳作业、原生广延服务单位和有据活动转换。一真实混合出口只配一个供方，来源池W不构成另一总量。现场处理须采全部真实原子进出；无自动回收/能源信用，也不扣普通制造废物负荷。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_service；N_i=A_h_i后引用calc_quotient唯一x_i；cp_waste_packaging。不再相除或增加实物采购。

- 选定流：废弃聚乙烯滑雪板套膜处理服务
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_waste_packaging。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_waste_packaging
- 来源：ilcd-attributional-2010

###### 废弃木制运输托盘处理服务 (`pallet_w_treatment`)

仅为此唯一链接真实废物出口的实际供方处理服务。采集真实受纳作业、原生广延服务单位和有据活动转换。一真实混合出口只配一个供方，来源池W不构成另一总量。现场处理须采全部真实原子进出；无自动回收/能源信用，也不扣普通制造废物负荷。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_service；N_i=A_h_i后引用calc_quotient唯一x_i；cp_waste_packaging。不再相除或增加实物采购。

- 选定流：废弃木制运输托盘处理服务
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_waste_packaging。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_waste_packaging
- 来源：ilcd-attributional-2010

###### 滑雪板运输混合包装废物处理服务 (`mixed_packaging_waste_treatment`)

仅为此唯一链接真实废物出口的实际供方处理服务。采集真实受纳作业、原生广延服务单位和有据活动转换。一真实混合出口只配一个供方，来源池W不构成另一总量。现场处理须采全部真实原子进出；无自动回收/能源信用，也不扣普通制造废物负荷。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_service；N_i=A_h_i后引用calc_quotient唯一x_i；cp_waste_packaging。不再相除或增加实物采购。

- 选定流：滑雪板运输混合包装废物处理服务
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_waste_packaging。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_waste_packaging
- 来源：ilcd-attributional-2010

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 瓦楞滑雪板运输纸箱 (`carton_s`)

该一种真实瓦楞滑雪板运输纸箱池按实际条件采集毛实物发运外出，记录完整湿态实物V_carton_S，不是库存修正消耗、所分服务或经济份额。P为存量事件而非采购。完整保留期初/期末空置、附着WIP、附着FG和可复用状态。供方包含但无单独发票的入流仍需实测。整件含实际水/部件一次，组件桥须不重叠。X只去重其他同侧进出项，不能取消真实留存新增流入。内部复用既不是I也不是ER。若实际仅一混合废物出口，只用一张Waste卡及各池独立W子账，不重复废物总量。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_pack。

- 选定流：瓦楞滑雪板运输纸箱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_pack
- 来源：ilcd-attributional-2010

###### 瓦楞滑雪板运输纸箱 (`carton_eo`)

该一种真实瓦楞滑雪板运输纸箱池按实际条件采集向外退回，记录完整湿态实物V_carton_EO，不是库存修正消耗、所分服务或经济份额。P为存量事件而非采购。完整保留期初/期末空置、附着WIP、附着FG和可复用状态。供方包含但无单独发票的入流仍需实测。整件含实际水/部件一次，组件桥须不重叠。X只去重其他同侧进出项，不能取消真实留存新增流入。内部复用既不是I也不是ER。若实际仅一混合废物出口，只用一张Waste卡及各池独立W子账，不重复废物总量。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_pack。

- 选定流：瓦楞滑雪板运输纸箱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_pack
- 来源：ilcd-attributional-2010

###### 聚乙烯滑雪板套膜 (`film_s`)

该一种真实聚乙烯滑雪板套膜池按实际条件采集毛实物发运外出，记录完整湿态实物V_film_S，不是库存修正消耗、所分服务或经济份额。P为存量事件而非采购。完整保留期初/期末空置、附着WIP、附着FG和可复用状态。供方包含但无单独发票的入流仍需实测。整件含实际水/部件一次，组件桥须不重叠。X只去重其他同侧进出项，不能取消真实留存新增流入。内部复用既不是I也不是ER。若实际仅一混合废物出口，只用一张Waste卡及各池独立W子账，不重复废物总量。 原生限定: 生产混合，在工厂. CAS 9002-88-4聚乙烯薄膜，用于一个真实套膜/缠膜池；不强加固定支化结构或制膜路线。原生说明把PET与PE作比较，不允许将PET套膜识别为PE。整份供应薄膜及其内含助剂只采购一次。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_pack。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_pack
- 来源：ilcd-attributional-2010

###### 聚乙烯滑雪板套膜 (`film_eo`)

该一种真实聚乙烯滑雪板套膜池按实际条件采集向外退回，记录完整湿态实物V_film_EO，不是库存修正消耗、所分服务或经济份额。P为存量事件而非采购。完整保留期初/期末空置、附着WIP、附着FG和可复用状态。供方包含但无单独发票的入流仍需实测。整件含实际水/部件一次，组件桥须不重叠。X只去重其他同侧进出项，不能取消真实留存新增流入。内部复用既不是I也不是ER。若实际仅一混合废物出口，只用一张Waste卡及各池独立W子账，不重复废物总量。 原生限定: 生产混合，在工厂. CAS 9002-88-4聚乙烯薄膜，用于一个真实套膜/缠膜池；不强加固定支化结构或制膜路线。原生说明把PET与PE作比较，不允许将PET套膜识别为PE。整份供应薄膜及其内含助剂只采购一次。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_pack。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_pack
- 来源：ilcd-attributional-2010

###### 木制运输托盘 (`pallet_s`)

该一种真实木制运输托盘池按实际条件采集毛实物发运外出，记录完整湿态实物V_pallet_S，不是库存修正消耗、所分服务或经济份额。P为存量事件而非采购。完整保留期初/期末空置、附着WIP、附着FG和可复用状态。供方包含但无单独发票的入流仍需实测。整件含实际水/部件一次，组件桥须不重叠。X只去重其他同侧进出项，不能取消真实留存新增流入。内部复用既不是I也不是ER。若实际仅一混合废物出口，只用一张Waste卡及各池独立W子账，不重复废物总量。 原生限定: 生产混合，在木材厂. 原生限定: 木板 / 木条. 木材厂生产接口的完整木板/木条托盘，不是维修木板、钉、塑料托盘或光伏安装专用身份。声明真实树种、湿质量、内含部件及相容上游供方。不假定寿命或固定托盘计数质量转换。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_pack。

- 选定流：木质托盘 `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_pack
- 来源：ilcd-attributional-2010

###### 木制运输托盘 (`pallet_eo`)

该一种真实木制运输托盘池按实际条件采集向外退回，记录完整湿态实物V_pallet_EO，不是库存修正消耗、所分服务或经济份额。P为存量事件而非采购。完整保留期初/期末空置、附着WIP、附着FG和可复用状态。供方包含但无单独发票的入流仍需实测。整件含实际水/部件一次，组件桥须不重叠。X只去重其他同侧进出项，不能取消真实留存新增流入。内部复用既不是I也不是ER。若实际仅一混合废物出口，只用一张Waste卡及各池独立W子账，不重复废物总量。 原生限定: 生产混合，在木材厂. 原生限定: 木板 / 木条. 木材厂生产接口的完整木板/木条托盘，不是维修木板、钉、塑料托盘或光伏安装专用身份。声明真实树种、湿质量、内含部件及相容上游供方。不假定寿命或固定托盘计数质量转换。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_pack。

- 选定流：木质托盘 `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_pack
- 来源：ilcd-attributional-2010

##### 废物流

###### 废弃瓦楞滑雪板运输纸箱 (`carton_w`)

该一种真实瓦楞滑雪板运输纸箱池按实际条件采集实际废弃出口，记录完整湿态实物V_carton_W，不是库存修正消耗、所分服务或经济份额。P为存量事件而非采购。完整保留期初/期末空置、附着WIP、附着FG和可复用状态。供方包含但无单独发票的入流仍需实测。整件含实际水/部件一次，组件桥须不重叠。X只去重其他同侧进出项，不能取消真实留存新增流入。内部复用既不是I也不是ER。若实际仅一混合废物出口，只用一张Waste卡及各池独立W子账，不重复废物总量。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_pack。

- 选定流：废弃瓦楞滑雪板运输纸箱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_pack
- 来源：ilcd-attributional-2010

###### 废弃聚乙烯滑雪板套膜 (`film_w`)

该一种真实聚乙烯滑雪板套膜池按实际条件采集实际废弃出口，记录完整湿态实物V_film_W，不是库存修正消耗、所分服务或经济份额。P为存量事件而非采购。完整保留期初/期末空置、附着WIP、附着FG和可复用状态。供方包含但无单独发票的入流仍需实测。整件含实际水/部件一次，组件桥须不重叠。X只去重其他同侧进出项，不能取消真实留存新增流入。内部复用既不是I也不是ER。若实际仅一混合废物出口，只用一张Waste卡及各池独立W子账，不重复废物总量。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_pack。

- 选定流：废弃聚乙烯滑雪板套膜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_pack
- 来源：ilcd-attributional-2010

###### 废弃木制运输托盘 (`pallet_w`)

该一种真实木制运输托盘池按实际条件采集实际废弃出口，记录完整湿态实物V_pallet_W，不是库存修正消耗、所分服务或经济份额。P为存量事件而非采购。完整保留期初/期末空置、附着WIP、附着FG和可复用状态。供方包含但无单独发票的入流仍需实测。整件含实际水/部件一次，组件桥须不重叠。X只去重其他同侧进出项，不能取消真实留存新增流入。内部复用既不是I也不是ER。若实际仅一混合废物出口，只用一张Waste卡及各池独立W子账，不重复废物总量。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_pack。

- 选定流：废弃木制运输托盘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_pack
- 来源：ilcd-attributional-2010

###### 滑雪板运输混合包装废物 (`mixed_packaging_waste`)

仅当真实废弃纸箱/PE膜/木包材共用一个实物混合出口时适用。实测该真实完整湿流及各不重叠材料池W贡献，不叠加总量和来源分量。此时各池W卡仅披露来源账事件，不代表独立外部出口。只适用一次实际处理/供方owner；只有真实分出口才启用各独立出口卡/供方。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_pack。

- 选定流：滑雪板运输混合包装废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_pack
- 来源：ilcd-attributional-2010

##### 基本流

### 过程：资产部件流体及实际服务 (`assets`)

全部卡片继承完整参考配置、真实适用条件及第4/5/7/8/9节。条件缺席须有证据，信息缺失不是零。实际已发生作业即使许可、试验或验收失败仍保留真实物流及负荷。

#### 输入

##### 产品流

###### 电热滑雪板压机 (`press_new`)

该一种制品或流体按实际采集new收存/拆出。完整实物质量/体积与期初/期末在装/仓储湿存量独立于当期服务负荷。整机/整件已含部件/充液不二次投入，独立真实新增部件/流体即使留在期末仍保留入流。明确新旧历史、试验和去向。已发生未获准/失败作业仍保留全部物流/负荷；许可和后验决定持续合格。不设固定资产寿命或每kg一整台。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_assets。

- 选定流：电热滑雪板压机
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assets
- 来源：wagner-press; ilcd-attributional-2010

###### 电热滑雪板压机 (`press_used`)

该一种制品或流体按实际采集used收存/拆出。完整实物质量/体积与期初/期末在装/仓储湿存量独立于当期服务负荷。整机/整件已含部件/充液不二次投入，独立真实新增部件/流体即使留在期末仍保留入流。明确新旧历史、试验和去向。已发生未获准/失败作业仍保留全部物流/负荷；许可和后验决定持续合格。不设固定资产寿命或每kg一整台。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_assets。

- 选定流：电热滑雪板压机
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assets
- 来源：wagner-press; ilcd-attributional-2010

###### 电热滑雪板压机 (`press_service`)

仅为与真实实物、使用强度及原批组链接的实测应归属资本/维修/耗材服务负荷，不是新增实物接收或采购。先专属服务，再因果时长/强度及有据剩余分配。仅结转未用/未分配charge，不扣已为留库FG执行的服务。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_service；N_i=A_h_i后引用calc_quotient唯一x_i；cp_assets。不再相除或增加实物采购。

- 选定流：电热滑雪板压机
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assets
- 来源：ilcd-attributional-2010

###### 钢制滑雪板压合盒 (`cassette_new`)

该一种制品或流体按实际采集new收存/拆出。完整实物质量/体积与期初/期末在装/仓储湿存量独立于当期服务负荷。整机/整件已含部件/充液不二次投入，独立真实新增部件/流体即使留在期末仍保留入流。明确新旧历史、试验和去向。已发生未获准/失败作业仍保留全部物流/负荷；许可和后验决定持续合格。不设固定资产寿命或每kg一整台。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_assets。

- 选定流：钢制滑雪板压合盒
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assets
- 来源：wagner-press; ilcd-attributional-2010

###### 钢制滑雪板压合盒 (`cassette_used`)

该一种制品或流体按实际采集used收存/拆出。完整实物质量/体积与期初/期末在装/仓储湿存量独立于当期服务负荷。整机/整件已含部件/充液不二次投入，独立真实新增部件/流体即使留在期末仍保留入流。明确新旧历史、试验和去向。已发生未获准/失败作业仍保留全部物流/负荷；许可和后验决定持续合格。不设固定资产寿命或每kg一整台。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_assets。

- 选定流：钢制滑雪板压合盒
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assets
- 来源：wagner-press; ilcd-attributional-2010

###### 钢制滑雪板压合盒 (`cassette_service`)

仅为与真实实物、使用强度及原批组链接的实测应归属资本/维修/耗材服务负荷，不是新增实物接收或采购。先专属服务，再因果时长/强度及有据剩余分配。仅结转未用/未分配charge，不扣已为留库FG执行的服务。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_service；N_i=A_h_i后引用calc_quotient唯一x_i；cp_assets。不再相除或增加实物采购。

- 选定流：钢制滑雪板压合盒
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assets
- 来源：ilcd-attributional-2010

###### 滑雪板压机橡胶气囊 (`airbag_new`)

该一种制品或流体按实际采集new收存/拆出。完整实物质量/体积与期初/期末在装/仓储湿存量独立于当期服务负荷。整机/整件已含部件/充液不二次投入，独立真实新增部件/流体即使留在期末仍保留入流。明确新旧历史、试验和去向。已发生未获准/失败作业仍保留全部物流/负荷；许可和后验决定持续合格。不设固定资产寿命或每kg一整台。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_assets。

- 选定流：滑雪板压机橡胶气囊
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assets
- 来源：wagner-press; ilcd-attributional-2010

###### 滑雪板压机橡胶气囊 (`airbag_used`)

该一种制品或流体按实际采集used收存/拆出。完整实物质量/体积与期初/期末在装/仓储湿存量独立于当期服务负荷。整机/整件已含部件/充液不二次投入，独立真实新增部件/流体即使留在期末仍保留入流。明确新旧历史、试验和去向。已发生未获准/失败作业仍保留全部物流/负荷；许可和后验决定持续合格。不设固定资产寿命或每kg一整台。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_assets。

- 选定流：滑雪板压机橡胶气囊
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assets
- 来源：wagner-press; ilcd-attributional-2010

###### 滑雪板压机橡胶气囊 (`airbag_service`)

仅为与真实实物、使用强度及原批组链接的实测应归属资本/维修/耗材服务负荷，不是新增实物接收或采购。先专属服务，再因果时长/强度及有据剩余分配。仅结转未用/未分配charge，不扣已为留库FG执行的服务。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_service；N_i=A_h_i后引用calc_quotient唯一x_i；cp_assets。不再相除或增加实物采购。

- 选定流：滑雪板压机橡胶气囊
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assets
- 来源：ilcd-attributional-2010

###### 锯材托盘维修木板 (`repair_plank_new`)

该一种制品或流体按实际采集new收存/拆出。完整实物质量/体积与期初/期末在装/仓储湿存量独立于当期服务负荷。整机/整件已含部件/充液不二次投入，独立真实新增部件/流体即使留在期末仍保留入流。明确新旧历史、试验和去向。已发生未获准/失败作业仍保留全部物流/负荷；许可和后验决定持续合格。不设固定资产寿命或每kg一整台。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_assets。

- 选定流：锯材托盘维修木板
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assets
- 来源：wagner-press; ilcd-attributional-2010

###### 锯材托盘维修木板 (`repair_plank_used`)

该一种制品或流体按实际采集used收存/拆出。完整实物质量/体积与期初/期末在装/仓储湿存量独立于当期服务负荷。整机/整件已含部件/充液不二次投入，独立真实新增部件/流体即使留在期末仍保留入流。明确新旧历史、试验和去向。已发生未获准/失败作业仍保留全部物流/负荷；许可和后验决定持续合格。不设固定资产寿命或每kg一整台。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_assets。

- 选定流：锯材托盘维修木板
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assets
- 来源：wagner-press; ilcd-attributional-2010

###### 锯材托盘维修木板 (`repair_plank_service`)

仅为与真实实物、使用强度及原批组链接的实测应归属资本/维修/耗材服务负荷，不是新增实物接收或采购。先专属服务，再因果时长/强度及有据剩余分配。仅结转未用/未分配charge，不扣已为留库FG执行的服务。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_service；N_i=A_h_i后引用calc_quotient唯一x_i；cp_assets。不再相除或增加实物采购。

- 选定流：锯材托盘维修木板
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assets
- 来源：ilcd-attributional-2010

###### 钢制托盘维修钉 (`repair_nail_new`)

该一种制品或流体按实际采集new收存/拆出。完整实物质量/体积与期初/期末在装/仓储湿存量独立于当期服务负荷。整机/整件已含部件/充液不二次投入，独立真实新增部件/流体即使留在期末仍保留入流。明确新旧历史、试验和去向。已发生未获准/失败作业仍保留全部物流/负荷；许可和后验决定持续合格。不设固定资产寿命或每kg一整台。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_assets。

- 选定流：钢制托盘维修钉
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assets
- 来源：wagner-press; ilcd-attributional-2010

###### 钢制托盘维修钉 (`repair_nail_used`)

该一种制品或流体按实际采集used收存/拆出。完整实物质量/体积与期初/期末在装/仓储湿存量独立于当期服务负荷。整机/整件已含部件/充液不二次投入，独立真实新增部件/流体即使留在期末仍保留入流。明确新旧历史、试验和去向。已发生未获准/失败作业仍保留全部物流/负荷；许可和后验决定持续合格。不设固定资产寿命或每kg一整台。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_assets。

- 选定流：钢制托盘维修钉
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assets
- 来源：wagner-press; ilcd-attributional-2010

###### 钢制托盘维修钉 (`repair_nail_service`)

仅为与真实实物、使用强度及原批组链接的实测应归属资本/维修/耗材服务负荷，不是新增实物接收或采购。先专属服务，再因果时长/强度及有据剩余分配。仅结转未用/未分配charge，不扣已为留库FG执行的服务。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_service；N_i=A_h_i后引用calc_quotient唯一x_i；cp_assets。不再相除或增加实物采购。

- 选定流：钢制托盘维修钉
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assets
- 来源：ilcd-attributional-2010

###### 液压流体补加 (`hydraulic_fill_new`)

该一种制品或流体按实际采集new收存/拆出。完整实物质量/体积与期初/期末在装/仓储湿存量独立于当期服务负荷。整机/整件已含部件/充液不二次投入，独立真实新增部件/流体即使留在期末仍保留入流。明确新旧历史、试验和去向。已发生未获准/失败作业仍保留全部物流/负荷；许可和后验决定持续合格。不设固定资产寿命或每kg一整台。 仅为液压传动/润滑/传热的整份液压流体制剂，矿物或合成基础油加实际助剂。原生参考为体积/m3，须保留，并独立测该流体实际温度密度用于kg物理闭合。不套水密度，不替代润滑脂或冷却液；初始内含充液与独立补加分离。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_assets。

- 选定流：液压油 `30691a38-a947-4b41-991e-194f6c9aa88f`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：引用第8节唯一商结果x_i；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assets
- 来源：wagner-press; ilcd-attributional-2010

###### 液压流体补加 (`hydraulic_fill_used`)

该一种制品或流体按实际采集used收存/拆出。完整实物质量/体积与期初/期末在装/仓储湿存量独立于当期服务负荷。整机/整件已含部件/充液不二次投入，独立真实新增部件/流体即使留在期末仍保留入流。明确新旧历史、试验和去向。已发生未获准/失败作业仍保留全部物流/负荷；许可和后验决定持续合格。不设固定资产寿命或每kg一整台。 仅为液压传动/润滑/传热的整份液压流体制剂，矿物或合成基础油加实际助剂。原生参考为体积/m3，须保留，并独立测该流体实际温度密度用于kg物理闭合。不套水密度，不替代润滑脂或冷却液；初始内含充液与独立补加分离。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_assets。

- 选定流：液压油 `30691a38-a947-4b41-991e-194f6c9aa88f`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：引用第8节唯一商结果x_i；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assets
- 来源：wagner-press; ilcd-attributional-2010

###### 液压流体补加 (`hydraulic_fill_service`)

仅为与真实实物、使用强度及原批组链接的实测应归属资本/维修/耗材服务负荷，不是新增实物接收或采购。先专属服务，再因果时长/强度及有据剩余分配。仅结转未用/未分配charge，不扣已为留库FG执行的服务。 仅为液压传动/润滑/传热的整份液压流体制剂，矿物或合成基础油加实际助剂。原生参考为体积/m3，须保留，并独立测该流体实际温度密度用于kg物理闭合。不套水密度，不替代润滑脂或冷却液；初始内含充液与独立补加分离。 经calc_raw及calc_service；N_i=A_h_i后引用calc_quotient唯一x_i；cp_assets。不再相除或增加实物采购。

- 选定流：液压油 `30691a38-a947-4b41-991e-194f6c9aa88f`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：引用第8节唯一商结果x_i；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assets
- 来源：ilcd-attributional-2010

###### 配制润滑脂 (`grease_new`)

该一种制品或流体按实际采集new收存/拆出。完整实物质量/体积与期初/期末在装/仓储湿存量独立于当期服务负荷。整机/整件已含部件/充液不二次投入，独立真实新增部件/流体即使留在期末仍保留入流。明确新旧历史、试验和去向。已发生未获准/失败作业仍保留全部物流/负荷；许可和后验决定持续合格。不设固定资产寿命或每kg一整台。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_assets。

- 选定流：配制润滑脂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assets
- 来源：wagner-press; ilcd-attributional-2010

###### 配制润滑脂 (`grease_used`)

该一种制品或流体按实际采集used收存/拆出。完整实物质量/体积与期初/期末在装/仓储湿存量独立于当期服务负荷。整机/整件已含部件/充液不二次投入，独立真实新增部件/流体即使留在期末仍保留入流。明确新旧历史、试验和去向。已发生未获准/失败作业仍保留全部物流/负荷；许可和后验决定持续合格。不设固定资产寿命或每kg一整台。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_assets。

- 选定流：配制润滑脂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assets
- 来源：wagner-press; ilcd-attributional-2010

###### 配制润滑脂 (`grease_service`)

仅为与真实实物、使用强度及原批组链接的实测应归属资本/维修/耗材服务负荷，不是新增实物接收或采购。先专属服务，再因果时长/强度及有据剩余分配。仅结转未用/未分配charge，不扣已为留库FG执行的服务。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_service；N_i=A_h_i后引用calc_quotient唯一x_i；cp_assets。不再相除或增加实物采购。

- 选定流：配制润滑脂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assets
- 来源：ilcd-attributional-2010

###### 收尘滤芯 (`filter_new`)

该一种制品或流体按实际采集new收存/拆出。完整实物质量/体积与期初/期末在装/仓储湿存量独立于当期服务负荷。整机/整件已含部件/充液不二次投入，独立真实新增部件/流体即使留在期末仍保留入流。明确新旧历史、试验和去向。已发生未获准/失败作业仍保留全部物流/负荷；许可和后验决定持续合格。不设固定资产寿命或每kg一整台。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_assets。

- 选定流：收尘滤芯
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assets
- 来源：wagner-press; ilcd-attributional-2010

###### 收尘滤芯 (`filter_used`)

该一种制品或流体按实际采集used收存/拆出。完整实物质量/体积与期初/期末在装/仓储湿存量独立于当期服务负荷。整机/整件已含部件/充液不二次投入，独立真实新增部件/流体即使留在期末仍保留入流。明确新旧历史、试验和去向。已发生未获准/失败作业仍保留全部物流/负荷；许可和后验决定持续合格。不设固定资产寿命或每kg一整台。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_assets。

- 选定流：收尘滤芯
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assets
- 来源：wagner-press; ilcd-attributional-2010

###### 收尘滤芯 (`filter_service`)

仅为与真实实物、使用强度及原批组链接的实测应归属资本/维修/耗材服务负荷，不是新增实物接收或采购。先专属服务，再因果时长/强度及有据剩余分配。仅结转未用/未分配charge，不扣已为留库FG执行的服务。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_service；N_i=A_h_i后引用calc_quotient唯一x_i；cp_assets。不再相除或增加实物采购。

- 选定流：收尘滤芯
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assets
- 来源：ilcd-attributional-2010

###### 经处理的资产维修供水 (`assets_water_in`)

仅记录资产/部件/托盘处理或维修中真实独立经处理Product供水输入或独立排出的Waste废水出口，以本卡方向/type为准；不是直接自然取水或基本流水排放。真实可复用水Product退回或基本流排放须在使用前另设原子卡及真实受纳/热状态。不虚构冷却液/蒸汽锅炉。自然蒸气交换记气体账。X仅去重其他进出流重叠；真实新增水入流与完整湿态期末制品/部件质量同时保留。湿态整件收货已含水只计一次。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_physical_assets。

- 选定流：经处理的资产维修供水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_physical_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_physical_assets
- 来源：ilcd-attributional-2010

###### 拆出电热滑雪板压机处理服务 (`press_removed_treatment`)

仅为此唯一链接真实废物出口的实际供方处理服务。采集真实受纳作业、原生广延服务单位和有据活动转换。一真实混合出口只配一个供方，来源池W不构成另一总量。现场处理须采全部真实原子进出；无自动回收/能源信用，也不扣普通制造废物负荷。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_service；N_i=A_h_i后引用calc_quotient唯一x_i；cp_waste_assets。不再相除或增加实物采购。

- 选定流：拆出电热滑雪板压机处理服务
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_waste_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_waste_assets
- 来源：ilcd-attributional-2010

###### 拆出钢制滑雪板压合盒处理服务 (`cassette_removed_treatment`)

仅为此唯一链接真实废物出口的实际供方处理服务。采集真实受纳作业、原生广延服务单位和有据活动转换。一真实混合出口只配一个供方，来源池W不构成另一总量。现场处理须采全部真实原子进出；无自动回收/能源信用，也不扣普通制造废物负荷。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_service；N_i=A_h_i后引用calc_quotient唯一x_i；cp_waste_assets。不再相除或增加实物采购。

- 选定流：拆出钢制滑雪板压合盒处理服务
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_waste_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_waste_assets
- 来源：ilcd-attributional-2010

###### 拆出滑雪板压机橡胶气囊处理服务 (`airbag_removed_treatment`)

仅为此唯一链接真实废物出口的实际供方处理服务。采集真实受纳作业、原生广延服务单位和有据活动转换。一真实混合出口只配一个供方，来源池W不构成另一总量。现场处理须采全部真实原子进出；无自动回收/能源信用，也不扣普通制造废物负荷。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_service；N_i=A_h_i后引用calc_quotient唯一x_i；cp_waste_assets。不再相除或增加实物采购。

- 选定流：拆出滑雪板压机橡胶气囊处理服务
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_waste_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_waste_assets
- 来源：ilcd-attributional-2010

###### 拆出锯材托盘维修木板处理服务 (`repair_plank_removed_treatment`)

仅为此唯一链接真实废物出口的实际供方处理服务。采集真实受纳作业、原生广延服务单位和有据活动转换。一真实混合出口只配一个供方，来源池W不构成另一总量。现场处理须采全部真实原子进出；无自动回收/能源信用，也不扣普通制造废物负荷。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_service；N_i=A_h_i后引用calc_quotient唯一x_i；cp_waste_assets。不再相除或增加实物采购。

- 选定流：拆出锯材托盘维修木板处理服务
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_waste_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_waste_assets
- 来源：ilcd-attributional-2010

###### 拆出钢制托盘维修钉处理服务 (`repair_nail_removed_treatment`)

仅为此唯一链接真实废物出口的实际供方处理服务。采集真实受纳作业、原生广延服务单位和有据活动转换。一真实混合出口只配一个供方，来源池W不构成另一总量。现场处理须采全部真实原子进出；无自动回收/能源信用，也不扣普通制造废物负荷。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_service；N_i=A_h_i后引用calc_quotient唯一x_i；cp_waste_assets。不再相除或增加实物采购。

- 选定流：拆出钢制托盘维修钉处理服务
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_waste_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_waste_assets
- 来源：ilcd-attributional-2010

###### 拆出液压流体补加处理服务 (`hydraulic_fill_removed_treatment`)

仅为此唯一链接真实废物出口的实际供方处理服务。采集真实受纳作业、原生广延服务单位和有据活动转换。一真实混合出口只配一个供方，来源池W不构成另一总量。现场处理须采全部真实原子进出；无自动回收/能源信用，也不扣普通制造废物负荷。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_service；N_i=A_h_i后引用calc_quotient唯一x_i；cp_waste_assets。不再相除或增加实物采购。

- 选定流：拆出液压流体补加处理服务
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_waste_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_waste_assets
- 来源：ilcd-attributional-2010

###### 拆出配制润滑脂处理服务 (`grease_removed_treatment`)

仅为此唯一链接真实废物出口的实际供方处理服务。采集真实受纳作业、原生广延服务单位和有据活动转换。一真实混合出口只配一个供方，来源池W不构成另一总量。现场处理须采全部真实原子进出；无自动回收/能源信用，也不扣普通制造废物负荷。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_service；N_i=A_h_i后引用calc_quotient唯一x_i；cp_waste_assets。不再相除或增加实物采购。

- 选定流：拆出配制润滑脂处理服务
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_waste_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_waste_assets
- 来源：ilcd-attributional-2010

###### 拆出收尘滤芯处理服务 (`filter_removed_treatment`)

仅为此唯一链接真实废物出口的实际供方处理服务。采集真实受纳作业、原生广延服务单位和有据活动转换。一真实混合出口只配一个供方，来源池W不构成另一总量。现场处理须采全部真实原子进出；无自动回收/能源信用，也不扣普通制造废物负荷。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_service；N_i=A_h_i后引用calc_quotient唯一x_i；cp_waste_assets。不再相除或增加实物采购。

- 选定流：拆出收尘滤芯处理服务
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_waste_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_waste_assets
- 来源：ilcd-attributional-2010

###### 资产维修废水处理服务 (`assets_water_out_treatment`)

仅为此唯一链接真实废物出口的实际供方处理服务。采集真实受纳作业、原生广延服务单位和有据活动转换。一真实混合出口只配一个供方，来源池W不构成另一总量。现场处理须采全部真实原子进出；无自动回收/能源信用，也不扣普通制造废物负荷。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 经calc_raw及calc_service；N_i=A_h_i后引用calc_quotient唯一x_i；cp_waste_assets。不再相除或增加实物采购。

- 选定流：资产维修废水处理服务
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_waste_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_waste_assets
- 来源：ilcd-attributional-2010

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 对外退回电热滑雪板压机 (`press_returned`)

仅为实际向外退回仍可复用/经验证合格的Product制品或流体，不是Waste拆出。匹配真实owner、新旧状态、接收/退回身份及资格。记录完整毛实物V和完整湿存量，不自动新增采购、服务信用或转移负荷。该一种制品或流体按实际采集returned收存/拆出。完整实物质量/体积与期初/期末在装/仓储湿存量独立于当期服务负荷。整机/整件已含部件/充液不二次投入，独立真实新增部件/流体即使留在期末仍保留入流。明确新旧历史、试验和去向。已发生未获准/失败作业仍保留全部物流/负荷；许可和后验决定持续合格。不设固定资产寿命或每kg一整台。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_assets。

- 选定流：对外退回电热滑雪板压机
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assets
- 来源：wagner-press; ilcd-attributional-2010

###### 对外退回钢制滑雪板压合盒 (`cassette_returned`)

仅为实际向外退回仍可复用/经验证合格的Product制品或流体，不是Waste拆出。匹配真实owner、新旧状态、接收/退回身份及资格。记录完整毛实物V和完整湿存量，不自动新增采购、服务信用或转移负荷。该一种制品或流体按实际采集returned收存/拆出。完整实物质量/体积与期初/期末在装/仓储湿存量独立于当期服务负荷。整机/整件已含部件/充液不二次投入，独立真实新增部件/流体即使留在期末仍保留入流。明确新旧历史、试验和去向。已发生未获准/失败作业仍保留全部物流/负荷；许可和后验决定持续合格。不设固定资产寿命或每kg一整台。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_assets。

- 选定流：对外退回钢制滑雪板压合盒
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assets
- 来源：wagner-press; ilcd-attributional-2010

###### 对外退回滑雪板压机橡胶气囊 (`airbag_returned`)

仅为实际向外退回仍可复用/经验证合格的Product制品或流体，不是Waste拆出。匹配真实owner、新旧状态、接收/退回身份及资格。记录完整毛实物V和完整湿存量，不自动新增采购、服务信用或转移负荷。该一种制品或流体按实际采集returned收存/拆出。完整实物质量/体积与期初/期末在装/仓储湿存量独立于当期服务负荷。整机/整件已含部件/充液不二次投入，独立真实新增部件/流体即使留在期末仍保留入流。明确新旧历史、试验和去向。已发生未获准/失败作业仍保留全部物流/负荷；许可和后验决定持续合格。不设固定资产寿命或每kg一整台。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_assets。

- 选定流：对外退回滑雪板压机橡胶气囊
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assets
- 来源：wagner-press; ilcd-attributional-2010

###### 对外退回锯材托盘维修木板 (`repair_plank_returned`)

仅为实际向外退回仍可复用/经验证合格的Product制品或流体，不是Waste拆出。匹配真实owner、新旧状态、接收/退回身份及资格。记录完整毛实物V和完整湿存量，不自动新增采购、服务信用或转移负荷。该一种制品或流体按实际采集returned收存/拆出。完整实物质量/体积与期初/期末在装/仓储湿存量独立于当期服务负荷。整机/整件已含部件/充液不二次投入，独立真实新增部件/流体即使留在期末仍保留入流。明确新旧历史、试验和去向。已发生未获准/失败作业仍保留全部物流/负荷；许可和后验决定持续合格。不设固定资产寿命或每kg一整台。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_assets。

- 选定流：对外退回锯材托盘维修木板
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assets
- 来源：wagner-press; ilcd-attributional-2010

###### 对外退回钢制托盘维修钉 (`repair_nail_returned`)

仅为实际向外退回仍可复用/经验证合格的Product制品或流体，不是Waste拆出。匹配真实owner、新旧状态、接收/退回身份及资格。记录完整毛实物V和完整湿存量，不自动新增采购、服务信用或转移负荷。该一种制品或流体按实际采集returned收存/拆出。完整实物质量/体积与期初/期末在装/仓储湿存量独立于当期服务负荷。整机/整件已含部件/充液不二次投入，独立真实新增部件/流体即使留在期末仍保留入流。明确新旧历史、试验和去向。已发生未获准/失败作业仍保留全部物流/负荷；许可和后验决定持续合格。不设固定资产寿命或每kg一整台。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_assets。

- 选定流：对外退回钢制托盘维修钉
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assets
- 来源：wagner-press; ilcd-attributional-2010

###### 对外退回液压流体补加 (`hydraulic_fill_returned`)

仅为实际向外退回仍可复用/经验证合格的Product制品或流体，不是Waste拆出。匹配真实owner、新旧状态、接收/退回身份及资格。记录完整毛实物V和完整湿存量，不自动新增采购、服务信用或转移负荷。该一种制品或流体按实际采集returned收存/拆出。完整实物质量/体积与期初/期末在装/仓储湿存量独立于当期服务负荷。整机/整件已含部件/充液不二次投入，独立真实新增部件/流体即使留在期末仍保留入流。明确新旧历史、试验和去向。已发生未获准/失败作业仍保留全部物流/负荷；许可和后验决定持续合格。不设固定资产寿命或每kg一整台。 仅为液压传动/润滑/传热的整份液压流体制剂，矿物或合成基础油加实际助剂。原生参考为体积/m3，须保留，并独立测该流体实际温度密度用于kg物理闭合。不套水密度，不替代润滑脂或冷却液；初始内含充液与独立补加分离。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_assets。

- 选定流：液压油 `30691a38-a947-4b41-991e-194f6c9aa88f`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：引用第8节唯一商结果x_i；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assets
- 来源：wagner-press; ilcd-attributional-2010

###### 对外退回配制润滑脂 (`grease_returned`)

仅为实际向外退回仍可复用/经验证合格的Product制品或流体，不是Waste拆出。匹配真实owner、新旧状态、接收/退回身份及资格。记录完整毛实物V和完整湿存量，不自动新增采购、服务信用或转移负荷。该一种制品或流体按实际采集returned收存/拆出。完整实物质量/体积与期初/期末在装/仓储湿存量独立于当期服务负荷。整机/整件已含部件/充液不二次投入，独立真实新增部件/流体即使留在期末仍保留入流。明确新旧历史、试验和去向。已发生未获准/失败作业仍保留全部物流/负荷；许可和后验决定持续合格。不设固定资产寿命或每kg一整台。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_assets。

- 选定流：对外退回配制润滑脂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assets
- 来源：wagner-press; ilcd-attributional-2010

###### 对外退回收尘滤芯 (`filter_returned`)

仅为实际向外退回仍可复用/经验证合格的Product制品或流体，不是Waste拆出。匹配真实owner、新旧状态、接收/退回身份及资格。记录完整毛实物V和完整湿存量，不自动新增采购、服务信用或转移负荷。该一种制品或流体按实际采集returned收存/拆出。完整实物质量/体积与期初/期末在装/仓储湿存量独立于当期服务负荷。整机/整件已含部件/充液不二次投入，独立真实新增部件/流体即使留在期末仍保留入流。明确新旧历史、试验和去向。已发生未获准/失败作业仍保留全部物流/负荷；许可和后验决定持续合格。不设固定资产寿命或每kg一整台。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_assets。

- 选定流：对外退回收尘滤芯
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assets
- 来源：wagner-press; ilcd-attributional-2010

##### 废物流

###### 拆出电热滑雪板压机 (`press_removed`)

该一种制品或流体按实际采集removed收存/拆出。完整实物质量/体积与期初/期末在装/仓储湿存量独立于当期服务负荷。整机/整件已含部件/充液不二次投入，独立真实新增部件/流体即使留在期末仍保留入流。明确新旧历史、试验和去向。已发生未获准/失败作业仍保留全部物流/负荷；许可和后验决定持续合格。不设固定资产寿命或每kg一整台。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_assets。

- 选定流：拆出电热滑雪板压机
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assets
- 来源：wagner-press; ilcd-attributional-2010

###### 拆出钢制滑雪板压合盒 (`cassette_removed`)

该一种制品或流体按实际采集removed收存/拆出。完整实物质量/体积与期初/期末在装/仓储湿存量独立于当期服务负荷。整机/整件已含部件/充液不二次投入，独立真实新增部件/流体即使留在期末仍保留入流。明确新旧历史、试验和去向。已发生未获准/失败作业仍保留全部物流/负荷；许可和后验决定持续合格。不设固定资产寿命或每kg一整台。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_assets。

- 选定流：拆出钢制滑雪板压合盒
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assets
- 来源：wagner-press; ilcd-attributional-2010

###### 拆出滑雪板压机橡胶气囊 (`airbag_removed`)

该一种制品或流体按实际采集removed收存/拆出。完整实物质量/体积与期初/期末在装/仓储湿存量独立于当期服务负荷。整机/整件已含部件/充液不二次投入，独立真实新增部件/流体即使留在期末仍保留入流。明确新旧历史、试验和去向。已发生未获准/失败作业仍保留全部物流/负荷；许可和后验决定持续合格。不设固定资产寿命或每kg一整台。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_assets。

- 选定流：拆出滑雪板压机橡胶气囊
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assets
- 来源：wagner-press; ilcd-attributional-2010

###### 拆出锯材托盘维修木板 (`repair_plank_removed`)

该一种制品或流体按实际采集removed收存/拆出。完整实物质量/体积与期初/期末在装/仓储湿存量独立于当期服务负荷。整机/整件已含部件/充液不二次投入，独立真实新增部件/流体即使留在期末仍保留入流。明确新旧历史、试验和去向。已发生未获准/失败作业仍保留全部物流/负荷；许可和后验决定持续合格。不设固定资产寿命或每kg一整台。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_assets。

- 选定流：拆出锯材托盘维修木板
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assets
- 来源：wagner-press; ilcd-attributional-2010

###### 拆出钢制托盘维修钉 (`repair_nail_removed`)

该一种制品或流体按实际采集removed收存/拆出。完整实物质量/体积与期初/期末在装/仓储湿存量独立于当期服务负荷。整机/整件已含部件/充液不二次投入，独立真实新增部件/流体即使留在期末仍保留入流。明确新旧历史、试验和去向。已发生未获准/失败作业仍保留全部物流/负荷；许可和后验决定持续合格。不设固定资产寿命或每kg一整台。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_assets。

- 选定流：拆出钢制托盘维修钉
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assets
- 来源：wagner-press; ilcd-attributional-2010

###### 拆出液压流体补加 (`hydraulic_fill_removed`)

该一种制品或流体按实际采集removed收存/拆出。完整实物质量/体积与期初/期末在装/仓储湿存量独立于当期服务负荷。整机/整件已含部件/充液不二次投入，独立真实新增部件/流体即使留在期末仍保留入流。明确新旧历史、试验和去向。已发生未获准/失败作业仍保留全部物流/负荷；许可和后验决定持续合格。不设固定资产寿命或每kg一整台。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_assets。

- 选定流：拆出液压流体补加
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：引用第8节唯一商结果x_i；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assets
- 来源：wagner-press; ilcd-attributional-2010

###### 拆出配制润滑脂 (`grease_removed`)

该一种制品或流体按实际采集removed收存/拆出。完整实物质量/体积与期初/期末在装/仓储湿存量独立于当期服务负荷。整机/整件已含部件/充液不二次投入，独立真实新增部件/流体即使留在期末仍保留入流。明确新旧历史、试验和去向。已发生未获准/失败作业仍保留全部物流/负荷；许可和后验决定持续合格。不设固定资产寿命或每kg一整台。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_assets。

- 选定流：拆出配制润滑脂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assets
- 来源：wagner-press; ilcd-attributional-2010

###### 拆出收尘滤芯 (`filter_removed`)

该一种制品或流体按实际采集removed收存/拆出。完整实物质量/体积与期初/期末在装/仓储湿存量独立于当期服务负荷。整机/整件已含部件/充液不二次投入，独立真实新增部件/流体即使留在期末仍保留入流。明确新旧历史、试验和去向。已发生未获准/失败作业仍保留全部物流/负荷；许可和后验决定持续合格。不设固定资产寿命或每kg一整台。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_assets。

- 选定流：拆出收尘滤芯
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_assets
- 来源：wagner-press; ilcd-attributional-2010

###### 资产维修废水 (`assets_water_out`)

仅记录资产/部件/托盘处理或维修中真实独立经处理Product供水输入或独立排出的Waste废水出口，以本卡方向/type为准；不是直接自然取水或基本流水排放。真实可复用水Product退回或基本流排放须在使用前另设原子卡及真实受纳/热状态。不虚构冷却液/蒸汽锅炉。自然蒸气交换记气体账。X仅去重其他进出流重叠；真实新增水入流与完整湿态期末制品/部件质量同时保留。湿态整件收货已含水只计一次。 未绑定流UUID，仍为一个指定实物交换。依赖数值使用前须匹配真实供方/形态/路线/状态/介质/type。该辅助身份缺口本身不构成核心成品hold。 引用calc_quotient唯一x_i，本事件腿N_i=完整真实毛V_i；不对V_i扣库存或分配；cp_physical_assets。

- 选定流：资产维修废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节唯一商结果x_i；cp_physical_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_physical_assets
- 来源：ilcd-attributional-2010

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_hierarchy | each attributable exchange | 仅在需要分配的归因建模场景适用。先专属作业/虚拟细分及内含部件。对每个剩余交换证明其决定性物理因果及真实驱动；通用质量份额、压机双板数或经济份额均非自动。仅真正未解的共同过程剩余流才使用真实共同出门及实际出口状态的正当同期市场价值。记录价格时期、数量、全部共功能及守恒。不设固定比例或替代信用。 | ilcd-attributional-2010 |
| a_waste | failures samples residues and treatment | 普通制造废物、不合格、样品、出售或外部处理不移除制造或真实处理负荷。转移负荷须有真实独立其他批组/功能、正当分配/移交及恰一次向量转移。完整实物毛腿不变。一个真实混合出口只有一个供方owner，各独立来源池不是新增总量/供方。 | ilcd-attributional-2010 |
| a_service | assets packaging and observed H | 以原批组及因果时长/强度记录真实已履行服务。资产/新旧件/流体实物收存退废及完整湿存量与资本/维修/服务负荷分离，不设寿命或每kg整机。仅未用/未分配服务/charge可结转，已为留库FG执行服务不得扣。放行后作业需厂家/规格许可及真实后验/验收/去向以判断持续合格，失败不得删除真实负荷。 | ilcd-attributional-2010 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | finish | finished_ski | calibrated first-release record | serial; model; complete_configuration; net_mass; gross_mass; tare; moisture; calibration; actual_spec; cure_record; base_edge_bevel_wax_checks; first_release_id; Q; original_Q_H; H | 实际完工后逐完整未装固定器单板校准净称重，排除包装和固定器；核对唯一首次放行及真实规格验收。Q含首次放行留库FG一次；未知质量不编造。 | kg | 每真实事件/批次及计量区间 | 完整期初历史至批组及观测H | 真实门配置及供方 | 每参考流 | 原始证据；校准；真实身份/规格；完整逐流向量与湿存量桥；不确定性及去向；汇总引用calc_quotient唯一结果且不除原始记录 |
| cp_material_prep | prep | each supplied material and mix | receiving batch mix and per-flow stock record | row_id; whole_supplier_article; composition; supplied_state; lot; raw_unit; gross; tare; water; opening_raw; opening_WIP; opening_unassigned_nonWIP; each_inherited_vector; receipts; actual_consumption; already_net_flag; closing_raw; closing_WIP; closing_unassigned_nonWIP; losses; mixing_energy; provider_owner | 整份真实供货制剂/制品称量一次。现场配环氧须逐实际外购组分、混合能耗和损失采集；不重复计供应预浸料内树脂/纤维。逐流历史负荷向量独立于湿实物存量，含全部失败/闲置/清洗/返工及零产出作业。 | kg; original native unit | 每真实事件/批次及计量区间 | 完整期初历史至批组及观测H | 真实门配置及供方 | 每参考流 | 原始证据；校准；真实身份/规格；完整逐流向量与湿存量桥；不确定性及去向；汇总引用calc_quotient唯一结果且不除原始记录 |
| cp_material_laminate | laminate | each supplied material and mix | receiving batch mix and per-flow stock record | row_id; whole_supplier_article; composition; supplied_state; lot; raw_unit; gross; tare; water; opening_raw; opening_WIP; opening_unassigned_nonWIP; each_inherited_vector; receipts; actual_consumption; already_net_flag; closing_raw; closing_WIP; closing_unassigned_nonWIP; losses; mixing_energy; provider_owner | 整份真实供货制剂/制品称量一次。现场配环氧须逐实际外购组分、混合能耗和损失采集；不重复计供应预浸料内树脂/纤维。逐流历史负荷向量独立于湿实物存量，含全部失败/闲置/清洗/返工及零产出作业。 | kg; original native unit | 每真实事件/批次及计量区间 | 完整期初历史至批组及观测H | 真实门配置及供方 | 每参考流 | 原始证据；校准；真实身份/规格；完整逐流向量与湿存量桥；不确定性及去向；汇总引用calc_quotient唯一结果且不除原始记录 |
| cp_finish | finish | each finishing wax tool and residue | finishing operation and conformity record | row_id; actual_material; supplied_form; actual_units; tool_custody; wear; waxing; removed_fraction; species; tests; disposition; inherited_vector; stocks; actual_energy; permission | 采集带锯、轮廓、砂带/磨石/橡胶结合石/金刚石处理、蜡/红外/刷蜡及真实验收，不编温度、层数、蜡成分或磨耗。整混合物与组分账不重叠。 | kg; actual extensive unit | 每真实事件/批次及计量区间 | 完整期初历史至批组及观测H | 真实门配置及供方 | 每参考流 | 原始证据；校准；真实身份/规格；完整逐流向量与湿存量桥；不确定性及去向；汇总引用calc_quotient唯一结果且不除原始记录 |
| cp_utilities_prep | prep | each actual utility | meter and boundary record | row_id; original_unit; original_reading; rate_or_integral; time; meter; supply_voltage; actual_geography; period; provider_boundary; water_density_temperature; already_net; process; failure; start_stop; idle; cleanup; cohort; H | 采集未相除原始读数，电耗及电热只计一次，kWh转换一次。水/载体kg实物与能量分离。不照搬另一条路线锅炉/蒸汽/冷凝水。后续若真实用热载体，增实际载体质量及Product回水、实测热状态/焓及一次供方水能owner，不二次购热。 | MJ; kWh; kg; actual native unit | 每真实事件/批次及计量区间 | 完整期初历史至批组及观测H | 真实门配置及供方 | 每参考流 | 原始证据；校准；真实身份/规格；完整逐流向量与湿存量桥；不确定性及去向；汇总引用calc_quotient唯一结果且不除原始记录 |
| cp_utilities_laminate | laminate | each actual utility | meter and boundary record | row_id; original_unit; original_reading; rate_or_integral; time; meter; supply_voltage; actual_geography; period; provider_boundary; water_density_temperature; already_net; process; failure; start_stop; idle; cleanup; cohort; H | 采集未相除原始读数，电耗及电热只计一次，kWh转换一次。水/载体kg实物与能量分离。不照搬另一条路线锅炉/蒸汽/冷凝水。后续若真实用热载体，增实际载体质量及Product回水、实测热状态/焓及一次供方水能owner，不二次购热。 | MJ; kWh; kg; actual native unit | 每真实事件/批次及计量区间 | 完整期初历史至批组及观测H | 真实门配置及供方 | 每参考流 | 原始证据；校准；真实身份/规格；完整逐流向量与湿存量桥；不确定性及去向；汇总引用calc_quotient唯一结果且不除原始记录 |
| cp_utilities_finish | finish | each actual utility | meter and boundary record | row_id; original_unit; original_reading; rate_or_integral; time; meter; supply_voltage; actual_geography; period; provider_boundary; water_density_temperature; already_net; process; failure; start_stop; idle; cleanup; cohort; H | 采集未相除原始读数，电耗及电热只计一次，kWh转换一次。水/载体kg实物与能量分离。不照搬另一条路线锅炉/蒸汽/冷凝水。后续若真实用热载体，增实际载体质量及Product回水、实测热状态/焓及一次供方水能owner，不二次购热。 | MJ; kWh; kg; actual native unit | 每真实事件/批次及计量区间 | 完整期初历史至批组及观测H | 真实门配置及供方 | 每参考流 | 原始证据；校准；真实身份/规格；完整逐流向量与湿存量桥；不确定性及去向；汇总引用calc_quotient唯一结果且不除原始记录 |
| cp_utilities_service | service | each actual utility | meter and boundary record | row_id; original_unit; original_reading; rate_or_integral; time; meter; supply_voltage; actual_geography; period; provider_boundary; water_density_temperature; already_net; process; failure; start_stop; idle; cleanup; cohort; H | 采集未相除原始读数，电耗及电热只计一次，kWh转换一次。水/载体kg实物与能量分离。不照搬另一条路线锅炉/蒸汽/冷凝水。后续若真实用热载体，增实际载体质量及Product回水、实测热状态/焓及一次供方水能owner，不二次购热。 | MJ; kWh; kg; actual native unit | 每真实事件/批次及计量区间 | 完整期初历史至批组及观测H | 真实门配置及供方 | 每参考流 | 原始证据；校准；真实身份/规格；完整逐流向量与湿存量桥；不确定性及去向；汇总引用calc_quotient唯一结果且不除原始记录 |
| cp_physical_finish | finish | each real molecule and water state | independent species and wet physical gate record | row_id; physical_gate; inlet; outlet; wet_opening; wet_closing; CAS; phase; actual_species; concentration; rate; integrated_volume; temperature; pressure; measured_density; moisture; natural_adsorption; natural_desorption; reaction_water; free_water; actual_X_in; actual_X_out; overlap_other_inout; whole_article_bridge; independent_element_carbon_constraints | 独立测量物种/相态和湿质量/元素/碳/水约束；只积分真实速率并用该物质/状态密度。自然吸脱湿为真实流，不虚构维修许可。X仅去重其他同侧进出重叠，不取消留存真实新增流入。不叠空气总量和组分，不从总指标推分子。 | kg; original gas/liquid extensive unit | 每真实事件/批次及计量区间 | 完整期初历史至批组及观测H | 真实门配置及供方 | 每参考流 | 原始证据；校准；真实身份/规格；完整逐流向量与湿存量桥；不确定性及去向；汇总引用calc_quotient唯一结果且不除原始记录 |
| cp_physical_service | service | each real molecule and water state | independent species and wet physical gate record | row_id; physical_gate; inlet; outlet; wet_opening; wet_closing; CAS; phase; actual_species; concentration; rate; integrated_volume; temperature; pressure; measured_density; moisture; natural_adsorption; natural_desorption; reaction_water; free_water; actual_X_in; actual_X_out; overlap_other_inout; whole_article_bridge; independent_element_carbon_constraints | 独立测量物种/相态和湿质量/元素/碳/水约束；只积分真实速率并用该物质/状态密度。自然吸脱湿为真实流，不虚构维修许可。X仅去重其他同侧进出重叠，不取消留存真实新增流入。不叠空气总量和组分，不从总指标推分子。 | kg; original gas/liquid extensive unit | 每真实事件/批次及计量区间 | 完整期初历史至批组及观测H | 真实门配置及供方 | 每参考流 | 原始证据；校准；真实身份/规格；完整逐流向量与湿存量桥；不确定性及去向；汇总引用calc_quotient唯一结果且不除原始记录 |
| cp_physical_assets | assets | each real molecule and water state | independent species and wet physical gate record | row_id; physical_gate; inlet; outlet; wet_opening; wet_closing; CAS; phase; actual_species; concentration; rate; integrated_volume; temperature; pressure; measured_density; moisture; natural_adsorption; natural_desorption; reaction_water; free_water; actual_X_in; actual_X_out; overlap_other_inout; whole_article_bridge; independent_element_carbon_constraints | 独立测量物种/相态和湿质量/元素/碳/水约束；只积分真实速率并用该物质/状态密度。自然吸脱湿为真实流，不虚构维修许可。X仅去重其他同侧进出重叠，不取消留存真实新增流入。不叠空气总量和组分，不从总指标推分子。 | kg; original gas/liquid extensive unit | 每真实事件/批次及计量区间 | 完整期初历史至批组及观测H | 真实门配置及供方 | 每参考流 | 原始证据；校准；真实身份/规格；完整逐流向量与湿存量桥；不确定性及去向；汇总引用calc_quotient唯一结果且不除原始记录 |
| cp_service | service | original cohort custody and actual increments | serial service and shipment return record | serial; original_Q_H; H; historical_FG_vector; opening_FG; closing_FG; gross_G; gross_R; actual_original_delivery; D_rev_if_delivery_study; postwork_permission; actual_work; posttests; acceptance; disposition; actual_service; unused_charge; provider_owner | 原制造向量保留在首次放行批组。采观测H内实际服务，含留库FG、失败/未获准作业及真实保管腿。交付/复验不造新Q。成对内部交接合并抵消，不抵消真实外部毛腿。仅未用/未分配服务结转。 | kg; h; original native service unit | 每真实事件/批次及计量区间 | 完整期初历史至批组及观测H | 真实门配置及供方 | 每参考流 | 原始证据；校准；真实身份/规格；完整逐流向量与湿存量桥；不确定性及去向；汇总引用calc_quotient唯一结果且不除原始记录 |
| cp_pack | packaging | each carton film pallet P I ER S EO W and charge | per-pool six-event wet custody and owner record | pool_id; row_id; article_identity; wet_P; wet_I; wet_ER; wet_C; gross_S; EO; W; opening_empty; opening_attached_WIP; opening_attached_FG; opening_reusable; closing_same_states; supplier_included_ingress; component_bridge; water; actual_X_in; actual_X_out; overlap_other_inout; mixed_outlet; disjoint_source_pool_W; provider_owner; fulfilled_service; unused_charge; original_Q_H; H | 每制品六个真实腿及完整湿C均实测。湿整件P/I已含部件/水一次。独立新增且留存材料/水入流与完整湿期末同时保留，X不因期末留存而删它。记录完整毛V并独立于负荷分配。一混合出口只有一个Waste总量和一次处理供方，各来源W池不重叠。同制品charge行只链接一次上游/服务向量，不二购。 | kg; original count with independently measured same-configuration wet tare | 每真实事件/批次及计量区间 | 完整期初历史至批组及观测H | 真实门配置及供方 | 每参考流 | 原始证据；校准；真实身份/规格；完整逐流向量与湿存量桥；不确定性及去向；汇总引用calc_quotient唯一结果且不除原始记录 |
| cp_assets | assets | each new used removed article fluid and service | serial asset part fluid custody and utilization record | row_id; serial; actual_material; configuration; new_or_used; opening_installed; opening_store; full_wet_receipt; integral_fill; actual_topup; actual_new_part; actual_old_part; water; gross_removal; external_return; waste; full_wet_closing; actual_X_in; actual_X_out; overlap_other_inout; whole_component_bridge; actual_hours; capacity; causal_driver; inherited_burden; service_owner; unused_charge; permission; tests; disposition | 完整毛实物保管与真实所分资本/维修/服务负荷分离。新/旧/拆出卡表达真实事件及去向，不强制固定更换。实际在装流体和独立新增水/部件即使留存仍保留；整件与新增量不重叠。磨损接口不重复整刀采购。失败作业保留负荷，仅未用charge结转。 | kg; m3 for hydraulic fluid; h; actual native extensive unit | 每真实事件/批次及计量区间 | 完整期初历史至批组及观测H | 真实门配置及供方 | 每参考流 | 原始证据；校准；真实身份/规格；完整逐流向量与湿存量桥；不确定性及去向；汇总引用calc_quotient唯一结果且不除原始记录 |
| cp_waste_prep | prep | each actual outlet and one provider | receiver operation source-pool and unique provider record | row_id; actual_outlet; disjoint_source_pool; wet_total; component_water; source_W; original_service_unit; measured_activity_conversion; receiver; route; included_transport; one_provider_owner; original_cohort; actual_incurred_burden; treatment_residues; actual_species; uncertainty | 保留真实湿出口及每真实出口一次实际处理活动，使用其原生服务单位。若仅一个混合出口，只有一个实物Waste/处理供方活动，各来源W独立追溯，总/分不叠加。不因废物出售或外送删除制造/处理。 | kg actual wet outlet; provider native service unit | 每真实事件/批次及计量区间 | 完整期初历史至批组及观测H | 真实门配置及供方 | 每参考流 | 原始证据；校准；真实身份/规格；完整逐流向量与湿存量桥；不确定性及去向；汇总引用calc_quotient唯一结果且不除原始记录 |
| cp_waste_laminate | laminate | each actual outlet and one provider | receiver operation source-pool and unique provider record | row_id; actual_outlet; disjoint_source_pool; wet_total; component_water; source_W; original_service_unit; measured_activity_conversion; receiver; route; included_transport; one_provider_owner; original_cohort; actual_incurred_burden; treatment_residues; actual_species; uncertainty | 保留真实湿出口及每真实出口一次实际处理活动，使用其原生服务单位。若仅一个混合出口，只有一个实物Waste/处理供方活动，各来源W独立追溯，总/分不叠加。不因废物出售或外送删除制造/处理。 | kg actual wet outlet; provider native service unit | 每真实事件/批次及计量区间 | 完整期初历史至批组及观测H | 真实门配置及供方 | 每参考流 | 原始证据；校准；真实身份/规格；完整逐流向量与湿存量桥；不确定性及去向；汇总引用calc_quotient唯一结果且不除原始记录 |
| cp_waste_finish | finish | each actual outlet and one provider | receiver operation source-pool and unique provider record | row_id; actual_outlet; disjoint_source_pool; wet_total; component_water; source_W; original_service_unit; measured_activity_conversion; receiver; route; included_transport; one_provider_owner; original_cohort; actual_incurred_burden; treatment_residues; actual_species; uncertainty | 保留真实湿出口及每真实出口一次实际处理活动，使用其原生服务单位。若仅一个混合出口，只有一个实物Waste/处理供方活动，各来源W独立追溯，总/分不叠加。不因废物出售或外送删除制造/处理。 | kg actual wet outlet; provider native service unit | 每真实事件/批次及计量区间 | 完整期初历史至批组及观测H | 真实门配置及供方 | 每参考流 | 原始证据；校准；真实身份/规格；完整逐流向量与湿存量桥；不确定性及去向；汇总引用calc_quotient唯一结果且不除原始记录 |
| cp_waste_packaging | packaging | each actual outlet and one provider | receiver operation source-pool and unique provider record | row_id; actual_outlet; disjoint_source_pool; wet_total; component_water; source_W; original_service_unit; measured_activity_conversion; receiver; route; included_transport; one_provider_owner; original_cohort; actual_incurred_burden; treatment_residues; actual_species; uncertainty | 保留真实湿出口及每真实出口一次实际处理活动，使用其原生服务单位。若仅一个混合出口，只有一个实物Waste/处理供方活动，各来源W独立追溯，总/分不叠加。不因废物出售或外送删除制造/处理。 | kg actual wet outlet; provider native service unit | 每真实事件/批次及计量区间 | 完整期初历史至批组及观测H | 真实门配置及供方 | 每参考流 | 原始证据；校准；真实身份/规格；完整逐流向量与湿存量桥；不确定性及去向；汇总引用calc_quotient唯一结果且不除原始记录 |
| cp_waste_assets | assets | each actual outlet and one provider | receiver operation source-pool and unique provider record | row_id; actual_outlet; disjoint_source_pool; wet_total; component_water; source_W; original_service_unit; measured_activity_conversion; receiver; route; included_transport; one_provider_owner; original_cohort; actual_incurred_burden; treatment_residues; actual_species; uncertainty | 保留真实湿出口及每真实出口一次实际处理活动，使用其原生服务单位。若仅一个混合出口，只有一个实物Waste/处理供方活动，各来源W独立追溯，总/分不叠加。不因废物出售或外送删除制造/处理。 | kg actual wet outlet; provider native service unit | 每真实事件/批次及计量区间 | 完整期初历史至批组及观测H | 真实门配置及供方 | 每参考流 | 原始证据；校准；真实身份/规格；完整逐流向量与湿存量桥；不确定性及去向；汇总引用calc_quotient唯一结果且不除原始记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_q | finished_ski | Q=批组首次质量放行唯一完整单板实测净质量之和；已首次放行期末FG包含一次，不是第二成品。 | net_individual_masses; unique_release_ids; cp_release | Q | wagner-finish; wagner-custom |
| calc_raw | all inventory rows | 归属前将原始分子量转换为真实原生广延单位，保留原速率/积分量及实测密度/热状态。1 kWh=3.6 MJ一次，气液积分量不再乘时间。完整毛V与实物存量独立于负荷向量。 | raw_records; cp_utilities_prep; cp_utilities_laminate; cp_utilities_finish; cp_utilities_service; cp_physical_finish; cp_physical_service; cp_physical_assets | converted_raw | ilcd-attributional-2010 |
| calc_attribution | maple_core_blank; base_sheet; sidewall_strip; steel_edge; glass_cloth; epoxy_a; hardener_b; nylon_topsheet; rubber_damping; soft_wax; running_wax; carbide_wear; saw_blade; abrasive_belt; grinding_stone; gummy_stone; diamond_stone; roto_brush; prep_electricity; prep_water; laminate_electricity; laminate_water; finish_electricity; finish_water; cleaner; coolant; core_shavings_treatment; uncured_resin_treatment; trim_waste_treatment; grinding_sludge_treatment; process_wastewater_treatment; rejected_ski_treatment; spent_abrasive_treatment | 每制造负荷维度在真实转换、专属细分、逐交换决定性物理因果及仅正当剩余分配后，A_m_i=B_open_i+U_i-B_close_raw_WIP_unassigned_i-T_other_i。B_close排除已首次放行FG，逐一明示历史向量及未分配非WIP存量。U已库存修正则不再修正。T_other需真实其他批组/功能及一次正当移交，普通失败/废物/出售/处理不自动符合。 | converted_raw; each_inherited_vector; raw_WIP_unassigned_stocks; actual_handover_decision | A_m_i | ilcd-attributional-2010 |
| calc_service | service_electricity; service_water; carton_charge; film_charge; pallet_charge; press_service; cassette_service; airbag_service; repair_plank_service; repair_nail_service; hydraulic_fill_service; grease_service; filter_service; carton_w_treatment; film_w_treatment; pallet_w_treatment; mixed_packaging_waste_treatment; press_removed_treatment; cassette_removed_treatment; airbag_removed_treatment; repair_plank_removed_treatment; repair_nail_removed_treatment; hydraulic_fill_removed_treatment; grease_removed_treatment; filter_removed_treatment; assets_water_out_treatment | 原批组Q_H及观测H下（制造批组内已执行服务的Q_H就是该制造Q），A_h_i保留真实已履行仓储/搬运/包装/资产/处理/后作业增量及所分期初未用charge，仅扣真实未用/未分配期末服务/charge及正当一次真实其他功能转移。不因FG留库扣已履行服务。不重新采购历史制造。实物毛V另列。 | actual_service_records; original_Q_H; H; one_owner_vectors; unused_charge | A_h_i | ilcd-attributional-2010 |
| calc_quotient | all inventory rows | x_i=N_i/Q_c仅一次。制造负荷维度N_i为A_m_i，真实服务负荷为A_h_i，仅实物披露为完整真实毛腿V_i。Q_c为制造Q或该观测服务/保管原批组Q_H。不得用B_open+U-B_close或经济份额替代V_i。实物V不产生新采购/供方/信用或新Q。Q_c=0保留分子及存量不出单位结果。卡片与汇总引用同一x_i不再相除。 | A_m_i; A_h_i; full_gross_V_i; Q; original_Q_H; cp_release | x_i | ilcd-attributional-2010 |
| calc_physical | all inventory rows | 逐制造/FG服务/合并门独立核对完整湿期初+真实毛外部入流=完整湿期末+真实毛外部出流。相关元素/碳/化学/游离/相态水约束独立。包材每池P+I+ER=C+S+EO+W，内部复用抵消。X_in/X_out仅消除其他同侧重复进出项，不能取消真实留存新增流入或完整湿期末。整件/独立新增/来源W池不重叠，仅匹配内部产品交接抵消。 | full_wet_stocks; full_gross_V_i; independent_species_constraints; disjoint_component_overlap_bridge | closure_findings | ilcd-attributional-2010 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | 实际整份供料/制品身份及全部原生CAS/材质/形态/相态/牌号/路线/地区/介质/type限制须一致。正式中文显示须匹配所选UUID，空UUID不等于零或集合流。 | 供方物料表/规格与原生原件 |
| dq_raw | all raw records and Q | 保留校准、原单位、含水/热/密度状态、完整事件/存量/向量桥、不确定性及原失败。未来场址量为采集要求，不声称已测。 | 原始称量/仪表/批次日志 |
| dq_scope | all sources and gates | 保留完整primary语境和相反路线。定性技术综合与实测工厂物料表区分；辅助/供方缺口阻止依赖数值使用，真正核心身份或路线缺失才hold可用方法。 | 完整来源与声明适用性 |
| dq_service | assets packaging actual postwork | 许可/试验/验收决定持续合格，但不删除已发生失败或未获准物流/负荷。自然湿度交换不需虚构维修许可。一混合出口一总量/供方，包装完整六实物腿保持原子性。 | 真实服务/保管/去向记录 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_terminal | reference and first release | 要求完整声明未装固定器高山板终端及真实批准结构/供货状态，不能以木芯/底材/板坯/鞋靴或错误单板滑雪路线替代。经验证物理相容宽已制造产品族可用正面primary限定，名称/CPC/SKU相似不能绕硬原生冲突。核心身份缺口是真hold，普通辅助/供方/计量缺口另行明示。 | wagner-custom; wagner-materials; wagner-finish |
| v_normalize | every card and raw field | 在唯一x_i=N_i/Q_c前检查原单位/速率转换和真实归属。毛流卡N_i为完整真实V_i，绝非库存修正用量、负荷向量或经济份额；披露不产生第二采购/供方/信用。Q含首次放行期末FG一次。服务保留原Q_H及真实H。Q0保留实际负荷但不出单位结果。 | ilcd-attributional-2010 |
| v_balance | physical and burden gates | 独立验证湿质量/元素/碳/水/物种、原料/WIP/非WIP继承向量、FG历史、完整包装六腿、资产/新旧件/流体保管及一混合出口/供方。真实留存新增流入与完整湿期末同时保留，已库存修正用量不重复修正。 | ilcd-attributional-2010 |
| v_truth | projection native context and review | 核对每source id/type/reference/use、规则source_ids、原生参考属性/组/单位、每卡全部字段/说明/限定及规范祖先语境。Schema/当前指纹/有限计量检查不证明科学/翻译批准、工厂数量、已接受映射、整分类覆盖或出版。真正不支持关系保留需审查。 | ilcd-attributional-2010; wagner-press; wagner-finish |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 前景制造方法；仅真实已完成有据数据包 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 首次放行Q下相符完整未装固定器木芯玻纤/环氧高山板制造及原批组单列观测服务H |
| excluded_use | 整CPC38410覆盖、其他结构/路线、部件/套装/使用寿命、假设工厂系数、认证及未审数值默认值 |
| required_metadata | 完整未装固定器高山滑雪板单板及唯一序号/批组; 层压糖枫木芯供货与实际含水状态; 干态机织玻纤及实际整份树脂/固化剂制剂; 烧结UHMWPE底片及实际P-tex侧墙状态; 淬硬钢刃型及供货组件边界; 真实已装饰尼龙顶片及条件橡胶条; 实际外形/拱形/翘度及批准材料配置; 实际固化/底面/钢刃/角度/蜡放行记录; 有校准的单板实测净质量并排除固定器/包装; 首次放行Q及原料/WIP逐交换继承向量; 原已放行FG批组Q_H及真实观测时域H; 真实供方地区/时期及原生流限制; 完整包装六腿毛流及资产/部件/流体保管; 独立湿质量/碳/元素/水/物种证据 |
| required_quality_disclosure | 真实来源范围、技术综合与实测工厂记录区别、各依赖身份/供方/数量缺口、完整原始向量/毛存量及不确定性 |
| update_trigger | 产品/供货/环氧/铺层/固化/完工/门/原生身份变更、新证据、发现遗漏或实质审查 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3 | official_guidance | UNSD CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 仅38410语境；不代表整叶适用或已接受映射。 |
| wagner-custom | handbook | Wagner Custom Skis, https://www.wagnerskis.com/pages/wagner-custom-skis | 完整滑雪板及Essential木芯/玻纤/P-tex/钢刃结构；供货状态与替代结构，不作定量物料表。 |
| wagner-materials | handbook | Wagner, Digging in Deeper to Specific Ski Materials, https://www.wagnerskis.com/blogs/journal/need-know-great-ski-materials | 层压糖枫木芯选项；烧结UHMWPE底片及钢刃；真实替代材料及整板制造语境。不作特定SKU配方或性能默认值。 |
| wagner-base | handbook | Wagner Factory Tour: Base Materials and Steel Edges, https://www.wagnerskis.com/blogs/journal/wagner-factory-tour-base-materials-steel-edges | 真实供货底材/钢刃选项及雪接触界面，不假定厚度或寿命。 |
| wagner-core | handbook | Wagner Factory Tour: Wood Cores, https://www.wagnerskis.com/blogs/journal/wagner-factory-tour-wood-cores | 供货木芯坯的数控周界及厚度轮廓加工。 |
| wagner-fiberglass | handbook | Wagner, What’s in Our Skis and Why, 6 December 2024, https://www.wagnerskis.com/blogs/journal/whats-in-our-skis-and-why | 干玻纤布的环氧浸润；木材/碳纤维/金属替代方案不混成一份工厂物料表。 |
| wagner-press | handbook | Wagner Factory Tour: The Ski Press, https://www.wagnerskis.com/blogs/journal/wagner-factory-tour-ski-press | 底片至顶片的湿铺、压合盒、选用尖尾/拱形块、电热及气囊压合。不推定固化温度、压力、时间、层数或收率。 |
| wagner-finish | handbook | Wagner Factory Tour: Ski Finishing and Tuning, https://www.wagnerskis.com/blogs/journal/wagner-factory-tour-ski-finishing-tuning | 带锯/侧墙轮廓、砂带/磨石研磨、尖尾磨刃、角度检查、底蜡/滑行蜡、红外加热及刷蜡；门止于安装固定器之前。 |
| wagner-graphics | handbook | Wagner Factory Tours: Graphics, https://www.wagnerskis.com/blogs/journal/wagner-factory-tour-graphics | 尼龙顶片及供方热升华语境；采购装饰片时印染移至上游但不漏其负荷。 |
| wagner-factory | handbook | Wagner Factory Skis, https://www.wagnerskis.com/pages/wagner-factory-skis | 完整板结构及实际条件减振橡胶；碳纤维/Titanal/芳纶路线为相邻反例，不是自动新增铺层。 |
| ilcd-attributional-2010 | official_guidance | European Commission JRC, ILCD Handbook General Guide Detailed Guidance, First edition March 2010, sections 7.9.2–7.9.3, https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因细分/虚拟细分、逐交换决定性物理因果、正当剩余共过程出门市场价值。本规则采集/存量/毛流账将其具体化，不声称ILCD符合性、数值系数、自动废物分配或替代法。 |
