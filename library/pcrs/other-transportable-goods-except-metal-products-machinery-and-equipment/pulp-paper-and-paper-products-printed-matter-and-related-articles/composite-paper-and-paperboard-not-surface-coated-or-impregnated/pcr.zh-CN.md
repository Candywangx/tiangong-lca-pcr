---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.composite-paper-and-paperboard-not-surface-coated-or-impregnated
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 淀粉胶黏合的未涂布平层复合纸板

## 1. 范围与适用性

本方法的物理范围为外购已干燥、未涂布且未浸渍的平层纸或纸板层材，用水性淀粉胶进行层间黏合、压合、干燥/调湿、裁切及出厂整理的纸板。生产者原件证实多层纸材及淀粉胶路线和板状交付示例，但不证明任意纸板均未表面处理，也不提供转换厂能耗路线。实际适用必须有层结构、供应方表面状态、胶配方及厂门实物证据。本方法为原平层淀粉胶分支的技术综合，不声称某个实际工厂、胶配方、层数、定量或热源。纳入必要压合、实际干燥/调湿、平整及分切，至首次合格平板供应门。电驱及有真实证据的外购蒸汽间接供热分别计量；实际蒸汽、热电水耦合和凝结水须按本方法采集，不能因示例未提而置零。无现场制浆抄纸、燃烧供热或污水处理；实际存在者先完成对应单元及原子交换后方可声称完整。[wco-hs-2022-ch48; klug-es-adhesive; klug-es-board-td-2026]

多层湿法纸板在湿部将纤维层成形结合，不因有多个纸层成为本产品。瓦楞芯纸板、蜂窝芯、木质板、含布/金属/塑料增强层、沥青胶合、合成胶合、外层涂膜、颜料涂布及浸渍产品不在本范围。纸/纸层间淀粉胶不是外表面涂层。原纸固有填料或内部施胶须声明并随购入层材上游建模，不在此另加一遍。[ec-paper-bref-2015; paramelt-paper-board; solidus-board]

CPC 3.0官方完整说明列出32141，但没有另附技术注释；其条目与当前规范化叶一致。本方法要求内部黏合的平层纸材，排除起皱/压花/穿孔产品（32142）、无机物涂布产品（32143）、其他表面处理/浸渍产品（32149）、瓦楞板（32151）及成品容器（32153）。这些为产品边界核对，不证明某供方实际归类。[unsd-cpc3-notes-2025; wco-hs-2022-ch48]

独立转换是实际商业作业：KOHLSCHEIN描述库存纸/纸板卷及卷对片黏合，也接收客户提供材料。这支持从接收至成板的转换边界，但不识别其胶种，也不证明某牌号外表面未涂布。KLUG区分湿法伏合与胶黏合。Fedrigoni描述在纸机内完成淀粉复合的未涂布牌号；该相邻集成路线不能套用本外购干层材前景。因此应用本方法前，须同时证明实际供货/所有权、干态起点、表面声明及淀粉胶配方。[kohlschein-reel-lamination; klug-boards; fedrigoni-old-mill-2021]

仅采用BREF第7.1.10节裁切、包装及可能产尘的定性机制；其中纸厂能耗描述及边角料返回抄纸不是转换厂默认。第7.1.11.5节说明多层成形及白水循环，支持将湿法抄纸排除于本前景，不转移纸厂耗水、收率或排放因子。[ec-paper-bref-2015]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.composite-paper-and-paperboard-not-surface-coated-or-impregnated |
| classification_refs | CPC 3.0 32141。该限定范围的 narrower 映射已获接受，见 docs/adr/2026-11-22-accept-cpc-32141-starch-bonded-uncoated-flat-layer-paperboard.md。 |
| covered_products | 无增强层、淀粉胶平层黏合未涂布纸板 |
| excluded_products | 湿法多层形成、瓦楞、涂布、浸渍、非纸增强层及非淀粉胶体系 |
| representative_product | 未表面处理的淀粉胶平层板状纸材；示例属性不作默认配方 |
| production_route | 外购干燥层纸 → 淀粉胶层间黏合及压合 → 干燥/调湿及必要平整 → 最终分切/首次平板供应门；现场配置须采集 |
| market_state | 转换厂门合格板状成品，声明水分及包装；不含下游模切成盒 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供声明定量、厚度及黏合质量的平层纸板材料 |
| How much | 1 kg |
| How well | 记录层结构、材质、水分、厚度、定量及订单验收条件；无通用性能阈值 |
| How long or cycle | 一次转换生产及厂门交付；不主张通用使用寿命 |
| reference_flow_link | `board_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 淀粉胶黏合未涂布平层复合纸板成品 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 各层实际牌号、层数及纸/纸板状态；无涂层/浸渍/增强的证据；整胶成分、淀粉来源及湿/干基准；必要压合/干燥/平整/分切和首次平板供应门；实测厂门水分、净板质量/包装皮重及验收ID；厂址、时段、供电电压、真实热源、蒸汽压力/温度/凝水回收及供方基准；原料/在制/成品/包装库存向量；共输出/废物接收；订单验收 |

所有必需限定信息须在实际数据包中声明。1kg包含厂门实测水分，不等同于1kg绝干纤维；包装不进入分母。厚度及定量不单独替代实测净质量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考成品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q为同一时段在首次平板供应门新验收合格净板kg，实测毛重扣真实包装皮重，含声明水分。按验收ID及库存核对，只归一一次；历史成品回货/复验不造Q，期末新成品不重复加入已测产量。 |
| moisture_basis | 纸/胶/产品/废物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 逐流保留湿质量、实测固体/水分及挥发性适用性；禁止把湿胶质量等同于干胶或绝干纸质量。 |
| electric_conversion | 电力 | Energy `f6811440-ee37-11de-8a39-0800200c9a66` | MJ | 按量纲换算1kWh=3.6MJ；只转换实际电表电量，不据此推导热效率或蒸汽净交付热。 |
| water_volume | 自来水与水平衡 | Volume | m3 | 输入按实测m3；水平衡质量用实际密度及温度转换，不预设密度。 |
| pm_bins | 室外排出颗粒 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 三行对应不交叠粒级；仅以同一工况可比测试作累计量差值。不确定粒径保持待定，不采用默认比例。 |


## 5. 系统边界

### 完整数量与库存上下文

全部清单卡继承本完整上下文。保留各流原单位的毛实物交换向量V，与归属负荷向量A分开。先核原始记录身份、实际时段/范围、真实速率积分及量纲换算，再细分专属工序，并逐交换以各自物理原因解释剩余共同量；仅真正不可细分的残余才考虑其他关系。最后按正的新合格净板质量Q归一一次。分配不得改变毛质量、水、碳、库存或共同产出的实物数量。[eu-pef-multifunctionality-2021]

Q为层间黏合、必要压合、干燥/调湿、平整及最终分切后，在声明平板供应门首次验收的新板材；保留废品及每个验收ID。新合格期末成品已计入Q，不得再加到已测合格产量。交付须与期初末成品、外部回货和交接核对；此前已合格板的复验或回货不造新Q。本期交付旧成品继承其原负荷。原料/未用料、在制品及成品各批次保留每个流i的继承数量向量b_i，含此前材料、电、热、水及排放；带入真实期初向量、结转真实期末向量，并在实际完成阶段交接，不删除或重复分配。未知历史不得置零向量。

Q=0、失败批次、启停、待机、清洗及试车保留真实负荷；以记录充分的规则归入实际服务的生产时段/批次，不删除、不除零、不编产出。实测服务量Qc或实际工时H可描述另行声明的服务或归属驱动，不能代替新板生产Q。不规定机器质量、配方、收率、水分、价格或损失份额。

组成子账仅拆解供货整物，不新增交换。购入纸材含实际纤维/填料/施胶上游一次；购入整胶含淀粉、载体水及其他供货成分一次。废水整股湿质量、H2O、固体及COD各有量纲；整股外运仅链接一个实际相容处理方。不得把成分子账加到整股质量、重复制造，或制造回收、替代或能源信用。


### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购已干燥、未涂布/未浸渍的平层纸或纸板层材及供货状态整配方淀粉胶到达转换厂 |
| starting_condition_role | 前景接收边界，不意味着上游环境负荷为零 |
| product_classification_scope | 上述限定的32141子集；分类范围不能替代物理适用性 |
| recursive_input_rule | 购入相同类别纸板仅作供应方输入一次，不递归重复当前厂制造；使用已复合纸板芯须另核流身份和边界。 |
| upstream_dataset_requirement | 按每层牌号/来源链接适配制浆抄纸背景；购入胶含配方制备。运输端点及已有运输覆盖须核实，缺口单列实际运输服务行。 |
| disclosure | 声明各供应方截断点、背景数量定义、运输与包装覆盖及实际前景设施；不借用木材加工研究推导造纸配方。 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_layers | converter | 前景从纸材接收开始；供应方制浆、施胶、填料、干燥及其排放随层材背景记录一次，不在转换厂重复。 | wco-hs-2022-ch48; ec-paper-bref-2015 |
| boundary_operations | converter | 纳入上胶、压合、实际干燥/调湿及必要平整、裁切、收尘、清洗及实际厂门包装；无现场制浆回用设备时，边角料外送不得声称为内部损纸回用。 | ec-paper-bref-2015; klug-es-adhesive |
| boundary_variant | product | 有增强层、表面处理、合成胶、现场燃烧供热或现场水处理即超出此路线，须补全对应方法及原子行；生产者无排放宣称不能替代现场排放筛查。 | paramelt-paper-board; solidus-board; klug-es-adhesive |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| converter | 纸层黏合、调湿、裁切及包装 | required | 符合声明的平层纸/纸板及淀粉胶路线，电与实际蒸汽分列 | foreground | 1 kg reference flow |

该前景单元聚合实际同物在黏合/裁切/包装间的内部交接；各阶段保留独立计量与质量水碳实物图。内部交接两端必须同量，不作为第二成品输出重复归一化。附加材料、设施或运输存在时先增设逐流行；当前清单不保证任意工厂完整。

现场还须调查黏合／压合辊、输送带、裁切刀具及润滑油脂、清洁剂和其他实际维护材料的材质、供货配方、领退／更换／库存、损耗与废物接收，以及维护能耗／用水。凡实际正投入／外排逐项增加核验后的原子行；未知材质、频率或用量保持待调查，不发明整包维护流或默认更换周期，也不把未调查当零。

### 过程：纸层复合转换（`converter`）

#### 输入

##### 产品流

###### 外层纸材 (`outer_paper`)

记录一种实际供应牌号的干燥、未涂布且未浸渍外层纸。仅相同牌号可合计，不同牌号须拆为独立原子行。采集纤维、填料、内部施胶、水分及供货态背景基准，不设通用层重。

- 选定流: 干燥未涂布外层纸
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按cp_layers逐外层供方牌号称量收货湿kg，核期初、接收、未用退料、期末原料/在制/成品及真实损耗，按逐流继承库存账继承；归一前分离本牌号/层负荷，再按最后一次归一每参考流一次。面积记录须有同批真实定量和面积，不取目录值。 同参考流直接数量为q_i = A_i / Q；A_i为上述步骤后的本行归属量，Q为新合格净板kg。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_layers`
- 来源: `klug-es-adhesive`


数量方法上下文：`normalize_exchange`; `stock_vectors`；与第4、7、8节完整条款及所引采集协议共同适用。

###### 内层纸材 (`core_paper`)

记录一种实际内层纸牌号，与外层分开。两层结构仅在有结构证据时认定无此交换。区分纸与纸板，采集牌号、纤维/填料/施胶、水分及上游基准。

- 选定流: 干燥未涂布内层纸
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按cp_layers逐实际内层纸牌号采湿kg；无内层须结构证据。按逐流继承库存账核领退、原料/在制/成品向量和损耗，先分离真实内层负荷，再按最后一次归一每参考流一次。 同参考流直接数量为q_i = A_i / Q；A_i为上述步骤后的本行归属量，Q为新合格净板kg。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_layers`
- 来源: `klug-es-adhesive`


数量方法上下文：`normalize_exchange`; `stock_vectors`；与第4、7、8节完整条款及所引采集协议共同适用。

###### 外购干燥平层纸板层材 (`board_ply`)

记录一种实际干燥、未涂布且未浸渍平层纸板牌号。确认纤维/填料/施胶、水分、表面状态及供方kg基准。购入已复合芯板须另核流身份及继承制造边界。

- 选定流: 干燥未涂布平层纸板层材
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按cp_layers逐牌号采真实湿kg；面积须同批实测面积和定量换算。核原料/在制/成品和损耗的逐流继承库存账，先分离本层专属负荷，再按最后一次归一每参考流一次。 同参考流直接数量为q_i = A_i / Q；A_i为上述步骤后的本行归属量，Q为新合格净板kg。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_layers`


数量方法上下文：`normalize_exchange`; `stock_vectors`；与第4、7、8节完整条款及所引采集协议共同适用。

###### 外购淀粉胶 (`starch_adhesive`)

按整股外购水性淀粉胶配方计入一次，采集配方/SDS、淀粉来源、热处理、固体、H2O比例及湿配方参考质量。载体水与供货成分为组成子账，不新增交换。实际另加成分须独立原子卡；不含合成、PVAc、EVA或沥青胶。

- 选定流: 水性淀粉胶黏剂
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按cp_adhesive计量或积分实际供货湿整配方kg；体积须用该混合胶在声明温度的实测密度。核未用/原料/在制/成品/残胶向量，分离本胶批次后才按最后一次归一每参考流一次。固体、淀粉及载体水子账不另加投料。 同参考流直接数量为q_i = A_i / Q；A_i为上述步骤后的本行归属量，Q为新合格净板kg。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_adhesive`
- 来源: `klug-es-adhesive`; `klug-es-board-td-2026`


数量方法上下文：`normalize_exchange`；与第4、7、8节完整条款及所引采集协议共同适用。

###### 另加稀释及清洗水 (`tap_water`)

记录实际稀释及清洗的外供处理后自来水表量，不含胶载体水及内部循环。核实场址、时段、供应方处理/交付门及m3背景基准；实物水质量用实测密度和温度。

- 选定流: 处理后自来水
- 流属性/单位: Volume; 单位组 / m3
- 数量规则: 按cp_water对真实时段外购水体积流率积分或取校准水表差，单位m3；不重复供货胶载体水及内部循环。归一前分离真实稀释/清洗用水和继承库存负荷，按最后一次归一每参考流一次；实物水kg取实际水密度(T)。 同参考流直接数量为q_i = A_i / Q；A_i为上述步骤后的本行归属量，Q为新合格净板kg。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water`
- 来源: `paramelt-paper-board`


数量方法上下文：`normalize_exchange`；与第4、7、8节完整条款及所引采集协议共同适用。

###### 用户侧低压电力 (`electricity`)

记录转换厂电表处实际低压供电。驱动、压合、通风、裁切、包装及电干燥不重叠计量；保留地区/年份/电压/损耗及背景基准。热源须采集，不从产品示例推断。

- 选定流: 低压交流电
- 流属性/单位: Energy `f6811440-ee37-11de-8a39-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 按cp_energy取不重叠电表kWh差或真实功率随时间积分，含干燥、启停、待机和清洗。按实测kWh至MJ换算（3.6 MJ/kWh）转MJ；归一前细分真实驱动/作业范围、交接库存向量并仅归属真实共同残余，再按最后一次归一每参考流一次。 同参考流直接数量为q_i = A_i / Q；A_i为上述步骤后的本行归属量，Q为新合格净板kg。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_energy`
- 来源: `ec-paper-bref-2015`


数量方法上下文：`normalize_exchange`; `electricity_mj`；与第4、7、8节完整条款及所引采集协议共同适用。

###### 实际外购蒸汽交付的间接工艺热 (`steam_heat`)

仅记录实际外购间接供热蒸汽，采集供方技术、压力、温度、干度、焓基准、交付热及凝水路径。MJ能量、蒸汽kg与有效热分账；必须验证供方兼容与换算。其他热源须独立原子身份及完整单元。

- 选定流: 外购蒸汽工艺热
- 流属性/单位: Energy `f6811440-ee37-11de-8a39-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 按cp_steam积分真实蒸汽质量流率及匹配焓差，或核验热表MJ；在同门/时段/返凝口径下按同门蒸汽/凝水热账转换至供方原生热量基准。保留独立载体水kg，先细分干燥任务、库存及耦合热电水负荷，再按最后一次归一每参考流一次。 同参考流直接数量为q_i = A_i / Q；A_i为上述步骤后的本行归属量，Q为新合格净板kg。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_steam`


数量方法上下文：`normalize_exchange`; `steam_delivery`；与第4、7、8节完整条款及所引采集协议共同适用。

###### 普通未涂布包装纸 (`paper_wrap`)

记录一种实际普通未涂布且未浸渍包装纸牌号，与层材和净板质量分开。核实组成、水分及供方质量基准。实际托盘、扎带、薄膜须各有独立行；整包装与组件不得重复制造。

- 选定流: 普通未涂布包装纸
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按cp_pack采真实普通纸组件接收及湿kg，用完整首次实物接收账区分首次外部实物接收与采购/负荷所有权。核空包装/原料/在制/成品/可重复用品库存、外发、匹配回货及废物；真实包装负荷只归属一次，再按最后一次归一每参考流归一。 同参考流直接数量为q_i = A_i / Q；A_i为上述步骤后的本行归属量，Q为新合格净板kg。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`
- 来源: `ec-paper-bref-2015`


数量方法上下文：`normalize_exchange`; `packaging_receipts`；与第4、7、8节完整条款及所引采集协议共同适用。

#### 输出

##### 产品流

###### 淀粉胶黏合未涂布平层复合纸板成品 (`board_output`)

恰为声明厂门水分下新验收合格净板1kg，不含包装及废品。仅含平层纸/纸板及内部淀粉胶，不含瓦楞芯、增强层、外涂层或浸渍。

- 选定流: 淀粉胶黏合未涂布平层复合纸板成品
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 1 千克
- 数值来源模式: `fixed_value`
- 适用范围: `product_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `method_formula`
- 采集协议: `cp_mass`
- 来源: `wco-hs-2022-ch48`; `klug-es-adhesive`

###### 向供热方实际返回的蒸汽凝结水 (`condensate_return`)

记录跨供方接口实际返回的液态凝水。内部回流抵销；污染或废弃凝水须用真实废物身份及接收方。不设负蒸汽、避免用水或能源信用。

- 选定流: 返回供热方的液态蒸汽凝结水
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按cp_steam测真实返回kg或同股V乘实测密度(T)，核匹配供汽/返回ID、时段、库存及余热；保留毛V，不再制造水或负蒸汽。按真实供热任务及逐流继承库存账归属后，用最后一次归一每参考流一次。 同参考流直接数量为q_i = A_i / Q；A_i为上述步骤后的本行归属量，Q为新合格净板kg。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_steam`


数量方法上下文：`normalize_exchange`; `stock_vectors`；与第4、7、8节完整条款及所引采集协议共同适用。

##### 废物流

###### 未上胶纸材边角料外运 (`clean_trim`)

分别称量实际外运未上胶纸边角料，保留牌号、水分及接收方处理兼容性，不设默认回收比例或信用。

- 选定流: 未上胶纸边角料
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按cp_waste称量真实分离的未上胶边料外运湿kg，核库存/内部返回及实测水分，保留毛V和真实接收方。先定专属/共同归属及继承牌号负荷，再按最后一次归一每参考流一次；无回收信用。 同参考流直接数量为q_i = A_i / Q；A_i为上述步骤后的本行归属量，Q为新合格净板kg。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_waste`
- 来源: `ec-paper-bref-2015`


数量方法上下文：`normalize_exchange`；与第4、7、8节完整条款及所引采集协议共同适用。

###### 带淀粉胶纸板边角料外运 (`bonded_trim`)

记录实际外运含淀粉纸板边角料/废品，采集纸/淀粉/水分及接收方兼容。内部回料不是外运。废物与真实共产品按第7节证据判定。

- 选定流: 淀粉胶黏合纸板边角料
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按cp_waste称量真实带淀粉胶边料/废品外运湿kg；纸/淀粉/H2O及库存分别留子账，不重复加成分质量。保留毛V、继承向量和实际接收方，先裁定共产品/废物归属，再按最后一次归一每参考流一次。 同参考流直接数量为q_i = A_i / Q；A_i为上述步骤后的本行归属量，Q为新合格净板kg。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_waste`
- 来源: `ec-paper-bref-2015`


数量方法上下文：`normalize_exchange`；与第4、7、8节完整条款及所引采集协议共同适用。

###### 分离收集的废淀粉胶 (`adhesive_residue`)

单独记录实际外运整股液态水性废淀粉胶，与清洗废水分开。采集相态、配方、湿质量、固体/H2O、库存及接收方。凝胶/干残胶须另设具体原子身份，不预设危害或处理。

- 选定流: 液态废淀粉胶
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按cp_waste及整股湿态废液基准测真实液态残胶外运整股湿kg，或以体积积分和混合液实测密度(T,物态)转换；核库存并分列H2O/固体子账。保留毛V和真实接收方，先归属对应胶/清洗批次，再按最后一次归一每参考流一次。 同参考流直接数量为q_i = A_i / Q；A_i为上述步骤后的本行归属量，Q为新合格净板kg。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_waste`
- 来源: `klug-es-adhesive`


数量方法上下文：`normalize_exchange`; `exported_liquid_basis`；与第4、7、8节完整条款及所引采集协议共同适用。

###### 淀粉胶设备清洗废水 (`cleaning_effluent`)

记录外送处理的整股湿清洗废水。使用实测湿质量或实际混合液密度乘实测体积；H2O、固体及COD分别分析，不是额外整液交换。同一外运流不重复增加直接受纳水排放。

- 选定流: 淀粉胶设备清洗废水
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按cp_water及整股湿态废液基准测真实外送整股清洗液湿kg，或实测V乘同股密度(T,物态)；速率记录须按真实排放时段积分。H2O、固体、COD保留独立分析，核库存及唯一实际接收方。先按真实清洗原因归属，再按最后一次归一每参考流一次。 同参考流直接数量为q_i = A_i / Q；A_i为上述步骤后的本行归属量，Q为新合格净板kg。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water`
- 来源: `paramelt-paper-board`


数量方法上下文：`normalize_exchange`; `exported_liquid_basis`；与第4、7、8节完整条款及所引采集协议共同适用。

###### 收集的带淀粉纸材裁切粉尘 (`captured_dust`)

记录作为废物移出的纸/淀粉裁切粉尘，含原有填料/施胶、水分、库存及实际接收方。捕集粉尘与室外颗粒排放分开，不预设降解性、收集频次或处理。

- 选定流: 收集的纸与淀粉裁切粉尘
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按cp_waste称量真实清出集尘湿kg，核集尘期初末及内部返回，实测纸/淀粉/填料/水分组成。捕集与逸出PM分开且保留毛V；先分离实际裁切来源，再按最后一次归一每参考流一次。 同参考流直接数量为q_i = A_i / Q；A_i为上述步骤后的本行归属量，Q为新合格净板kg。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_waste`
- 来源: `ec-paper-bref-2015`


数量方法上下文：`normalize_exchange`；与第4、7、8节完整条款及所引采集协议共同适用。

##### 基本流

###### 向室外空气排出的PM2.5 (`pm25_air`)

记录捕集后实际排出的独占PM2.5粒级，保留测量定义、室外受纳介质及检出限不确定性，不设默认排放因子。

- 选定流: 排入室外空气的不大于2.5微米颗粒物
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按cp_air以相同T/P湿干条件，将真实匹配浓度乘气体体积流率随时间积分，加独立有证逸散量，取得室外空气互斥PM2.5 kg。保留毛V、未检出不确定性并按真实源归属，再按最后一次归一每参考流一次。 同参考流直接数量为q_i = A_i / Q；A_i为上述步骤后的本行归属量，Q为新合格净板kg。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_air`
- 来源: `ec-paper-bref-2015`


数量方法上下文：`normalize_exchange`；与第4、7、8节完整条款及所引采集协议共同适用。

###### 向空气排出的PM2.5至PM10间颗粒 (`pm25_10_air`)

记录独占的大于2.5至10微米粒级，仅可用同条件可比累计PM10减PM2.5；未知拆分保持未决。

- 选定流: 排入室外空气的大于2.5至10微米颗粒物
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按cp_air积分互斥分粒径释放量，或仅对匹配累计PM10/PM2.5记录用匹配互斥颗粒计算。先将真实浓度/流率/时间单位转kg，再作因果归属和库存向量记账；保留毛V，按最后一次归一每参考流一次。 同参考流直接数量为q_i = A_i / Q；A_i为上述步骤后的本行归属量，Q为新合格净板kg。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_air`
- 来源: `ec-paper-bref-2015`


数量方法上下文：`normalize_exchange`; `pm_exclusive`；与第4、7、8节完整条款及所引采集协议共同适用。

###### 向空气排出的大于PM10颗粒 (`pm_over10_air`)

记录独占的大于10微米粒级。仅在测试条件相同可比时用总颗粒减PM10，不将累计总颗粒另作一种排放。

- 选定流: 排入室外空气的大于10微米颗粒物
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 用cp_air匹配的大于10微米互斥释放测试或依匹配互斥颗粒计算作可比总颗粒减PM10，单位kg；不得再把总颗粒作另一物种相加。保留真实气体流率/时间积分、毛V、归属及不确定性，再按最后一次归一每参考流一次。 同参考流直接数量为q_i = A_i / Q；A_i为上述步骤后的本行归属量，Q为新合格净板kg。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_air`
- 来源: `ec-paper-bref-2015`


数量方法上下文：`normalize_exchange`; `pm_exclusive`；与第4、7、8节完整条款及所引采集协议共同适用。

###### 向室外空气蒸发的水 (`water_vapour`)

按配对进出口湿度及干空气流率，或仅有一个未知量的完整水平衡，确定过程来源正H2O排放。不含环境背景湿度，保留蒸汽/凝水与库存水；凝结不是负水蒸气排放。

- 选定流: 排入室外空气的水蒸气
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按cp_water用独立实测匹配进出空气湿度及干空气质量流率积分，或仅本项未知的完整约束水平衡，求实际过程向室外空气释放的正H2O kg。纳入真实蒸汽/凝水及全部材料/库存水；不得同时反解多个未知。先归属真实干燥/调湿负荷，再按最后一次归一每参考流一次。 同参考流直接数量为q_i = A_i / Q；A_i为上述步骤后的本行归属量，Q为新合格净板kg。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water`
- 来源: `paramelt-paper-board`


数量方法上下文：`normalize_exchange`；与第4、7、8节完整条款及所引采集协议共同适用。

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | converter | 先调查细分或明确系统扩展；扩展须有真实共功能、代表性边界及扩展系统整体报告。先分离专属纸材牌号、胶批次、表计及生产批次，再分配。逐剩余交换解释物理因果：纸按真实牌号/层领用，胶按真实整配方投料，热按实测干燥任务，电按真实驱动/运行状态，水按真实清洗/稀释作业。不得以板质量或一个全厂比例自动分配所有交换。 | eu-pef-multifunctionality-2021 |
| allocation_physical | physical ledger | 毛V及全部实物产出/内部链接/库存独立于归属A保留。原料、在制品和成品逐流继承批次向量只交接一次。目标Q仅含新合格板；无关产出、回货、期初成品交付和可重复用包装不得扩大Q。 | eu-pef-multifunctionality-2021 |
| allocation_residual | genuinely inseparable residual | 记录细分/扩展及适当物理关系均不能采用的原因后，才对真正剩余共同量论证经济关系。采用全部真实共功能同门、同状态、同期数量及实际价值，披露负值/处理成本及敏感性；不编价格或通用份额。 | eu-pef-multifunctionality-2021 |
| allocation_trim | clean_trim; bonded_trim; captured_dust | 以真实规格、接收用途、废物状态及市场证据区分废物和可售共产品；仅收款不足以裁定。真共产品须有独立相容Product输出及实物量，归一前完成专属/共同负荷归属。废物保持废物且仅接一个实际处理方；内部返回互抵并继承历史。不自动给避免纸制造、能源回收或替代信用。 | ec-paper-bref-2015; eu-pef-multifunctionality-2021 |

## 8. 前景数据采集、计算与质量规则

逐包装组件区分采购P、首次外部非采购接收N和同一此前外发实物的归还ER。N包括单独借入、租入、受托及随货物件，无论上游负荷由谁承担；供方承担负荷不能删除实物接收。保留来源、接收ID/时间、保管、原负荷向量及供方，随后有据归属一次。ER须能匹配同一物件/批次及此前外发记录；未知历史不作ER或零负荷。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | converter | 参考产出 | 称量/表计/实验室/供方记录 | 毛/皮/净质量；批次；验收；牌号；水分；合格产量；交付；期初末库存 | 校准称量及代表性厂门水分测试；合格产量与交付及库存对账 | kg; mass fraction | 每批次及匹配阶段时段 | 声明完整生产时段，含启停、废品及库存变化 | 声明转换线及可归属共享单元 | 每参考流 | 校准、样品链、SOP、供方定义及完整原始记录 |
| cp_layers | converter | 各纸材牌号 | 称量/表计/实验室/供方记录 | 供应方；牌号；层位置/数；水分；收/领/退质量；库存；涂层/浸渍声明；运输端点 | 逐牌号称量/库存及供应方声明；纸材上游制造与转换厂分开 | kg; mass fraction | 每批次及匹配阶段时段 | 声明完整生产时段，含启停、废品及库存变化 | 声明转换线及可归属共享单元 | 每参考流 | 校准、样品链、SOP、供方定义及完整原始记录 |
| cp_adhesive | converter | 淀粉胶 | 称量/表计/实验室/供方记录 | 供应方/SDS及适用CAS；淀粉来源及改性；全部配方成分；供货形态；湿质量；淀粉／其他实测固形物／H2O分数；稀释；残胶；储存变化；背景参考基准 | 批次投料/库存及经适用性核验的固含方法；不重复供方载体水及胶制造 | kg; mass fraction | 每批次及匹配阶段时段 | 声明完整生产时段，含启停、废品及库存变化 | 声明转换线及可归属共享单元 | 每参考流 | 校准、样品链、SOP、供方定义及完整原始记录 |
| cp_energy | converter | electricity | 校准表计/供方原始记录 | 逐阶段功率/真实时间/kWh；供方电压/地域/年/组合/交付/损失；电干燥与蒸汽实际配置；重叠表计；耦合公用工程；启停/待机/清洗/库存 | 按真实运行积分，不重叠计量；区分供方热电水联产和转换厂消耗，不重复已覆盖的发电/锅炉燃料水排放 | kWh; MJ | 每时段/批次 | 全时段含失败/待机/清洗 | 所选线及实际共享设施 | 每参考流 | 校准、供方基准及原账 |
| cp_pack | converter | 包装纸组件 | 实物接收/领退/库存记录 | 具体原子材料/形态/类型/方向；原测量单位及kg换算；receiptID/time/origin；procurement/burden owner/custody/cohort/prior vector/provider；买入P及首次非购N；匹配同件此前外发ER；空/原料/WIP/FG/可重复用品期初末及grossS/EO/W | 实物接收与采购/负荷所有权分开；整批组件无独立发票仍为P；真实借租/委托/非购随货按N进入实际接收侧；内部领用/复用互抵，不把未知历史置零 | kg | 每事件及期末 | 全时段含库存及回货 | 实际接收侧及包装门 | 每参考流 | 接收/托管/历史/provider原证据 |
| cp_waste | converter | 每项废物外运 | 称量/表计/实验室/供方记录 | 流；质量；水分/固形物；淀粉／填料／施胶污染；液态／凝胶／半固态／干态；H2O及其他配方分数；接收方；处理；库存；内部回用；收尘 | 逐废物外运称量及组成测试；接收单；集尘库存平衡 | kg | 每批次及匹配阶段时段 | 声明完整生产时段，含启停、废品及库存变化 | 声明转换线及可归属共享单元 | 每参考流 | 校准、样品链、SOP、供方定义及完整原始记录 |
| cp_air | converter | 各室外颗粒粒级 | 称量/表计/实验室/供方记录 | 源；空气动力学粒径；浓度；采样气体体积T/P湿干；时间；控制；室外介质；捕集；空白；检出限；不确定性 | 经现场认可的排气及逸散分粒径采样；匹配浓度/体积流量/时段积分；无排放须有筛查证据 | kg; concentration; gas volume | 每批次及匹配阶段时段 | 声明完整生产时段，含启停、废品及库存变化 | 声明转换线及可归属共享单元 | 每参考流 | 校准、样品链、SOP、供方定义及完整原始记录 |
| cp_water | converter | 水及清洗废水 | 称量/表计/实验室/供方记录 | 购入m3；密度/T；胶/纸/产品/废物水分；清洗废水整股体积／湿质量／混合密度及温度、H2O分数／固形物；接收方；回收凝水；湿度；水库存 | 校准水表、湿干组成及实测密度；匹配实物水平衡，购入胶载体水只记一次 | m3; kg; mass fraction | 每批次及匹配阶段时段 | 声明完整生产时段，含启停、废品及库存变化 | 声明转换线及可归属共享单元 | 每参考流 | 校准、样品链、SOP、供方定义及完整原始记录 |
| cp_steam | converter | 蒸汽热/载体水及凝水接口 | 热表/蒸汽表/供应方原始记录 | 真实热源/锅炉或CHP；供汽和凝水ID；质量流率/时间；P/T/干度；进出焓及基准；管损；凝水kg/密度/温度/去向；热表；供方原生单位；耦合热/电/水及库存 | 校准表计、真实时段积分及同接口焓账；供方原生热基准须核实，不把kg、MJ或不同热量口径等同 | kg; MJ; time | 每供热时段及生产批次 | 全时段含启停待机/清洗 | 实际转换线及供热交付门 | 每参考流 | 表计校准、供方账单/热源图、焓计算及返凝接收记录 |
| cp_stock | converter | 每流库存继承及负荷归属 | 批次/库存/验收/分配记录 | 各原料/未用料/WIP/FG期初末量及逐流向量；完成阶段；首次验收ID；交付/回货；失败/启停/待机/清洗；共输出；专属细分及逐交换物理因果；真残余同期同门价值 | 逐批次跟踪物理量与既有负荷向量，分开毛V及归属A；核新Q且不重计新期末成品或回货 | 每流原单位; kg | 每事件及期末对账 | 全生产/库存时段 | 所选板材供应门及关联共享单元 | 每参考流 | 验收/库存原账、历史向量及分配理由 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_exchange | 所有非参考行 | 先完成原单位/真实速率积分、同范围转换、stock_vectors及逐流专属/共同归属，再取q_i = A_i / Q一次；A_i为本卡原生单位的目标新板归属量，Q为同期间首次合格净板kg。毛V及共同实物产出独立保留。 | cp_mass; cp_layers; cp_adhesive; cp_energy; cp_pack; cp_waste; cp_air; cp_water; cp_steam; cp_stock | 每参考流行量 |  |
| electricity_mj | electricity | A_MJ = 3.6 * A_kWh; 3.6来自已核实能量单位组，按电表供货点转换。 | cp_energy | MJ per reference flow |  |
| dry_water_components | 纸/胶/产品/废物 | m_dry = m_wet * s; m_H2O = m_wet * w_H2O；s为经适用性核验的实测干固体分数，w_H2O为独立确认的H2O分数；只有证明非固体部分全为水时才用1-s。非水挥发物／溶剂及其他配方成分分别记录，不由烘干失重默认为水。 | cp_layers; cp_adhesive; cp_mass; cp_waste; cp_water | 实物干物质及水，不改湿态参考量 |  |
| physical_balances | converter | 分别对干固形物、水及碳建立投入 = 产品 + 外运废物 + 环境排放 + 库存变化；内部链接两端同量相消。纯水投入按实测V与该水密度换算；混合废液整股湿质量=V*实测混合液密度，其水账只取湿质量*w_H2O。记录碳成分/生物来源，不默认含碳率或CO2排放。 | cp_layers; cp_adhesive; cp_mass; cp_water; cp_waste; cp_air | 未分配实物账及误差 |  |
| pm_exclusive | 颗粒物行 | PM2.5-10 = 同工况PM10 - PM2.5; >10 = 可比总颗粒 - PM10；仅在定义/工况/检出限可比时使用，否则待测。负差值须调查而不截为零。 | cp_air | 互斥颗粒kg per reference flow | ec-paper-bref-2015 |
| exported_liquid_basis | 液态残胶／外送清洗废水 | 原生湿态Mass/kg：实测整股湿质量或实测V*该混合液密度(T,物态)；同股H2O=湿质量*w_H2O，配方固体／污染指标另列实物组成账不重复加总。按同期间Q归一一次，无现场处理或重复直接水体排放。非液态残胶须另核验身份及原子行。 | cp_waste; cp_water; cp_mass | 每参考流湿态kg及独立H2O账 |  |
| stock_vectors | 所有清单行 | 逐流i：本期新完成生产负荷向量 = 本期真实活动向量 + 转入原料/WIP既有向量 - 结转原料/未用料/WIP向量；所有外部退货/转移/报废按实际阶段另核，不重复减去已计净投料。新完成合格成品向量留在Q内，随后在本期交付及新期末FG之间分存；期初FG交付/回货沿用原向量，不造Q。只对真实共同残余分配一次。 | cp_stock; cp_mass; cp_layers; cp_adhesive | 逐流归属A及库存向量；毛V独立 | eu-pef-multifunctionality-2021 |
| packaging_receipts | paper_wrap | 全物理账：期初S0 + P + 首次非购N + 有同件此前外发凭据的ER = 期末S1 + 实际外发EO + 废物W；所有空/原料/WIP/FG/可复用品均入账，内部grossS领用/复用两端互抵。P无独立发票仍有效，N须记录具体材料/形态/方向/原测量/接收ID与时间/来源/owner/custody/cohort/priorvector/provider。未知历史不置零；整件及组件不重复制造；本期归属与未来结转分开。 | cp_pack; cp_stock | 全接收实物账与一次provider负荷 |  |
| steam_delivery | steam_heat; condensate_return | 真实蒸汽kg=质量流率随时间积分；交付热MJ按相同基准的进出焓及真实凝水/放散/管损核算。分别保留供方实际热能数量、可用热与载体水kg；供方不同基准须有可核转换，不默认等同或潜热系数。热电水联产以真实供方共同负荷和逐交换物理关系核验，不重复供方燃料/水/电/排放，不凭凝水回流造能源信用。 | cp_steam; cp_energy; cp_water; cp_stock | 原生热量归属与独立水/能量实物账 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| identity | all exchanges | 核验名称、CAS（适用时）、路线、分类、介质、属性和单位；身份相容不等于背景数量相容；未决保持空UUID。 | 供应方原始规格及直接流/属性/单位记录 |
| period_scope | collection | 记录实际地点和完整时段、层牌号、胶供货形态及线路；历史单厂示例不能作为通用配方或能耗。 | cp_mass; cp_layers; cp_adhesive; cp_energy |
| uncertainty | measurement | 保留校准、代表性、检出限、物料及水碳平衡残差、不确定性；缺测不等于零，供应方VOC-free不证明所有阶段零排放。 | cp_air; cp_water; cp_waste |
| coverage | 实际路线 | 逐项调查并补全真实包装、运输、维护耗材/润滑/清洁剂及废物、公用工程。本方法不默认现场锅炉/水处理；实际存在须相容单元。独立区分真实物种/介质/水/热/物态和总PM、COD、NOx或元素指标；指标不冒充独立物种，同一残差不反解多个未知。保留实际生物CO2，不按GHG口径从LCI删除。 | cp_energy; cp_steam; cp_pack; cp_water; site process diagram |

## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_scope | product | 检查平层/胶/表面/厂门状态及实际路线。任一未知需审查；不得由分类或solid-board名称推定。 | wco-hs-2022-ch48; klug-es-adhesive; solidus-board |
| validate_reference | reference | 恰有一个board_output作为1kg参考产品输出；身份必须有可核查的物理限定，不能借邻近产品UUID。 |  |
| validate_balances | collection | 核所有Amount的原单位、真实速率积分、转换范围、逐流细分及共同归属、原料/WIP/FG继承向量和最后一次A/Q。独立审查毛V干物质/水/碳账、库存、真实共同产出、零Q负荷及包装首次外部接收；新期末FG已在Q内，回货复验不造Q。不得以通过有限计量检查代替实际数据完整性。 | eu-pef-multifunctionality-2021 |
| validate_air | emissions | 三个颗粒粒级不得与累计PM10或总颗粒重复合计；捕集粉尘与排出空气分开。零量须筛查证据，未知排放或背景基准不得报完整通过。 | ec-paper-bref-2015 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | 后续纸制品/包装转换模型的声明厂门板材输入 |
| allowed_use | 仅真实符合本物理范围且证据/清单完整的数据集 |
| excluded_use | 湿法多层纸板、瓦楞或涂布/浸渍材料；未知身份及未知数量基准的数据包 |
| required_metadata | 参考净质量、水分、层结构、胶组成、厂门状态、供应方背景及公用工程定义、实际时段和地点、库存逐流继承及首次平板供应门 |
| required_quality_disclosure | 缺测、未决身份/背景基准、平衡残差、排放覆盖、分配和不确定性 |
| update_trigger | 层材/胶/表面状态、工艺/能源/水处理、供应方背景或品质发生变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考资料 | 适用范围 |
| --- | --- | --- | --- |
| wco-hs-2022-ch48 | official_guidance | WCO HS Nomenclature 2022, Chapter 48; https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/1048_2022e.pdf | 第48.07/48.08/48.10项：平层黏合、瓦楞及涂布的区分；不作为CPC映射接受或排放证据。 |
| ec-paper-bref-2015 | official_guidance | European Commission JRC, Production of Pulp, Paper and Board BREF, 2015; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | 第7.1.10节（印刷p.670/PDFp.708）：裁切粉尘、整理及包装机制；第7.1.11.5节（p.677/PDFp.715）：湿法多层纸板界限。只将干式裁切机制用于转换厂，不移植造纸用水、能耗、回用或排放因子。 |
| klug-es-adhesive | handbook | KLUG-CONSERVATION, ES products, publisher page with 2024 notice; https://www.klug-conservation.com/es-products | ES胶与平层多层黏合段：热处理淀粉、水溶性胶及多层产品个案；不用VOC零值、配方、寿命或施胶量默认值。 |
| klug-es-board-td-2026 | handbook | KLUG Conservation board 017 ES natural white multiple ply technical data sheet, 2026 notice; https://download.klug-conservation.de/Technische_Datenblaetter/Karton/Museumskarton/017-ES-naturweiss/en/TD-Conservation-board-017-ES-natural-white-multiple-ply-thicknesses-1-0-1-5-2-0-2-5mm.pdf | PDFp.1材料特点及现货板状尺寸：漂白纤维素及马铃薯淀粉胶个案；其厚度、组成、性能数字均不作为通用配方/范围，不推定外表无处理或现场能源路线。 |
| paramelt-paper-board | handbook | Paramelt, Paper and board converting, publisher page; https://www.paramelt.com/packaging/paper-board-converting-adhesives/ | 水性胶及Board lamination段：纸板黏合可用不同胶及覆膜，要求具体配方和表面裁定；非单厂定量。 |
| solidus-board | handbook | Solidus, Solid board sheets and reels; https://solidus.com/product-type/solid-board-sheets-and-reels/page/2/ | Composition of solid board段及Foodline说明：再生芯/PE及PET覆膜是相反范围实例，名称solid board不证明未涂布；不采用其规格作数量默认值。 |
| eu-pef-multifunctionality-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5; https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | PDFp.63–64：细分/扩展、物理关系及其他关系层级；仅分配方法，无固定份额、不声称完整PEF合规。 |

| unsd-cpc3-notes-2025 | official_guidance | UNSD, CPC Ver. 3.0 Explanatory Notes, 30 June 2025, p.147; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅支持官方类别与邻界排除，不提供配方、能耗路线或映射接受决定。 |
| kohlschein-reel-lamination | handbook | KOHLSCHEIN, Reel-to-sheet lamination; https://www.kohlschein.de/en/services/lamination/reel-to-sheet-lamination/ | 独立转换及客户供材，不提供淀粉、表面状态或数值默认。 |
| klug-boards | handbook | KLUG-CONSERVATION, Boards; https://www.klug-conservation.com/boards | 湿法伏合与胶黏合的区别；品名及用途不证明表面状态。 |
| fedrigoni-old-mill-2021 | handbook | Fedrigoni, OLD MILL ECO 40 BIANCO, February 2021, p.1; https://specialpapers.fedrigoni.com/wp-content/uploads/2021/09/OLD-MILL-ECO-40-BIANCO-1-1.pdf | 相邻未涂布纸机内淀粉复合路线，排除于本转换前景，不采用配方或定量默认。 |
