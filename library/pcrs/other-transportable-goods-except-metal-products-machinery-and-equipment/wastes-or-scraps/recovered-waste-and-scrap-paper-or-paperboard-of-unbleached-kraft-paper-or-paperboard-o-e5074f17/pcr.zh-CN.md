---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.recovered-waste-and-scrap-paper-or-paperboard-of-unbleached-kraft-paper-or-paperboard-o-e5074f17
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 供造纸用干式分选打包旧瓦楞纸箱

## 1. 范围与适用性

本归因型PCR覆盖单独收集的旧瓦楞纸箱/纸片（OCC）回收为造纸原料。从原持有者真实交出/收集接口开始，保留适用的历史纸材负荷，纳入收集点作业及外包入厂收集运输、接收称重、干式负分选、去除非纸异物及错误纸种、电动输送/搬运、液压压实与钢丝捆包、标识、首次质量放行，以及归属该批的成品仓储/重打包/装载至出厂门。这是完整供料方法，不是购买成品纸包再包装的服务。不提供工厂实测、配方、得率或排放默认值。

代表路线为有遮蔽干式分选打包场、电动设备/搬运、外购整份矿物基液压油与纸质悬挂牌，以及外部承运收集。它是已有作业证据的透明技术综合，不声称同一当代SKU或工厂。美国设施案例支持OCC分流分选打包，不证明中国公用工程或数量。中国低压电身份仅供真实匹配场址有条件采用。不假定蒸汽、锅炉、主动干燥、制浆、水洗、脱墨、漂白、造粒或现场燃烧。实际新增作业/流必须补充并审查，不能为了符合路线而省略。

唯一生产分母Q是按真实接收规范检查后新增首次放行的原态OCC净质量，排除铁丝、标识牌、单独液体与已剔污染物。保留实测水分/干固体；不得用人为加水、统一商业水分扣重或纸包数量造Q。合格期末成品已包含在Q。已验收批的发运、复验、退回/重打包不再造Q。

联合国39241涵盖未漂白牛皮纸/纸板及瓦楞纸/纸板废料的全部这类形态，本方法有意仅覆盖旧瓦楞子集。不覆盖作为参考产品的松散未漂白牛皮纸袋、新纸/纸板、纸浆、主要漂白化学浆纸（39242）、主要机械浆新闻纸（39243）或混合未分选/其他回收纸（39249）。错误纸种单列剔除物，不混入参考产品。商业牌号或产品UUID本身不是法律废物终止、方法或映射批准。独立供应的废物处理服务有其自身功能/参考，不能称为1千克OCC供料。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.recovered-waste-and-scrap-paper-or-paperboard-of-unbleached-kraft-paper-or-paperboard-o-e5074f17` |
| classification_refs | CPC 3.0 39241；较窄旧瓦楞子集；映射接受另行决定 |
| covered_products | 单独收集旧瓦楞纸箱/纸片；干式分选钢丝打包；满足接收规范的造纸原料 |
| excluded_products | 新纸板；纸浆；以松散牛皮纸袋为参考产品；漂白办公纸；机械浆新闻纸；混合未分选纸；处理服务 |
| representative_product | 遮蔽料场干分选OCC纸包，声明真实水分及接收牌号/杂质限值 |
| production_route | 原持有者收集→入厂收集运输→接收与干式负分选→去除错误纸种/非纸物→液压压实与钢丝打包→标识及首次放行→群组出厂服务 |
| market_state | 出厂门打包原态回收瓦楞纸，未再制浆；声明法律状态及接收验收 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 供应干式分选打包OCC作为造纸原料 |
| How much | 首次质量放行的1千克原态OCC净质量 |
| How well | 真实接收约定牌号及纸包完整性；实测水分与非期望物组成；无制浆/脱墨/漂白 |
| How long or cycle | 一个可追溯首次放行群组及其声明的真实出厂服务时段 |
| reference_flow_link | finished_occ |

| Field | Value |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 未漂白牛皮纸或纸板或瓦楞纸或纸板的回收（废和废料）纸或纸板 `55b83f36-bbd0-4e88-9fac-77e1a9bd24db` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 旧瓦楞来源与原持有者; 已分流收集系统; 真实来料牌号与组成; 未漂白牛皮纸或瓦楞的物理身份; 不将漂白办公纸/新闻纸/未分选纸混成产品; 干式分选及打包机配置; 铁丝合金与涂层; 标识牌供货形态及组成; 毛重称量与真实皮重记录; 实测水分与干固体方法; 接收牌号与杂质限值; 纸包尺寸密度完整性及标识; 验收或条件验收及处置; 法律产品或废物状态; 首次放行批次与Q登记; 逐交换期初期末在制品向量; 期初期末成品原Q及向量; 收集运输边界载荷与空驶; 地区电压与供方; 历史纸材负荷与回收边界分配; 包装物件库存与转移，含首次外部非采购接收; 退货冲回归属与真实返工; 服务时段及未观察未来作业; 真实废物去向与排放环境 |

每项限定均须在原数据集元数据、过程说明、参考流上下文或等效字段声明；缺失则该数据包不完整。原生参考产品宽于本方法，下面每处使用均在description保留相同限制。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q为cp_release下经最终接收规范检查的新增首次放行原态OCC净质量。扣实测铁丝/纸牌皮重及已分离液体/污染物；保留实测干固体/水分，发票水分扣减为商业量而非新实物质量。复验/重打包不计Q。 |
| raw_before_normalization | all inventory rows | 原始物理属性 | 原始单位 | 采集未归一化原记录。每个分子先一次转为该行原生单位再归属。累计体积已是总量，仅真实速率积分。密度须为该物质真实状态的独立依据，不能使用次级流系数。仅unit_result执行除Q。 |
| electric_energy | recovery_electricity; gate_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 仅一次用1kWh=3.6MJ。该身份为中国用户端低于1千伏电网交流电，不是现场燃料；充电损失只计一次。 |
| oil_volume | hydraulic_oil | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 保留整份制剂供货体积，仅一次用1L=0.001m3；质量实物核对需独立实测该制剂密度及温度/配置，不编值。 |
| physical_water_species | 实物衡算 | Mass | kg | 独立核对生产/成品/合并门的湿质量、干固体、游离水及相关实测C/其他元素。不主张反应或结构水转化。每种输出的真实蒸发、游离液和含水分开，不能一残差解两个未知。COD/TOC/VOC是指标，不是特定物种质量。 |
| pack_mass | 每种包装物件 | Mass | kg | 每种真实铁丝与纸牌独立称量。按件换质量需该配置实测单件质量，不能假定kg/item。全部包装不入Q或OCC净质量；随总实物发运和全部在制品/成品库存追踪附着包装。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 回收料场分选前原持有者单独收集的旧瓦楞纸箱/纸片；声明真实松散/打包接收状态及继承负荷 |
| starting_condition_role | 收集接口回收纸废物流输入；法律分类与LCA分配分类分别记录 |
| product_classification_scope | 39241旧瓦楞子集；非全部未漂白牛皮纸形态，也非39242/39243/39249产品 |
| recursive_input_rule | 同类外购已制备OCC继承原供货向量，仅补未完成的回收作业。再包装、内循环与外部退回不造新首次放行Q；不得再次调用完整供料数据集重复计收集/分选。 |
| upstream_dataset_requirement | 需兼容历史纸材分配及接收供货状态；公用工程、整份液压制剂、包装、收集运输及外部废物处理各计一次。按分配规则识别真实联产阶段、回收循环/质量及价值边界；不因废物输入就把历史置零。 |
| disclosure | 原持有者/来源状态；接收及接收方合同；前景/上游分工；真实法律/市场价值状态；实物/负荷账；Q及服务时段；失败/退货；排除项及数据缺口 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| sb_complete | production chain | 包含收集点作业、每段入厂收集、接收、分选、去除真实错误纸种/非纸物、电动搬运/输送、液压钢丝打包、挂牌及首次放行，再接群组出厂服务。区分已完成上游与未完成作业，不能缩成购买成品纸包。 | `jrc-paper-bref-2015`; `bramidan-b30-wide`; `pa-recovered-material-2005` |
| sb_route | all inventory rows | 干式电动作业场不假定蒸汽/锅炉或现场燃烧。每段外包收集用一个兼容运输供方，其真实燃料/排放计一次；补未覆盖装载/停靠作业。若真实发生自营燃料、热、化学品、制冷剂、吸附剂、其他包装或物料/物种，须逐具体原子输入/输出和协议有据补充才可声称完整。排除不是删除实际作业的许可。 | `jrc-paper-bref-2015`; `bramidan-b30-wide` |
| sb_physical | production; FG; combined gates | grossV实物跨界独立于A归属及Q。生产门：期初在制品+真实外部来料/新增=期末在制品+配对首次放行Q+实际剔除/样品/排放及独立有据水分变化。成品门：期初已放行成品+Q+外部产品退回=期末成品+总发运H+对外退回+真实服务损失。内部Q在合并门抵消；Q已含合格期末成品，不能另加生产输出。包装另做材料衡算。 | `jrc-ilcd-2010` |
| sb_stock | all lots and exchanges | 逐交换保留期初/期末在制品、原辅料库存及原已放行成品的继承向量。纳入失败/零产出/启停/空转/清洁及真实返工负荷。后来服务归于原Q群组，含历史期初成品，不能除当前发运量。外部退回只冲回原交付归属一次，并保留原负荷加真实增量作业。声明截止点的未观察未来服务须明示限制，不能声称为零。 | `jrc-ilcd-2010` |
| sb_quality | finished_occ | 只有接收方约定牌号、非期望物、水分及包况检查完成且条件验收处置后才放行所述OCC。实物质量、商业扣减及付款分开。CEPI指南说明接收规范由双方约定，本方法不强设统一10%水分、包重、杂质百分比或EN认证。 | `cepi-recovered-paper-quality` |
| sb_single_outlet | emissions; waste treatment | 混合出口采用真实出口总量或经核对互不重叠源分区，不能两者相加。整份转移废物/废水仅一个接收供方，所含物种保留组成账，不同时当基本流排放。真实最终基本流排放按各物种/环境另记，保留治理与源证据；UUID不提供排放因子。 | `jrc-ilcd-2010` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_recovery | 收集至OCC首次放行 | required | 每个范围内首次放行群组；含失败与零产出作业 | 综合收集/接收/分选/去除/打包/标识生产账；协议保留分阶段计量 | finished_occ |
| p_gate | 放行群组库存与出厂服务 | required | 真实仓储/搬运/装载及条件退货/重打包；保留原群组 | 成品/服务账；配对Q在合并门抵消 | gross_occ_dispatch |

每个条件卡需有真实发生依据或有据不适用，缺数据不等于零。这些具体最低卡不允许把实际未列交换混成集合。全部description及继承章节上下文均具规范性，包含原生身份/供方限制。

### 过程：回收生产 (`p_recovery`)

#### 输入

##### 产品流

###### 回收作业用电 (`recovery_electricity`)

仅适用中国电网平均、用户端低于1千伏的消费组合边界；原生净热值属性在此表示能量，不表示现场燃料燃烧。采集千瓦时后一次转为MJ；其他地区/电压/供电方式需兼容身份与供方。充电及充电损失只计一次。 包含实际收集点压实、输送、分选、电动搬运、液压打包驱动、抽尘、照明及全部失败/空转/清洁时段。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：在cp_utilities_recovery保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities_recovery`
- 来源：`jrc-paper-bref-2015`; `bramidan-b30-wide`; `pa-recovered-material-2005`

###### 外包公路收集运输 (`collection_transport`)

原生货车为货物质量×距离的产品运输服务，不是购买一辆车或燃料。逐实载路段记录含附着包装的运输总质量、距离、载荷、空驶、停靠及合同收集/装载范围。每段使用一个兼容供方，其燃料/排放仅上游计一次；通用路线不证明车型、柴油牌号、地区或收集能耗因子。供方未覆盖的收集点/装载作业另计。

- 选定流：货车 `d55f1329-cd61-44c0-8000-9367d38d5634`
- 流属性/单位：货物运输（质量×距离） `838aaa20-0117-11db-92e3-0800200c9a66` / t*km
- 数量规则：在cp_transport保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transport`
- 来源：`jrc-paper-bref-2015`; `bramidan-b30-wide`; `pa-recovered-material-2005`

###### 回收作业清洁水 (`recovery_water`)

工厂接收的经处理市政饮用自来水，不是水库原水、自然取水或固定香港/巴西供方。原生参考为质量/千克，次级体积系数不是实测密度。称重或使用表计体积及独立有据的该状态自来水密度。干式路线仅计真实清洁/抑尘用水，不作制浆。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在cp_utilities_recovery保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities_recovery`
- 来源：`jrc-paper-bref-2015`; `bramidan-b30-wide`

###### 外购矿物基液压油 (`hydraulic_oil`)

原生液压油允许矿物/合成基础油与添加剂；本卡为打包机/电动搬运液压系统实际购买的整份矿物油制剂。仅采购一次，不再采购其基础油/添加剂。遵循原生体积/m3，保留实测体积并独立实测整份制剂密度用于质量账。核对油箱期初/期末、补油、换油与泄漏；不设密度、换油率、原生/再精炼路线或供方默认值。

- 选定流：液压油 `30691a38-a947-4b41-991e-194f6c9aa88f`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：在cp_oil保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_oil`
- 来源：`jrc-paper-bref-2015`; `bramidan-b30-wide`

###### 生产捆包丝采购 (`wire_purchase`)

一项供货钢捆包丝，用于OCC纸包；原生族明确包含瓦楞纸板捆扎，但不指定合金、涂层、强度、直径、供方或每包用量，须声明并选择兼容供方。铁丝不入Q，采购及附着实物另账。 仅为P_recovery；服务所用采购进入P_service，不能两边重复。

- 选定流：捆包铁丝 `56ddb6db-1bf1-4c3c-b3db-bb00063774a8`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在cp_packaging_recovery保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging_recovery`
- 来源：`cepi-recovered-paper-quality`

###### 生产纸包标识牌采购 (`tag_purchase`)

一份外购未涂布纸质悬挂标识牌，用于纸包标识；声明真实印刷/涂层组成及供货形态。外购成品牌上游制牌/印刷仅计一次，不另采购其内含纸或油墨。由既有捆包丝固定；真实独立扣件/胶需另卡。瓶装食品/零售标签候选不能证明本身份。

- 选定流：未涂布纸质悬挂标识牌
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在cp_packaging_recovery保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging_recovery`
- 来源：`cepi-recovered-paper-quality`

##### 废物流

###### 收集的已分流旧瓦楞纸箱 (`received_occ`)

该废物流名称未指定，且无路线/牌号硬限定；其39249分类为更宽的分类位置，不表示本流是混合未分选纸。本卡仅绑定所述一种具体纸流，并记录实测组成、含水率、来源、法律状态与去向；不得仅按分类选择，也不能替代合格参考产品。 在原持有者/收集接口称量整份真实OCC货批；纸、游离水分、少量胶带、订书钉及污染物仅作组成子账，不再作为另购输入。运输包装皮重及其账分开；不采购新纸板。正/负市场价值不改变原生废物流类型，也不证明输入无负荷。 首次外部非采购附着钢丝或纸牌按cp_packaging_recovery的独立原子接收事件进入N；实测湿态质量及继承向量在OCC净重/Q之外各保留一次。仅有皮重观察不等于该入场记录。

- 选定流：废纸（未指定） `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在cp_receipt保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_receipt`
- 来源：`jrc-paper-bref-2015`; `bramidan-b30-wide`; `pa-recovered-material-2005`; `jrc-ilcd-2010`

#### 输出

##### 产品流

###### 首次放行OCC造纸原料 (`finished_occ`)

此通用产品族为工厂生产混合且处理未指定。本卡仅绑定本PCR单独收集、经干式分选并用铁丝打包、满足声明造纸接收规范的旧瓦楞纸箱/纸片；不代表新纸板、纸浆、漂白办公纸、新闻纸或混合未分选纸。原生身份不证明牌号、包质量、含水率、法律状态、地区或供方兼容；须保留真实批次及接收依据。 Q为分选并实际铁丝打包后新增首次放行的合格原态OCC净质量，排除铁丝、标识牌、已分离非纸物及游离液。含水率/干固体是独立实测伴随量；商业水分扣重不能改写实物质量。合格期末成品已含在Q。

- 选定流：未漂白牛皮纸或纸板或瓦楞纸或纸板的回收（废和废料）纸或纸板 `55b83f36-bbd0-4e88-9fac-77e1a9bd24db`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`identity_reference`
- 采集协议：`cp_release`
- 来源：`jrc-paper-bref-2015`; `bramidan-b30-wide`; `cepi-recovered-paper-quality`

##### 废物流

###### 未合格OCC剔除纸 (`rejected_occ`)

该废物流名称未指定，且无路线/牌号硬限定；其39249分类为更宽的分类位置，不表示本流是混合未分选纸。本卡仅绑定所述一种具体纸流，并记录实测组成、含水率、来源、法律状态与去向；不得仅按分类选择，也不能替代合格参考产品。 仅为污染/质量或加工失败后单独剔除的瓦楞纸；不能把已验收库存再列为新增Q。保留失败负荷与真实去向。

- 选定流：废纸（未指定） `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在cp_rejects保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_rejects`
- 来源：`jrc-paper-bref-2015`; `bramidan-b30-wide`; `cepi-recovered-paper-quality`

###### 漂白化学浆纸剔除物 (`bleached_reject`)

该废物流名称未指定，且无路线/牌号硬限定；其39249分类为更宽的分类位置，不表示本流是混合未分选纸。本卡仅绑定所述一种具体纸流，并记录实测组成、含水率、来源、法律状态与去向；不得仅按分类选择，也不能替代合格参考产品。 从OCC单独分出并称量的漂白办公纸混入物；不属参考产品，也不自动作为固定信用共产品。

- 选定流：废纸（未指定） `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在cp_rejects保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_rejects`
- 来源：`jrc-paper-bref-2015`; `bramidan-b30-wide`; `cepi-recovered-paper-quality`

###### 机械浆新闻纸剔除物 (`newsprint_reject`)

该废物流名称未指定，且无路线/牌号硬限定；其39249分类为更宽的分类位置，不表示本流是混合未分选纸。本卡仅绑定所述一种具体纸流，并记录实测组成、含水率、来源、法律状态与去向；不得仅按分类选择，也不能替代合格参考产品。 单独称量的新闻纸混入物，不是39241产品；不得与漂白纸行合并。

- 选定流：废纸（未指定） `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在cp_rejects保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_rejects`
- 来源：`jrc-paper-bref-2015`; `bramidan-b30-wide`; `cepi-recovered-paper-quality`

###### 剔除聚乙烯薄膜 (`pe_film_reject`)

一种经鉴别的PE薄膜混入物，机械去除且未经清洗/再造粒。核验聚合物及真实去向；PET或已清洗PE候选不能绑定本流。不自动给回收信用。

- 选定流：未清洗废聚乙烯薄膜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在cp_rejects保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_rejects`
- 来源：`jrc-paper-bref-2015`; `bramidan-b30-wide`; `cepi-recovered-paper-quality`

###### 剔除聚丙烯捆扎带 (`pp_strap_reject`)

一种从来料OCC分出的已鉴别聚丙烯均聚物捆扎带，与原生CAS9003-07-0一致。填充或共聚替代品需身份/牌号审查。原生为供机械回收的工厂混合PP废料，仅用于送该路线的机械分离PP废料，不是PET/PE或清洁颗粒；不暗示回收效率或供方。

- 选定流：聚丙烯废料 `88215d1b-e6b6-4ec7-af7f-83375e80637b`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在cp_rejects保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_rejects`
- 来源：`jrc-paper-bref-2015`; `bramidan-b30-wide`; `cepi-recovered-paper-quality`

###### 剔除钢订书钉 (`steel_reject`)

一种单独分出的钢订书钉/钢丝混入物，送回收。原生废钢除用于回收外无牌号/路线限定；不是晶圆废丝或熔炼服务。保留合金/涂层污染及去向；自用包装切头另行记账。

- 选定流：废钢 `6b1343f5-929b-4a1b-8459-f741ed19ebd2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在cp_rejects保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_rejects`
- 来源：`jrc-paper-bref-2015`; `bramidan-b30-wide`; `cepi-recovered-paper-quality`

###### 剔除实木碎块 (`wood_reject`)

一种实木碎块混入物；不假定为团聚木、纤维板、锯末或能量信用。保留真实处理与有害涂层鉴别。

- 选定流：未处理实木碎块废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在cp_rejects保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_rejects`
- 来源：`jrc-paper-bref-2015`; `bramidan-b30-wide`; `cepi-recovered-paper-quality`

###### 剔除钠钙容器玻璃碎片 (`glass_reject`)

一种已鉴别容器玻璃碎片流，不是浮法碎玻璃、晶圆废物、陶瓷或混合易碎物集合；其他真实物料另列。

- 选定流：未清洗钠钙容器玻璃碎片废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在cp_rejects保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_rejects`
- 来源：`jrc-paper-bref-2015`; `bramidan-b30-wide`; `cepi-recovered-paper-quality`

###### 捕集OCC纤维粉尘 (`captured_paper_dust`)

该废物流名称未指定，且无路线/牌号硬限定；其39249分类为更宽的分类位置，不表示本流是混合未分选纸。本卡仅绑定所述一种具体纸流，并记录实测组成、含水率、来源、法律状态与去向；不得仅按分类选择，也不能替代合格参考产品。 仅为从集尘装置称量的已捕集干瓦楞纸纤维尘，不是湿纸浆或空气排尘。真实夹杂异物另计；不得与排入空气的颗粒重复。

- 选定流：废纸（未指定） `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在cp_rejects保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_rejects`
- 来源：`jrc-paper-bref-2015`; `bramidan-b30-wide`; `cepi-recovered-paper-quality`

###### 排出的废液压油 (`used_hydraulic_oil`)

一种从设备排出的整份废矿物基液压油，声明污染与危险属性。原生废润滑油为产生点石油基/合成润滑剂废物且处理未指定；真实矿物液压润滑油仅在功能有据时适用。不默认再生、焚烧、填埋或信用。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在cp_oil保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_oil`
- 来源：`jrc-paper-bref-2015`; `bramidan-b30-wide`; `cepi-recovered-paper-quality`

###### 回收作业清洁废水 (`recovery_effluent`)

一种收集后送真实外部处理的清洁废水，不是直接基本流排放、市政污水替身或锰渣清洗水。水与悬浮/溶解成分独立测量。整份废水送外部处理一次，其所含已测污染物不能在转移口再次当排放。

- 选定流：收集的OCC料场清洁废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在cp_water_balance_recovery保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water_balance_recovery`
- 来源：`jrc-paper-bref-2015`; `bramidan-b30-wide`; `cepi-recovered-paper-quality`

###### 生产捆包丝切头 (`wire_production_waste`)

仅为同一钢捆包丝切断/断裂的废钢，送回收；原生废钢仅在实际为该铁基材料且送回收时适用。采购P、使用钢丝实物转移及废物是不同账项，不自动给共产品信用。

- 选定流：废钢 `6b1343f5-929b-4a1b-8459-f741ed19ebd2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在cp_packaging_recovery保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging_recovery`
- 来源：`jrc-paper-bref-2015`; `bramidan-b30-wide`; `cepi-recovered-paper-quality`

###### 生产纸牌切头 (`tag_production_waste`)

该废物流名称未指定，且无路线/牌号硬限定；其39249分类为更宽的分类位置，不表示本流是混合未分选纸。本卡仅绑定所述一种具体纸流，并记录实测组成、含水率、来源、法律状态与去向；不得仅按分类选择，也不能替代合格参考产品。 仅为本阶段废弃的同一种未涂布悬挂纸牌；整牌已含印刷，不虚构油墨采购或排放。

- 选定流：废纸（未指定） `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在cp_packaging_recovery保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging_recovery`
- 来源：`jrc-paper-bref-2015`; `bramidan-b30-wide`; `cepi-recovered-paper-quality`

##### 基本流

###### 回收作业颗粒排入空气 (`recovery_particles`)

真实排入空气、子环境及粒径未特指的颗粒质量。原生基本流允许此用途，所附熟料案例不提供OCC因子或组成。测量并界定真实源；不得替代PM10/PM2.5、已捕集粉尘，或把粒径总量与其子粒级叠加；不暗示影响评价覆盖。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在cp_emissions_recovery保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions_recovery`
- 来源：`jrc-paper-bref-2015`; `bramidan-b30-wide`

###### 回收作业水分蒸发 (`recovery_vapour`)

真实排入未特指空气的普通H2O水蒸气；CAS7732-18-5与主身份一致，原生同义词列表存在同位素/冰等噪声。不绑定重水/氚水、液体排放、外购蒸汽或假定蒸发残差。须有水分/空气状态实测依据；干式分选打包不主张反应水。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在cp_water_balance_recovery保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water_balance_recovery`
- 来源：`jrc-paper-bref-2015`; `bramidan-b30-wide`

### 过程：成品出厂服务 (`p_gate`)

#### 输入

##### 产品流

###### 配对首次放行接收 (`released_occ_transfer`)

此通用产品族为工厂生产混合且处理未指定。本卡仅绑定本PCR单独收集、经干式分选并用铁丝打包、满足声明造纸接收规范的旧瓦楞纸箱/纸片；不代表新纸板、纸浆、漂白办公纸、新闻纸或混合未分选纸。原生身份不证明牌号、包质量、含水率、法律状态、地区或供方兼容；须保留真实批次及接收依据。 与生产Q同批同量的配对内部接收；在合并实物门与finished_occ抵消，不是第二次采购或生产输出。

- 选定流：未漂白牛皮纸或纸板或瓦楞纸或纸板的回收（废和废料）纸或纸板 `55b83f36-bbd0-4e88-9fac-77e1a9bd24db`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在cp_ledger_gate保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_ledger_gate`
- 来源：`jrc-paper-bref-2015`; `bramidan-b30-wide`; `jrc-ilcd-2010`

###### 此前放行OCC外部退回 (`returned_occ`)

此通用产品族为工厂生产混合且处理未指定。本卡仅绑定本PCR单独收集、经干式分选并用铁丝打包、满足声明造纸接收规范的旧瓦楞纸箱/纸片；不代表新纸板、纸浆、漂白办公纸、新闻纸或混合未分选纸。原生身份不证明牌号、包质量、含水率、法律状态、地区或供方兼容；须保留真实批次及接收依据。 仅在真实外部退回时适用；关联原发运、原验收和历史负荷向量，原交付归属只冲回一次。分选/重打包仅把真实增量作业加给原群组；复验/再放行不造新Q。

- 选定流：未漂白牛皮纸或纸板或瓦楞纸或纸板的回收（废和废料）纸或纸板 `55b83f36-bbd0-4e88-9fac-77e1a9bd24db`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在cp_ledger_gate保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_ledger_gate`
- 来源：`cepi-recovered-paper-quality`; `jrc-ilcd-2010`

###### 成品仓储与发运用电 (`gate_electricity`)

仅适用中国电网平均、用户端低于1千伏的消费组合边界；原生净热值属性在此表示能量，不表示现场燃料燃烧。采集千瓦时后一次转为MJ；其他地区/电压/供电方式需兼容身份与供方。充电及充电损失只计一次。 放行后仍保留归于原群组的仓储、电动搬运、返工、装载、空转和清洁。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：在cp_utilities_gate保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities_gate`
- 来源：`cepi-recovered-paper-quality`; `jrc-ilcd-2010`

###### 成品区清洁水 (`gate_water`)

工厂接收的经处理市政饮用自来水，不是水库原水、自然取水或固定香港/巴西供方。原生参考为质量/千克，次级体积系数不是实测密度。称重或使用表计体积及独立有据的该状态自来水密度。干式路线仅计真实清洁/抑尘用水，不作制浆。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在cp_utilities_gate保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities_gate`
- 来源：`cepi-recovered-paper-quality`; `jrc-ilcd-2010`

###### 服务替换捆包丝采购 (`wire_service_purchase`)

一项供货钢捆包丝，用于OCC纸包；原生族明确包含瓦楞纸板捆扎，但不指定合金、涂层、强度、直径、供方或每包用量，须声明并选择兼容供方。铁丝不入Q，采购及附着实物另账。 P_service仅为真实采购的不重叠分区；内部复用不是采购。

- 选定流：捆包铁丝 `56ddb6db-1bf1-4c3c-b3db-bb00063774a8`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在cp_packaging_gate保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging_gate`
- 来源：`cepi-recovered-paper-quality`; `jrc-ilcd-2010`

###### 服务替换纸牌采购 (`tag_service_purchase`)

与tag_purchase同一种外购标识牌，仅限服务更换；发票P按生产/服务不重叠拆分，不重新采购退回/内部复用牌。不主张瓶签UUID。

- 选定流：未涂布纸质悬挂标识牌
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在cp_packaging_gate保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging_gate`
- 来源：`cepi-recovered-paper-quality`; `jrc-ilcd-2010`

###### 外部退回捆包丝接收 (`wire_external_received`)

一项供货钢捆包丝，用于OCC纸包；原生族明确包含瓦楞纸板捆扎，但不指定合金、涂层、强度、直径、供方或每包用量，须声明并选择兼容供方。铁丝不入Q，采购及附着实物另账。 ER包含散装及附着退回，每次真实跨界仅计一次；继承其原采购向量，ER不是P。 须将同一物件/批次追溯到真实此前外出及接收；首次外部非采购入场即使曾在别处使用，也属N而非ER，不得编造外出历史。

- 选定流：捆包铁丝 `56ddb6db-1bf1-4c3c-b3db-bb00063774a8`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在cp_packaging_gate保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging_gate`
- 来源：`cepi-recovered-paper-quality`; `jrc-ilcd-2010`

###### 外部退回纸牌接收 (`tag_external_received`)

同一种标识牌ER，可为散装或附着外部退货；从产品退货净质量及Q中排除其质量，继承原向量且不再采购。 须追溯同一物件/批次的真实此前外出及接收。首次外部非采购纸牌，含曾在别处使用的纸牌，按真实阶段协议单列N事件，绝非ER或I。

- 选定流：未涂布纸质悬挂标识牌
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在cp_packaging_gate保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging_gate`
- 来源：`cepi-recovered-paper-quality`; `jrc-ilcd-2010`

#### 输出

##### 产品流

###### OCC实物总发运 (`gross_occ_dispatch`)

此通用产品族为工厂生产混合且处理未指定。本卡仅绑定本PCR单独收集、经干式分选并用铁丝打包、满足声明造纸接收规范的旧瓦楞纸箱/纸片；不代表新纸板、纸浆、漂白办公纸、新闻纸或混合未分选纸。原生身份不证明牌号、包质量、含水率、法律状态、地区或供方兼容；须保留真实批次及接收依据。 H为真实总发运OCC净质量，含历史库存与再次发运。保留原群组；H未必等于Q，也不是新增产量。接收规范门为出厂待发运，厂外出厂运输另作下游披露，不暗中纳入。

- 选定流：未漂白牛皮纸或纸板或瓦楞纸或纸板的回收（废和废料）纸或纸板 `55b83f36-bbd0-4e88-9fac-77e1a9bd24db`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在cp_ledger_gate保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_ledger_gate`
- 来源：`cepi-recovered-paper-quality`; `jrc-ilcd-2010`

###### OCC对外退回原持有者 (`occ_external_returnout`)

此通用产品族为工厂生产混合且处理未指定。本卡仅绑定本PCR单独收集、经干式分选并用铁丝打包、满足声明造纸接收规范的旧瓦楞纸箱/纸片；不代表新纸板、纸浆、漂白办公纸、新闻纸或混合未分选纸。原生身份不证明牌号、包质量、含水率、法律状态、地区或供方兼容；须保留真实批次及接收依据。 真实对外退回原持有者；与原接收/交付及负荷冲回配对一次，区别于向造纸客户的H发运，绝不计Q。

- 选定流：未漂白牛皮纸或纸板或瓦楞纸或纸板的回收（废和废料）纸或纸板 `55b83f36-bbd0-4e88-9fac-77e1a9bd24db`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在cp_ledger_gate保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_ledger_gate`
- 来源：`cepi-recovered-paper-quality`; `jrc-ilcd-2010`

###### 随总发运外出的捆包丝 (`wire_shipped`)

一项供货钢捆包丝，用于OCC纸包；原生族明确包含瓦楞纸板捆扎，但不指定合金、涂层、强度、直径、供方或每包用量，须声明并选择兼容供方。铁丝不入Q，采购及附着实物另账。 S随全部真实总发运H，含再次发运及历史库存。附着铁丝质量不是OCC净质量或新采购。

- 选定流：捆包铁丝 `56ddb6db-1bf1-4c3c-b3db-bb00063774a8`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在cp_packaging_gate保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging_gate`
- 来源：`cepi-recovered-paper-quality`

###### 随总发运外出的纸牌 (`tag_shipped`)

同一种纸牌S跟随H而非Q；其既有采购向量随实物离开。发运不再新增印刷或纸输入。

- 选定流：未涂布纸质悬挂标识牌
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在cp_packaging_gate保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging_gate`
- 来源：`cepi-recovered-paper-quality`

###### 对外返还捆包丝 (`wire_external_out`)

一项供货钢捆包丝，用于OCC纸包；原生族明确包含瓦楞纸板捆扎，但不指定合金、涂层、强度、直径、供方或每包用量，须声明并选择兼容供方。铁丝不入Q，采购及附着实物另账。 EO为真实对外返还，区别于随H发运的钢丝。同一跨界不能既算S又算EO；内部复用I抵消。

- 选定流：捆包铁丝 `56ddb6db-1bf1-4c3c-b3db-bb00063774a8`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在cp_packaging_gate保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging_gate`
- 来源：`cepi-recovered-paper-quality`

###### 对外返还纸牌 (`tag_external_out`)

EO为同一种牌真实对外返还，区别于S；I在该物件账内抵消。

- 选定流：未涂布纸质悬挂标识牌
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在cp_packaging_gate保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging_gate`
- 来源：`cepi-recovered-paper-quality`

##### 废物流

###### 放行后OCC损失或剔除 (`gate_occ_loss`)

该废物流名称未指定，且无路线/牌号硬限定；其39249分类为更宽的分类位置，不表示本流是混合未分选纸。本卡仅绑定所述一种具体纸流，并记录实测组成、含水率、来源、法律状态与去向；不得仅按分类选择，也不能替代合格参考产品。 仅为真实服务阶段OCC损失/剔除，保留原Q/向量及增量作业；不虚构新增生产或丢弃历史负荷。

- 选定流：废纸（未指定） `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在cp_ledger_gate保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_ledger_gate`
- 来源：`jrc-paper-bref-2015`; `bramidan-b30-wide`; `cepi-recovered-paper-quality`; `jrc-ilcd-2010`

###### 服务废捆包丝 (`wire_service_waste`)

仓储/重打包/装载废弃且实际送回收的同一种钢捆包丝，区别于来料订书钉；不再采购，不给避免钢信用，也不与EO/S重叠。

- 选定流：废钢 `6b1343f5-929b-4a1b-8459-f741ed19ebd2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在cp_packaging_gate保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging_gate`
- 来源：`jrc-paper-bref-2015`; `bramidan-b30-wide`; `cepi-recovered-paper-quality`; `jrc-ilcd-2010`

###### 服务废纸牌 (`tag_service_waste`)

该废物流名称未指定，且无路线/牌号硬限定；其39249分类为更宽的分类位置，不表示本流是混合未分选纸。本卡仅绑定所述一种具体纸流，并记录实测组成、含水率、来源、法律状态与去向；不得仅按分类选择，也不能替代合格参考产品。 仅为放行后废弃的同一种标识牌；保留附着包装库存与原牌向量。

- 选定流：废纸（未指定） `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在cp_packaging_gate保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging_gate`
- 来源：`jrc-paper-bref-2015`; `bramidan-b30-wide`; `cepi-recovered-paper-quality`; `jrc-ilcd-2010`

###### 成品区清洁废水 (`gate_effluent`)

同一种真实收集清洁废水，仅为服务阶段分区，送外部处理一次；不主张直接水体排放，检测真实污染成分并保留处理供方接口。

- 选定流：收集的OCC料场清洁废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在cp_water_balance_gate保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water_balance_gate`
- 来源：`jrc-paper-bref-2015`; `bramidan-b30-wide`; `cepi-recovered-paper-quality`; `jrc-ilcd-2010`

##### 基本流

###### 服务颗粒排入空气 (`gate_particles`)

真实排入空气、子环境及粒径未特指的颗粒质量。原生基本流允许此用途，所附熟料案例不提供OCC因子或组成。测量并界定真实源；不得替代PM10/PM2.5、已捕集粉尘，或把粒径总量与其子粒级叠加；不暗示影响评价覆盖。 仅为服务阶段源分区；不可把混合出口总量与其源分量相加。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在cp_emissions_gate保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions_gate`
- 来源：`jrc-paper-bref-2015`; `bramidan-b30-wide`

###### 服务水分蒸发 (`gate_vapour`)

真实排入未特指空气的普通H2O水蒸气；CAS7732-18-5与主身份一致，原生同义词列表存在同位素/冰等噪声。不绑定重水/氚水、液体排放、外购蒸汽或假定蒸发残差。须有水分/空气状态实测依据；干式分选打包不主张反应水。 区分放行含水率与后来蒸发，保留历史产品质量及库存向量。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在cp_water_balance_gate保留本行/阶段未归一化分子；单位转换及归属后引用第8节同一次每参考流计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water_balance_gate`
- 来源：`jrc-paper-bref-2015`; `bramidan-b30-wide`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| al_order | each shared exchange | 本方法为需分配场景下的归因型材料供给，不是后果替代模型。先把专属实测作业直接归属并实/虚拆分作业，再逐交换检验对各功能的决定性物理因果关系。只有真实不可分剩余才用同一实际过程门及物料状态的同期市场价值。不得任意选择质量/经济分配、固定比例或由工业流程图推因果分配；保留驱动因素及敏感性。 | `jrc-ilcd-2010` |
| al_history | received_occ; historical paper material | 来源价值独立于法律/原生废物状态记录。对源头有价值OCC按ILCD归因回收方法：识别产出技术上可比回收材料的真实联产阶段，保留相关原生/回收/最终损失清单及质量/循环假设，按al_order分配。不能因箱子曾存在就给它所有历史包装使用服务，也不能因称废物而删去相关造纸制造。使用兼容且独立记录的上游向量；缺失则披露历史向量缺口并不出完整摇篮到门结果。不提供统一回收率或无限循环系数。 | `jrc-ilcd-2010` |
| al_negative_origin | negative-value incoming material | 若真实出现处理费/负价值状态，须定位首次产生有价次生物的实际过程，并保留物理/材料质量及可比真实联产历史。ILCD附录14区分前序处理责任与联合边界过程。前序处理留在其责任系统，边界过程仍按拆分/因果/剩余价值顺序，负门价绝对值仅用于剩余服务/价值计算。不能把全部历史处理强压OCC，也不能悄然给全部收集零负荷。零/不明价值需有据审查，不能默认截断。 | `jrc-ilcd-2010` |
| al_outputs | other separated material; collection service | 其他可售纸种、PP、钢或其他真实输出需各自实测数量/状态、去向及真实共功能判断；专属分选/打包作业归其自身，仅共享剩余按al_order分配。即使归属负荷不同，实物剔除仍保留grossV。回收潜力、转移废物及未来避免原生纸/钢/能源都不是自动信用。同一转移负荷不得同时用不兼容处理服务/材料供给供方。 | `jrc-ilcd-2010` |
| al_stock | all inventory rows | 把实物V、归属交换向量A及原首次放行Q分开。逐批将WIP/FG负荷带过生产与出厂服务，退货只冲回原交付一次；返工仅贡献真正新增F。X只能减去已在OTHER内同侧确证完全重复项，不能减独立历史负荷、真实输出或材料损失。库存分配比例不能改实物V或把服务发运变Q。 | `jrc-ilcd-2010` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

下表aggregation_rule单元仅声明最终报告基准。每项协议按行/阶段/群组采集并汇总未归一化原记录，不执行除Q。先转换并归属这些原始分子，再仅引用唯一unit_result计算；同一计算值按所述每参考流基准报告，不再求第二次商。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_receipt | p_recovery | received_occ | weighing | 原持有者; 批次; 来源牌号; 毛重; 真实皮重; 组成分量; 水分; 来料价值及费用; 法律状态; 收集点作业; 上游向量 | 经校准收集/接收秤及代表性开包分选/水分样品；核对持有者与料场票据，损失及外包装分开。保留整货批与不可叠加组成子账。 按行/阶段/群组采集并汇总未归一化原记录。每参考流汇总标签仅为最终报告基准；先转换/归属，再由第8节一次相除。 | kg | 每货批 | 完整声明生产及群组服务时段，包含失败与无产出时段 | 具名原持有者/料场及各合同接口与原群组 | 每 1 kg 参考流 | 校准; 票据; 签字批日志; 接收/规范依据; 不确定性; 原单位; 缺口及不适用依据 |
| cp_release | p_recovery | finished_occ | acceptance | 唯一首次放行号; 批次; 此前验收标记; 包毛重; 实测铁丝/纸牌皮重; 原态OCC净重; 水分/干固体; 杂质; 包完整性; 接收限值; 验收决定; Q | 实际分选打包后用校准秤称量；按留存接收约定核查牌号、包况、水分及非期望物；条件验收解决后才计Q。水分采样/烘干或校准仪表需保留样本基准；不统一扣湿重。 按行/阶段/群组采集并汇总未归一化原记录。每参考流汇总标签仅为最终报告基准；先转换/归属，再由第8节一次相除。 | kg | 每首次放行批 | 完整声明生产及群组服务时段，包含失败与无产出时段 | 具名原持有者/料场及各合同接口与原群组 | 每 1 kg 参考流 | 校准; 票据; 签字批日志; 接收/规范依据; 不确定性; 原单位; 缺口及不适用依据 |
| cp_utilities_recovery | p_recovery | electricity; water | metering | 表号; 阶段; 群组; 原始起止读数; 原单位; 必要时速率/时间; 电压; 场址/供方; 分配驱动; 实际空转/清洁/返工时段; 必要时实测水密度 | 用独立电表及自来水表、分阶段/群组日志和校准仪器；区分累计读数与速率。与账单闭合并加失败/空转/启停/清洁负荷，充电仅计一次。 本协议仅为生产回收阶段分区；与另一阶段核对配对转移。 按行/阶段/群组采集并汇总未归一化原记录。每参考流汇总标签仅为最终报告基准；先转换/归属，再由第8节一次相除。 | MJ; kg | 每读数时段 | 完整声明生产及群组服务时段，包含失败与无产出时段 | 具名原持有者/料场及各合同接口与原群组 | 每 1 kg 参考流 | 校准; 票据; 签字批日志; 接收/规范依据; 不确定性; 原单位; 缺口及不适用依据 |
| cp_utilities_gate | p_gate | electricity; water | metering | 表号; 阶段; 群组; 原始起止读数; 原单位; 必要时速率/时间; 电压; 场址/供方; 分配驱动; 实际空转/清洁/返工时段; 必要时实测水密度 | 用独立电表及自来水表、分阶段/群组日志和校准仪器；区分累计读数与速率。与账单闭合并加失败/空转/启停/清洁负荷，充电仅计一次。 本协议仅为成品服务阶段分区；与另一阶段核对配对转移。 按行/阶段/群组采集并汇总未归一化原记录。每参考流汇总标签仅为最终报告基准；先转换/归属，再由第8节一次相除。 | MJ; kg | 每读数时段 | 完整声明生产及群组服务时段，包含失败与无产出时段 | 具名原持有者/料场及各合同接口与原群组 | 每 1 kg 参考流 | 校准; 票据; 签字批日志; 接收/规范依据; 不确定性; 原单位; 缺口及不适用依据 |
| cp_transport | p_recovery | collection_transport | trip_record | 路段号; 持有者/场址; 载重; 附着包装; 距离; 有效载荷; 空驶; 停靠; 收集/装载覆盖; 燃料/车辆供方范围; 发票 | 采用真实路线/行程及地磅依据，不假定车型。保留原单位载重距离及不重叠服务分段；供方不含收集点作业另列，每段仅一个供方。 按行/阶段/群组采集并汇总未归一化原记录。每参考流汇总标签仅为最终报告基准；先转换/归属，再由第8节一次相除。 | t*km | 每行程段 | 完整声明生产及群组服务时段，包含失败与无产出时段 | 具名原持有者/料场及各合同接口与原群组 | 每 1 kg 参考流 | 校准; 票据; 签字批日志; 接收/规范依据; 不确定性; 原单位; 缺口及不适用依据 |
| cp_oil | p_recovery | hydraulic_oil; used_hydraulic_oil | maintenance | 整份制剂; 牌号; 矿物基; 油箱期初/期末; 购买/补油/换油; 原体积; 温度; 独立实测密度; 排出废油质量; 围堵泄漏; 场址阶段 | 量整份制剂体积并独立测该状态密度；油箱/采购账与排油称量及真实捕集损失核对。以前充装库存负荷与新增采购分开；若真实发生泄漏吸附物或基本流排放须逐原子补列。 按行/阶段/群组采集并汇总未归一化原记录。每参考流汇总标签仅为最终报告基准；先转换/归属，再由第8节一次相除。 | m3; kg | 每采购/补油/换油及期末 | 完整声明生产及群组服务时段，包含失败与无产出时段 | 具名原持有者/料场及各合同接口与原群组 | 每 1 kg 参考流 | 校准; 票据; 签字批日志; 接收/规范依据; 不确定性; 原单位; 缺口及不适用依据 |
| cp_rejects | p_recovery | each separate reject | sorting_record | 单一物料/聚合物; 真实牌号; 来源批; 毛重/皮重; 水分; 干固体; 去向; 回收/处理合同; 采样组成; 捕集与排放粉尘区别 | 按物理材料及纸种分开称剔除物；代表组成需实测并保留不确定性，整负荷与其成分不可叠加。独立核验聚合物/玻璃/木材状态；真实未列物料补齐。 按行/阶段/群组采集并汇总未归一化原记录。每参考流汇总标签仅为最终报告基准；先转换/归属，再由第8节一次相除。 | kg | 每批/出口 | 完整声明生产及群组服务时段，包含失败与无产出时段 | 具名原持有者/料场及各合同接口与原群组 | 每 1 kg 参考流 | 校准; 票据; 签字批日志; 接收/规范依据; 不确定性; 原单位; 缺口及不适用依据 |
| cp_packaging_recovery | p_recovery | each wire or tag leg | article_ledger |一种物件规格; 原单位; 实测单件质量; 期初空件/附着WIP/附着FG/周转件; P_recovery; P_service; ER; I; 期末空件/附着WIP/附着FG/周转件; 随总H外出S; EO; W; 原向量；N_recovery；独立物件接收事件号；物件/批次身份；真实来源及供货状态；群组；门；阶段；期间；独立实测当前湿态质量；继承交换向量及唯一负荷所有者；ER此前外出/接收链接；同侧OTHER/X证据 |钢丝及纸牌分别完整记账，按真实配置计数称重。P分区不重叠，ER为外返接收、I内复用、S随总发运、EO对外返还、W真实废弃。附着包装随Q跨内部门须配对。保留原库存及退回物件向量，不再采购或给Q信用。新增实际包装含周转件均用同账法。 本协议仅为生产回收阶段分区；与另一阶段核对配对转移。 按行/阶段/群组采集并汇总未归一化原记录。每参考流汇总标签仅为最终报告基准；先转换/归属，再由第8节一次相除。 本阶段每次真实首次外部非采购入场须建立独立原子输入事件行：wire_n_recovery_<event_id>为一种钢捆包丝（捆包铁丝56ddb6db-1bf1-4c3c-b3db-bb00063774a8），tag_n_recovery_<event_id>为一种未涂布纸质悬挂牌（UUID按已声明缺口待确认）；保留各物件既有原生限制。均用质量93a60a56-a3c8-11da-a746-0800200b9a66 / kg，记录真实过程p_recovery、来源/群组/门/阶段/期间及唯一负荷所有者。每行完整Amount为：expression采用cp_packaging_recovery独立实测未归一化当前湿态千克，再依raw_units、attributed_vector及唯一unit_result处理；value_mode为calculated_value；specificity为site_specific；basis为每 1 kg 参考流 / reference_flow；evidence为calculated_from_collection，collection_protocol_id为cp_packaging_recovery，source_ids为cepi-recovered-paper-quality和jrc-ilcd-2010；不编造范围。数据集使用前须为每个真实事件保留独立行/事件号、具体身份及完整Amount，纸牌身份须确认或披露不完整；其他真实物料逐种另建具体原子事件。N_recovery仅在真实外部接口计一次，内部转移不再计。N不是P、同物件可追溯退回ER或内部复用I；曾在别处使用的物件首次非采购入场仍属N。已计P的付费/捆绑采购不再计N。湿态质量须独立测量，不用残差补平；继承历史不得再加一遍制造/采购负荷，也不默认零。接收后仍留存期末的物件须保留在完整库存账。 | kg | 每次移动及盘点 | 完整声明生产及群组服务时段，包含失败与无产出时段 | 具名原持有者/料场及各合同接口与原群组 | 每 1 kg 参考流 | 校准; 票据; 签字批日志; 接收/规范依据; 不确定性; 原单位; 缺口及不适用依据 |
| cp_packaging_gate | p_gate | each wire or tag leg | article_ledger |一种物件规格; 原单位; 实测单件质量; 期初空件/附着WIP/附着FG/周转件; P_recovery; P_service; ER; I; 期末空件/附着WIP/附着FG/周转件; 随总H外出S; EO; W; 原向量；N_gate；独立物件接收事件号；物件/批次身份；真实来源及供货状态；群组；门；阶段；期间；独立实测当前湿态质量；继承交换向量及唯一负荷所有者；ER此前外出/接收链接；同侧OTHER/X证据 |钢丝及纸牌分别完整记账，按真实配置计数称重。P分区不重叠，ER为外返接收、I内复用、S随总发运、EO对外返还、W真实废弃。附着包装随Q跨内部门须配对。保留原库存及退回物件向量，不再采购或给Q信用。新增实际包装含周转件均用同账法。 本协议仅为成品服务阶段分区；与另一阶段核对配对转移。 按行/阶段/群组采集并汇总未归一化原记录。每参考流汇总标签仅为最终报告基准；先转换/归属，再由第8节一次相除。 本阶段每次真实首次外部非采购入场须建立独立原子输入事件行：wire_n_gate_<event_id>为一种钢捆包丝（捆包铁丝56ddb6db-1bf1-4c3c-b3db-bb00063774a8），tag_n_gate_<event_id>为一种未涂布纸质悬挂牌（UUID按已声明缺口待确认）；保留各物件既有原生限制。均用质量93a60a56-a3c8-11da-a746-0800200b9a66 / kg，记录真实过程p_gate、来源/群组/门/阶段/期间及唯一负荷所有者。每行完整Amount为：expression采用cp_packaging_gate独立实测未归一化当前湿态千克，再依raw_units、attributed_vector及唯一unit_result处理；value_mode为calculated_value；specificity为site_specific；basis为每 1 kg 参考流 / reference_flow；evidence为calculated_from_collection，collection_protocol_id为cp_packaging_gate，source_ids为cepi-recovered-paper-quality和jrc-ilcd-2010；不编造范围。数据集使用前须为每个真实事件保留独立行/事件号、具体身份及完整Amount，纸牌身份须确认或披露不完整；其他真实物料逐种另建具体原子事件。N_gate仅在真实外部接口计一次，内部转移不再计。N不是P、同物件可追溯退回ER或内部复用I；曾在别处使用的物件首次非采购入场仍属N。已计P的付费/捆绑采购不再计N。湿态质量须独立测量，不用残差补平；继承历史不得再加一遍制造/采购负荷，也不默认零。接收后仍留存期末的物件须保留在完整库存账。 | kg | 每次移动及盘点 | 完整声明生产及群组服务时段，包含失败与无产出时段 | 具名原持有者/料场及各合同接口与原群组 | 每 1 kg 参考流 | 校准; 票据; 签字批日志; 接收/规范依据; 不确定性; 原单位; 缺口及不适用依据 |
| cp_ledger_recovery | p_recovery | physical and inherited vectors | lot_ledger | 批次; 各材料grossV; 期初期末WIP; 原已验收FG; 原Qc; 继承交换向量; Q转移; H发运; 退回原交付链接及冲回; 真实F; OTHER内精确重复X; 服务时间; 损失 | 分别核对生产/FG/合并实物门与逐交换归属。保留每个继承向量与原群组，退回冲回一次，仅加真实增量返工。保留零产出/失败/空转/启停/清洁及服务截止记录；历史FG用原Qc。 本协议仅为生产回收阶段分区；与另一阶段核对配对转移。 按行/阶段/群组采集并汇总未归一化原记录。每参考流汇总标签仅为最终报告基准；先转换/归属，再由第8节一次相除。 | kg; native exchange units | 每移动及期末 | 完整声明生产及群组服务时段，包含失败与无产出时段 | 具名原持有者/料场及各合同接口与原群组 | 每 1 kg 参考流 | 校准; 票据; 签字批日志; 接收/规范依据; 不确定性; 原单位; 缺口及不适用依据 |
| cp_ledger_gate | p_gate | physical and inherited vectors | lot_ledger | 批次; 各材料grossV; 期初期末WIP; 原已验收FG; 原Qc; 继承交换向量; Q转移; H发运; 退回原交付链接及冲回; 真实F; OTHER内精确重复X; 服务时间; 损失 | 分别核对生产/FG/合并实物门与逐交换归属。保留每个继承向量与原群组，退回冲回一次，仅加真实增量返工。保留零产出/失败/空转/启停/清洁及服务截止记录；历史FG用原Qc。 本协议仅为成品服务阶段分区；与另一阶段核对配对转移。 按行/阶段/群组采集并汇总未归一化原记录。每参考流汇总标签仅为最终报告基准；先转换/归属，再由第8节一次相除。 | kg; native exchange units | 每移动及期末 | 完整声明生产及群组服务时段，包含失败与无产出时段 | 具名原持有者/料场及各合同接口与原群组 | 每 1 kg 参考流 | 校准; 票据; 签字批日志; 接收/规范依据; 不确定性; 原单位; 缺口及不适用依据 |
| cp_emissions_recovery | p_recovery | actual particles to air | monitoring | 源; 阶段; 治理; 环境; 粒径基准; 实测浓度; 真实气体体积或速率/时间; 有组织/无组织范围; 混合出口分区; 不确定性 | 实测真实排放或用独立有据源特定方法，不从已捕粉尘或通用UUID案例推量。累计采样体积不再乘时间；温压/湿度基准一致。物种或粒径总量与子分量不能重复相加。 本协议仅为生产回收阶段分区；与另一阶段核对配对转移。 按行/阶段/群组采集并汇总未归一化原记录。每参考流汇总标签仅为最终报告基准；先转换/归属，再由第8节一次相除。 | kg | 每监测源/时段 | 完整声明生产及群组服务时段，包含失败与无产出时段 | 具名原持有者/料场及各合同接口与原群组 | 每 1 kg 参考流 | 校准; 票据; 签字批日志; 接收/规范依据; 不确定性; 原单位; 缺口及不适用依据 |
| cp_emissions_gate | p_gate | actual particles to air | monitoring | 源; 阶段; 治理; 环境; 粒径基准; 实测浓度; 真实气体体积或速率/时间; 有组织/无组织范围; 混合出口分区; 不确定性 | 实测真实排放或用独立有据源特定方法，不从已捕粉尘或通用UUID案例推量。累计采样体积不再乘时间；温压/湿度基准一致。物种或粒径总量与子分量不能重复相加。 本协议仅为成品服务阶段分区；与另一阶段核对配对转移。 按行/阶段/群组采集并汇总未归一化原记录。每参考流汇总标签仅为最终报告基准；先转换/归属，再由第8节一次相除。 | kg | 每监测源/时段 | 完整声明生产及群组服务时段，包含失败与无产出时段 | 具名原持有者/料场及各合同接口与原群组 | 每 1 kg 参考流 | 校准; 票据; 签字批日志; 接收/规范依据; 不确定性; 原单位; 缺口及不适用依据 |
| cp_water_balance_recovery | p_recovery | free water and effluent | water_ledger | 自来水; 来/出批水分; 期初期末材料水; 清洁废水质量/体积; 独立密度; 实测溶解/悬浮组成; 蒸发测量; 真实雨水/冷凝水; 真实去向 | 所有门水账独立于总质量及实测元素。废水与蒸发分别测或保留未知，不能用一残差拟合两者。若有真实雨水/冷凝水须具体补流，不假定蒸汽回路或结构/反应水。整份废水仅跨外部处理接口一次。 本协议仅为生产回收阶段分区；与另一阶段核对配对转移。 按行/阶段/群组采集并汇总未归一化原记录。每参考流汇总标签仅为最终报告基准；先转换/归属，再由第8节一次相除。 | kg | 每批/清洁事件及盘点 | 完整声明生产及群组服务时段，包含失败与无产出时段 | 具名原持有者/料场及各合同接口与原群组 | 每 1 kg 参考流 | 校准; 票据; 签字批日志; 接收/规范依据; 不确定性; 原单位; 缺口及不适用依据 |
| cp_water_balance_gate | p_gate | free water and effluent | water_ledger | 自来水; 来/出批水分; 期初期末材料水; 清洁废水质量/体积; 独立密度; 实测溶解/悬浮组成; 蒸发测量; 真实雨水/冷凝水; 真实去向 | 所有门水账独立于总质量及实测元素。废水与蒸发分别测或保留未知，不能用一残差拟合两者。若有真实雨水/冷凝水须具体补流，不假定蒸汽回路或结构/反应水。整份废水仅跨外部处理接口一次。 本协议仅为成品服务阶段分区；与另一阶段核对配对转移。 按行/阶段/群组采集并汇总未归一化原记录。每参考流汇总标签仅为最终报告基准；先转换/归属，再由第8节一次相除。 | kg | 每批/清洁事件及盘点 | 完整声明生产及群组服务时段，包含失败与无产出时段 | 具名原持有者/料场及各合同接口与原群组 | 每 1 kg 参考流 | 校准; 票据; 签字批日志; 接收/规范依据; 不确定性; 原单位; 缺口及不适用依据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_units | all inventory rows | 保留原读数，各原始分子在归属前一次转为该行原生单位。MJ=3.6*kWh；m3=0.001*L；运输t*km=各真实载运总kg*真实路段km/1000之和。密度换算用该物质/状态独立实测密度；仅真实速率积分。 | raw readings; native units; measured density; cp_utilities_recovery; cp_utilities_gate; cp_transport; cp_oil | 已转换原始行总量 | `jrc-ilcd-2010` |
| gross_balance | all inventory rows | 各实物门逐材料：期初库存+外部接收+配对内部接收=期末库存+真实外部输出+配对内部转移+独立有据转化。生产Q和FG接收Q仅在合并门抵消。包装、湿质量、干固体、水及相关元素独立核对；grossV不乘分配比例。 | grossV; cp_receipt; cp_ledger_recovery; cp_ledger_gate; cp_water_balance_recovery; cp_water_balance_gate | 核对后实物门 | `jrc-ilcd-2010` |
| first_release | finished_occ | Q=cp_release下新增首次放行原态OCC净质量之和，已扣真实包装皮重及分离污染物/游离液。新增合格期末FG已含一次。排除复验、此前放行退回及总发运H。Q=0保留真实负荷且不出单位结果。 | cp_release; unique original acceptance register | Q | `cepi-recovered-paper-quality`; `jrc-ilcd-2010` |
| attributed_vector | all inventory rows | A_j由合法归属的已转换原始交换负荷、适用上游历史、期初WIP继承向量及群组服务组成。只有同一分子已含期末WIP或未用库存向量才扣；已净消耗不再扣库存。历史FG保留原向量/Qc；退回只冲回原交付一次并加真实新增F。X只减已在OTHER内同侧完全重复项。实物V_j另保留，不乘分配系数。 | converted raw row totals; cp_ledger_recovery; cp_ledger_gate; origin allocation evidence; F; X; OTHER | A_j; V_j | `jrc-ilcd-2010` |
| unit_result | all inventory rows | Q>0时唯一单位计算x_j=A_j/Q。v_j=V_j/Q另作实物伴随报告，不作为叠加归属交换。历史群组服务用原Qc替代Q，把同一次商追加一次，不能用发运H。参考输出本身恰为1千克。卡片及协议汇总引用本商，不再除一次。 | A_j; V_j; Q; Qc; cp_release; cp_ledger_recovery; cp_ledger_gate | x_j; v_j | `jrc-ilcd-2010` |
| packaging_balance |wire_purchase; tag_purchase; wire_service_purchase; tag_service_purchase; wire_external_received; tag_external_received; wire_shipped; tag_shipped; wire_external_out; tag_external_out; wire_production_waste; tag_production_waste; wire_service_waste; tag_service_waste; wire_n_recovery_<event_id>; tag_n_recovery_<event_id>; wire_n_gate_<event_id>; tag_n_gate_<event_id> |逐一种物件：期初空件+期初附着WIP+期初附着FG+期初周转件+P+N+ER=期末空件+期末附着WIP+期末附着FG+期末周转件+S+EO+W。P=不重叠P_recovery+P_service；ER外返接收；S随全部总发运H；EO对外返还；W真实废弃。I内部复用抵消，随Q配对附着包装也抵消。任何账项都不是新增OCC Q、再采购或自动共产品。 N为互不重叠的N_recovery+N_gate，即各物件按当前湿态实测的首次外部非采购接收，可为新件或曾在别处使用的物件；P仅计真实付费/捆绑采购一次，与N不重叠。ER须有同物件/批次真实此前外出及接收，I仍仅指内部复用。钢丝/纸牌N事件按真实阶段协议各自建立独立行/事件号及完整Amount。实物入场及适用继承向量各保留一次，不默认无历史、不再制造或给信用。保留湿态期初期末空件、附着WIP/FG及周转件库存，含收到后仍在期末的物件。OTHER/X仅可去除同侧已真实包含该物件质量且有据完全重复项；皮重观察、期末留存、反向流或仅有卡片均不能抵消真实入场。整份OCC与包装成分账为不可叠加视图且仅一个负荷所有者。 | cp_packaging_recovery; cp_packaging_gate; P; N; ER; I; S; EO; W; H; Q | 每种物件一个已核对账 | `jrc-ilcd-2010` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all UUID-bearing rows | 核验真实产品/废物/基本流类型、全部命名维度、同义词/备注、相关CAS、路线/形态/地区/环境、全部属性及精确参考属性/单位组链；通用身份不验证供方。全部原生限制保留在可消费行上下文。 | 完整direct原件；精确单位引用；供货状态及供方材料 |
| dq_complete | all inventory rows | 补全真实物料、公用工程、包装、废物及基本交换；有据才可条件不适用。不得藏入other/zero。辅助UUID/供方缺口保留具体名称；核心身份或真实终端/方法证据缺失阻断完整性。 | 逐阶段核查；合同；库存及去向核对；明确缺口账 |
| dq_sampling | finished_occ; received_occ | 真实接收规范采样、杂质及水分依据须代表该批，保留样本基准及不确定性；目测验收与定量分析区分。不从个案或旧牌号介绍抄统一限值/得率。 | 接收约定；随机样本及水分记录；校准秤/仪器 |
| dq_history | cp_ledger_recovery; cp_ledger_gate; attribution | 保留真实原单位及全部失败/Q0/空转/清洁时段、每个期初期末WIP交换向量及历史FG/Qc。给出分配敏感性、价值门/状态及来源向量缺口，不能据此宣称完整产品足迹。 | 原批账；来源链模型；已核对实物/负荷库存表 |
| dq_source | all sources | UN证明分类范围；JRC/PA证明作业而非普遍用量；CEPI为行业指南而非完整授权EN标准；ILCD仅在其条件下支持归因分配。同一出版物多提取仍是一个来源。 | 完整来源上下文及真实前景依据 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| vr_scope | finished_occ | 拒绝以新纸/纸浆、混合未分选产品、漂白化学浆纸或机械浆新闻纸替OCC；方法使用前核验产品状态、法律/接收门及全部限定。 | `un-cpc-39241`; `cepi-recovered-paper-quality` |
| vr_denominator | all inventory rows | 双语均用1千克首次放行Q和finished_occ。要求未预除原记录、合法A、单次unit_result A/Q、Q0负荷保留且不重复计算期末FG/发运/复验产量。历史服务保留原Qc并完整冲回退货。 | `jrc-ilcd-2010` |
| vr_balances | production; FG; combined; packaging |所有门独立闭合总实物质量、水、相关元素及每种包装完整物件账；内部Q与附着包装转移仅在合并门抵消。保留逐交换库存向量、失败作业及真实增量返工，不能由残差编多个物种/未知损失。 要求P/N/ER/I不重叠的依据及全部真实N入场事件行，含仍在期末库存的N。逐物件核查湿态质量、来源/群组/门/阶段/期间、完整Amount、继承向量及唯一负荷所有者；ER须有同物件真实此前外出/接收链接。拒绝残差N、将无外出溯源首次接收称ER、重复计付费/捆绑P、再采购/零历史假定及无据扣X。 | `jrc-ilcd-2010` |
| vr_sources | each material; utility; species | 逐项核验完整原生身份维度/精确单位、原件适用性及真实单供方接口。辅助UUID缺失明示，不得以不兼容UUID伪装。禁止叠加混合出口分区、任意物理/经济分配、自动回收信用或删历史纸材负荷；真实终端/来源方法未解决不得声称完整数据集。 | `jrc-paper-bref-2015`; `bramidan-b30-wide`; `jrc-ilcd-2010` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 作为接收兼容打包OCC供给输入造纸备料；真实下游运输与制浆分开 |
| allowed_use | 具有声明历史、真实接收牌号、输入状态、收集边界及实测前景的归因供料建模 |
| excluded_use | 自动覆盖全部39241；替代废物处理服务；避免原生纸信用；新纸板/纸浆/漂白纸/新闻纸/混合纸供给；EN合规认证 |
| required_metadata | 全部参考限定；收集/接收接口；原生/供方限制；Q群组及截止点；上游来源分配；逐项库存及包装账 |
| required_quality_disclosure | 实测与缺失值；采样不确定性；分配敏感性；来源年代/地区；辅助身份/供方缺口；未观察服务时段；任何不完整历史向量 |
| update_trigger | 来料牌号/收集流变化；处理/公用工程路线；接收限值；原生身份/供方状态；来源分配；采样；包装；库存/退回方法变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-39241 | official_guidance | United Nations Statistics Division. CPC Version 3.0, subclass 39241 and adjacent 39242/39243/39249; https://unstats.un.org/unsd/classifications/Econ/Detail/EN/2100/39241 | 分类形态及范围；不提供制造或LCA分配因子 |
| jrc-paper-bref-2015 | official_guidance | European Commission JRC. Best Available Techniques Reference Document for the Production of Pulp, Paper and Board (2015), §6.1.1 pp.550–551 (PDF588–589), adjacent §6.1.2; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | 收集料场、干式分选/打包与下游制浆区别；无公用工程或排放默认值 |
| pa-recovered-material-2005 | official_guidance | Pennsylvania DEP / R. W. Beck. Pennsylvania Recovered Material Composition Study (February 2005), Appendix A pp.A-1–A-3 (PDF56–58); https://files.dep.state.pa.us/waste/recycling/recyclingportalfiles/documents/rec_mat_comp.pdf | 历史美国设施的OCC分流、负分选及打包案例；不采用其无关容器线及数量 |
| cepi-recovered-paper-quality | handbook | CEPI. Paper for Recycling Quality Control Guidelines, §§1–6.4.2.3 and quality-control diagram (PDF2–9,12); https://www.cepi.org/wp-content/uploads/2022/02/PaperforRecyclingQuality-Control-GuidelinesWITHANNEX.pdf | 接收约定牌号/包况/水分/非期望物检查与条件验收；非统一阈值、法律意见或完整EN643标准 |
| bramidan-b30-wide | handbook | Bramidan. B30 Wide, product operation, full technical specifications and FAQ; publisher HTML snapshot 2026-10-26; https://www.bramidan.com/vertical-balers/b30-wide/ | 电动打包、钢丝/捆扎带选项、取包/储存及液压油/遮蔽条件；机型额定值与容量不作实际OCC消耗或统一包要求 |
| jrc-ilcd-2010 | official_guidance | European Commission JRC. ILCD Handbook General guide for LCA—Detailed guidance (March 2010), §7.9.3 pp.257–258 (PDF277–278), Annex14.4 pp.349–354 (PDF369–374), Figure33 and adjacent consequential distinction; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因拆分、逐交换决定性物理因果、剩余门价分配及回收历史/价值边界区别；无固定比例、截断或替代信用 |
