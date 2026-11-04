---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-and-scrap-of-tin
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 单源 Sn-Sb-Cu 锡基合金铸造浇口料再熔供料

## 1. 范围与适用性

本归因 PCR 仅覆盖一种从真实制造中产生并单独收集的固态金属浇口/流道料，其来源为一个已识别的无铅、锡为主金属的 Sn-Sb-Cu 锡基合金批次。前景从整合金槽口条或锭实物收货及其上游负荷历史开始，保留实际电熔/保温、模具准备、离心铸造、冷却脱模、手工切离浇注环、单收、必要的干式异物剔除、称量/化验以及按指定再熔接收方规格进行的唯一首次质量放行。实际包装、仓储、搬运和至接收门的运输按原 cohort 服务保留。购买已成形废料后重新包装不满足本范围。

ASL 和 Nathan Trotter 证明真实锡基 Sn-Sb-Cu 铸造供料；T&T 证明实际离心铸造及手工分离操作；Nathan Trotter 和 DKL 证明废料接收/回收及分析功能。这是兼容 primary 操作的透明定性技术综合，不是同一 SKU、工厂或当前订单。来源中的合金实例不同。每个数据包必须识别一个真实合金批次、模具结构、电源/保温配置、实际污染状态及接收协议。不采用实例成分、温度、密度、产率、回收率或历史零负荷。来源：asl-pewter; tt-casting-2012; nt-britannia-2015; nt-white-metals; dkl-reception。

Nicem 与 Contenti 的技术资料独立支持本有限离心铸造路线所需的兼容电加热、温度调节锡合金熔化与保温设备。该设备层面的技术支持不证明 ASL、T&T 或所建模来源场址使用某台特定熔炉。各数据包仍须核实真实合金、加热/保温配置及运行记录。来源：nicem-f100-spin-casting-furnace; contenti-electric-melting-furnace-manual。

排除镀锡钢板/钢罐、镀锡铜或黄铜、铜基青铜、铅基焊料/字模合金、锌基白合金、含有意添加贵金属的合金、整份焊膏/助焊制剂、焊接使用残余、富氧化物浮渣/灰/滤尘、混牌号/混来源料、消费后制品、成品铸件、重熔精炼金属锭及废物处理服务参考。少量含 Sn、颜色或商品名均不能证明锡基身份。本路线产生的浮渣单列清单，绝不改称本金属参考产品。不同合金或熔化/成形/化学清洗路线必须先补证并扩展清单。un-cpc3-2025。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-and-scrap-of-tin |
| classification_refs | CPC 3.0:39366；较窄的锡基金属铸造浇口料子范围；不代表已接受映射。 |
| covered_products | 一种单收、无涂层的 Sn-Sb-Cu 锡基合金金属浇口/流道批料，首次放行为再熔供料 |
| excluded_products | 钢/镀锡钢及镀锡基材；Cu/Pb/Zn 基合金；膏剂；浮渣/灰/尘；混料或旧制品；精炼锭；处理服务 |
| representative_product | 单源 Sn-Sb-Cu 锡基合金铸造浇口料再熔供料 |
| production_route | 整合金条/锭收货 -> 电熔/保温 -> 橡胶模离心铸造 -> 冷却/脱模/手工切离 -> 单收及干式检查 -> 首次再熔供料放行 -> 实际 cohort 供货服务 |
| market_state | 固态单源金属铸造浇口料；供应整合金而非仅所含 Sn；净干接受质量排除包装/游离水/可剥离异物 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应单源金属铸造浇口料用于再熔 |
| How much | 唯一首次质量放行的 1 千克整合金浇口净干质量 |
| How well | 一个合金/来源并满足真实接收方供料规格；不替入氧化物/膏剂 |
| How long or cycle | 声明的首次放行报告期及原 cohort 服务历史 |
| reference_flow_link | released_scrap |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 废锡 `e7221683-4cdd-4aa4-ab05-95a830757c21` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 一个原合金批次及原铸造 cohort; 整份 Sn-Sb-Cu 化验与锡为主金属的证据; 供方条/锭形态及上游逐交换负荷向量; 无添加铅规格及实际微量分析; 实际模具材质及固化/采购边界; 熔化/保温及切离配置; 无后处理涂层或助焊膏的干态金属浇口/流道形态; 真实接收方身份及供料接受条件; 场址及报告期; 首次放行 Q 及实物 G_Q 对应; 含水及可剥离污染物实测; 期初/期末 WIP 与 FG cohort 向量; gross 实物发运及退回历史; 失败/Q0/启停/待机/清理/重工负荷; 电力电压与地域及供方范围; 每种实际材料与物种及去向; 各包装组件 P/N_ext/ER 事件及负荷所有权; 分配共同门及服务 Qc 历史 |

每项必需限定信息均须写入具体数据集说明或相连证据。泛原生流仅提供身份，较窄范围的完整上下文仍须满足。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q 为 cp_release 采集的新增首次放行整合金浇口/流道净干质量，不是纯 Sn 含量，也不是后续交付/重验量。released_scrap 为 1 千克。G_Q 是排除包装后的实际 gross 物料质量；游离水及可剥离物分别采集，G_Q = Q + H_Q + J_Q。干态须核实，不默认。 |
| raw_conversion | all inventory rows | Declared physical property | row-declared unit | 保留原始单位及状态。质量/能量只换算一次；只有真实速率才积分。累计气液体积不再乘时间。使用该物质在实测温度/压力/成分下独立测量的密度，不套水密度或次级属性系数。件数须有实测组件皮重及配置，不猜每件 kg。 |
| single_division | alloy_ingot; casting_electricity; silicone_mould; talc_release; oxygen_uptake; uncoated_casting; unreleased_gates; casting_dross; filter_dust; spent_mould; sn_o2_air; sb_o3_air; cu_o_air; gates_to_release; released_scrap; rejected_metal | Declared physical property | per reference flow | 协议保留未除原始量。calc_convert 及 calc_assign 建立各交换分子 A_j；calc_once 只执行一次 A_j / Q。卡片及汇总引用同一计算，不再次相除。Q=0 保留真实负荷并透明结转/归属，不产生单位结果。 |
| service_basis | cohort_service | Declared physical property | per reference flow | 实际放行后服务经 calc_service 使用原 cohort 分母 Qc。H 是面积时间或 gross 载荷距离等实测服务驱动量，绝不是新生产分母。仓储、包装、退回或重工不产生新 Q。 |
| electricity_identity | casting_electricity, service_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 选用交流电记录仅适用于中国、低于 1 kV、电网平均消费供电到用户。能量单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` 以 MJ 为参考，kWh 系数为 3.6。核实实际地域/电压及上游供方已含范围；不匹配时须经直读核实后更换绑定。此能量属性不提供燃料或燃烧因子。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 整份已识别预合金固态 Sn-Sb-Cu 铸造锭/条，以及原 WIP/模具/组件库存及向量 |
| starting_condition_role | 上游合金生产链接一次；原前景铸造及浇口形成保持明确 |
| product_classification_scope | CPC3.0:39366 内较窄的单源锡基金属铸造浇口料子集 |
| recursive_input_rule | 真实同类别外来进料须有独立继承向量及明确路线审查。内部浇口/重熔抵消；递归或废物状态均不抹去历史。 |
| upstream_dataset_requirement | 每项真实整份供货/服务一个兼容 provider；真实地域、合金/形态及已含范围。不虚构配方，不借用不兼容原生/再生金属过程。 |
| disclosure | 一个原合金批次及原铸造 cohort; 整份 Sn-Sb-Cu 化验与锡为主金属的证据; 供方条/锭形态及上游逐交换负荷向量; 无添加铅规格及实际微量分析; 实际模具材质及固化/采购边界; 熔化/保温及切离配置; 无后处理涂层或助焊膏的干态金属浇口/流道形态; 真实接收方身份及供料接受条件; 场址及报告期; 首次放行 Q 及实物 G_Q 对应; 含水及可剥离污染物实测; 期初/期末 WIP 与 FG cohort 向量; gross 实物发运及退回历史; 失败/Q0/启停/待机/清理/重工负荷; 电力电压与地域及供方范围; 每种实际材料与物种及去向; 各包装组件 P/N_ext/ER 事件及负荷所有权; 分配共同门及服务 Qc 历史 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_origin | whole product chain | 通过兼容上游数据集保留合金生产，并保留实际产生浇口料的原铸造。整份外购合金仅接收一次；Sn/Sb/Cu 化验与含水为非叠加子账。实际厂内配合金须在使用前逐一新增外来金属、每份真实制剂、能耗及损失行。不允许以购买成品废料缩减边界。 | asl-pewter; nt-britannia-2015; ilcd-2010 |
| boundary_casting | source_casting | 纳入整合金收货/卸料、实际模具准备及寿命使用、电熔/保温、实际离心铸造/冷却、手工切离与源头单收。伴生无涂层铸件在单独滚磨/涂层前离开共同门。保留全部失败铸造、内部重熔、启停、待机、溢料、清理及期初/期末 WIP 的逐交换负荷向量。内部重熔不是新增外购合金或新废料产量。 | tt-casting-2012; asl-pewter; ilcd-2010; nicem-f100-spin-casting-furnace; contenti-electric-melting-furnace-manual |
| boundary_release | scrap_release | 从切离、干式分选、必要手工整形至代表性化验/目检均保留同一原合金/铸造来源。仅放行满足指定接收协议的金属浇口流。不将浮渣、氧化物尘、用后焊料/焊膏或其他合金计入 Q。须证明接收方身份、协议物料状态及真实批次接受；回收商一般服务说明不等于批次批准。 | nt-white-metals; dkl-reception |
| boundary_physical | manufacturing and FG gates | 各实物门采用相同物料状态及时间截点。整流制造：Ow + F + Ru + O_air + X = Cw + G_Q + B + Wm + Em。FG：Of + G_Q + Rg = Cf + grossV + Wf。Ow/Cw 含全部来源 WIP 及未放行浇口料；F 为首次外部整合金进料；Ru/Rg 是分别回到 WIP/FG 的互斥真实退回；B 为实际伴生铸件；Wm/Wf 与 Em 分别将具体废物/物种出口仅相加一次。X 只允许为同一输入侧尚未计入的具体新增质量，绝不再加 F 或化验组分。合并门须抵消 G_Q 和全部内部转移。Q 仅用于归一化，绝不再加到 Cf 或 grossV。容器/模具库存有独立组件门；进入金属的磨损须有实测跨账转移。 | ilcd-2010 |
| boundary_species | physical and element balances | 整流物理质量与 Sn/Sb/Cu 及相关 O/H 分别独立闭合。氧化耗氧、含水、实际反应水、相态/结构水及每种排放物须有独立证据；一个残差不能拟合两个未知。总金属化验不等于 SnO2/Sb2O3/CuO 质量；COD/VOC/PM 指标不冒充化学物种。混合收尘保留整流量，其来源/元素分区非叠加且只有一个 provider。 | ilcd-2010 |
| boundary_packaging | each actual component and physical gate | 逐种对纸箱、托盘、聚乙烯膜、聚丙烯捆带、整份供货纸标签及可重复使用钢容器独立实测全部首次外部实物收货：采购 P 和非采购 N_ext，后者含供方随货实际附着物及首次受托/借入/租入。P 仅指采购。ER 必须有该件/cohort 原对外发运史；P/N_ext/ER 互斥。期初库存不能代替当期收货。在同一组件/门闭合 O + P + N_ext + ER + F_in = C + grossS + EO + W + F_out。F_in/F_out 为独立实测且分别具名、真实跨越本组件门的材料/水/物种或相态转移腿，排除 P/N_ext/ER 或 grossS/EO/W 已含的量。仅在实际存在时纳入真实留存污染或含水变化；各内部跨账转移须有配对对应腿，仅在合并门抵消。整份受污染 W 只实测一次，组件/内容物分区非叠加且一个 provider。真实新增留存材料输入不是 OTHER 重复项；X 只能剔除同侧完全重复项。不默认实际湿操作、反应产率或数量。O/C 含空库、附着 WIP/FG 及周转库存；grossS 为全部实物外运所带包装，绝非净 Q。EO 为独立对外返还。内部仓库/WIP/FG 领用/复用抵消。每个真实事件须有具体材质/形态/类型/方向的卡或接口及实测量；实际缺接口则该数据包不完整。仅加符号、借采购 UUID、虚构采购/退回或整批复制均不能修复。 | nt-britannia-2015; nt-white-metals; ilcd-2010 |
| boundary_burdens | components and toll/lease services | 实物收货、所有权及环境负荷分别记账。保留原 cohort、逐交换继承向量、供方已含范围及真实增量租返/清洗/运输服务。制造内含负荷按有证据的服务使用分配一次，不能每次退回再计。免费随货、受托物及客户所有/协议制造均不推零负荷、新 Q 或环境信用。协议制造和 cohort 服务均采用完整收货接口及相同组件闭合。 | ilcd-2010 |
| boundary_extension | all actual exchanges | 具体卡片定义有限兼容路线，不允许遗漏真实投入。实际存在而未列出的每份制剂、润滑剂、燃料、水路、气体、制模原料、包装或物种，均须新增单一具体卡/接口及实测量。核实真实聚合物/金属结构；替代包装及厂内模具配制须有独立接口。保留不存在的实测/记录证据，不默认零。整模具/制剂采购只计整份一次；现场制备须记录各项真实采购及加工。 | asl-pewter; nt-white-metals |
| boundary_service | cohort_service | 保留至接收门的真实仓储、包装、搬运及运输；保留旧 FG 负荷历史、gross 发运/逆向流动及退回/重工的真实增量负荷。同一浇口料重验或再交付不重复首次放行。外购服务按供方声明范围只计一次，不再叠加其内部燃料或排放。不默认蒸汽/锅炉、冷凝水返还、洗涤、惰性气体或重熔信用；实际存在时须逐一记录实物流、热状态及供方水能约定。 | dkl-reception; ilcd-2010 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| source_casting | 原合金收货、铸造及浇口形成 | required | 一种整份已识别 Sn-Sb-Cu 合金，实际电熔、离心铸造及手工切离 | foreground | 每 1 kg 参考流 |
| scrap_release | 单收及首次再熔供料合格放行 | required | 每个参考批料首次放行前 | foreground | 每 1 kg 参考流 |
| cohort_service | 真实包装、仓储及接收方供货服务 | conditional | 每项真实服务及包装事件；使用原 cohort 分母 | cohort service | 每 1 kg 参考流；服务使用原 Qc |

### 过程：原合金收货、铸造及浇口形成（`source_casting`）

#### 输入

##### 产品流

###### 整合金锭外部实收（`alloy_ingot`）

实测外部整合金收货及库存变动：F 含互斥的采购 P_raw 和非采购首次实收 N_raw；真实 Ru/Rg 须有原对外发运史，绝不再并入 F。仅用真实锡为主金属的一个锭/槽口条批次及上游向量；化验为子账，不是额外元素采购。铅基合金或锡棒不能替代其身份。

- 选定流: 固态无铅 Sn-Sb-Cu 锡基铸造合金锭
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行经原始换算及分配后使用第 8 节同一次归一化结果；保留实物原始量及内部抵消。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_material`
- 来源: asl-pewter; nt-britannia-2015

###### 熔化、保温及铸造用电（`casting_electricity`）

分别计量真实熔化/保温、离心铸造、通风及应归属准备/待机/清理负荷。此 Product 身份为中国低于 1 kV 电网平均消费供电到用户，无燃料或化学 CAS；仅在场址电压/地域/provider 匹配时使用。不推算热效率或回收效率。

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 本实测行经原始换算及分配后使用第 8 节同一次归一化结果；保留实物原始量及内部抵消。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_energy`
- 来源: tt-casting-2012; ilcd-2010; nicem-f100-spin-casting-furnace; contenti-electric-melting-furnace-manual

###### 已固化硅橡胶铸造模具（`silicone_mould`）

仅限真实核实的硅橡胶模具配置；泛橡胶或硅胶粘剂 UUID 不能证明固化模具。记录整份供货模具制造/使用分配及实测磨损/寿命与实际准备。厂内制模时须另增真实基料/催化剂/填料采购及固化能耗/损失，不可同时计整模具和配方。非硅橡胶模具须有自身精确接口。

- 选定流: 已固化硅橡胶离心铸造模具
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行经原始换算及分配后使用第 8 节同一次归一化结果；保留实物原始量及内部抵消。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_material`
- 来源: asl-pewter; tt-casting-2012; ilcd-2010

###### 条件滑石脱模粉（`talc_release`）

仅在实际使用此单种粉体时适用；称量完整供货粉体并记录真实纯度/粒态。其他脱模制剂须有整份制剂卡及真实配方边界。不采用空气排放滑石流或固定纯度/粒径工业牌号来绑定此采购。不使用须有车间记录。

- 选定流: 天然滑石脱模粉
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行经原始换算及分配后使用第 8 节同一次归一化结果；保留实物原始量及内部抵消。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_material`
- 来源: ilcd-2010

##### 废物流

##### 基本流

###### 实际氧化空气取氧（`oxygen_uptake`）

仅记录有独立证据的实际金属氧化耗 O2。此 Elementary 身份为氧气，CAS 7782-44-7，空气资源/来自空气的可再生元素资源；不是外购氧、排放、惰性总通风量或强配残差。离子/液氧等同义名不改变本实际分子气体资源角色。物种及留存/排出 O 须独立支持数量。

- 选定流: 氧气 `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行经原始换算及分配后使用第 8 节同一次归一化结果；保留实物原始量及内部抵消。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_species`
- 来源: ilcd-2010

#### 输出

##### 产品流

###### 伴生无涂层铸件（`uncoated_casting`）

共同门实际手工分离的主体铸件，位于独立滚磨/电镀之前。实测整金属质量、销售/使用状态及继承向量，不称其为锡棒或本废料参考。内部不合格铸件及重熔保留记录，不虚构外部共产品。

- 选定流: 无涂层 Sn-Sb-Cu 锡基合金铸件坯
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行经原始换算及分配后使用第 8 节同一次归一化结果；保留实物原始量及内部抵消。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_material`
- 来源: tt-casting-2012; ilcd-2010

###### 内部新切离浇口料（`unreleased_gates`）

按原来源实测整份切离金属浇注环/浇口流，与浮渣及尘分开。这是携带精确逐交换负荷转入 scrap_release 的内部转移，不是首次 Q 或外售；合并时与 gates_to_release 抵消。

- 选定流: 未放行固态 Sn-Sb-Cu 锡基合金浇口料
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行经原始换算及分配后使用第 8 节同一次归一化结果；保留实物原始量及内部抵消。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_material`
- 来源: tt-casting-2012; ilcd-2010

##### 废物流

###### Sn-Sb-Cu 锡基合金熔化浮渣（`casting_dross`）

实测这一真实整份浮渣废物流，含夹带金属及氧化物相；化验分区非叠加。不并入金属浇口 Q，不由总 Sn 推氧化物化学式。记录真实接收/处理 provider 及转移状态。

- 选定流: Sn-Sb-Cu 锡基合金熔化浮渣
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行经原始换算及分配后使用第 8 节同一次归一化结果；保留实物原始量及内部抵消。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_waste`
- 来源: nt-white-metals; asl-pewter; ilcd-2010

###### 捕集 Sn-Sb-Cu 铸造滤尘（`filter_dust`）

仅在真实安装/使用时记录一个实际捕集整份滤尘流；保留滑石、金属、氧化物及水分分区，不叠加到整流量。未捕集实测物种仍单列；一个处理 provider。

- 选定流: 捕集 Sn-Sb-Cu 铸造滤尘
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行经原始换算及分配后使用第 8 节同一次归一化结果；保留实物原始量及内部抵消。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_waste`
- 来源: nt-white-metals; asl-pewter; ilcd-2010

###### 废已固化硅橡胶铸造模具（`spent_mould`）

仅记录真实外出的废硅橡胶模具；区分留存库存、转入产品/尘的磨损及外运废物。原模具制造按实际寿命只计一次，不每周期重购原生模具。

- 选定流: 废已固化硅橡胶铸造模具
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行经原始换算及分配后使用第 8 节同一次归一化结果；保留实物原始量及内部抵消。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_waste`
- 来源: nt-white-metals; asl-pewter; ilcd-2010

##### 基本流

###### 排入空气的二氧化锡（`sn_o2_air`）

仅在独立鉴定该真实物种并实测空气介质/时间时适用。不得由总金属、PM 或平衡残差推本化合物，不替用其他氧化物，不用长期排放流代当期烟气。记录真实分子质量及非叠加元素子账，其他真实物种逐种新增。

- 选定流: 排入空气的二氧化锡
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行经原始换算及分配后使用第 8 节同一次归一化结果；保留实物原始量及内部抵消。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_species`
- 来源: ilcd-2010

###### 排入空气的三氧化二锑（`sb_o3_air`）

仅在独立鉴定该真实物种并实测空气介质/时间时适用。不得由总金属、PM 或平衡残差推本化合物，不替用其他氧化物，不用长期排放流代当期烟气。记录真实分子质量及非叠加元素子账，其他真实物种逐种新增。

- 选定流: 排入空气的三氧化二锑
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行经原始换算及分配后使用第 8 节同一次归一化结果；保留实物原始量及内部抵消。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_species`
- 来源: ilcd-2010

###### 排入空气的氧化铜（`cu_o_air`）

仅在独立鉴定该真实物种并实测空气介质/时间时适用。不得由总金属、PM 或平衡残差推本化合物，不替用其他氧化物，不用长期排放流代当期烟气。记录真实分子质量及非叠加元素子账，其他真实物种逐种新增。

- 选定流: 排入空气的氧化铜
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行经原始换算及分配后使用第 8 节同一次归一化结果；保留实物原始量及内部抵消。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_species`
- 来源: ilcd-2010

### 过程：单收及首次再熔供料合格放行（`scrap_release`）

#### 输入

##### 产品流

###### 内部浇口料进入合格检查（`gates_to_release`）

与 unreleased_gates 为同来源/cohort/实物量及交换向量，含当期实际加工的期初未放行 WIP。不是新外购或零历史投入。合并门抵消内部数量及负荷。

- 选定流: 未放行固态 Sn-Sb-Cu 锡基合金浇口料
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行经原始换算及分配后使用第 8 节同一次归一化结果；保留实物原始量及内部抵消。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_material`
- 来源: tt-casting-2012; ilcd-2010

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 首次放行再熔供料浇口料（`released_scrap`）

原生 Product flow：生产混合，在工厂；未指定处理；原生无固定牌号、形态、地域或 CAS。仅用经证实、满足真实再熔接收要求的较窄单源无涂层金属 Sn-Sb-Cu 浇口/流道子集。泛名/注释仅证明身份，不证明化验、回收率、物理处理或供方兼容。1 千克参考是整份干合金而非所含 Sn；Q 排除包装、游离水及可剥离污染物。新增接受后留在期末 FG 的物料已含于 Q，不能再次加入。

- 选定流: 废锡 `e7221683-4cdd-4aa4-ab05-95a830757c21`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 1 千克
- 数值来源模式: `fixed_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `method_formula`
- 采集协议: `cp_release`
- 来源: un-cpc3-2025; nt-white-metals; dkl-reception; ilcd-2010

##### 废物流

###### 不合格受污染 Sn-Sb-Cu 浇口料（`rejected_metal`）

仅记录实际向外转移的不合格金属浇口料，明确污染物及处理；内部分选/重工保留内部历史。不并入氧化物/浮渣或合格 Q，不假定零负荷。

- 选定流: 不合格受污染 Sn-Sb-Cu 金属浇口料
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行经原始换算及分配后使用第 8 节同一次归一化结果；保留实物原始量及内部抵消。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_waste`
- 来源: dkl-reception; ilcd-2010

##### 基本流

### 过程：真实包装、仓储及接收方供货服务（`cohort_service`）

#### 输入

##### 产品流

###### 真实 cohort 仓储/包装用电（`service_electricity`）

仅计量归属于原 cohort Qc 的真实放行后搬运/仓储/包装/退回服务用电。中国低于 1 kV 电网平均到用户身份及 provider 范围限制与 casting_electricity 相同。与制造电表隔离；不产生新 Q，不重复继承电量。

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 本实测行及原 cohort Qc 使用第 8 节同一次服务结果；原始组件事件保留实物量。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_service`
- 来源: ilcd-2010

###### 外购道路运输服务（`road_freight`）

仅适用于真实委托柴油重型货车服务，使用真实 gross 载荷与距离及实际空车/逆向行程；供方范围只记一次。包装质量计入载荷但不入产品 Q。不同车辆/动力或自有车队须有精确服务或燃料/排放行，不能默认套本无 UUID 候选。

- 选定流: 柴油重型货车道路运输服务
- 流属性/单位: 运输服务 / t km
- 数量规则: 本实测行及原 cohort Qc 使用第 8 节同一次服务结果；原始组件事件保留实物量。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_service`
- 来源: ilcd-2010

###### 真实带盖钢容器租赁服务（`container_rental_service`）

仅限本精确钢容器真实单独提供的租赁服务；实测容器日及 provider 范围，保留原件/cohort 及继承向量。首次租入实物收货在 container_first_nonpurchase 中为 N_ext，不是采购或 ER。按有证据的服务寿命及供方已含范围对制造只分配一次；仅记真实增量租返服务，不重复已含运输、清理或制造。免费借用仍须有继承向量及真实服务记录，不推零负荷。

- 选定流: 单种可重复使用带盖钢制废料容器租赁服务
- 流属性/单位: 服务时长 / day
- 数量规则: 本实测行及原 cohort Qc 使用第 8 节同一次服务结果；原始组件事件保留实物量。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_service`
- 来源: ilcd-2010

###### 瓦楞纤维纸板运输纸箱——采购首次收货 P（`carton_purchase`）

仅为本单一组件真实采购首次外部收货 P，保留原采购含义。实测全部收货，实际购入的随货附着物也计入；保留供方已含范围及只计一次的内含向量。供方赠送/受托/借入/租入首次收货不填本行，使用独立 N_ext 卡。仅在真实使用本精确制品/材料时适用：核实实际基材/聚合物/金属及形态，不默认供货配方。每个事件是 cp_pack_carton 中的实测接口；P/N_ext/ER 分开，不复制整批。

- 选定流: 瓦楞纤维纸板运输纸箱
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行及原 cohort Qc 使用第 8 节同一次服务结果；原始组件事件保留实物量。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_carton`
- 来源: nt-britannia-2015; nt-white-metals; ilcd-2010

###### 瓦楞纤维纸板运输纸箱——非采购首次收货 N_ext（`carton_first_nonpurchase`）

实测本精确组件每次真实非采购首次外部实物收货 N_ext，含供方随货附着物及首次受托/借入/租入物。本物理门没有其先前对外发运史。所有权、原 cohort、继承向量及真实增量服务独立保留。不允许套采购 UUID、虚构采购/ER 或用期初库存替代。仅在真实使用本精确制品/材料时适用：核实实际基材/聚合物/金属及形态，不默认供货配方。每个事件是 cp_pack_carton 中的实测接口；P/N_ext/ER 分开，不复制整批。

- 选定流: 瓦楞纤维纸板运输纸箱
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行及原 cohort Qc 使用第 8 节同一次服务结果；原始组件事件保留实物量。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_carton`
- 来源: nt-britannia-2015; nt-white-metals; ilcd-2010

###### 瓦楞纤维纸板运输纸箱——真实外部退回实收 ER（`carton_external_return`）

仅为有已识别先前对外发运史及原 cohort 的同组件真实 ER。首次供方随货或租入为 N_ext，不是 ER。实测退回状态及数量，保留原向量并仅加增量退回/清洗/维修服务；不重购制造，不产生 Q/信用。仅在真实使用本精确制品/材料时适用：核实实际基材/聚合物/金属及形态，不默认供货配方。每个事件是 cp_pack_carton 中的实测接口；P/N_ext/ER 分开，不复制整批。

- 选定流: 瓦楞纤维纸板运输纸箱
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行及原 cohort Qc 使用第 8 节同一次服务结果；原始组件事件保留实物量。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_carton`
- 来源: nt-britannia-2015; nt-white-metals; ilcd-2010

###### 木质运输托盘——采购首次收货 P（`pallet_purchase`）

仅为本单一组件真实采购首次外部收货 P，保留原采购含义。实测全部收货，实际购入的随货附着物也计入；保留供方已含范围及只计一次的内含向量。供方赠送/受托/借入/租入首次收货不填本行，使用独立 N_ext 卡。仅在真实使用本精确制品/材料时适用：核实实际基材/聚合物/金属及形态，不默认供货配方。每个事件是 cp_pack_pallet 中的实测接口；P/N_ext/ER 分开，不复制整批。

- 选定流: 木质运输托盘
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行及原 cohort Qc 使用第 8 节同一次服务结果；原始组件事件保留实物量。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_pallet`
- 来源: nt-britannia-2015; nt-white-metals; ilcd-2010

###### 木质运输托盘——非采购首次收货 N_ext（`pallet_first_nonpurchase`）

实测本精确组件每次真实非采购首次外部实物收货 N_ext，含供方随货附着物及首次受托/借入/租入物。本物理门没有其先前对外发运史。所有权、原 cohort、继承向量及真实增量服务独立保留。不允许套采购 UUID、虚构采购/ER 或用期初库存替代。仅在真实使用本精确制品/材料时适用：核实实际基材/聚合物/金属及形态，不默认供货配方。每个事件是 cp_pack_pallet 中的实测接口；P/N_ext/ER 分开，不复制整批。

- 选定流: 木质运输托盘
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行及原 cohort Qc 使用第 8 节同一次服务结果；原始组件事件保留实物量。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_pallet`
- 来源: nt-britannia-2015; nt-white-metals; ilcd-2010

###### 木质运输托盘——真实外部退回实收 ER（`pallet_external_return`）

仅为有已识别先前对外发运史及原 cohort 的同组件真实 ER。首次供方随货或租入为 N_ext，不是 ER。实测退回状态及数量，保留原向量并仅加增量退回/清洗/维修服务；不重购制造，不产生 Q/信用。仅在真实使用本精确制品/材料时适用：核实实际基材/聚合物/金属及形态，不默认供货配方。每个事件是 cp_pack_pallet 中的实测接口；P/N_ext/ER 分开，不复制整批。

- 选定流: 木质运输托盘
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行及原 cohort Qc 使用第 8 节同一次服务结果；原始组件事件保留实物量。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_pallet`
- 来源: nt-britannia-2015; nt-white-metals; ilcd-2010

###### 聚乙烯收缩膜——采购首次收货 P（`film_purchase`）

仅为本单一组件真实采购首次外部收货 P，保留原采购含义。实测全部收货，实际购入的随货附着物也计入；保留供方已含范围及只计一次的内含向量。供方赠送/受托/借入/租入首次收货不填本行，使用独立 N_ext 卡。仅在真实使用本精确制品/材料时适用：核实实际基材/聚合物/金属及形态，不默认供货配方。每个事件是 cp_pack_film 中的实测接口；P/N_ext/ER 分开，不复制整批。

- 选定流: 聚乙烯收缩膜
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行及原 cohort Qc 使用第 8 节同一次服务结果；原始组件事件保留实物量。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_film`
- 来源: nt-britannia-2015; nt-white-metals; ilcd-2010

###### 聚乙烯收缩膜——非采购首次收货 N_ext（`film_first_nonpurchase`）

实测本精确组件每次真实非采购首次外部实物收货 N_ext，含供方随货附着物及首次受托/借入/租入物。本物理门没有其先前对外发运史。所有权、原 cohort、继承向量及真实增量服务独立保留。不允许套采购 UUID、虚构采购/ER 或用期初库存替代。仅在真实使用本精确制品/材料时适用：核实实际基材/聚合物/金属及形态，不默认供货配方。每个事件是 cp_pack_film 中的实测接口；P/N_ext/ER 分开，不复制整批。

- 选定流: 聚乙烯收缩膜
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行及原 cohort Qc 使用第 8 节同一次服务结果；原始组件事件保留实物量。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_film`
- 来源: nt-britannia-2015; nt-white-metals; ilcd-2010

###### 聚乙烯收缩膜——真实外部退回实收 ER（`film_external_return`）

仅为有已识别先前对外发运史及原 cohort 的同组件真实 ER。首次供方随货或租入为 N_ext，不是 ER。实测退回状态及数量，保留原向量并仅加增量退回/清洗/维修服务；不重购制造，不产生 Q/信用。仅在真实使用本精确制品/材料时适用：核实实际基材/聚合物/金属及形态，不默认供货配方。每个事件是 cp_pack_film 中的实测接口；P/N_ext/ER 分开，不复制整批。

- 选定流: 聚乙烯收缩膜
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行及原 cohort Qc 使用第 8 节同一次服务结果；原始组件事件保留实物量。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_film`
- 来源: nt-britannia-2015; nt-white-metals; ilcd-2010

###### 聚丙烯包装捆带——采购首次收货 P（`band_purchase`）

仅为本单一组件真实采购首次外部收货 P，保留原采购含义。实测全部收货，实际购入的随货附着物也计入；保留供方已含范围及只计一次的内含向量。供方赠送/受托/借入/租入首次收货不填本行，使用独立 N_ext 卡。仅在真实使用本精确制品/材料时适用：核实实际基材/聚合物/金属及形态，不默认供货配方。每个事件是 cp_pack_band 中的实测接口；P/N_ext/ER 分开，不复制整批。

- 选定流: 聚丙烯包装捆带
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行及原 cohort Qc 使用第 8 节同一次服务结果；原始组件事件保留实物量。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_band`
- 来源: nt-britannia-2015; nt-white-metals; ilcd-2010

###### 聚丙烯包装捆带——非采购首次收货 N_ext（`band_first_nonpurchase`）

实测本精确组件每次真实非采购首次外部实物收货 N_ext，含供方随货附着物及首次受托/借入/租入物。本物理门没有其先前对外发运史。所有权、原 cohort、继承向量及真实增量服务独立保留。不允许套采购 UUID、虚构采购/ER 或用期初库存替代。仅在真实使用本精确制品/材料时适用：核实实际基材/聚合物/金属及形态，不默认供货配方。每个事件是 cp_pack_band 中的实测接口；P/N_ext/ER 分开，不复制整批。

- 选定流: 聚丙烯包装捆带
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行及原 cohort Qc 使用第 8 节同一次服务结果；原始组件事件保留实物量。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_band`
- 来源: nt-britannia-2015; nt-white-metals; ilcd-2010

###### 聚丙烯包装捆带——真实外部退回实收 ER（`band_external_return`）

仅为有已识别先前对外发运史及原 cohort 的同组件真实 ER。首次供方随货或租入为 N_ext，不是 ER。实测退回状态及数量，保留原向量并仅加增量退回/清洗/维修服务；不重购制造，不产生 Q/信用。仅在真实使用本精确制品/材料时适用：核实实际基材/聚合物/金属及形态，不默认供货配方。每个事件是 cp_pack_band 中的实测接口；P/N_ext/ER 分开，不复制整批。

- 选定流: 聚丙烯包装捆带
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行及原 cohort Qc 使用第 8 节同一次服务结果；原始组件事件保留实物量。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_band`
- 来源: nt-britannia-2015; nt-white-metals; ilcd-2010

###### 整份供货胶粘纸包装标签——采购首次收货 P（`label_purchase`）

仅为本单一组件真实采购首次外部收货 P，保留原采购含义。实测全部收货，实际购入的随货附着物也计入；保留供方已含范围及只计一次的内含向量。供方赠送/受托/借入/租入首次收货不填本行，使用独立 N_ext 卡。仅在真实使用本精确制品/材料时适用：核实实际基材/聚合物/金属及形态，不默认供货配方。每个事件是 cp_pack_label 中的实测接口；P/N_ext/ER 分开，不复制整批。

- 选定流: 整份供货胶粘纸包装标签
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行及原 cohort Qc 使用第 8 节同一次服务结果；原始组件事件保留实物量。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_label`
- 来源: nt-britannia-2015; nt-white-metals; ilcd-2010

###### 整份供货胶粘纸包装标签——非采购首次收货 N_ext（`label_first_nonpurchase`）

实测本精确组件每次真实非采购首次外部实物收货 N_ext，含供方随货附着物及首次受托/借入/租入物。本物理门没有其先前对外发运史。所有权、原 cohort、继承向量及真实增量服务独立保留。不允许套采购 UUID、虚构采购/ER 或用期初库存替代。仅在真实使用本精确制品/材料时适用：核实实际基材/聚合物/金属及形态，不默认供货配方。每个事件是 cp_pack_label 中的实测接口；P/N_ext/ER 分开，不复制整批。

- 选定流: 整份供货胶粘纸包装标签
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行及原 cohort Qc 使用第 8 节同一次服务结果；原始组件事件保留实物量。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_label`
- 来源: nt-britannia-2015; nt-white-metals; ilcd-2010

###### 整份供货胶粘纸包装标签——真实外部退回实收 ER（`label_external_return`）

仅为有已识别先前对外发运史及原 cohort 的同组件真实 ER。首次供方随货或租入为 N_ext，不是 ER。实测退回状态及数量，保留原向量并仅加增量退回/清洗/维修服务；不重购制造，不产生 Q/信用。仅在真实使用本精确制品/材料时适用：核实实际基材/聚合物/金属及形态，不默认供货配方。每个事件是 cp_pack_label 中的实测接口；P/N_ext/ER 分开，不复制整批。

- 选定流: 整份供货胶粘纸包装标签
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行及原 cohort Qc 使用第 8 节同一次服务结果；原始组件事件保留实物量。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_label`
- 来源: nt-britannia-2015; nt-white-metals; ilcd-2010

###### 可重复使用带盖钢制废料容器——采购首次收货 P（`container_purchase`）

仅为本单一组件真实采购首次外部收货 P，保留原采购含义。实测全部收货，实际购入的随货附着物也计入；保留供方已含范围及只计一次的内含向量。供方赠送/受托/借入/租入首次收货不填本行，使用独立 N_ext 卡。仅在真实使用本精确制品/材料时适用：核实实际基材/聚合物/金属及形态，不默认供货配方。每个事件是 cp_pack_container 中的实测接口；P/N_ext/ER 分开，不复制整批。

- 选定流: 可重复使用带盖钢制废料容器
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行及原 cohort Qc 使用第 8 节同一次服务结果；原始组件事件保留实物量。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_container`
- 来源: nt-britannia-2015; nt-white-metals; ilcd-2010

###### 可重复使用带盖钢制废料容器——非采购首次收货 N_ext（`container_first_nonpurchase`）

实测本精确组件每次真实非采购首次外部实物收货 N_ext，含供方随货附着物及首次受托/借入/租入物。本物理门没有其先前对外发运史。所有权、原 cohort、继承向量及真实增量服务独立保留。不允许套采购 UUID、虚构采购/ER 或用期初库存替代。仅在真实使用本精确制品/材料时适用：核实实际基材/聚合物/金属及形态，不默认供货配方。每个事件是 cp_pack_container 中的实测接口；P/N_ext/ER 分开，不复制整批。

- 选定流: 可重复使用带盖钢制废料容器
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行及原 cohort Qc 使用第 8 节同一次服务结果；原始组件事件保留实物量。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_container`
- 来源: nt-britannia-2015; nt-white-metals; ilcd-2010

###### 可重复使用带盖钢制废料容器——真实外部退回实收 ER（`container_external_return`）

仅为有已识别先前对外发运史及原 cohort 的同组件真实 ER。首次供方随货或租入为 N_ext，不是 ER。实测退回状态及数量，保留原向量并仅加增量退回/清洗/维修服务；不重购制造，不产生 Q/信用。仅在真实使用本精确制品/材料时适用：核实实际基材/聚合物/金属及形态，不默认供货配方。每个事件是 cp_pack_container 中的实测接口；P/N_ext/ER 分开，不复制整批。

- 选定流: 可重复使用带盖钢制废料容器
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行及原 cohort Qc 使用第 8 节同一次服务结果；原始组件事件保留实物量。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_container`
- 来源: nt-britannia-2015; nt-white-metals; ilcd-2010

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 瓦楞纤维纸板运输纸箱——grossS 对外随货（`carton_gross_dispatch`）

实测本精确组件在每次真实对外发运上的 grossS，含原/旧 FG 及重复发运。这是包装/服务，不是净金属 Q、新采购或共产品。内部复用/领用抵消。

- 选定流: 瓦楞纤维纸板运输纸箱
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行及原 cohort Qc 使用第 8 节同一次服务结果；原始组件事件保留实物量。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_carton`
- 来源: ilcd-2010

###### 瓦楞纤维纸板运输纸箱——EO 对外返还（`carton_external_return_out`）

实测本精确组件真实对外返还 EO，与 grossS 及废物互斥。保留件/cohort 追踪及所有权/服务条款；发运及后续 ER 均不重置内含历史。

- 选定流: 瓦楞纤维纸板运输纸箱
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行及原 cohort Qc 使用第 8 节同一次服务结果；原始组件事件保留实物量。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_carton`
- 来源: ilcd-2010

###### 木质运输托盘——grossS 对外随货（`pallet_gross_dispatch`）

实测本精确组件在每次真实对外发运上的 grossS，含原/旧 FG 及重复发运。这是包装/服务，不是净金属 Q、新采购或共产品。内部复用/领用抵消。

- 选定流: 木质运输托盘
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行及原 cohort Qc 使用第 8 节同一次服务结果；原始组件事件保留实物量。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_pallet`
- 来源: ilcd-2010

###### 木质运输托盘——EO 对外返还（`pallet_external_return_out`）

实测本精确组件真实对外返还 EO，与 grossS 及废物互斥。保留件/cohort 追踪及所有权/服务条款；发运及后续 ER 均不重置内含历史。

- 选定流: 木质运输托盘
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行及原 cohort Qc 使用第 8 节同一次服务结果；原始组件事件保留实物量。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_pallet`
- 来源: ilcd-2010

###### 聚乙烯收缩膜——grossS 对外随货（`film_gross_dispatch`）

实测本精确组件在每次真实对外发运上的 grossS，含原/旧 FG 及重复发运。这是包装/服务，不是净金属 Q、新采购或共产品。内部复用/领用抵消。

- 选定流: 聚乙烯收缩膜
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行及原 cohort Qc 使用第 8 节同一次服务结果；原始组件事件保留实物量。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_film`
- 来源: ilcd-2010

###### 聚乙烯收缩膜——EO 对外返还（`film_external_return_out`）

实测本精确组件真实对外返还 EO，与 grossS 及废物互斥。保留件/cohort 追踪及所有权/服务条款；发运及后续 ER 均不重置内含历史。

- 选定流: 聚乙烯收缩膜
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行及原 cohort Qc 使用第 8 节同一次服务结果；原始组件事件保留实物量。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_film`
- 来源: ilcd-2010

###### 聚丙烯包装捆带——grossS 对外随货（`band_gross_dispatch`）

实测本精确组件在每次真实对外发运上的 grossS，含原/旧 FG 及重复发运。这是包装/服务，不是净金属 Q、新采购或共产品。内部复用/领用抵消。

- 选定流: 聚丙烯包装捆带
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行及原 cohort Qc 使用第 8 节同一次服务结果；原始组件事件保留实物量。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_band`
- 来源: ilcd-2010

###### 聚丙烯包装捆带——EO 对外返还（`band_external_return_out`）

实测本精确组件真实对外返还 EO，与 grossS 及废物互斥。保留件/cohort 追踪及所有权/服务条款；发运及后续 ER 均不重置内含历史。

- 选定流: 聚丙烯包装捆带
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行及原 cohort Qc 使用第 8 节同一次服务结果；原始组件事件保留实物量。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_band`
- 来源: ilcd-2010

###### 整份供货胶粘纸包装标签——grossS 对外随货（`label_gross_dispatch`）

实测本精确组件在每次真实对外发运上的 grossS，含原/旧 FG 及重复发运。这是包装/服务，不是净金属 Q、新采购或共产品。内部复用/领用抵消。

- 选定流: 整份供货胶粘纸包装标签
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行及原 cohort Qc 使用第 8 节同一次服务结果；原始组件事件保留实物量。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_label`
- 来源: ilcd-2010

###### 整份供货胶粘纸包装标签——EO 对外返还（`label_external_return_out`）

实测本精确组件真实对外返还 EO，与 grossS 及废物互斥。保留件/cohort 追踪及所有权/服务条款；发运及后续 ER 均不重置内含历史。

- 选定流: 整份供货胶粘纸包装标签
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行及原 cohort Qc 使用第 8 节同一次服务结果；原始组件事件保留实物量。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_label`
- 来源: ilcd-2010

###### 可重复使用带盖钢制废料容器——grossS 对外随货（`container_gross_dispatch`）

实测本精确组件在每次真实对外发运上的 grossS，含原/旧 FG 及重复发运。这是包装/服务，不是净金属 Q、新采购或共产品。内部复用/领用抵消。

- 选定流: 可重复使用带盖钢制废料容器
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行及原 cohort Qc 使用第 8 节同一次服务结果；原始组件事件保留实物量。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_container`
- 来源: ilcd-2010

###### 可重复使用带盖钢制废料容器——EO 对外返还（`container_external_return_out`）

实测本精确组件真实对外返还 EO，与 grossS 及废物互斥。保留件/cohort 追踪及所有权/服务条款；发运及后续 ER 均不重置内含历史。

- 选定流: 可重复使用带盖钢制废料容器
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行及原 cohort Qc 使用第 8 节同一次服务结果；原始组件事件保留实物量。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_container`
- 来源: ilcd-2010

##### 废物流

###### 瓦楞纤维纸板运输纸箱废物（`carton_waste`）

实测本单一实际废弃组件 W 及真实去向/污染；未单独去除的附着污染为非叠加成分子账。不将全部领用或收货视为废物；核对空库/WIP/FG/周转库存及只计一次的原负荷。

- 选定流: 瓦楞纤维纸板运输纸箱废物
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行及原 cohort Qc 使用第 8 节同一次服务结果；原始组件事件保留实物量。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_carton`
- 来源: ilcd-2010

###### 木质运输托盘废物（`pallet_waste`）

实测本单一实际废弃组件 W 及真实去向/污染；未单独去除的附着污染为非叠加成分子账。不将全部领用或收货视为废物；核对空库/WIP/FG/周转库存及只计一次的原负荷。

- 选定流: 木质运输托盘废物
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行及原 cohort Qc 使用第 8 节同一次服务结果；原始组件事件保留实物量。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_pallet`
- 来源: ilcd-2010

###### 聚乙烯收缩膜废物（`film_waste`）

实测本单一实际废弃组件 W 及真实去向/污染；未单独去除的附着污染为非叠加成分子账。不将全部领用或收货视为废物；核对空库/WIP/FG/周转库存及只计一次的原负荷。

- 选定流: 聚乙烯收缩膜废物
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行及原 cohort Qc 使用第 8 节同一次服务结果；原始组件事件保留实物量。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_film`
- 来源: ilcd-2010

###### 聚丙烯包装捆带废物（`band_waste`）

实测本单一实际废弃组件 W 及真实去向/污染；未单独去除的附着污染为非叠加成分子账。不将全部领用或收货视为废物；核对空库/WIP/FG/周转库存及只计一次的原负荷。

- 选定流: 聚丙烯包装捆带废物
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行及原 cohort Qc 使用第 8 节同一次服务结果；原始组件事件保留实物量。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_band`
- 来源: ilcd-2010

###### 整份供货胶粘纸包装标签废物（`label_waste`）

实测本单一实际废弃组件 W 及真实去向/污染；未单独去除的附着污染为非叠加成分子账。不将全部领用或收货视为废物；核对空库/WIP/FG/周转库存及只计一次的原负荷。

- 选定流: 整份供货胶粘纸包装标签废物
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行及原 cohort Qc 使用第 8 节同一次服务结果；原始组件事件保留实物量。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_label`
- 来源: ilcd-2010

###### 可重复使用带盖钢制废料容器废物（`container_waste`）

实测本单一实际废弃组件 W 及真实去向/污染；未单独去除的附着污染为非叠加成分子账。不将全部领用或收货视为废物；核对空库/WIP/FG/周转库存及只计一次的原负荷。

- 选定流: 可重复使用带盖钢制废料容器废物
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 本实测行及原 cohort Qc 使用第 8 节同一次服务结果；原始组件事件保留实物量。不再相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_container`
- 来源: ilcd-2010

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| alloc_subdivide | source and services | 本情景为归因分配。先归属可独立测量的专属铸造、单收、服务及处理操作；共同清单分配前先实际/虚拟细分。保留期初/期末 WIP 及每个上游交换向量。不能对全部交换套全厂质量比。 | ilcd-2010 |
| alloc_true_joint | positive-value metallic scrap | 按真实化学/质量及接收功能，识别产出与本二次整合金供料技术上最相近材料的真正共同生产过程；该门可早于最终成形/手工切离。保留原铸造/成形原始清单，但不能自动把全部后续制品专属步骤分给废料：须逐交换证明归属，仅结转既定份额并加入真正专属废料准备/服务。不默认循环平均、回收率或替代模型；外部回收平均输入须有兼容的已声明上游方法及经审查数据。 | ilcd-2010 |
| alloc_causality | remaining joint exchanges | 先依据原合金生产/铸造历史核定真正共同生产过程，再对每个剩余交换分别识别决定性物理关系；不默认准备或销售即共同门。内含合金可按实测材料实体归属；保温热、模具使用及共享服务须各有已证明的因果驱动与真实损失。质量、焓、时间或价值比例不能自行构成依据。 | ilcd-2010 |
| alloc_residual | only irreducible residual exchanges | 只有证明决定性物理因果关系无法解决某剩余交换后，才可按同一共同门实际数量、质量及状态使用同期市场价值。比较前剔除下游后处理、包装及运输附加值。记录价格期、证据、不确定性及敏感性。不设固定比例，不任意选物理/经济法，不自动信用。负价值废物及付费处理须有明确经审查的废物边界，不能默填零或负分配系数。 | ilcd-2010 |
| alloc_cohorts | rework/returns and reusable components | 来源合金、铸造及原 cohort 负荷只计一次。内部重熔保留真实增量能耗/损失并转移继承向量，不变成新外购。真实退回在必要时逆转原交付归属并保留历史；仅加入真实新增服务/重工负荷。包装 P/N_ext/ER 按 boundary_packaging 独立于采购/所有权处理，生产与服务账户采用同一闭合。未知继承负荷保持明确，不能用零代替。 | ilcd-2010 |
| alloc_waste | scrap and associated wastes | 有正价值的金属浇口料保留其既定继承分配。浮渣、尘、废模具和各包装废物均为独立实物转移，使用真实处理/provider 边界。商业回购抵款属于金融交易。废物名称或回收商服务说明均不能证明零历史、避免原生生产、共产品或环境信用；下游金属回收不在本参考输出内。 | nt-white-metals; dkl-reception; ilcd-2010 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

aggregation_rule 单元格仅声明最终参考基准。所有协议仅采未除原始量；原始换算及真实分配先于下方计算规则中的唯一归一化。服务行使用原 Qc；实物组件事件保留原始量及同门闭合。任何协议均不对采集值再次相除。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | source_casting | 单一合金/模具/滑石/伴生/内部转移行 | foreground_record | row_id; 批次; 来源; 事件类型; 原始量及单位; 期初/期末库存; 整份化验; 含水; 伴生质量; 内部重熔 ID; 逐交换负荷向量; provider 已含范围 | 以校准秤称量真实整份制品/料流；核对收货、铸造日志、手工切离转移及盘点；确认一个合金批次及实际模具材料。保留全部失败/待机/清理批次。实测模具寿命使用及真实磨损，不假设周期数。 | kg | 逐事件及库存截点 | 完整报告期及相关原 cohort | 一个已识别铸造来源及相连准备场址 | 每 1 kg 参考流 | 秤校准; 供方报告; 来源账; 原上游逐交换向量 |
| cp_release | scrap_release | released_scrap 及实物 G_Q | foreground_record | 来源批次; 新增首次放行 ID; G_Q; H_Q; J_Q; Q; 期初/期末 WIP; 期初/期末 FG; grossV; Ru/Rg 及原交付 ID; 接受测试; 逐交换负荷历史 | 校准的净重/gross/皮重称量及代表性含水/异物/成分测试，附真实接收规格、批次记录及照片。按原首次放行事件去重；计入前核对 G_Q 与干 Q。实物与服务流动分开。 | kg | 逐批及报告截点 | 全部首次放行批料及退回/库存原历史 | 铸造至接收方可追溯链 | 每 1 kg 参考流 | 接收协议; 化验; 皮重/水分记录; 唯一放行登记; WIP/FG 向量 |
| cp_energy | source_casting | casting_electricity | foreground_record | 电表; 起止读数; 原始 kWh 或 MJ; 使用时的真实功率速率/时间; 设备状态; cohort; 分配驱动; 电压; 地域; provider 范围 | 分表计量熔化/保温/铸造/通风及准备；核对账单与表覆盖，含失败/Q0/启停/待机/清理/重工。仅积分实测功率速率，不用铭牌功率作耗电。 | MJ | 逐电表区间 | 报告期全部运行及无产出状态 | 真实场址；电力服务边界 | 每 1 kg 参考流 | 电表校准; 账单核对; 电压/provider 记录 |
| cp_waste | source_casting | 每个真实原子废物流 | foreground_record | row_id; 整流原始质量; 含水; 金属/氧化物相化验; 去向; provider; 转移日期; 期初/期末废物库存; 原来源及向量 | 称量各真实单收废物并进行代表性相态/元素分析；内重工与外运分别核对。整份混合尘/浮渣绝不与组分分区叠加。 | kg | 逐产生/转移事件及库存截点 | 完整报告期含失败批次 | 铸造/准备及真实接收 provider | 每 1 kg 参考流 | 磅单; 化验; provider 范围; 处理记录 |
| cp_species | source_casting | 取氧及各排放分子 | foreground_record | 物种; 介质; 相态; 实测浓度及基准; 累计体积或真实速率/时间; 温度; 绝对压力; 湿/干态; 物种测试; 检出限; 独立 O/H/Sn/Sb/Cu 证据 | 使用真实排放/物种测量及独立氧/相态数据。浓度与匹配累计体积只换算一次，或真实速率只积分一次；按实际物种质量基准。记录真实不存在/不确定结果。声称完整前须将其他真实物种及水状态各自新增一行。 | kg | 有代表性的实测工况及逐事件 | 启机/稳定/待机/清理/重工覆盖 | 真实空气取用/烟道/无组织介质 | 每 1 kg 参考流 | 物种方法; 实验室 QA; 实测体积; 独立平衡 |
| cp_service | cohort_service | 一项真实电力、运输或带盖钢容器租赁服务 | foreground_record | row_id; 原 cohort; Qc; 服务日期; 未除能耗; 实际容器日及租赁条款; 实际 gross 货物质量; 距离; 空车/逆向行程; H; 驱动; provider 已含范围; 退回/重工增量 | 计量真实服务并用实际车辆/称量/里程及仓储记录。保留原生产向量；新增服务负荷独立确定，不重置 Qc。外购运输仅含一次内部燃料/排放。即使协议制造/租赁服务，包装 P/N_ext/ER 仍用组件协议。 | row-declared unit | 每次真实服务事件 | 原 cohort 寿命及实际服务期 | 场址及指定接收方供货路线 | 每 1 kg 参考流 | 服务表/日志; provider 合同; 原 Qc/向量; 逆向行程证据 |
| cp_pack_carton | cohort_service | 瓦楞纤维纸板运输纸箱 | foreground_record | 组件 carton; 事件 ID; 材质/形态/类型/方向; 实测原始 kg 及使用时件数/皮重; O_empty/O_WIP/O_FG/O_reusable; P; N_ext 及非采购类型; ER 及原对外发运 ID; C_empty/C_WIP/C_FG/C_reusable; grossS; EO; W; 独立实测 F_in/F_out 材料/水/物种/相态转移及跨账配对 ID; 内部领用/复用 ID; 所有权; 原 cohort; 逐交换继承向量; 供方已含范围; 真实增量租返服务 | 实物称量本单一真实组件并识别全部收发，含供方随货附着物及首次受托/借入/租入物。按真实历史分别归入 purchase、first_nonpurchase 或 external_return 卡，不能复制一整批。在同一门按独立实测且不重叠的变化腿及真实原子接口核对 O + P + N_ext + ER + F_in = C + grossS + EO + W + F_out；内部仓库/WIP/FG/复用抵消。核实真实材料；替代组件缺接口即数据不完整。 | kg | 每次实物事件及库存截点 | 全报告期及原对外发运/cohort 历史 | 一个组件及同一物理门，适用于制造和服务 | 每 1 kg 参考流 | 实测收货; 供方包装/BOM; 非采购/借租协议; 发运退回链; 盘点; 原向量; provider 范围 |
| cp_pack_pallet | cohort_service | 木质运输托盘 | foreground_record | 组件 pallet; 事件 ID; 材质/形态/类型/方向; 实测原始 kg 及使用时件数/皮重; O_empty/O_WIP/O_FG/O_reusable; P; N_ext 及非采购类型; ER 及原对外发运 ID; C_empty/C_WIP/C_FG/C_reusable; grossS; EO; W; 独立实测 F_in/F_out 材料/水/物种/相态转移及跨账配对 ID; 内部领用/复用 ID; 所有权; 原 cohort; 逐交换继承向量; 供方已含范围; 真实增量租返服务 | 实物称量本单一真实组件并识别全部收发，含供方随货附着物及首次受托/借入/租入物。按真实历史分别归入 purchase、first_nonpurchase 或 external_return 卡，不能复制一整批。在同一门按独立实测且不重叠的变化腿及真实原子接口核对 O + P + N_ext + ER + F_in = C + grossS + EO + W + F_out；内部仓库/WIP/FG/复用抵消。核实真实材料；替代组件缺接口即数据不完整。 | kg | 每次实物事件及库存截点 | 全报告期及原对外发运/cohort 历史 | 一个组件及同一物理门，适用于制造和服务 | 每 1 kg 参考流 | 实测收货; 供方包装/BOM; 非采购/借租协议; 发运退回链; 盘点; 原向量; provider 范围 |
| cp_pack_film | cohort_service | 聚乙烯收缩膜 | foreground_record | 组件 film; 事件 ID; 材质/形态/类型/方向; 实测原始 kg 及使用时件数/皮重; O_empty/O_WIP/O_FG/O_reusable; P; N_ext 及非采购类型; ER 及原对外发运 ID; C_empty/C_WIP/C_FG/C_reusable; grossS; EO; W; 独立实测 F_in/F_out 材料/水/物种/相态转移及跨账配对 ID; 内部领用/复用 ID; 所有权; 原 cohort; 逐交换继承向量; 供方已含范围; 真实增量租返服务 | 实物称量本单一真实组件并识别全部收发，含供方随货附着物及首次受托/借入/租入物。按真实历史分别归入 purchase、first_nonpurchase 或 external_return 卡，不能复制一整批。在同一门按独立实测且不重叠的变化腿及真实原子接口核对 O + P + N_ext + ER + F_in = C + grossS + EO + W + F_out；内部仓库/WIP/FG/复用抵消。核实真实材料；替代组件缺接口即数据不完整。 | kg | 每次实物事件及库存截点 | 全报告期及原对外发运/cohort 历史 | 一个组件及同一物理门，适用于制造和服务 | 每 1 kg 参考流 | 实测收货; 供方包装/BOM; 非采购/借租协议; 发运退回链; 盘点; 原向量; provider 范围 |
| cp_pack_band | cohort_service | 聚丙烯包装捆带 | foreground_record | 组件 band; 事件 ID; 材质/形态/类型/方向; 实测原始 kg 及使用时件数/皮重; O_empty/O_WIP/O_FG/O_reusable; P; N_ext 及非采购类型; ER 及原对外发运 ID; C_empty/C_WIP/C_FG/C_reusable; grossS; EO; W; 独立实测 F_in/F_out 材料/水/物种/相态转移及跨账配对 ID; 内部领用/复用 ID; 所有权; 原 cohort; 逐交换继承向量; 供方已含范围; 真实增量租返服务 | 实物称量本单一真实组件并识别全部收发，含供方随货附着物及首次受托/借入/租入物。按真实历史分别归入 purchase、first_nonpurchase 或 external_return 卡，不能复制一整批。在同一门按独立实测且不重叠的变化腿及真实原子接口核对 O + P + N_ext + ER + F_in = C + grossS + EO + W + F_out；内部仓库/WIP/FG/复用抵消。核实真实材料；替代组件缺接口即数据不完整。 | kg | 每次实物事件及库存截点 | 全报告期及原对外发运/cohort 历史 | 一个组件及同一物理门，适用于制造和服务 | 每 1 kg 参考流 | 实测收货; 供方包装/BOM; 非采购/借租协议; 发运退回链; 盘点; 原向量; provider 范围 |
| cp_pack_label | cohort_service | 整份供货胶粘纸包装标签 | foreground_record | 组件 label; 事件 ID; 材质/形态/类型/方向; 实测原始 kg 及使用时件数/皮重; O_empty/O_WIP/O_FG/O_reusable; P; N_ext 及非采购类型; ER 及原对外发运 ID; C_empty/C_WIP/C_FG/C_reusable; grossS; EO; W; 独立实测 F_in/F_out 材料/水/物种/相态转移及跨账配对 ID; 内部领用/复用 ID; 所有权; 原 cohort; 逐交换继承向量; 供方已含范围; 真实增量租返服务 | 实物称量本单一真实组件并识别全部收发，含供方随货附着物及首次受托/借入/租入物。按真实历史分别归入 purchase、first_nonpurchase 或 external_return 卡，不能复制一整批。在同一门按独立实测且不重叠的变化腿及真实原子接口核对 O + P + N_ext + ER + F_in = C + grossS + EO + W + F_out；内部仓库/WIP/FG/复用抵消。核实真实材料；替代组件缺接口即数据不完整。 | kg | 每次实物事件及库存截点 | 全报告期及原对外发运/cohort 历史 | 一个组件及同一物理门，适用于制造和服务 | 每 1 kg 参考流 | 实测收货; 供方包装/BOM; 非采购/借租协议; 发运退回链; 盘点; 原向量; provider 范围 |
| cp_pack_container | cohort_service | 可重复使用带盖钢制废料容器 | foreground_record | 组件 container; 事件 ID; 材质/形态/类型/方向; 实测原始 kg 及使用时件数/皮重; O_empty/O_WIP/O_FG/O_reusable; P; N_ext 及非采购类型; ER 及原对外发运 ID; C_empty/C_WIP/C_FG/C_reusable; grossS; EO; W; 独立实测 F_in/F_out 材料/水/物种/相态转移及跨账配对 ID; 内部领用/复用 ID; 所有权; 原 cohort; 逐交换继承向量; 供方已含范围; 真实增量租返服务 | 实物称量本单一真实组件并识别全部收发，含供方随货附着物及首次受托/借入/租入物。按真实历史分别归入 purchase、first_nonpurchase 或 external_return 卡，不能复制一整批。在同一门按独立实测且不重叠的变化腿及真实原子接口核对 O + P + N_ext + ER + F_in = C + grossS + EO + W + F_out；内部仓库/WIP/FG/复用抵消。核实真实材料；替代组件缺接口即数据不完整。 | kg | 每次实物事件及库存截点 | 全报告期及原对外发运/cohort 历史 | 一个组件及同一物理门，适用于制造和服务 | 每 1 kg 参考流 | 实测收货; 供方包装/BOM; 非采购/借租协议; 发运退回链; 盘点; 原向量; provider 范围 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_release | released_scrap | Q = cp_release 中唯一新增首次放行整合金浇口净干质量之和。保留 G_Q = Q + H_Q + J_Q 及原批次 ID；实物 FG 闭合用 G_Q，期末 FG 只计一次。退回/重验/服务不增加 Q。 | cp_release; G_Q; H_Q; J_Q | Q | ilcd-2010 |
| calc_convert | all inventory rows | 各未除原始行按实测物质状态仅一次换算到分子单位。kWh 电量用 3.6 MJ/kWh。真实重型货车服务的原始 t km = 实测整货 kg * 距离 km / 1000，先换算后分配。仅对速率积分；累计体积已含时间。 | cp_material; cp_energy; cp_species; cp_service; cp_waste | converted raw row amounts | ilcd-2010 |
| calc_assign | all inventory rows | 逐交换 j 核对：期初继承向量 + 真实当期收货/当期增量负荷 + 实测内部转移 = 期末结转向量 + 分配给真实输出/废物/服务的向量。合并时内部数量及向量抵消。先 alloc_subdivide、再 alloc_causality，仅对剩余共同负荷使用有依据的 alloc_residual。保留全部 Q0/失败/待机/清理/重工负荷。制造 A_j 为结转期末 WIP 后归属新增首次放行 Q 的负荷分子，不是 gross 实物输出，也不是虚构负信用。实际服务保留独立原 cohort A_service_j，仅由 calc_service 归一化。 | converted raw row amounts; cp_material; cp_release; allocation records; opening and closing exchange vectors | A_j | ilcd-2010 |
| calc_once | alloy_ingot; casting_electricity; silicone_mould; talc_release; oxygen_uptake; uncoated_casting; unreleased_gates; casting_dross; filter_dust; spent_mould; sn_o2_air; sb_o3_air; cu_o_air; gates_to_release; released_scrap; rejected_metal | unit_exchange_j = A_j / Q，仅在 Q > 0 时。原始换算及分配后只执行这一次除法。参考输出为 1 千克。卡片与协议汇总引用同一结果；Q = 0 保留真实负荷而不产生单位结果。内部转移行保留审计量，在合并产品数据集中抵消。 | A_j; Q | unit_exchange_j | ilcd-2010 |
| calc_service | cohort_service | service_exchange_j = 真实已分配增量服务分子 A_service_j / 原 cohort Qc，仅当 Qc > 0 且只除一次。以实际驱动 H 分配共同服务，不生成生产输出。原生产向量只结转一次；包装 P/N_ext/ER 及 grossS/EO/W 仍为独立于负荷分配的实物原始账。Qc 或继承向量未知则不完整。 | cp_service; original Qc; actual H; A_service_j; component ledgers | service_exchange_j | ilcd-2010 |
| calc_packaging | cohort_service | 在同一实物门逐材质/形态组件核对 O + P + N_ext + ER + F_in = C + grossS + EO + W + F_out；P 为真实采购，N_ext 为真实非采购首次收货，ER 为有先前对外发运史的退回。O/C 含附着 WIP/FG 及周转库存，内部领用/复用抵消，独立转移各 cohort 逐交换向量。绝不以净 Q 代 grossS，不用符号代替缺失的真实接口。 | cp_pack_carton; cp_pack_pallet; cp_pack_film; cp_pack_band; cp_pack_label; cp_pack_container | component physical closures and exchange-vector lineage | ilcd-2010 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all actual inputs and outputs | 原生身份及供方/过程兼容须核完整正式名、类型、路线、形态、实际 CAS、地域、牌号及全部注释/属性。单凭分类标签不能证明成分或形态。采用 UUID 的中文名保留官方显示。 | 完整直读及精确属性/单位组引用; 供方化验及路线记录 |
| dq_complete | complete chain | 采集全期真实值及原向量，含无产出状态、WIP/FG、外部实收及全部包装事件。真实原子接口缺失或负荷未测则不完整；不默认零、不猜密度/配方、不汇成 other 流。 | 逐事件清单; 门平衡; 来源及服务历史 |
| dq_evidence | sources and receiving gate | 定性来源仅证明兼容操作。独立证明真实合金成分、无涂层金属形态、接收方身份/规格及批次接受；记录时间/地域代表性及不确定性。工程检查不构成科学审批。 | primary 来源上下文; 真实测试/合同; 不确定性记录 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| val_scope | all actual applicable records | 确认一个真实锡为主金属的 Sn-Sb-Cu 来源合金、固态无涂层金属浇口、原铸造/手工分离及实际再熔供料接受。拒绝镀锡钢、Cu/Pb/Zn 基料、整份膏剂及氧化物/浮渣身份替代。 | un-cpc3-2025; asl-pewter; tt-casting-2012; nt-white-metals; dkl-reception |
| val_reference | all actual applicable records | Q 对每个新增首次放行合金净干批次仅计一次，含留在期末 FG 的物料。核对参考行 1 千克、G_Q/水分/异物核对、WIP/FG 实物门及 G_Q/内部转移抵消。交付/重验/退回绝不产生 Q。 | ilcd-2010 |
| val_normalization | all actual applicable records | 追踪原始记录至真实单位/速率换算、分配及一次 A_j/Q。核对全部 Inputs/Output/来源链接及完整说明。Q0 及不支持/未知关系保留真实负荷及未解决问题，不冒充通过的单位结果。服务使用原 Qc，真实 H 仅作驱动。 | ilcd-2010 |
| val_mass_species | all actual applicable records | 用真实相态/物种/水证据检查独立整流实物、Sn/Sb/Cu 及相关 O/H 平衡。不以残差拟合多个未知，不叠加整混合物和来源分区，不把泛金属/PM 换成氧化物。每个真实废物转移只有一个 provider。 | ilcd-2010 |
| val_packaging | all actual applicable records | 逐个检查真实组件事件/接口及实测量，含供方随货非采购/首次受托/借入/租入收货。P/N_ext/ER 互斥，ER 有原对外发运史。生产、协议制造及服务均在同组件/门核实 O + P + N_ext + ER + F_in = C + grossS + EO + W + F_out，含空库/WIP/FG/周转库存；内部领用抵消。真实接口缺失不能靠加符号、虚构收货或复制整批通过。 | nt-britannia-2015; ilcd-2010 |
| val_history | all actual applicable records | 分别检查所有权、原 cohort、每个继承交换向量、供方已含范围及真实增量租返/清理/重工服务。原制造仅计一次并保留全部失败/待机/Q0 负荷；不生新 Q，不推免费随货零负荷、自动共产品或避免生产信用。 | ilcd-2010 |
| val_bindings | all actual applicable records | 使用精确核实的 Product 废锡身份及精确支持链。中国低压交流电和空气资源氧仅按卡片完整原生条件适用。未绑定具体辅助流在数据包使用前须核实真实 provider/身份；普通辅助 UUID 缺口不构成整份方法的全局停止。区分已执行/跳过检查及真实证据不完整与审批。 | ilcd-2010 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 一种单源金属 Sn-Sb-Cu 浇口规格的真实兼容再熔供料输入 |
| allowed_use | 披露历史分配、来源/接收适用性及实际 cohort 服务的归因建模 |
| excluded_use | 全叶覆盖；镀锡钢/浮渣/焊膏/其他合金替代；默认配方或密度；零历史或避免生产信用；仅凭本 PCR 作法律/技术批准 |
| required_metadata | 一个原合金批次及原铸造 cohort; 整份 Sn-Sb-Cu 化验与锡为主金属的证据; 供方条/锭形态及上游逐交换负荷向量; 无添加铅规格及实际微量分析; 实际模具材质及固化/采购边界; 熔化/保温及切离配置; 无后处理涂层或助焊膏的干态金属浇口/流道形态; 真实接收方身份及供料接受条件; 场址及报告期; 首次放行 Q 及实物 G_Q 对应; 含水及可剥离污染物实测; 期初/期末 WIP 与 FG cohort 向量; gross 实物发运及退回历史; 失败/Q0/启停/待机/清理/重工负荷; 电力电压与地域及供方范围; 每种实际材料与物种及去向; 各包装组件 P/N_ext/ER 事件及负荷所有权; 分配共同门及服务 Qc 历史 |
| required_quality_disclosure | 完整 primary 上下文、真实实测清单及 provider 范围、全部未解决原子身份及未测值、分配不确定性、全部已执行/跳过检查及局限 |
| update_trigger | 原合金/来源、铸造/模具/能源路线、接收供料协议、污染/准备、负荷/分配方法或组件/服务收货边界变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | United Nations, CPC 3.0 Structure and Explanatory Notes, 30 June 2025, PDF pp.203–204; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 分类背景：锡废料、钢铁废料与非铁金属灰渣的区分；不提供合金批次化验或接收规格。 |
| asl-pewter | extension_guidance | ASL Pewter, What is Pewter?, full manufacturer page; https://aslpewter.com/what-is-pewter/ | 独立的真实 Sn-Sb-Cu 铸造合金、整合金锭采购及熔化/铸造实例；模具替代情况。成分仅为实例，不是规定配方。 |
| tt-casting-2012 | extension_guidance | T and T Designs, Casting Pewter – Made in the U.S.A., 3 May 2012; https://tandtinc.wordpress.com/2012/05/03/pewter-casting-made-in-the-u-s-a/ | 实际橡胶模离心铸造及滚磨/电镀前手工分离铸件与浇注环；不提供配方或当前工厂清单。 |
| nt-britannia-2015 | extension_guidance | Nathan Trotter, Britannia Pewter Metal, Rev.3 (2015), complete p.1; https://nathantrotter.com/wp-content/uploads/2020/06/Britannia-Pewter-Metal-Data.pdf | 真实固态 Sn-Sb-Cu 槽口条/锭供货、随货成分报告及纸箱/托盘/包膜/捆带/标签。典型成分限值及印刷密度/单位不是工厂默认值。 |
| nt-white-metals | extension_guidance | Nathan Trotter, Pewter & White Metal Casting Alloys, complete single-page manufacturer flyer; https://nathantrotter.com/wp-content/uploads/2020/06/Pewter-white-metal-product-flyer2.pdf | 锡基铸造合金供货、样品分析及废料回购。相邻锌基与 Sn-Bi 变种及不同表头不允许把所有 pewter 视为同一成分；商业抵款不是环境信用。 |
| dkl-reception | extension_guidance | DKL Metals, Solder Analysis and Recycling Services, full manufacturer/recycler page; https://dklmetals.co.uk/solder-analysis-and-recycling-services/ | 明确接收锡基合金废料/制造边角料并提供分析服务；浮渣属于另一物料/路线。一般服务说明不构成具体批次批准。 |
| ilcd-2010 | official_guidance | European Commission JRC, ILCD Handbook, General guide for LCA – Detailed guidance, first edition March 2010, §§7.9.2–7.9.3 and Annex 14.4; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因多功能性：细分、逐交换决定性物理因果关系、剩余共同门价值及废物/回收背景；不规定固定分配或自动替代。 |
| nicem-f100-spin-casting-furnace | extension_guidance | Nicem SpA，F 100 SPIN CASTING，无已核实出版日期的制造商完整两页技术资料；https://www.nicem.it/wp-content/uploads/2019/10/F-100-SC-E.pdf | 定性支持电加热、温度调节的锡合金熔化设备与锡基合金制品及配套离心铸造线的技术兼容性。不采用机型参数，不作为任何工厂实际设备的观察证据。 |
| contenti-electric-melting-furnace-manual | extension_guidance | The Contenti Company，Electric Melting Furnace: for gold, silver, copper-based, and tin-based alloys，无已核实出版日期的完整四页手册，尤其第 1–3 页及操作步骤 6–10；https://contenti.com/pub/media/catalog/pdf/instructions/170-84X-instr.pdf | 定性支持电熔及围绕选定加热腔设定值调节的保温工作配置。不提供实测熔体温度、能耗或特定工厂设备证明。 |
