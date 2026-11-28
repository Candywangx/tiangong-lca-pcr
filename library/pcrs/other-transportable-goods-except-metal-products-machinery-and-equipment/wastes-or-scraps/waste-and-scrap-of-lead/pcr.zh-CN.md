---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-and-scrap-of-lead
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 供回收的源头单收新轧制铅板裁切边角料

## 1. 范围与适用性

本 PCR 覆盖单一可追溯全新未涂层轧制铅板在屋面泛水坯排样及手动冷裁切中真实形成的源头单收固体金属边角料。纳入原铅板接收及继承供货历史、母制品与边角料共同裁切、与可用余板分流、实际必要整理、净称量，以及按指定铅回用接收方要求的首次质量放行。购入已经形成的废料再包装不能满足本范围。实物终端为供回收接收的洁净固体铅板边角料，止于重熔或精炼之前。

代表板材为 Calder 文件所述标准未涂层建筑用轧制铅板，不包括其镀锡 Heritage、彩涂或预风化替代品。BS EN 12588 供货规格是特定来源的产品描述，不是实际批次的假定化验结果。LSTA 记述安装裁切边角料、适当容器、单收及废金属商接收；Monument 记述钩刃铅板刀；WB Phillips 记述洁净屋面铅材、泛水及板材废料的称量分级接收。组合为明示的定性技术综合，不声称同 SKU、同工厂订单或工厂收率能耗数据。每份数据包须核实实际板材证明、手动裁切配置及接收验收。

排除整只或拆解蓄电池及其极板极膏、作为参考产品的含铅灰渣浮渣粉尘或化工污泥、铅化合物、特意采用的其他铅合金供料、涂层或包覆板材及混合来源、旧腐蚀屋面拆除料、粉末车屑、未锻轧铅或锭、板材本身制造，以及完整屋面安装使用。实际清理粉尘是另行管理的出口，不能计入 Q。可用余板按实际处置证明其状态，不能自动改成废料。不提供默认纯度、密度、收率、法律阈值、零上游负荷或回收信用。本归因方法仅适用于研究目标要求分配的场景，不给出后果型替代结果。 `un-cpc3-2025`; `calder-rolled-sheet`; `lsta-working-lead-2018`; `monument-lead-tools-2018`; `wbphillips-lead-reception` `jrc-ilcd-2010`

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-and-scrap-of-lead |
| classification_refs | CPC 3.0:39364；较窄方法范围。当前已接受的 narrower 映射及其持久接受决定以 classifications/mappings/cpc-3.0-to-pcr.yaml 和 acceptance.decision_ref 为准；不授予全叶覆盖、独立科学/翻译批准或发布。 |
| covered_products | 单批全新未涂层轧制铅泛水裁切固体边角料，首次按指定回收接收要求验收 |
| excluded_products | 排除整只或拆解蓄电池及其极板极膏、作为参考产品的含铅灰渣浮渣粉尘或化工污泥、铅化合物、特意采用的其他铅合金供料、涂层或包覆板材及混合来源、旧腐蚀屋面拆除料、粉末车屑、未锻轧铅或锭、板材本身制造，以及完整屋面安装使用。实际清理粉尘是另行管理的出口，不能计入 Q。可用余板按实际处置证明其状态，不能自动改成废料。不提供默认纯度、密度、收率、法律阈值、零上游负荷或回收信用。本归因方法仅适用于研究目标要求分配的场景，不给出后果型替代结果。 |
| representative_product | 供回收的源头单收新轧制铅板裁切边角料 |
| production_route | 已供轧制板接收 -> 排样及手动冷裁切形成泛水坯和边角料 -> 源头单收及实际必要整理 -> 称量及首次按接收规格放行 |
| market_state | 未重熔固体金属边角料; 实际放行状态整份净质量; 实测表面状态与组成; 无通用默认品级 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 向指定铅回用接收方供应原来源新轧制铅板裁切边角料 |
| How much | 唯一首次质量放行的整份净边角料 1 千克 |
| How well | 实际可追溯板材组成及洁净固体边角状态按特定接收方要求验收; 不假定纯铅或回收率 |
| How long or cycle | 一个原制造批群; 已发生后续服务沿用原 Q_c 与实测 H |
| reference_flow_link | released_offcuts |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 铅废料 `c814e493-f6ff-48a6-9b92-caba670f15e3` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 单一可追溯全新未涂层轧制铅板批次及有文件的 BS EN 12588 供货规格; 实际整份合金组成及痕量元素而非假定纯铅; 板材尺寸与实际手动裁切工具及排样; 母泛水坯门及板材继承负荷; 固体边角形态与可再用余板电池灰渣污泥分离; 实际氧化层涂层游离水及实物污染子账; 源头单收及实际必要整理; 指定铅回用接收方及状态匹配验收; 唯一首次放行身份及排除容器的整份净 Q; 原料在制品成品期初期末历史及逐交换向量; 全部失败 Q0 启停待机清理返工; 分配负荷 A 与毛实物 V 分开; 原 Q_c 及实测放行后服务时段 H; 实际场址国家供电电压及供方; 每种包装完整独立池及上游归属; 每项真实废物流排放物种介质及去向 |

每项限定信息须进入实际包元数据或完整交换过程说明；UUID 不能证明批次验收。released_offcuts 完整卡片保留这些限制供下游消费。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q 为 cp_release 下唯一首次质量放行的整份边角料净质量。排除全部包装及已去除异物；实际附着氧化层及水为整份实物的实测子账。Q 不是含铅量，也不是发运量。成品行等于 1 千克。 |
| native_units | all inventory rows | actual extensive property | kg; MJ | 保留原始单位及参考状态；克至千克、千瓦时至兆焦只换算一次。仅对真实质量或体积速率按匹配时间积分；累计体积不再乘时间。体积转质量须有该物质实际状态的独立密度；不得对其他物质套用水密度或猜测单件千克。 |
| quotient_once | all inventory rows | actual extensive property | per reference flow | 采集未除分母的原始分子；换算及逐交换归属先于 calc_once。卡片与聚合只引用该唯一 A/Q 结果。服务沿用原 Q_c；H 是时段，不能作为生产分母。Q=0 保留真实负荷，不生成单位结果。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收单一可追溯全新未涂层轧制铅板批次及其匹配上游供货历史 |
| starting_condition_role | foreground_starting_condition |
| product_classification_scope | 仅 CPC 39364 中本定义的洁净新板材固体边角料子集; 非所有含铅废物 |
| recursive_input_rule | 外购已制备废料不产生制造 Q。内部余板再用及返工继承历史，成对内部转移抵消。已放行退回料沿用原批群，不能再获得 Q。 |
| upstream_dataset_requirement | 整份轧制铅板仅一套匹配供方，含其实际回收精炼合金化轧制及供货运输; 实际刀具及每项公用工程与包装制品各计一次 |
| disclosure | 单一可追溯全新未涂层轧制铅板批次及有文件的 BS EN 12588 供货规格; 实际整份合金组成及痕量元素而非假定纯铅; 板材尺寸与实际手动裁切工具及排样; 母泛水坯门及板材继承负荷; 固体边角形态与可再用余板电池灰渣污泥分离; 实际氧化层涂层游离水及实物污染子账; 源头单收及实际必要整理; 指定铅回用接收方及状态匹配验收; 唯一首次放行身份及排除容器的整份净 Q; 原料在制品成品期初期末历史及逐交换向量; 全部失败 Q0 启停待机清理返工; 分配负荷 A 与毛实物 V 分开; 原 Q_c 及实测放行后服务时段 H; 实际场址国家供电电压及供方; 每种包装完整独立池及上游归属; 每项真实废物流排放物种介质及去向 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| sb_manufacture | make | 纳入原板接收储存及继承板材负荷、排样及实际手动冷裁切泛水坯、边角料与可用余板分流、必要实物分选去异物、真实称量及首次按接收规格放行。不得用购入废料包装替代。保留真实搬运刀具计量卫生控制、失败批启停待机清理取样返工。母泛水后续安装或表面处理不属于本共同裁切门。 | `calder-rolled-sheet`; `lsta-working-lead-2018`; `monument-lead-tools-2018`; `wbphillips-lead-reception`; `jrc-ilcd-2010` |
| sb_whole_supply | purchased inputs | 整份已供板材采购一次；铅化验、痕量元素、表面氧化层涂层及水为分析或实物子账，不是再采购纯组分。供方链已含的熔炼精炼轧制不在厂内重复计入。每份整供制剂或工具同样仅一上游归属；实际厂内配制须逐外购成分及真实混合能耗损失。废料身份不能证明零继承负荷。 | `calder-rolled-sheet`; `jrc-ilcd-2010` |
| sb_first_release | manufacturing and FG gates | Q 在首次按接收规格质量放行时对每份唯一边角料批次只计一次。已放行期末成品已含于 Q，不得在 Q 旁再加期末成品作为制造输出，也不得扣其制造向量。内部首次放行转移在合并实物门抵消。复验发运退回返工不产生新产量。未验收批次保留为在制品或实际废物并继承历史负荷。 | `wbphillips-lead-reception`; `jrc-ilcd-2010` |
| sb_service | service | 放行后实际储存搬运包装发运保留在原批群服务账，使用原 Q_c 与实测时段 H。期初期末成品及退货携完整历史制造向量。不得扣除期末成品已发生服务，也不得除以 H。不假定库存时长运输距离工具寿命或修复成功；范围内真实外部运输须另列运输方式特定的原子交换。净交付归一化须另行审查库存退货模型。 | `lsta-working-lead-2018`; `jrc-ilcd-2010` |
| sb_stocks | every exchange and cohort | 保留原料在制品未用工具包装及未分配费用的期初期末原始广延单位与逐交换继承负荷向量。库存只修正一次；已按库存调整的耗用不得再调。纳入全部零产出及失败事件。Q=0 留存全部实际负荷，不形成单位结果。内部再用同时转移实物与负荷历史；内部成对腿抵消，新增真实作业及损失保留。 | `jrc-ilcd-2010` |
| sb_physical | manufacturing FG and consolidated gates | 在制造成品及合并各门分别核对完整毛实物 V，独立于分配 A，纳入母坯可用余板边角料库存每项废物及真实排放。总质量与铅及每种相关痕量元素分别闭合。混合出口整份只出现一次；来源分区互斥且合成整份，不再叠加。金属、真实氧化物碳酸盐相、游离水及其他水状态须独立测量区分。一个残差不能求解两个未知物种或水量。PM、COD、总铅指标不是分子质量。任何 X 修正只能消除同侧 OTHER 的确切重复项，不能消除库存或对侧腿。 | `lsta-working-lead-2018`; `jrc-ilcd-2010` |
| sb_packaging | each packaging component pool | 对钢罐及每种实际薄膜袋盖捆带托盘组件分别建立：期初空包装＋附在在制品＋附在成品＋周转库存＋外购 P＋供方已含进入 I＋首次非采购外部进入 N_ext＋外部退回收到 ER＋F_in＝相应期末库存＋随毛实物发运外出 S＋对外退还 EO＋废弃 W＋F_out。每次真实外部实收只能归入一类：ER 须能追溯同一组件先前从本池真实外出的记录；其他实收中，P 包括所有已采购组件，含整批采购价内但未单独开票的组件，I 仅指真正未采购而随供方交货进入的组件，N_ext 包括其余首次非采购实收，含第三方空钢罐首次借入或租入。I 与 N_ext 互斥；第三方首次借租不是供方已含 I。F_in/F_out 为分别具名且独立实测、真实进出同一组件池的材料/水/物种或相态转移腿；排除 P/I/N_ext/ER 或 S/EO/W 已含的量。实际存在时纳入实测附着污染和含水变化；内部跨账转移须有配对对应腿，仅在合并门抵消。整份受污染 W 只实测一次，材质/内容物分区非叠加且一个 provider。这些是实物转移，不是虚构采购、Q 或负荷系数。去重 X 只能剔除同侧 OTHER 完全重复项，不能抹去真实新增留存材料输入。不默认湿操作、反应产率或数量。内部再用抵消，既不是首次外部实收，也不是再次采购、Q 或自动共产品。S 随毛发运，不随净退货或分配比例。实收实物量独立于采购及负荷归属。每次组件实收保留采购方式、法律所有者、保管权、批群、逐交换继承向量及有文件的唯一上游／负荷／服务归属；不得因 N_ext 虚构新制造采购、整载负荷或信用。ER 保留原历史，不建新供货方。混合废弃整份与互斥来源分区不得创建额外供方。 | `lsta-working-lead-2018`; `jrc-ilcd-2010` |
| sb_actual_atoms | actual route | 每种真实能量载体燃料油剂清洗制剂刀具包装废物流及排放物种均须具体原子交换和独立真实查询身份核对。缺数不能当零。限定手动冷裁切不预设切削油养护油燃料蒸汽或锅炉。实际新增物质或改为动力热化学路线时，须明确纳入并审查后才算完整。若真实存在外供蒸汽热载体，供应及返回水千克、实际状态焓和能量须按同一供方约定留存；外出凝结水属于 Product return。 | `lsta-working-lead-2018`; `monument-lead-tools-2018`; `jrc-ilcd-2010` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| make | 原板裁切及边角料首次放行 | required | 真实作业及完整事件历史; 不存在须证据 | foreground | 每参考流 |
| service | 原批群实际放行后服务 | conditional | 真实作业及完整事件历史; 不存在须证据 | foreground | 每参考流 |
| pack | 每种实际包装组件池 | conditional | 真实作业及完整事件历史; 不存在须证据 | foreground | 每参考流 |

完整说明须连同上级语境保留。制造过程合并 sb_manufacture 所列真实顺序子作业；阶段账保留成对内部转移并抵消。带标记实物伴生及包装腿为核对账，不能重复建上游供方。各卡只引用已算 calc_once 结果，协议存未除原量。未绑定名称保持单一具体交换，须核对原生供方兼容性。

### 过程：原板裁切及边角料首次放行 (`make`)

#### 输入

##### 产品流

###### 整份已供新轧制铅板 (`sheet_feed`)

记录一批可追溯整份标准轧制建筑铅板及实际证明组成、厚度尺寸、表面和供货状态。Calder 特定来源规格支持本板材形态；实际铅痕量元素氧化层水仍须采集子账。排除镀锡 Heritage、其他涂层及特意采用的不同合金。匹配一套回收精炼合金化轧制运输历史，不再采购组分或重复供方熔炼。精炼铅锭、棒杆型材、铜板或铅锡锑合金身份不能替代本板材。

流 UUID 保持未绑定，不用泛集合替代。

采用参考单位组 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位 kg。

- 选定流: 全新未涂层 BS EN 12588 轧制铅板
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 分配负荷只用已计算的唯一结果 x_i；v_i 仅用于已标记实物核对；已发生服务采用原批群 s_i_c，不再次相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_material`
- 来源: `calder-rolled-sheet`; `jrc-ilcd-2010`

###### 实际整把钩刃铅板刀 (`lead_knife`)

用于声明手动裁切的实际整把热处理木柄钩刃刀；Monument 1027L 是有文件的工具示例，不是必需 SKU 或实测耗用。记录整供工具、真实服务与退役及未用在用库存历史；不设每千克一把刀或假定寿命。替换钢剪刃不能代表这把整供木柄刀。实际采用的其他工具须另列原子卡。

流 UUID 保持未绑定，不用泛集合替代。

采用参考单位组 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位 kg。

- 选定流: 木柄钩刃铅板刀
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 分配负荷只用已计算的唯一结果 x_i；v_i 仅用于已标记实物核对；已发生服务采用原批群 s_i_c，不再次相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_tool`
- 来源: `monument-lead-tools-2018`; `jrc-ilcd-2010`

###### 实际制造辅助用电 (`make_electricity`)

条件性记录制造范围内真实照明秤吸尘或搬运用电，手动裁切不等于动力切割。按实际国家供电组合电压及计量损耗门匹配供方。特定秸秆电厂产出及仅限中国的用户电身份不能自动代表英国或其他用户供电。原始千瓦时兆焦计量一次，保留待机清理负荷。

流 UUID 保持未绑定，不用泛集合替代。

采用参考单位组 Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`，参考单位 MJ。

- 选定流: 用户计量点外购低压交流电
- 流属性/单位: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 分配负荷只用已计算的唯一结果 x_i；v_i 仅用于已标记实物核对；已发生服务采用原批群 s_i_c，不再次相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_energy`
- 来源: `lsta-working-lead-2018`; `jrc-ilcd-2010`

###### 实际制造卫生清理自来水 (`make_water`)

条件性记录卫生或必要清理实际使用的经处理饮用级市政公共管网水，不代表地表原水去离子水冷却水或蒸汽。原生身份是生产混合厂内供水，处理及水质随地点变化，须核实真实供方与水质。参考为 Mass/kg；次级体积系数不是场址实测密度。体积计量转质量须称重或独立测定密度状态。废水蒸发库存及产品表面各水去向分别记账。

采用参考单位组 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位 kg。

- 选定流: 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 分配负荷只用已计算的唯一结果 x_i；v_i 仅用于已标记实物核对；已发生服务采用原批群 s_i_c，不再次相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water`
- 来源: `lsta-working-lead-2018`; `jrc-ilcd-2010`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 唯一首次放行边角料参考输出 (`released_offcuts`)

原生记录为 Product flow、工厂生产混合、未指定处理，未限定 CAS、合金品级纯度形态地域或接收方。在此仅用于单批可追溯全新未涂层 BS EN 12588 轧制铅板手动裁切屋面泛水坯时真实形成、源头单收，并首次按具名铅回用接收方规格验收的洁净固体边角料。不代表电池化工污泥灰渣粉尘合金锭纯铅化验量或处理服务。实际整份金属氧化层游离水组成及实物污染须实测子账，不另采购。第 3 节全部必需限定信息适用于本完整交换说明及上游兼容性。Q 排除容器和去除异物，已放行期末成品已含在 Q 中。 必需限定信息：单一可追溯全新未涂层轧制铅板批次及有文件的 BS EN 12588 供货规格; 实际整份合金组成及痕量元素而非假定纯铅; 板材尺寸与实际手动裁切工具及排样; 母泛水坯门及板材继承负荷; 固体边角形态与可再用余板电池灰渣污泥分离; 实际氧化层涂层游离水及实物污染子账; 源头单收及实际必要整理; 指定铅回用接收方及状态匹配验收; 唯一首次放行身份及排除容器的整份净 Q; 原料在制品成品期初期末历史及逐交换向量; 全部失败 Q0 启停待机清理返工; 分配负荷 A 与毛实物 V 分开; 原 Q_c 及实测放行后服务时段 H; 实际场址国家供电电压及供方; 每种包装完整独立池及上游归属; 每项真实废物流排放物种介质及去向.

采用参考单位组 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位 kg。

- 选定流: 铅废料 `c814e493-f6ff-48a6-9b92-caba670f15e3`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 1 千克
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_release`
- 来源: `calder-rolled-sheet`; `lsta-working-lead-2018`; `wbphillips-lead-reception`; `jrc-ilcd-2010`

###### 共同形成的裁形泛水坯 (`parent_blank`)

在同一共同裁切门计量真实母泛水坯，止于安装焊接养护油处理之前。保留互斥的板材历史及其分配份额。本行是实物伴生核对出口，不是新增参考输出，也不是叠加在边角料数据集上的额外供方。后续母制品作业归其自身链。

流 UUID 保持未绑定，不用泛集合替代。

采用参考单位组 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位 kg。

- 选定流: 未涂层轧制铅屋面泛水坯
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 分配负荷只用已计算的唯一结果 x_i；v_i 仅用于已标记实物核对；已发生服务采用原批群 s_i_c，不再次相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_material`
- 来源: `calder-rolled-sheet`; `monument-lead-tools-2018`; `jrc-ilcd-2010`

###### 实际可再用余板 (`usable_remnant`)

条件性记录留存或作为板材对外供应的真实可用余板，明确几何及实际用途状态。内部返回携板材继承向量成对抵消；对外销售按真实门作为实物伴生出口。两者都不是 Q，也不自动成为废料。同一片不能同时计余板库存和边角料产品。

流 UUID 保持未绑定，不用泛集合替代。

采用参考单位组 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位 kg。

- 选定流: 可再用未涂层轧制铅板余板
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 分配负荷只用已计算的唯一结果 x_i；v_i 仅用于已标记实物核对；已发生服务采用原批群 s_i_c，不再次相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_material`
- 来源: `lsta-working-lead-2018`; `jrc-ilcd-2010`

##### 废物流

###### 实际未放行拒收固体切余料 (`unreleased_cutoffs`)

条件性记录验收失败或不可恢复污染后真实作为废物转移的固体切余料。追溯来源整份实测质量实际污染状态去向及继承负荷。待决定料仍是 WIP。本废物区别于 Q 及单独捕集清理粉尘，不设默认损失率或自动回收信用。

流 UUID 保持未绑定，不用泛集合替代。

采用参考单位组 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位 kg。

- 选定流: 未放行轧制铅固体切余废料
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 分配负荷只用已计算的唯一结果 x_i；v_i 仅用于已标记实物核对；已发生服务采用原批群 s_i_c，不再次相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_waste`
- 来源: `lsta-working-lead-2018`; `wbphillips-lead-reception`; `jrc-ilcd-2010`

###### 捕集制造清理粉尘 (`make_dust`)

条件性记录捕集的含铅干态清理粉尘，作为一项完整混合废物流。独立计量总质量、真实铅及痕量元素与氧化物碳酸盐相、水分及接收方；组成分区不再叠加整份。它不是洁净固体边角料、基本排放或泛指纯铅。其他实际废物流分别保留。

流 UUID 保持未绑定，不用泛集合替代。

采用参考单位组 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位 kg。

- 选定流: 捕集含铅干态清理粉尘
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 分配负荷只用已计算的唯一结果 x_i；v_i 仅用于已标记实物核对；已发生服务采用原批群 s_i_c，不再次相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_waste`
- 来源: `lsta-working-lead-2018`; `jrc-ilcd-2010`

###### 制造卫生清理废水 (`make_wastewater`)

条件性记录实际送外部处理的一项完整含铅卫生清理废水出口，实测水及各溶质固体子账、真实去向及唯一处理供方。它不是基本排放；处理后向真实介质排出的出水须另列具名物种及处理后数量。总铅或 COD 不能单独确定氧化铅或任何有机物的分子质量。

流 UUID 保持未绑定，不用泛集合替代。

采用参考单位组 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位 kg。

- 选定流: 含铅卫生清理废水
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 分配负荷只用已计算的唯一结果 x_i；v_i 仅用于已标记实物核对；已发生服务采用原批群 s_i_c，不再次相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water`
- 来源: `lsta-working-lead-2018`; `jrc-ilcd-2010`

###### 退役整把裁切刀 (`retired_knife`)

条件性记录整把工具在真实去向的实际退役；若刀刃刀柄整供整退，仅合计一次。记录材料污染组成及唯一接收供方；若真实拆解，应以互斥刀刃刀柄出口替代整把出口，不再叠加。保留先前服务历史，不自动给金属回收信用。

流 UUID 保持未绑定，不用泛集合替代。

采用参考单位组 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位 kg。

- 选定流: 退役木柄钩刃铅板刀
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 分配负荷只用已计算的唯一结果 x_i；v_i 仅用于已标记实物核对；已发生服务采用原批群 s_i_c，不再次相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_tool`
- 来源: `monument-lead-tools-2018`; `jrc-ilcd-2010`

##### 基本流

###### 制造残余铅向空气排放 (`make_pb_air`)

条件性记录实际控制后的残余铅向空气排放。原生 Elementary flow 的 CAS 为 7439-92-1，Mass/kg，介质为向空气排放且未细分；其表示金属铅及离子，除非所用 LCIA 方法区分并优先采用离子专用流。保留独立真实物种相态证据，元素铅质量作为分析基准，不得将整份粉尘或氧化铅千克写成铅千克。若真实排放氧化铅碳酸盐或其他需区分物种，完成前须另增其已确认原子身份并明确不重叠。本身份不能证明烟囱高度非城市介质零排放或实测法律合规，不重复对外捕集粉尘处理。

采用参考单位组 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位 kg。

- 选定流: 铅 `4d9a8790-3ddd-11dd-91dc-0050c2490048`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 分配负荷只用已计算的唯一结果 x_i；v_i 仅用于已标记实物核对；已发生服务采用原批群 s_i_c，不再次相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emission`
- 来源: `lsta-working-lead-2018`; `jrc-ilcd-2010`

### 过程：原批群实际放行后服务 (`service`)

#### 输入

##### 产品流

###### 实际放行后服务用电 (`service_electricity`)

条件性记录首次放行后真实储存搬运包装发运用电，标记原批群 Q_c 及实测 H。匹配实际国家用户电压及供电损耗门，不默认外地电网或特定发电身份。保留原始未除服务负荷、原成品历史及退回，发运不产生新 Q。

流 UUID 保持未绑定，不用泛集合替代。

采用参考单位组 Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`，参考单位 MJ。

- 选定流: 用户计量点外购低压交流电
- 流属性/单位: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 分配负荷只用已计算的唯一结果 x_i；v_i 仅用于已标记实物核对；已发生服务采用原批群 s_i_c，不再次相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_service`
- 来源: `lsta-working-lead-2018`; `jrc-ilcd-2010`

###### 实际放行后清理自来水 (`service_water`)

条件性记录卫生或必要清理实际使用的经处理饮用级市政公共管网水，不代表地表原水去离子水冷却水或蒸汽。原生身份是生产混合厂内供水，处理及水质随地点变化，须核实真实供方与水质。参考为 Mass/kg；次级体积系数不是场址实测密度。体积计量转质量须称重或独立测定密度状态。废水蒸发库存及产品表面各水去向分别记账。 仅标记已发生放行后服务及原 Q_c，不重复制造用水。

采用参考单位组 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位 kg。

- 选定流: 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 分配负荷只用已计算的唯一结果 x_i；v_i 仅用于已标记实物核对；已发生服务采用原批群 s_i_c，不再次相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_service`
- 来源: `lsta-working-lead-2018`; `jrc-ilcd-2010`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 放行后搬运捕集粉尘 (`service_dust`)

条件性记录捕集的含铅干态清理粉尘，作为一项完整混合废物流。独立计量总质量、真实铅及痕量元素与氧化物碳酸盐相、水分及接收方；组成分区不再叠加整份。它不是洁净固体边角料、基本排放或泛指纯铅。其他实际废物流分别保留。 保留原批群服务历史；收集复验不再生成产品 Q。

流 UUID 保持未绑定，不用泛集合替代。

采用参考单位组 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位 kg。

- 选定流: 捕集含铅干态清理粉尘
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 分配负荷只用已计算的唯一结果 x_i；v_i 仅用于已标记实物核对；已发生服务采用原批群 s_i_c，不再次相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_service`
- 来源: `lsta-working-lead-2018`; `jrc-ilcd-2010`

###### 放行后清理废水 (`service_wastewater`)

条件性记录实际送外部处理的一项完整含铅卫生清理废水出口，实测水及各溶质固体子账、真实去向及唯一处理供方。它不是基本排放；处理后向真实介质排出的出水须另列具名物种及处理后数量。总铅或 COD 不能单独确定氧化铅或任何有机物的分子质量。 已发生服务归原 Q_c。

流 UUID 保持未绑定，不用泛集合替代。

采用参考单位组 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位 kg。

- 选定流: 含铅卫生清理废水
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 分配负荷只用已计算的唯一结果 x_i；v_i 仅用于已标记实物核对；已发生服务采用原批群 s_i_c，不再次相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_service`
- 来源: `lsta-working-lead-2018`; `jrc-ilcd-2010`

##### 基本流

###### 放行后搬运残余铅向空气排放 (`service_pb_air`)

条件性记录实际控制后的残余铅向空气排放。原生 Elementary flow 的 CAS 为 7439-92-1，Mass/kg，介质为向空气排放且未细分；其表示金属铅及离子，除非所用 LCIA 方法区分并优先采用离子专用流。保留独立真实物种相态证据，元素铅质量作为分析基准，不得将整份粉尘或氧化铅千克写成铅千克。若真实排放氧化铅碳酸盐或其他需区分物种，完成前须另增其已确认原子身份并明确不重叠。本身份不能证明烟囱高度非城市介质零排放或实测法律合规，不重复对外捕集粉尘处理。 仅适用于原批群真实放行后服务。

采用参考单位组 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位 kg。

- 选定流: 铅 `4d9a8790-3ddd-11dd-91dc-0050c2490048`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 分配负荷只用已计算的唯一结果 x_i；v_i 仅用于已标记实物核对；已发生服务采用原批群 s_i_c，不再次相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_service`
- 来源: `lsta-working-lead-2018`; `jrc-ilcd-2010`

### 过程：每种实际包装组件池 (`pack`)

#### 输入

##### 产品流

###### 钢罐首次外部实收 (`can_purchase`)

条件性记录装本定义边角料的一个实际完整适用钢罐，容量不超过 300 L，不带机械或热设备，不作压缩气体容器。原生钢罐为 Product、Mass/kg，未固定合金涂层尺寸地域供方。当前容器分类与保留的旧其他货物标签为不同元数据；旧标签不增加实物身份。核实组成涂层盖内衬、接收适用性及实际供方；独立供应而非整供内含的盖内衬另列。不能代大型料斗集装箱或自动代食品罐。同一 Product 输入卡按 sb_packaging 以逐次实收互斥记录实际 P、I 或 N_ext 钢罐，含匹配的第三方空钢罐首次借入或租入；稳定 row_id 不要求必须采购。通过 cp_pack 保留实测净千克及件数换质量证据、实际进入接口／形态／流类型／方向、实收 ID／时间／来源、采购方式、法律所有者、保管权、批群、继承向量及有文件的唯一上游／负荷／服务归属。整批价内采购钢罐即使未单独开票仍属 P；真正未采购而随货进入的钢罐属 I，不属 N_ext。库存耗用及服务归属不是实物进入；首次借入不产生新制造采购、整载负荷或信用。

采用参考单位组 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位 kg。

- 选定流: 钢罐 `b13f7ab0-5d1d-48ad-af1e-bf8da76083b7`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 分配负荷只用已计算的唯一结果 x_i；v_i 仅用于已标记实物核对；已发生服务采用原批群 s_i_c，不再次相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`
- 来源: `lsta-working-lead-2018`; `jrc-ilcd-2010`

###### 外部钢罐退回收到 (`can_return_received`)

条件性记录装本定义边角料的一个实际完整适用钢罐，容量不超过 300 L，不带机械或热设备，不作压缩气体容器。原生钢罐为 Product、Mass/kg，未固定合金涂层尺寸地域供方。当前容器分类与保留的旧其他货物标签为不同元数据；旧标签不增加实物身份。核实组成涂层盖内衬、接收适用性及实际供方；独立供应而非整供内含的盖内衬另列。不能代大型料斗集装箱或自动代食品罐。ER 仅对应能追溯的同一组件先前从本池真实外出，保留外出／退回 ID、时间、保管权、批群及原逐交换历史；不是再次采购或新供方。第三方空钢罐首次借租没有这样的先前外出关联，应在 can_purchase 记 N_ext，绝不能记 ER 或内部再用。

采用参考单位组 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位 kg。

- 选定流: 钢罐 `b13f7ab0-5d1d-48ad-af1e-bf8da76083b7`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 分配负荷只用已计算的唯一结果 x_i；v_i 仅用于已标记实物核对；已发生服务采用原批群 s_i_c，不再次相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`
- 来源: `lsta-working-lead-2018`; `jrc-ilcd-2010`

###### 实际聚乙烯护板膜进入 (`pe_film_in`)

仅当真实供方包装确为此已识别 LDPE 薄膜时适用，不声称 Calder 必然供应该膜。记录整膜组成厚度、空包装及附 WIP、附 FG、周转包装期初期末库存与真实去向。其他材料或独立供应袋捆带托盘盖须各自具名卡及独立池；本膜不存在不等于排除包装。按 sb_packaging 及 cp_pack 将每次首次外部实收唯一归入 P、I 或 N_ext，保留历史及唯一上游／负荷／服务归属；整批价内采购膜属 P，真正未采购的供方随货膜属 I，其余首次非采购进入属 N_ext，绝不是 ER 或内部再用。

流 UUID 保持未绑定，不用泛集合替代。

采用参考单位组 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位 kg。

- 选定流: 低密度聚乙烯护板膜
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 分配负荷只用已计算的唯一结果 x_i；v_i 仅用于已标记实物核对；已发生服务采用原批群 s_i_c，不再次相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`
- 来源: `jrc-ilcd-2010`

###### 实际外部护板膜退回收到 (`pe_film_er`)

仅当真实供方包装确为此已识别 LDPE 薄膜时适用，不声称 Calder 必然供应该膜。记录整膜组成厚度、空包装及附 WIP、附 FG、周转包装期初期末库存与真实去向。其他材料或独立供应袋捆带托盘盖须各自具名卡及独立池；本膜不存在不等于排除包装。ER 保留历史，不建新供方。

流 UUID 保持未绑定，不用泛集合替代。

采用参考单位组 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位 kg。

- 选定流: 低密度聚乙烯护板膜
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 分配负荷只用已计算的唯一结果 x_i；v_i 仅用于已标记实物核对；已发生服务采用原批群 s_i_c，不再次相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`
- 来源: `jrc-ilcd-2010`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 随毛实物发运钢罐 (`can_shipped`)

条件性记录装本定义边角料的一个实际完整适用钢罐，容量不超过 300 L，不带机械或热设备，不作压缩气体容器。原生钢罐为 Product、Mass/kg，未固定合金涂层尺寸地域供方。当前容器分类与保留的旧其他货物标签为不同元数据；旧标签不增加实物身份。核实组成涂层盖内衬、接收适用性及实际供方；独立供应而非整供内含的盖内衬另列。不能代大型料斗集装箱或自动代食品罐。 S 按真实毛发运，即使产品以后退回也保留；钢罐实物质量不得乘经济分配份额。

采用参考单位组 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位 kg。

- 选定流: 钢罐 `b13f7ab0-5d1d-48ad-af1e-bf8da76083b7`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 分配负荷只用已计算的唯一结果 x_i；v_i 仅用于已标记实物核对；已发生服务采用原批群 s_i_c，不再次相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`
- 来源: `lsta-working-lead-2018`; `jrc-ilcd-2010`

###### 对外退还钢罐 (`can_return_sent`)

条件性记录装本定义边角料的一个实际完整适用钢罐，容量不超过 300 L，不带机械或热设备，不作压缩气体容器。原生钢罐为 Product、Mass/kg，未固定合金涂层尺寸地域供方。当前容器分类与保留的旧其他货物标签为不同元数据；旧标签不增加实物身份。核实组成涂层盖内衬、接收适用性及实际供方；独立供应而非整供内含的盖内衬另列。不能代大型料斗集装箱或自动代食品罐。 EO 为真实外部退还，区别于发运及内部再用。

采用参考单位组 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位 kg。

- 选定流: 钢罐 `b13f7ab0-5d1d-48ad-af1e-bf8da76083b7`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 分配负荷只用已计算的唯一结果 x_i；v_i 仅用于已标记实物核对；已发生服务采用原批群 s_i_c，不再次相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`
- 来源: `lsta-working-lead-2018`; `jrc-ilcd-2010`

###### 实际随毛发运护板膜 (`pe_film_ship`)

仅当真实供方包装确为此已识别 LDPE 薄膜时适用，不声称 Calder 必然供应该膜。记录整膜组成厚度、空包装及附 WIP、附 FG、周转包装期初期末库存与真实去向。其他材料或独立供应袋捆带托盘盖须各自具名卡及独立池；本膜不存在不等于排除包装。S 随毛实物发运，不随 Q。

流 UUID 保持未绑定，不用泛集合替代。

采用参考单位组 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位 kg。

- 选定流: 低密度聚乙烯护板膜
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 分配负荷只用已计算的唯一结果 x_i；v_i 仅用于已标记实物核对；已发生服务采用原批群 s_i_c，不再次相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`
- 来源: `jrc-ilcd-2010`

###### 实际护板膜对外退还 (`pe_film_eo`)

仅当真实供方包装确为此已识别 LDPE 薄膜时适用，不声称 Calder 必然供应该膜。记录整膜组成厚度、空包装及附 WIP、附 FG、周转包装期初期末库存与真实去向。其他材料或独立供应袋捆带托盘盖须各自具名卡及独立池；本膜不存在不等于排除包装。EO 是外部退还；内部再用抵消。

流 UUID 保持未绑定，不用泛集合替代。

采用参考单位组 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位 kg。

- 选定流: 低密度聚乙烯护板膜
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 分配负荷只用已计算的唯一结果 x_i；v_i 仅用于已标记实物核对；已发生服务采用原批群 s_i_c，不再次相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`
- 来源: `jrc-ilcd-2010`

##### 废物流

###### 实际废弃钢罐 (`can_waste`)

同一实测钢罐池的条件性废弃 W，记录真实污染组成、清空及接收方。整份处置仅一供方；内容物钢涂层分区不叠加整份。空钢罐废物不是铅边角料或 Q，不自动给信用。

流 UUID 保持未绑定，不用泛集合替代。

采用参考单位组 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位 kg。

- 选定流: 送回收退役钢罐
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 分配负荷只用已计算的唯一结果 x_i；v_i 仅用于已标记实物核对；已发生服务采用原批群 s_i_c，不再次相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`
- 来源: `lsta-working-lead-2018`; `jrc-ilcd-2010`

###### 实际废弃护板膜 (`pe_film_waste`)

同一真实 LDPE 膜池的条件性废弃 W。整份污染膜及其真实接收方计一次，组成另子账；不重复采购纯树脂，不编回收率或排放。

流 UUID 保持未绑定，不用泛集合替代。

采用参考单位组 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位 kg。

- 选定流: 退役低密度聚乙烯护板膜
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 分配负荷只用已计算的唯一结果 x_i；v_i 仅用于已标记实物核对；已发生服务采用原批群 s_i_c，不再次相除。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`
- 来源: `jrc-ilcd-2010`

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| al_context | study goal | 仅在要求分配的归因场景采用本层级。确定原板形成泛水坯、可用余板及收集边角料的共同门，并记录各自真实状态与功能。商业废料用语不能证明分配或终止废物身份获批。按真实接收许可及合同条件记录，不编法律阈值。 | `jrc-ilcd-2010` |
| al_subdivide | each exchange | 先独立专属工序或采用有理由的虚拟细分。仅服务边角料的单收称量直接归边角料；仅服务母制品的成形作业归母制品。按实物去向追溯内含原板及其供方历史；无价值损失另依有理由的因果方法分配。内含归属不是整厂统一质量分配，边角料为次生产物也不得无历史。 | `jrc-ilcd-2010` |
| al_causality | remaining common exchanges | 对每项剩余共同交换用真实工序证据确定决定性物理因果关系。裁切长度或工时、保留材料内含量及储存体积时间可有不同作用，均非通用默认值。为形成母制品的切割可能由母制品表面形状决定，而非边角料质量；应核对 ILCD 花岗岩板材与碎石反例的含义。写明证据驱动量受影响交换及敏感性，不对全部交换套一个质量比例。 | `jrc-ilcd-2010` |
| al_residual | unresolved common-process residual only | 仅在有文件说明细分及决定性物理因果均无法解决后，对真正剩余共同工序残量使用同一共同门、真实状态数量及同期的各共功能市场价值。先以证据确定适用的产品／处理功能、真实状态、边界及计价情形。若仅有后期售价，应扣除有证据的后续整理包装运输费用回推到该门，不能套成品屋面或精炼铅价格。记录真实状态币种日期来源、非正价值、缺价及敏感性。负值、正负抵消价值及未决产品／处理功能须明确进行个案方法学审查；在有证据的适用方法及其审查决定解决该情形前，暂停通用剩余分配份额及受影响的单位结果。价格缺失或不可比、零价值或分母未定义时，同样须先有文件记录的可辩护处理，才能给出剩余分配份额或受影响的单位结果；不得编造份额。暂停期间保留已归属的专属／因果负荷、完整实物 V 及继承历史、失败／Q0 事件、已发生原批群服务及供方仅计一次的核算。负负荷、零负荷、绝对值分配键及避免生产信用均非默认处理；负价值情形可依其有证据的适用且已审查方法继续。不设固定分配率，不自动给避免生产信用。 | `jrc-ilcd-2010` |
| al_internal | internal reuse and provider accounting | 内部可用余板或返回边角料继承完整历史向量，成对转移抵消并保留真实新增作业。再用不是新采购、信用或第二次首次放行。每份完整进入制品及每项完整对外废物流仅一上游归属，不得将整份混合流供方与成分或来源分区叠加。 | `jrc-ilcd-2010` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | make | 整板及实物伴生流 | 秤及批次追踪 | 批次; 供方; 板材证明; 品级尺寸; 毛重; 皮重; 整份净千克; 化验基准; 每种元素及相; 游离水; 母坯千克; 余板千克; 期初原料及 WIP 千克; 期末原料及 WIP 千克; 继承交换向量; 运输归属 | 责任人：制造记录员。对实际板坯余板逐次称量识别，留存供方链并核对排样库存。采集完整未分配毛实物及未除 Q 的广延负荷；供方证明不能代场址实测水分。 | kg | 每次转移及期末 | 完整制造批群及继承 WIP | 实际来源裁切场址及共同门 | 每 1 kg 参考流 | 校准秤; 批次证明; 库存向量核对 |
| cp_release | make | 唯一首次放行 Q | 称量及接收规格放行 | 唯一批次; 首次验收身份时间; 来源证明; 固体形态; 毛重; 皮重; 整份净千克; 氧化层水基准; 去除异物; 接收方规格; 已放行期末 FG; 拒收千克; 原 Q_c | 责任人：质量放行员。独立称整份边角料净重，按具名接收协议核实真实来源组成状态。放行身份去重，区分未放行 WIP、可用余板、已放行 FG、退回发运。保留原始 Q，采集不存归一量。 | kg | 每批首次放行及报告期末 | 与分子同批群及原 FG 历史 | 首次接收规格放行门 | 每 1 kg 参考流 | 秤校准; 实际协议; 组成试验; 唯一放行台账 |
| cp_tool | make | 整刀服务与退役 | 刀具领用服务库存账 | 整刀身份; 完整净千克; 接收; 未用在用期初期末库存; 实际使用时间; 磨刀作业; 退役千克去向; 先前交换向量 | 责任人：刀具保管员。追踪真实整刀供应及基于实际使用退役历史的服务归属，独立测重并保留未用在用服务库存。真实磨刀耗材能耗出口须新增原子行，不能编寿命或刀重。仅采原始记录。 | kg | 每次领用服务退役 | 完整批群及先前服务历史 | 实际手动裁切工位 | 每 1 kg 参考流 | 收据; 重量记录; 使用账; 退役库存核对 |
| cp_energy | make | 制造电力 | 电表及作业账 | 电表身份; 供方; 国家; 电压; 损耗门; 累计起止; 单位; 事件时间; 启停待机清理; 专属共同驱动量; 期初期末未分配负荷 | 责任人：公用工程记录员。留存千瓦时或兆焦原始表差，区分真实子作业并在归属前采独立驱动量。无实测运行时间负载不能仅凭额定功率推电耗。共表核对保留全部失败零产出待机事件，此处不除 Q。 | kWh; MJ | 每次事件及完整期间 | 匹配制造期间含失败 | 真实用户电表供电接口 | 每 1 kg 参考流 | 电表校准; 账单; 事件核对; 驱动证据 |
| cp_water | make | 自来水及整份清理废水 | 水及废水测量 | 供方水质; 原水表单位; 累计体积; 实际密度状态; 整份废水千克; 各溶质固体; 真实物种; 水去向; 清理卫生事件; 处理接收方 | 责任人：卫生清理记录员。供应与外出量独立实测，区分体积速率并留存真实密度状态。追踪整份废水唯一供方及独立溶解固态组成，纳入留存蒸发水及其他真实出口；余额不是实测物种或第二个未知水量。不除 Q。 | kg; m3 | 每次实际清理及匹配期间 | 制造批群及水库存 | 实际水与废物边界 | 每 1 kg 参考流 | 水记录; 采样方法; 密度条件; 接收单 |
| cp_waste | make | 每项固废流 | 容器秤及转移记录 | 废物具名; 来源批次; 毛重; 皮重; 整份净千克; 相态组成; 水; WIP 决定; 去向及真实状态; 内外标记; 继承向量 | 责任人：废物记录员。未放行切余废料和清理粉尘分别按整份实际流称量采样并留存接收单。不能将待定 WIP 记废物或对实物乘经济份额。化验来源仅分区，不叠加整份质量或供方。仅采原量。 | kg | 每次实际出口及期末库存 | 完整制造期间含清理 | 真实来源接收门 | 每 1 kg 参考流 | 校准; 采样; 去向记录; 实物元素闭合 |
| cp_emission | make | 真实各物种及介质 | 监测及物种记录 | 物种; 已知 CAS; 真实相; 铅分析基准; 介质; 控制后浓度; 累计体积或真实速率; 参考状态; 匹配时间; 控制状态; 检出限不确定性 | 责任人：排放记录员。实际控制后用匹配浓度体积状态计量，仅对真实速率积分。铅与氧化物离子等换算须独立组成并避免重复，区分职业暴露浓度、环境排放质量及捕集粉尘。不存在须有真实方法与检出限证据；未知不是零。采未除原始量。 | kg | 实际监测时段及完整事件 | 代表完整期间含控制及失败 | 每个真实排放点介质 | 每 1 kg 参考流 | 实验室监测 QA; 物种方法; 不确定性覆盖 |
| cp_service | service | 放行后各交换及原批群 | 批群服务库存退回账 | 原批次 Q_c; 实测 H; 实际服务事件; 原电表秤物种; 期初期末 FG 历史; 毛发运; 实际退回; 后续作业失败; 各交换向量; 未分配服务库存 | 责任人：仓储记录员。每项真实服务保留自身物理单位、相应卡片国家电压水物种条件及原库存历史。追踪每次退回与原放行，不再产生 Q 或假定净交付。对应服务流采用 cp_water、cp_waste、cp_emission 的测量方法。保留原始未除量及实际 H。 | kg; kWh; MJ | 每次服务发运退回及期末 | 原批群及真实观测延伸 H | 真实仓储搬运发运场址 | 每 1 kg 参考流 | 放行身份链; 电表; 库存向量核对; 真实时段 |
| cp_pack | pack | 每种包装完整池 | 组件供应库存发运退回废弃账 | 组件整供定义; 组成; 实际净千克及实测件数换质量基准; 进入／外出接口形态流类型与方向; 唯一实收 ID 时间及来源记录; 采购方式及实际采购价内含情况; 法律所有者与保管权; 批群与逐交换继承向量; 空包装附 WIP 附 FG 周转期初期末库存; P; I; N_ext; ER; S; EO; W; ER 关联同组件先前真实外出 ID 时间及数量; 内部再用; 独立实测 F_in/F_out 实际水/材料/物种/相态变化及跨账配对转移 ID; 唯一供方及先前负荷／服务归属 | 责任人：包装保管员。每种实际组件独立称量计数；件数换质量须实测件重。按 sb_packaging 对每次真实实收只分类一次：P 包括整批采购价内未单独开票组件；I 为真正未采购的供方随货进入；N_ext 为其余首次非采购进入，含第三方空钢罐首次借租；ER 须有同组件真实先前外出记录。归属前按组件批群以原始实物量核对 sb_packaging，保留实际采购、法律所有权、保管权及继承向量。追溯唯一上游／负荷／服务归属，不因 N_ext 虚构制造采购、整载负荷或信用。S 随毛实物发运；退回继承历史；内部再用及 ER 不建新供货方。混合出口来源分区不叠加整份。采集不除 Q。 | kg | 每次进入转移发运退回废弃及期末 | 完整制造及原服务批群 | 真实供方第三方保管者仓储接收池门 | 每 1 kg 参考流 | 称重; 组件证明; 实收／先前外出关联; 完整组件池闭合; 供方归属 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_raw | all inventory rows | 在分配前将每项未除分母原始观测换成该行广延单位。原始千瓦时电量只乘一次 3.6 转兆焦。真实物种浓度乘匹配累计体积，或对真实速率按时间积分，再按独立证据换元素物种基准。保留参考状态不确定性，不再重复乘时间或推测密度。 | cp_material; cp_release; cp_tool; cp_energy; cp_water; cp_waste; cp_emission; cp_service; cp_pack | raw_extensive_i | `jrc-ilcd-2010` |
| calc_assign | all inventory rows | 逐交换先用 al_subdivide，再 al_causality，仅对有文件的剩余量用 al_residual。在 calc_once 前应用 al_residual，含其暂停要求。每项制造交换 A_i 由互斥本期归属负荷加期初 WIP 或未用未分配继承向量，减期末未完成或未用未分配向量形成；库存只修正一次。已放行 FG 制造历史保留在 Q 中，不扣减。失败及真实损失明确归属。原批群已发生服务另形成 B_i_c，并保留其未分配服务继承向量。 | raw_extensive_i; cp_material; cp_release; cp_tool; cp_service; cp_pack | A_i; B_i_c | `jrc-ilcd-2010` |
| calc_physical | manufacturing FG consolidated and packaging gates | 保留完整 V_i，独立于 A_i。各门以期初加外部毛进入核对期末加外部毛外出及独立证据的转化，内部成对腿抵消。制造出口含唯一 Q、共同母坯、真实对外可用余板及废物，不在 Q 旁再加已放行期末 FG。成品门：期初 FG 加首次放行转移加实际退回，等于期末 FG 加毛发运加真实废物损失。铅及其他元素独立核对，并应用各 sb_packaging 独立池，包含独立实测且不重叠的 F_in/F_out 腿。X 只能消除同侧 OTHER 确切重复。 | cp_material; cp_release; cp_waste; cp_water; cp_service; cp_pack | V_i; physical_residual; elemental_residual | `jrc-ilcd-2010` |
| calc_once | all inventory rows | Q>0 时仅执行一次 x_i = A_i / Q；另行标记的实物审核为 v_i = V_i / Q。已发生服务以原首次放行分母执行 s_i_c = B_i_c / Q_c。各账并行，不能连续相除或重复供方。卡片及聚合仅引用这些结果。适用 Q 或 Q_c 为零时，保留完整原始负荷历史，不形成单位结果。 | A_i; B_i_c; V_i; cp_release; cp_service | x_i; v_i; s_i_c | `jrc-ilcd-2010` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | reference and sheet | 从原裁切至具名回用接收方追溯单批未涂层轧制铅板、真实整份组成及固体边角形态。区分电池涂层替代品合金供料粉尘灰渣污泥和可用余板；泛铅名称不能证明批次。 | 供方证明; 路线记录; 真实接收规格; 化验 |
| dq_completeness | every physical and burden account | 保留全部适用原始广延量、失败 Q0 启停待机清理返工事件、WIP/FG 向量及真实服务 H。缺数仍未知；无实物证据不得记零或 not_applicable。完整数据包放行前增加真实额外材料物种。 | 事件台账; 电表; 库存; 质量元素及完整组件池闭合 |
| dq_representativeness | sources and upstream providers | 制造商培训接收方来源支持声明的定性路线及终端，不是共同工厂 BOM 或环境强度。声明真实场址国家期间供方数量控制状态及技术迁移限制。原生身份不匹配时保留具体而不绑定。 | 来源适用性判断; 供方及真实前景记录 |
| dq_allocation | each common exchange | 记录细分尝试、决定性驱动量及不确定性、剩余共同工序残量、状态门期间匹配价值与敏感性。不得继承其他草稿分配审批或统一比例。 | 逐交换分配表及原始证据 |
| dq_bilingual | all UUID-bearing and unbound rows | 每项适用完整交换说明保留原生类型路线形态 CAS 地域属性限制及精确单位链。有 UUID 流采用官方中文基本名；未绑定原子名称准确翻译。 | 完整原生身份及投影上下文审核 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| vr_reference | released_offcuts | reference_flow_link 只连接一项 Product 输出，为本定义首次放行整份边角料 1 千克。Q 独立于铅化验及发运实测。已放行期末 FG 已含于 Q；复验退回不重复放行。 | `lsta-working-lead-2018`; `jrc-ilcd-2010` |
| vr_route | make and actual receiver | 须有原已供板材、真实裁切形成母坯与边角料、源头分流、实际必要整理及指定回用接收证据。购入废料包装记录不能通过来源覆盖。不能因含铅便把电池残渣当洁净边角料。 | `lsta-working-lead-2018`; `jrc-ilcd-2010` |
| vr_units | all inventory rows | 保留原生参考属性单位组单位及全部真实条件。不得按名称将棒杆代板材、源发电代用户电、外地电网替换或纯元素代混合物。未绑定辅助供方显式保留缺口；缺核心参考或真实终端证据时方法须保持草稿。 | `lsta-working-lead-2018`; `jrc-ilcd-2010` |
| vr_accounts | manufacturing FG service and package pools | 独立核实总 V、归属 A、各元素、WIP 历史、唯一 Q 和原 Q_c 服务。包装池须满足 sb_packaging 的完整 F_in/F_out 等式，独立实测真实材料/水/物种/相态腿并保留其原子接口和跨账配对记录；整份受污染 W 只计一次，分区非叠加，完整输入/出口各一个 provider。X 去重须有同侧 OTHER 确切重复；不得漏库存或重复混合出口分区。 | `lsta-working-lead-2018`; `jrc-ilcd-2010` |
| vr_calculation | collection and published amounts | 协议采原始未除量。换算归属先于唯一 calc_once 商；数量聚合不再次相除。给出任何受影响的单位结果前，落实 al_residual 的适用性决定及暂停要求。Q=0 保留负荷，不能给单位结果。测量不确定性及不支持关系保持可见，不能标成通过。 | `lsta-working-lead-2018`; `jrc-ilcd-2010` |
| vr_species | each actual waste and emission | 每项实际整份废物及排放物种介质保持原子性，并有独立组成状态证据。不能从一个残差推两个未知量，也不能把 PM、COD、总金属当分子质量。真实新增流未知时，该数据集须待测量或明确界定后才算完整。 | `lsta-working-lead-2018`; `jrc-ilcd-2010` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 本定义新铅板边角料原形成及首次回用供料放行的归因前景清单 |
| downstream_use | secondary_dataset; background_dataset; 明确连接流过程生命周期模型使用 |
| allowed_use | 仅在板材形态组成、原手动路线、首次放行基准、实际接收方及上游链匹配时使用 |
| excluded_use | 全 CPC 叶覆盖; 电池渣灰污泥处理; 采购废料重包装; 精炼铅或屋面服务声明; 默认回收信用 |
| required_metadata | 单一可追溯全新未涂层轧制铅板批次及有文件的 BS EN 12588 供货规格; 实际整份合金组成及痕量元素而非假定纯铅; 板材尺寸与实际手动裁切工具及排样; 母泛水坯门及板材继承负荷; 固体边角形态与可再用余板电池灰渣污泥分离; 实际氧化层涂层游离水及实物污染子账; 源头单收及实际必要整理; 指定铅回用接收方及状态匹配验收; 唯一首次放行身份及排除容器的整份净 Q; 原料在制品成品期初期末历史及逐交换向量; 全部失败 Q0 启停待机清理返工; 分配负荷 A 与毛实物 V 分开; 原 Q_c 及实测放行后服务时段 H; 实际场址国家供电电压及供方; 每种包装完整独立池及上游归属; 每项真实废物流排放物种介质及去向 |
| required_quality_disclosure | 特定来源定性技术综合; 无工厂数值范围; 完整原始分配实物账覆盖; 真实库存接收证据; 普通 UUID 供方缺口; 如存在须明示真实未决核心终端阻断; 科学翻译审查状态 |
| update_trigger | 板材组成涂层形态、裁切路线、真实接收方、验收条件、上游历史、控制、公用工程、包装、场址或研究分配语境变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc3-2025` | `official_guidance` | United Nations Statistics Division. CPC Version 3.0 Structure (30 June 2025). https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv ; classification detail https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/39364 | 39364 分类语境及与 39320 残渣、39350 钢铁重熔锭、39380 电池及 41542 板材的区别; 非产品方法审批 |
| `calder-rolled-sheet` | `handbook` | Calder Lead. Rolled lead sheet. https://calderlead.co.uk/products-and-services/building/rolled-lead-sheet/ (publisher snapshot 2026-10-26) | 实际标准轧制建筑板形态及 BS EN 12588 供货规格; 屋面泛水功能及不同涂层替代品; 不采用批次化验或数值清单 |
| `lsta-working-lead-2018` | `extension_guidance` | Lead Sheet Training Academy. Working with Rolled Lead Sheet in Construction (May 2018), PDF pp. 3-6 / printed pp. 4-11. https://leadsheet.co.uk/app/uploads/2018/05/LSTA-WWLIC-0518.pdf | 洁净固体新板语境及旧腐蚀热作反例; 安装裁切边角料与源头分流; 合适容器及回收商交接; 真实清理水粉尘控制及记录; 不采用历史法律数字或回收百分比 |
| `monument-lead-tools-2018` | `handbook` | Monument Tools. Product Catalogue (2018), PDF p. 26 Roofing with adjacent pp. 25 and 27. https://monument-tools.com/wp-content/uploads/2018/01/Monument-Tools-Cataogue-2018.pdf | 整把热处理木柄钩刃铅板刀作为手动裁切工具证据; 相邻金属剪焊接及石板工具不作替代或必需输入 |
| `wbphillips-lead-reception` | `literature` | WB Phillips Metals. Scrap Lead Recycling. https://wbphillipsmetals.co.uk/scrap-metal/scrap-lead-recycling/ (publisher snapshot 2026-10-26) | 洁净屋面泛水板材废料、单收、校准称量及分级的第一方接收证据; 仍须实际验收协议，不推断价格收率法律获批 |
| `jrc-ilcd-2010` | `official_guidance` | European Commission JRC. ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance. First edition March 2010, section 7.9.2-7.9.3, printed pp. 255-268 / PDF pp. 275-288. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 需分配归因场景：专属虚拟细分、内含与损失之别、逐交换决定性物理因果、剩余共同工序门状态匹配市场价值; 方法采集记账综合，不是工业配方或通用分配比例 |
