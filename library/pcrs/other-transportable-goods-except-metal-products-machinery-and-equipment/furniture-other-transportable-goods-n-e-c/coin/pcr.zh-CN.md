---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.coin
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 单金属铜镍合金流通硬币

## 1. 范围与适用性

本 PCR 覆盖由真实必要币坯处理及压印制成、终止于首次质量放行的全新均质单金属铜镍流通硬币。前景始于整份外供币坯，已完成合金制备/熔铸/轧制/冲片及前处理由相容供方一次承接。后续真实计数/包装/储存/搬运/发运及放行后作业纳入原批群服务账。这是 CPC 38250 的窄产品/制造子范围，非所有货币制品规则。

排除未压印币坯/圆片、原合金/贵金属条块、双金属/复合层/包镀/彩绘/涂层币、贵金属/精制/收藏产品、奖章/代币/首饰、货币价值账、流通使用寿命及仅购成币再包装。教育 PDF、铸币机构现行描述及独立美英语境构成透明技术综合，非同一当代工厂/SKU/订单实测。其区分外购币坯、卷材制备及特殊精制/包镀分支，不强加名义合金百分比、单枚重量、几何、工艺参数、配方、成品率、寿命或验收数值。

来源：un-cpc3-2025; ram-five-cents; ram-coin-making-2015; ram-about-coins-2015; ram-minting-process; usmint-coin-production-2021; royalmint-blank-bank。相同质量不证明货币功能、质量、磨损或寿命等效。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.coin |
| classification_refs | CPC 3.0 38250；narrower；当前接受关系以`classifications/mappings/cpc-3.0-to-pcr.yaml`及`docs/adr/cpc3-additional34-20261029-38250.md`为准；须满足完整方法范围与排除项，不表示整类覆盖或科学/翻译批准 |
| covered_products | 完整均质未包镀单金属铜镍流通硬币 |
| excluded_products | 未压印坯/原合金; 双金属/复合层/包镀/涂层币; 贵金属/精制/收藏产品; 奖章/代币/首饰; 仅成币再包装; 流通使用/货币账 |
| representative_product | 单金属铜镍合金流通硬币 |
| production_route | 整份外供币坯 → 真实剩余前处理 → 压印/质量分选测试 → 首放；后续原批群服务另账 |
| market_state | 首次质量放行的完整净硬币，真实合金/表面/规格及包装边界已声明 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供原批群首次质量放行完整铜镍硬币的制造清单及另账实际服务 |
| How much | 1 kg |
| How well | 制造商/场址/报告期; 声明单一均质单金属铜镍配置及真实合金含量; 未包镀/无复合层/非双金属表面状态; 真实币坯供方及已完成上游工序; 真实退火/清洗/整边/润滑/压印/测试顺序; 真实规格验收与净质量校准/皮重; 首放批群 Q_c 及观测服务期 H; 完整原料/WIP/非 WIP 负荷向量和已放行 FG 毛量/退回账; 整份制剂组成及厂内配制边界; 实际能源/电网/热载体状态及供方约定; 每包装池六腿及完整湿库存; 实际物种/相态/媒体及独立元素闭合; 资产/模具服务和真实新旧维修件/充液; 全部失败/未获准/启停/闲置/清理/Q 零作业; 细分/因果/残余共同门证据及不确定性 |
| How long or cycle | 一原首放批群 c 及真实观测服务期 H，不默认流通寿命 |
| reference_flow_link | `finished_coin` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 铸币 `e686bde0-1244-4040-b821-d8c912ff799d` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 制造商/场址/报告期; 声明单一均质单金属铜镍配置及真实合金含量; 未包镀/无复合层/非双金属表面状态; 真实币坯供方及已完成上游工序; 真实退火/清洗/整边/润滑/压印/测试顺序; 真实规格验收与净质量校准/皮重; 首放批群 Q_c 及观测服务期 H; 完整原料/WIP/非 WIP 负荷向量和已放行 FG 毛量/退回账; 整份制剂组成及厂内配制边界; 实际能源/电网/热载体状态及供方约定; 每包装池六腿及完整湿库存; 实际物种/相态/媒体及独立元素闭合; 资产/模具服务和真实新旧维修件/充液; 全部失败/未获准/启停/闲置/清理/Q 零作业; 细分/因果/残余共同门证据及不确定性 |

原生 Product 为铸币、工厂生产混合的已制造成品，参考属性为质量，未固定合金、CAS、几何、面额、供货地区或工艺参数。孤立备注“383 乐器”属于分类/注释瑕疵，须披露，不据此将实体认作乐器。仅用于 primary 正面支持的、本方法限定的完整压印单金属铜镍流通硬币；非币坯、金属圆片、原合金、奖章、代币、首饰或货币账目。家族名称不授权包镀、复合层、双金属、贵金属、精制币或涂层变体。

在实际元数据、过程说明、参考流备注、产品描述或等效字段声明每项必需限定。Q_c 为观测批群 kg，参考数量为 1 kg。原生质量为参考，件数、名义货币或次级属性转换均不覆盖它。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | finished_coin | 质量 | kg | 用 cp_release 校准净称量新增首次放行完整币质量 Q_c；排除包材、游离水、失败/样品；期末已放行 FG 已属 Q_c。 |
| row_native_units | all inventory rows | 各行真实原生广延属性 | kg; MJ; m3; Item(s) | 所有卡同参考基准，各分子保持真实原生单位；不将 Mass/kg 套给能量/体积/件数。协议只采未除 raw；唯一计算 single_quotient 一次除 Q，卡及汇总仅引用。 |
| mass_count_bridge | finished_coin | 质量; 物品数量 | kg; Item(s) | 如需件数转换，M 为同配置、合金/表面/含水及验收范围下实测净质量/实数件数，保留校准/皮重、抽样范围和不确定性；不默认单枚 kg，不从几何/次级质量推密度。Number of items→Item(s) 与 item 等价因子 1，不等于任何 kg。 |
| species_state | all physical exchanges | 各真实物种/相态属性 | kg; MJ; m3 | 金属含量、总元素、COD/VOC/PM 与真实分子/颗粒/离子分开；水相/反应证据独立。密度必须该物质真实状态独立量测，累计体积不乘时间。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已制均质未包镀铜镍整份供货币坯，已完成上游状态逐项声明 |
| starting_condition_role | 一次承接上游负荷的制造原料，非买成币包装 |
| product_classification_scope | CPC 38250 中铜镍单金属流通币子范围 |
| recursive_input_rule | 相容币坯供方一次；内部同产品/回料交接及向量匹配抵消；不默认现场回炉或二次采购 |
| upstream_dataset_requirement | 完整合金/币坯工序及各真实物料/能源/工具/资产服务/普通废物处理供方，边界/状态相容并只归属一次 |
| disclosure | 制造商/场址/报告期; 声明单一均质单金属铜镍配置及真实合金含量; 未包镀/无复合层/非双金属表面状态; 真实币坯供方及已完成上游工序; 真实退火/清洗/整边/润滑/压印/测试顺序; 真实规格验收与净质量校准/皮重; 首放批群 Q_c 及观测服务期 H; 完整原料/WIP/非 WIP 负荷向量和已放行 FG 毛量/退回账; 整份制剂组成及厂内配制边界; 实际能源/电网/热载体状态及供方约定; 每包装池六腿及完整湿库存; 实际物种/相态/媒体及独立元素闭合; 资产/模具服务和真实新旧维修件/充液; 全部失败/未获准/启停/闲置/清理/Q 零作业; 细分/因果/残余共同门证据及不确定性 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_route | p_mint | 起点为一次承接已完成上游制造的整份外供铜镍币坯。记录接收/检验、仅真实剩余退火/淬冷、清洗/干燥、整边、施用、压印、质量分选/测试及首次放行。不预设现场熔铸/轧制/冲片、精制币滚光、包镀或额外精整；真实不同路线须完整新增原子清单及适用性复核。 | ram-coin-making-2015; ram-minting-process; usmint-coin-production-2021 |
| b_first_release | p_mint; p_service | Q_c 为首次放行整币净 kg，非净交付。期末已放行 FG 已属 Q_c，不另加产出或扣其制造负荷。内部已放行币交接及向量匹配抵消。后续储存/包装/搬运/发运/退回/重工按原 Q_c 和 H 单独记录实际增量服务，重验/再交付不造新 Q。 | ilcd-attributional-2010 |
| b_complete | all exchanges | 保留全部真实失败/hold/破坏性测试/样品、零产出、启停、闲置、清理、未获准及重工作业及真实流/负荷。许可、复验、验收/处置决定放行后作业合法适用及持续合格，不删除实际已做未获准工作或失败结果。自然湿度交换是实际物理，无需虚构维修操作。未知不等于零。 | ram-minting-process; usmint-coin-production-2021 |
| b_whole | every supplied article/preparation | 每种真实供货配方、另投化学品、工具、包材、水、燃料、能量、废物和物种各用原子卡。整份制剂/制品采购一次，含量/载水/内含组成仅嵌套互斥子账。厂内真实混合或另加件须有具体实购行、能耗和损失，不将制造输入藏于零或其他集合。 | ram-minting-process; usmint-coin-production-2021 |
| b_physical | all gates | 制造、FG 及合并实物门须与完整毛物料/包装/资产/件/水/热载体和各实际空气物种相符。实物腿不随经济份额缩量。内部同产品/水/回料交接匹配抵消，不新采购/造 Q/给信用。真实外部凝结水/热水载体返供方为 Product 退回，保留真实状态/焓及供方约定。 | ilcd-attributional-2010 |
| packaging_receipt_basis | packaging | 逐实际完整包装制品，P记录有偿采购（单独或随货付费，有无单独发票均可）。I记录首次非采购外部入流，含单独赠与、借用、租赁/周转池领入和未付费供方随附包装；供方随附仅为I的一个子集。ER必须以同一制品或可审计匹配批次关联本场所先前外发记录；仅有他方使用史不属于退回。P/I/ER互斥。已有匹配物理制品卡及原始分账覆盖这些来源，但仍须满足全部原生材料/形态/状态限制；不相容真实制品须另列原子行，不得替用UUID。X_in/X_out仍为独立实测水料变化，不能替代整制品接收。保留完整湿毛量、所有者/保管者、付费/非采购依据、来源、原外发关联、实际状态单位和继承制造/服务向量。无偿接收既非新制造，也不自动零负荷；真实服务及新增运输搬运按正确原批群和分母归属一次，真实未用服务另留，不设默认寿命或抵扣。存量、毛实物流和负荷向量分开。这是声明的守恒前景核算实现，不声称引用原文规定这些变量名。 | ilcd-attributional-2010 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_mint | 整币制造及首次放行 | required | 所述真实制造 | 制造/测试及全部失败/处理 | finished_coin |
| p_service | 原批群储存包装搬运发运服务 | conditional | 有实际服务时，仍保留真实退回/放行后工作 | 实际增量服务及实物流，不新造 Q | original Q_c; H |

下列全部外部卡披露完整真实毛实物腿 V，非负荷向量或存量校正量。独立耗用/活动及环境负荷坐标在第 8 节依一次上游所有权推导，不与毛披露相加。条件卡仅用于真实事件；真实其他物质/SKU/状态须各另原子卡。同一实物出口的包装分流 W 卡与混合总量互斥，两种情况均独立量测分池 W。

### 过程：整币制造及首次放行 (`p_mint`)

#### 输入

##### 产品流

###### 完整供货铜镍硬币坯 (`blank_receipt`)

接收完整均质未包镀铜镍币坯。记录完整外部接收 V 及独立目标批群耗用 N；一个相容供方一次承接已完成合金制造、熔铸、轧制、冲片、既有热/表面处理及运输。铜/镍含量不再采购。声明退火、整边、清洗是否已完成，只实施和核算真实剩余工序。

原生 Product/Mass 为硬币坯料，未固定材料、退火状态、表面、路线、地区、CAS 或同义词。现行铸币分类及保留的旧“其他货物”来源不使其成为成币。限定为一种完整供货均质铜镍币坯，声明真实供方合金/含量及已完成的熔铸、轧制、冲片、退火、清洁、整边状态；金属含量仅子账，非新增采购。仅绑定真实币坯供货状态；非钢芯、镀层圆片、双金属组件或第二枚已制硬币。

- 选定流: 硬币坯料（未指定） `78ebd9cb-9cdf-493b-9357-e1287fa413e1`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_blank_receipt`
- 来源: `ram-coin-making-2015`; `ram-minting-process`; `usmint-coin-production-2021`

###### 铸币用电 (`mint_power`)

计量真实入厂处理、实际退火、整边、润滑施用、压印、测试、计数、抽排及污染控制，保留失败、启停、闲置和清洁全部负荷。电力身份及供方须匹配真实电网地区、年度、电压和交付边界；巴西中压、美国电网、中国低压记录均为条件接口，非通用供电。 原生产品是使用点以能量为基准的前景交流电，供电技术、组合、供应方地域、电压、交付边界及线损惯例均未特指。此宽家族接口不解决实际供应方，也不涵盖直流电；须采集上述事实并连接唯一兼容供电负荷。保留实测毛 MJ 与独立分配负荷坐标。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性 / 单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_mint_power`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 另供自来水 (`mint_water`)

此处仅计真实独立供水/补水跨界。外购整份制剂/制品已含水只计一次；真实厂内稀释、清洗、冷却或清洁另加水为真实入流，即使留在完整期末湿料中也保留。保留原始表计单位，并为闭合独立量测对应状态 kg；m3 转 kg 须真实密度；内部复用抵消、不再采购。

原生 Product 为工厂生产混合的经处理可饮用/公共自来水供货，参考质量/kg，另含次级体积属性。未固定供方地区、CAS、品级或处理路线，真实处理/水质及供方边界必须相容。不从次级属性系数推密度。非按件工艺水、原水取用、蒸汽或清洁制剂，独立量测该水真实质量/状态及所需密度。

- 选定流: 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_mint_water`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 单独采购无水柠檬酸 (`citric_powder`)

仅真实另购柠檬酸用于实际淬冷/清洁配制时适用。保留交付质量、含水/含量、槽液期初期末及损失。整份外购清洁配方已含柠檬酸时不再采购；不将美国淬冷配方强加各厂。

原生 Product/Mass 为无色结晶柠檬酸，CAS 77-92-9，工厂生产混合；同义词为柠檬酸，未固定供应地区、纯度或制造路线。药物分类不强加医药品级，也不证明清洗适用性。只绑定另供、实证品级/状态相容的无水柠檬酸；一水合物、柠檬酸盐和供货水溶制剂须有各自相容身份。泛化环境益处文字不作为影响证据。

- 选定流: 柠檬酸 `80e2772b-119c-4565-a919-a70939d89dff`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_citric_powder`
- 来源: `usmint-coin-production-2021`

###### 水性硬币清洁制剂 (`coin_cleaner`)

实际币坯/硬币清洁使用的一种完整供货清洁配方，声明供方组成、硬币相容性；水、活性剂、缓蚀剂含量仅嵌套子账。洗衣液和打印机清洁剂记录不证明该身份。真实厂内配制时以各单独实购具体物料及真实混合能耗/损失、内部配方交接替代整份采购行，只计一次。

- 选定流: 水性硬币清洁制剂
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_coin_cleaner`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 另供水性防变色制剂 (`antitarnish_additive`)

仅计尚未包含在整份清洁剂中的真实独立供货防变色配方。记录完整供方/SDS 身份、载水及真实化学组成，不虚构缓蚀物种、剂量或默认涂层。不存在须取证，真实存在须逐具体配方及实际处置实例化。

- 选定流: 另供水性防变色制剂
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_antitarnish_additive`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 完整供货水性冲压润滑剂 (`stamping_lubricant`)

仅真实施用于币坯/模具或实际处理回路时适用，保留供方许可/相容性、实际残留、槽液存量、洒漏及废液去向。整份制剂只采购一次；另加水/柠檬酸只在其供货配方之外真实存在时计入。不固定润滑量，也不假定每币必需润滑。

原生 Product/Mass 切削液为明确包含冲压及油/水/乳化剂制剂的金属加工冷却润滑剂家族，未固定品级、CAS、地区或配方。限定为一种真实完整供货的水包油冲压润滑制剂，声明组成及相容性；不替代固定 PAO 合成油、轧制油、纯矿物油或压缩空气。载水、油、乳化剂含量仅子账，不再采购；真实厂内配制须拆分互斥实购物质并保留真实混合能耗和损失。

- 选定流: 切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_stamping_lubricant`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 外供保护氮气 (`protective_nitrogen`)

仅现场退火真实使用 N2 保护气氛时适用，无氧本身不识别氮气。记录真实气体组成、质量和供货状态；氢/氩及其他实际气体须各另卡，不能藏入本行。

原生 Product/Mass 氮气未固定路线、供应地区、纯度或次级属性。仅用于真实保护气氛外供气态分子 N2，非液氮、NOx、整空气或自动套用的无氧配方。核实真实气体纯度与交付边界；真实外排气为不同基本流事件，内部循环不新采购。 不得把购入 N2 再记为空气资源投入；购入气体、实际大气进入与实际排气的归属和事件须分开。

- 选定流: 氮气 `4f19ca0f-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_protective_nitrogen`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 实际现场供热管输天然气 (`furnace_natural_gas`)

仅真实燃气退火/干燥装置存在时适用。保留毛交付体积及独立取证组成/状态、密度和热值基准，累计 m3 不再乘时间。载体质量、燃料能量及完整物种出口分别保留。同一次现场燃烧不再外购热/蒸汽，不将甲烷 CAS 的压缩气接口用于不相容混气。

- 选定流: 实际现场供热管输天然气
- 流属性/单位: 体积 / m3
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_furnace_natural_gas`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 外购工艺热 (`external_heat`)

仅真实外供热能适用。保留真实 MJ、焓/供回状态及供方水能约定。中国天然气工业热身份不覆盖任意地区或热值基准。本能量坐标不为载水质量再购整份供方，也不重复现场燃料所生热。

- 选定流: 外购工艺热
- 流属性/单位: 实际热能 / MJ
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_external_heat`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 外部蒸汽载水 (`external_steam_mass`)

仅真实外部普通水蒸汽跨门时适用，量测 kg、干度、温压/焓及匹配热服务接收；与真实能量坐标共享一次供方所有权，不重复。

- 选定流: 外部蒸汽载水
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_external_steam_mass`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 外部热水载体 (`external_hotwater_mass`)

仅真实外供液态热水适用，独立量测质量及供回焓，不从干燥机描述假定锅炉/热水回路。

- 选定流: 外部热水载体
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_external_hotwater_mass`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 完整钢制硬币压印模具 (`coin_die_asset`)

记录一种真实完整钢制压印模具，接收/在装/期末/退役质量、内含涂层/液体及真实新旧状态。光盘压模、原钢或夹具组件不作为该模具。制造/维修服务依真实使用记录一次归属相应批群，不固定寿命、每模压印数，也不每 kg 购整模。本方法不给出图案、纹路或防伪设计指令。

- 选定流: 完整钢制硬币压印模具
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_coin_die_asset`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 完整硬币压印机 (`press_asset`)

仅实际发生时记录一台新/旧完整压印机实物接收，独立量测真实配置/净质量和件数。资产毛变动、在装液/件、磨损及真实服务负荷分清。不编机器重量、功率、寿命或每 kg 整机采购；另供零件/补液须与整机接收互斥。 原生产品/质量家族覆盖厂内生产混合的完整已制造金属成形和模压压力机，未固定驱动形式、机器质量、寿命、供应方地域或尺寸。限定为实际完整压印造币机；液压中间平台、独立模具、光盘压模或印刷机不匹配。整机接收与其后互斥另加零件/填充物各有唯一归属；实测质量/计数与实际服务归属分账。

- 选定流：以锻压、锤击或模压方式加工金属的机床，以弯曲、折叠、矫直、压平、剪切、冲压或开槽等方式加工金属的机床，其他金属或金属碳化物加工用压力机 `ef918c66-bff0-4bd0-b84b-2912b75af3e4`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_press_asset`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 完整更换轴承 (`replacement_bearing_in`)

真实新/旧独立轴承接收，非再购整机或散钢料。保留实测湿/充液整件状态，并与服务归属分清。

原生 Product/Mass 家族为工厂生产混合的已制造完整滚珠或滚柱轴承。用于一种实际相容更换轴承，声明金属、密封、内含润滑剂及新旧状态；非原钢、散钢球、整台冲床或风机专用变桨轴承。整件制造/初装油只归属一次，后续独立补油为另量供货，不假定寿命。

- 选定流: 滚珠轴承或滚柱轴承 `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_replacement_bearing_in`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 机器润滑油制剂 (`maintenance_oil_in`)

仅整机/轴承已含液之外真实独供完整维护油制剂。保留完整配方、期初期末在机充量、真实补排漏液、相容性及失败事件，不忽略固定 PAO/原生路线冲突。

- 选定流: 机器润滑油制剂
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_maintenance_oil_in`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

##### 废物流

##### 基本流

###### 环境 H2O 水蒸气摄入 (`mint_humidity_in`)

对真实搬运储存及作业中币坯/硬币、包装、工具及物料自然吸湿独立取证量测；完整进水质量及完整期末湿库存同时保留。非自来水供货、液雾或已含于供货湿制品的水二次采购；自然湿度交换不虚构维修许可。

- 选定流: 环境 H2O 水蒸气摄入
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_mint_humidity_in`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 真实环境分子 O2 进入 (`oxygen_ingress`)

仅真实热工/通风作业所量测进气适用，记录这一气体质量、真实组成/状态及消耗/未消耗部分。物种互斥分量之上不再加整空气，也不当作外购气瓶。

原生 Elementary/Mass，CAS 7782-44-7，精确媒体为 Resources / Resources from air / Renewable element resources from air。未固定品级、供方地区或工艺数量。完整同义词/备注含更宽标签，不覆盖本行真实物种、相态、同位素/来源或媒体。仅对本方向独立取证相容真实物种/状态使用，不由总元素、COD、VOC、PM、NOx/SOx、相变或残差推定。受纳媒体不符须另核实身份。

- 选定流: 氧气 `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_oxygen_ingress`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 真实环境分子 N2 进入 (`nitrogen_ingress`)

仅真实热工/通风作业所量测进气适用，记录这一气体质量、真实组成/状态及消耗/未消耗部分。物种互斥分量之上不再加整空气，也不当作外购气瓶。

原生 Elementary/Mass，CAS 7727-37-9，精确媒体为 Resources / Resources from air / Renewable element resources from air。未固定品级、供方地区或工艺数量。完整同义词/备注含更宽标签，不覆盖本行真实物种、相态、同位素/来源或媒体。仅对本方向独立取证相容真实物种/状态使用，不由总元素、COD、VOC、PM、NOx/SOx、相变或残差推定。受纳媒体不符须另核实身份。 本空气资源不包含已归入购入保护气或整空气供应的氮。

- 选定流: 二氮 `08a91e70-3ddc-11dd-96e4-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_nitrogen_ingress`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 真实进气中的环境分子 CO2 (`ambient_co2_in`)

仅实测进气分子 CO2，与新生成化石源 CO2 分清，保留来源和通过量；未确认不能将 Emission 身份反向当 Resource。

- 选定流: 真实进气中的环境分子 CO2
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_ambient_co2_in`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 环境氩进入 (`argon_in`)

仅独立量测进气中实际 Ar 适用，保留本侧毛量，不编空气组成比例。 原生基本流/质量氩 CAS 7440-37-1 属空气资源／空气中的可再生元素资源。仅限独立证实的实际大气 Ar；不采用默认空气比例，不重复计入购入保护气，不替换离子/同位素，也不倒用排放记录。

- 选定流：氩 `fe0acd60-3ddc-11dd-a354-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_argon_in`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

#### 输出

##### 产品流

###### 外部凝结水回送 (`condensate_return`)

仅实际凝结水作为 Product 退回供热方时适用，保留质量/状态/焓及供方水边界。非废物、自动共产品或信用；收集后弃置的凝结水另列真实 Waste/受纳媒体卡。

- 选定流: 外部凝结水回送
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_condensate_return`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 外部供热水回送 (`hotwater_return`)

仅真实液态供热水返供方适用，保留实际 kg 及热状态，供回实物质量保持毛量，不随热负荷分配份额缩量。

- 选定流: 外部供热水回送
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_hotwater_return`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 首次放行完整硬币 (`finished_coin`)

唯一参考输出代表原批群 c 新增首次质量放行整枚硬币净质量 Q_c。以校准净称量及真实放行准则为准；币坯/剔除币/样品、游离水、包材、名义面额或销售额均不入 Q_c。期末已放行 FG 已含其中，不再增加，也不从制造负荷扣除。向 p_service 实物交接须匹配并在合并时抵消。

原生 Product 为铸币、工厂生产混合的已制造成品，参考属性为质量，未固定合金、CAS、几何、面额、供货地区或工艺参数。孤立备注“383 乐器”属于分类/注释瑕疵，须披露，不据此将实体认作乐器。仅用于 primary 正面支持的、本方法限定的完整压印单金属铜镍流通硬币；非币坯、金属圆片、原合金、奖章、代币、首饰或货币账目。家族名称不授权包镀、复合层、双金属、贵金属、精制币或涂层变体。

- 选定流: 铸币 `e686bde0-1244-4040-b821-d8c912ff799d`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 1 千克
- 数值来源模式: `fixed_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_release`
- 来源: `ram-minting-process`; `ram-five-cents`; `ilcd-attributional-2010`

##### 废物流

###### 拆下废轴承 (`removed_bearing_out`)

仅实际拆下且确认为废物的轴承，含独立量测的滞留油、水及污染。失败轴承不套完整 Product 身份；外送/出售本身不扣原制造/服务负荷。

- 选定流: 拆下废轴承
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_removed_bearing_out`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 废润滑油制剂 (`spent_oil_out`)

一种真实排出收集的整份油制剂，含水和污染作子账；独立量测真实外运及处理一次，不能两个未知库存相减推定。 原生废物流/质量废润滑油覆盖实际石油基或合成润滑油经使用污染后在产生点形成的废物，未指定处理路线和供应方。采用真实整份废制剂及其独立实测、非加和水分/污染物子账，不替代未使用产品油，也不假定再生/燃烧信用。处理归属唯一接收方，原维护及已执行服务负荷保留。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_spent_oil_out`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 剔除铜镍合金硬币 (`rejected_coin_waste`)

一种真实单独外运的失败整币流，实际已变形币也保留。量测净金属及附着残留/水，铜镍分别含量分析、不造两份废料采购。放射性铜混废和镍冶炼渣身份不相容。失败、破坏性样品及处理仍属原制造负荷，外售不自动扣负荷/给信用。 发生真实销毁/变形时记录其作业、保管和去向，完整保留实际工作与排放。外部接收方回收或回炉具有唯一声明处理归属；不得虚构厂内熔炉或把废币改记新产品。实际内部回收须匹配物料/负荷交接并抵消，完整采集新增作业，不产生第二次采购或信用。

- 选定流: 剔除铜镍合金硬币
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_rejected_coin_waste`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 收集铜镍金属细屑 (`metal_fines_waste`)

仅真实搬运、整边、清洁或压印中单独收集的固态合金细屑。不自动造冲压边料：外购币坯不假设现场冲片/熔铸。保留合金物种/相态及各出口，外运颗粒废物不同时作空气排放。

- 选定流: 收集铜镍金属细屑
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_metal_fines_waste`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 废水性硬币清洁液 (`spent_cleaning_liquid`)

一种实际单独收集的整份废清洁槽液，载水、溶解化学品/金属及悬浮粒作非加总子账。量测完整湿出口、独立体积/密度/状态及受纳处理。此门不把所含离子再排天然水；实际厂内处理及环境释放须另真实卡。

- 选定流: 废水性硬币清洁液
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_spent_cleaning_liquid`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 含铜镍湿清洁污泥 (`coin_wash_sludge`)

仅真实清洁/液处理单独收集湿污泥适用，独立量测干固体、游离/结合水及实际矿物/化学物种。总铜镍和 COD 不证明氢氧化物分子质量；标为污泥的水处理化学品不能自动代表本废物。

- 选定流: 含铜镍湿清洁污泥
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_coin_wash_sludge`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 退役钢制硬币压印模具 (`spent_striking_die`)

仅真实单独退役、确认为废物的整件钢模适用；保留毛金属/涂层/附着油水、资产标识及实际接收方。制造/服务负荷及继承向量须核对；退役/外售不造避免钢材信用，也不抹去已执行服务。不推定固定寿命。

- 选定流: 退役钢制硬币压印模具
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_spent_striking_die`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 退役完整硬币压印机 (`retired_coin_press`)

仅真实整机处置适用，保留实际配置、内含液/件及完整毛质量。独立拆出液/件通过互斥桥接，不再计于整机；实物资产存量与实际服务充量分开，不每 kg 退役整机或编造寿命。

- 选定流: 退役完整硬币压印机
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_retired_coin_press`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

##### 基本流

###### 排入真实空气的 H2O 水蒸气 (`mint_h2o_out`)

实际蒸发/解吸及真实反应生成的普通水先按来源分别量测，再合成完整毛出口。自然储存搬运失水须纳入，不虚构额外操作。液滴、废水及游离/结构水分清，不能一个残差拟合多个未知。

仅普通 H2O 水蒸气，非液滴、冰、重/氚水或植物蒸腾。原生 Elementary/Mass，CAS 7732-18-5，精确媒体为 Emissions / Emissions to air / Emissions to air, unspecified。未固定品级、供方地区或工艺数量。完整同义词/备注含更宽标签，不覆盖本行真实物种、相态、同位素/来源或媒体。仅对本方向独立取证相容真实物种/状态使用，不由总元素、COD、VOC、PM、NOx/SOx、相变或残差推定。受纳媒体不符须另核实身份。

- 选定流: 水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_mint_h2o_out`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 真实空气出口中的铜 (`copper_air`)

仅独立量测、原生金属约定可表达且受纳空气媒体相符的真实金属/离子物种适用。颗粒/溶解形态及化学物质量/元素含量独立，合金细屑、PM 及总金属指标不能直接抄成本交换；所用 LCIA 方法要求时优先特定物种。

原生 Elementary/Mass，CAS 7440-50-8，精确媒体为 Emissions / Emissions to air / Emissions to air, unspecified。未固定品级、供方地区或工艺数量。完整同义词/备注含更宽标签，不覆盖本行真实物种、相态、同位素/来源或媒体。原生金属 CAS 约定在所用 LCIA 未区分时亦表示离子；需要区分时优先特定离子。仅对本方向独立取证相容真实物种/状态使用，不由总元素、COD、VOC、PM、NOx/SOx、相变或残差推定。受纳媒体不符须另核实身份。

- 选定流: 铜 `fe0acd60-3ddc-11dd-a7a0-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_copper_air`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 真实空气出口中的镍 (`nickel_air`)

仅独立量测、原生金属约定可表达且受纳空气媒体相符的真实金属/离子物种适用。颗粒/溶解形态及化学物质量/元素含量独立，合金细屑、PM 及总金属指标不能直接抄成本交换；所用 LCIA 方法要求时优先特定物种。

原生 Elementary/Mass，CAS 7440-02-0，精确媒体为 Emissions / Emissions to air / Emissions to air, unspecified。未固定品级、供方地区或工艺数量。完整同义词/备注含更宽标签，不覆盖本行真实物种、相态、同位素/来源或媒体。原生金属 CAS 约定在所用 LCIA 未区分时亦表示离子；需要区分时优先特定离子。仅对本方向独立取证相容真实物种/状态使用，不由总元素、COD、VOC、PM、NOx/SOx、相变或残差推定。受纳媒体不符须另核实身份。

- 选定流: 镍 `08a91e70-3ddc-11dd-96c8-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_nickel_air`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 真实溶解 Cu(II) 排入淡水 (`cuion_freshwater`)

仅本前景门内真实独立核实溶解二价离子排入淡水时适用。整份外运废液、总金属、颗粒金属或送外部处理的废水不等于本环境释放。保留真实浓度/物种、受纳媒体、流量体积及质量转换，不用一残差解两个未知。

原生 Elementary/Mass，CAS 15158-11-9，精确媒体为 Emissions / Emissions to water / Emissions to fresh water。未固定品级、供方地区或工艺数量。完整同义词/备注含更宽标签，不覆盖本行真实物种、相态、同位素/来源或媒体。仅对本方向独立取证相容真实物种/状态使用，不由总元素、COD、VOC、PM、NOx/SOx、相变或残差推定。受纳媒体不符须另核实身份。

- 选定流: 铜（II） `1fc4267e-82f9-49d2-9848-63fe45433132`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_cuion_freshwater`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 真实溶解 Ni(II) 排入淡水 (`niion_freshwater`)

仅本前景门内真实独立核实溶解二价离子排入淡水时适用。整份外运废液、总金属、颗粒金属或送外部处理的废水不等于本环境释放。保留真实浓度/物种、受纳媒体、流量体积及质量转换，不用一残差解两个未知。

原生 Elementary/Mass，CAS 14701-22-5，精确媒体为 Emissions / Emissions to water / Emissions to fresh water。未固定品级、供方地区或工艺数量。完整同义词/备注含更宽标签，不覆盖本行真实物种、相态、同位素/来源或媒体。仅对本方向独立取证相容真实物种/状态使用，不由总元素、COD、VOC、PM、NOx/SOx、相变或残差推定。受纳媒体不符须另核实身份。

- 选定流: 镍 (II) `41e90548-2125-4f20-a437-ca5d083fec53`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_niion_freshwater`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 真实化石源分子 CO2 出口 (`gas_co2normal`)

仅真实现场炉/处理/抽排废气确有该物种时适用，独立核实干湿状态、完整毛量及正确受纳空气。进气通过量与净生成/消耗分开，不将 NOx/SOx/VOC/总碳指标转成某分子，不假完全燃烧或虚构燃气装置。真实新增物种须各另卡。

原生 Elementary/Mass，CAS 124-38-9，精确媒体为 Emissions / Emissions to air / Emissions to air, unspecified。未固定品级、供方地区或工艺数量。完整同义词/备注含更宽标签，不覆盖本行真实物种、相态、同位素/来源或媒体。仅对本方向独立取证相容真实物种/状态使用，不由总元素、COD、VOC、PM、NOx/SOx、相变或残差推定。受纳媒体不符须另核实身份。 所选身份要求实际 CO2 中的化石碳来源有独立证据。大气入口穿流及生物源 CO2 分别识别，均不自动成为本化石源交换。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_gas_co2normal`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 真实化石源分子 CO 出口 (`gas_co`)

仅真实现场炉/处理/抽排废气确有该物种时适用，独立核实干湿状态、完整毛量及正确受纳空气。进气通过量与净生成/消耗分开，不将 NOx/SOx/VOC/总碳指标转成某分子，不假完全燃烧或虚构燃气装置。真实新增物种须各另卡。

原生 Elementary/Mass，CAS 630-08-0，精确媒体为 Emissions / Emissions to air / Emissions to air, unspecified。未固定品级、供方地区或工艺数量。完整同义词/备注含更宽标签，不覆盖本行真实物种、相态、同位素/来源或媒体。仅对本方向独立取证相容真实物种/状态使用，不由总元素、COD、VOC、PM、NOx/SOx、相变或残差推定。受纳媒体不符须另核实身份。 所选身份要求实际分子 CO 及独立证实的化石碳来源；总碳、大气穿流或生物源 CO 不得默认为此身份。

- 选定流: 一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_gas_co`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 真实分子 NO 出口 (`gas_no`)

仅真实现场炉/处理/抽排废气确有该物种时适用，独立核实干湿状态、完整毛量及正确受纳空气。进气通过量与净生成/消耗分开，不将 NOx/SOx/VOC/总碳指标转成某分子，不假完全燃烧或虚构燃气装置。真实新增物种须各另卡。

原生 Elementary/Mass，CAS 10102-43-9，精确媒体为 Emissions / Emissions to air / Emissions to air, unspecified。未固定品级、供方地区或工艺数量。完整同义词/备注含更宽标签，不覆盖本行真实物种、相态、同位素/来源或媒体。仅对本方向独立取证相容真实物种/状态使用，不由总元素、COD、VOC、PM、NOx/SOx、相变或残差推定。受纳媒体不符须另核实身份。

- 选定流: 一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_gas_no`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 真实分子 NO2 出口 (`gas_no2`)

仅真实现场炉/处理/抽排废气确有该物种时适用，独立核实干湿状态、完整毛量及正确受纳空气。进气通过量与净生成/消耗分开，不将 NOx/SOx/VOC/总碳指标转成某分子，不假完全燃烧或虚构燃气装置。真实新增物种须各另卡。

原生 Elementary/Mass，CAS 10102-44-0，精确媒体为 Emissions / Emissions to air / Emissions to air, unspecified。未固定品级、供方地区或工艺数量。完整同义词/备注含更宽标签，不覆盖本行真实物种、相态、同位素/来源或媒体。仅对本方向独立取证相容真实物种/状态使用，不由总元素、COD、VOC、PM、NOx/SOx、相变或残差推定。受纳媒体不符须另核实身份。

- 选定流: 二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_gas_no2`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 真实化石源分子 CH4 出口 (`gas_methane`)

仅真实现场炉/处理/抽排废气确有该物种时适用，独立核实干湿状态、完整毛量及正确受纳空气。进气通过量与净生成/消耗分开，不将 NOx/SOx/VOC/总碳指标转成某分子，不假完全燃烧或虚构燃气装置。真实新增物种须各另卡。

原生 Elementary/Mass，CAS 74-82-8，精确媒体为 Emissions / Emissions to air / Emissions to air, unspecified。未固定品级、供方地区或工艺数量。完整同义词/备注含更宽标签，不覆盖本行真实物种、相态、同位素/来源或媒体。仅对本方向独立取证相容真实物种/状态使用，不由总元素、COD、VOC、PM、NOx/SOx、相变或残差推定。受纳媒体不符须另核实身份。 所选身份要求实际分子 CH4 且化石来源有独立证据；沼气/生物源甲烷与大气穿流须有各自来源兼容账。

- 选定流: 甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_gas_methane`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 真实分子 SO2 出口 (`gas_so2`)

仅真实现场炉/处理/抽排废气确有该物种时适用，独立核实干湿状态、完整毛量及正确受纳空气。进气通过量与净生成/消耗分开，不将 NOx/SOx/VOC/总碳指标转成某分子，不假完全燃烧或虚构燃气装置。真实新增物种须各另卡。

原生 Elementary/Mass，CAS 7446-09-5，精确媒体为 Emissions / Emissions to air / Emissions to air, unspecified。未固定品级、供方地区或工艺数量。完整同义词/备注含更宽标签，不覆盖本行真实物种、相态、同位素/来源或媒体。仅对本方向独立取证相容真实物种/状态使用，不由总元素、COD、VOC、PM、NOx/SOx、相变或残差推定。受纳媒体不符须另核实身份。

- 选定流: 二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_gas_so2`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 真实分子 N2 排气 (`gas_n2air`)

仅真实现场炉/处理/抽排废气确有该物种时适用，独立核实干湿状态、完整毛量及正确受纳空气。进气通过量与净生成/消耗分开，不将 NOx/SOx/VOC/总碳指标转成某分子，不假完全燃烧或虚构燃气装置。真实新增物种须各另卡。

原生 Elementary/Mass，CAS 7727-37-9，精确媒体为 Emissions / Emissions to air / Emissions to air, unspecified。未固定品级、供方地区或工艺数量。完整同义词/备注含更宽标签，不覆盖本行真实物种、相态、同位素/来源或媒体。仅对本方向独立取证相容真实物种/状态使用，不由总元素、COD、VOC、PM、NOx/SOx、相变或残差推定。受纳媒体不符须另核实身份。

- 选定流: 二氮 `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_gas_n2air`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 真实未消耗分子 O2 排气 (`gas_o2air`)

仅真实现场炉/处理/抽排废气确有该物种时适用，独立核实干湿状态、完整毛量及正确受纳空气。进气通过量与净生成/消耗分开，不将 NOx/SOx/VOC/总碳指标转成某分子，不假完全燃烧或虚构燃气装置。真实新增物种须各另卡。

原生 Elementary/Mass，CAS 7782-44-7，精确媒体为 Emissions / Emissions to air / Emissions to air, unspecified。未固定品级、供方地区或工艺数量。完整同义词/备注含更宽标签，不覆盖本行真实物种、相态、同位素/来源或媒体。仅对本方向独立取证相容真实物种/状态使用，不由总元素、COD、VOC、PM、NOx/SOx、相变或残差推定。受纳媒体不符须另核实身份。

- 选定流: 氧 `08a91e70-3ddc-11dd-9745-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_gas_o2air`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 真实氩排气 (`argon_out`)

仅真实 Ar 出口适用，与真实入口及损失配对，不假定新生成。 原生基本流/质量氩 CAS 7440-37-1 属未特指空气排放。保留实际毛排放 Ar 质量及独立来源/穿流；不假定净生成，不替换海洋/水/土壤介质，不叠加整空气重复项。

- 选定流：氩 `fe0acd60-3ddc-11dd-a350-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_argon_out`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

### 过程：原批群储存包装搬运发运服务 (`p_service`)

#### 输入

##### 产品流

###### 储存包装及搬运用电 (`service_power`)

计量观测 H 内原批群实际储存、计数、袋箱搬运、发运、退回及放行后作业用电，含真实失败。已放行币留库不消除已经执行服务；采用真实电网/电压/年度/供方，不预收整个未来服务期。 原生产品交流前景电力在实际使用点未特指供电技术、电压、供应方地域与组合；这些仍须单独提供兼容证据，不得填入假定电网。唯一实际供应方拥有负荷，且与电表毛 MJ 分账。H 是实际服务观察区间，不是额外除数或假定未来寿命。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性 / 单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_service_power`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 实际服务清洁自来水 (`service_water`)

此处仅计真实独立供水/补水跨界。外购整份制剂/制品已含水只计一次；真实厂内稀释、清洗、冷却或清洁另加水为真实入流，即使留在完整期末湿料中也保留。保留原始表计单位，并为闭合独立量测对应状态 kg；m3 转 kg 须真实密度；内部复用抵消、不再采购。

原生 Product 为工厂生产混合的经处理可饮用/公共自来水供货，参考质量/kg，另含次级体积属性。未固定供方地区、CAS、品级或处理路线，真实处理/水质及供方边界必须相容。不从次级属性系数推密度。非按件工艺水、原水取用、蒸汽或清洁制剂，独立量测该水真实质量/状态及所需密度。

- 选定流: 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_service_water`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

###### 原首次放行硬币内部接收 (`released_coin_internal`)

匹配 finished_coin 同整币批群/数量/状态及制造向量。内部接收不新采购、不再造 Q。已放行期初期末 FG 保留原制造批群归属，真实增量服务为独立坐标。

原生 Product 为铸币、工厂生产混合的已制造成品，参考属性为质量，未固定合金、CAS、几何、面额、供货地区或工艺参数。孤立备注“383 乐器”属于分类/注释瑕疵，须披露，不据此将实体认作乐器。仅用于 primary 正面支持的、本方法限定的完整压印单金属铜镍流通硬币；非币坯、金属圆片、原合金、奖章、代币、首饰或货币账目。家族名称不授权包镀、复合层、双金属、贵金属、精制币或涂层变体。

- 选定流: 铸币 `e686bde0-1244-4040-b821-d8c912ff799d`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 1 千克；匹配内部转移，不新采购/产量
- 数值来源模式: `fixed_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_released_coin_internal`
- 来源: `ilcd-attributional-2010`

###### 客户退回完整硬币 (`coin_customer_return`)

记录实际退回整币质量/状态及原交付/批群链接，不假定等于原发运质量或恢复合格。真实新增水、污染、损失及作业均独立保留。Product 身份仅用于相容完整硬币，实际不可逆弃置料另用真实 Waste 卡。

原生 Product 为铸币、工厂生产混合的已制造成品，参考属性为质量，未固定合金、CAS、几何、面额、供货地区或工艺参数。孤立备注“383 乐器”属于分类/注释瑕疵，须披露，不据此将实体认作乐器。仅用于 primary 正面支持的、本方法限定的完整压印单金属铜镍流通硬币；非币坯、金属圆片、原合金、奖章、代币、首饰或货币账目。家族名称不授权包镀、复合层、双金属、贵金属、精制币或涂层变体。

- 选定流: 铸币 `e686bde0-1244-4040-b821-d8c912ff799d`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_coin_customer_return`
- 来源: `ilcd-attributional-2010`

###### 聚乙烯硬币袋 (`pack_pe_p`)

本P卡记录这一相同合格制品的有偿采购，含单独或随货付费；首次非采购接收和真实退回分别用I及ER。独立采购接收。仅真实有偿采购整份包装（含单独或随货付费），保留完整实物 V=P 及一次真实上游所有权；同一次有偿单独或随货采购不再记I或ER，供方内含负荷保持唯一归属。 本行仅为聚乙烯硬币袋这一个池。整份湿制品、一体盖/封口/内衬及组成只计一次，补充材料账须互斥；保留完整毛实物腿，不以存量校正耗用或分配负荷向量替代。

原生 Product/Mass 聚乙烯袋，CAS 9002-88-4，同义词 PE 袋，工厂生产混合、用于包装运输储存，未固定品级、尺寸、封口或地区。绑定一种实际完整且结构相容的 PE 硬币袋/小袋；非 PET、PP 编织袋、原膜或袋加内衬集合。一体封口/随带水分只属整件一次，另供封口或内衬为互斥新制品、须另卡。退回作为 Product 的实物须仍相容可复用；废物另用 Waste 身份。

- 选定流: 聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_pe_p`
- 来源: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### 聚乙烯硬币袋 (`pack_pe_i`)

本I卡记录这一相同合格制品的首次非采购接收，含单独赠与、借用、租赁/周转池领入或未付费供方随附接收。下文随货示例仅为子集，不能限制其他首次非采购来源；排除有偿P及真实ER。首次非采购外部入流。仅这一相同包装的首次非采购接收，可单独接收或未付费随供货附带接收。对首次非采购接收保留完整实物V=I及一次上游负荷归属；若包装已随供货付费，则归P而非I，不漏实物、不双购。 本行仅为聚乙烯硬币袋这一个池。整份湿制品、一体盖/封口/内衬及组成只计一次，补充材料账须互斥；保留完整毛实物腿，不以存量校正耗用或分配负荷向量替代。

原生 Product/Mass 聚乙烯袋，CAS 9002-88-4，同义词 PE 袋，工厂生产混合、用于包装运输储存，未固定品级、尺寸、封口或地区。绑定一种实际完整且结构相容的 PE 硬币袋/小袋；非 PET、PP 编织袋、原膜或袋加内衬集合。一体封口/随带水分只属整件一次，另供封口或内衬为互斥新制品、须另卡。退回作为 Product 的实物须仍相容可复用；废物另用 Waste 身份。

- 选定流: 聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_pe_i`
- 来源: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### 聚乙烯硬币袋 (`pack_pe_er`)

外部退回接收。仅真实外部退回空/载货复用制品；保留完整 V=ER、真实状态、批群/退回所有权及负荷向量。外部退回不新生产/采购；污染弃置废物用真实 Waste 路线。 本行仅为聚乙烯硬币袋这一个池。整份湿制品、一体盖/封口/内衬及组成只计一次，补充材料账须互斥；保留完整毛实物腿，不以存量校正耗用或分配负荷向量替代。

原生 Product/Mass 聚乙烯袋，CAS 9002-88-4，同义词 PE 袋，工厂生产混合、用于包装运输储存，未固定品级、尺寸、封口或地区。绑定一种实际完整且结构相容的 PE 硬币袋/小袋；非 PET、PP 编织袋、原膜或袋加内衬集合。一体封口/随带水分只属整件一次，另供封口或内衬为互斥新制品、须另卡。退回作为 Product 的实物须仍相容可复用；废物另用 Waste 身份。

- 选定流: 聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_pe_er`
- 来源: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### 瓦楞运输纸箱 (`pack_carton_p`)

一份真实完整的瓦楞纸板运输纸箱，限定实际构造和构型，不是纸箱、塑料袋、膜、内衬等包装的集合。相容原子Product流UUID仍待解析。记录真实纸板/瓦楞/层数构造、纤维组成、涂层/复合、湿态、内含胶黏剂/紧固件及供方范围；不预设通用纤维比例、处理、尺寸、重量或寿命。供货整箱内含组成随整箱计一次，真实另供衬件、胶带及其他材料各保互斥独立行及唯一上游归属。保留本卡按包装边界与原始协议定义的P/I/ER/S/EO角色，已有packaging_receipt_basis时依其执行；新供方身份不能改变事件定义。按本卡声明的Mass/kg保完整实测湿毛量及原事件/门/保管/批群，无论即时使用或留期末。保留期初期末空/附着/复用存量、内部复用及独立实测水料变化；不以存量、负荷或经济份额校正缩小毛流。真实制造/服务负荷另按原批群规则和唯一归一化归属一次；单纯毛接收或外发不产生新制造、采购负荷、供方链接或信用。绑定前须解析物理相容的纸箱身份/供方；身份缺口须披露，不能以混合包装集合或虚构UUID代替。

- 选定流: 瓦楞运输纸箱
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_carton_p`
- 来源: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### 瓦楞运输纸箱 (`pack_carton_i`)

一份真实完整的瓦楞纸板运输纸箱，限定实际构造和构型，不是纸箱、塑料袋、膜、内衬等包装的集合。相容原子Product流UUID仍待解析。记录真实纸板/瓦楞/层数构造、纤维组成、涂层/复合、湿态、内含胶黏剂/紧固件及供方范围；不预设通用纤维比例、处理、尺寸、重量或寿命。供货整箱内含组成随整箱计一次，真实另供衬件、胶带及其他材料各保互斥独立行及唯一上游归属。保留本卡按包装边界与原始协议定义的P/I/ER/S/EO角色，已有packaging_receipt_basis时依其执行；新供方身份不能改变事件定义。按本卡声明的Mass/kg保完整实测湿毛量及原事件/门/保管/批群，无论即时使用或留期末。保留期初期末空/附着/复用存量、内部复用及独立实测水料变化；不以存量、负荷或经济份额校正缩小毛流。真实制造/服务负荷另按原批群规则和唯一归一化归属一次；单纯毛接收或外发不产生新制造、采购负荷、供方链接或信用。绑定前须解析物理相容的纸箱身份/供方；身份缺口须披露，不能以混合包装集合或虚构UUID代替。

- 选定流: 瓦楞运输纸箱
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_carton_i`
- 来源: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### 瓦楞运输纸箱 (`pack_carton_er`)

一份真实完整的瓦楞纸板运输纸箱，限定实际构造和构型，不是纸箱、塑料袋、膜、内衬等包装的集合。相容原子Product流UUID仍待解析。记录真实纸板/瓦楞/层数构造、纤维组成、涂层/复合、湿态、内含胶黏剂/紧固件及供方范围；不预设通用纤维比例、处理、尺寸、重量或寿命。供货整箱内含组成随整箱计一次，真实另供衬件、胶带及其他材料各保互斥独立行及唯一上游归属。保留本卡按包装边界与原始协议定义的P/I/ER/S/EO角色，已有packaging_receipt_basis时依其执行；新供方身份不能改变事件定义。按本卡声明的Mass/kg保完整实测湿毛量及原事件/门/保管/批群，无论即时使用或留期末。保留期初期末空/附着/复用存量、内部复用及独立实测水料变化；不以存量、负荷或经济份额校正缩小毛流。真实制造/服务负荷另按原批群规则和唯一归一化归属一次；单纯毛接收或外发不产生新制造、采购负荷、供方链接或信用。绑定前须解析物理相容的纸箱身份/供方；身份缺口须披露，不能以混合包装集合或虚构UUID代替。

- 选定流: 瓦楞运输纸箱
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_carton_er`
- 来源: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### 木制运输托盘 (`pack_pallet_p`)

本P卡记录这一相同合格制品的有偿采购，含单独或随货付费；首次非采购接收和真实退回分别用I及ER。独立采购接收。仅真实有偿采购整份包装（含单独或随货付费），保留完整实物 V=P 及一次真实上游所有权；同一次有偿单独或随货采购不再记I或ER，供方内含负荷保持唯一归属。 本行仅为木制运输托盘这一个池。整份湿制品、一体盖/封口/内衬及组成只计一次，补充材料账须互斥；保留完整毛实物腿，不以存量校正耗用或分配负荷向量替代。

原生 Product/Mass 家族为工厂生产混合的已制造木制可搬运载货平台，备注也含围板/平台变体。此处仅为一种真实完整木托盘，非单独修补木板、固定欧标托盘、塑料架或整机资产。声明木材/紧固件/一体含水及真实新旧状态，不固定周转次数或寿命。整件内含组件不再采购，另供维修件仍须分列。

- 选定流: 木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_pallet_p`
- 来源: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### 木制运输托盘 (`pack_pallet_i`)

本I卡记录这一相同合格制品的首次非采购接收，含单独赠与、借用、租赁/周转池领入或未付费供方随附接收。下文随货示例仅为子集，不能限制其他首次非采购来源；排除有偿P及真实ER。首次非采购外部入流。仅这一相同包装的首次非采购接收，可单独接收或未付费随供货附带接收。对首次非采购接收保留完整实物V=I及一次上游负荷归属；若包装已随供货付费，则归P而非I，不漏实物、不双购。 本行仅为木制运输托盘这一个池。整份湿制品、一体盖/封口/内衬及组成只计一次，补充材料账须互斥；保留完整毛实物腿，不以存量校正耗用或分配负荷向量替代。

原生 Product/Mass 家族为工厂生产混合的已制造木制可搬运载货平台，备注也含围板/平台变体。此处仅为一种真实完整木托盘，非单独修补木板、固定欧标托盘、塑料架或整机资产。声明木材/紧固件/一体含水及真实新旧状态，不固定周转次数或寿命。整件内含组件不再采购，另供维修件仍须分列。

- 选定流: 木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_pallet_i`
- 来源: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### 木制运输托盘 (`pack_pallet_er`)

外部退回接收。仅真实外部退回空/载货复用制品；保留完整 V=ER、真实状态、批群/退回所有权及负荷向量。外部退回不新生产/采购；污染弃置废物用真实 Waste 路线。 本行仅为木制运输托盘这一个池。整份湿制品、一体盖/封口/内衬及组成只计一次，补充材料账须互斥；保留完整毛实物腿，不以存量校正耗用或分配负荷向量替代。

原生 Product/Mass 家族为工厂生产混合的已制造木制可搬运载货平台，备注也含围板/平台变体。此处仅为一种真实完整木托盘，非单独修补木板、固定欧标托盘、塑料架或整机资产。声明木材/紧固件/一体含水及真实新旧状态，不固定周转次数或寿命。整件内含组件不再采购，另供维修件仍须分列。

- 选定流: 木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_pallet_er`
- 来源: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### 钢制币坯运输桶 (`pack_drum_p`)

本P卡记录这一相同合格制品的有偿采购，含单独或随货付费；首次非采购接收和真实退回分别用I及ER。独立采购接收。仅真实有偿采购整份包装（含单独或随货付费），保留完整实物 V=P 及一次真实上游所有权；同一次有偿单独或随货采购不再记I或ER，供方内含负荷保持唯一归属。 本行仅为钢制币坯运输桶这一个池。整份湿制品、一体盖/封口/内衬及组成只计一次，补充材料账须互斥；保留完整毛实物腿，不以存量校正耗用或分配负荷向量替代。

- 选定流: 钢制币坯运输桶
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_drum_p`
- 来源: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### 钢制币坯运输桶 (`pack_drum_i`)

本I卡记录这一相同合格制品的首次非采购接收，含单独赠与、借用、租赁/周转池领入或未付费供方随附接收。下文随货示例仅为子集，不能限制其他首次非采购来源；排除有偿P及真实ER。首次非采购外部入流。仅这一相同包装的首次非采购接收，可单独接收或未付费随供货附带接收。对首次非采购接收保留完整实物V=I及一次上游负荷归属；若包装已随供货付费，则归P而非I，不漏实物、不双购。 本行仅为钢制币坯运输桶这一个池。整份湿制品、一体盖/封口/内衬及组成只计一次，补充材料账须互斥；保留完整毛实物腿，不以存量校正耗用或分配负荷向量替代。

- 选定流: 钢制币坯运输桶
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_drum_i`
- 来源: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### 钢制币坯运输桶 (`pack_drum_er`)

外部退回接收。仅真实外部退回空/载货复用制品；保留完整 V=ER、真实状态、批群/退回所有权及负荷向量。外部退回不新生产/采购；污染弃置废物用真实 Waste 路线。 本行仅为钢制币坯运输桶这一个池。整份湿制品、一体盖/封口/内衬及组成只计一次，补充材料账须互斥；保留完整毛实物腿，不以存量校正耗用或分配负荷向量替代。

- 选定流: 钢制币坯运输桶
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_drum_er`
- 来源: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### 托盘修补锯材板 (`repair_wood_in`)

一种实际另收锯材木板，非整托盘或人造刨花板；记录新旧状态、树种、涂层、另供紧固件及真实含水。木板留期末不消除真实入流。

- 选定流: 托盘修补锯材板
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_repair_wood_in`
- 来源: `ilcd-attributional-2010`

###### 托盘维修钢钉 (`repair_steel_in`)

一种实际独供钢钉，非整木托盘/钢桶/轴承。仅计整件一体组成之外新增，留在期末包装中也保留真实质量。 原生产品/质量钢紧固件家族是厂内全球生产混合，用于制造/装配，完整家族包括钉且未固定涂层、牌号或供应方。本卡限定为一项实际独立供给的兼容钢钉，记录金属材质/表面与真实新旧状态；不替换铜/铝，也不再计完整托盘供应方。

- 选定流：钢紧固件 `ebfe08f5-42c8-484e-b39a-684a35981c24`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_repair_steel_in`
- 来源: `ilcd-attributional-2010`

##### 废物流

##### 基本流

###### 环境 H2O 水蒸气摄入 (`service_humidity_in`)

对真实搬运储存及作业中币坯/硬币、包装、工具及物料自然吸湿独立取证量测；完整进水质量及完整期末湿库存同时保留。非自来水供货、液雾或已含于供货湿制品的水二次采购；自然湿度交换不虚构维修许可。

- 选定流: 环境 H2O 水蒸气摄入
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_service_humidity_in`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

#### 输出

##### 产品流

###### 毛发运完整硬币 (`coin_dispatch`)

记录真实验收状态、原批群及交付标识下外部毛实物 G；完整毛腿 V 不是净销售、新生产或分配负荷向量。完整退回/再交付另列，均不造新 Q。

原生 Product 为铸币、工厂生产混合的已制造成品，参考属性为质量，未固定合金、CAS、几何、面额、供货地区或工艺参数。孤立备注“383 乐器”属于分类/注释瑕疵，须披露，不据此将实体认作乐器。仅用于 primary 正面支持的、本方法限定的完整压印单金属铜镍流通硬币；非币坯、金属圆片、原合金、奖章、代币、首饰或货币账目。家族名称不授权包镀、复合层、双金属、贵金属、精制币或涂层变体。

- 选定流: 铸币 `e686bde0-1244-4040-b821-d8c912ff799d`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_coin_dispatch`
- 来源: `ilcd-attributional-2010`

###### 聚乙烯硬币袋 (`pack_pe_s`)

毛实物发运。仅随毛实物货物真实离开时适用；V=S 为完整包装质量，不随净销售/经济份额缩量。产品 Q 独立，包装皮重与硬币净质量分清。 本行仅为聚乙烯硬币袋这一个池。整份湿制品、一体盖/封口/内衬及组成只计一次，补充材料账须互斥；保留完整毛实物腿，不以存量校正耗用或分配负荷向量替代。

原生 Product/Mass 聚乙烯袋，CAS 9002-88-4，同义词 PE 袋，工厂生产混合、用于包装运输储存，未固定品级、尺寸、封口或地区。绑定一种实际完整且结构相容的 PE 硬币袋/小袋；非 PET、PP 编织袋、原膜或袋加内衬集合。一体封口/随带水分只属整件一次，另供封口或内衬为互斥新制品、须另卡。退回作为 Product 的实物须仍相容可复用；废物另用 Waste 身份。

- 选定流: 聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_pe_s`
- 来源: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### 聚乙烯硬币袋 (`pack_pe_eo`)

对外空包装退回。仅真实向外部所有者退回制品，保留完整 V=EO、状态及交接回单。非内部复用，也不自动作共产品或避免采购信用。 本行仅为聚乙烯硬币袋这一个池。整份湿制品、一体盖/封口/内衬及组成只计一次，补充材料账须互斥；保留完整毛实物腿，不以存量校正耗用或分配负荷向量替代。

原生 Product/Mass 聚乙烯袋，CAS 9002-88-4，同义词 PE 袋，工厂生产混合、用于包装运输储存，未固定品级、尺寸、封口或地区。绑定一种实际完整且结构相容的 PE 硬币袋/小袋；非 PET、PP 编织袋、原膜或袋加内衬集合。一体封口/随带水分只属整件一次，另供封口或内衬为互斥新制品、须另卡。退回作为 Product 的实物须仍相容可复用；废物另用 Waste 身份。

- 选定流: 聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_pe_eo`
- 来源: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### 瓦楞运输纸箱 (`pack_carton_s`)

一份真实完整的瓦楞纸板运输纸箱，限定实际构造和构型，不是纸箱、塑料袋、膜、内衬等包装的集合。相容原子Product流UUID仍待解析。记录真实纸板/瓦楞/层数构造、纤维组成、涂层/复合、湿态、内含胶黏剂/紧固件及供方范围；不预设通用纤维比例、处理、尺寸、重量或寿命。供货整箱内含组成随整箱计一次，真实另供衬件、胶带及其他材料各保互斥独立行及唯一上游归属。保留本卡按包装边界与原始协议定义的P/I/ER/S/EO角色，已有packaging_receipt_basis时依其执行；新供方身份不能改变事件定义。按本卡声明的Mass/kg保完整实测湿毛量及原事件/门/保管/批群，无论即时使用或留期末。保留期初期末空/附着/复用存量、内部复用及独立实测水料变化；不以存量、负荷或经济份额校正缩小毛流。真实制造/服务负荷另按原批群规则和唯一归一化归属一次；单纯毛接收或外发不产生新制造、采购负荷、供方链接或信用。绑定前须解析物理相容的纸箱身份/供方；身份缺口须披露，不能以混合包装集合或虚构UUID代替。

- 选定流: 瓦楞运输纸箱
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_carton_s`
- 来源: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### 瓦楞运输纸箱 (`pack_carton_eo`)

一份真实完整的瓦楞纸板运输纸箱，限定实际构造和构型，不是纸箱、塑料袋、膜、内衬等包装的集合。相容原子Product流UUID仍待解析。记录真实纸板/瓦楞/层数构造、纤维组成、涂层/复合、湿态、内含胶黏剂/紧固件及供方范围；不预设通用纤维比例、处理、尺寸、重量或寿命。供货整箱内含组成随整箱计一次，真实另供衬件、胶带及其他材料各保互斥独立行及唯一上游归属。保留本卡按包装边界与原始协议定义的P/I/ER/S/EO角色，已有packaging_receipt_basis时依其执行；新供方身份不能改变事件定义。按本卡声明的Mass/kg保完整实测湿毛量及原事件/门/保管/批群，无论即时使用或留期末。保留期初期末空/附着/复用存量、内部复用及独立实测水料变化；不以存量、负荷或经济份额校正缩小毛流。真实制造/服务负荷另按原批群规则和唯一归一化归属一次；单纯毛接收或外发不产生新制造、采购负荷、供方链接或信用。绑定前须解析物理相容的纸箱身份/供方；身份缺口须披露，不能以混合包装集合或虚构UUID代替。

- 选定流: 瓦楞运输纸箱
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_carton_eo`
- 来源: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### 木制运输托盘 (`pack_pallet_s`)

毛实物发运。仅随毛实物货物真实离开时适用；V=S 为完整包装质量，不随净销售/经济份额缩量。产品 Q 独立，包装皮重与硬币净质量分清。 本行仅为木制运输托盘这一个池。整份湿制品、一体盖/封口/内衬及组成只计一次，补充材料账须互斥；保留完整毛实物腿，不以存量校正耗用或分配负荷向量替代。

原生 Product/Mass 家族为工厂生产混合的已制造木制可搬运载货平台，备注也含围板/平台变体。此处仅为一种真实完整木托盘，非单独修补木板、固定欧标托盘、塑料架或整机资产。声明木材/紧固件/一体含水及真实新旧状态，不固定周转次数或寿命。整件内含组件不再采购，另供维修件仍须分列。

- 选定流: 木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_pallet_s`
- 来源: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### 木制运输托盘 (`pack_pallet_eo`)

对外空包装退回。仅真实向外部所有者退回制品，保留完整 V=EO、状态及交接回单。非内部复用，也不自动作共产品或避免采购信用。 本行仅为木制运输托盘这一个池。整份湿制品、一体盖/封口/内衬及组成只计一次，补充材料账须互斥；保留完整毛实物腿，不以存量校正耗用或分配负荷向量替代。

原生 Product/Mass 家族为工厂生产混合的已制造木制可搬运载货平台，备注也含围板/平台变体。此处仅为一种真实完整木托盘，非单独修补木板、固定欧标托盘、塑料架或整机资产。声明木材/紧固件/一体含水及真实新旧状态，不固定周转次数或寿命。整件内含组件不再采购，另供维修件仍须分列。

- 选定流: 木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_pallet_eo`
- 来源: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### 钢制币坯运输桶 (`pack_drum_s`)

毛实物发运。仅随毛实物货物真实离开时适用；V=S 为完整包装质量，不随净销售/经济份额缩量。产品 Q 独立，包装皮重与硬币净质量分清。 本行仅为钢制币坯运输桶这一个池。整份湿制品、一体盖/封口/内衬及组成只计一次，补充材料账须互斥；保留完整毛实物腿，不以存量校正耗用或分配负荷向量替代。

- 选定流: 钢制币坯运输桶
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_drum_s`
- 来源: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### 钢制币坯运输桶 (`pack_drum_eo`)

对外空包装退回。仅真实向外部所有者退回制品，保留完整 V=EO、状态及交接回单。非内部复用，也不自动作共产品或避免采购信用。 本行仅为钢制币坯运输桶这一个池。整份湿制品、一体盖/封口/内衬及组成只计一次，补充材料账须互斥；保留完整毛实物腿，不以存量校正耗用或分配负荷向量替代。

- 选定流: 钢制币坯运输桶
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_drum_eo`
- 来源: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

##### 废物流

###### 废聚乙烯硬币袋 (`pack_pe_w`)

独立废物出口。仅该包装池真实具有独立对外分流 Waste 出口时适用，V=W 为完整实测湿废物。如实际只有一条混合包装流，本条件分流交换不启用，W 改为 packaging_mixed_waste 中独立量测的非加总池子账；一实物出口绝不同时计分池和混合总量，处理/供方一次。 本行仅为聚乙烯硬币袋这一个池。整份湿制品、一体盖/封口/内衬及组成只计一次，补充材料账须互斥；保留完整毛实物腿，不以存量校正耗用或分配负荷向量替代。

- 选定流: 废聚乙烯硬币袋
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_pe_w`
- 来源: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### 废瓦楞运输纸箱 (`pack_carton_w`)

独立废物出口。仅该包装池真实具有独立对外分流 Waste 出口时适用，V=W 为完整实测湿废物。如实际只有一条混合包装流，本条件分流交换不启用，W 改为 packaging_mixed_waste 中独立量测的非加总池子账；一实物出口绝不同时计分池和混合总量，处理/供方一次。 本行仅为瓦楞运输纸箱这一个池。整份湿制品、一体盖/封口/内衬及组成只计一次，补充材料账须互斥；保留完整毛实物腿，不以存量校正耗用或分配负荷向量替代。 原生废物流/质量为厂内全球实际包装过程中产生的纸板包装边角料和破损纸箱，处理未指定。仅绑定该包装路线兼容的单独收集纸板出口；其他来源或混合出口仍须保留其真实独立未绑定/兼容身份。原生备注含行业平均估算，本方法不将其采作数量、成品率或场址事实；须独立测量完整湿态废物及互斥组成。

- 选定流：包装废弃物，纸板 `72270223-04b1-4986-a546-94e5a0821317`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_carton_w`
- 来源: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### 废木制运输托盘 (`pack_pallet_w`)

独立废物出口。仅该包装池真实具有独立对外分流 Waste 出口时适用，V=W 为完整实测湿废物。如实际只有一条混合包装流，本条件分流交换不启用，W 改为 packaging_mixed_waste 中独立量测的非加总池子账；一实物出口绝不同时计分池和混合总量，处理/供方一次。 本行仅为木制运输托盘这一个池。整份湿制品、一体盖/封口/内衬及组成只计一次，补充材料账须互斥；保留完整毛实物腿，不以存量校正耗用或分配负荷向量替代。

- 选定流: 废木制运输托盘
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_pallet_w`
- 来源: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### 废钢制币坯运输桶 (`pack_drum_w`)

独立废物出口。仅该包装池真实具有独立对外分流 Waste 出口时适用，V=W 为完整实测湿废物。如实际只有一条混合包装流，本条件分流交换不启用，W 改为 packaging_mixed_waste 中独立量测的非加总池子账；一实物出口绝不同时计分池和混合总量，处理/供方一次。 本行仅为钢制币坯运输桶这一个池。整份湿制品、一体盖/封口/内衬及组成只计一次，补充材料账须互斥；保留完整毛实物腿，不以存量校正耗用或分配负荷向量替代。

- 选定流: 废钢制币坯运输桶
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack_drum_w`
- 来源: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### 单条混合包装废物出口 (`packaging_mixed_waste`)

仅真实各池通过一条混合外部收集流离开时适用。保留一个原子 Waste 交换、独立称量完整 V，各 PE/纸箱/木/钢池 W 为采集协议非加总子账。同物料事件的条件分流 W 卡不启用；分池 W 之和须与总量核对，污染物/水分分别识别，不另加组成处理/供方。

原生 Waste/Mass 为厂内产生混合包装废弃物，混合材质及损坏/边角包装语境。仅绑定一条实际对外收集的混合包装废物出口；保留各包装池 W 子账及独立量测总量。分流 PE、木、钢或纸废物不绑定此混合身份，不将组成再加为外部 Waste 交换；接收/处理/供方只计一次。

- 选定流: 混合包装废弃物 `cf748dc8-a0d3-411f-aab6-168e7ee54a6e`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_packaging_mixed_waste`
- 来源: `ilcd-attributional-2010`

###### 拆下木托盘板 (`repair_wood_out`)

仅真实分流拆下木板废物适用，完整湿质量及污染保留；若进入单条混合出口，其 W 为木池非加总子账、不再增外部 Waste 交换。

- 选定流: 拆下木托盘板
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_repair_wood_out`
- 来源: `ilcd-attributional-2010`

###### 拆下托盘钢钉 (`repair_nail_out`)

仅真实分流拆下钢钉废物，保留金属及污染；已入混合废物时仅保留钢子账、不再增外部交换。

- 选定流: 拆下托盘钢钉
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_repair_nail_out`
- 来源: `ilcd-attributional-2010`

###### 放行后弃置铜镍硬币 (`service_rejected_coin`)

仅储存、退回或放行后工作中真实单独弃置整币流适用。保留完整毛质量、新增水/污染/损失、原批群及真实处置。重工须制造商/规格许可和真实复验/验收；实际未获准或失败作业及废物仍记录，不假损伤恢复、不造 Q、不移除原制造/已执行服务负荷。 实际销毁/变形以及外部回收/处理交接和能耗即使未经授权或失败仍须保留。废物离场不是新产品放行，也不抹除历史制造或已执行服务。

- 选定流: 放行后弃置铜镍硬币
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_service_rejected_coin`
- 来源: `ilcd-attributional-2010`

###### 废服务清洁水 (`service_washwater_waste`)

仅真实单独收集的整份水性服务清洁出口适用，独立量测完整湿质量、体积/密度、真实化学品/固体及接收方。内含水/离子为非加总子账，真实天然水释放及外部处理分清、一次归属。

- 选定流: 废服务清洁水
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_service_washwater_waste`
- 来源: `ilcd-attributional-2010`

##### 基本流

###### 排入真实空气的 H2O 水蒸气 (`service_h2o_out`)

实际蒸发/解吸及真实反应生成的普通水先按来源分别量测，再合成完整毛出口。自然储存搬运失水须纳入，不虚构额外操作。液滴、废水及游离/结构水分清，不能一个残差拟合多个未知。

仅普通 H2O 水蒸气，非液滴、冰、重/氚水或植物蒸腾。原生 Elementary/Mass，CAS 7732-18-5，精确媒体为 Emissions / Emissions to air / Emissions to air, unspecified。未固定品级、供方地区或工艺数量。完整同义词/备注含更宽标签，不覆盖本行真实物种、相态、同位素/来源或媒体。仅对本方向独立取证相容真实物种/状态使用，不由总元素、COD、VOC、PM、NOx/SOx、相变或残差推定。受纳媒体不符须另核实身份。

- 选定流: 水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 引用第 8 节本行原批群同一次完整毛实物结果；不再次归一化。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_service_h2o_out`
- 来源: `ram-minting-process`; `usmint-coin-production-2021`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_subdivide | all burden coordinates | 采用归因制造目标，先判断是否真实需要分配。先专属归属批次/工具/操作/服务，并进行真实或有依据的虚拟细分，再分剩余负荷。工业铸币描述本身不授权 LCA 分配因子。 | ilcd-attributional-2010 |
| a_causal | each residual inseparable exchange | 对剩余不可分交换及全部共功能，在真实过程状态逐交换识别并定量确定性物理因果，论证驱动量和分母。不任意选质量/件数/时间/能量，也不所有坐标共用一因子。全部真实实物毛腿保持完整并独立。 | ilcd-attributional-2010 |
| a_residual | genuinely remaining joint-process burdens | 仅细分及逐交换因果后有据残余共同过程负荷可用同状态、真实共同过程门或相应处理输入门的同期实际市场价值。保留全部共功能、价格/门调整/货币/时期及敏感性。面额、贵金属价值或零售币价不作环境分母或默认分配键。不固定回收比，也不自动给避免原生金属信用。 | ilcd-attributional-2010 |
| a_waste | ordinary failures and material/service losses | 普通制造废物、剔除币、样品及处理即使外运或出售仍归原制造/服务。向量转移 T_other 必须有真实独立其他功能/批群、正当分配/交接及回单，只应用一次；仅外送不够。实物毛量仍完整。更广回收/系统模型决定需本制造规则之外的证据。 | ilcd-attributional-2010 |

## 8. 前景数据采集、计算与质量规则

每个协议只采集并保留未除原读数、存量和所有权向量。aggregation_rule 字段仅声明最终结果视图基准，不对采集原字段作除法；第 8 节 single_quotient 为唯一归一化，完整毛 V 与独立耗用/负荷坐标所有权明确分清。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | p_mint | finished_coin | release and weighing | 原批群/配置/合金/表面状态; 原始毛/皮/净 kg; 校准/不确定性; 完整币件数; 首放/hold/失败/破坏样品; 期初期末已放行 FG; 日期/授权验收记录; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 用校准秤称量同配置已放行完整净币，包材/游离液独立去皮；核对实数件数/表面/含水/规格及首次放行，禁止默认单枚质量。 | kg; Item(s) | 每批及每次首放 | 完整制造观察期，含失败及零产出 | 本门实际同配置原批群 | 每参考流 | 校准证书/称量原件/规格及验收/批群唯一性/不确定性 |
| cp_blank_receipt | p_mint | blank_receipt | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_mint_power | p_mint | mint_power | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | MJ | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_mint_water | p_mint | mint_water | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_mint_humidity_in | p_mint | mint_humidity_in | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_mint_h2o_out | p_mint | mint_h2o_out | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_service_power | p_service | service_power | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | MJ | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_service_water | p_service | service_water | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_service_humidity_in | p_service | service_humidity_in | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_service_h2o_out | p_service | service_h2o_out | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_citric_powder | p_mint | citric_powder | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_coin_cleaner | p_mint | coin_cleaner | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_antitarnish_additive | p_mint | antitarnish_additive | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_stamping_lubricant | p_mint | stamping_lubricant | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_protective_nitrogen | p_mint | protective_nitrogen | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_furnace_natural_gas | p_mint | furnace_natural_gas | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | m3 | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_external_heat | p_mint | external_heat | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | MJ | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_external_steam_mass | p_mint | external_steam_mass | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_external_hotwater_mass | p_mint | external_hotwater_mass | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_condensate_return | p_mint | condensate_return | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_hotwater_return | p_mint | hotwater_return | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_coin_die_asset | p_mint | coin_die_asset | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_press_asset | p_mint | press_asset | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_replacement_bearing_in | p_mint | replacement_bearing_in | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_removed_bearing_out | p_mint | removed_bearing_out | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_maintenance_oil_in | p_mint | maintenance_oil_in | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_spent_oil_out | p_mint | spent_oil_out | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_released_coin_internal | p_service | released_coin_internal | internal matching record | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_coin_dispatch | p_service | coin_dispatch | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_coin_customer_return | p_service | coin_customer_return | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_rejected_coin_waste | p_mint | rejected_coin_waste | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_metal_fines_waste | p_mint | metal_fines_waste | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_spent_cleaning_liquid | p_mint | spent_cleaning_liquid | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_coin_wash_sludge | p_mint | coin_wash_sludge | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_copper_air | p_mint | copper_air | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_nickel_air | p_mint | nickel_air | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_cuion_freshwater | p_mint | cuion_freshwater | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_niion_freshwater | p_mint | niion_freshwater | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_gas_co2normal | p_mint | gas_co2normal | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_gas_co | p_mint | gas_co | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_gas_no | p_mint | gas_no | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_gas_no2 | p_mint | gas_no2 | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_gas_methane | p_mint | gas_methane | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_gas_so2 | p_mint | gas_so2 | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_gas_n2air | p_mint | gas_n2air | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_gas_o2air | p_mint | gas_o2air | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_oxygen_ingress | p_mint | oxygen_ingress | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_nitrogen_ingress | p_mint | nitrogen_ingress | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_ambient_co2_in | p_mint | ambient_co2_in | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_argon_in | p_mint | argon_in | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_argon_out | p_mint | argon_out | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_pack_pe_p | p_service | pack_pe_p | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence ；包装接收来源；付费/非采购依据；所有者/保管者；同件原外发ID | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。  仅对包装按packaging_receipt_basis分类，单独非采购接收归I，不得虚构ER或X。| kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_pack_pe_i | p_service | pack_pe_i | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence ；包装接收来源；付费/非采购依据；所有者/保管者；同件原外发ID | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。  仅对包装按packaging_receipt_basis分类，单独非采购接收归I，不得虚构ER或X。| kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_pack_pe_er | p_service | pack_pe_er | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_pack_pe_s | p_service | pack_pe_s | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_pack_pe_eo | p_service | pack_pe_eo | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_pack_pe_w | p_service | pack_pe_w | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_pack_carton_p | p_service | pack_carton_p | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence ；包装接收来源；付费/非采购依据；所有者/保管者；同件原外发ID | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。  仅对包装按packaging_receipt_basis分类，单独非采购接收归I，不得虚构ER或X。| kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_pack_carton_i | p_service | pack_carton_i | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence ；包装接收来源；付费/非采购依据；所有者/保管者；同件原外发ID | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。  仅对包装按packaging_receipt_basis分类，单独非采购接收归I，不得虚构ER或X。| kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_pack_carton_er | p_service | pack_carton_er | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_pack_carton_s | p_service | pack_carton_s | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_pack_carton_eo | p_service | pack_carton_eo | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_pack_carton_w | p_service | pack_carton_w | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_pack_pallet_p | p_service | pack_pallet_p | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence ；包装接收来源；付费/非采购依据；所有者/保管者；同件原外发ID | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。  仅对包装按packaging_receipt_basis分类，单独非采购接收归I，不得虚构ER或X。| kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_pack_pallet_i | p_service | pack_pallet_i | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence ；包装接收来源；付费/非采购依据；所有者/保管者；同件原外发ID | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。  仅对包装按packaging_receipt_basis分类，单独非采购接收归I，不得虚构ER或X。| kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_pack_pallet_er | p_service | pack_pallet_er | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_pack_pallet_s | p_service | pack_pallet_s | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_pack_pallet_eo | p_service | pack_pallet_eo | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_pack_pallet_w | p_service | pack_pallet_w | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_pack_drum_p | p_service | pack_drum_p | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence ；包装接收来源；付费/非采购依据；所有者/保管者；同件原外发ID | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。  仅对包装按packaging_receipt_basis分类，单独非采购接收归I，不得虚构ER或X。| kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_pack_drum_i | p_service | pack_drum_i | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence ；包装接收来源；付费/非采购依据；所有者/保管者；同件原外发ID | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。  仅对包装按packaging_receipt_basis分类，单独非采购接收归I，不得虚构ER或X。| kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_pack_drum_er | p_service | pack_drum_er | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_pack_drum_s | p_service | pack_drum_s | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_pack_drum_eo | p_service | pack_drum_eo | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_pack_drum_w | p_service | pack_drum_w | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_packaging_mixed_waste | p_service | packaging_mixed_waste | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_repair_wood_in | p_service | repair_wood_in | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_repair_steel_in | p_service | repair_steel_in | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_repair_wood_out | p_service | repair_wood_out | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_repair_nail_out | p_service | repair_nail_out | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_service_rejected_coin | p_service | service_rejected_coin | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_service_washwater_waste | p_service | service_washwater_waste | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_spent_striking_die | p_mint | spent_striking_die | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |
| cp_retired_coin_press | p_mint | retired_coin_press | raw physical event and linked ownership | 事件/原批群/配置/H; 本卡方向及实物事件; 未除原始量/单位/速率或累计标识; 完整毛 V; 相态/组成/媒体/密度证据; 期初期末 raw/WIP/非 WIP/FG/在装充量; 每流继承向量; 一次供方/处理所有权; 失败/hold/重工/缺失; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | 逐本卡真实事件采用校准秤/表及原始交接单；独立验证组成/媒体及速率积分/密度状态，不虚构量、缺失归零或再次采购。包装每池独立采 P/I/ER/毛 S/EO/W 与空/附着/复用湿库存，混合 W 总量及分池非加总量各独立测，实际整件/补充件水桥互斥。 | kg | 每真实事件及期初期末 | 制造全期或原批群服务 H，含全部失败/闲置/清理 | 与本卡方向/流程相同实物门，批群及存量互斥 | 每参考流 | 校准/供货与交接原件/SDS或物种分析/相态媒体/存量盘点/处理回单/完整性与不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_units | all inventory rows | 归一化前保留原读数；仅真实单位适用时 g 按 0.001 转 kg、kWh 按 3.6 转 MJ，保留各行原生广延属性。真实速率才按实测时间积分，已积分气液体积不再乘时间。体积转质量须独立量测该物质/状态密度，非泛用次级属性系数。 | raw_value; raw_unit; state; duration; density | U_j | ilcd-attributional-2010 |
| physical_consumption | ordinary consumed-material coordinates | 同一互斥实物池采用 N_j = O_j + U_j - C_j - H_j，H_j 仅为有据合法非目标实物交接。期初期末原料/WIP/非 WIP 物料存量仅计一次。已经存量校正的耗用直接采用，不再加 O-C。N 与完整毛腿 V 及环境向量分清；普通废物不是 H_j，不能删其内含耗用。 | O_j; U_j; C_j; H_j; stock_basis | N_j | ilcd-attributional-2010 |
| manufacturing_vectors | p_mint burden coordinates | A_make_c = B_open_c + U_burden_c - B_close_c - T_other_c。B 为原料/WIP 逐流继承向量及仅未用/未归属非 WIP 物料/服务充量，不含全部已放行 FG。U 一次含各相容上游供方及实际制造/测试/普通废物处理负荷，含失败/闲置/清理/重工/Q 零。已放行 FG 留库不扣生产负荷。内部向量匹配，T_other 需真实其他功能/批群及正当回单。 | B_open_c; U_burden_c; B_close_c; T_other_c | A_make_c | ilcd-attributional-2010 |
| service_vectors | p_service burden coordinates | A_service_c_H = S_open_unused_c + U_service_c_H - S_close_unused_c - T_service_other_c_H。FG 留库仍保留原批群已经执行服务，仅未用/未归属服务或物料充量结转，非已做工作。FG 期初期末/退回携带历史制造和服务向量作保管核对，不将留库已放行 FG 当新制造或扣其生产。如提出另一净交付模型须记录真实毛 G/R 及原交付 reverse 桥；本 PCR 固定首放，不能静默替换。 | S_open_unused_c; U_service_c_H; S_close_unused_c; T_service_other_c_H | A_service_c_H | ilcd-attributional-2010 |
| packaging_balance | each physical packaging pool | 对 PE 袋/纸箱/木托盘/钢桶各池独立使用 O_pack + P + I + ER + F_in - X_in = C_pack_wet + 毛 S + EO + W + F_out - X_out。O、C 各含完整空置、附着 WIP/FG 和可复用湿态存量一次。F_in/F_out 是独立实测、在其他毛项之外进入/离开该池的真实新增物料/水/零件贡献。X_in/X_out 仅扣除已在其他同侧实际进/出流项中证明重叠的部分；存量、对侧流、卡片存在或未经测量的假定均不是 X。实际新增维修物料/水留在期末时仍同时保留真实流入与完整期末湿重。采用湿态整件，或互斥实测组分/水分解，并建立在合并时抵消的匹配内部组分至整件桥接；不得整件加组分，也不以退回净减毛接收/发运。单一实际混合废物流出口选择独立称量总量，或完整独立测得的 origin-W 分区，二者共用唯一供应方与非加和组成账；不得两者相加，也不得用残差强补未知份额。真实独立分流出口仍保持独立。 | O_pack; P; I; ER; C_pack_wet; S; EO; W; F_in; F_out; X_in; X_out | physical_pool_closure | ilcd-attributional-2010 |
| mass_species_closure | manufacture and FG and consolidated gates | 制造、FG 及合并门独立核对完整毛实物质量及相关 Cu/Ni/C/H/O/N/其他真实元素，含非 WIP 原料/WIP/FG、资产/零件/充液、每种湿包装、热载体及全部真实进出气液固物种。游离水、反应水、相态水及结构水分清，反应水须反应证据。含量/总元素/COD/VOC/PM 不是分子身份。完整湿存量及真实入流同时存在，一残差不能拟合两个未知；整空气或整份废物与组成不叠加。 每个物理门口按各真实质量坐标核对完整期初实体 + 外部毛投入 + 匹配内部投入 = 完整期末实体 + 外部毛产出 + 匹配内部产出，再抵消内部项。净合格币 Q 排除包装/游离水，而物理湿态 FG 保留独立测得的附着水/污染物桥接。资产接收/退役、已安装零件/填充物及每项继承交换向量，与消耗 N 或归属 A 分账。 | gross_legs; wet_stocks; species; assays; state; independent_measurements | closure_residual_and_uncertainty | ilcd-attributional-2010 |
| single_quotient | all inventory rows | 对原批群 c 及观测 H，各坐标只选择一个未除分子：各毛披露卡采用完整真实毛实物 V_j_c_H；独立标识耗用料坐标采用目标 N_j；独立环境负荷坐标采用 A_make_c 或 A_service_c_H。result_j_c_H = numerator_j_c_H / Q_c 只执行一次。卡片数量及协议汇总仅引用同一结果；毛 V 不再存量校正或经济分配，不连续除两次，实物/负荷坐标不相加。参考输出及匹配内部交接为 1 kg。Q_c=0 保留全部真实原负荷、不给单位结果；批群/配置/观测期分开。 H 仅选择实际观察到的服务区间，所累积负荷不得再除 H。对仍持有、退回或后来失败的币，Q_c 仍为原首次放行质量。 | V_j_c_H; N_j; A_make_c; A_service_c_H; Q_c; cp_release | result_j_c_H | ilcd-attributional-2010 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all bound/unresolved cards | 保存实际配置、所有原生限制/官方中文名及真实 provider 相容性，空 UUID 保留具体流与适用性缺口。 | 完整直读/供方规格/物种化验/许可和状态证据 |
| dq_time | all cohorts and service | 固定观察期及原 Q_c/H；保存所有失败/零产出/未获准/重工负荷与处置。已执行服务不因 FG 留库扣。 | 事件台账/电表和原交付退回/验收/stockvectors |
| dq_balance | physical and burden coordinates | 完整毛实物不经济缩量；每包材六腿/单混废互斥/真实增减 F 与其他同侧重复 X/fullwetstocks/工具资产与服务分账，逐流向量闭合；未知残差保持未决。 应用 packaging_balance 的 F/X 定义与湿态整件/组分互斥；不得扣存量或对侧项。 | 独立实测/stocktake/assay/交接与负荷所有权/不确定性 |
| dq_sources | each modelling rule | 原件取得/复用与本次提取/实际 read/人工适用性分别说明，失败记录保留；工业来源不作 LCA 分配权威；不得从名义例值编工厂量。 | 完整原文及上下文/反例/原件与提取哈希/适用性限定 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_identity | reference and each adopted flow | 核实完整已制造单金属铜镍成币终端及真实币坯供货状态，逐项核实原生 basename/同义词/备注/CAS/品级/路线/形态/地区/媒体/type/属性限制和官方中文显示。分类或名称本身不足，硬材质/相态/路线冲突阻止该绑定。不用货币分母或次级质量推出默认 M。 | ram-five-cents; ram-coin-making-2015 |
| v_complete | all actual operations and rows | 双语及投影须保留每个真实物料/制剂/水/能/工具/包装/废物/物种事件，以及全部原字段/每卡十字段/限定/描述/协议/计算 Inputs、Output、source_ids/质量证据，含完整标题及祖先适用范围。未知关系保留待审，不编零或宣称通过。 | ilcd-attributional-2010 |
| v_accounts | all gates and coordinates | 核实首放 Q_c 一次、期末已放行 FG 处理、原批群实际服务、包装完整毛六腿及混合/分流互斥、湿存量/真实增减 F 与其他同侧重复 X、原料/WIP/非 WIP 继承向量、内部交接抵消、原生分子单位、实物/元素/物种闭合及一次归一化。仅外售/外送不能扣负荷或给信用。 应用 packaging_balance 的 F/X 定义与湿态整件/组分互斥；不得扣存量或对侧项。 | ilcd-attributional-2010 |
| v_no_defaults | factory instance | 不得提供默认合金百分比、单枚重量、厚度/直径、压力/速度/温时、配方、成品率、寿命、磨损、检验阈值或认证数值。实际放行后作业须有真实规格许可/复验/验收/处置；实际未获准或失败事件仍完整入账。 | ram-minting-process; usmint-coin-production-2021 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 有据配置/边界的首次放行制造向量及另账实际服务；实物毛披露/耗用活动/环境负荷三个坐标明确区分 |
| allowed_use | 同配置/合金/表面/终端/供货状态/时期/上游相容的归因制造研究 |
| excluded_use | 货币购买力或面额比较; 默认寿命/磨损/回收credit; 未压印/双金属/包镀/贵金属/精制分支; 未证实 cradle-to-gate 完整性 |
| required_metadata | 制造商/场址/报告期; 声明单一均质单金属铜镍配置及真实合金含量; 未包镀/无复合层/非双金属表面状态; 真实币坯供方及已完成上游工序; 真实退火/清洗/整边/润滑/压印/测试顺序; 真实规格验收与净质量校准/皮重; 首放批群 Q_c 及观测服务期 H; 完整原料/WIP/非 WIP 负荷向量和已放行 FG 毛量/退回账; 整份制剂组成及厂内配制边界; 实际能源/电网/热载体状态及供方约定; 每包装池六腿及完整湿库存; 实际物种/相态/媒体及独立元素闭合; 资产/模具服务和真实新旧维修件/充液; 全部失败/未获准/启停/闲置/清理/Q 零作业; 细分/因果/残余共同门证据及不确定性 |
| required_quality_disclosure | 明确工程与科学/翻译审查不同，原件支持范围、ordinary UUID/provider 缺口、真实核心 hold、未测/未知及不确定性；不得由 nominal 或检查结果称全覆盖 |
| update_trigger | 产品/合金/表面/供货币坯状态/实际制造终端、原生身份、Q 门、原批群服务、供方或处理边界/材料物种变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD, CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Coin 子类及相邻首饰/其他制品分类语境；非方法认可或创建命令。 |
| ram-five-cents | official_guidance | Royal Australian Mint, Five Cents. https://ramint.gov.au/collect/national-coin-collection/circulating-coins/five-cents | 完整铜镍流通硬币正面产品身份；名义成分/尺寸/数量不强加通用工厂实例。 |
| ram-coin-making-2015 | official_guidance | Royal Australian Mint, The coin-making process, educational factsheet (2015 PDF metadata), complete pp.1–2. https://www.ramint.gov.au/sites/default/files/2025-04/factsheets-coin-making-process.pdf | 供货币坯装桶入厂及后续整币压印/包装终端；仅环境工具/服务采集语境，不转移设计或操作参数。 |
| ram-minting-process | official_guidance | Royal Australian Mint, Minting process. https://www.ramint.gov.au/collect/coin-production/minting-process | 整边/压印及检验/计数/装袋/储存区分；精制/收藏币处理仅反例语境，非通用流通币路线或数量配方。 |
| ram-about-coins-2015 | official_guidance | Royal Australian Mint, About our coins, complete three-page educational factsheet. https://ramint.gov.au/sites/default/files/2025-04/factsheets-about-australian-coins.pdf | 铜镍已制造硬币证据及相邻银铜、铝合金、非圆形反例；历史头像及名义数值非默认或当前认可。 |
| usmint-coin-production-2021 | official_guidance | U.S. Mint, Coin Production, Stephanie Meredith with Denver/Philadelphia staff, April 2021; current full article. https://www.usmint.gov/learn/production-process/coin-production | 条件性真实退火/淬冷/清洗/整边/压印/剔除/包装结构及卷材/外购币坯状态区分；不复制机器参数、剂量或主张同 SKU。 |
| royalmint-blank-bank | official_guidance | The Royal Mint Museum, From Blank to Bank exhibition. https://www.royalmint.com/the-royal-mint-experience/explore-the-exhibition/from-blank-to-bank/ | 完整币坯至已制造成币语境及明确镀层钢/金属制备反例；不转移英国工厂配方、寿命、检测标准或设计指导。 |
| ilcd-attributional-2010 | handbook | European Commission JRC, ILCD Handbook: General guide for LCA — Detailed guidance, first edition March 2010, sections 7.9.2–7.9.3, PDF pp.275–292 / printed pp.255–272. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因多功能框架：细分/虚拟细分、逐交换确定性物理因果及真实残余共同门市场价值；本方法账务规则为显式产品方法推导，不主张手册提供铸币数据或自动回收信用。 |
