---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.hand-made-paper-and-paperboard
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 手工抄造、压榨及阁楼干燥的棉布裁剪料纸

## 1. 范围与适用性

本方法覆盖制造厂门口用于绘画和水彩的未印刷、逐张手工抄造棉布裁剪料纸。原料为已分拣且预裁剪到合适尺寸的洁净棉布服装裁剪料，不含混纺、油墨、涂层或弹性纤维。使用手持抄纸框及边框成张，继以羊毛造纸毡伏纸、液压压榨、阁楼干燥、明胶槽表面施胶及再干燥。允许电驱打浆与压榨并必须计量。规定的公用工程配置为外购低压电力及自来水，明胶加热和辅助干燥热均为电热，残余废水外送处理。

Khadi 位于卡纳塔克的生产者说明支持棉布裁剪料、Hollander、手持框、毛毡、液压压榨及阁楼干燥和明胶的顺序，未披露其内部施胶配方。有供应商原件支持的酮烯二聚体乳液是须独立声明的内部施胶选项，不代表该厂实际配方。现场必须记录实际配方、水分和性能。本方法不提供单厂配方、产率、能耗、排放因子或全行业范围。

排除连续长网或圆网／模造纸机纸幅（即使以传统纸销售）、竹／洛克塔／麻／亚麻或木浆原料、厂内漂白或染色产品、干式切碎及产尘预处理、层合、矿物涂布纸、加工笔记本及包装纸板。燃料燃烧或蒸汽加热干燥、厂内生物污水处理须经单独审查的清单扩展，不得静默套用本电热及外部处理路线。明胶表面施胶不意味着矿物涂层或印刷成品。手工身份从不证明零电力、零外购热量或零环境排放。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.hand-made-paper-and-paperboard |
| classification_refs | CPC 3.0 32122；narrower；范围及接受裁定以 `classifications/mappings/cpc-3.0-to-pcr.yaml` 及其引用的 ADR 为准 |
| covered_products | 纯棉布裁剪料、手工成张、液压压榨、阁楼干燥及明胶表面施胶的未印刷纸；采用酮烯二聚体内部施胶时须声明 |
| excluded_products | 连续纸机或圆网／模造纸机纸；其他纤维原料；厂内漂白或染色；层合品；包装纸板；加工制品；未经审查扩展的燃烧、蒸汽加热或厂内生物处理路线 |
| representative_product | 经调湿验收、声明定量、尺寸、纹理及明胶施胶状态的棉布裁剪料纸张 |
| production_route | 预裁剪棉布接收 → 浸湿及电驱 Hollander 打浆 → 手持框及边框逐张抄造 → 毛毡伏纸及液压压榨 → 阁楼干燥 → 电热明胶槽施胶 → 阁楼再干燥及调湿 → 验收及可选纸包装；内部水和纤维回收、外部残余物处理 |
| market_state | 厂门口按声明水分调湿的净验收成品纸张；包装单独列清单 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 用于所声明绘画或水彩用途的验收逐张手工棉布裁剪料纸 |
| How much | 1 kg |
| How well | 声明纸张尺寸、定量、厚度、表面纹理、棉纤维纯度、施胶配方、水分及批次验收试验；不得无据声称档案级或无酸性能 |
| How long or cycle | 一次厂门交付生产周期；不预设艺术品寿命或与纸机产品等效的服务 |
| reference_flow_link | `handmade_paper_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 手工纸及纸板 `7f14ce45-f456-4f95-991d-e4693db18679` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 棉布裁剪料来源及纯度；实际水分湿基质量分数及调湿；尺寸及定量；验收试验及纹理；手持框路线；液压压榨及干燥配置；内部施胶品牌、配方、固含率及pH；明胶粉末纯度及动物来源；场址、地域及报告期；供水；电力电压及组合；废水接收方；包装；纤维及水回收 |

在前景数据包中声明这些限定信息。广义产品UUID包含本子集且无相反路线限定；UUID身份不提供现场棉纤维配方、水分基准或背景数据集。一千克是包含实际残余水及留存施胶物的交付净质量，不是一千克绝干纤维、包装或在制湿纸。单凭质量参考不能证明不同产品绘画服务等效。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用 cp_output 以经校准的秤称量调湿验收成品纸，排除包装、不合格品及在制库存。所有行按同一验收净质量归一化。 |
| `wet_dry_basis` | cotton_input; gelatin_input; sizing_emulsion_input; handmade_paper_output; sludge_output; cotton_reject_output; spentfelt_output | 质量 | kg | 分别保留收到状态或湿质量与干质量；用有记录且适用的恒重干燥方法测定代表性水分或固含量，保留平行样、温度时间及挥发损失偏差。不预设标准水分。 |
| `electricity_basis` | electricity_input | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表千瓦时，用 1 kWh = 3.6 MJ 换算。电热槽不作为第二份外购热交换，其阶段分表及有效热诊断单独保留。 |
| `water_basis` | water_input; wastewater_output; evaporation_output | 按行指定的质量或体积 | 按行指定的 kg 或 m3 | 仅用有记录的密度和温度换算体积，区分新鲜取水、内部循环、最终废水、留存水及蒸发。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已分拣、预裁剪的洁净棉布服装裁剪料、制成施胶原料及公用工程到达造纸作坊；供应数据须包含上游分拣和裁剪。 |
| starting_condition_role | 手工造纸门到门；供应方预处理及运输、外部处理在聚合前景单元之外链接。 |
| product_classification_scope | 手工纸及纸板 CPC 32122 的棉纸张子集，不宣称覆盖整个分类叶节点。 |
| recursive_input_rule | 内部不合格纸及回收棉纤维返回打浆，计量为内部回路，不产生新的上游输入或避免原生纤维信用。外购手工纸或外来废纸不属于本棉布裁剪料路线。 |
| upstream_dataset_requirement | 匹配棉布裁剪料收集、预处理及供应方分配、交付电水、配方施胶剂、明胶、更换毛毡、包装和实际外部废物处理。声明运输段、质量及距离，不重复添加已嵌入的运输。 |
| disclosure | 场址、报告期、一体化工序、批次和水分、具体供应物、阶段分表、库存变化、返工及纤维水回流、废水去向、截断估计和背景替代。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_hand_route` | hand_papermaking | 纳入湿原料准备、逐张抄造、伏纸、压榨、两次干燥、明胶槽准备及加热、验收及厂门包装；一个聚合前景过程内部保留独立阶段记录。 | khadi-cotton-route |
| `boundary_utilities` | hand_papermaking | 纳入电机、液压泵、通风、辅助干燥、施胶热、清洗及可归属储存能耗。核实现场电热配置，不因手工抄造或阁楼干燥推定零能耗。 | eu-pp-bref-2015; khadi-cotton-route |
| `boundary_water_recovery` | hand_papermaking | 纳入纤维捕集和白水循环记录、过滤固体、未回用废物及最终外送废水。实际回收效率须测量，不套用工业纸机回收数值。 | eu-pp-bref-2015 |
| `boundary_route_extension` | inventory completeness | 已知制冷剂泄漏、额外包装、清洗化学品或直接排放须有各自物种或材料交换及相容身份计量证据，未披露量不得当作零。燃烧、生物处理或直接排水须先扩充来源特定清单，再应用本方法。 | eu-pp-bref-2015 |
| `boundary_actual_consumables` | inventory completeness | 核实实际压榨机型号、液压工作液及润滑规格、使用中/储存库存、补加、更换、回收和泄漏，不凭液压标签推断矿物油或消耗。检查预裁剪棉料搬运、干纸搬运/整饰及通风的实际棉/羊毛绒尘或施胶纸颗粒，记录实际回用两端，独立表征干捕集残余物及最终室外排放。每项确认物料、废工作液、清洗剂、捕集残余或排放须有独立采集的原子身份和数量，不发生也须证据；不以湿纤维污泥或纸机粉尘因子替代。 | khadi-cotton-route; eu-pp-bref-2015 |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `hand_papermaking` | 棉纤维手工成张制造、回收及整饰 | `required` | 所有覆盖批次 | 阶段独立计量的聚合前景制造单元 | 每 1 kg 参考流 |

聚合单元避免同一纸张在施胶或包装前后重复成为成品输出。分别保留原料 → 浆槽 → 压榨湿纸 → 初次干纸 → 施胶湿纸 → 再干燥验收纸的阶段平衡。阶段传递是两端质量及水分相等的实物量，不是额外参考产品输出。白水及纤维回流按事件和干固体计量，同时保留期初及期末库存；回流不得成为新接收量或避免生产信用。

### 过程：棉纤维手工成张制造、回收及整饰（`hand_papermaking`）

#### 输入

##### 产品流

###### 棉布裁剪料纤维原料（`cotton_input`）

仅采用已分拣、预裁剪的洁净棉布服装裁剪料，不含合成混纺、涂层、印刷油墨或弹性纤维。此广义碎布身份包含该子集，不得用于原生棉花或棉短绒。称量实际消耗的收到状态质量并取样测水分，另保留干棉质量；核实供应商预处理和上游负荷分配。 核实实际交付预处理的二次材料由该产品身份表示，披露供方准备、法律/产品与废物状态及分配；实际废物入厂转移须有自身适用废物身份和边界审查。废料分类或购买本身均不证明零上游负荷。

- 选定流：碎布、废绳、绳索、缆及旧的以纺织材料制成的绳索、缆制品 `d7e63c9a-9ebe-4a2a-b2f3-486bd5958a13`
- 流属性/单位：质量 / kg
- 数量规则：同一报告期采集的实物数量除以验收净成品千克数；cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：khadi-cotton-route

###### 外购自来水（`water_input`）

计量浸泡、打浆、浆槽补水、毛毡清洗、设备清洗及施胶稀释的新鲜供水。采用有记录的现场密度和温度把实测体积换为质量，不套用数据库次级系数。内部循环不计入新鲜投入；乳液自带水已包含在该产品质量中。链接实际当地供水背景。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 / kg
- 数量规则：同一报告期采集的实物数量除以验收净成品千克数；cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：eu-pp-bref-2015

###### 低压电网电力（`electricity_input`）

计量用户侧低于1千伏的用电，包括电驱 Hollander、泵、液压压榨动力单元、通风、电热明胶槽、辅助电热干燥或调湿以及可归属的储存与清洗用电。用3.6将千瓦时换为兆焦；保留数据库属性名不意味着电力是燃料。保留阶段分表量，每份电量仅求和一次，链接地域、时间和电压相容的电网背景。 原始供给地域为CN：链接后台前核对实际作坊/供应方地域、年份、电网组合、电压及交付损失，不自动确定中国或全球通用供电。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 / MJ
- 数量规则：同一报告期采集的实物数量除以验收净成品千克数；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：khadi-cotton-route; eu-pp-bref-2015

###### 酮烯二聚体内部施胶乳液（`sizing_emulsion_input`）

计量在打浆末段加入的一种外购酮烯二聚体施胶乳液。声明品牌、现行配方、固含率、pH、载水率及储存条件。供应商说明仅建立一种可选手工造纸方案，不证明 Khadi 配方或通用用量。宣称pH或背景相容前，须厘清中性说明与所链接酸性 Hercon SDS 的冲突。AKD组分身份及其合成/乳化元数据均不能确定实际供货混合物、完整组成或乳液交付参考质量，UUID留空；不预设存在淀粉、明矾、染料或填料。

- 选定流：酮烯二聚体内部施胶乳液
- 流属性/单位：质量 / kg 供应状态乳液
- 数量规则：同一报告期采集的实物数量除以验收净成品千克数；cp_additives。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_additives`
- 来源：chp-sizing-directions-2014; solenis-hercon-sds-2018

###### 明胶表面施胶（`gelatin_input`）

仅将选定实物粉末身份用于经浓缩、干燥及磨粉、实际供应方确认纯度大于99.5%的明胶，CAS9000-70-8。称量新加入电热水槽的粉末，记录动物来源、残余水分、槽液库存、泄漏、废液及留存干明胶。不得把湿施胶槽液质量当作粉末消耗，也不导入数据库配方。实际供应组成及粉末形态兼容性仍须核实。

- 选定流：明胶 `aa9b81c7-64ab-40a2-9419-50fedc25a2c7`
- 流属性/单位：质量 / kg
- 数量规则：同一报告期采集的实物数量除以验收净成品千克数；cp_additives。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_additives`
- 来源：khadi-cotton-route

###### 羊毛造纸伏纸毡（`felt_input`）

按有记录的实际服务周期计量制成羊毛造纸伏纸毡。广义制成毛毡实物产品身份无相反材料或应用路线，可包含此限定子集；须核实实际羊毛比例、成毡结构、尺寸、等级、重复使用/清洗史及供应方兼容性。它不确定床毯、原毛、合成真空袋透气毡或已匹配毛毡生产后台。保留干毡、水及使用中/储存库存和实际采购、更换、退役事件。完整实物厂界及库存账与按真实有据服务归属于报告期的环境消耗分开；不假定寿命、每张纸质量因子或重复更换负荷。

- 选定流：毛毡 `144717eb-3301-402a-89c8-3ba5a969425a`
- 流属性/单位：质量 / kg
- 数量规则：同一报告期采集的实物数量除以验收净成品千克数；cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：khadi-cotton-route

###### 未涂布纸包装（`wrapping_input`）

若出厂纸张用纸包裹，称量消耗的一种未涂布包装纸等级，含有记录的库存变化和边角损失。此广义未涂布纸记录包含包装纸且无相反路线限定，须提供实际等级及供应商背景。包装质量不得进入参考产品净纸质量。若散张交付，记录其不存在；不得由此推定其他包装质量为零。 实际存在的弃包装纸边角及添加剂容器须独立称量、识别废物记录，不与棉弃料、污泥或废毡合并。

- 选定流：未涂布印刷书写纸和包装纸 `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- 流属性/单位：质量 / kg
- 数量规则：同一报告期采集的实物数量除以验收净成品千克数；cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：eu-pp-bref-2015

#### 输出

##### 产品流

###### 验收成品棉纤维手工纸（`handmade_paper_output`）

1 千克经两次干燥、调湿和验收后的净成品纸，排除包装、不合格品和在制品。记录批次实际水分、定量、张数及面积、施胶状态。此广义手工纸及纸板身份通过这些限定缩小，不提供棉纤维配方或性能默认值。

- 选定流：手工纸及纸板 `7f14ce45-f456-4f95-991d-e4693db18679`
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_output`
- 来源：khadi-cotton-route

##### 废物流

###### 外送处理的棉布裁剪料造纸废水（`wastewater_output`）

计量内部纤维回收后实际跨厂界的水性工艺废水，包括浆槽排水、清洗水及稀释废施胶槽液，但仅限实际独立表征并获接收方接受的这一转移流。保留事件体积、校准交付总质量或体积乘实测事件密度、采样点、pH、温度、COD/TOC、TSS、BOD及施胶剂特定分析物；识别下水道或槽车及实际外部处理。选定广义工业液态废物质量/kg身份仅定位这一液态实物流，不规定处置或处理路线。不假定1000kg/m3、不把施胶商品SDS密度套于废水，也不把废水总千克当作水千克：实物平衡中独立确定水、悬浮及溶解固体和添加剂。按体积分析的污染负荷与按参考量归一化的废液总质量分开。所链接SDS不授权商品排入下水道；须有实际接收方对组成、pH及负荷的接受证据。浓缩或未使用施胶剂、泄漏废物及其他独立收集废液须分别表征为独立交换，不自动混入本行。不采用锰渣、硅或回收瓦楞芯纸特定废水替代，不暗示向淡水基本排放或已匹配处理后台。

- 选定流：废液 `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- 流属性/单位：质量 / kg
- 数量规则：同一报告期采集的实物数量除以验收净成品千克数；cp_wastewater。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_wastewater`
- 来源：eu-pp-bref-2015; solenis-hercon-sds-2018

###### 弃置的非混纺棉布裁剪料（`cotton_reject_output`）

称量从验收原料中分出的实际纯棉分拣弃料，记录水分、物理拒收原因、污染及具体接收方。广义工业固体废物身份仅限此独立收集且不回用的棉布裁剪料流。保留湿质量、干棉及水、库存变化、实际废物或产品状态、危害及接收方/供应方接受条件；此身份不规定处置/回收路线或已匹配处理负荷。未知合成混纺、黄染及成衣制造特定记录仍不适合替代所声明流。非棉污染物和单独收集的干细纤维绒尘按实际独立交换分开，不与粗裁剪料或湿污泥合并。

- 选定流：固体废物 `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- 流属性/单位：质量 / kg
- 数量规则：同一报告期采集的实物数量除以验收净成品千克数；cp_wastes。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_wastes`
- 来源：khadi-cotton-route

###### 脱水棉纤维造纸污泥（`sludge_output`）

称量实际外送且不回用的脱水过滤/沉降棉纤维固体，取样测干固体、水及实际施胶/添加剂污染，并取得具体接收方接受证据。广义工业固体废物身份仅适用于物理纤维回收产生并独立收集的固态或脱水半固态流，不作为生物处理污泥或液态废水。分别追踪湿/干质量、组成、危害、库存及接收/处理兼容性；其他废物行采用同UUID不合并流、不规定处理，也不证明后台匹配。实际回浆槽的纤维仍为内部流，水处理药剂特定污泥不替代本流。

- 选定流：固体废物 `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- 流属性/单位：质量 / kg
- 数量规则：同一报告期采集的实物数量除以验收净成品千克数；cp_wastes。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_wastes`
- 来源：eu-pp-bref-2015

###### 废羊毛造纸毡（`spentfelt_output`）

称量实际退役羊毛造纸毡，披露干毡材、水、棉纤维、施胶残留及具体接收方。广义工业固体废物身份仅定位此独立收集的废毡，不假定处置/回收路线或处理负荷。将使用中/库存及退役记录与更换和服务归属对应，不把留水当作新羊毛，也不与其他同UUID行共享一份实物废物质量。不得替代未知合成纺织物或羊毛纺纱废物；核实实际纤维组成、污染、废物状态、危害及接收方/供应方接受条件。

- 选定流：固体废物 `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- 流属性/单位：质量 / kg
- 数量规则：同一报告期采集的实物数量除以验收净成品千克数；cp_wastes。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_wastes`
- 来源：khadi-cotton-route

##### 基本流

###### 蒸发到室外空气的水（`evaporation_output`）

由阶段水分和质量测量及完整水平衡计算阁楼干燥、明胶施胶后再干燥及加热槽的实际蒸发水。在最终室外释放点采用CAS 7732-18-5、空气排放未特指介质，不采用室内空气或农业蒸腾身份。不得把全部取水量替代蒸发量；未闭合平衡须调查，不强制把残差当作正排放。 记录调湿湿度及温度；有证据的空气水分吸收或凝结按独立实际边界转移另审身份及量测，不把净吸收当作负水蒸气输出或强制水平衡残差。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：同一报告期采集的实物数量除以验收净成品千克数；cp_balance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_balance`
- 来源：eu-pp-bref-2015

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_single_product` | hand_papermaking | 规定单元只有一种验收产品，其观测负荷归属于该输出；不得预设废物或内部回流为可售联产品。若产生可售联产品，须采集各自实物输出并开展分配审查后再用本单产品模型。 | eu-pp-bref-2015 |
| `allocation_physical_ledgers` | all physical balances | 未分配的质量、水和碳以及配对阶段传递，与环境负荷分配账分别保存。不得把实物联产品或内部回流乘分配份额。不自动给棉布裁剪料、纤维回收、弃料或废水负信用。 | eu-pp-bref-2015 |
| `allocation_shared_utilities` | electricity and water | 优先批次或阶段分表和批次隔离。共享电机或槽液须记录可归属实测功率时间、用水事件及所服务产出；论证剩余共享服务分摊并保留总服务核对。供应方棉纺织生产分配是另一个须披露的上游决策。 | eu-pp-bref-2015 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

对覆盖常规批次、失败纸张、返工、清洗及季节性干燥条件的代表性报告期采集所有适用事件，声明确切日期及生产覆盖率，不用历史单厂案例替代当前现场数据。分母为同一报告期、同一路线的验收调湿净成品千克总数。对应可归属期间交换时，实测期界在制品转移及库存变化另留实物及归属账；在制库存不是验收成品纸，不改变该输出分母。尽管使用单一聚合单元，仍保留阶段数据。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_output` | hand_papermaking | 验收参考输出 | 称量及验收 | 批次；调湿净千克；皮重；水分；尺寸；面积；张数；定量；验收；期初期末在制品 | 在再干燥及声明的调湿后用校准秤称量；代表性水分平行样采用有记录的恒重干燥方法；核对批次验收及报告期库存变化 | kg; fraction; m2; g/m2 | 每批 | 整个声明报告期 | 同场址、路线及等级 | 每 1 kg 参考流 | 校准；干燥方法；验收及库存记录 |
| `cp_materials` | hand_papermaking | 棉布裁剪料、毛毡及包装纸 | 接收及消耗 | 供应方；等级；来源；纤维组成；质量；水分；库存；退回；毛毡服务周期；包装状态；使用中/储存库存；实际压榨机、工作液及润滑规格；维护补加/更换/回收/泄漏事件 | 称量接收、实际消耗和剩余库存；供应方组成证据；按有记录的服务期归属毛毡更换；不代用原生棉花或原毛；核实实际维护物料交换，确认时分别建立具名原子记录，不假定液压油化学组成或正消耗 | kg; fraction | 每批及每次更换 | 整个报告期及毛毡服务周期 | 同路线及服务产出 | 每 1 kg 参考流 | 秤核查；发票；供应组成；毛毡服务及库存账 |
| `cp_additives` | hand_papermaking | 配方施胶剂及明胶 | 加料及槽液记录 | 品牌；批次；现行SDS；配方；pH；固含量；载水率；粉末纯度；动物来源；接收；加料；槽液期初期末；留存；废槽液；温度；储存；实际AKD及反应产物物种分析；独立证据支持的反应程度及不确定度 | 分别称量配方乳液及新增明胶粉末；测实际固含量及纸中留存施胶物；核对批次槽液及稀释记录。SDS危险组分表不是完整配方。核实现行供应配方，不套旧建议剂量。实际采用AKD时，在记录的储存及造纸条件下独立确定反应物种及反应程度，区分载体H2O、未反应AKD及实际产物。未知反应项保留为缺口，不预设为零或完全水解 [yan-akd-hydrolysis-2019] | kg; fraction; pH; temperature | 每次加料及槽液弃置 | 整个声明报告期 | 同批次及槽液 | 每 1 kg 参考流 | 供应批次证明；秤；固含量试验；库存核对；配方冲突披露 |
| `cp_energy` | hand_papermaking | 电力及有效热诊断 | 电表及运行日志 | 电压；电网身份；表计期初期末；阶段千瓦时；电机、压榨及泵时序；槽液及辅助加热；槽温；蒸发；功率时间归属 | 读取校准用户侧电表及阶段分表；记录两次干燥及明胶加热用电并核实配置。有效热用于核对实测电输入，不是第二项交换 | kWh; MJ; temperature | 每批及表计周期 | 整个报告期含季节性干燥 | 作坊及可归属辅助设施 | 每 1 kg 参考流 | 表计核查；账单；阶段求和；实测运行日志；不只用铭牌功率默认量 |
| `cp_water` | hand_papermaking | 新鲜供水 | 供水表及批次用水 | 新鲜体积；密度；温度；阶段补水；清洗及稀释；供应；库存；循环 | 读取新鲜供水表，按需测密度；所有用水事件与内部回流、外购产品自带水分别记录 | m3; kg; temperature | 每批及每次清洗 | 整个声明报告期 | 同作坊及供水 | 每 1 kg 参考流 | 表计校准；实测密度；水平衡 |
| `cp_wastewater` | hand_papermaking | 外部处理废水 | 出口计量、实验室及交接 | 体积；密度；采样点；流量加权样；方法及版本；pH；温度；COD或TOC；替换时的相关性；TSS；BOD；添加剂特定指标；接收方；处理；废液总千克；实测密度kg/m3及温度；水分数；悬浮/溶解固体及添加剂 | 逐次校准称量外送液体总质量，或按事件体积乘实测事件密度换算；废液总质量、实际水分数及悬浮/溶解物分别保留，仍保留事件m3供负荷分析，不默认密度或纯水。计量每次最终废水事件，以有代表性的流量比例混合样及认可或等效且有记录的实验室方法分析，保留检出限、空白及平行样；保留接收许可及处理模型。筛滤物理纤维回收在场内，生物处理在场外 | m3; mg/L; kg; pH | 每次排放及代表性运行监测 | 整个报告期含清洗及施胶排水 | 最终外部交接点 | 每 1 kg 参考流 | 出口表计；实验室QA；检出限；交接及处理记录；BREF BAT10仅作方法指导，不预设现场法定频率 |
| `cp_wastes` | hand_papermaking | 棉弃料、未回用污泥及废毛毡 | 称量及处置 | 独立废物身份；湿质量；干率；棉、施胶或羊毛含量；报告期；接收方；处理；实际独立干绒尘捕集；退役维护工作液及泄漏 | 分别称量各隔离废物；代表性干固体及污染取样；处置记录；排除确实回到浆槽的纤维；实际确认的干捕集或维护废物独立识别，不混入既有污泥、废毡或弃棉 | kg; fraction | 每次处置 | 整个声明报告期 | 同边界 | 每 1 kg 参考流 | 秤；取样方法；交接及废物属性核查 |
| `cp_balance` | hand_papermaking | 阶段传递、蒸发及实物平衡 | 阶段称量及水分试验 | 配对传递ID；湿干质量；水及施胶物；两次干燥；蒸发；新鲜水；最终废水；污泥含水；干棉；实测碳；水固体碳期初期末库存；实际绒尘捕集及最终室外释放观察；独立证据支持的化学生成及消耗H2O；实际反应产物及反应程度证据 | 测代表性阶段湿干质量；每份内部传递两端数量相同；在厂界核对净水、干固体及碳；结合测量不确定度调查残差；不预设纤维素含碳率。总质量及元素守恒与分子H2O物种平衡、干组分转化分别核对；化学生成及消耗H2O须独立于闭合残差确定，并保留方法、适用化学反应、反应程度、不确定度及支持记录 [yan-akd-hydrolysis-2019] | kg; fraction | 每批并按报告期核对 | 整个声明报告期 | 聚合单元及所有内部阶段 | 每 1 kg 参考流 | 配对传递账；水分、固体及碳方法；不确定度；核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_period` | all inventory rows | 每个非参考交换的归一化数量 = 报告期可归属实物交换总量 / 同期验收净成品纸千克。保留实物总量及单位，只有 handmade_paper_output 固定为1千克。 | 报告期交换总量；cp_output；适用行协议 | 每 1 kg 参考流的交换数量 | eu-pp-bref-2015 |
| `dry_mass` | cotton_input; handmade_paper_output; cotton_reject_output; sludge_output; spentfelt_output | 干固体千克 = 湿千克 × 实测干固体率；水千克 = 湿千克减干固体千克。留存添加剂固体不等于棉纤维，分别报告；此诊断不替代交付湿参考量。 | 湿质量；实测干固体率；添加剂留存 | 实物干固体及水账 | eu-pp-bref-2015 |
| `physical_water_balance` | evaporation_output | 蒸发千克 = 输入分子H2O千克加化学生成H2O千克减化学消耗H2O千克减输出液态水分量及留存水千克减现场分子H2O库存变化千克。简化的输入减输出、留存及库存变化式，仅在相关H2O反应不存在或有独立证据证明在声明的测量不确定度内可忽略时适用。AKD水解消耗H2O；实际采用可选AKD分支时须有独立反应程度证据，不预设施胶AKD的水解比例、速率或完全转化。纳入外购原料自带水、验收纸水分、每种废物实测水分及外送废水水（废液总千克乘实测水分数，不是液体总质量）；内部循环在两端一次抵消。用阶段干燥及槽液测量确认，报告未决残差，不凭残差指定未测蒸发。 | cp_water; cp_additives; cp_output; cp_wastewater; cp_wastes; cp_balance | 实测及核对蒸发千克与闭合残差 | eu-pp-bref-2015; yan-akd-hydrolysis-2019 |
| `treatment_load` | wastewater_output | 污染物千克 = 各匹配排水时段出口立方米 × 流量加权 mg/L × 0.001 的和。COD保持需氧当量，TSS保持试验定义固体，TOC保持碳；COD不是化学物种，不能与TSS相加或换为CO2。负荷表征处理输入，不是直接河流排放。 | 实测各时段排水体积；匹配实验室结果 | 带不确定度的处理输入负荷 | eu-pp-bref-2015 |
| `physical_carbon_balance` | all inventory rows | 核对实测输入碳、验收纸和各废物或废水输出碳及库存变化；据供应方或分析证据区分棉及明胶的生物碳与施胶物、包装的来源份额。不凭流名推断含碳率。若实际出现生物CO2，保留介质正确、有来源测量的独立LCI交换，不得因温室气体统计惯例删除。将有独立证据的AKD反应产物追踪到实际留存、外送或排放去向；任何实际CO2须另有数量、物种及介质、碳来源证据。单凭水解不能确定排放CO2的数量或来源。 | 实测组成；供应方碳来源；cp_balance | 实物碳账及残差 | eu-pp-bref-2015 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | all rows | 匹配实际材料或物种、路线、交付状态、介质、参考属性及单位；空UUID保留为明确缺口，不以近似校正流替代。身份成功不是完整背景数据集。 | 供应或接收方规格；直读身份；manifest未决字段 |
| `quality_coverage` | site records | 同期覆盖验收及失败批次、两次干燥、施胶、清洗及库存变化；可行时量化遗漏并保留不确定度，不借用单厂平均量。 | cp_output及所有适用协议 |
| `quality_balances` | manufacturing and recovery | 水、干固体及碳在实测不确定度下核对，不强制闭合。内部纤维回收及白水体积保留为实物账，无信用或外购输入重复计算。 | cp_balance及废物处理账 |
| `quality_source_limits` | methodology and additives | BREF针对工业制浆造纸厂，仅迁移适用的定性核算及监测原则。Khadi只是一家生产者，Carriage House说明和SDS是供应方特定历史证据，前景数据包须独立确立现行pH及配方。 | 原件定位及实际供应证明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference product | 恰好一项验收成品输出链接参考流；须满足棉纤维、手持框路线、水分、验收及全部限定信息。阶段湿干纸为内部传递，不重复成为产品输出。 | khadi-cotton-route |
| `validation_denominator` | all inventory rows | 参考量、采集、聚合和所有归一化行均采用1千克调湿验收净成品纸；未经明确一致换算不得除以干纤维、抄纸框面积、湿纸张数、带包装毛质量或不合格产出。 | eu-pp-bref-2015 |
| `validation_energy` | electricity_input | 电机、压榨及加热记录必须完整，阁楼或手工标签不能支持零值，实物热诊断不得重复外购电力。其他公用工程配置须经审查的原子流扩展。 | eu-pp-bref-2015 |
| `validation_water` | water, wastewater, recovery and solids | 考虑库存核对新鲜、留存、外排、蒸发的分子H2O、独立证据支持的化学生成及消耗H2O和干组分转化；总质量或元素闭合不证明H2O物种闭合。仅在H2O反应不存在或有独立证据证明在声明不确定度内可忽略时接受简化蒸发式；未知反应项不得按零、蒸发或拟合残差通过。实际采用AKD时核查反应程度及物种证据，不预设完全水解、速率或CO2数量及来源。使用匹配浓度和体积，区分外部处理输入和直接排放，保留外部处理负荷。 | eu-pp-bref-2015; yan-akd-hydrolysis-2019 |
| `validation_additives` | size and gelatin | 确认供应配方、湿干数量基准、纯度、槽液库存及留存施胶物；无酸声明前须解决现行pH与配方，所链接旧SDS及通用AKD组分不能确立此乳液背景相容性。 | chp-sizing-directions-2014; solenis-hercon-sds-2018 |
| `validation_completeness` | data package | 各交换必须为原子流并保留未决身份或数量缺口，无虚构UUID、默认单厂量或静默零值。实际排放若含颗粒物，使用互斥粒径区间，不求和嵌套总量；不论温室气体惯例，保留实际生物CO2。新增排放须有介质、物种及单位证据。核查实际维护工作液交换、干纤维捕集及室外释放；排除干切不证明它们不存在，不借用纸机粉尘量。 | eu-pp-bref-2015 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 场址特定的前景手工造纸生产过程 |
| downstream_use | secondary_dataset；background_dataset仅在声明相容性和不确定度评估后使用 |
| allowed_use | 有实际前景证据的规定洁净棉布裁剪料、手持框、液压压榨、电热及阁楼干燥、外部废水处理路线 |
| excluded_use | 推广至整个CPC 32122；纸机或圆网／模造纸机纸；其他纤维、制浆、燃烧或处理路线；无条件无酸及档案级声明；仅凭质量作功能比较 |
| required_metadata | 参考限定信息；准确场址及报告期；阶段记录；库存；棉原料上游处理及分配；公用工程；供应添加剂；运输；外部处理；背景身份；归一化；截断 |
| required_quality_disclosure | 记录覆盖率、不确定度及实物平衡残差；未决UUID及配方或背景缺口；供应方原件限制；方法扩展 |
| update_trigger | 原料或配方、能耗或干燥、公用工程供应、废水处理、产品质量及水分基准、供应方或背景改变 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| khadi-cotton-route | handbook | Khadi Papers，About the paper，South India节：https://www.khadi.com/about-khadi-papers/about-the-paper/ | 一家生产者的棉布服装裁剪料、Hollander、手持框、伏纸、液压压榨、阁楼干燥及明胶顺序；不移用配方、场址能耗或行业数量 |
| eu-pp-bref-2015 | official_guidance | 欧盟委员会JRC，Best Available Techniques Reference Document for the Production of Pulp, Paper and Board（2015），§§7.1.1–7.1.2印刷页660–662、§7.3.4页728–729、BAT10页788：https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | 工业纸机区别及适用的定性能耗、水、纤维回收和监测原则；不预设纸机性能值、手工纸剂量或法定频率 |
| chp-sizing-directions-2014 | handbook | Carriage House Paper，Directions for sizing，2014年3月修订，页1：https://pdfs.carriagehousepaper.com/CarriageHousePaper-Sizing.pdf | 酮烯二聚体乳液内部施胶选项及加料阶段；历史用量、保存期和浓度不作为默认值 |
| solenis-hercon-sds-2018 | handbook | Solenis Hercon 100 Sizing Agent SDS R0702621，v1.5，2018年5月22日修订，§§3、9、12–13：https://pdfs.carriagehousepaper.com/Hercon.100-SIZINGAGENT-000000000000414870United-States-English(1).pdf | 供应方链接的混合物身份限制及pH反证；危险组分表不是完整配方，SDS处置指导不确立废水零影响 |
| yan-akd-hydrolysis-2019 | literature | Yan, N., Wan, X.-F., Hu, H.-C. and Chai, X.-S.（2019），Kinetic modelling of alkyl ketene dimer hydrolysis during the storage and papermaking process，Can. J. Chem. Eng. 97:2097–2101，DOI 10.1002/cjce.23440，出版者摘要：https://onlinelibrary.wiley.com/doi/10.1002/cjce.23440 | 稀释水性AKD在储存及造纸条件下可水解的一手证据，支持考虑化学耗水，不提供作坊特定反应程度、配方、动力学常数或排放量。仅采用摘要，不采用完整动力学模型 |
