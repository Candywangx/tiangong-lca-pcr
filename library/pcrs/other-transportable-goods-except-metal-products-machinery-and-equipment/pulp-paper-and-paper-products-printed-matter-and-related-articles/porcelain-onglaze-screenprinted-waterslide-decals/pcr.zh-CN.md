---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.porcelain-onglaze-screenprinted-waterslide-decals
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 瓷器釉上装饰用丝网印刷水转印贴花

## 1. 范围与适用性

本方法仅覆盖用于已施釉硬质瓷器烧成釉上装饰的未贴附陶瓷水转印贴花纸：采购未印刷涂胶承载纸，采用一份预混黑色陶瓷丝网油墨，另印透明可烧除罩膜，电力干燥、裁切、质量放行及出货。必须通过供应方和实际试验核实油墨、胶层及膜在所声明瓷釉及烧成制度下的相容性。生产者原件证明实际丝网曝光、印刷及隧道干燥，但不证明其供应方配方、热源或本现场定量输入。所选电力且无现场燃烧路线须在应用前用加热器铭牌、运行记录及同期间电表核实。它是有条件适用的方法变体，不是所引生产商的实测清单；所选 CN 电力接口不能代表该德国生产商的实际供电。[mr-screen-production; tullis-waterslide; vibrantz-ceramic]

压敏纸标签的纸面保留在接收物上；本贴花则通过水软化胶层，把油墨及罩膜从临时纸基释放。油墨层与转移膜的供货质量、留存固体及溶剂排放分别记录。胶印书籍及单张图像纸保留纸及油墨结构，不执行此释放及转移膜路线。日历内容本身不是新制造身份。本方法排除所有日历结构、压敏标签、热转移或干剥离转移、不烧成的有机或模型贴花、玻璃或搪瓷或塑料或金属接收表面、骨瓷或炻器、釉下或釉中或贵金属装饰、数字或胶印或 UV 路线、现场造纸或涂胶或制墨、燃气或蒸汽干燥及现场燃烧或废水处理。新增化学组分或现场排放治理处理须明确扩展方法。不采用来源中的配方、留存率、干燥时间或历史数量作为默认值。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.porcelain-onglaze-screenprinted-waterslide-decals |
| classification_refs | CPC 3.0 32630；narrower；范围及接受裁定以 `classifications/mappings/cpc-3.0-to-pcr.yaml` 及其引用的 ADR 为准 |
| covered_products | 未贴附的硬质瓷器釉上烧成用黑色陶瓷水转印贴花纸 |
| excluded_products | 第 1 节所有不兼容结构、接收基材及路线 |
| representative_product | 涂胶陶瓷承载纸、黑色陶瓷图像及另印透明转移罩膜 |
| production_route | 丝网制版 → 黑色丝印 → 干燥 → 罩膜丝印 → 电干燥 → 裁切及质量放行 → 保留承载纸出货 |
| market_state | 贴花生产者厂门验收干态未贴附纸张，尚未湿贴及烧成 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为声明的施釉瓷器表面提供可释放黑色陶瓷装饰 |
| How much | 1 千克验收未贴附贴花纸净质量，包含临时承载纸及胶层 |
| How well | 声明图像、覆盖率及套准、释放完整性和实际瓷釉及烧成相容性；记录单位质量装饰面积，不声称不同设计等功能 |
| How long or cycle | 一个厂门生产报告期；下游单次贴附及烧成不给默认成功率或使用寿命 |
| reference_flow_link | finished |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 转让（decalcomanias）和印刷日历 `aef085ba-9ea8-418c-a94e-796a8bce8c8f` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 现场、报告期及设计；验收纸张净质量和包装皮重；承载纸纤维、定量及水分和供应方；释放胶组成、涂布质量及批次；黑墨颜料、熔剂、介质及每项溶剂和牌号；湿漆、留存转移膜质量及配方；声明硬质瓷器瓷釉及烧成相容性；电力电压、地区及供应方；实际干燥及控制；丝网寿命；废物组成及接收方；图像面积及覆盖率；释放及质量放行与测试损失；边界及上游覆盖 |

全部限定信息须在数据集及留存记录中声明。广义参考名称包含日历，但不扩展本方法的实物限定。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | 质量 | kg | Q 为同报告期经校准称量的验收干态纸张净质量总量，包含承载纸、胶、图像、膜及验收供货状态下实测残余水和溶剂，排除包装、废品及测试纸；不固定每张质量。 |
| common_basis | 所有清单行的参考分母 | 质量 | kg | 质量/kg 仅约束共同参考分母 Q。每项分子保留自己的原生属性及单位：电力为净热值/MJ，不是质量/kg。每项交换及协议均按同一验收输出 Q 归一化；Q 缺失或为零时阻止归一化。 |
| layer_mass | decal_paper, ceramic_ink, covercoat, finished | 质量 | kg | 分别保留干承载纸、释放胶固体、油墨固体、留存干膜和残余水。采购涂胶纸是一项输入，组分披露不得重复产生纸及胶交换或背景。 |
| wet_supply | ceramic_ink, covercoat, emulsion, thinner, cleaner | 质量 | kg | 供货配方采用实际湿质量。整份供货质量分解为实测 H2O、各项有机或无机非水液体、实际实测非挥发固体及其他留存组分；非水质量不等于固体测量值。组分质量采用实际批次组成；实测固体及留存率核对每项组分在废物、库存、产品及空气之间的去向，不把来源配方当默认。 |
| electric_basis | electricity | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 所选电力流属性名为净热值，不表示对电能作燃料热值假设。记录实测 kWh 并以精确 3.6 MJ/kWh 转换；匹配原生 CN 电网平均消费组合、用户端 1–35 kV 交付及实际地区、年份和供应方；生产商设备证据不建立该供电事实。 |
| water_mass | water, washwater | 质量 | kg | 体积记录需采用所记录温度及组成下的实测密度，数据库次级质量系数不是密度；记录废水固体及湿基。 |
| particle_basis | pm_fine, pm_coarse, pm_large, collected_dust | 质量 | kg | 分别保留排放的互斥粒径段 ≤2.5、>2.5–10 及 >10 微米，与收集粉尘分开。PM10 与总尘合计仅用于质量核对，不另作交换。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收已确认的未印刷涂胶陶瓷转印纸、预混黑色陶瓷浆料、罩膜漆及实际制版供货 |
| starting_condition_role | 前景加工起点，不是生命周期起点 |
| product_classification_scope | 仅 CPC32630 的瓷器釉上贴花子集，不覆盖日历 |
| recursive_input_rule | 不得把广义成品贴花作为原生输入；实际外购中间物追溯一次；内部返工为内部链接，不是采购产品 |
| upstream_dataset_requirement | 要求实际供应方到现场的运输覆盖且不重复计入，以及与供应方匹配的制浆、承载纸制造、胶及涂布、陶瓷颜料及熔剂及浆料、罩膜及溶剂、网布及乳液、公用工程及包装背景；上游缺失使摇篮到厂门清单不完整 |
| disclosure | 记录供应方及集成生产与每次实际交接。贴附水、去纸及瓷器烧成为下游，不是隐藏的制造遗漏 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_gate | foreground | 纳入制版、试印、油墨及罩膜印刷、电干燥及通风、实际清洗、裁切及质量损失和出货。聚合为一个前景单元，但各阶段独立计量；内部实物交接两端质量相同。 | mr-screen-production |
| upstream_paper | upstream | JRC 制浆造纸工艺仅用于实际供应方路线及实际涂布；锯材、胶合板或针叶材调查不得替代；不引入通用纸厂配方、裁切因子或损纸回收假设。 | jrc-paper-bref-2015 |
| downstream_transfer | application | 承载纸随产品交付，并在下游水释放时移除；下游模型需追踪胶分配、膜及油墨转移、废纸、贴附水及窑炉烧除和烧成。厂门清单不声称代表烧成瓷器或装饰寿命。 | tullis-waterslide; vibrantz-ceramic |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| decal_converting | 丝网制版、印刷、干燥及出货 | required | 所选已确认路线 | foreground | 1 千克参考流 |

### 过程：丝印贴花加工（`decal_converting`）

#### 输入

##### 产品流

###### decal_paper（`decal_paper`）

按批次接收一份复合纸；以供应方及批次质量记录分别核算承载纸和释放胶，不重复计入组分采购负荷。

- 选定流: 未印刷水溶胶涂布陶瓷水转印纸
- 流属性 / 单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 实测交换总量除以同一验收输出 Q；cp_layers。条件行须有实际发生记录或有证据的零值，不假定正数量。
- 取值方式: `foreground_record`
- 适用特异性: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_layers`
- 来源: tullis-waterslide

###### ceramic_ink（`ceramic_ink`）

一份预混湿态黑色陶瓷油墨；记录无机颜料及熔剂、有机介质和每项溶剂，不以普通胶印油墨替代。

- 选定流: 黑色瓷器釉上丝网印刷色浆
- 流属性 / 单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 实测交换总量除以同一验收输出 Q；cp_materials。条件行须有实际发生记录或有证据的零值，不假定正数量。
- 取值方式: `foreground_record`
- 适用特异性: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_materials`
- 来源: vibrantz-ceramic; mr-screen-production

###### covercoat（`covercoat`）

图像印刷后施加实际兼容罩膜漆，再电干燥。分别记录供货湿漆、留存干转移膜及挥发组分。转移膜在本过程形成，不是另购塑料膜。

- 选定流: 透明可烧除陶瓷贴花罩膜漆
- 流属性 / 单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 实测交换总量除以同一验收输出 Q；cp_layers。条件行须有实际发生记录或有证据的零值，不假定正数量。
- 取值方式: `foreground_record`
- 适用特异性: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_layers`
- 来源: vibrantz-ceramic; tullis-waterslide

###### thinner（`thinner`）

仅在实际供应方安全数据表、CAS及批次添加记录证明 CAS 123-86-4 时纳入；不由丝网印刷推定存在，不使用近名异构体。

- 选定流: 乙酸正丁酯稀释溶剂
- 流属性 / 单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 实测交换总量除以同一验收输出 Q；cp_materials。条件行须有实际发生记录或有证据的零值，不假定正数量。
- 取值方式: `foreground_record`
- 适用特异性: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_materials`
- 来源: epa-eiip-2002

###### cleaner（`cleaner`）

仅在实际清洗供货含乙酸乙酯 CAS 141-78-6 时纳入该单独组分；按纯物质或组分质量计，其他配方组分另列。独立核查实际供应方身份及背景。同一收货采用此独立纯物质或组分交换，或采用已核实整份清洗配方及其内部组分账；不得在整配方交换上重复叠加组分交换。

- 选定流: 乙酸乙酯 `7b656504-e685-4170-ab6a-56f948c994ee`
- 流属性 / 单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 实测交换总量除以同一验收输出 Q；cp_materials。条件行须有实际发生记录或有证据的零值，不假定正数量。
- 取值方式: `foreground_record`
- 适用特异性: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_materials`
- 来源: epa-eiip-2002

###### emulsion（`emulsion`）

实际数字曝光及制版使用的一份采购感光乳液配方，记录湿质量及化学组成；另供敏化剂或脱膜剂需在数据集完成前独立列卡。

- 选定流: 丝网模版感光乳液
- 流属性 / 单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 实测交换总量除以同一验收输出 Q；cp_materials。条件行须有实际发生记录或有证据的零值，不假定正数量。
- 取值方式: `foreground_record`
- 适用特异性: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_materials`
- 来源: mr-screen-production

###### mesh（`mesh`）

仅计更换的单丝聚酯印刷网布。记录机织结构、牌号及复用次数；广义记录包含此子集，但源纺织分类说明不是陶瓷印刷网规格。

- 选定流: 丝网织物 `aa291ffd-eaaa-4345-88eb-a1a897ad3ece`
- 流属性 / 单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 实测交换总量除以同一验收输出 Q；cp_materials。条件行须有实际发生记录或有证据的零值，不假定正数量。
- 取值方式: `foreground_record`
- 适用特异性: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_materials`
- 来源: mr-screen-production

###### water（`water`）

采购工艺水用于曝光水洗、清洗及实际质量放行试验；不纳入常规工厂贴附应用。记录供水来源及供应方质量基准。

- 选定流: 水，工艺 `d8ad9111-4304-46fb-bc23-9a2f36d65a83`
- 流属性 / 单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 实测交换总量除以同一验收输出 Q；cp_water。条件行须有实际发生记录或有证据的零值，不假定正数量。
- 取值方式: `foreground_record`
- 适用特异性: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_water`
- 来源: mr-screen-production

###### electricity（`electricity`）

CN 电网平均消费组合、用户端 1–35 kV 供电：计量数字曝光、印机、电隧道干燥、通风、裁切及辅助电耗。记录实际进线电压、地区、年份及后续变压损失。原生 CN 地理、电压、电网平均路线及用户端交付是供应方硬限制，不是通用电力元数据。不同供电须有兼容身份、供应方及方法复核；不能将此 UUID 套到所引德国生产商。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性 / 单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 能量单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 实测交换总量除以同一验收输出 Q；cp_energy。条件行须有实际发生记录或有证据的零值，不假定正数量。
- 取值方式: `foreground_record`
- 适用特异性: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 来源: mr-screen-production

###### interleaf（`interleaf`）

按实际供货纳入防粘隔离纸。记录纸及蜡组成和背景；蜡纸属于可移除运输隔离物，不是贴花释放层。

- 选定流: 分隔纸 `68a4c082-ae92-4672-b9ce-c328fc41a225`
- 流属性 / 单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 实测交换总量除以同一验收输出 Q；cp_packing。条件行须有实际发生记录或有证据的零值，不假定正数量。
- 取值方式: `foreground_record`
- 适用特异性: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_packing`
- 来源: vibrantz-ceramic

###### carton（`carton`）

实际完整纸箱及纤维组成；采集实际供应方纤维组成。

- 选定流: 瓦楞纸板运输纸箱
- 流属性 / 单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 实测交换总量除以同一验收输出 Q；cp_packing。条件行须有实际发生记录或有证据的零值，不假定正数量。
- 取值方式: `foreground_record`
- 适用特异性: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_packing`
- 来源:

###### pe_wrap（`pe_wrap`）

仅按实际使用计入可移除 PE-LD 运输包膜、牌号及质量；须为非自粘、非泡孔且无增强、层压或背衬的薄膜，与所选原生身份一致。记录实际供方组成；该流没有原生 CAS 字段。包装膜不是罩膜形成的转移膜。

- 选定流: 低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性 / 单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 实测交换总量除以同一验收输出 Q；cp_packing。条件行须有实际发生记录或有证据的零值，不假定正数量。
- 取值方式: `foreground_record`
- 适用特异性: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_packing`
- 来源:

###### cloth（`cloth`）

实际更换的丝网清洗棉布；记录棉质身份及污染后废物去向。

- 选定流: 棉质清洗布
- 流属性 / 单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 实测交换总量除以同一验收输出 Q；cp_materials。条件行须有实际发生记录或有证据的零值，不假定正数量。
- 取值方式: `foreground_record`
- 适用特异性: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_materials`
- 来源: epa-eiip-2002

#### 输出

##### 产品流

###### finished（`finished`）

1 千克验收干态未贴附贴花纸，包含实际承载纸及释放胶、留存黑色图像和干转移膜以及验收供货状态下实测残余水和溶剂。“干态”指验收交付状态，不是假定绝干或无溶剂的纸张；排除运输包装、测试及不合格纸张。

- 选定流: 转让（decalcomanias）和印刷日历 `aef085ba-9ea8-418c-a94e-796a8bce8c8f`
- 流属性 / 单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 1 千克
- 取值方式: `fixed_value`
- 适用特异性: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_output`
- 来源: tullis-waterslide; mr-screen-production

###### interleaf_out（`interleaf_out`）

同一实际隔离纸随贴花纸出厂；核对出货、领用、库存及边角料，不把参考产品质量分摊到可移除隔离纸。

- 选定流: 分隔纸 `68a4c082-ae92-4672-b9ce-c328fc41a225`
- 流属性 / 单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 实测交换总量除以同一验收输出 Q；cp_packing。条件行须有实际发生记录或有证据的零值，不假定正数量。
- 取值方式: `foreground_record`
- 适用特异性: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_packing`
- 来源: vibrantz-ceramic

###### carton_out（`carton_out`）

实际出货纸箱质量与包装输入和库存变动匹配，保持在参考质量之外。

- 选定流: 瓦楞纸板运输纸箱
- 流属性 / 单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 实测交换总量除以同一验收输出 Q；cp_packing。条件行须有实际发生记录或有证据的零值，不假定正数量。
- 取值方式: `foreground_record`
- 适用特异性: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_packing`
- 来源:

###### pe_wrap_out（`pe_wrap_out`）

实际出货 PE-LD 包膜与输入物理身份一致，核对质量并排除于参考质量之外。

- 选定流: 低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性 / 单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 实测交换总量除以同一验收输出 Q；cp_packing。条件行须有实际发生记录或有证据的零值，不假定正数量。
- 取值方式: `foreground_record`
- 适用特异性: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_packing`
- 来源:

##### 废物流

###### paper_trim（`paper_trim`）

实际接收方收到的干裁切或报废涂胶印刷纸废物；披露颜料、熔剂及漆污染、胶层和水分。广义废纸身份不证明适合回收。

- 选定流: 废纸（未指定） `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- 流属性 / 单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 实测交换总量除以同一验收输出 Q；cp_waste。条件行须有实际发生记录或有证据的零值，不假定正数量。
- 取值方式: `foreground_record`
- 适用特异性: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: jrc-paper-bref-2015

###### ink_waste（`ink_waste`）

一项实际收集的湿态油墨残留流；记录颜料、熔剂及金属、有机溶剂含量与接收方。

- 选定流: 废黑色陶瓷丝网印刷色浆
- 流属性 / 单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 实测交换总量除以同一验收输出 Q；cp_waste。条件行须有实际发生记录或有证据的零值，不假定正数量。
- 取值方式: `foreground_record`
- 适用特异性: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: epa-eiip-2002

###### lacquer_waste（`lacquer_waste`）

实际单独收集的罩膜漆残留；湿干组成及接收处理与陶瓷废油墨分别保留。

- 选定流: 废陶瓷贴花罩膜漆
- 流属性 / 单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 实测交换总量除以同一验收输出 Q；cp_waste。条件行须有实际发生记录或有证据的零值，不假定正数量。
- 取值方式: `foreground_record`
- 适用特异性: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: vibrantz-ceramic

###### solvent_waste（`solvent_waste`）

仅按实际单独收集的含乙酸乙酯清洗液计；表征污染物及留存溶剂，不给默认回收信用。

- 选定流: 废乙酸乙酯丝网清洗液
- 流属性 / 单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 实测交换总量除以同一验收输出 Q；cp_waste。条件行须有实际发生记录或有证据的零值，不假定正数量。
- 取值方式: `foreground_record`
- 适用特异性: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: epa-eiip-2002

###### washwater（`washwater`）

实际分流的水性模版清洗水送已记录外部接收方，记录体积或质量、悬浮固体及化学组成；不是直接基础流排水，也不是锰渣洗涤废水。

- 选定流: 送外部处理的丝网制版清洗废水
- 流属性 / 单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 实测交换总量除以同一验收输出 Q；cp_water。条件行须有实际发生记录或有证据的零值，不假定正数量。
- 取值方式: `foreground_record`
- 适用特异性: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_water`
- 来源: mr-screen-production

###### rags（`rags`）

实际废清洗布流，记录留存溶剂及污染物质量；其溶剂不在收集液或排放物种中重复计入。

- 选定流: 废溶剂污染棉质清洗布
- 流属性 / 单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 实测交换总量除以同一验收输出 Q；cp_waste。条件行须有实际发生记录或有证据的零值，不假定正数量。
- 取值方式: `foreground_record`
- 适用特异性: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: epa-eiip-2002

###### stencil_waste（`stencil_waste`）

仅计物理分离后送接收方的模版固体；仍留在清洗水中的固体归清洗水，不重复计。

- 选定流: 废丝网模版乳液固体
- 流属性 / 单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 实测交换总量除以同一验收输出 Q；cp_waste。条件行须有实际发生记录或有证据的零值，不假定正数量。
- 取值方式: `foreground_record`
- 适用特异性: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: mr-screen-production

###### collected_dust（`collected_dust`）

实际收集的粉尘需记录纸、胶、油墨及漆组成和接收方；与室外颗粒逸散及内部回用区分。

- 选定流: 收集的干态贴花纸裁切粉尘
- 流属性 / 单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 实测交换总量除以同一验收输出 Q；cp_waste。条件行须有实际发生记录或有证据的零值，不假定正数量。
- 取值方式: `foreground_record`
- 适用特异性: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: jrc-paper-bref-2015

###### 废聚酯印刷网布（`spent_mesh`）

实际报废 PET 网布送已记录接收方；记录乳液及油墨污染和复用寿命，与分离的模版固体独立。

- 选定流: 废聚酯印刷网布
- 流属性 / 单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 实测交换总量除以同一验收输出 Q；cp_waste.
- 取值方式: `foreground_record`
- 适用特异性: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: mr-screen-production

##### 基本流

###### pm_fine（`pm_fine`）

仅按实际干裁切及搬运计入室外空气未特指子介质的 PM2.5 空气动力学粒径段净排放，按捕集后数量计；不赋正排放因子。

- 选定流: 颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性 / 单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 实测交换总量除以同一验收输出 Q；cp_air。条件行须有实际发生记录或有证据的零值，不假定正数量。
- 取值方式: `foreground_record`
- 适用特异性: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: jrc-paper-bref-2015

###### pm_coarse（`pm_coarse`）

仅按实际计入室外空气未特指介质的 2.5–10 微米粒径段净排放；仅在实测基准对齐后由累计监测值推导，不再叠加 PM10。

- 选定流: 颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性 / 单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 实测交换总量除以同一验收输出 Q；cp_air。条件行须有实际发生记录或有证据的零值，不假定正数量。
- 取值方式: `foreground_record`
- 适用特异性: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: jrc-paper-bref-2015

###### pm_large（`pm_large`）

仅按实际计入室外空气未特指介质、粒径大于 PM10 的颗粒净排放；需粒径证据，不以总尘减猜测 PM10。

- 选定流: 颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性 / 单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 实测交换总量除以同一验收输出 Q；cp_air。条件行须有实际发生记录或有证据的零值，不假定正数量。
- 取值方式: `foreground_record`
- 适用特异性: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: jrc-paper-bref-2015

###### butyl_air（`butyl_air`）

仅在稀释剂或配方组分实际含 CAS 123-86-4 且逸出厂界时计，不与总 VOC 重复计。

- 选定流: 乙酸正丁酯排入室外空气，未特指
- 流属性 / 单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 实测交换总量除以同一验收输出 Q；cp_air。条件行须有实际发生记录或有证据的零值，不假定正数量。
- 取值方式: `foreground_record`
- 适用特异性: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: epa-eiip-2002

###### ethyl_air（`ethyl_air`）

仅按实际计 CAS 141-78-6 室外空气未特指净排放；实际留存及回收后包括无组织和排气排放，不把车间室内暴露重复计作排放。要求乙酸乙酯而非乙酸甲酯；来源同义词中的冲突分子式不得建立身份或换算因子。

- 选定流: 乙酸乙酯 `4d9a8790-3ddd-11dd-97ba-0050c2490048`
- 流属性 / 单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 实测交换总量除以同一验收输出 Q；cp_air。条件行须有实际发生记录或有证据的零值，不假定正数量。
- 取值方式: `foreground_record`
- 适用特异性: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: epa-eiip-2002

###### 水分蒸发（`water_vapour`）

实际湿制版、调湿及干燥排入室外空气未特指子介质的净水蒸气；与采购水、纸和胶及每项湿配方携水、液态及固态废物、期初期末库存和产品残余水核对。按匹配空气基准测量进出口环境湿度；报告过程新增的净水蒸气，不重复计入进入的环境水分。实际反应水或氧吸收须有独立实证的 H/O 及组分账，不设猜测闭合项；要求所声明气态的普通 H2O、CAS 7732-18-5；来源中的重水、氚化水或冰同义词不得建立同位素组成、相态或换算因子；不是采购蒸汽或取水。

- 选定流: 水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性 / 单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 实测交换总量除以同一验收输出 Q；cp_water.
- 取值方式: `foreground_record`
- 适用特异性: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_water`
- 来源:

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_separate | foreground | 先调查过程划分及可行系统扩展以避免分配，实测批次及阶段和直接归属的共用公用工程。二者均不可行时，论证相关因果实物关系；包括经济分配在内的其他关系须记录排除前序步骤的理由，并匹配产量及价值记录。扩展系统结果须明确涵盖新增功能。这里只采用 PEF 附件 I 第 4.5 节的层级，不声称全部 PEF 符合或采用回收公式。产品、库存、废物、水及碳实物平衡在环境负荷分配前保留实际数量；不得把联产品实物输出乘分配比例。 | pef-allocation |
| allocation_waste | waste | 污染纸、废溶剂及废墨不给默认联产品或替代信用。实际存在可销售回收物时，独立确立质量、接收方和方法，分别报告分配前实物平衡及分配后负荷账。内部回流只计一次，接收处理负荷明确链接。 |  |

## 8. 前景数据采集、计算与质量规则

### 层结构核算

| component_id | 物理层 | 数量及去向 |
| --- | --- | --- |
| carrier | 临时纤维素纸承载层 | 供应方原纸干质量及实际水分，厂门时保留，之后移除；不是直接贴附标签面 |
| release | 水软化胶释放层 | 采购纸上实际供应方胶层组成及质量；要求批次规格或验证的差值称量，披露不确定性及测试损失；不猜测淀粉或 PVA 配方 |
| image | 黑色陶瓷油墨图像层 | 湿浆输入区分实际颜料及熔剂固体、介质和溶剂；留存图像固体与转移膜分开 |
| film | 透明有机罩膜转移层 | 湿漆输入、干留存膜和空气及废物溶剂输出分别保留；下游烧除不意味着永久聚合物装饰 |

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | decal_converting | finished | foreground_record | 验收纸批；湿干净质量；皮重；设计；水分；测试及废品质量 | 校准称重及批次放行；按实际供货状态测试水分，保留批次输出 Q | kg | 每批及同报告期 | 完整同期间，包含试机及废品 | 实际现场及供货批次 | 每 1 kg 参考流 | 校准、批次及 SDS 和供应方记录、放行及不确定性 |
| cp_layers | decal_converting | decal_paper, ceramic_ink, covercoat | foreground_record | 供货批次；纸及胶干质量；胶组成；湿墨及湿漆；留存图像及膜固体；残余水及溶剂；面积 | 供应方实际批次物料表及验证的胶量见证或差值试验；称量每层添加和干见证样，核对留存及测试损失，不以宣传册牌号作配方 | kg | 每批及同报告期 | 完整同期间，包含试机及废品 | 实际现场及供货批次 | 每 1 kg 参考流 | 校准、批次及 SDS 和供应方记录、放行及不确定性 |
| cp_materials | decal_converting | materials | foreground_record | 收货；期初及期末库存；退料；配方及 SDS 和 CAS；网布寿命；固体；供应方背景；组分 | 校准领退料及库存核对；记录实际更换及复用和配方；新识别交换逐项分开 | kg | 每批及同报告期 | 完整同期间，包含试机及废品 | 实际现场及供货批次 | 每 1 kg 参考流 | 校准、批次及 SDS 和供应方记录、放行及不确定性 |
| cp_energy | decal_converting | electricity | foreground_record | 阶段分表；实际电压；变压损失；干燥加热及通风；地区及年份和供应方；kWh | 读取校准的同期间仪表；独立保留制版、印机、干燥及裁切计数和待机及换版份额；核实热源仅为电力 | kWh; MJ | 每批及同报告期 | 完整同期间，包含试机及废品 | 实际现场及供货批次 | 每 1 kg 参考流 | 校准、批次及 SDS 和供应方记录、放行及不确定性 |
| cp_water | decal_converting | water, washwater | foreground_record | 采购及回水；密度及温度；清洗水质量或体积；固体；接收方；残余水 | 计量供水及分流出水，表征清洗水并测量留存及蒸发水；内部循环不再计取水 | kg | 每批及同报告期 | 完整同期间，包含试机及废品 | 实际现场及供货批次 | 每 1 kg 参考流 | 校准、批次及 SDS 和供应方记录、放行及不确定性 |
| cp_packing | decal_converting | packing | foreground_record | 隔离纸、纸箱及 PE 牌号；接收；出货质量；库存；边角料；皮重；复用份额 | 逐项称量实际包装组件；匹配输入及出货输出和库存，排除于 Q | kg | 每批及同报告期 | 完整同期间，包含试机及废品 | 实际现场及供货批次 | 每 1 kg 参考流 | 校准、批次及 SDS 和供应方记录、放行及不确定性 |
| cp_waste | decal_converting | wastes | foreground_record | 各流质量；组成；溶剂及水和固体；收集粉尘粒径；接收方；转移单 | 采用校准分流容器及废物转移记录；避免水中固体、布上溶剂、内部回用和排放粉尘重复 | kg | 每批及同报告期 | 完整同期间，包含试机及废品 | 实际现场及供货批次 | 每 1 kg 参考流 | 校准、批次及 SDS 和供应方记录、放行及不确定性 |
| cp_air | decal_converting | elementary releases | foreground_record | 实际化学 CAS；输入物种比例；留存及库存及废物及回收物种；同期间排气及无组织测量；互斥 PM 粒径段；捕集；不确定性 | 采用物种专属物料平衡及核实的净排气及无组织监测；仅用实际捕集及留存。调查全部配方组分；实际新增排放物种须独立核实列卡 | kg | 每批及同报告期 | 完整同期间，包含试机及废品 | 实际现场及供货批次 | 每 1 kg 参考流 | 校准、批次及 SDS 和供应方记录、放行及不确定性 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_basis | 所有清单行 | 对每行 i，把其期间实测交换 A_i 除以验收净输出 Q；a_i = A_i / Q。保留分子单位，披露库存及换版核对。 | A_i; Q; cp_output | 每 1 kg 参考流数量 |  |
| layer_reconcile | decal_paper, ceramic_ink, covercoat, finished | 验收纸质量为留存干纸、干胶、图像固体、罩膜固体及实际残余水和溶剂之和。采购复合纸的组分和核对至一份收货，不重复计组分。 | cp_layers; cp_output | 披露的实物层平衡 | tullis-waterslide; vibrantz-ceramic |
| solvent_balance | butyl_air, ethyl_air | 对每个实际物种，净排放等于物种输入减产品留存、库存净累积、各废物流携带溶剂及已记录回收物外送。内部溶剂回收是循环而非破坏。核对监测排气及无组织组分，不重复扣回收或再加总 VOC。负值或不闭合必须调查，不截断为零。 | cp_materials; cp_layers; cp_waste; cp_air | 物种专属净千克排放 | epa-eiip-2002 |
| wet_stream_balance | 湿配方及废物输出 | 每项单独收集液态流采用整份湿质量或 V 乘所记录状态下实测密度。H2O、非水液体、实际固体及污染物作为内部组成账，其和等于该一项整流；未实际分离并独立计量时，不再把其中固体或溶剂重复外送。半固体色浆、分离固体、捕集粉尘及污染布须核实实际物相及接收方；“湿态”本身不建立液体身份。领退料、期初期末原料及在制品库存、测试损失和内部返工各计一次。 | cp_layers; cp_materials; cp_water; cp_waste | 整流及组分核对账和残余不确定性 | epa-eiip-2002 |
| packing_reconcile | interleaf, carton, pe_wrap 及其出货输出 | 每项实际组件核对期初库存及收货与期末库存、出货包装、未用供方退回、实录边料及损坏和其他实际损失。出货皮重排除于 Q。另行筛查入厂供方容器、托盘、胶带和其他实际包装；每项新增交换及兼容接收方单独识别，不隐含在贴花纸内或套通用包装率。 | cp_packing; cp_materials; cp_waste | 完整逐项包装输入、库存及输出账 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| physical_balances | all inventory rows | 保留分配前纸及固体、水、化石及生物碳平衡、供应方背景、实际损失及库存变动和不确定性。纸、胶及膜的碳不是虚构的直接 CO2 排放；扩展路线若实际产生生物 CO2，不得因温室气体报告口径删除。 | cp_layers; cp_water; cp_waste; cp_air |
| identity_provider | all inventory rows | 已核实广义身份须有实际兼容材料及路线限定，并独立核查供应方数量及背景。UUID 缺失或化学组成及接收介质未决时，在具体数据集发布前保留明确缺口。调查每项实际新增化学品、废物及排放；此条件清单不是固定工厂配方。 | cp_materials; cp_air |
| actual_consumables | 制版、印刷、干燥、清洗及治理 | 筛查实际框架及更换件、刮刀、敏化剂、脱膜剂、防粘添加物、油脂、过滤及其他维护或治理耗材及废物流。供方乳液配方为一份收货，另购助剂是独立交换。保留复用寿命或库存分配及实际试机、更换记录；每项实际材料、化学品、废物及基础排放在声称完整 LCI 前逐项新增原子卡，不造通用正消耗。现场若有治理，应在明确过程扩展中计量其输入、捕集物及实际物种转化；捕集 VOC 不自动视为已破坏，捕集后实际尾气才是厂门排放。 | cp_materials; cp_energy; cp_water; cp_waste; cp_air |
| source_scope | all source rules | 生产者声明仅支持对应层或工序，不声称某生产者采用另一供应方牌号。EPA 支持溶剂核算，JRC 支持实际上游纸及定性裁切筛查；不泛化历史因子或单厂数量。 | mr-screen-production; tullis-waterslide; vibrantz-ceramic; epa-eiip-2002; jrc-paper-bref-2015 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_scope | dataset | 拒绝不兼容接收基材及工艺、直接压敏贴标及所有日历。要求实际硬质瓷器瓷釉及烧成相容性；食品接触适用性需另有实际迁移及合规证据，本 PCR 不建立该结论。 | mr-screen-production |
| validate_basis | all inventory rows | 要求恰好一项成品参考输出，双语及所有协议使用 1 kg 基准；保留纸、胶、墨及膜，包装排除于 Q。Q 缺失或参考身份未决时阻止归一化。 |  |
| validate_releases | elementary and waste outputs | 要求精确化学物及 CAS、实际接收介质及参考属性和单位；拒绝 correction flow、近名物种、重复累计 PM 或 VOC，以及将直接排水 UUID 用于外部处理。收集粉尘单列。实际新增物种须有独立身份及计量审计。 | epa-eiip-2002; jrc-paper-bref-2015 |
| validate_coverage | dataset | 报告实测、估计及缺失数量、已做及跳过检查、未决 UUID 及供应方基准和完整性。已编写方法状态不证明厂级数据集完整或已获独立科学认可。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景贴花加工过程及明确供应方背景链接 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 此实物限定未贴附瓷器釉上贴花纸的厂门生产，下游使用及烧成另行实际链接 |
| excluded_use | 日历、标签及完整瓷器制造；不兼容接收物或转移路线；无实际证据的寿命及食品接触声称 |
| required_metadata | 全部参考限定、逐行单位及供货、收货及接收身份、边界、原始采集期间及分配 |
| required_quality_disclosure | 层及实物平衡、实测及计算缺口、UUID 及供应方兼容债务、损失及库存和不确定性、独立审核状态 |
| update_trigger | 纸及胶、油墨及膜配方、接收瓷釉及烧成相容性、热源及控制、供应方、排放身份或计量基准变化 |

## 11. 数据源

| source_id | 标题 | type | reference | 适用范围 |
| --- | --- | --- | --- | --- |
| tullis-waterslide | Waterslide Ceramic and Glass | handbook | https://www.tullisrussell.com/wp-content/uploads/Waterslide-Ceramic-and-Glass-1.pdf | PDF 第 2 页：承载纸、油墨及罩膜图和可烧净胶；仅定性结构，不是胶配方或通用定量 |
| mr-screen-production | Screen printing for ceramic organic and technical decals | handbook | https://www.ceramictoner.com/en/pages/m-r-printdivision | 官方生产范围及设备，网页陶瓷丝印及圆压丝印、隧道干燥和数字曝光段；生产能力，不是供应方配方或加热燃料 |
| vibrantz-ceramic | Ceramic Decoration Colors and Materials | handbook | https://vibrantz.com/expertise-and-solutions/products/ceramic-decoration-colors-and-materials | 流动罩膜及介质、清洗、防粘和触变罩膜段：可转移印刷漆膜及烧除；仍要求实际配方及适用性 |
| epa-eiip-2002 | EIIP Volume II Chapter 15 Printing Packaging and Graphic Arts | official_guidance | https://www.epa.gov/sites/default/files/2015-08/documents/ii15_may2002.pdf | 2002 年 5 月，第 4.1.1 节，PDF31/印刷15.4-1：仅输入、留存及捕集平衡定义，不采用历史控制及留存默认值 |
| jrc-paper-bref-2015 | BAT Reference Document for Production of Pulp Paper and Board | official_guidance | https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | 2015 年，第 7.1.10 节，PDF708/印刷670：实际上游纸整饰及粉尘可能；下游干裁切筛查为实物类比，不是排放因子或回收保证 |
| pef-allocation | Product Environmental Footprint Method, Annex I | official_guidance | https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | 第 4.5 节，PDF/印刷第 63–64 页：划分或系统扩展、相关实物关系、再到有理由的其他关系；仅层级，不声称全部 PEF 符合或默认回收信用 |
