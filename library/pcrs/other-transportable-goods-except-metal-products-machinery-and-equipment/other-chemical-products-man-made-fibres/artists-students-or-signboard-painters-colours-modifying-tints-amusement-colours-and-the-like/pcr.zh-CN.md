---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.artists-students-or-signboard-painters-colours-modifying-tints-amusement-colours-and-the-like
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# PW6 金红石钛白水性丙烯酸艺术颜料

## 1. 范围与适用性

本 PCR 仅覆盖一种产品：PW6 金红石钛白颜料分散于采购水性丙烯酸凝胶所得的湿态厚涂艺术颜料，白色 HDPE 桶灌装后首次质量放行。厂商 Heavy Body Titanium White 1380 是实际产品原型，不是公开配方，也不表示本路线复制了其品牌产品。凝胶/分散剂/消泡剂路线由厂商 DIY 方法提供定性支持；必须记录真实采购等级及配方。

排除 CPC35110 的工业建筑漆/清漆、印刷和书写油墨、干颜料、可溶染料、油性/醇酸色料、溶剂丙烯酸、UV固化涂层、固体水彩、其他颜料及绘画服务。范围仅为 CPC35120 的较窄子集，不覆盖整叶。下游稀释、洗笔、绘画、基材服务、干燥及寿命终结另行研究。每千克湿颜料不构成面积、遮盖力、色强或寿命等效。来源：`golden-product`、`golden-diy`、`golden-making`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.artists-students-or-signboard-painters-colours-modifying-tints-amusement-colours-and-the-like |
| classification_refs | CPC 3.0:35120; narrower |
| covered_products | PW6 金红石钛白湿态水性丙烯酸厚涂艺术颜料 |
| excluded_products | CPC35110工业建筑涂料；印刷油墨；油性/醇酸/溶剂/UV色料；染料；干颜料；其他颜色 |
| representative_product | 厚涂钛白艺术颜料；GOLDEN 1380仅作产品身份示例 |
| production_route | 采购干金红石PW6、原供货 Extra Heavy Gel Gloss、Universal Dispersant、Heavy Body Defoamer及单独加水；物理分散/研磨、混合、质检、灌装；须有实际配方 |
| market_state | 湿态水性浆料，已灌装HDPE桶内净物；首次质量放行，并非实际交付 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 装桶生产门新增质量放行的PW6丙烯酸艺术颜料净物 |
| How much | 1 kg |
| How well | 声明金红石PW6身份、丙烯酸黏结剂等级、湿固含/水分、实际黏度试验及批放行规格；不设通用数值色效或服务指标 |
| How long or cycle | 一个完整匹配的生产批群；无使用阶段寿命 |
| reference_flow_link | o_new |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 涂料（水性） `47411f13-cc57-455b-ba23-dafbaeef17db` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 艺术用途; PW6金红石及CAS; 黏结剂/助剂商品等级和批号; 完整供货质量和组成亚账; 湿固含/水分; 实际放行规格和试验; 桶体/盖材及净灌装量; 场址/地理和期间; 唯一首次放行批群Q; 在制品/退回结转负荷; 能源组合及废物接收方 |

参考UUID仅识别宽泛水性涂料物理身份，不代表供应商、专有配方或工业漆替代；完整原生限制保留于o_new。实际产品/路线/物态限定信息缺失时，前景数据集不完整。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| mu_reference | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q为灌装后唯一首次质量放行的湿颜料净质量，不含桶/盖/标签。Q>0；退回再验收不增加Q。生产放行与发运不默认相等。 |
| mu_supplied | i_pigment; i_gel; i_dispersant; i_defoamer; i_water | Mass | kg | 计量整份供货湿质量；活性物/固体/水为不可重复加算的组成亚账。不由SDS区间推造配方、颜料体积浓度或性能。 |
| mu_volume | 计量液体 | 体积及独立实测密度 | m3 and kg/m3 | 积分体积以声明温度下同液体实测密度一次转换。流率需真实持续时间；已积分体积不再乘时间。不将原生次级系数假定为密度。 |
| mu_energy | i_power | Energy | MJ | 保留原始电表记录，将kWh一次转为MJ；保留供电电压/地理/组合。 |
| mu_stock | 所有清单行 | 质量及结转负荷 | kg | 原始分子与正首次放行批群一次匹配；保留失败运行、返工、期初末在制品及负荷结转。成品库存属于放行后另账，不得在Q之外再次加作生产输出。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 采购颜料、水性凝胶、复配助剂、单独水及成品包装接收 |
| starting_condition_role | 前景制造起点；上游供应及入厂运输仍为背景要求 |
| product_classification_scope | CPC35120中PW6水性丙烯酸艺术颜料的较窄子集，区别于CPC35110及印刷油墨 |
| recursive_input_rule | 采购成品颜料/中间制剂作为显式供货物并有独立背景；同批群退回账抵消内部转移，不递归制造颜料 |
| upstream_dataset_requirement | 实际供应商制剂及颜料等级；按实际地理/技术匹配能源；各包装物及场外废物运输/处理 |
| disclosure | 声明全部真实操作和增添物、截断、计量分配、库存和退回结转、委外加工及场外废物接收方；原型来源不提供默认清单 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| sb_manufacture | colour_make | 纳入接收及放行前储存、称量、分散/研磨、混合、质检及消耗样品、返工、泵送、灌装/封盖/贴标、放行前搬运、抽风、清洗和分类废物交接。纳入真实辅助负荷；宣称完整前须为每项真实增添物扩充原子行。 | `golden-making`; `golden-diy` |
| sb_gate | o_new | 终止于灌装后首次质量放行。成品仓库和发运另账，扩展研究必须保留其真实负荷；合并时抵消内部Q交接，不把同批群期末成品库存再加作Q之外输出。如改用交付门，须保留成品期初末及负荷，未交付物不纳入交付Q；这属于另行声明的画像。 |  |
| sb_use | 下游 | 绘画、基材准备、稀释、成膜干燥、洗笔和服务/寿命终结位于本制造门外；交付湿物中的水不是工厂蒸发排放。 | `golden-water` |
| sb_route | colour_make | 本路线为采购黏结剂中的物理分散，不默认现场聚合或熬制清漆反应。不虚构反应水闭合质量。收集洗水送场外；现场处理、燃料、溶剂清洗、压缩空气或其他真实设备须显式增设操作及单项交换。 | `epa-paint`; `golden-water` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| colour_make | PW6分散、混合及装桶放行 | required | 仅声明的干颜料/采购凝胶路线 | 物理制造，含对应放行前操作及退回账 | o_new; 1 kg |

### 过程：PW6艺术颜料制造（`colour_make`）

下列各非参考计量交换由 calc_report 从未归一批群账一次报告；仅 o_new 定义1千克参考量。内部在制品库存及负荷由 cp_period 采集，不是新采购或额外联产品。实际新增原料、清洗剂、废物和污染物物种须分别设卡，不能用集合行代替。

#### 输入

##### 产品流

###### 金红石钛白干颜料 (`i_pigment`)

称量单独采购的实际 PW6 金红石钛白颜料粉，CAS 13463-67-7，包含供货表面处理层及水分。原生身份为工业级颜料、工厂生产混合，未声明地理，涵盖金红石和锐钛矿；须提供金红石颜料证明及实际等级/含量。原生 CPC 35499 及中文同义词“四氧化钛”属于元数据债务；CAS、主名称和备注识别的是 TiO2。不得据此推定制造路线、食品适用性或颜料质量分数。

- 选定流: 钛白粉 `12525dde-1d7a-4024-9ea3-5b90912a48f8`
- 流属性/单位: Mass / kg
- 数量规则: 来自cp_material的原始批群分子；按照第8节每参考流仅报告一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_material`
- 来源: `golden-product`

###### 采购丙烯酸黏结凝胶 (`i_gel`)

按本品发票和批号记录这一整份供货丙烯酸凝胶。它是本限定路线的黏结剂，不是干丙烯酸树脂；其中聚合物、水、防腐剂及其他组分仅作组成亚账，不重复列为采购。核实实际等级及期间可获得性；历史 DIY 文献不证明现行配方，也不证明 Heavy Body Titanium White 的专有配方。

- 选定流: GOLDEN Extra Heavy Gel Gloss 原供货水性制剂
- 流属性/单位: Mass / kg
- 数量规则: 来自cp_material的原始批群分子；按照第8节每参考流仅报告一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_material`
- 来源: `golden-diy`

###### 采购润湿分散剂 (`i_dispersant`)

记录用于润湿干 PW6 的整份单独采购表面活性剂制剂，保留批号、供应商组成说明及水/活性物亚账。不得替换为想象的单一纯表面活性剂、照搬 DIY 比例，或把其载水再次记为新水。

- 选定流: GOLDEN Universal Dispersant 原供货制剂
- 流属性/单位: Mass / kg
- 数量规则: 来自cp_material的原始批群分子；按照第8节每参考流仅报告一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_material`
- 来源: `golden-diy`

###### 采购厚涂用消泡剂 (`i_defoamer`)

按实际供货湿质量记录这一单独采购的复配助剂。来源将油类或硅酮列为可能的消泡类型，并未证明本商品是纯硅酮或矿物油。须取得供应商证据，记录实际完整制剂，不由 SDS 范围推造配方。

- 选定流: GOLDEN Defoamer Heavy Body 原供货制剂
- 流属性/单位: Mass / kg
- 数量规则: 来自cp_material的原始批群分子；按照第8节每参考流仅报告一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_material`
- 来源: `golden-diy`

###### 单独加入的配方水 (`i_water`)

仅记录实际单独取得并加入分散或调稠的蒸馏水；凝胶、分散剂和消泡剂自带水仍包含在各自供货质量内。体积转质量须有独立的温度对应水密度，不使用原生次级属性系数。

- 选定流: 蒸馏水
- 流属性/单位: Mass / kg
- 数量规则: 来自cp_material的原始批群分子；按照第8节每参考流仅报告一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_material`
- 来源: `golden-diy`

###### 清洗用水 (`i_cleanwater`)

将实际新鲜清洗水与配方水和内部回用分开计量，纳入同批群容器、磨机、灌装机和地面清洗。本路线将收集洗水交场外接收方；不默认现场 RO、絮凝药剂或回收率。

- 选定流: 设备清洗用自来水
- 流属性/单位: Mass / kg
- 数量规则: 来自cp_material的原始批群分子；按照第8节每参考流仅报告一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_material`
- 来源: `golden-water`

###### 外购电力 (`i_power`)

计量分散、混合、泵送、灌装、抽风、清洗和放行前搬运，包含归属于该批群的失败运行与待机。保留实际供电地理、电压和组合；对未指定场址不采用已查到的 CN、低于1千伏、消费组合到用户身份。记录的 kWh 以 3.6 MJ/kWh 一次转为 MJ。

- 选定流: 外购交流电
- 流属性/单位: Energy / MJ
- 数量规则: 来自cp_energy的原始批群分子；按照第8节每参考流仅报告一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_energy`

###### 供货 HDPE 颜料桶体 (`i_pail`)

本路线灌装白色 HDPE 桶。称量实际供货桶体，背景包含成型及真实再生含量；树脂流不能充当成品桶。厂商列出的128盎司 HDPE 桶仅证明实际市场包装示例；标称体积不证明产品净质量或本数据集装量。

- 选定流: HDPE 颜料桶体
- 流属性/单位: Mass / kg
- 数量规则: 来自cp_pack的原始批群分子；按照第8节每参考流仅报告一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`
- 来源: `golden-product`

###### 供货 HDPE 桶盖 (`i_lid`)

仅对有证明的 HDPE 桶盖应用本具体行。将其与桶体及颜料净质量分开称量；须有供应商证明，参考产品页不说明盖材。若实际为其他聚合物，或带垫圈、提手、内衬，须先按实际分别补充原子行，方可宣称完整；不得默认为已含或不存在。

- 选定流: HDPE 颜料桶盖
- 流属性/单位: Mass / kg
- 数量规则: 来自cp_pack的原始批群分子；按照第8节每参考流仅报告一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`

###### 供货纸质标签 (`i_label`)

称量实际供货成品纸质标签；印刷及胶层在该供货物背景中声明，不虚构为颜料厂另购油墨。原生名称宽泛，未指定地理、路线或备注；保留的历史分类仅为溯源，不证明供应商或现行分类有效性。

- 选定流: 纸质标签 `7b25a54f-baa6-4593-9670-4240a3315eed`
- 流属性/单位: Mass / kg
- 数量规则: 来自cp_pack的原始批群分子；按照第8节每参考流仅报告一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`

###### 瓦楞运输纸箱 (`i_carton`)

记录归属于放行批群的每个实际单件供货纸箱，包含真实包装报废；不使用二级纸箱时保留不存在的证据。本具体纸箱不是包装材料选择器；如另有胶带或托盘，须分别补充卡片。

- 选定流: 瓦楞纸板运输箱
- 流属性/单位: Mass / kg
- 数量规则: 来自cp_pack的原始批群分子；按照第8节每参考流仅报告一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`

###### 已放行颜料退回返工 (`i_return`)

按实测湿质量记录跨回制造边界的同产品退回物，在退回账中保留原放行及负荷标识；它不是新采购。合并时抵消内部转移及原结转负荷，新增返工负荷仅一次归回原批群，并披露任何跨期重述。

- 选定流: 涂料（水性） `47411f13-cc57-455b-ba23-dafbaeef17db`
- 流属性/单位: Mass / kg
- 数量规则: 来自cp_period的原始批群分子；按照第8节每参考流仅报告一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_period`

#### 输出

##### 产品流

###### 新增正验收艺术颜料 (`o_new`)

唯一定量参考是装桶 PW6 金红石钛白水性丙烯酸厚涂艺术颜料的首次质量放行净量，终端位于成品仓储及发运之前。原生身份更宽：水性涂料、工厂生产混合、丙烯酸或醇酸黏结剂选项、地理未指定。本 PCR 仅选其物理一致的丙烯酸/PW6艺术用子集，不代表工业建筑漆或品牌配方。原生“可溶于水”“无烟气”“VOC少90%”说法未经证实，不能定义本清单或性能。

- 选定流: 涂料（水性） `47411f13-cc57-455b-ba23-dafbaeef17db`
- 流属性/单位: Mass / kg
- 数量规则: 1 千克
- 数值来源模式: `fixed_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_release`
- 来源: `golden-product`

###### 退回颜料再验收 (`o_reaccepted`)

计量退回账中同产品再验收后的实际输出。本真实产品输出与 o_new 共用宽泛 UUID，但不是新增产量，绝不增加 Q。与 i_return 及原批群配对；新增损耗与返工能源仍须可见。不得为强行获得唯一 UUID 匹配而改称废物或隐藏。

- 选定流: 涂料（水性） `47411f13-cc57-455b-ba23-dafbaeef17db`
- 流属性/单位: Mass / kg
- 数量规则: 来自cp_period的原始批群分子；按照第8节每参考流仅报告一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_period`

##### 废物流

###### 废弃湿艺术颜料 (`w_reject`)

称量不能回收的同产品颜料浆，并记录水/固体组成和接收方；保留返工物和在制品属于库存/退回账，不属于本废物。未确认路线前，不将已查到的表面涂装废物流用于制造残渣。

- 选定流: 报废 PW6 丙烯酸艺术颜料浆
- 流属性/单位: Mass / kg
- 数量规则: 来自cp_outlets的原始批群分子；按照第8节每参考流仅报告一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_outlets`
- 来源: `golden-water`

###### 收集的设备洗水 (`w_wash`)

记录交场外接收方的湿洗水、检测及夹带固体。它是技术圈废物，不是基本水排放；背景另行记录接收处理。COD/BOD 是质量指标，不能代替各化学物种排放或配方质量分数。

- 选定流: 丙烯酸颜料设备洗水
- 流属性/单位: Mass / kg
- 数量规则: 来自cp_outlets的原始批群分子；按照第8节每参考流仅报告一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_outlets`
- 来源: `golden-water`

###### 捕集颜料粉尘 (`w_dust`)

记录实际送场外的捕集干颜料；区分返批保留物、废弃粉尘及剩余烟囱排放。已查 TiO2 基本流为室内空气，不能代表室外烟囱排放或本废物。

- 选定流: 捕集金红石二氧化钛颜料粉尘
- 流属性/单位: Mass / kg
- 数量规则: 来自cp_outlets的原始批群分子；按照第8节每参考流仅报告一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_outlets`
- 来源: `epa-paint`

###### 报废 HDPE 桶体 (`w_pail`)

称量实际报废桶体及附着颜料，保留容器/颜料亚账，避免将附着颜料再次计入 w_reject；记录接收方和净材料回收，不给默认信用。

- 选定流: 报废 HDPE 颜料桶体
- 流属性/单位: Mass / kg
- 数量规则: 来自cp_pack的原始批群分子；按照第8节每参考流仅报告一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`

###### 报废 HDPE 桶盖 (`w_lid`)

将报废盖与桶体分开记录并保留实际材质身份；如有盖密封件或其他废包装材，应另设各自行。

- 选定流: 报废 HDPE 颜料桶盖
- 流属性/单位: Mass / kg
- 数量规则: 来自cp_pack的原始批群分子；按照第8节每参考流仅报告一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`

##### 基本流

###### 制造水蒸发至空气 (`e_water`)

仅记录有独立依据的制造蒸发，采用原生未指定空气排放介质。留在供货湿颜料中的水不在此蒸发；下游绘画/干燥不在本门内，不挪入其损失，也不以无法解释的质量残差拟合蒸发。原生同位素/同义词噪声不改变 CAS 7732-18-5 的普通水身份。

- 选定流: 水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 来自cp_outlets的原始批群分子；按照第8节每参考流仅报告一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_outlets`
- 来源: `golden-water`

###### 剩余颜料排入室外空气 (`e_tio2`)

采用采样或有独立物种依据的平衡确定控制后物种质量及室外介质。捕集粉尘属于 w_dust，不将 AP-42 百分数或总颗粒物当作实测 TiO2，也不使用已查到的室内空气 UUID。

- 选定流: 二氧化钛至室外空气
- 流属性/单位: Mass / kg
- 数量规则: 来自cp_outlets的原始批群分子；按照第8节每参考流仅报告一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_outlets`
- 来源: `epa-paint`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| al_cohort | colour_make | 对这一色料优先直接按工单/批次计量；共享制造支持按有证明的因果驱动分配，保留未分配完整总量及差额核对。不用通用涂料能耗比例、收入比、溶剂信用或艺术用途收益。 |  |
| al_returns | i_return; o_reaccepted | 同产品再验收不是联产品或新增可售产量。配对原质量/负荷标识，抵消转移的原负荷，将新增返工仅一次归入原批群。重新打开批群须披露重述。零产出失败的损耗/能源仍留在匹配批群；Q=0时保留原始失败记录，不作除法或每千克报告。 |  |
| al_waste | 废物输出 | 不合格浆、粉尘、洗水及废包装分别计量为废物。实际回收和接收处理须有证据，不自动作负产品负荷。如真实存在另售联产品，使用本单产品画像前须另作边界/分配审查。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

各 aggregation_rule 仅说明最终报告基准。负责人在 collection_method 中采集未归一原始分子及库存/负荷证据；第8节 calc_report 执行唯一的 A_i/Q 报告。卡片和 aggregation_rule 指同一次操作，不再次相除。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | colour_make | o_new | 质量放行与校准称量 | 批号；产品身份；首次放行时间/标识；毛/皮/净千克；验收；报废样品；既往放行标识；Q | 质控负责人和灌装主管将校准净灌装量与唯一首次放行对账，去重既往放行、退回和再验收。保留原始Q千克，不含包装，不作除法；成品仓库交接与发运另记原始账。 | kg | 每灌装批及放行 | 完整真实期间及可追溯批群，含失败/零产出运行和所有在制品/退回结转期间 | 仅声明场址及本PW6丙烯酸路线 | 每 1 kg 参考流 | 秤校准、签署放行及批群标识审计 |
| cp_period | colour_make | i_return; o_reaccepted; WIP | 库存及负荷账 | 期间；批号；期初末在制品千克及组成；按交换标识结转的材料/能源/废物负荷；内部交接标识；首次放行标识；退回/再验收千克及原负荷标识；Q | 生产会计负责未归一匹配批群账，记录全期间活动、零产出失败、返工及在制品结转；从前期追溯期初负荷，并向后期结转期末负荷。退回交接与原批群配对且保留新增返工。物理库存与负荷分别采集，不执行A/Q；首次放行后的成品库存变动不再产生生产输出。 | kg; MJ | 每次变动及期末 | 完整真实期间及可追溯批群，含失败/零产出运行和所有在制品/退回结转期间 | 仅声明场址及本PW6丙烯酸路线 | 每 1 kg 参考流 | 签署盘点、前期负荷账及防重复核对 |
| cp_material | colour_make | 采购原料及水 | 称量与供应商记录 | 交换标识；批号；供货湿千克；收/领/退；库存；含量/固体/水；供应商商品；温度；体积或流率及持续时间；密度来源 | 物料保管负责人记录真实称量领用和损耗，含失败批次及清洗；核对原料期初末和匹配在制品结转负荷。每种整份商品制剂仅列为一项外购，组成分数另列不可重复加算的亚账。保留转换后的原始分子，不作除法。 | kg | 每次领用及每批 | 完整真实期间及可追溯批群，含失败/零产出运行和所有在制品/退回结转期间 | 仅声明场址及本PW6丙烯酸路线 | 每 1 kg 参考流 | 发票、秤、供应商检验及组成说明 |
| cp_energy | colour_make | i_power | 电表及运行日志 | 表号；期初末kWh；时间；运行/失败/返工标识；共享支持总量；因果分配；在制品结转 | 公用工程负责人采集完整归属期间电表分子及匹配结转负荷，包含失败、待机、灌装、通风、清洗及搬运；转换前核对共享总量。保留原始kWh及转换MJ，不作除法。 | kWh; MJ | 每次运行及计量间隔 | 完整真实期间及可追溯批群，含失败/零产出运行和所有在制品/退回结转期间 | 仅声明场址及本PW6丙烯酸路线 | 每 1 kg 参考流 | 电表校准、工单及支持分配核对 |
| cp_pack | colour_make | 各包装行 | 包装计数、质量及报废账 | 物件标识；聚合物；组件；数量；实测单件千克；使用/报废/回收数量；附着颜料；供应商；批群；结转负荷 | 包装主管分别计数称量各供货物及各废物，保留完整包装/重包装/失败灌装量、组件证据和附着颜料亚账，并匹配在制品结转。仅记原始分子，纳入真实辅助包装，不重复计物件内组分。 | kg; count | 每灌装/包装批 | 完整真实期间及可追溯批群，含失败/零产出运行和所有在制品/退回结转期间 | 仅声明场址及本PW6丙烯酸路线 | 每 1 kg 参考流 | 组件称量样品、供应商物料清单及报废票据 |
| cp_outlets | colour_make | 废物及基本流输出 | 地磅、采样及接收记录 | 物种/物流标识；湿千克；水/固体分数；样品/时间；空气介质；控制入口/捕集/出口；去向；接收方；库存及负荷结转；不确定性 | 环境负责人采集控制后真实湿废物及有独立支持的排放物种原始分子，含失败及所有保留在制品负荷。区分新水、保留游离水、内部回用、洗水、捕集和蒸发；不以同一残差同时反推未知反应水与未知排放，也不由COD换算物种。本物理混合路线不声称存在净反应水源；采集不作除法。 | kg | 每次出口变动及采样间隔 | 完整真实期间及可追溯批群，含失败/零产出运行和所有在制品/退回结转期间 | 仅声明场址及本PW6丙烯酸路线 | 每 1 kg 参考流 | 废物票据、接收验收、物种方法及独立不确定性/平衡证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_conversion | 所有清单行 | 仅作必要原始转换：千克=积分立方米×独立实测千克/立方米；仅对流率用积分体积=流率×真实时长；MJ=kWh×3.6。采购凝胶/助剂的组成分数不产生额外采购。 | raw_volume; density; temperature; rate; duration; raw_kWh | 转换后的原始分子 |  |
| calc_cohort | 所有清单行 | 按可追溯批群标识，由完整实际期间活动加期初在制品结转负荷、减期末在制品结转负荷形成各原始归属分子A_i。保留零产出损失及新增返工；仅抵消有证据的内部库存/退回交接及原负荷重复，绝不删除真实负荷。重开退回批群保留原唯一放行Q，并披露新增负荷重述。结转或跨批群归属未解决时不能宣称数据集完整。 | period_totals; opening_WIP_burdens; closing_WIP_burdens; cohort_ids; return_ids | A_i |  |
| calc_report | 所有清单行 | 原始转换及负荷结转核对后，对完整匹配且首次放行量为正的批群，仅一次报告q_i=A_i/Q。Q为原始新增验收湿颜料净千克，o_new为1千克。卡片及协议汇总说明同一次报告，不是顺序重复除法。i_return及o_reaccepted按同一Q保留实测配对环流量，合并抵消；它们不增加Q，也不表示第二个可售产品。 | A_i; Q; cp_release; cp_period | 每 1 kg 参考流 |  |
| calc_balance | 所有清单行 | 负荷归一前独立核对实物湿质量：期初在制品+外部配方/清洗物料领用（不含包装）+退回颜料=期末在制品+新增放行Q+再验收退回量+分别计量废物+分别有依据空气排放。包装另做供货/保留/报废库存平衡，能源不是质量。按供应商含量和实测出口证据，对实际产品/废物/库存物种核对水和Ti。载水物理蒸发不是反应水；不得把同一无法解释残差拟合成未知出口或假想物种。 | raw_mass_ledger; water_subledger; Ti_assay; measured_outlets; WIP; return_ledger | 附不确定性的质量和元素核对 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | 所有行 | 保留完整供货产品/化学/物态/等级、原生路线/地理/介质限制及实际供应商兼容性。宽泛原生身份不提供配方或用量；辅助UUID未解决属于链接缺口，不代表零使用。参考必须保留所选PW6水性丙烯酸艺术范围。 | 供应商规格及身份审计 |
| dq_raw | 所有协议 | 保留完整真实期间原始记录、负责人签署、全部失败及库存/负荷结转、唯一calc_report操作和不确定性。不虚构前景测量或行业均值。 | 可重现核对的原始及派生账 |
| dq_formula | 复配供货物 | 核实各实际商品等级；供应商组分/活性物/水为不可重复加算的组成亚账。SDS范围不定义配方或颜料负载。不能证明本指定凝胶路线时，不得静默替换黏结剂/路线。 | 供应商物料单、检验及配方领用记录 |
| dq_sources | 方法证据 | 四个Golden页面属于同一厂商证据族。历史DIY及水回收案例仅作定性依据；EPA独立区分物理制漆与熬制清漆，不采用其溶剂/颗粒/控制因子。产品黏度及耐光标签不是寿命或色效等效因子。 | `golden-product`; `golden-diy`; `golden-water`; `epa-paint` |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| vr_reference | o_new | 要求明确唯一o_new链接、声明的参考UUID、1千克净质量及双语一致范围。i_return/o_reaccepted为共用该UUID的真实配对产品交换，不得隐藏或计为第二项新增参考。 |  |
| vr_denominator | 所有清单行 | 要求Q>0唯一首次放行、原始A_i和完整在制品/退回结转，仅执行一次calc_report除法。拒绝由发运推定Q或在Q上加同批群期末成品库存。实际交付研究须另作库存/负荷核对。 |  |
| vr_completeness | colour_make | 每项真实原料、能源、包装组件、返工负荷、废物流及排放物种须分别出现，或有不存在证据。辅助UUID及供应商缺口必须披露；适用缺口未解决时，数据包不能宣称完整链接清单。 |  |
| vr_balance | calc_balance | 要求物理质量、水及Ti核对与真实物种证据独立，允许声明测量不确定性，但不将残差指定为未知化学过程；废物接收交接与基本排放分开。 |  |
| vr_claims | 数据集画像 | 不得由身份或有限结构检查推定寿命、覆盖率、颜料/黏结剂配方、干膜功能、零VOC、产品安全或科学批准。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明PW6水性丙烯酸艺术颜料的前景物理制造 |
| downstream_use | 首次质量放行门的背景链接制造清单 |
| allowed_use | 仅声明产品/路线/物态批群；仓储/发运另行扩展 |
| excluded_use | 整CPC35120覆盖、工业漆或油墨替代、服务/色效/寿命比较、未公开专有配方 |
| required_metadata | 全部参考限定信息、原始期间及批群标识、Q门、库存/退回与负荷账、供应商原生兼容性、全部新增原子行 |
| required_quality_disclosure | 测量不确定性、全部未解决链接、原生元数据债务、历史来源限制、分配、排除及缺失证据 |
| update_trigger | 颜料/黏结剂/配方、供货物、工艺、包装、放行/交付门、场址/期间改变或新增矛盾身份依据 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| golden-product | handbook | https://goldenartistcolors.com/products/heavy-body-acrylic-color-titanium-white | 厂商1380：真实PW6金红石厚涂艺术钛白及HDPE桶市场示例。仅身份；不采用供货配方、密度、灌装质量换算、性能等效或寿命。 |
| golden-making | handbook | https://goldenartistcolors.com/discover-golden/how-we-make-our-paints | 厂商定性混合、研磨、试验及发运前质控；无实测场址投入或通用配方。与其他Golden页同一出版者。 |
| golden-diy | handbook | https://justpaint.org/just-make-paint/ | Golden Artist Colors，Just Make Paint，2000年10月1日：采购丙烯酸凝胶、干颜料分散及单独复配分散剂/消泡剂路线、水与包装功能。仅历史DIY方法；不采用比例、助剂浓度、pH、工业收率、现行商品可获得性或专有配方。 |
| golden-water | handbook | https://goldenartistcolors.com/resources/golden-manufacturing-water-reclamation-process | Ben Gavett厂商案例：载水与设备清洗、洗水及颜料/聚合物残渣。仅定性完整性；用水比例、RO回收、运输距离、现场处理及COD不能移植为本场址清单或物种排放。同一厂商证据族。 |
| epa-paint | official_guidance | https://www.epa.gov/sites/default/files/2020-10/documents/c06s04.pdf | 美国EPA AP-42 6.4，1983年5月、1995年1月重排，第1页：独立的物理分散/混合/包装与熬制清漆工艺区别。为溶剂漆原型；不采用艺术配方、通用损失/排放/控制因子或数量默认值。 |
