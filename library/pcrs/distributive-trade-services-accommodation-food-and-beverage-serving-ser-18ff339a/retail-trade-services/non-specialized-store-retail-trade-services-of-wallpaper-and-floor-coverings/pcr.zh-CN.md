---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-wallpaper-and-floor-coverings
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 原封单卷装自粘乙烯基壁纸柜台零售服务

## 1. 范围与适用性

本方法覆盖混合品类非专门实体店内原封单卷可移除自粘乙烯基壁纸的常温收货、立式存放/展示、原封检查、付款及柜台交付。技术类别内任何品牌、颜色/图案和卷材尺寸均可适用，每池分别固定实际供应商/SKU/BOM版本、批次及完整包装配置。核实批次匹配及实际面层、胶黏层、离型纸、卷芯与外包装。保留的厂家/零售商单卷案例及标称尺寸不提供完整BOM/LCI、纯PVC质量、密度、实测覆盖面积或现场库存。

排除纯纸壁纸、纺织地毯、塑料地砖/卷材地板、双卷、样片、按长度切售、店内展开/切割/涂胶、安装、墙面准备和下游使用/揭除。安装对花损耗属于下游，不得充当零售损耗因子。混合商品渠道须有门店经营/商品组合证据；品牌非独家或壁纸专门店不能证明该渠道。Target 页面辅助证明真实零售商品，不能证明某门店路线或库存。本受限路线采用人工搬运、自然通风，无服务本池的制冷剂/燃烧设备和购入热；须用设备/公用工程检查核实。不明或相反事实须在完整性成立前完成经审查的路线扩展。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-wallpaper-and-floor-coverings |
| classification_refs | CPC3.0 62163；较窄关系建议；实际映射由 classifications/mappings/cpc-3.0-to-pcr.yaml 及其已接受 ADR 管理，非本 manifest 自行确定。 |
| covered_products | 实际混合商品门店内原封单卷装自粘乙烯基壁纸柜台零售服务。 |
| excluded_products | 排除纯纸壁纸、纺织地毯、塑料地砖/卷材地板、双卷、样片、按长度切售、店内展开/切割/涂胶、安装、墙面准备和下游使用/揭除。安装对花损耗属于下游，不得充当零售损耗因子。混合商品渠道须有门店经营/商品组合证据；品牌非独家或壁纸专门店不能证明该渠道。Target 页面辅助证明真实零售商品，不能证明某门店路线或库存。本受限路线采用人工搬运、自然通风，无服务本池的制冷剂/燃烧设备和购入热；须用设备/公用工程检查核实。不明或相反事实须在完整性成立前完成经审查的路线扩展。 |
| representative_product | 原封单卷装自粘乙烯基壁纸柜台零售服务；按同质分层分别核验实际供应商、SKU/配置、批次及原始完整BOM。 |
| production_route | 收货 → 原卷立式储存/展示 → 封签/批号检查 → 柜台/支付 → 最终合格交付；失败、退回、支持和废物分开 |
| market_state | 原封可干式搬运的单卷，未安装、未切割、未使用 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 申明完整原封单卷的合格柜台零售交付 |
| How much | 1 个最终有效原卷服务，按 Item(s) 计数 |
| How well | 实际同 SKU/颜色/批次规格、原封完整且顾客验收有效；不暗示安装面积或安全批准 |
| How long or cycle | 一个预先申明的门店/SKU/配置报告池，含失败、待机及迟到修正 |
| reference_flow_link | service |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 一卷原封 单卷装自粘乙烯基壁纸的柜台零售服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 实际非专门商品组合/门店/渠道; SKU/颜色/批号及原封单卷配置; 供应完整面层/胶/离型纸/芯/包装 BOM 和来源向量; 实际收货量及运输门; Q 与原验收/退回 ID; 预定池日期; S/F/T/O 台账及组件模式; 实际表计/驱动量/供应范围; 全部资产型号/寿命版本; 支持合同/原分母; 实际废物接收方/组分/处理; 切割/湿法/HVAC/燃烧路线缺失或扩展; 未决身份与范围证据 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_count | service; failed_original; supplier_return | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Q 计实际完整原单卷服务；N_F_whole 和供应商移交独立计量，不能由标称面积换算。 |
| power_conversion | electricity | 净热值, 低位热值 | MJ | 1kWh=3.6MJ；先实测归属 K_trade，再最终/Q。 |
| mass_carriers | receipt_paper; carry_bag; external_damaged; roll_waste; paper_waste; film_waste | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 校准直测净 kg，记录水分/状态；由实际体积换算时才使用实测密度/温度，不能从标称长度/面积推 kg。 |
| clean_area | floor_cleaning | 时间 | h | 按签认实际外购工时计量floor_cleaning，排除物料、设备、差旅及处理；清扫面积次仅为分配驱动，不能按面积或工单数直接换算人工h。原始物理交换分别计量，不得按人工h再乘一次。 |
| selected_energy_identity | split_support_electricity | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | 所选交流电身份只有一个参考能量属性。实际归属量保留本行单位；其单位组中1kWh=3.6MJ。与另一能量单位来源合并或表达参考MJ交换前仅换算一次，同一分子不得重复换算，也不能推定供应组合。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际门店收货门供应原封卷，逐原卷保留供应制造/入场来源 |
| starting_condition_role | 前景保管门，增量服务排除成功商品 S 背景，包含不可逆 F |
| product_classification_scope | 62163 的较窄乙烯基墙面覆盖物子范围，非地毯/纸/地板覆盖物或全部渠道 |
| recursive_input_rule | 仅 failed_original/已核组件替换承接 F 供应背景，具名实物卫星量不递归采购商品；内部转移保留同一来源一次。 |
| upstream_dataset_requirement | 实际 SKU/BOM 整体/组件向量含收货运输；公用工程/首次使用耗材、完整资产包、有界场外服务及匹配废物处理；按实际阶段去重 |
| disclosure | 全部模块/供应边界、原分母/池/版本、S/F/T/O 责任人，无安装面积功能及剩余身份/数量/覆盖缺口 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_product_family | all inventory rows | 本PCR跨制造商及品牌适用于已声明产品类别。品牌、型号、目录货号、SKU及商品名用于识别实际研究数据，不是排他性准入条件。下述材质/功能、产品状态、明确规定的固定规格、工艺/渠道及门口条件仍须满足。不同供应商、配置、版次或包装BOM须分别建立同质分层及其匹配的原始背景向量，不得将混合SKU个数乘以一个标本向量。使用实际测量数量及有依据的换算。厂家案例中的质量、尺寸、额定参数、配方及包装声明仅作示例，绝不是全类别默认值或完整BOM/LCI。实际存在不同部件、支持清洁剂、包装或载体时，须在声明完整前提供具体原子卡、匹配属性/单位、采集方法及不重叠来源边界；超出已声明类别的实际状态或路线须另行审查扩展。适用性、身份或证据未知仍为未解决。本候选类别扩展不构成独立科学或翻译审核批准。 |  |
| scope_gate | all | 仅适用第1节原封单卷路线。任何拆封/部分使用的顾客退卷是独立实际状态，不能作为合格原封销售。按原 ID 隔离，记录整个载体实测 kg、剩余面层/离型纸/芯/包装量及接收者；须在完整性成立前完成状态特定卡和供应过程。当所有组件的原来源最终责任相同时，一个完整原包装仍是一个交换。 | un-cpc62163; tempaper-moire |
| service_gate | service | Q 是预先声明的同店/SKU/配置池内最终有效验收原卷 ID 的去重个数。顾客留存但无合格验收、拒收、重复尝试、单纯退款、内部转移和丢失库存均不是额外服务。即使无移动，撤销验收也从 Q 中删除原 ID；有效验收仍在的财务调整不改 Q。每个最终有效 ID 只计一次，不得再次扣撤销数。同一卷再售须修正原历史，不产生另一卷制造量。 | ghg-product-2011 |
| goods_responsibility | failed_original; service | 在同一门店收货门保留每个原供应向量 V_s，包括完整面层/胶/离型纸/芯/原包装和上游运输，并保留其原生单位收货量 q_s。逐原来源划分 S/F/T/O 责任且份额和为1：S 最终有效顾客商品；F 不可逆零售失败，包括确认丢失或外部留存未验收商品；T 指名继续负责的供应商/内部保管者；O 未结库存。增量零售服务排除 S 生产/入场向量，failed_original 仅纳入 F 一次；T/O 携带同一未分配来源至具名后续责任者，不能按零或删除。独立下游 GOODS 系统可另加 S 一次。全部收货只是原始保管核对，不是 F 以外的第二购入输入。 | ghg-product-2011 |
| component_gate | failed_original | 正常完整原卷仍是一个产品。U_whole 只含完整面层/胶/离型纸/芯/包装共享同一最终 S/F/T/O 责任的原来源。拆封包的组件责任分化时，须将其受影响原来源整体移出 U_whole 和 failed_original，取得供应商原组件数量/原生单位及组件清单向量，并为每个真实组件/状态建立输入卡。该组件卡自有原生单位分子 N_F_c_s=q_c_s*f_F_c_s 和背景分子 B_F_c_s=N_F_c_s*V_c_s，数量 N_F_c_s/Q 只连接 B_F_c_s/Q，不能挂在整卷身份。组件整体须核至原向量并守恒 S/F/T/O；不得用质量/数量份额拆分环境向量。供应商完整向量、具体卡、协议及双语同步未齐时，组件模式阻断。 | ghg-product-2011 |
| custody_gate | supplier_return; external_damaged; roll_waste | 采用仅商品库存：期初+收货+全部实物顾客退回+内部接收 = 期末商品+全部实物顾客毛交付+实物供应商移交+内部移出+报废转态+确认失踪+有符号未决差额。每个实物事件 ID 只进一项；毛交付已包含从未验收事件。无移动的验收撤销只重分类原事件。报废先把商品内部转为持有废物，之后废物出场才减持有废物，不能重复减商品；持有废物另核对。背景 T 不是实物转移。supplier_return 和 external_damaged 仅为具名不表征的实物保管卫星量，不得连同它们排除 failed_original。外部留存损坏须指明接收人/状态及 F 或继续 T 来源，不能自动记为零售商废物。 | ghg-product-2011 |
| support_gate | trade; custody; residual; capital; support | 须由具名卡和来源台账覆盖全部实际必要的场所、货架/手推车、灯/风扇、收银机/打印机/支付终端、路由器/安防摄像机/管理电脑、清扫及场外网络/支付/管理服务。每个完整生命周期产品包须有实际同质型号/BOM、安装、维修和末端处理清单及签认供应范围。其排除运行电力和其他列明资产；实际已含的独立资产运输须从单列运输模块剔除。型号、边界、数量或包内容不明均阻断完整性，不能用不相关维修质量之和代替整包。增加实际型号/配方/废物状态时，须先形成独立原子卡、协议并完成双语同步。 | jrc-retail-2013; ghg-product-2011 |
| power_gate | electricity | 按使用点 AC/MJ 记录，并要求实际供应方电压/地域/年份/组合/线损门。只合计互斥直接表计与已归属共享来源池。仅当父表确含子表时扣该子表一次，独立互斥表计不能再扣。只有清扫/服务包明确含相同实测活动时才排除承包商用电；保留零销售/待机/闭店耗电。该身份不提供燃料/热/制冷剂默认值。 | ghg-product-2011 |
| consumables_gate | receipt_paper; carry_bag; paper_waste; film_waste | 记录实际涂层收据纸净 kg，排除卷芯和独立外包装，涂层仍计纸。每池固定一种实际热敏纸规格和一种实际 LDPE 提袋配置。首次使用或未用物不可逆报废/确认丢失时承担制造和上游运输一次；从未使用的期初/采购/期末/转移/退供库存携带未分配来源。已用纸/在制品和复用袋继承原来源 ID/版本责任，不重复制造/入场运输。零售时从 S 卷拆除的供应外箱/薄膜，只有供应商组件清单向量支持时才单列来源组件，否则保留于处理范围确实覆盖它们的合格完整混合载体。不能既承担整包 F 又重复承担其来源组件。 | ghg-product-2011 |
| carrier_gate | roll_waste; paper_waste; film_waste | 废物卡采用实际外运批次直接称得的净 kg，保留互异来源/持有库存/事件 ID；不得再用期初/期末修正出场量。roll_waste 是完整报废原乙烯基壁纸卷载体，含实际剩余胶/离型纸/芯/包装；接收方签认须列出实际组分/状态及匹配的完整处理。仅照片/许可不足。已单独分离的纸/膜与整载体互斥；直接整载体净重不能再扣组分。不设默认危废类别、回收抵扣、处理产率或排放因子。废物、库存差额或供应范围不明保持未决，不能按零。原封储存不证明商品零释放：须保留供应包装/阻隔及场址事故证据；实际逸出/捕集须在完整性成立前形成物种/状态/路径特定原子卡和原来源责任，不采用标称通风/VOC 因子。 | ghg-product-2011 |
| transport_gate | trade; custody; residual; capital; support | 柜台交付排除顾客出行/送货入户/安装，原商品入场运输留在 S/F/T/O 收货向量。独立资产/维修/退役运输先归资产来源，再服从全部历史份额/版本替换。本 PCR 将未分配共享趟次的 capacity_unit 固定为 kg，但仅当实际合同、额定载荷及装车证据表明质量预留载荷容量是约束资源时适用，采用包含实际包装的实测预留毛载荷 kg。受体积/托盘位/地板空间约束的趟次不能以 kg 替代或另选单位，须先完成有固定容量规则及原子卡的受支持路线扩展。供应方已归属货运量保留实际原生单位及分配，分段数据仅核对，不能再乘容量份额。空驶及静止待机预留遵守 calc_transport。供应包以外的补货/退供/废物运输须在完整性成立前有实际运输原子卡。按组分/事件/时段/资产/阶段排除重叠，供应方 ID 不同本身不证明互斥。 | ghg-product-2011 |
| split_exchange_identity | all inventory rows | 每卡只允许一个准确交换身份及一个参考计量属性/单位；单位组不是第二属性，其他测量仅作换算证据。人工卡不再承接整包材料/能源/设备/废物。已列完整同质设备、原包装商品及真实混合废物可保留，但须有实际同范围背景/接收处理和完整组成，不得汇总异质物或选择项。同一原始交换只能计入一张核心卡或一个拆分来源；替换整包时撤销其全部旧表征，仅合并相同身份/属性/单位的互斥原始数量。实际额外物质、零件、燃料、制冷剂、排放及处理缺口必须具名新增双语卡和过程协议；未知不得置零或宣称完整。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| trade | 收货、展示及柜台交易 | required | 按实际存在；条件卡须有证据的缺失或已完成扩展 | 互斥来源与保管责任 | 1 Item(s) |
| custody | 实物保管卫星量 | required | 按实际存在；条件卡须有证据的缺失或已完成扩展 | 互斥来源与保管责任 | 1 Item(s) |
| residual | 外部剩余载体 | required | 按实际存在；条件卡须有证据的缺失或已完成扩展 | 互斥来源与保管责任 | 1 Item(s) |
| capital | 整资产生命周期责任 | required | 按实际存在；条件卡须有证据的缺失或已完成扩展 | 互斥来源与保管责任 | 1 Item(s) |
| support | 有界合同支持服务 | required | 按实际存在；条件卡须有证据的缺失或已完成扩展 | 互斥来源与保管责任 | 1 Item(s) |
| split_support | 清洁或维护的独立物理交换 | conditional | 实际发生；须逐项证明发生或不存在 | 互斥资源、设备与废物 | service |

### 过程：收货、展示及柜台交易（`trade`）

#### 输入

##### 产品流

###### 原封 单卷装自粘乙烯基壁纸零售包装整体 (`failed_original`)

仅 U_whole 同质完整原来源 F 包使用 N_F_whole；B_F_whole 不含组件分裂背景。将完整实际供应清单及入场运输向量绑定至每个原包 ID。组件责任分化部分须按 component_gate 排除并替换。本卡为背景来源当量产品输入，非第二次实物收货。

- 选定流：原封 单卷装自粘乙烯基壁纸零售包装整体
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：N_F_whole / Q
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_goods`
- 来源：`tempaper-moire`; `ghg-product-2011`

###### 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca` (`electricity`)

收货/展示/柜台及具名支持设备使用点用户侧交流电。K_trade 为经表计包含关系核对后由 calc_shared 归属的 kWh，不代表发电组合。

- 选定流：电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：3.6 * K_trade / Q
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_power`
- 来源：`jrc-retail-2013`

###### 实际固定规格的涂层热敏收据纸 (`receipt_paper`)

实际首次使用纸的净量含涂层，排除另称芯和外包装；保留纸卷/打印作业 ID 及已打印未交付在制品来源版本。不能用目录定量将纸米数转 kg。

- 选定流：实际固定规格的涂层热敏收据纸
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：(M_paper_first + M_paper_failed_unused) / Q
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_consumables`
- 来源：`ghg-product-2011`

###### 实际固定配置的成品 LDPE 壁纸提袋 (`carry_bag`)

仅实际零售新增 LDPE 袋适用。称量含实际一体提手/印刷的完整袋并核实配方/供应。无提袋交付须有缺失证据，不能假定每卷用袋。原供应外包装不在本卡。

- 选定流：实际固定配置的成品 LDPE 壁纸提袋
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：(M_bag_first + M_bag_failed_unused) / Q
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_consumables`
- 来源：`ghg-product-2011`

#### 输出

##### 产品流

###### 一卷原封 单卷装自粘乙烯基壁纸的柜台零售服务 (`service`)

恰好一个最终有效原封原卷的柜台服务；实物壁纸生产不是服务输出向量。遵守 service_gate 和 return_replacement。

- 选定流：一卷原封 单卷装自粘乙烯基壁纸的柜台零售服务
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_goods`
- 来源：`tempaper-moire`; `un-cpc62163`

### 过程：实物保管卫星量（`custody`）

#### 输出

##### 产品流

###### 实物退交供应商的原封 自粘乙烯基壁纸 单卷 (`supplier_return`)

仅不表征实物保管卫星量。实际签认供应商移交与继续 T/F 来源责任分开；T 不能生成实物移动。拆封退回须状态特定扩展。

- 选定流：实物退交供应商的原封 自粘乙烯基壁纸 单卷
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：N_supplier_handoff / Q
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_custody`
- 来源：`tempaper-moire`

###### 具名外部接收者留存的损坏未验收 自粘乙烯基壁纸 卷 (`external_damaged`)

外部接收者处实际剩余整卷载体，记录状态和全部剩余组件量；不是合格服务，也不自动是废物出场。绑定原 F/T 向量及接收方责任；拆封/部分使用状态须另有真实状态卡后才可完整。

- 选定流：具名外部接收者留存的损坏未验收 自粘乙烯基壁纸 卷
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：M_external / Q
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_custody`
- 来源：`ghg-product-2011`

### 过程：外部剩余载体（`residual`）

#### 输出

##### 废物流

###### 外部处理的完整报废乙烯基壁纸卷载体 (`roll_waste`)

实际出场报废原卷整体净重，仅含其实际剩余胶/离型纸/芯/包装。接收方须签认实际混合物和完整处理范围，另行出场组分不能计入。F 来源输入与本实物处置不同。

- 选定流：外部处理的完整报废乙烯基壁纸卷载体
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：W_roll / Q
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`ghg-product-2011`

###### 外部处理的废涂层热敏收据纸 (`paper_waste`)

分开收集的实际边料/失败收据及被报废的已打印库存，出场直接称量，核实涂层相容性和处理。不得暗含供应卷芯、净纸板或壁纸离型纸。

- 选定流：外部处理的废涂层热敏收据纸
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：W_paper / Q
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`ghg-product-2011`

###### 外部处理的废 LDPE 提袋薄膜 (`film_waste`)

仅 carry_bag 来源实际分收袋/膜，独立称量并绑定处理；不同树脂原包装或混合载体须另设实际卡，不能用本卡选择代替。

- 选定流：外部处理的废 LDPE 提袋薄膜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：W_film / Q
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`ghg-product-2011`

### 过程：整资产生命周期责任（`capital`）

#### 输入

##### 产品流

###### 实际建成的自然通风零售建筑整体 (`building`)

本卡只对应一种实际同质型号/BOM。F_building=sum_j f_j_h，只合计匹配实物实例，按 asset_allocation 使用面积小时。供应 V_j 覆盖此完整对象制造/安装/实际维修及末端处理，排除运行电力、其他列明资产及另加独立运输。须有签认完整包清单，不能由购买发票推定。建筑排除全部列明固定设施/电子设备；设施卡排除建筑。风扇/手推车等实际缺失须有检查证据。

- 选定流：实际建成的自然通风零售建筑整体
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：F_building / Q
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`jrc-retail-2013`; `ghg-product-2011`

###### 立式壁纸卷展示架 (`rack`)

本卡只对应一种实际同质型号/BOM。F_rack=sum_j f_j_h，只合计匹配实物实例，按 asset_allocation 使用面积小时。供应 V_j 覆盖此完整对象制造/安装/实际维修及末端处理，排除运行电力、其他列明资产及另加独立运输。须有签认完整包清单，不能由购买发票推定。建筑排除全部列明固定设施/电子设备；设施卡排除建筑。风扇/手推车等实际缺失须有检查证据。

- 选定流：立式壁纸卷展示架
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：F_rack / Q
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`jrc-retail-2013`; `ghg-product-2011`

###### 人工卷材搬运手推车 (`trolley`)

本卡只对应一种实际同质型号/BOM。F_trolley=sum_j f_j_h，只合计匹配实物实例，按 asset_allocation 使用实测 kg*h 额定载荷容量小时。供应 V_j 覆盖此完整对象制造/安装/实际维修及末端处理，排除运行电力、其他列明资产及另加独立运输。须有签认完整包清单，不能由购买发票推定。建筑排除全部列明固定设施/电子设备；设施卡排除建筑。风扇/手推车等实际缺失须有检查证据。

- 选定流：人工卷材搬运手推车
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：F_trolley / Q
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`jrc-retail-2013`; `ghg-product-2011`

###### 完整零售照明灯具 (`luminaire`)

本卡只对应一种实际同质型号/BOM。F_luminaire=sum_j f_j_h，只合计匹配实物实例，按 asset_allocation 使用面积小时。供应 V_j 覆盖此完整对象制造/安装/实际维修及末端处理，排除运行电力、其他列明资产及另加独立运输。须有签认完整包清单，不能由购买发票推定。建筑排除全部列明固定设施/电子设备；设施卡排除建筑。风扇/手推车等实际缺失须有检查证据。

- 选定流：完整零售照明灯具
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：F_luminaire / Q
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`jrc-retail-2013`; `ghg-product-2011`

###### 完整电动通风风扇 (`fan`)

本卡只对应一种实际同质型号/BOM。F_fan=sum_j f_j_h，只合计匹配实物实例，按 asset_allocation 使用面积小时。供应 V_j 覆盖此完整对象制造/安装/实际维修及末端处理，排除运行电力、其他列明资产及另加独立运输。须有签认完整包清单，不能由购买发票推定。建筑排除全部列明固定设施/电子设备；设施卡排除建筑。风扇/手推车等实际缺失须有检查证据。

- 选定流：完整电动通风风扇
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：F_fan / Q
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`jrc-retail-2013`; `ghg-product-2011`

###### 完整收银电脑终端 (`checkout`)

本卡只对应一种实际同质型号/BOM。F_checkout=sum_j f_j_h，只合计匹配实物实例，按 asset_allocation 使用完整忙碌加互斥预留待机/闭店设备秒。供应 V_j 覆盖此完整对象制造/安装/实际维修及末端处理，排除运行电力、其他列明资产及另加独立运输。须有签认完整包清单，不能由购买发票推定。建筑排除全部列明固定设施/电子设备；设施卡排除建筑。风扇/手推车等实际缺失须有检查证据。

- 选定流：完整收银电脑终端
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：F_checkout / Q
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`jrc-retail-2013`; `ghg-product-2011`

###### 完整热敏收据打印机 (`printer`)

本卡只对应一种实际同质型号/BOM。F_printer=sum_j f_j_h，只合计匹配实物实例，按 asset_allocation 使用完整忙碌加互斥预留待机/闭店设备秒。供应 V_j 覆盖此完整对象制造/安装/实际维修及末端处理，排除运行电力、其他列明资产及另加独立运输。须有签认完整包清单，不能由购买发票推定。建筑排除全部列明固定设施/电子设备；设施卡排除建筑。风扇/手推车等实际缺失须有检查证据。

- 选定流：完整热敏收据打印机
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：F_printer / Q
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`jrc-retail-2013`; `ghg-product-2011`

###### 完整电子支付终端 (`payment_terminal`)

本卡只对应一种实际同质型号/BOM。F_payment_terminal=sum_j f_j_h，只合计匹配实物实例，按 asset_allocation 使用完整忙碌加互斥预留待机/闭店设备秒。供应 V_j 覆盖此完整对象制造/安装/实际维修及末端处理，排除运行电力、其他列明资产及另加独立运输。须有签认完整包清单，不能由购买发票推定。建筑排除全部列明固定设施/电子设备；设施卡排除建筑。风扇/手推车等实际缺失须有检查证据。

- 选定流：完整电子支付终端
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：F_payment_terminal / Q
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`jrc-retail-2013`; `ghg-product-2011`

###### 完整网络路由器 (`router`)

本卡只对应一种实际同质型号/BOM。F_router=sum_j f_j_h，只合计匹配实物实例，按 asset_allocation 使用工位小时。供应 V_j 覆盖此完整对象制造/安装/实际维修及末端处理，排除运行电力、其他列明资产及另加独立运输。须有签认完整包清单，不能由购买发票推定。建筑排除全部列明固定设施/电子设备；设施卡排除建筑。风扇/手推车等实际缺失须有检查证据。

- 选定流：完整网络路由器
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：F_router / Q
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`jrc-retail-2013`; `ghg-product-2011`

###### 完整闭路安防摄像机 (`camera`)

本卡只对应一种实际同质型号/BOM。F_camera=sum_j f_j_h，只合计匹配实物实例，按 asset_allocation 使用工位小时。供应 V_j 覆盖此完整对象制造/安装/实际维修及末端处理，排除运行电力、其他列明资产及另加独立运输。须有签认完整包清单，不能由购买发票推定。建筑排除全部列明固定设施/电子设备；设施卡排除建筑。风扇/手推车等实际缺失须有检查证据。

- 选定流：完整闭路安防摄像机
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：F_camera / Q
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`jrc-retail-2013`; `ghg-product-2011`

###### 完整零售管理电脑 (`admin_computer`)

本卡只对应一种实际同质型号/BOM。F_admin_computer=sum_j f_j_h，只合计匹配实物实例，按 asset_allocation 使用工位小时。供应 V_j 覆盖此完整对象制造/安装/实际维修及末端处理，排除运行电力、其他列明资产及另加独立运输。须有签认完整包清单，不能由购买发票推定。建筑排除全部列明固定设施/电子设备；设施卡排除建筑。风扇/手推车等实际缺失须有检查证据。

- 选定流：完整零售管理电脑
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：F_admin_computer / Q
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：`jrc-retail-2013`; `ghg-product-2011`

### 过程：有界合同支持服务（`support`）

#### 输入

##### 产品流

###### 干式地面清扫人工服务 (`floor_cleaning`)

仅为实际外购人工工时，不包含材料、设备生命周期、电力、差旅、废物或处理。自营人工须记录工时用于核对，但不虚构外购服务交换。其他物理交换分别计入split_support，或具名扩展并与已有卡去重。

- 选定流：干式地面清扫人工服务
- 流属性/单位：时间 / h
- 数量规则：实测独占或一次归属的外购人工工时 / Q；cp_split_labour_support。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_labour_support`
- 来源：

###### 合同约定的场外网络连接服务 (`network_service`)

一种有明确边界的实际供应服务，保留合同/时间/任务 ID 及申明场外门的完整服务器/办公室/能源/资本清单。排除 capital/electricity 的店内设备/电力。须有签认服务量及来源范围，费用或供应方名称不是 LCI。本卡服务数量须按 calc_support 相应连接/尝试/任务公式归至全部购物篮受益方，并匹配受益方特定供应向量；已有供应归属只保留一次。供应方共享/待机来源池按 calc_support，不能按价格分配。

- 选定流：合同约定的场外网络连接服务
- 流属性/单位：时长 / h
- 数量规则：H_network_h / Q
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_support`
- 来源：`jrc-retail-2013`; `ghg-product-2011`

###### 合同约定的场外电子支付处理服务 (`payment_service`)

一种有明确边界的实际供应服务，保留合同/时间/任务 ID 及申明场外门的完整服务器/办公室/能源/资本清单。排除 capital/electricity 的店内设备/电力。须有签认服务量及来源范围，费用或供应方名称不是 LCI。本卡服务数量须按 calc_support 相应连接/尝试/任务公式归至全部购物篮受益方，并匹配受益方特定供应向量；已有供应归属只保留一次。供应方共享/待机来源池按 calc_support，不能按价格分配。

- 选定流：合同约定的场外电子支付处理服务
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：N_payment_h / Q
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_support`
- 来源：`jrc-retail-2013`; `ghg-product-2011`

###### 合同约定的场外零售管理服务 (`admin_service`)

一种有明确边界的实际供应服务，保留合同/时间/任务 ID 及申明场外门的完整服务器/办公室/能源/资本清单。排除 capital/electricity 的店内设备/电力。须有签认服务量及来源范围，费用或供应方名称不是 LCI。本卡服务数量须按 calc_support 相应连接/尝试/任务公式归至全部购物篮受益方，并匹配受益方特定供应向量；已有供应归属只保留一次。供应方共享/待机来源池按 calc_support，不能按价格分配。

- 选定流：合同约定的场外零售管理服务
- 流属性/单位：时长 / h
- 数量规则：H_admin_h / Q
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_support`
- 来源：`jrc-retail-2013`; `ghg-product-2011`

### 过程：支持作业独立物理交换 (`split_support`)

仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

#### 输入

##### 产品流

###### 未浸渍的干燥纤维素清洁擦巾 (`split_cleaning_wipe`)

仅计实际首次使用的此组成干擦巾；不得按地面面积推定耗量，也不得把使用后湿擦巾质量当作投入。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：未浸渍的干燥纤维素清洁擦巾
- 流属性/单位：质量 / kg
- 数量规则：此准确交换的实测独占或一次归属原始数量 / Q; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

###### 完整手动聚丙烯刷毛扫帚 (`split_cleaning_broom`)

一个同质完整扫帚型号，排除可替换耗材和运行能耗；仅应用一次持续寿命台账受益份额。维修属于独立事件交换。 仅含制造/初始安装，排除运行、维护和终端处理。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：完整手动聚丙烯刷毛扫帚
- 流属性/单位：物品数量 / Item(s)
- 数量规则：实测同质完整型号数量乘其持续寿命受益份额，仅一次 / Q; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

###### 已识别支持作业使用的交流电 (`split_support_electricity`)

仅计任何门店/资产/供应流尚未表征的实测支持用电。将上级电表划分成互斥区间/来源，同一kWh不得再加。记录电压/供应方，不推定电网组合。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

所选流使用单一净热值能量属性。清单保留声明的实测能量单位；能量单位组支持1kWh=3.6MJ。将kWh记录表达为参考MJ（含兼容来源合并）时仅换算一次，保留原kWh表计分子及来源归属，不能另加一次电力需求。

- 选定流：电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：此准确交换的实测独占或一次归属原始数量 / Q; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

###### 已识别支持访问的柴油轻型商用车运行服务 (`split_support_travel`)

仅适用于有实际记录的柴油轻型商用车访问，实测vehicle-km包括实际空驶调位。匹配完整车辆运行背景及全部受益方，其他动力/车型须另建卡。不得再加背景已含燃料或现有运输/资产供应已含行驶。此背景未含的静止怠速能耗须另立具名交换。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：已识别支持访问的柴油轻型商用车运行服务
- 流属性/单位：车辆行驶距离 / vehicle*km
- 数量规则：此准确交换的实测独占或一次归属原始数量 / Q; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

#### 输出

##### 废物流

###### 带有零售地面污物的使用后纤维素擦巾 (`split_used_wipe`)

实测实际外运完整载体，包括所含液体和污物；记录状态及接收方接纳。排除单独外运的游离液体。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：带有零售地面污物的使用后纤维素擦巾
- 流属性/单位：质量 / kg
- 数量规则：此准确交换的实测独占或一次归属原始数量 / Q; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

###### 实际废物交接时的干燥零售地面清扫物 (`split_sweepings`)

一种实际共同收集、组成有记录且处理相容的混合固体载体；不得汇总不同废物类别。排除独立外运的擦巾和退役工具。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：实际废物交接时的干燥零售地面清扫物
- 流属性/单位：质量 / kg
- 数量规则：此准确交换的实测独占或一次归属原始数量 / Q; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

###### 退役完整手动聚丙烯刷毛扫帚 (`split_broom_waste`)

扣除此前已拆出部件后的完整剩余扫帚；实测终端净质量采用与购置相同的持续寿命受益历史，不重复列组分废物。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：退役完整手动聚丙烯刷毛扫帚
- 流属性/单位：质量 / kg
- 数量规则：此准确交换的实测独占或一次归属原始数量 / Q; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| pool_allocation | all | 预先声明同店/SKU/配置报告池及全部受益方，保留失败/零销售/闭店时段。对每来源 k 以同一来源单位拆 active/idle/fixed 的 X_k_c，和须核至父来源，并逐类独立分配。柜台/打印/支付活动来源采用实测受益方处理秒；其待机来源采用预留待机设备秒，固定来源采用预留全状态设备秒，不采用零交易秒。每区间 i 开始前，把实际专属/预留销售及储存面积 A_h_i（m2）映射至全部受益方，含失败/零销售池及预留空货位，sum_h A_h_i 覆盖全部合格专属/预留面积；公共通道按相同份额。预留待机/全状态设备秒 R_k_c_h=sum_i device_seconds_k_c_i*A_h_i/sum_g A_g_i，包含闭店静止时段，面积总量须已知且为正；不得追溯改图抹除失败。货架/展示/照明/建筑待机/固定来源按实测占用/预留面积小时；路由/安防/管理来源按预留被支持工位小时。专属直接来源保留实测归属。不得相加不同维度驱动量，全部受益方须核回每个原 X_k_c。正来源对应必要驱动总量为零或不明时阻断完整性。 | ghg-product-2011 |
| asset_allocation | capital | 逐同质实物资产 j，对全部过去/未来受益方按同单位暴露量 f_j_h=e_j_h/L_j。建筑/架/灯/风扇采用占用/预留面积小时。收银/打印/支付采用完整寿命设备秒：e_j_h=busy_device_s_j_h+reserved_idle_device_s_j_h，忙碌与待机/闭店区间互斥；忙碌秒按实际受益处理份额，待机/闭店秒按 pool_allocation 预定 A_h_i 面积图。包含零交易预留时间，不能相加重叠固定与活动暴露。路由/安防/管理电脑采用预留被支持工位小时。手推车采用 kg*h 额定载荷容量小时：逐实测作业 i，以各受益方实际装载毛 kg 份额归属其真实额定 C_j_kg*duration_i_h，空返沿用同一作业预留；闲置/闭店容量 C_j_kg*idle_duration_i_h 按预定 A_h_i 份额。须有实际额定载荷、整包载荷称重及全部区间预留，不能用销售地面面积小时代理搬运暴露。L_j 为对应同单位的预计寿命总暴露，保持 sum f<=1 并显式保留未分配暴露。寿命/BOM/供应修订须以 f_new_j_h*V_new_j-f_old_j_h*V_old_j 替换每个历史分子。实际退役时 E_j=sum_all_h e_actual_j_h，f_final_j_h=e_actual_j_h/E_j，替换全部历史分配。残差1-sum_old_f仅核对；不重启制造，末端载体与资产独立运输均只乘相同 f 一次。 | ghg-product-2011 |
| return_replacement | all | 迟到退货/验收撤销以实际事件日期替换原池 Q、全部原运行/资本/运输分子及 S/F/T/O 责任版本，先撤销旧归一化版本再装订新版本。退回再售商品只保留一个原供应向量。零输出池保留为不可归一化原清单，并纳入预先固定的同配置报告池；全零输出池不能发布每1服务归一化清单。不设经济抵扣，不按售价分配。 | ghg-product-2011 |
| completion_allocation | all | calc_completion 为强制步骤：把每个外部归一化模块恢复到有证据的原始分母/池/版本，按实际组分/事件/时段/资产/生命周期阶段及来源 ID 只剔除已证实重叠。逐行合计相同交换/属性/单位的原核心分子（含 failed_original 仅对应的完整原卷来源、另行完成的组件卡和 AC）与互斥外部分子，最后只除共同 Q 一次。不得相加 kg 与 MJ、原量与归一化量，不把 S 商品背景纳入本服务，不重复 F。全部必要实际模块具备原子双语卡、协议、身份/供应证据及相容原量恢复前，必须披露为部分增量清单并拒绝完整零售服务用途。 | ghg-product-2011 |
| split_attribution | floor_cleaning; split_cleaning_wipe; split_cleaning_broom; split_used_wipe; split_sweepings; split_broom_waste; split_support_electricity; split_support_travel | 优先直接独占计量；共用清洁事件按实际全受益清洁面积次归属每种原始物理数量，维修按实际工单支持周期全部受益方的原设备物理驱动分配。保留闲置、失败、关闭及零驱动负荷并按原规则结转，不能用销量删减。每项新工具的制造/退役使用持续资产寿命台账及历史修订差额；替换件属于其实际维修事件，不再当作原完整资产重复购置，新增替换件在事件时入账一次。已归属来源不再乘第二份额，工具终端不只归给退役期。背景已含某物理量则从旧背景中撤销该量或以本拆分替换整包，严禁两边同时表征。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_goods | trade | failed_original; service | 原商品与验收台账 | original_id; SKU; lot; seal/state; nominal_spec; actual_length_m; actual_width_m; measured_gross_kg; facing_adhesive_liner_core_wrap_kg; supplier_BOM; q_s; V_s; source_id; source_version; receiving_gate; inbound_vector; q_c_s; V_c_s; f_F_s; f_F_c_s; source_component_id; source_fraction_S_F_T_O; S_F_T_O_owner; N_F_whole; gross_handover_id; return_id; valid_acceptance; revocation_date; pool_id; Q; U_whole; B_F_whole; component_native_unit; N_F_c_s; B_F_c_s | 收货及每次移动扫描条码/原 ID；取得批次实测 BOM 和背景边界；校准秤/长度量具核查收货批，破坏性展开的质检样本不能计原封输出；柜台签认验收并记录带日期替换版本。 service_gate; goods_responsibility; component_gate; calc_goods；仅一个最终 Q | Item(s); kg; m | 逐事件；每期结存 | 完整预定报告期及历史修正 | 实际门店；同质 SKU/BOM 池 | 每参考流 | 供应签认完整组件向量；校准量具 ID；事件去重及 S/F/T/O 守恒 |
| cp_custody | custody | supplier_return; external_damaged | 实物保管及继续责任 | event_id; original_id; sender; recipient; timestamp; seal/opened/used_state; N_supplier_handoff; M_external; actual_remaining_component_kg; S_F_T_O_owner; opening; receipts; customer_returns; gross_handovers; closing; condemnation; held_waste; confirmed_missing; signed_residual | 每次实物移交扫码并由接收方签认；秤量实际剩余整体载体；独立核对仅商品库存和持有废物台账。验收撤销不能编造移动。 custody_gate；原库存平衡独立于修正后 Q | Item(s); kg | 每次移交；期末及后续修正 | 完整预定报告期及历史修正 | 实际交出/接收保管门 | 每参考流 | 接收人/状态签认；原 ID；确认失踪与未决差额区分 |
| cp_power | trade | electricity | 交流电表及分配来源 | meter_id; source_id; start_end_kWh; containing_parent; submeter_id; provider_gate; voltage; geography; year; X_k_c; driver_unit; d_k_c_h; all_beneficiaries; zero_idle_closed; directly_measured_trade_kWh; K_trade; processing_s_k_h; device_seconds_k_c_i; A_h_i; A_g_i; R_k_idle_h; R_k_all_h; prospective_area_map_id; interval_state | 收货/展示/柜台/设备回路的校准区间表读数及父子图；时间记录和占用面积/工位映射；保留失败及闭店区间。 power_gate；calc_shared 得 K_trade；再仅一次3.6*K_trade/Q | kWh; s; m2; m2*h; device*s; workstation*h | 逐表计区间；每报告期核对 | 完整预定报告期及历史修正 | 全部实测门店回路及所有来源受益方 | 每参考流 | 校准证书；父表包含关系；来源/驱动量总额 |
| cp_consumables | trade | receipt_paper; carry_bag | 首次使用耗材台账 | source_id; grade; resin; complete_BOM; roll_id; batch; received_net_kg; core_kg; wrap_kg; never_used_opening; purchases; never_used_closing; never_used_transfer_return; first_use_id; printed_WIP; customer_handover; used_stock; dispatch; prior_vector_version; M_paper_first; M_bag_first; M_paper_failed_unused; M_bag_failed_unused; first_use_net_kg; never_used_condemned_kg; never_used_confirmed_missing_kg | 按规格用校准秤去皮称净量并扫码结存；将打印作业/袋匹配原来源；核实制造/入场向量。分开从未使用和已用/已打印库存。 calc_consumables；复用/在制品版本携带原来源不重复背景 | kg | 逐收货/首次使用/出场；期末 | 完整预定报告期及历史修正 | 实际场址申明规格/配置 | 每参考流 | 供应规格/BOM；皮重校准；首次使用及去向核对 |
| cp_waste | residual | roll_waste; paper_waste; film_waste | 实际出场废物载体 | consignment_id; source_id; original_id; constituent_state; gross_kg; tare_kg; W_roll; W_paper; W_film; held_opening; generation; held_closing; confirmed_missing; signed_residual; receiver; acceptance; treatment_vector; treatment_transport_scope | 外部移交时校准秤量整批，皮重另核；接收方签认实际材料/状态和匹配处理边界。直接整载体称量已排除另拆组分。 W=实际毛重-皮重；仅除 Q 一次；持有库存平衡仅核对 | kg | 逐出场及持有库存结存 | 完整预定报告期及历史修正 | 实际门店收集点及外部接收方 | 每参考流 | 磅单；签认组分接收；来源/事件互斥；处理/运输清单 |
| cp_assets | capital | building; rack; trolley; luminaire; fan; checkout; printer; payment_terminal; router; camera; admin_computer | 整资产寿命和版本台账 | asset_j; model; serial; actual_BOM; package_scope; N_j; V_old_j; V_new_j; old_version; new_version; installation; repair_event_id; terminal_carrier_kg; removed_parts; independent_transport; provider_inclusions; beneficiary_h; e_old_j_h; e_new_j_h; L_old_j; L_new_j; f_old_j_h; f_new_j_h; actual_retirement; E_j; prior_pool_Q; delta_j_h; e_actual_j_h; capacity_unit; trip_t; segment_s; X_t_s; moving_source; idle_source; reserved_capacity; segment_km; idle_hours; d_t_s_h; provider_original_allocation; transport_event_id; F_building; F_rack; F_trolley; F_luminaire; F_fan; F_checkout; F_printer; F_payment_terminal; F_router; F_camera; F_admin_computer; busy_device_s_j_h; reserved_idle_device_s_j_h; A_h_i; A_g_i; prospective_area_map_id; trolley_capacity_kg; trolley_job_gross_kg_h; trolley_job_duration_h; trolley_empty_return_reservation; trolley_idle_duration_h; capacity_unit_kg; mass_constraint_evidence; reserved_gross_payload_kg_t_s_h; segment_km_t_s; idle_hours_t_s; originating_job_reservation | 盘点每个实物资产/型号并取得签认完整供应生命周期向量；按 asset_allocation 实测面积/工位预留、互斥忙碌与待机/闭店设备秒、手推车实际额定载荷/各作业毛载荷及预留时长；末端量采用整物净 kg 直测或核实 BOM 重建二选一。检查替换/维修和全部历史受益暴露，不使用标称寿命默认值。 calc_assets；最终 e/E 替换全部 e/L 版本；运输同份额仅一次 | Item(s); kg; m2*h; device*s; workstation*h; kg*h | 逐购入/维修/修订/退役；逐受益方时段 | 完整预定报告期及历史修正 | 全部实际历史/未来资产受益方及原来源 | 每参考流 | 签认 BOM/范围；完整生命周期清单；校准；旧分配台账及完整历史修正凭据 |
| cp_support | support | network_service; payment_service; admin_service | 合同界定支持服务 | contract_id; provider; boundary; actual_model_inventory; constituents; source_id; original_denominator; pool_version; accepted_clean_area_each_pass; A_clean; X_k_c; d_k_c_h; all_beneficiaries; included_energy; included_capital; included_waste_treatment; exclusions; overlap_event; route_absence; processing_s; reserved_terminal_h; supported_workstation_h; reserved_connection_h; admin_task_h; A_h_i; A_g_i; prospective_area_map_id; H_connection_p; R_port_p_h; R_port_p_g; processing_s_a_h; processing_s_a_g; b_a_h; task_active_h_t; task_seconds_t_h; task_seconds_t_g; admin_reserved_idle_h; reserved_workstation_s_h; reserved_workstation_s_g; reserved_terminal_s_h; already_attributed_quantity_h; already_attributed_vector_h; H_network_h; N_payment_h; H_admin_h | 签认实际验收干扫各次几何面积、网络预留连接小时、去重实际处理尝试 ID（含失败/撤销请求）、实际管理任务小时。取得供应方原来源总量及活动/待机/固定拆分、完整上游/资本/废物范围和设备/公用工程排除项，合同价格不能代数量。 calc_support 和 calc_completion；不重复门店电/资本 | m2; h; Item(s); s; port*s; terminal*s; workstation*s | 逐次清扫/任务/时段，含待机和失败工作 | 完整预定报告期及历史修正 | 实际门店及申明外部供应控制体 | 每参考流 | 签认服务验收；原清单/分母；全部受益驱动量台账；范围及重叠证据 |
| cp_split_labour_support | support | floor_cleaning | 独立原始交换台账 | event_id; source_id; 发生/不存在证据; 准确物质或型号; 实际组成/SDS; 参考属性; 单位; 原始数量; 原始分母; 工时起止; 电表区间及上下级关系; 密度及温度; 完整载体净质量; 接收方及处理范围; 工具资产ID; 原配/替换件; 寿命及全部历史受益方; 历史修订差额; 全受益驱动; 直接/已归属状态; 旧整包撤销; 重叠来源 | 逐事件核实实际投入和外运；工时按签认起止记录，物料/废物称重，电力读取互斥电表，车辆记录实际路线公里。补齐来源分母、组成、背景、接收处理和全受益方，执行split_attribution与c_split_quantity。实际不同配方/型号或额外排放须新增准确卡；本候选不得被默认套用。 | 逐卡一个属性/单位 | 每事件及来源修订 | 原完整来源周期及全部受益历史 | 实际工单及互斥现场/供应门 | 每参考流 | 签认工时、校准、组成、去重和接收凭证 |
| cp_split_support | split_support | split_cleaning_wipe; split_cleaning_broom; split_used_wipe; split_sweepings; split_broom_waste; split_support_electricity; split_support_travel | 独立原始交换台账 | event_id; source_id; 发生/不存在证据; 准确物质或型号; 实际组成/SDS; 参考属性; 单位; 原始数量; 原始分母; 工时起止; 电表区间及上下级关系; 密度及温度; 完整载体净质量; 接收方及处理范围; 工具资产ID; 原配/替换件; 寿命及全部历史受益方; 历史修订差额; 全受益驱动; 直接/已归属状态; 旧整包撤销; 重叠来源 | 逐事件核实实际投入和外运；工时按签认起止记录，物料/废物称重，电力读取互斥电表，车辆记录实际路线公里。补齐来源分母、组成、背景、接收处理和全受益方，执行split_attribution与c_split_quantity。实际不同配方/型号或额外排放须新增准确卡；本候选不得被默认套用。 | 逐卡一个属性/单位 | 每事件及来源修订 | 原完整来源周期及全部受益历史 | 实际工单及互斥现场/供应门 | 每参考流 | 签认工时、校准、组成、去重和接收凭证 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_goods | service; failed_original | Q=count(去重最终有效 original_id)。仅 s 属于 U_whole 时，按 Item(s) 计 N_F_whole=sum_s q_s*f_F_s，B_F_whole=sum_s q_s*f_F_s*V_s；failed_original=N_F_whole/Q 仅连接 B_F_whole/Q。责任分化的每个原来源须移出 U_whole，不能部分留在整卷卡。每个实际新增组件/状态卡以 q_c_s 原生单位自有 N_F_c_s=q_c_s*f_F_c_s 和 B_F_c_s=N_F_c_s*V_c_s，数量为 N_F_c_s/Q。组件背景只能通过其组件卡进入 calc_completion，不能经 failed_original。逐原/组件向量保持 S/F/T/O 的 sum_owner f_owner_s=1，T/O 携带同一未分配来源。组件来源或卡缺失则阻断完整性。 | original_id; valid_acceptance; revocation_date; U_whole; q_s; f_F_s; V_s; q_c_s; component_native_unit; f_F_c_s; V_c_s; N_F_whole; B_F_whole; N_F_c_s; B_F_c_s; S_F_T_O_owner; Q | Q; N_F_whole/Q; B_F_whole/Q; component_card_N_F_c_s/Q; component_card_B_F_c_s/Q | ghg-product-2011 |
| calc_shared | electricity | 各 active/idle/fixed 来源类采用 pool_allocation 固定驱动量：柜台/打印/支付 d_k_active_h=实测处理秒；其 d_k_idle_h=R_k_idle_h，d_k_fixed_h=R_k_all_h，为预留设备秒。R_k_c_h=sum_i device_seconds_k_c_i*A_h_i/sum_g A_g_i。其他来源类采用明确规定的同单位驱动量。K_trade=sum_k_c X_k_c*d_k_c_trade/sum_all_h d_k_c_h，加互斥直接实测 trade kWh；sum_c X_k_c 等于父来源 kWh，全部受益分配须复现各 X_k_c。不得相加类别驱动。MJ=3.6*K_trade，最终 electricity=MJ/Q。 | X_k_c; processing_s_k_h; device_seconds_k_c_i; A_h_i; A_g_i; R_k_idle_h; R_k_all_h; d_k_c_trade; d_k_c_h; all_beneficiaries; directly_measured_trade_kWh; containing_parent; submeter_id; K_trade; Q | K_trade; MJ/Q | ghg-product-2011 |
| calc_consumables | receipt_paper; carry_bag | M_first=按原来源去重合计 first_use_net_kg；M_failed_unused=sum never_used_condemned_kg+never_used_confirmed_missing_kg。核对从未使用期初+采购=从未使用期末+从未使用转移退供+M_first+M_failed_unused+有符号差额，未决差额阻断完整性。首次使用来源 kg 须核至顾客交付+已用库存+实际废弃+确认失踪+有符号差额。已打印在制品保留原纸和实际打印能耗来源分子/版本；领用时替换原责任版本，不重复计来源。最终各卡为 (M_paper_first+M_paper_failed_unused)/Q 和 (M_bag_first+M_bag_failed_unused)/Q。 | never_used_opening; purchases; never_used_closing; never_used_transfer_return; confirmed_missing; signed_residual; customer_handover; used_stock; actual_discard; printed_WIP; prior_vector_version; M_paper_first; M_bag_first; M_paper_failed_unused; M_bag_failed_unused; first_use_net_kg; never_used_condemned_kg; never_used_confirmed_missing_kg; Q | (M_paper_first+M_paper_failed_unused)/Q; (M_bag_first+M_bag_failed_unused)/Q | ghg-product-2011 |
| calc_assets | capital | 收银/打印/支付的 e_j_h 为忙碌加互斥预留待机/闭店设备秒；手推车为 asset_allocation 实测 kg*h 额定载荷容量小时；其他资产单位维持该规则。逐资产 j、历史池 h，f_j_h=e_j_h/L_j；F_row=sum 匹配_j f_j_h。实际退役时 E_j=sum_all_h e_actual_j_h，f_final_j_h=e_actual_j_h/E_j。逐历史 h 替换旧分子：delta_j_h=f_new_j_h*V_new_j-f_old_j_h*V_old_j，含归资产的独立运输，不用残差捷径。记录新旧 Q_h，完整原分子修正后再替换归一化版本。最终实物产品包量=F_row/Q；V_j 内末端载体来源量只乘同一 f 一次。 | e_j_h; L_j; e_actual_j_h; E_j; f_old_j_h; f_new_j_h; V_old_j; V_new_j; independent_transport; old_version; new_version; Q_h; Q; F_row; busy_device_s_j_h; reserved_idle_device_s_j_h; A_h_i; A_g_i; trolley_capacity_kg; trolley_job_gross_kg_h; trolley_job_duration_h; trolley_empty_return_reservation; trolley_idle_duration_h | F_row/Q; historical_corrected_numerator | ghg-product-2011 |
| calc_support | support | H_clean为按cp_split_labour_support记录、以全部受益清洁面积次驱动归属一次的实际外购人工h；A_clean仅是分配驱动，实物按cp_split_support独立核算。逐共享连接时段 p，H_network_h=sum_p H_connection_p*R_port_p_h/sum_g R_port_p_g，其中 R_port_p_h 为按实测忙碌时间加预定待机/闭店面积份额归至各受益方的预留被支持设备端口秒，每物理端口秒只划分一次。逐实际处理尝试 a，b_a_h=processing_s_a_h/sum_g processing_s_a_g；N_payment_h=sum_a b_a_h，失败/撤销尝试各保留一次。共享购物篮处理开销按相同实测处理秒份额归至商品行，sum_h b_a_h=1，sum_h N_payment_h 等于实际去重尝试总数，不能各 SKU 池都记一次完整尝试。逐管理任务 t，活动任务小时按实际 task-seconds_h/sum_g task-seconds_g 分配；共享待机/闭店预留管理小时按预定面积图得到的被支持工位秒 reserved supported workstation-seconds_h/sum_g reserved supported workstation-seconds_g 分配。H_admin_h 合计互斥活动和预留待机服务小时，不能各 SKU 都记全部办公室小时。供应方已归属至受益方的数量及来源向量保持原状，不再乘份额，上述方程仅用于未分配共享服务量。供应方 active/idle/fixed 来源分子分别恢复：网络各类用预留端口秒，支付活动用处理秒而待机/固定用预留终端秒，管理活动用任务秒而待机/固定用预留工位秒。须由这些已归属原来源分子重建相匹配的受益方特定供应向量再连接已归属服务量，不能用不同份额乘共同整合同向量。正供应分子对应服务输出为零时，保留在预定同配置池的原始零输出模块，阻断归一化包使用，直至存在真实相容服务量或另完成有证据的可用性服务卡，不能删除该来源。各已归属服务量最后只除共同 Q 一次。 floor_cleaning现仅计实测外购人工h，采用cp_split_labour_support/c_split_quantity；A_clean仅作分配驱动，不能作为人工量或完整包量。 | accepted_clean_area_each_pass; A_h_i; A_g_i; H_connection_p; R_port_p_h; R_port_p_g; processing_s_a_h; processing_s_a_g; b_a_h; payment_attempt_ID; failed_attempts; reversed_attempts; task_active_h_t; task_seconds_t_h; task_seconds_t_g; admin_reserved_idle_h; reserved_workstation_s_h; reserved_workstation_s_g; already_attributed_quantity_h; already_attributed_vector_h; X_k_c; d_k_c_h; reserved_terminal_s_h; all_beneficiaries; Q; measured_purchased_labour_h; cp_split_labour_support | H_clean/Q; H_network_h/Q; N_payment_h/Q; H_admin_h/Q | ghg-product-2011 |
| calc_transport | trade; custody; residual; capital; support | 未分配共享趟次须先通过 transport_gate 的质量约束门，capacity_unit 固定为 kg，不能后续任选。逐趟 t、段 s，将同单位实测来源 X_t_s 拆为行驶/待机池；行驶驱动量=actual reserved gross payload kg_t_s_h*segment_km_t_s，待机驱动量=actual reserved gross payload kg_t_s_h*idle_hours_t_s。空返即使实际载荷 t*km 为零，也保留原签认作业对受益方的预留；静止待机按实际时长。Sum_all_h 分配须复现各来源，正来源要求已知正驱动总量。实际体积/位约束路线须先完成独立受支持扩展才可用。供应方已归属量保留原生单位和原分配，不再乘预留份额。资产运输先归 V_j 再按 calc_assets 历史 f，原商品入场归 S/F/T/O。完整性前须绑定实际具体运输卡。 | trip_t; segment_s; X_t_s; moving_source; idle_source; capacity_unit_kg; mass_constraint_evidence; reserved_gross_payload_kg_t_s_h; segment_km_t_s; idle_hours_t_s; originating_job_reservation; all_beneficiaries; provider_original_allocation; asset_j; V_j; f_j_h; S_F_T_O_owner; Q | transport_raw_numerator; original_source_attachment | ghg-product-2011 |
| calc_completion | all | 对每个实际核心或新增模块 m 及相同交换/属性/单位 x，由核实的原池/版本恢复 N_m_x=normalized_m_x*D_original_m；已是原量则直接用，不能再乘。仅剔除有证据的来源/事件/阶段重叠后，N_complete_x=N_core_x+sum_m N_disjoint_m_x；I_x=N_complete_x/Q。N_core 通过 failed_original 包含 B_F_whole，各 B_F_c_s 通过其已完成组件卡纳入，AC 仅一次，排除 S 商品。须双语增加并绑定缺失实际原子卡/协议/供应向量，包括组件责任分化来源、场外/维修/运输或新增实际废物。仅列名称不能完成系统。 | normalized_m_x; D_original_m; original_pool; original_version; N_core_x; B_F_whole; B_F_c_s; AC; N_disjoint_m_x; source_id; overlap_event; lifecycle_stage; Q | I_x=N_complete_x/Q | ghg-product-2011 |
| c_split_quantity | floor_cleaning; split_cleaning_wipe; split_cleaning_broom; split_used_wipe; split_sweepings; split_broom_waste; split_support_electricity; split_support_travel | 对每个准确身份r及其单一单位，先以原始来源分母D_source还原已归一来源q_source，得到x_raw=q_source*D_source；已是原始量则不再还原。按split_attribution仅作一次尚未完成的归属，按来源ID/事件/版本去重，撤销旧整包和旧历史版本。合计互斥原始量为X_r；q_r=X_r/Q，只除最终参考分母一次。人工只计实测外购h，不计原工单数/面积为人工量；自营工时仅核对。资产数量、物料kg、电力kWh、车辆vehicle*km及载体kg分别计算，禁止跨属性相加或用人工工时乘已实测物理量。未知量/身份/背景阻止完整性。 | X_r; D_source; q_source; Q; cp_split_labour_support; cp_split_support | q_r |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all | 每卡有已核实际流/类型/属性/单位/供应范围，或显式未决身份和完成条件，不能使用泛化集合选择器。 | 原生身份直读和匹配属性/单位链；供应签认清单 |
| collection | all | 校准量具和完整时段/事件覆盖含零输出/失败/待机；不明不按零；重要量须真实记录而非编造范围。 | 校准及来源总额；失败与差额台账 |
| package | capital; support | 整资产或有界服务包仅在具备签认组分/阶段清单、真实数量分母及明确排除项时可用；包内容不明阻断完整性。 | 实际型号/合同；原供应向量/分母及重叠矩阵 |
| stock | all | 区分从未用与已用/在制品库存、仅商品平衡与持有废物、实物移交与验收；逐原来源守恒 S/F/T/O。 | 原 ID、责任人签认及版本替换历史 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | all | 须有实际渠道/商品组合、原封 SKU/批/BOM，不能含未经审查的切割/拆封/湿法/热/制冷剂路线。全部必需限定信息均为强制数据字段。制造商/零售商规格仅证明产品可行性，不证明现场量、供应 LCI、安全使用批准或全分类覆盖。 | tempaper-moire; target-moire; un-cpc62163 |
| validate_source | all | 核对逐原/组件向量守恒、实物卫星范围、F 实际产品输入、S 一次排除及 T/O 具名继续责任者；迟到版本替换完整原分子和 Q。须有实际最终有效 ID 去重计数及独立实物毛库存平衡。 | ghg-product-2011 |
| validate_quantity | all | 拒绝缺失/不明分子、非正 Q、孤立协议/过程/卡、基准矛盾、混单位求和或重复分配/组成份额。Q=0 保留为不可归一化原清单。每个最终卡均为 reference_flow 基准。标称安装覆盖率、货运重量、密度、寿命、损耗率或处理因子都不能代实测。 | ghg-product-2011 |
| validate_complete | all | 核验完整支持包及实际必要型号/模块覆盖、逐来源活动/待机/固定驱动总额、全部历史 e/L→e/E 修正、独立运输来源归属、接收方实际混合物签认及 calc_completion 原量恢复。不明身份/供应过程/范围证据保留披露并阻断对应用途；候选方法状态不是科学批准。任一实际必要模块/卡/来源未完成时不得声称完整服务。 | ghg-product-2011 |
| split_completeness | all inventory rows | 核查每条准确身份和单一参考属性、全部实际工单组成、互斥计量、旧整包撤销、无重复来源/设备终端、全受益历史归属及最终分母一次归一。来源未验证、额外真实交换未建卡、数量未知或只写“合同包含”均不完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 仅在完成各门后，用作该确切门店/SKU/渠道/配置的增量柜台服务输入 |
| allowed_use | 披露的实际完整增量服务；部分模块仅在遵守 calc_completion 并显式声明不完整时使用 |
| excluded_use | 安装墙面面积功能、全部62163、专门店/切售路线、成功商品 S 制造及未绑定完整业务声明 |
| required_metadata | 必需限定信息；原供应/资产向量；实测原分母/池/版本；来源/事件去重；Q 及渠道证据 |
| required_quality_disclosure | 身份/供应及经验范围缺口；时空代表性；实测不确定性；本候选无默认数值范围 |
| update_trigger | SKU/BOM/批号/渠道/路线/供应/型号变化；新增来源；最终验收退回；资产寿命/退役修订 |

## 11. 数据源

保留的厂家及零售商来源说明本产品类别的案例和明确引用的技术区别，不将适用性限定于所列品牌/型号，也不为其他配置提供数值清单默认值。实际产品与供应商证据仍须按b_product_family取得。

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc62163 | official_guidance | United Nations, CPC3.0, EN/2100/62163; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62163 | 分类含272、32194、3691；本 PCR 仅为其中实际自粘乙烯基墙面覆盖物零售的较窄子范围。 |
| tempaper-moire | handbook | Tempaper, Moire Dots Peel and Stick Wallpaper; https://tempaper.com/products/moire-dots-peel-stick-wallpaper | 原制造商产品/卷型、乙烯基/自粘/批号区别；不提供完整 BOM、定量 LCI 或现场量；未采用安装损耗因子。 |
| target-moire | handbook | Target, Tempaper Moire Dots Black/White, UPC651784106428; https://www.target.com/p/-/A-92367713 | 零售一方规格交叉核对及混合零售商商品页面，非具体实体门店供货或合格路线证明。 |
| ghg-product-2011 | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard(2011), chapters6 and9, PDFpp29–32,64–65; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 分析单位/参考流及分配层级。原文未强制本 PCR 柜台服务范围、因果驱动、S/F/T/O 或寿命方程；这些是具有采集义务的明确候选方法选择，不声明完全符合标准。 |
| jrc-retail-2013 | official_guidance | European Commission JRC, Best Environmental Management Practice in the Retail Trade Sector(2013), EUR25998EN, PDFpp18–19; https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | 仅用于零售能源、水/化学品、废物、运输、包装、照明及价值链过程识别，不采用数值默认值或标杆限值。 |
