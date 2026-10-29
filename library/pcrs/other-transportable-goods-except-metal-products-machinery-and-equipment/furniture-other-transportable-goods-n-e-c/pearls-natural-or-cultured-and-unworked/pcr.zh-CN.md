---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.pearls-natural-or-cultured-and-unworked
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 淡水组织植入未加工珍珠生产

## 1. 范围与适用性

本PCR覆盖完整淡水外套膜纯组织育珠：有证据活淡水受体供体取得及上游采集/育种供方，暂养、供体外套膜制备、无外加珠核组织植入、恢复观察、真实池塘管理死亡养成、手工采收取珠、仅实际非磨蚀去附着组织污物、干燥目视分级及完整未加工裸珠唯一首次质量放行。FAO1986支持定性技术综合，不是当代场址清单或单一SKU订单。不将性腺有核路线和数字示例作所选路线配方。真实饲料肥药水、抽水电力工具均条件纳入，不假定。[fao-freshwater-pearl-1986]

排除自然采珠、海水珠母贝、有核/性腺植入、附壳半球珠、人造玻璃塑料珠、未采整贝肉壳作参考、矿物宝石、钻孔抛光漂白染蜡涂层及镶嵌串联首饰。带湿组织采收物不是已放行裸珠。FAO海水采收随后蒸馏水洗及精盐抛光，该加工终端为反例而不授权抛光未加工珠。非磨蚀去污不授权表面改性，处理状态未知须验收前解决。[unsd-cpc3-2025; fao-marine-pearl-1991]

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.pearls-natural-or-cultured-and-unworked |
| classification_refs | CPC 3.0 38210；narrower；当前接受关系以`classifications/mappings/cpc-3.0-to-pcr.yaml`及`docs/adr/cpc3-additional34-20261029-38210.md`为准；须满足完整方法范围与排除项，不表示整类覆盖或科学/翻译批准 |
| covered_products | 完整裸露干燥、无外加珠核外套膜组织植入未加工淡水珍珠。 |
| excluded_products | 天然海水有外加珠核人造加工珠、整贝肉壳参考、首饰。 |
| representative_product | 具有实际净质量与声明实测水分等级的首次合格裸珠批次。 |
| production_route | 活贝取得、暂养、供体外套膜、纯组织移植、恢复、池塘养成、手工采收、实际非磨蚀清理、干燥分级首次放行。 |
| market_state | 首次验收的散装完整裸未加工珍珠，净珠质量排除包装。 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 提供完整裸露未加工淡水组织植入珍珠。 |
| How much | 1 kg |
| How well | 声明物种纯组织路线、实测水分净质量、批次等级验收，无表面改性。 |
| How long or cycle | 活贝取得至首放的完整观察队列，不固定养成时间寿命。 |
| reference_flow_link | `finished_pearl` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 天然的或人工养殖的及未加工的珍珠 `a6d1d868-d12f-4b13-bdf6-0cb6a4f4eb5e` |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 受体供体物种; 活贝来源与供方边界; 淡水场址路线; 纯组织无外加珠核; 队列及活体开闭存量; 失败死亡; 采收身份; 完整裸未加工终端; 清理干燥历史; 实测水分; 净质量粒数抽样范围; 实际等级验收; 首放门唯一Q; WIP与已放行FG; 共功能分配; 实际包装; 服务H与原Q_H; 原生供方限制 |

原生完整Product为天然或养殖未加工珍珠，工厂生产混合、处理未指定、质量/kg；不固定CAS、贝种、产地、珠核、直径或等级。本卡限定完整淡水外套膜组织植入无外加珠核的裸珠，已与贝壳组织分离，仅在实际需要时非磨蚀性清理，干燥至声明且实测的含水状态并目视分级、首次质量验收。排除钻孔、研磨、盐抛光、漂白、染色、上蜡、涂层、镶嵌和串联。原生宽泛处理文字不授权表面改性或认证。校准天平称裸珠净质量，排除组织、壳、表面水、不合格物和包装。唯一首次放行Q含仍在期末已放行FG的珠，只计一次；参考输出为1千克。

各限定须进入可消费数据集参考上下文；宽泛相容原生族不要求精确SKU贝种命名，硬材质形态路线类型媒体冲突不能豁免。不虚构单珠质量密度直径珠层厚度产率存活率剂量寿命认证。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 唯一实测首次合格净珠Q含期末已放行FG一次，finished_pearl为1千克。 |
| native_units | all inventory rows | native extensive property | native unit | 电MJ材料kg取水m3松散生石灰m3保持不同，不所有清单套Mass/kg。原单位先转后归属再唯一除法。 |
| count_mass | count observations | Mass and count | kg; item | 同物种等级水分批次校准扣皮称净质量及可追溯代表粒数，保留完整抽样范围配置不确定性；仅该批实测质量粒数桥接item和kg，不用直径密度原生次级系数，清单不预按单珠归一。 |
| single_basis | all inventory rows | reference basis | per reference flow | 仅采原始，卡aggregation引用唯一calc_quotient。毛分子完整V，归属负荷A另维，服务原Q_H，Q=0保留负荷无单位结果。 |

## 5. 系统边界

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | culture and harvest | 一次纳入真实上游活贝采集/育种供方、暂养、供体牺牲与内部外套膜移交、植入恢复、真实池塘管理、死亡采收、实际清理干燥验收及全部失败、零收获、启停闲置清理，不能缩成购买成品珠包装。 | `fao-freshwater-pearl-1986` |
| boundary_q | first release and service | Q门为首次质量验收，新增合格珠净质量只计一次且含期末已放行FG，不再加FG生产输出或扣制造负荷。真实放行后储存包装搬运发运重工按原队列、实测H和原Q_H另服务账。交付退回复验不造Q，内部转移抵消而不新增外部采购。 | `ilcd-attributional-2010` |
| boundary_ecology | actual ecological interfaces | 环境池水/滤食不自动形成购入水饲料、Resource、负CO2或生态信用。测实际受控水毛取回流净耗、相态状态及生物/C/Ca/N/P存量转移。自然生态观测在建立相容基本流身份归属前另记，未知不是零或虚构分子。 | `fao-freshwater-pearl-1986`; `ilcd-attributional-2010` |
| boundary_extension | all actual atoms | 条件卡不主张操作已发生。声称完整前把每个实际缺失的饲料、药品、盐、制剂、燃料、船、增氧机、热源、公用工程、包装、维修件、流体、排放按单一具体物品物种方向及协议所有权新增。整份购入制剂只采购一次，化验活性物载水仅子账；厂内配制保留各真实外购料、能水损失，不藏other或零。 若真实出现外供热/蒸汽，则另采热MJ及载体完整质量、温压相态、供回焓、水能归属与真实返流，供方仅一次；不得默认锅炉或把同一热量、燃料、蒸汽重复采购。 | `fao-freshwater-pearl-1986`; `ilcd-attributional-2010` |

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 来源有据完整活淡水受体供体，采集接收且未植入。 |
| starting_condition_role | 声明真实野采育种供方继承负荷，上游亲贝育种寄主鱼孵化仅实际路线而不虚构设施。 |
| product_classification_scope | CPC 3.0 38210; 声明淡水纯组织未加工终端 |
| recursive_input_rule | 购已育珠贝或珠WIP一次保留实际路线逐交换向量，购成品珠不是生产，后续实际服务另账不新Q。 |
| upstream_dataset_requirement | 相符场址物种路线状态供方清单，未决负荷披露，不零或海水贝肉替代。 |
| disclosure | 物种来源场景时期队列WIP、真实操作水、终端Q/H/Q_H、共功能分配、完整毛量负荷所有权及不确定缺口。 |
| packaging_receipt_basis | packaging | 逐实际完整包装制品，P记录有偿采购（单独或随货付费，有无单独发票均可）。I记录首次非采购外部入流，含单独赠与、借用、租赁/周转池领入和未付费供方随附包装；供方随附仅为I的一个子集。ER必须以同一制品或可审计匹配批次关联本场所先前外发记录；仅有他方使用史不属于退回。P/I/ER互斥。已有匹配物理制品卡及原始分账覆盖这些来源，但仍须满足全部原生材料/形态/状态限制；不相容真实制品须另列原子行，不得替用UUID。X_in/X_out仍为独立实测水料变化，不能替代整制品接收。保留完整湿毛量、所有者/保管者、付费/非采购依据、来源、原外发关联、实际状态单位和继承制造/服务向量。无偿接收既非新制造，也不自动零负荷；真实服务及新增运输搬运按正确原批群和分母归属一次，真实未用服务另留，不设默认寿命或抵扣。存量、毛实物流和负荷向量分开。这是声明的守恒前景核算实现，不声称引用原文规定这些变量名。 | ilcd-attributional-2010 |

## 6. 过程清单结构

完整过程上下文适用每卡，真实条件交换均纳入，未知仍未知，真实缺失原子须新增。逐卡原生限制在每次归一消费中持续有效。物理毛质量体积不按负荷分配缩量，内部活体外套膜水WIP移交匹配于合并门抵消，不新增采购Q。

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| culture | 活贝取得、移植与池塘养成 | required | 实际发生及完整队列 | foreground_production | Q |
| harvest | 采收、裸珠干燥与首次放行 | required | 实际发生及完整队列 | foreground_production | Q |
| service | 实际放行后门内服务 | conditional | 实际发生及完整队列 | original_cohort_service | Q_H |

### 过程：活贝取得、移植与池塘养成（`culture`）

#### 输入

##### 产品流

###### 野生贻贝，活的，新鲜的或冷藏的（`host_mussels`）

原生Product是野生贻贝，活/鲜/冷藏、原始捕获物卸港品质、卸港点生产混合、质量/kg。Mytilus/Perna为包含性例子，ISIC含淡水捕捞，不限海水类群。仅用于有证据的完整活淡水育珠贝（FAO选用Lamellidens marginalis）及实际野采来源，不用牡蛎、海水苗、死贝或加工肉。保留完整带壳湿质量、粒数、来源、采集投入、运输及供方。野采不等于无上游负荷。受体/供体批互不重叠；同次收货中选供体只是内部转移，不重复采购。

- 选定流：野生贻贝，活的，新鲜的或冷藏的 `539310bb-c39d-4c52-8d45-739583df15a0`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为原始转换及正当归属后制造继承负荷向量。用第8节唯一次除法，完整原始毛V另保留。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 野生贻贝，活的，新鲜的或冷藏的（`donor_mussels`）

原生Product是野生贻贝，活/鲜/冷藏、原始捕获物卸港品质、卸港点生产混合、质量/kg。Mytilus/Perna为包含性例子，ISIC含淡水捕捞，不限海水类群。仅用于有证据的完整活淡水育珠贝（FAO选用Lamellidens marginalis）及实际野采来源，不用牡蛎、海水苗、死贝或加工肉。保留完整带壳湿质量、粒数、来源、采集投入、运输及供方。野采不等于无上游负荷。受体/供体批互不重叠；同次收货中选供体只是内部转移，不重复采购。

- 选定流：野生贻贝，活的，新鲜的或冷藏的 `539310bb-c39d-4c52-8d45-739583df15a0`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为原始转换及正当归属后制造继承负荷向量。用第8节唯一次除法，完整原始毛V另保留。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 交流电（`electricity_culture`）

仅在实际用户侧低于1kV电网供电时适用，消费组合到用户、原生地点CN，参考净热值/MJ；在此表示电能而非燃料质量。实测kWh仅乘3.6一次为MJ。该UUID限相符中国接口，孟加拉国或其他地点需另核实当地身份/供方。不用水电发电端或高压电替代。保留真实闲置、启停、失败、清理及实际抽水/干燥用电，不假定设备存在。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：A / Q；A为原始转换及正当归属后制造继承负荷向量。用第8节唯一次除法，完整原始毛V另保留。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_culture`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 自来水（`water_culture`）

仅用于真实经处理市政饮用水Product，工厂生产供应、质量/kg；水源、处理及供方需采集。原生次级体积系数0.001不作为密度使用。体积质量桥需独立实测该水体状态及密度，不用自来水代替池水、河水或地下水。处理供水只一次，整份外购制剂载水不是另一次采购。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为原始转换及正当归属后制造继承负荷向量。用第8节唯一次除法，完整原始毛V另保留。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_culture`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 石灰石（`limestone`）

仅真实用磨细石灰石管理池塘时适用。原生石灰石Product为质量/kg，组成纯度等级、开采路线产地供方未指定。钙质石料分类不强加水泥用途或目数。整份矿物及化验实测，不假定纯CaCO3、施灰剂量或生物钙摄入。

- 选定流：石灰石 `6cf9f186-6e7e-40b5-800e-6759a429e7a8`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为原始转换及正当归属后制造继承负荷向量。用第8节唯一次除法，完整原始毛V另保留。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 生石灰，磨碎的，散装（`quicklime`）

仅真实散装磨细CaO、CAS1305-78-8、工厂端Product适用，原生参考体积/m3。实测松散体积，质量桥须独立测该物质堆积密度，不套水密度或假定堆积。不是熟石灰、石灰石或购入浆料。实际厂内消化另保留真实水、能耗、损失和独立证实的反应水变化；不规定剂量。

- 选定流：生石灰，磨碎的，散装 `7bc0ad3c-fedc-42c0-8c2a-78ce48e5ebd8`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：A / Q；A为原始转换及正当归属后制造继承负荷向量。用第8节唯一次除法，完整原始毛V另保留。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 氢氧化钙粉（`calcium_hydroxide`）

仅在实际独立供货工业级Ca(OH)2白色粉末且与原生路线相符时使用此Product；CAS1305-62-0，工厂门生产混合，原生为初破、洗涤、干燥、二破、煅烧、筛分及石灰水化路线，未固定地域。完整供货粉体、纯度、水分及实际池塘用途适用性独立采证，不预设用量或将工业品级当作生物安全认证。不是闪速熔炼副产品、CaO、石灰石、药剂集合或浆料；另购整浆须独立完整制剂卡，已含水/活性物不再采购，现场水化仅计实际另加CaO/水/能损失。分类中的石灰石类别不推翻明确Ca(OH)2主名CAS水化路线，也不授权原矿替代。 原生属性→精确单位组→真参考单位：93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- 选定流：熟石灰 `0ef11ca4-62b6-4a66-b5d9-76d6539ec86e`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为原始转换及正当归属后制造继承负荷向量。用第8节唯一次除法，完整原始毛V另保留。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 尿素（`urea`）

仅真实氨和CO2合成原生农业尿素适用：Product、CAS57-13-6、白色晶体碳酰胺、质量/kg、工厂生产混合。采整份供货纯度水分供方。化验氮仅子账，不再新增投入或假定氨/硝酸根排放。FAO说明可施肥，不证明通用尿素或剂量。

- 选定流：尿素 `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为原始转换及正当归属后制造继承负荷向量。用第8节唯一次除法，完整原始毛V另保留。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 收集的牛粪制剂（`cattle_manure`）

仅真实收集并送池塘施肥的牛粪制剂适用，整份湿制剂及实际垫料载体只采购一次并保留原负荷状态。牧场沉积和山羊粪不能代替，不从总粪质量猜CH4、NH3或氮磷物种。

- 选定流：收集的牛粪制剂
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A为原始转换及正当归属后制造继承负荷向量。用第8节唯一次除法，完整原始毛V另保留。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 柴油（`diesel`）

仅真实设备用且未含在购入服务中的柴油适用。原生Product质量/kg，牌号配方、密度热值、炼制路线产地供方未指定。保留真实发动机、收货油箱耗用及独立密度热值。载体kg与热MJ是关联维度，不是两采购。真实排气进气物种据证据逐一增列，无固定因子。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为原始转换及正当归属后制造继承负荷向量。用第8节唯一次除法，完整原始毛V另保留。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_culture`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 不锈钢开贝器（`opener_receipt`）

条件为真实整件收货，新旧子批及原负荷分开；完整毛保管V不是服务负荷。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：不锈钢开贝器
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 不锈钢开贝器（`opener_service`）

仅该物品向观察队列提供的真实体现服务，按真实使用强度能力及有证据服务能力定向量，不固定寿命、每kg一整机或重复采购。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：不锈钢开贝器
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A为一次归属实际体现服务。用第8节唯一次除法，不重复整件采购。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 不锈钢组织切刀（`graftknife_receipt`）

条件为真实整件收货，新旧子批及原负荷分开；完整毛保管V不是服务负荷。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：不锈钢组织切刀
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 不锈钢组织切刀（`graftknife_service`）

仅该物品向观察队列提供的真实体现服务，按真实使用强度能力及有证据服务能力定向量，不固定寿命、每kg一整机或重复采购。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：不锈钢组织切刀
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A为一次归属实际体现服务。用第8节唯一次除法，不重复整件采购。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 带柄切口刀（`incisionknife_receipt`）

条件为真实整件收货，新旧子批及原负荷分开；完整毛保管V不是服务负荷。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：带柄切口刀
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 带柄切口刀（`incisionknife_service`）

仅该物品向观察队列提供的真实体现服务，按真实使用强度能力及有证据服务能力定向量，不固定寿命、每kg一整机或重复采购。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：带柄切口刀
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A为一次归属实际体现服务。用第8节唯一次除法，不重复整件采购。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 不锈钢组织移植针（`graftcarrier_receipt`）

条件为真实整件收货，新旧子批及原负荷分开；完整毛保管V不是服务负荷。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：不锈钢组织移植针
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 不锈钢组织移植针（`graftcarrier_service`）

仅该物品向观察队列提供的真实体现服务，按真实使用强度能力及有证据服务能力定向量，不固定寿命、每kg一整机或重复采购。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：不锈钢组织移植针
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A为一次归属实际体现服务。用第8节唯一次除法，不重复整件采购。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 不锈钢带钩刮片（`spatula_receipt`）

条件为真实整件收货，新旧子批及原负荷分开；完整毛保管V不是服务负荷。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：不锈钢带钩刮片
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 不锈钢带钩刮片（`spatula_service`）

仅该物品向观察队列提供的真实体现服务，按真实使用强度能力及有证据服务能力定向量，不固定寿命、每kg一整机或重复采购。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：不锈钢带钩刮片
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A为一次归属实际体现服务。用第8节唯一次除法，不重复整件采购。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 金属镊钳（`pincher_receipt`）

条件为真实整件收货，新旧子批及原负荷分开；完整毛保管V不是服务负荷。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：金属镊钳
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 金属镊钳（`pincher_service`）

仅该物品向观察队列提供的真实体现服务，按真实使用强度能力及有证据服务能力定向量，不固定寿命、每kg一整机或重复采购。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：金属镊钳
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A为一次归属实际体现服务。用第8节唯一次除法，不重复整件采购。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 带夹木制持贝器（`holder_receipt`）

条件为真实整件收货，新旧子批及原负荷分开；完整毛保管V不是服务负荷。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：带夹木制持贝器
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 带夹木制持贝器（`holder_service`）

仅该物品向观察队列提供的真实体现服务，按真实使用强度能力及有证据服务能力定向量，不固定寿命、每kg一整机或重复采购。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：带夹木制持贝器
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A为一次归属实际体现服务。用第8节唯一次除法，不重复整件采购。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 木制组织切板（`board_receipt`）

条件为真实整件收货，新旧子批及原负荷分开；完整毛保管V不是服务负荷。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：木制组织切板
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 木制组织切板（`board_service`）

仅该物品向观察队列提供的真实体现服务，按真实使用强度能力及有证据服务能力定向量，不固定寿命、每kg一整机或重复采购。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：木制组织切板
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A为一次归属实际体现服务。用第8节唯一次除法，不重复整件采购。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 木制撑贝楔（`peg_receipt`）

条件为真实整件收货，新旧子批及原负荷分开；完整毛保管V不是服务负荷。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：木制撑贝楔
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 木制撑贝楔（`peg_service`）

仅该物品向观察队列提供的真实体现服务，按真实使用强度能力及有证据服务能力定向量，不固定寿命、每kg一整机或重复采购。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：木制撑贝楔
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A为一次归属实际体现服务。用第8节唯一次除法，不重复整件采购。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 聚丙烯盛贝托盘（`tray_receipt`）

条件为真实整件收货，新旧子批及原负荷分开；完整毛保管V不是服务负荷。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：聚丙烯盛贝托盘
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 聚丙烯盛贝托盘（`tray_service`）

仅该物品向观察队列提供的真实体现服务，按真实使用强度能力及有证据服务能力定向量，不固定寿命、每kg一整机或重复采购。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：聚丙烯盛贝托盘
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A为一次归属实际体现服务。用第8节唯一次除法，不重复整件采购。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 合成聚氨酯海绵（`sponge_receipt`）

条件为真实整件收货，新旧子批及原负荷分开；完整毛保管V不是服务负荷。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：合成聚氨酯海绵
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 合成聚氨酯海绵（`sponge_service`）

仅该物品向观察队列提供的真实体现服务，按真实使用强度能力及有证据服务能力定向量，不固定寿命、每kg一整机或重复采购。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：合成聚氨酯海绵
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A为一次归属实际体现服务。用第8节唯一次除法，不重复整件采购。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 木制恢复笼框（`cageframe_receipt`）

条件为真实整件收货，新旧子批及原负荷分开；完整毛保管V不是服务负荷。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：木制恢复笼框
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 木制恢复笼框（`cageframe_service`）

仅该物品向观察队列提供的真实体现服务，按真实使用强度能力及有证据服务能力定向量，不固定寿命、每kg一整机或重复采购。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：木制恢复笼框
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A为一次归属实际体现服务。用第8节唯一次除法，不重复整件采购。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 聚乙烯恢复笼网（`net_receipt`）

条件为真实整件收货，新旧子批及原负荷分开；完整毛保管V不是服务负荷。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：聚乙烯恢复笼网
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 聚乙烯恢复笼网（`net_service`）

仅该物品向观察队列提供的真实体现服务，按真实使用强度能力及有证据服务能力定向量，不固定寿命、每kg一整机或重复采购。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：聚乙烯恢复笼网
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A为一次归属实际体现服务。用第8节唯一次除法，不重复整件采购。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 泵（`pump_receipt`）

条件为真实整件收货，新旧子批及原负荷分开；完整毛保管V不是服务负荷。原生泵为工厂端流体输送机械Product、质量/kg，含离心循环水泵；不采用不相关私密用途同义词，须实际水泵供方相符。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：泵 `bbd91be4-dc00-44c2-8bc1-f67ee79174a7`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 泵（`pump_service`）

仅该物品向观察队列提供的真实体现服务，按真实使用强度能力及有证据服务能力定向量，不固定寿命、每kg一整机或重复采购。原生泵为工厂端流体输送机械Product、质量/kg，含离心循环水泵；不采用不相关私密用途同义词，须实际水泵供方相符。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：泵 `bbd91be4-dc00-44c2-8bc1-f67ee79174a7`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为一次归属实际体现服务。用第8节唯一次除法，不重复整件采购。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 木制采贝船（`boat_receipt`）

条件为真实整件收货，新旧子批及原负荷分开；完整毛保管V不是服务负荷。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：木制采贝船
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 木制采贝船（`boat_service`）

仅该物品向观察队列提供的真实体现服务，按真实使用强度能力及有证据服务能力定向量，不固定寿命、每kg一整机或重复采购。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：木制采贝船
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A为一次归属实际体现服务。用第8节唯一次除法，不重复整件采购。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 未处理木制维修条（`repairwood_in`）

仅真实单独收拆的该确切材质单件适用，不是整笼整泵或另一聚合物。保留新旧来源及完整湿质量，真实新增即使留在完整期末在装存量也保留入流。X_in/out仅与其他真实流项去重，水流体另列。无许可或检测失败的实际作业仍采集原队列和真实待处置废弃去向。 X仅扣另一实际OTHER同侧流中同事件同物料的已证重复；不扣存量、对侧、卡存在或留在期末的真实料水。真实F_in/F_out及完整湿存量同时保留。

- 选定流：未处理木制维修条
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 聚乙烯维修网片（`repairnet_in`）

仅真实单独收拆的该确切材质单件适用，不是整笼整泵或另一聚合物。保留新旧来源及完整湿质量，真实新增即使留在完整期末在装存量也保留入流。X_in/out仅与其他真实流项去重，水流体另列。无许可或检测失败的实际作业仍采集原队列和真实待处置废弃去向。 X仅扣另一实际OTHER同侧流中同事件同物料的已证重复；不扣存量、对侧、卡存在或留在期末的真实料水。真实F_in/F_out及完整湿存量同时保留。

- 选定流：聚乙烯维修网片
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 弹性体泵密封件（`repairseal_in`）

仅真实单独收拆的该确切材质单件适用，不是整笼整泵或另一聚合物。保留新旧来源及完整湿质量，真实新增即使留在完整期末在装存量也保留入流。X_in/out仅与其他真实流项去重，水流体另列。无许可或检测失败的实际作业仍采集原队列和真实待处置废弃去向。 X仅扣另一实际OTHER同侧流中同事件同物料的已证重复；不扣存量、对侧、卡存在或留在期末的真实料水。真实F_in/F_out及完整湿存量同时保留。

- 选定流：弹性体泵密封件
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

##### 基本流

###### 地下水（`groundwater_withdrawal`）

仅真实直接抽取地下水时纳入：基本资源水、CAS7732-18-5、参考体积/m3。分别记录水源、完整毛取水、各受纳体回水及净消耗。原生国别水稀缺处理以抽取国作过程地点，同次抽取不再加另一稀缺等级水流。环境池水不自动等于取水。本卡非购入供水，上游供方已含抽取只计一次。

- 选定流：地下水 `4f462198-40cd-4184-8733-86648a20dc3f`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_culture`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 河水（`surfacewater_withdrawal`）

仅真实直接抽取河水时纳入：基本资源水、CAS7732-18-5、参考体积/m3。分别记录水源、完整毛取水、各受纳体回水及净消耗。原生国别水稀缺处理以抽取国作过程地点，同次抽取不再加另一稀缺等级水流。环境池水不自动等于取水。本卡非购入供水，上游供方已含抽取只计一次。 此UUID明确为river water/河水，不泛指湖水、其他池塘水、地下水或海水；其他实际水源须各自相容原生身份和去向。

- 选定流：河水 `805a7346-1664-4483-afe3-4b224be5e361`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_culture`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 环境水蒸气摄入（`humidity_culture`）

仅实际普通吸湿/凝结进入本过程湿存量时适用，不限维修清洗。独立测水分状态，不冒充工业蒸汽或能值法大气水Product。完整期末湿存量与实际入流同时保留，仅与其他真实入口去重。 X仅扣另一实际OTHER同侧流中同事件同物料的已证重复；不扣存量、对侧、卡存在或留在期末的真实料水。真实F_in/F_out及完整湿存量同时保留。

- 选定流：环境水蒸气摄入
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_culture`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

#### 输出

##### 废物流

###### 育珠过程废水（`effluent_culture`）

仅真实收集液态废水外送处理时适用，一条完整Waste出口，有实测组成去向。水溶质子账不与整股再相加。不用锰渣或硅生产废水代替，同次移交不再加基本排放，处理供方及最终物种只一次。

- 选定流：育珠过程废水
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_culture`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 死亡完整淡水育珠贝（`mortality`）

真实受体供体死亡、失败及零收获个体，逐只计量，不假存活率。实物V不按分配缩量，普通废物不合格样品销售不自动T_other。

- 选定流：死亡完整淡水育珠贝
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs_culture`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 废弃不锈钢开贝器（`opener_discard`）

条件为真实单独废弃该物品及其湿质量、新旧维修来源与处理；混合单出口仅内部互斥来源池，不另加Waste。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：废弃不锈钢开贝器
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 废弃不锈钢组织切刀（`graftknife_discard`）

条件为真实单独废弃该物品及其湿质量、新旧维修来源与处理；混合单出口仅内部互斥来源池，不另加Waste。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：废弃不锈钢组织切刀
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 废弃带柄切口刀（`incisionknife_discard`）

条件为真实单独废弃该物品及其湿质量、新旧维修来源与处理；混合单出口仅内部互斥来源池，不另加Waste。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：废弃带柄切口刀
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 废弃不锈钢组织移植针（`graftcarrier_discard`）

条件为真实单独废弃该物品及其湿质量、新旧维修来源与处理；混合单出口仅内部互斥来源池，不另加Waste。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：废弃不锈钢组织移植针
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 废弃不锈钢带钩刮片（`spatula_discard`）

条件为真实单独废弃该物品及其湿质量、新旧维修来源与处理；混合单出口仅内部互斥来源池，不另加Waste。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：废弃不锈钢带钩刮片
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 废弃金属镊钳（`pincher_discard`）

条件为真实单独废弃该物品及其湿质量、新旧维修来源与处理；混合单出口仅内部互斥来源池，不另加Waste。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：废弃金属镊钳
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 废弃带夹木制持贝器（`holder_discard`）

条件为真实单独废弃该物品及其湿质量、新旧维修来源与处理；混合单出口仅内部互斥来源池，不另加Waste。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：废弃带夹木制持贝器
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 废弃木制组织切板（`board_discard`）

条件为真实单独废弃该物品及其湿质量、新旧维修来源与处理；混合单出口仅内部互斥来源池，不另加Waste。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：废弃木制组织切板
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 废弃木制撑贝楔（`peg_discard`）

条件为真实单独废弃该物品及其湿质量、新旧维修来源与处理；混合单出口仅内部互斥来源池，不另加Waste。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：废弃木制撑贝楔
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 废弃聚丙烯盛贝托盘（`tray_discard`）

条件为真实单独废弃该物品及其湿质量、新旧维修来源与处理；混合单出口仅内部互斥来源池，不另加Waste。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：废弃聚丙烯盛贝托盘
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 废弃合成聚氨酯海绵（`sponge_discard`）

条件为真实单独废弃该物品及其湿质量、新旧维修来源与处理；混合单出口仅内部互斥来源池，不另加Waste。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：废弃合成聚氨酯海绵
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 废弃木制恢复笼框（`cageframe_discard`）

条件为真实单独废弃该物品及其湿质量、新旧维修来源与处理；混合单出口仅内部互斥来源池，不另加Waste。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：废弃木制恢复笼框
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 废弃聚乙烯恢复笼网（`net_discard`）

条件为真实单独废弃该物品及其湿质量、新旧维修来源与处理；混合单出口仅内部互斥来源池，不另加Waste。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：废弃聚乙烯恢复笼网
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 废弃水泵（`pump_discard`）

条件为真实单独废弃该物品及其湿质量、新旧维修来源与处理；混合单出口仅内部互斥来源池，不另加Waste。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：废弃水泵
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 废弃木制采贝船（`boat_discard`）

条件为真实单独废弃该物品及其湿质量、新旧维修来源与处理；混合单出口仅内部互斥来源池，不另加Waste。这是单一真实物品，不是其他材质或工具集合。核实供货材质涂饰形态，整件含组件一次。真实单独维修材料和在装流体仅实际发生时增列，不从条件卡虚构工具泵船加热或投喂。

- 选定流：废弃木制采贝船
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 废木制维修条（`repairwood_out`）

仅真实单独收拆的该确切材质单件适用，不是整笼整泵或另一聚合物。保留新旧来源及完整湿质量，真实新增即使留在完整期末在装存量也保留入流。X_in/out仅与其他真实流项去重，水流体另列。无许可或检测失败的实际作业仍采集原队列和真实待处置废弃去向。 X仅扣另一实际OTHER同侧流中同事件同物料的已证重复；不扣存量、对侧、卡存在或留在期末的真实料水。真实F_in/F_out及完整湿存量同时保留。

- 选定流：废木制维修条
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 废聚乙烯维修网片（`repairnet_out`）

仅真实单独收拆的该确切材质单件适用，不是整笼整泵或另一聚合物。保留新旧来源及完整湿质量，真实新增即使留在完整期末在装存量也保留入流。X_in/out仅与其他真实流项去重，水流体另列。无许可或检测失败的实际作业仍采集原队列和真实待处置废弃去向。 X仅扣另一实际OTHER同侧流中同事件同物料的已证重复；不扣存量、对侧、卡存在或留在期末的真实料水。真实F_in/F_out及完整湿存量同时保留。

- 选定流：废聚乙烯维修网片
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 废弹性体泵密封件（`repairseal_out`）

仅真实单独收拆的该确切材质单件适用，不是整笼整泵或另一聚合物。保留新旧来源及完整湿质量，真实新增即使留在完整期末在装存量也保留入流。X_in/out仅与其他真实流项去重，水流体另列。无许可或检测失败的实际作业仍采集原队列和真实待处置废弃去向。 X仅扣另一实际OTHER同侧流中同事件同物料的已证重复；不扣存量、对侧、卡存在或留在期末的真实料水。真实F_in/F_out及完整湿存量同时保留。

- 选定流：废弹性体泵密封件
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_asset`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

##### 基本流

###### 水蒸气（`evaporation_culture`）

实际普通H2O气体损失，CAS7732-18-5，基本流质量/kg至非城市空气；原生另有高烟囱选项，本卡不主张。不能以重水、氚水、冰同义词推翻普通H2O气体。保留真实池面蒸发、干燥及普通储存搬运失水，不排水体，不用一残差拟合两未知。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac07-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_culture`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 返回淡水的液态水（`water_return`）

仅实际受控返回明确淡水受纳体时适用；测完整毛体积温度组成及质量闭合独立密度。净消耗不替代本腿，不默认整池交换或Product蒸汽冷凝水返回，溶质组分不与整股废水质量叠加。

- 选定流：返回淡水的液态水
- 流属性/单位：Volume / m3
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_culture`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 铵离子（`ammonium_release`）

仅在实际独立证实向淡水受纳体排放时使用此基本流；主身份为NH4+, CAS 14798-03-9，原生Mass/kg。按真实物种、相态、pH/分析基准、浓度与累计流量或真实速率时间量测；总N/P、氨氮、COD/VOC或残差不自动证明离子化学质量。其他物种/盐类、同位素、海水、土壤、空气及长期排放不互换。全废水转交外部处理与最终基本排放按真实边界只归属一次，不双计；未知相态/受纳体保持未决，不假排放或零。原生季铵、氮阳离子及氘代别名不覆盖主名CAS明确的普通NH4+。 原生属性→精确单位组→真参考单位：93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- 选定流：铵 `fe0acd60-3ddc-11dd-aaa5-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_species`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 硝酸根离子（`nitrate_release`）

仅在实际独立证实向淡水受纳体排放时使用此基本流；主身份为NO3-, CAS 14797-55-8，原生Mass/kg。按真实物种、相态、pH/分析基准、浓度与累计流量或真实速率时间量测；总N/P、氨氮、COD/VOC或残差不自动证明离子化学质量。其他物种/盐类、同位素、海水、土壤、空气及长期排放不互换。全废水转交外部处理与最终基本排放按真实边界只归属一次，不双计；未知相态/受纳体保持未决，不假排放或零。 原生属性→精确单位组→真参考单位：93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- 选定流：硝酸根 `4d9a8790-3ddd-11dd-8d68-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_species`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 正磷酸根离子（`phosphate_release`）

仅在实际独立证实向淡水受纳体排放时使用此基本流；主身份为PO4(3-), CAS 14265-44-2，原生Mass/kg。按真实物种、相态、pH/分析基准、浓度与累计流量或真实速率时间量测；总N/P、氨氮、COD/VOC或残差不自动证明离子化学质量。其他物种/盐类、同位素、海水、土壤、空气及长期排放不互换。全废水转交外部处理与最终基本排放按真实边界只归属一次，不双计；未知相态/受纳体保持未决，不假排放或零。仅实测PO4三阴离子，不把HPO4/H2PO4或总磷直接当本物种；需要真实物种分配及相容流。 原生属性→精确单位组→真参考单位：93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- 选定流：磷酸盐 `08a91e70-3ddc-11dd-9787-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_species`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 二氧化碳气体（`co2_release`）

仅独立证实真实跨界时适用。实测CO2、碳来源与空气受纳体，贝壳珍珠钙化不证明负CO2或信用，平流层不是池塘空气。保留浓度、累计体积或真实速率时间、不确定性与来源，不由COD/VOC或元素残差猜分子和数量。

- 选定流：二氧化碳气体
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_species`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

### 过程：采收、裸珠干燥与首次放行（`harvest`）

#### 输入

##### 产品流

###### 交流电（`electricity_harvest`）

仅在实际用户侧低于1kV电网供电时适用，消费组合到用户、原生地点CN，参考净热值/MJ；在此表示电能而非燃料质量。实测kWh仅乘3.6一次为MJ。该UUID限相符中国接口，孟加拉国或其他地点需另核实当地身份/供方。不用水电发电端或高压电替代。保留真实闲置、启停、失败、清理及实际抽水/干燥用电，不假定设备存在。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：A / Q；A为原始转换及正当归属后制造继承负荷向量。用第8节唯一次除法，完整原始毛V另保留。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_harvest`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 自来水（`water_harvest`）

仅用于真实经处理市政饮用水Product，工厂生产供应、质量/kg；水源、处理及供方需采集。原生次级体积系数0.001不作为密度使用。体积质量桥需独立实测该水体状态及密度，不用自来水代替池水、河水或地下水。处理供水只一次，整份外购制剂载水不是另一次采购。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为原始转换及正当归属后制造继承负荷向量。用第8节唯一次除法，完整原始毛V另保留。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_harvest`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

##### 基本流

###### 环境水蒸气摄入（`humidity_harvest`）

仅实际普通吸湿/凝结进入本过程湿存量时适用，不限维修清洗。独立测水分状态，不冒充工业蒸汽或能值法大气水Product。完整期末湿存量与实际入流同时保留，仅与其他真实入口去重。 X仅扣另一实际OTHER同侧流中同事件同物料的已证重复；不扣存量、对侧、卡存在或留在期末的真实料水。真实F_in/F_out及完整湿存量同时保留。

- 选定流：环境水蒸气摄入
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_harvest`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

#### 输出

##### 产品流

###### 天然的或人工养殖的及未加工的珍珠（`finished_pearl`）

原生完整Product为天然或养殖未加工珍珠，工厂生产混合、处理未指定、质量/kg；不固定CAS、贝种、产地、珠核、直径或等级。本卡限定完整淡水外套膜组织植入无外加珠核的裸珠，已与贝壳组织分离，仅在实际需要时非磨蚀性清理，干燥至声明且实测的含水状态并目视分级、首次质量验收。排除钻孔、研磨、盐抛光、漂白、染色、上蜡、涂层、镶嵌和串联。原生宽泛处理文字不授权表面改性或认证。校准天平称裸珠净质量，排除组织、壳、表面水、不合格物和包装。唯一首次放行Q含仍在期末已放行FG的珠，只计一次；参考输出为1千克。

- 选定流：天然的或人工养殖的及未加工的珍珠 `a6d1d868-d12f-4b13-bdf6-0cb6a4f4eb5e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 未煮制淡水贝壳（`shell_product`）

仅实际分售且独立功能状态接收方与负荷决定的贝壳，不免费抵扣。实物V不按分配缩量，普通废物不合格样品销售不自动T_other。

- 选定流：未煮制淡水贝壳
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs_harvest`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 未煮制淡水贝软体组织（`tissue_product`）

仅真实交付且有状态去向的共功能，不假定食品饲料许可。实物V不按分配缩量，普通废物不合格样品销售不自动T_other。

- 选定流：未煮制淡水贝软体组织
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs_harvest`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

##### 废物流

###### 育珠过程废水（`effluent_harvest`）

仅真实收集液态废水外送处理时适用，一条完整Waste出口，有实测组成去向。水溶质子账不与整股再相加。不用锰渣或硅生产废水代替，同次移交不再加基本排放，处理供方及最终物种只一次。

- 选定流：育珠过程废水
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_harvest`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 废弃未煮制淡水贝壳（`shell_waste`）

仅真实分开的贝壳出口，熟贻贝原生和专家70%估计不适用。实物V不按分配缩量，普通废物不合格样品销售不自动T_other。

- 选定流：废弃未煮制淡水贝壳
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs_harvest`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 废弃淡水贝软体组织（`tissue_waste`）

真实分开的供体修整/采收组织及处理，不重复整贝质量或内部移植组织。实物V不按分配缩量，普通废物不合格样品销售不自动T_other。

- 选定流：废弃淡水贝软体组织
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs_harvest`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 淡水贝壳与组织混合废物（`mixed_biomass`）

一股真实合并壳组织出口只作一条原子Waste，保留互斥来源池，不再组分外排。实物V不按分配缩量，普通废物不合格样品销售不自动T_other。

- 选定流：淡水贝壳与组织混合废物
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs_harvest`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 不合格未加工珍珠（`pearl_reject`）

Q外真实不合格样品损失仍保留制造处理负荷，销售本身不移交。实物V不按分配缩量，普通废物不合格样品销售不自动T_other。

- 选定流：不合格未加工珍珠
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs_harvest`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

##### 基本流

###### 水蒸气（`evaporation_harvest`）

实际普通H2O气体损失，CAS7732-18-5，基本流质量/kg至非城市空气；原生另有高烟囱选项，本卡不主张。不能以重水、氚水、冰同义词推翻普通H2O气体。保留真实池面蒸发、干燥及普通储存搬运失水，不排水体，不用一残差拟合两未知。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac07-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_harvest`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

### 过程：实际放行后门内服务（`service`）

#### 输入

##### 产品流

###### 交流电（`electricity_service`）

仅在实际用户侧低于1kV电网供电时适用，消费组合到用户、原生地点CN，参考净热值/MJ；在此表示电能而非燃料质量。实测kWh仅乘3.6一次为MJ。该UUID限相符中国接口，孟加拉国或其他地点需另核实当地身份/供方。不用水电发电端或高压电替代。保留真实闲置、启停、失败、清理及实际抽水/干燥用电，不假定设备存在。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：A / Q；A为原单位转换后的实际原队列服务。用第8节唯一次除法，另保留完整实物V。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_service`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 自来水（`water_service`）

仅用于真实经处理市政饮用水Product，工厂生产供应、质量/kg；水源、处理及供方需采集。原生次级体积系数0.001不作为密度使用。体积质量桥需独立实测该水体状态及密度，不用自来水代替池水、河水或地下水。处理供水只一次，整份外购制剂载水不是另一次采购。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A为原单位转换后的实际原队列服务。用第8节唯一次除法，另保留完整实物V。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_service`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 缝制袋（`bag_p`）

本P卡记录这一相同合格制品的有偿采购，含单独或随货付费；首次非采购接收和真实退回分别用I及ER。原生缝制袋Product为棉布、全衬或部分衬里、消费者端消费混合、质量/kg，抽绳袋为明确同义词。仅真实整只带衬棉袋，不是散布、PE/PET衬膜或无衬袋。原生示例布用量面积不定实际量。整袋衬里缝线只采购一次，组件子账互不重叠。仅真实事件P：独立采购收货。A=V为完整真实毛流，不是存量校正耗用、B_open+U-B_close、负荷向量、净交付或经济份额。用观察H内原Q_H，不新增Q。P/I在同一实物入境事件互斥且整件上游仅归属一次，ER不自动采购。S含随后退回的毛发运。期初期末空件/附着WIP/附着FG/可复用件完整湿存量均保留，内部复用抵消。X只与其他真实入口出口去重，不能消掉留期末的新增入流。毛披露不新增采购供方负荷信用，真实所有者另一次归属。 X仅扣另一实际OTHER同侧流中同事件同物料的已证重复；不扣存量、对侧、卡存在或留在期末的真实料水。真实F_in/F_out及完整湿存量同时保留。

- 选定流：缝制袋 `a7ec2c0b-ce0e-4036-ad92-08a39f2b0d0f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`ilcd-attributional-2010`

###### 缝制袋（`bag_i`）

本I卡记录这一相同合格制品的首次非采购接收，含单独赠与、借用、租赁/周转池领入或未付费供方随附接收。下文随货示例仅为子集，不能限制其他首次非采购来源；排除有偿P及真实ER。原生缝制袋Product为棉布、全衬或部分衬里、消费者端消费混合、质量/kg，抽绳袋为明确同义词。仅真实整只带衬棉袋，不是散布、PE/PET衬膜或无衬袋。原生示例布用量面积不定实际量。整袋衬里缝线只采购一次，组件子账互不重叠。仅真实事件I：供货内含进入。A=V为完整真实毛流，不是存量校正耗用、B_open+U-B_close、负荷向量、净交付或经济份额。用观察H内原Q_H，不新增Q。P/I在同一实物入境事件互斥且整件上游仅归属一次，ER不自动采购。S含随后退回的毛发运。期初期末空件/附着WIP/附着FG/可复用件完整湿存量均保留，内部复用抵消。X只与其他真实入口出口去重，不能消掉留期末的新增入流。毛披露不新增采购供方负荷信用，真实所有者另一次归属。 X仅扣另一实际OTHER同侧流中同事件同物料的已证重复；不扣存量、对侧、卡存在或留在期末的真实料水。真实F_in/F_out及完整湿存量同时保留。

- 选定流：缝制袋 `a7ec2c0b-ce0e-4036-ad92-08a39f2b0d0f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`ilcd-attributional-2010`

###### 缝制袋（`bag_er`）

原生缝制袋Product为棉布、全衬或部分衬里、消费者端消费混合、质量/kg，抽绳袋为明确同义词。仅真实整只带衬棉袋，不是散布、PE/PET衬膜或无衬袋。原生示例布用量面积不定实际量。整袋衬里缝线只采购一次，组件子账互不重叠。仅真实事件ER：收到外部退回。A=V为完整真实毛流，不是存量校正耗用、B_open+U-B_close、负荷向量、净交付或经济份额。用观察H内原Q_H，不新增Q。P/I在同一实物入境事件互斥且整件上游仅归属一次，ER不自动采购。S含随后退回的毛发运。期初期末空件/附着WIP/附着FG/可复用件完整湿存量均保留，内部复用抵消。X只与其他真实入口出口去重，不能消掉留期末的新增入流。毛披露不新增采购供方负荷信用，真实所有者另一次归属。 X仅扣另一实际OTHER同侧流中同事件同物料的已证重复；不扣存量、对侧、卡存在或留在期末的真实料水。真实F_in/F_out及完整湿存量同时保留。

- 选定流：缝制袋 `a7ec2c0b-ce0e-4036-ad92-08a39f2b0d0f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`ilcd-attributional-2010`

###### 瓦楞纸箱（`carton_p`）

本P卡记录这一相同合格制品的有偿采购，含单独或随货付费；首次非采购接收和真实退回分别用I及ER。原生瓦楞纸箱Product质量/kg、工厂生产混合、技术组合，明确16.6%原生纤维及83.4%再生纤维。条件绑定须真实供方组成符合，不是珍珠包装默认配方。不同真实纸箱须另用相容身份。整箱已含实际纸板胶粘剂一次。仅真实事件P：独立采购收货。A=V为完整真实毛流，不是存量校正耗用、B_open+U-B_close、负荷向量、净交付或经济份额。用观察H内原Q_H，不新增Q。P/I在同一实物入境事件互斥且整件上游仅归属一次，ER不自动采购。S含随后退回的毛发运。期初期末空件/附着WIP/附着FG/可复用件完整湿存量均保留，内部复用抵消。X只与其他真实入口出口去重，不能消掉留期末的新增入流。毛披露不新增采购供方负荷信用，真实所有者另一次归属。 X仅扣另一实际OTHER同侧流中同事件同物料的已证重复；不扣存量、对侧、卡存在或留在期末的真实料水。真实F_in/F_out及完整湿存量同时保留。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`ilcd-attributional-2010`

###### 瓦楞纸箱（`carton_i`）

本I卡记录这一相同合格制品的首次非采购接收，含单独赠与、借用、租赁/周转池领入或未付费供方随附接收。下文随货示例仅为子集，不能限制其他首次非采购来源；排除有偿P及真实ER。原生瓦楞纸箱Product质量/kg、工厂生产混合、技术组合，明确16.6%原生纤维及83.4%再生纤维。条件绑定须真实供方组成符合，不是珍珠包装默认配方。不同真实纸箱须另用相容身份。整箱已含实际纸板胶粘剂一次。仅真实事件I：供货内含进入。A=V为完整真实毛流，不是存量校正耗用、B_open+U-B_close、负荷向量、净交付或经济份额。用观察H内原Q_H，不新增Q。P/I在同一实物入境事件互斥且整件上游仅归属一次，ER不自动采购。S含随后退回的毛发运。期初期末空件/附着WIP/附着FG/可复用件完整湿存量均保留，内部复用抵消。X只与其他真实入口出口去重，不能消掉留期末的新增入流。毛披露不新增采购供方负荷信用，真实所有者另一次归属。 X仅扣另一实际OTHER同侧流中同事件同物料的已证重复；不扣存量、对侧、卡存在或留在期末的真实料水。真实F_in/F_out及完整湿存量同时保留。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`ilcd-attributional-2010`

###### 瓦楞纸箱（`carton_er`）

原生瓦楞纸箱Product质量/kg、工厂生产混合、技术组合，明确16.6%原生纤维及83.4%再生纤维。条件绑定须真实供方组成符合，不是珍珠包装默认配方。不同真实纸箱须另用相容身份。整箱已含实际纸板胶粘剂一次。仅真实事件ER：收到外部退回。A=V为完整真实毛流，不是存量校正耗用、B_open+U-B_close、负荷向量、净交付或经济份额。用观察H内原Q_H，不新增Q。P/I在同一实物入境事件互斥且整件上游仅归属一次，ER不自动采购。S含随后退回的毛发运。期初期末空件/附着WIP/附着FG/可复用件完整湿存量均保留，内部复用抵消。X只与其他真实入口出口去重，不能消掉留期末的新增入流。毛披露不新增采购供方负荷信用，真实所有者另一次归属。 X仅扣另一实际OTHER同侧流中同事件同物料的已证重复；不扣存量、对侧、卡存在或留在期末的真实料水。真实F_in/F_out及完整湿存量同时保留。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`ilcd-attributional-2010`

###### 天然的或人工养殖的及未加工的珍珠（`fg_return`）

原生完整Product为天然或养殖未加工珍珠，工厂生产混合、处理未指定、质量/kg，不固定CAS物种产地等级。本卡仅实际外部移动已首次放行、无外加珠核且未钻抛染蜡涂层镶串的完整淡水组织植入裸珠。记完整实际净珠毛量V、水分状态、原批Q_H及观察H，不假定退回质量等于原发运或省实际新增水损失。不是新增生产采购Q。变质破损不合格退回保留真实流和原待处置废物去向，须自己相容原子身份，不假绑定完整Product。

- 选定流：天然的或人工养殖的及未加工的珍珠 `a6d1d868-d12f-4b13-bdf6-0cb6a4f4eb5e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs_service`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

##### 基本流

###### 环境水蒸气摄入（`humidity_service`）

仅实际普通吸湿/凝结进入本过程湿存量时适用，不限维修清洗。独立测水分状态，不冒充工业蒸汽或能值法大气水Product。完整期末湿存量与实际入流同时保留，仅与其他真实入口去重。 X仅扣另一实际OTHER同侧流中同事件同物料的已证重复；不扣存量、对侧、卡存在或留在期末的真实料水。真实F_in/F_out及完整湿存量同时保留。

- 选定流：环境水蒸气摄入
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_service`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

#### 输出

##### 产品流

###### 缝制袋（`bag_s`）

原生缝制袋Product为棉布、全衬或部分衬里、消费者端消费混合、质量/kg，抽绳袋为明确同义词。仅真实整只带衬棉袋，不是散布、PE/PET衬膜或无衬袋。原生示例布用量面积不定实际量。整袋衬里缝线只采购一次，组件子账互不重叠。仅真实事件S：毛实物发运。A=V为完整真实毛流，不是存量校正耗用、B_open+U-B_close、负荷向量、净交付或经济份额。用观察H内原Q_H，不新增Q。P/I在同一实物入境事件互斥且整件上游仅归属一次，ER不自动采购。S含随后退回的毛发运。期初期末空件/附着WIP/附着FG/可复用件完整湿存量均保留，内部复用抵消。X只与其他真实入口出口去重，不能消掉留期末的新增入流。毛披露不新增采购供方负荷信用，真实所有者另一次归属。 X仅扣另一实际OTHER同侧流中同事件同物料的已证重复；不扣存量、对侧、卡存在或留在期末的真实料水。真实F_in/F_out及完整湿存量同时保留。

- 选定流：缝制袋 `a7ec2c0b-ce0e-4036-ad92-08a39f2b0d0f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`ilcd-attributional-2010`

###### 缝制袋（`bag_eo`）

原生缝制袋Product为棉布、全衬或部分衬里、消费者端消费混合、质量/kg，抽绳袋为明确同义词。仅真实整只带衬棉袋，不是散布、PE/PET衬膜或无衬袋。原生示例布用量面积不定实际量。整袋衬里缝线只采购一次，组件子账互不重叠。仅真实事件EO：向外返还。A=V为完整真实毛流，不是存量校正耗用、B_open+U-B_close、负荷向量、净交付或经济份额。用观察H内原Q_H，不新增Q。P/I在同一实物入境事件互斥且整件上游仅归属一次，ER不自动采购。S含随后退回的毛发运。期初期末空件/附着WIP/附着FG/可复用件完整湿存量均保留，内部复用抵消。X只与其他真实入口出口去重，不能消掉留期末的新增入流。毛披露不新增采购供方负荷信用，真实所有者另一次归属。 X仅扣另一实际OTHER同侧流中同事件同物料的已证重复；不扣存量、对侧、卡存在或留在期末的真实料水。真实F_in/F_out及完整湿存量同时保留。

- 选定流：缝制袋 `a7ec2c0b-ce0e-4036-ad92-08a39f2b0d0f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`ilcd-attributional-2010`

###### 瓦楞纸箱（`carton_s`）

原生瓦楞纸箱Product质量/kg、工厂生产混合、技术组合，明确16.6%原生纤维及83.4%再生纤维。条件绑定须真实供方组成符合，不是珍珠包装默认配方。不同真实纸箱须另用相容身份。整箱已含实际纸板胶粘剂一次。仅真实事件S：毛实物发运。A=V为完整真实毛流，不是存量校正耗用、B_open+U-B_close、负荷向量、净交付或经济份额。用观察H内原Q_H，不新增Q。P/I在同一实物入境事件互斥且整件上游仅归属一次，ER不自动采购。S含随后退回的毛发运。期初期末空件/附着WIP/附着FG/可复用件完整湿存量均保留，内部复用抵消。X只与其他真实入口出口去重，不能消掉留期末的新增入流。毛披露不新增采购供方负荷信用，真实所有者另一次归属。 X仅扣另一实际OTHER同侧流中同事件同物料的已证重复；不扣存量、对侧、卡存在或留在期末的真实料水。真实F_in/F_out及完整湿存量同时保留。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`ilcd-attributional-2010`

###### 瓦楞纸箱（`carton_eo`）

原生瓦楞纸箱Product质量/kg、工厂生产混合、技术组合，明确16.6%原生纤维及83.4%再生纤维。条件绑定须真实供方组成符合，不是珍珠包装默认配方。不同真实纸箱须另用相容身份。整箱已含实际纸板胶粘剂一次。仅真实事件EO：向外返还。A=V为完整真实毛流，不是存量校正耗用、B_open+U-B_close、负荷向量、净交付或经济份额。用观察H内原Q_H，不新增Q。P/I在同一实物入境事件互斥且整件上游仅归属一次，ER不自动采购。S含随后退回的毛发运。期初期末空件/附着WIP/附着FG/可复用件完整湿存量均保留，内部复用抵消。X只与其他真实入口出口去重，不能消掉留期末的新增入流。毛披露不新增采购供方负荷信用，真实所有者另一次归属。 X仅扣另一实际OTHER同侧流中同事件同物料的已证重复；不扣存量、对侧、卡存在或留在期末的真实料水。真实F_in/F_out及完整湿存量同时保留。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`ilcd-attributional-2010`

###### 天然的或人工养殖的及未加工的珍珠（`fg_dispatch`）

原生完整Product为天然或养殖未加工珍珠，工厂生产混合、处理未指定、质量/kg，不固定CAS物种产地等级。本卡仅实际外部移动已首次放行、无外加珠核且未钻抛染蜡涂层镶串的完整淡水组织植入裸珠。记完整实际净珠毛量V、水分状态、原批Q_H及观察H，不假定退回质量等于原发运或省实际新增水损失。不是新增生产采购Q。变质破损不合格退回保留真实流和原待处置废物去向，须自己相容原子身份，不假绑定完整Product。

- 选定流：天然的或人工养殖的及未加工的珍珠 `a6d1d868-d12f-4b13-bdf6-0cb6a4f4eb5e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs_service`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

##### 废物流

###### 育珠过程废水（`effluent_service`）

仅真实收集液态废水外送处理时适用，一条完整Waste出口，有实测组成去向。水溶质子账不与整股再相加。不用锰渣或硅生产废水代替，同次移交不再加基本排放，处理供方及最终物种只一次。

- 选定流：育珠过程废水
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_service`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 废弃的已放行未加工珍珠（`fg_discard`）

放行后弃置仍归原Q_H，不冲Q或另造产出。实物V不按分配缩量，普通废物不合格样品销售不自动T_other。

- 选定流：废弃的已放行未加工珍珠
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs_service`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### 废弃带衬棉制缝袋（`bag_w`）

仅真实分出的废带衬棉袋及实测组成，不借Product UUID作Waste。仅真实事件W：外部废物出口。A=V为完整真实毛流，不是存量校正耗用、B_open+U-B_close、负荷向量、净交付或经济份额。用观察H内原Q_H，不新增Q。P/I在同一实物入境事件互斥且整件上游仅归属一次，ER不自动采购。S含随后退回的毛发运。期初期末空件/附着WIP/附着FG/可复用件完整湿存量均保留，内部复用抵消。X只与其他真实入口出口去重，不能消掉留期末的新增入流。毛披露不新增采购供方负荷信用，真实所有者另一次归属。 X仅扣另一实际OTHER同侧流中同事件同物料的已证重复；不扣存量、对侧、卡存在或留在期末的真实料水。真实F_in/F_out及完整湿存量同时保留。真实混收时仅mixed_packaging_waste一个总出口和处理供方；各材质origin_W独立实测并互斥，不再实例化同一物料的分流外送卡或叠加处理量。

- 选定流：废弃带衬棉制缝袋
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`ilcd-attributional-2010`

###### 包装废弃物，纸板（`carton_w`）

原生纸板包装Waste为工厂端全球、处理未指定，不采用专家2%估计。仅真实分出的纸板边角料破箱；混收时改为一条整股Waste。仅真实事件W：外部废物出口。A=V为完整真实毛流，不是存量校正耗用、B_open+U-B_close、负荷向量、净交付或经济份额。用观察H内原Q_H，不新增Q。P/I在同一实物入境事件互斥且整件上游仅归属一次，ER不自动采购。S含随后退回的毛发运。期初期末空件/附着WIP/附着FG/可复用件完整湿存量均保留，内部复用抵消。X只与其他真实入口出口去重，不能消掉留期末的新增入流。毛披露不新增采购供方负荷信用，真实所有者另一次归属。 X仅扣另一实际OTHER同侧流中同事件同物料的已证重复；不扣存量、对侧、卡存在或留在期末的真实料水。真实F_in/F_out及完整湿存量同时保留。真实混收时仅mixed_packaging_waste一个总出口和处理供方；各材质origin_W独立实测并互斥，不再实例化同一物料的分流外送卡或叠加处理量。

- 选定流：包装废弃物，纸板 `72270223-04b1-4986-a546-94e5a0821317`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`ilcd-attributional-2010`

###### 棉袋与纸板混合包装废物（`mixed_packaging_waste`）

仅一股真实合并出口适用：一条完整原子Waste，棉衬线纸板来源池互不重叠且实测整股质量组成。各池W留子账，不另加外部交换。A=V为完整真实毛出口，不存量经济校正、额外采购或信用。处理供方一次，原Q_H。 X仅扣另一实际OTHER同侧流中同事件同物料的已证重复；不扣存量、对侧、卡存在或留在期末的真实料水。真实F_in/F_out及完整湿存量同时保留。真实混收时仅mixed_packaging_waste一个总出口和处理供方；各材质origin_W独立实测并互斥，不再实例化同一物料的分流外送卡或叠加处理量。

- 选定流：棉袋与纸板混合包装废物
- 流属性/单位：Mass / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：`ilcd-attributional-2010`

##### 基本流

###### 水蒸气（`evaporation_service`）

实际普通H2O气体损失，CAS7732-18-5，基本流质量/kg至非城市空气；原生另有高烟囱选项，本卡不主张。不能以重水、氚水、冰同义词推翻普通H2O气体。保留真实池面蒸发、干燥及普通储存搬运失水，不排水体，不用一残差拟合两未知。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac07-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A / Q；A=V完整实际毛腿。用第8节唯一次除法；服务用H内原Q_H。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_service`
- 来源：`fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_context | all co-functions | 限ILCD分配适用情境的归因建模，识别真实珍珠贝壳组织及其他共功能和共同过程门，不任选物理经济分配、不固定比例、免费壳、避免产品信用或生态抵消。 | `ilcd-attributional-2010` |
| allocation_subdivision | each exchange | 先按专属操作批次计量材料处理作真实/虚拟细分，专属移植分级须证明专属功能，不把所有池塘活动全给珍珠。死亡失败普通处理归真实队列，除非有正当独立功能移交。 | `ilcd-attributional-2010` |
| allocation_causality | each remaining burden dimension | 逐交换检验决定性物理因果：何功能导致类型数量，该功能定量变化如何改变交换。真实体现、强度、占用能力持续时间可能相关，不任取总产出质量份额。不同交换可有不同证实驱动，完整毛质量体积保持不变。 | `ilcd-attributional-2010` |
| allocation_residual | true residual joint burden | 仅细分及决定因果后真实剩余联合负荷用同门同状态同数量基准同地域同期实际市场价值。若仅后加工包装交付价格，去掉真实追加服务价值透明推门口价，披露日期状态不确定性敏感性。废物未售不自动零、信用或比例，分配向量加回未分配总量。 | `ilcd-attributional-2010` |
| allocation_losses | ordinary wastes and handover | 普通制造废物不合格破损植入失败样品及处理不因外送销售成为T_other。仅真实其他队列功能、正当分配及一次记录移交可转向量，毛腿完整。同一出口不能同时Product和Waste或自动扩展抵扣。 | `ilcd-attributional-2010` |

## 8. 前景数据采集、计算与质量规则

全部协议只采未归一原始观测；aggregation的每参考流仅指最终基准，采集不除Q。各带标签维度先转换及适用分子规则后仅唯一calc_quotient一次；毛V不存量校正或经济份额。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | harvest | finished_pearl | measurement | 队列; 物种; 终端; 净质量; 粒数; 水分; 等级; 验收; 首放标志; 期初期末FG | 校准扣皮称同物种等级状态裸珠，代表性水分粒数抽样，保留完整范围不确定性，关联唯一首次验收。Q实际汇总含期末合格FG，不用理论产率，保留Q=0。 | kg; item | 每事件及期初期末 | 完整观察队列实际H含失败零产出 | 真实供方池塘操作门 | 每参考流 | 校准; 原日志; 抽样; 供方范围; 不确定性; 核对 |
| cp_live | culture | host_mussels; donor_mussels | measurement | 物种; 来源; 湿质量; 活体粒数; 移植物; 供体选择; 死亡; 失败; 采收; 期初期末活体WIP; 继承向量; count_balance; measured_wet_biomass_open_close; actual_biological_influx_outflux; independent_growth_state; disjoint_shell_tissue_pearl_subaccounts | 按真实队列追溯收货、供体牺牲、植入恢复、死亡失败和收获。opening+receipts+real births=closing+deaths+harvest+true external transfers仅为实测活体个数账；真实补充出生亦须证据，不预设繁育场。湿生物质量另以完整湿期初期末及独立观测的真实料水、生长、呼吸、排泄、死亡和外转物质收支核对，不把个数式套千克。壳、组织、动物内未分离珍珠为整活体的互斥组分子账，不加在整动物质量之上。活体与未分离珠均为WIP，不是已放行FG；移植物数与合格珠数独立，不理论换算。各实体存量同时保留逐交换继承向量。 | kg; item | 每事件及期初期末 | 完整观察队列实际H含失败零产出 | 真实供方池塘操作门 | 每参考流 | 校准; 原日志; 抽样; 供方范围; 不确定性; 核对 |
| cp_energy_culture | culture | individual_carrier | measurement | 计量表; 区间; 累计量; 真实速率时间; 设备; 启停闲置; 油箱存量; 燃料质量; 密度; 热值; 供方范围 | 用真实校准电表燃料油箱记录，含失败闲置清理。单位仅换一次，独立测所需密度热值，购入服务燃料与直接燃料所有者互斥。不固定泵锅炉蒸汽热负荷排放因子。 | MJ; kWh; kg; m3 | 每事件及期初期末 | 完整观察队列实际H含失败零产出 | 真实供方池塘操作门 | 每参考流 | 校准; 原日志; 抽样; 供方范围; 不确定性; 核对 |
| cp_energy_harvest | harvest | individual_carrier | measurement | 计量表; 区间; 累计量; 真实速率时间; 设备; 启停闲置; 油箱存量; 燃料质量; 密度; 热值; 供方范围 | 用真实校准电表燃料油箱记录，含失败闲置清理。单位仅换一次，独立测所需密度热值，购入服务燃料与直接燃料所有者互斥。不固定泵锅炉蒸汽热负荷排放因子。 | MJ; kWh; kg; m3 | 每事件及期初期末 | 完整观察队列实际H含失败零产出 | 真实供方池塘操作门 | 每参考流 | 校准; 原日志; 抽样; 供方范围; 不确定性; 核对 |
| cp_energy_service | service | individual_carrier | measurement | 计量表; 区间; 累计量; 真实速率时间; 设备; 启停闲置; 油箱存量; 燃料质量; 密度; 热值; 供方范围 | 用真实校准电表燃料油箱记录，含失败闲置清理。单位仅换一次，独立测所需密度热值，购入服务燃料与直接燃料所有者互斥。不固定泵锅炉蒸汽热负荷排放因子。 | MJ; kWh; kg; m3 | 每事件及期初期末 | 完整观察队列实际H含失败零产出 | 真实供方池塘操作门 | 每参考流 | 校准; 原日志; 抽样; 供方范围; 不确定性; 核对 |
| cp_water_culture | culture | each_water_phase_direction | measurement | 水源; 受纳体; 毛取; 毛回; 净耗; 相态; 温度; 密度; 池水存量; 湿度; 降雨; 蒸发; X_in; X_out; 所有者; F_in; F_out; X_in; X_out; same_side_OTHER_event; full_wet_stock; independent_origin_W; single_receiver_provider | 累计体积只一次，实际速率才积分，独立测实际状态密度。真实补水降雨溢流渗漏回水保留，缺失相态方向逐一增列。环境池水不自动取水。普通吸失湿及维修清洗水与完整期末湿存量共存，X仅去重，整制剂载水一次。 X仅扣另一实际OTHER同侧流中同事件同物料的已证重复；不扣存量、对侧、卡存在或留在期末的真实料水。真实F_in/F_out及完整湿存量同时保留。 | kg; m3 | 每事件及期初期末 | 完整观察队列实际H含失败零产出 | 真实供方池塘操作门 | 每参考流 | 校准; 原日志; 抽样; 供方范围; 不确定性; 核对 |
| cp_water_harvest | harvest | each_water_phase_direction | measurement | 水源; 受纳体; 毛取; 毛回; 净耗; 相态; 温度; 密度; 池水存量; 湿度; 降雨; 蒸发; X_in; X_out; 所有者; F_in; F_out; X_in; X_out; same_side_OTHER_event; full_wet_stock; independent_origin_W; single_receiver_provider | 累计体积只一次，实际速率才积分，独立测实际状态密度。真实补水降雨溢流渗漏回水保留，缺失相态方向逐一增列。环境池水不自动取水。普通吸失湿及维修清洗水与完整期末湿存量共存，X仅去重，整制剂载水一次。 X仅扣另一实际OTHER同侧流中同事件同物料的已证重复；不扣存量、对侧、卡存在或留在期末的真实料水。真实F_in/F_out及完整湿存量同时保留。 | kg; m3 | 每事件及期初期末 | 完整观察队列实际H含失败零产出 | 真实供方池塘操作门 | 每参考流 | 校准; 原日志; 抽样; 供方范围; 不确定性; 核对 |
| cp_water_service | service | each_water_phase_direction | measurement | 水源; 受纳体; 毛取; 毛回; 净耗; 相态; 温度; 密度; 池水存量; 湿度; 降雨; 蒸发; X_in; X_out; 所有者; F_in; F_out; X_in; X_out; same_side_OTHER_event; full_wet_stock; independent_origin_W; single_receiver_provider | 累计体积只一次，实际速率才积分，独立测实际状态密度。真实补水降雨溢流渗漏回水保留，缺失相态方向逐一增列。环境池水不自动取水。普通吸失湿及维修清洗水与完整期末湿存量共存，X仅去重，整制剂载水一次。 X仅扣另一实际OTHER同侧流中同事件同物料的已证重复；不扣存量、对侧、卡存在或留在期末的真实料水。真实F_in/F_out及完整湿存量同时保留。 | kg; m3 | 每事件及期初期末 | 完整观察队列实际H含失败零产出 | 真实供方池塘操作门 | 每参考流 | 校准; 原日志; 抽样; 供方范围; 不确定性; 核对 |
| cp_chemical | culture | each_whole_preparation | measurement | 供方; CAS; 形态; 整份制剂; 化验; 活性物; 载体; 水分; 期初期末; 收货; 剂量; 损失; 厂内混配; 负荷所有者 | 整份购入制剂测一次，活性化验载体为互斥子账。厂内配方逐真实外购料加实际水能损失。来源石灰肥料不确定化学剂量，实际饲料药盐先逐原子新增才能称完整。 | kg; m3 | 每事件及期初期末 | 完整观察队列实际H含失败零产出 | 真实供方池塘操作门 | 每参考流 | 校准; 原日志; 抽样; 供方范围; 不确定性; 核对 |
| cp_species | culture | each_actual_species | measurement | 物种; CAS; 相态; 来源; 受纳体; 浓度; 已积分体积; 真速率时间; 不确定性; 指标; 生物元素池 | 独立识别取样实际分子离子及受纳体。总N/P氨氮COD/VOC是指标，不推NH4/NO3/PO4/CO2质量。真实生物碳钙能量保留，不虚构资源流或负CO2。一残差不拟水和另一未知。 | kg; m3 | 每事件及期初期末 | 完整观察队列实际H含失败零产出 | 真实供方池塘操作门 | 每参考流 | 校准; 原日志; 抽样; 供方范围; 不确定性; 核对 |
| cp_outputs_culture | culture | each_real_product_or_waste | measurement | 队列; 湿质量; 干分数; 状态; 去向; 壳组织珠拆分; 混合来源池; 处理; 继承; Q_H | 逐真实独立出口称量，单混合出口来源池互斥。完整活体整贝壳组织裸珠质量及C/Ca/N/P独立追踪并分真实游离结构反应水。不假壳比例成珠率，普通处理损失仍归原队列，除非正当一次移交。 | kg; item | 每事件及期初期末 | 完整观察队列实际H含失败零产出 | 真实供方池塘操作门 | 每参考流 | 校准; 原日志; 抽样; 供方范围; 不确定性; 核对 |
| cp_outputs_harvest | harvest | each_real_product_or_waste | measurement | 队列; 湿质量; 干分数; 状态; 去向; 壳组织珠拆分; 混合来源池; 处理; 继承; Q_H | 逐真实独立出口称量，单混合出口来源池互斥。完整活体整贝壳组织裸珠质量及C/Ca/N/P独立追踪并分真实游离结构反应水。不假壳比例成珠率，普通处理损失仍归原队列，除非正当一次移交。 | kg; item | 每事件及期初期末 | 完整观察队列实际H含失败零产出 | 真实供方池塘操作门 | 每参考流 | 校准; 原日志; 抽样; 供方范围; 不确定性; 核对 |
| cp_outputs_service | service | each_real_product_or_waste | measurement | 队列; 湿质量; 干分数; 状态; 去向; 壳组织珠拆分; 混合来源池; 处理; 继承; Q_H | 逐真实独立出口称量，单混合出口来源池互斥。完整活体整贝壳组织裸珠质量及C/Ca/N/P独立追踪并分真实游离结构反应水。不假壳比例成珠率，普通处理损失仍归原队列，除非正当一次移交。 | kg; item | 每事件及期初期末 | 完整观察队列实际H含失败零产出 | 真实供方池塘操作门 | 每参考流 | 校准; 原日志; 抽样; 供方范围; 不确定性; 核对 |
| cp_asset | culture | each_single_article_and_repair_atom | measurement | 单件; 实际材质; 新旧维修; 完整湿质量; 在装流体; 期初期末; 收退出口; 实际使用能力; 服务向量; 未用负荷; F_in; F_out; X_in; X_out; same_side_OTHER_event; full_wet_stock; independent_origin_W; single_receiver_provider | 逐资产零件流体完整毛保管与体现服务分开。称完整真实同配置物品，不固定寿命猜单件kg。留存新件水仍入流加完整湿期末，X仅去重。真实可复用外返须单独Product出口，不同废弃；真实维修流体逐原子增，不集合。 X仅扣另一实际OTHER同侧流中同事件同物料的已证重复；不扣存量、对侧、卡存在或留在期末的真实料水。真实F_in/F_out及完整湿存量同时保留。 | kg; item; h | 每事件及期初期末 | 完整观察队列实际H含失败零产出 | 真实供方池塘操作门 | 每参考流 | 校准; 原日志; 抽样; 供方范围; 不确定性; 核对 |
| cp_pack | service | bag_p; bag_i; bag_er; bag_s; bag_eo; bag_w; carton_p; carton_i; carton_er; carton_s; carton_eo; carton_w; mixed_packaging_waste | measurement | 材料池; P; I; ER; S; EO; W; 所有者; 整件; 空件附着WIP附着FG可复用湿O_C; 维修水X; Q_H; H; F_in; F_out; X_in; X_out; same_side_OTHER_event; full_wet_stock; independent_origin_W; single_receiver_provider ；包装接收来源；付费/非采购依据；所有者/保管者；同件原外发ID | 每个实际包材或整件池 O + P + I + ER + F_in - X_in = C + S + EO + W + F_out - X_out。O/C含空件、附着WIP/FG及可复用完整湿存量，S为毛发运而非Q或净交付。同一实物入境事件P和I互斥，与负荷份额无关。F_in/F_out为实际修理、清洗或普通吸湿失水造成的真实料水新增/移除，须独立实测事件身份、物相和去向，绝不作为残差拟合项。X_in/X_out仅扣除另一实际OTHER流同一输入/输出侧已证明重复的同事件同物料量，不扣存量、对侧、仅存在的卡或留在C内的真实入流。完整湿整件与一套互斥组分桥为替代账法，内部交接复用仅抵消一次。真实分流外送废物各用完整卡；一股实际mixed_packaging_waste仅一个实测总量和接收/处理供方，独立实测互斥origin_W来源子账加总为该总量但不另加外送交换或处理量。来源未知保持未决，不虚构混合物。整袋/衬/线及整份制剂仅采购一次，真实负荷所有权分配独立于完整毛V。  仅对包装按packaging_receipt_basis分类，单独非采购接收归I，不得虚构ER或X。| kg | 每事件及期初期末 | 完整观察队列实际H含失败零产出 | 真实供方池塘操作门 | 每参考流 | 校准; 原日志; 抽样; 供方范围; 不确定性; 核对 |
| cp_burden_culture | culture | each_burden_vector | measurement | 交换; 队列; 上游所有者; 原料活体WIP开闭; 已用未用; 移交; Q; Q_H; H; 真实作后; 许可; 作后检验; 验收; 处置 | 继承向量贯穿活体WIP首放，再原队列真实服务。真实重工保留制造者规范许可、作后检验验收处置。无许可或检验失败但已发生仍保留全部真实流负荷与原待处置废物去向，不能零。普通湿度变化不虚构作业许可。 | native unit; kg; h | 每事件及期初期末 | 完整观察队列实际H含失败零产出 | 真实供方池塘操作门 | 每参考流 | 校准; 原日志; 抽样; 供方范围; 不确定性; 核对 |
| cp_burden_harvest | harvest | each_burden_vector | measurement | 交换; 队列; 上游所有者; 原料活体WIP开闭; 已用未用; 移交; Q; Q_H; H; 真实作后; 许可; 作后检验; 验收; 处置 | 继承向量贯穿活体WIP首放，再原队列真实服务。真实重工保留制造者规范许可、作后检验验收处置。无许可或检验失败但已发生仍保留全部真实流负荷与原待处置废物去向，不能零。普通湿度变化不虚构作业许可。 | native unit; kg; h | 每事件及期初期末 | 完整观察队列实际H含失败零产出 | 真实供方池塘操作门 | 每参考流 | 校准; 原日志; 抽样; 供方范围; 不确定性; 核对 |
| cp_burden_service | service | each_burden_vector | measurement | 交换; 队列; 上游所有者; 原料活体WIP开闭; 已用未用; 移交; Q; Q_H; H; 真实作后; 许可; 作后检验; 验收; 处置 | 继承向量贯穿活体WIP首放，再原队列真实服务。真实重工保留制造者规范许可、作后检验验收处置。无许可或检验失败但已发生仍保留全部真实流负荷与原待处置废物去向，不能零。普通湿度变化不虚构作业许可。 | native unit; kg; h | 每事件及期初期末 | 完整观察队列实际H含失败零产出 | 真实供方池塘操作门 | 每参考流 | 校准; 原日志; 抽样; 供方范围; 不确定性; 核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_units | all inventory rows | U是一次有效单位转换后的未归一原始观测。kWh*3.6=MJ；累计气液体积不再乘时间，真正速率才积分。需要时独立实测该物质相态状态密度热值，不用次级属性密度或理论粒数产率。 | raw records; unit; state | U | `fao-freshwater-pearl-1986` |
| calc_manufacturing | all inventory rows | 仅负荷维度：A=B_open+U_attributed-B_close-T_other，各项为逐交换继承向量。B_close仅原料/活体WIP/未放行珠及未使用未归属存料负荷，绝不含期末已放行珠FG。T_other须真实其他功能队列及正当一次记录移交，普通废物不合格样品销售不是T_other。U已存量校正时核对后一次去重存量项，不用于毛流卡。 | B_open; U_attributed; B_close; T_other | A | `ilcd-attributional-2010` |
| calc_service | all inventory rows | 观察H内已发生放行后服务的A为归原队列实际服务加已用原服务向量，Q为原Q_H。期末FG不冲销已服务，仅未使用未归属服务负荷结转。退回复验重工只增真实增量服务，不增制造Q。 | H; Q_H; actual service; unused unassigned charge | A | `ilcd-attributional-2010` |
| calc_asset | all inventory rows | 按实际投放使用强度能力和有证据服务能力，经细分因果剩余分配定体现服务A；完整整资产零件流体毛保管与湿在装存量另记。不每kg一整机、不固定寿命重复采购或自动报废抵扣；仅未使用未归属向量结转，珍珠期末FG不扣已服务。 | asset vector; actual use; capacity; cohort | A | `ilcd-attributional-2010` |
| calc_gross | all inventory rows | 明确毛流卡A=V为按原生广延单位计完整实际腿。存量校正、B_open+U-B_close、经济份额、负荷向量、净交付均不能改V。X_in/out只与其他真实入口出口项去重，留存新增仍保留入流及完整期末湿质量。毛q仅披露，不增采购供方乘数信用，真实负荷所有者另一次归属。 X仅按calc_pack扣另一OTHER同侧流中同事件同物料的已证重复；真实F新增与完整湿期末并存，不以存量或负荷向量代替物理流。 | V; actual direction; disjoint source pools | A | `ilcd-attributional-2010` |
| calc_quotient | all inventory rows | q=A/Q。原始转换及适用带标签负荷服务毛量分子规则之后仅本次除法。制造Q为唯一首次合格珠净kg，服务用观察H内原Q_H，参考输出1千克。Q=0保留全部真实负荷腿而不出单位q；卡片aggregation只引用本运算，不能再除q。 | A; Q; Q_H; H | q | `ilcd-attributional-2010` |
| calc_physical | all inventory rows | 制造、已放行FG和合并门分别核完整湿期初+全部真实毛入=完整湿期末+全部真实毛出，仅独立证实转化不确定性。内部移交抵消，活体移植物壳组织裸珠及C/Ca/N/P独立核对，不指标猜分子或一残差补两未知。游离结构反应水及实际相态分开，实物不经济缩量。 | full wet opening closing; all gross legs; independent phase and element observations | physical reconciliation | `fao-freshwater-pearl-1986`; `ilcd-attributional-2010` |
| calc_pack | all inventory rows | 每个实际包材或整件池 O + P + I + ER + F_in - X_in = C + S + EO + W + F_out - X_out。O/C含空件、附着WIP/FG及可复用完整湿存量，S为毛发运而非Q或净交付。同一实物入境事件P和I互斥，与负荷份额无关。F_in/F_out为实际修理、清洗或普通吸湿失水造成的真实料水新增/移除，须独立实测事件身份、物相和去向，绝不作为残差拟合项。X_in/X_out仅扣除另一实际OTHER流同一输入/输出侧已证明重复的同事件同物料量，不扣存量、对侧、仅存在的卡或留在C内的真实入流。完整湿整件与一套互斥组分桥为替代账法，内部交接复用仅抵消一次。真实分流外送废物各用完整卡；一股实际mixed_packaging_waste仅一个实测总量和接收/处理供方，独立实测互斥origin_W来源子账加总为该总量但不另加外送交换或处理量。来源未知保持未决，不虚构混合物。整袋/衬/线及整份制剂仅采购一次，真实负荷所有权分配独立于完整毛V。 | O; P; I; ER; C; S; EO; W; F_in; F_out; X_in; X_out; same_side_OTHER_event; origin_W; single_receiver_provider | packaging reconciliation | `ilcd-attributional-2010` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all rows | 须完整未加工珠Product，每辅助遵守自身材质CAS形态路线类型相态产地媒体属性；未知辅助供方披露，不零不换族。 | 供方原生上下文; 物种; 终端检验 |
| dq_coverage | cohorts and H | 采全生命队列原料WIP、死亡失败零收获闲置清理及继承向量，已放行FG和实际H分开，不理论成珠率时间表作产量。 | 贯通活体放行服务台账 |
| dq_measurement | each dimension | 要求校准代表范围原单位状态不确定性，整股组分元素指标不重叠。真实未知数量不能完整场址结果。 | 原计量称量取样记录 |
| dq_allocation | burden dimensions | 保留原始归属向量因果论证、必要时剩余同门市场证据、所有权敏感性；条件卡非已观察工厂数量。 | 分配账及真实范围 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validation_terminal | finished_pearl | 拒绝整贝壳肉宝石人造加工镶嵌品作参考，核真实淡水纯组织裸未加工状态及完整原生Product，真实缺核心身份终端不得可用。 | `unsd-cpc3-2025`; `fao-freshwater-pearl-1986`; `fao-marine-pearl-1991` |
| validation_q | all rows | Q含期末已放行FG一次，不额外FG产出或扣负荷；H用原Q_H，真实无许可失败作业保留实际待处置废物，不置零。 | `ilcd-attributional-2010` |
| validation_measurement | all inventory rows | 执行全部有限声明参考检查，保留完整原子行、原生单位、唯一除法。方法检查不验证未来数量或科学，不支持关系仍待审。 | `ilcd-attributional-2010` |
| validation_balance | all gates | 核生命队列WIP/FG、完整制造FG合并物理门、包装六腿、资产维修水及独立相关元素。不一残差补两未知、重复供方总分双计、扣普通废物负荷或钙化CO2信用。 | `fao-freshwater-pearl-1986`; `ilcd-attributional-2010` |
| validation_evidence | all rules and source use | 每来源保留真实产品过程路线状态需求及限制，淡水手册无通用剂量产率时间，排除海水抛光，ILCD只支持分配。普通辅助供方缺口与真核心hold分开，机械检查不批准映射科学翻译发布。 | `fao-freshwater-pearl-1986`; `fao-marine-pearl-1991`; `ilcd-attributional-2010` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 限本路线归因首验生产及另标真实原队列服务，须完整原始毛量与负荷所有者桥。 |
| excluded_use | 默认因子通用行业平均、天然海水加工外推、认证避免抵扣或无实测完整场址主张。 |
| required_metadata | 受体供体物种; 活贝来源与供方边界; 淡水场址路线; 纯组织无外加珠核; 队列及活体开闭存量; 失败死亡; 采收身份; 完整裸未加工终端; 清理干燥历史; 实测水分; 净质量粒数抽样范围; 实际等级验收; 首放门唯一Q; WIP与已放行FG; 共功能分配; 实际包装; 服务H与原Q_H; 原生供方限制 |
| required_quality_disclosure | 实测未知、条件交换、普通辅助供方缺口、任何真核心hold、完整毛量负荷核对、代表性不确定及未审范围。 |
| update_trigger | 终端处理物种路线供方参考属性、真实新原子、队列门分配或证据变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | UNSD CPC Version 3.0 Explanatory Notes, 30 June 2025, p.189; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 38210未加工终端及相邻38220加工珠/38240首饰，仅分类无配方。 |
| fao-freshwater-pearl-1986 | handbook | R. Pagcatipunan, FAO TCP/BGD/4508, Technical Assistance on Pearl Culture in Bangladesh (1986), Appendix 1 sections 2–6.7 and Figures 1–7; https://www.fao.org/4/S2622E/S2622E05.htm | 定性活贝来源、供体纯外套膜组织路线、恢复池塘管理死亡采收干燥；相邻天然人造性腺路线作排除，无数字配方通用产率时间分配。 |
| fao-marine-pearl-1991 | handbook | FAO/UNDP Regional Seafarming Development and Demonstration Project, Pearl Oyster Farming and Pearl Culture (1991), Chapter XIII 13.1–13.3; https://www.fao.org/4/ab726e/AB726E13.htm | 反例：海水有核植入、化学提珠、精盐抛光不能拼入淡水纯组织未加工路线。 |
| ilcd-attributional-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA – Detailed guidance, first edition March 2010, 7.9.2–7.9.3, printed pp.255–272; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因适用、细分、逐交换决定因果、剩余同门状态市场价值及核对，不支持珍珠生产数量。 |
