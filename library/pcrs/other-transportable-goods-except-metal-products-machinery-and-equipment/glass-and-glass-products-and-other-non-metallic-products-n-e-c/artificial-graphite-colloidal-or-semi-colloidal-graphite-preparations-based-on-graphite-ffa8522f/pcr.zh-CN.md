---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.artificial-graphite-colloidal-or-semi-colloidal-graphite-preparations-based-on-graphite-ffa8522f
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 未涂碳焦基人工石墨粉

## 1. 范围与适用性

本PCR描述整份工业人工石墨粉半制品制造：从接收可石墨化煅烧石油焦，经真实准备、电热颗粒批式石墨化、冷却、导电填料分离、真实粉碎分级及清理，到首次供货质量放行。不纳入表面涂碳、有意催化掺杂或粘结剂成形步骤。装料为颗粒态；炉图中的芯区或分层区域不等于压制产品坯体。来源支持透明技术综合，不声称同一家当代工厂或同一SKU。专利将焦转化与已石墨化原料再热处理、容器及混合填料等变体区分；不得将这些变体混入本参考路线。实际场址须独立确立所选路线。购入已石墨化块体或成品粉仅改粒或包装的工厂不满足本制造边界。天然石墨开采浮选、胶体分散液、沥青结合成形制品、炭黑、有意涂碳球化电池负极粉、成品电极及非电石墨制品需另行判断适用性。下游配混、器件装配和使用在参考门外。包装及实际仓储搬运发运仍作为原放行cohort的独立观测服务保留，不改变Q。不规定工艺温度、时间、电流配方、粒径目标、能耗强度、产率、密度、设备寿命或认证。 unsd-cpc-structure-2025；imerys-graphite-powder-patent-2015；asbury-synthetic-graphite-2006；asbury-graphite-introduction-2026

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.artificial-graphite-colloidal-or-semi-colloidal-graphite-preparations-based-on-graphite-ffa8522f |
| classification_refs | CPC 3.0 37950；narrower；当前接受关系以`classifications/mappings/cpc-3.0-to-pcr.yaml`及`docs/adr/cpc3-additional34-20261029-37950.md`为准；须满足完整方法范围与排除项，不表示整类覆盖或科学/翻译批准 |
| covered_products | 所述颗粒路线首次放行的整份未涂碳焦基工业人工石墨粉 |
| excluded_products | 天然开采石墨; 胶体石墨; 炭黑; 有意涂碳或催化掺杂粉体; 粘结成形碳制品; 成品电极; 非电已加工石墨制品; 外购成品粉再包装 |
| representative_product | 一个声明等级和含水状态的工业人工石墨粉; 不承诺终端性能 |
| production_route | 煅后焦接收; 真实颗粒准备; 颗粒批式电热石墨化; 冷却; 填料分离; 真实粒度整理及清理; 测试和首次放行 |
| market_state | 外供整份未涂碳粉体半制品; 包装不进入粉体质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供具有声明整份产品质量的未涂碳人工石墨粉半制品 |
| How much | 首次供货质量放行时1千克整份净粉 |
| How well | 声明人工焦路线及真实粉体等级、相态/灰分/水分，以及全部必需限定信息; 不保证通用终端性能 |
| How long or cycle | 一个原制造cohort及其单独观测服务H; 不宣称使用寿命 |
| reference_flow_link | released_powder |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 石墨粉 `642a19a2-c6c5-4c76-bc4f-84e3b8d7a67f` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 整份未涂碳人工石墨粉及真实石墨相微量相灰分和水分; 可石墨化煅烧石油焦来源及上游炼油焦化煅烧完整覆盖; 真实无粘结剂颗粒艾奇逊批式路线及装料分离和填料回收; 无天然开采路线无沥青成形无有意表面涂碳无催化掺杂且无成品电极功能; 真实前粉碎后粉碎分级除尘操作及全部损失; 场址报告期供货地理及实际电力电压和供方; 整份粉体首次放行净质量Q唯一放行ID实际水分及声明产品等级; 参考量包括期末已放行FG并排除可拆包装及重复复检; 逐流期初期末原料WIP及未分配库存继承负荷向量; 包装仓储发运及获准返工的原放行cohort Qc与实际服务观测H; 按相态来源及接收区室区分的完整分子物种毛流及独立质量元素平衡; 每种包装P I ER S EO W腿和空置附着WIP附着FG可复用库存及唯一上游所有者; 完整在装资产新旧维修件及真实液体的实测实物质量和单独当期服役负荷; 制造商或规范返工许可及返工后测试验收和处置; 每张采用卡的native限制真实相容供方及全部未解决数据披露 |

全部必需限定信息须进入真实数据集元数据、过程说明、参考产品描述或等效字段。缺失限定信息则该数据集不完整。整份供货质量包括真实微量相和水，不以石墨碳含量质量替代。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q = 唯一首次供货质量放行时经校准称量的整份净粉质量之和; 记录真实水分、等级及配置。排除可拆包装。期末已放行FG已在Q内。不推断密度或单件质量。 |
| native_units | all inventory rows | Each native extensive property | native unit | 保持各原始广延分子单位，仅按独立物理证据换算。能量保持MJ; 真实质量保持kg; 累计m3只使用一次。真实速率按观测区间积分。计数转质量须独立称量同配置材料及其真实数量; 次级native系数和专利密度不是实测换算证据。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收可石墨化煅烧石油焦及分别具有所有者的真实导电石墨、保温焦和公用工程; 保留上游炼油/焦化/煅烧 |
| starting_condition_role | 明确前景采集起点; 不允许截断上游负荷 |
| product_classification_scope | CPC 3.0:37950; narrower |
| recursive_input_rule | 外购石墨填料只链接一次相容上游供方; 内部回收填料携带继承向量且配对转移抵消。参考粉体不递归采购为自身原料。 |
| upstream_dataset_requirement | 真实整份接收产品状态、路线、地理及所有权; 避免重复供方整份制剂组分及包装 |
| disclosure | 真实装料配置、焦历史、实物门、库存、cohort向量、供货接口及实际服务观测; 为技术综合，不声称单厂配方 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_route | manufacture | 声明起点为接收状态的外购煅后焦；匹配供方中保留上游炼油、焦化、煅烧及运输。不得漏掉生焦煅烧或重复增加煅烧。所选前景路线只计真实颗粒准备、颗粒炉转化、冷却分离及真实整理测试。改变原料或粘结/涂碳路线须重新判断适用性并拆原子清单。 | imerys-graphite-powder-patent-2015; asbury-synthetic-graphite-2006 |
| b_gate | manufacture and service | Q为cohort内唯一识别的首次质量放行整份净粉质量之和，包括留库已放行期末FG。复测、发运及退回不新增产量。单列已放行FG实物账：期初FG + 内部首次放行Q + 毛接收退回R + 真实新增材料/水X_in = 期末FG + 毛实物发运G + 真实对外移除 + X_out。X项只与其他流项已包含数量去重；留在期末的真实新增量同时保留流入和完整湿态期末质量。携带逐交换期初期末FG完整历史制造向量及原cohort，退回关联该cohort而不新增采购。合并门时只抵消一次内部Q。 | jrc-ilcd-attributional-allocation-2010 |
| b_stocks | all processes | 保留逐交换期初期末原料/WIP/未分配材料及填料库存完整历史负荷向量。制造期末负荷不包含已放行FG，因为它已进入Q。纳入失败/零产出运行及启停、待机、清理和放行前返工。已校正库存的消耗不得再校正。原cohort已完成服务始终计入；只有未用/未分配服务或计费可以结转。回收导电填料或保温料作为期末实物留存不能撤回已经完成的服务。只有真实未分配材料或未用计费向量可进入Bclose，并与完整回收实物质量分开。 | jrc-ilcd-attributional-allocation-2010 |
| b_physical | all physical gates | 逐制造、FG/服务及合并门核对完整湿态期初库存 + 真实对外毛输入 = 完整湿态期末库存 + 真实对外毛输出。只配对抵消内部转移。区分产品焦、导电石墨、保温焦及在装电极/耐火料。新增维修件或每种水相即使留在期末设备也仍为真实输入。经济及服役负荷份额不得缩减毛实物腿。独立核对相关C/H/O/N/S及真实金属/矿物相；不得用一个总余额解两个未知物种，不得从总碳或VOC/PAH/NOx/SOx指标推定排放。 | imerys-graphite-powder-patent-2015; jrc-ilcd-attributional-allocation-2010 |
| b_pack | each packaging material | 每种包装分别维持期初空置/附着WIP/附着FG/可复用库存 + 外购P + 随供货进入I + 外部退回接收ER = 期末库存 + 随毛发运外出S + 对外返回EO + 废物W。P/I/ER仅与其他已包含入流项去重，S/EO/W仅与其他出流项去重。不得因真实新增流入留在期末就删除它。随供货包装或整件采购的上游所有者仅赋予一次。内部复用抵消；不产生新增粉体Q、采购或自动共产品。 | jrc-ilcd-attributional-allocation-2010 |
| b_assets | support and service | 将真实整炉、导电电极、每种耐火料、维修件及在装液体作为实物资产/库存追踪，并与当期服役负荷区分。记录原资产向量、真实当期服务和更换证据，不用默认寿命或每kg整机系数。保留完整新件/拆出旧件及所含水分。真实放行后作业须制造商/规范许可、作业后测试和验收/处置；另列每种真实作业输入输出。 | imerys-graphite-powder-patent-2015; asbury-synthetic-graphite-2006; jrc-ilcd-attributional-allocation-2010 |
| b_completeness | all processes | 每种真实燃料、电力、分离气体、水源、化学制剂、包装、废物及分子/颗粒排放均为独立物理身份并保持自身native广延单位。完成数据集前须补齐遗漏真实交换。整份外购制剂只采购一次；含量、载体及添加剂为子账。不得将未列制造输入隐藏为零或未指定其他投入集合。干式线不意味着存在蒸汽供货或湿法提纯配方。 | imerys-graphite-powder-patent-2015; jrc-ilcd-attributional-allocation-2010 |
| packaging_receipt_basis | packaging | 逐实际完整包装制品，P记录有偿采购（单独或随货付费，有无单独发票均可）。I记录首次非采购外部入流，含单独赠与、借用、租赁/周转池领入和未付费供方随附包装；供方随附仅为I的一个子集。ER必须以同一制品或可审计匹配批次关联本场所先前外发记录；仅有他方使用史不属于退回。P/I/ER互斥。已有匹配物理制品卡及原始分账覆盖这些来源，但仍须满足全部原生材料/形态/状态限制；不相容真实制品须另列原子行，不得替用UUID。X_in/X_out仍为独立实测水料变化，不能替代整制品接收。保留完整湿毛量、所有者/保管者、付费/非采购依据、来源、原外发关联、实际状态单位和继承制造/服务向量。无偿接收既非新制造，也不自动零负荷；真实服务及新增运输搬运按正确原批群和分母归属一次，真实未用服务另留，不设默认寿命或抵扣。存量、毛实物流和负荷向量分开。这是声明的守恒前景核算实现，不声称引用原文规定这些变量名。 | jrc-ilcd-attributional-allocation-2010 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | 焦转化及粉体放行 | required | 真实接收煅后焦经准备、颗粒电热石墨化、冷却、分离及真实整理测试并含排放及水控制 | 原cohort可归属制造或真实服务 | 1千克参考流 |
| support | 资产及维护服务 | required | 真实炉、电极、各耐火料及维护液体，并单独归属当期服务 | 原cohort可归属制造或真实服务 | 1千克参考流 |
| service | 已放行cohort包装及实际服务 | required | 原cohort观测H内的真实包装、仓储/搬运/发运及获准放行后作业 | 原cohort可归属制造或真实服务 | 1千克参考流 |

卡片为条件性采集设计，不是工厂实测观察。独立核实每种真实供货和释放。不得因UUID或数量未知就置零。标准化负荷模型交换旁须保留独立实物毛账。不得用服务凭证隐藏真实输入出口; 完成数据集前须扩展每种实际遗漏流。

### 过程：焦转化及粉体放行（`manufacture`）

真实接收煅后焦经准备、颗粒电热石墨化、冷却、分离及真实整理测试并含排放及水控制.

#### 输入

##### 产品流

###### 煅烧石油焦原料（`coke_feed`）

接收用于转化为石墨的整份外购煅烧石油焦。供货水分、灰分及挥发组分仅作为这一次采购的子账；明确可石墨化焦的来源与实际接收粒料状态。保留上游炼油、焦化、煅烧及运入负荷。只有真实实施时才纳入装炉前筛分或粉碎。 native产品为CAS 64743-05-1的煅烧石油焦，工厂生产混合。不是生焦、冶金焦或石墨。native说明描述生石油焦煅烧及典型延迟焦化历史；须声明实际供方路线、灰分、水分及可石墨化性，不把采购假定为纯元素碳。

- 选定流：煅烧石油焦 `5456a1e2-1a41-43f4-b49c-48e851727684`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_coke_feed`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### 人工石墨颗粒导电填料（`conductive_fill`）

仅对物理上符合该粉体族的供货或内部回收人工石墨粉使用此身份；较粗粒料须另核验相应形态。分别记录新购、期初回收库存、实际装入及回收期末库存，并保留回收库存剩余未分配材料/计费向量，已完成服务仍归原cohort。导电填料不是免费碳，也不是本期新制造参考输出。 native产品族为加工石墨粉；CAS 7782-42-5；未声明固定天然来源、等级、纯度或供货地理。其矿物分类是独立的分类缺陷，不能证明天然来源。此处由primary证据和真实焦转石墨历史将使用限定为粒度整理后的整份未涂碳人工粉。排除天然开采石墨、炭黑、胶体液、球化涂碳负极料和成形电极。不以CAS单独推断人工来源。

- 选定流：石墨粉 `642a19a2-c6c5-4c76-bc4f-84e3b8d7a67f`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_conductive_fill`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### 石油焦散料保温层（`insulation_coke`）

实际批式炉以石油焦作为低导电性散料保温装料时，将整份材料与转为产品的焦及石墨导电填料分别记录。明确生焦或煅后状态、实际损失和分离情况；不假定同等级或零氧化。本限定无粘结剂路线不包含粘结剂或表面涂碳采购。 本具体物理身份的相容精确流UUID未解决; 不得替换为集合类别或冲突泛候选。

- 选定流：石油焦保温粒料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_insulation_coke`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### 制造用电（`process_power`）

在实际进电接口计量本负载；按所选计量边界只计一次变压、整流及冷却损失。已在总表内的分表总量不是新增采购。保留失败批次、启停、待机及清理负荷。 native产品为中国CN电网平均、用户端1–35 kV交流电，以净热值能量属性和MJ为基准。只绑定实际相符供电接口；其他国家、电压或特定发电合同须另核验流与供方。保留原始kWh计量，并按量纲恒等式1 kWh = 3.6 MJ只换算一次；整流电不再加第二个供方，不将native能量计作kg。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_process_power`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### 除尘及冷却用电（`control_power`）

在实际进电接口计量本负载；按所选计量边界只计一次变压、整流及冷却损失。已在总表内的分表总量不是新增采购。保留失败批次、启停、待机及清理负荷。 native产品为中国CN电网平均、用户端1–35 kV交流电，以净热值能量属性和MJ为基准。只绑定实际相符供电接口；其他国家、电压或特定发电合同须另核验流与供方。保留原始kWh计量，并按量纲恒等式1 kWh = 3.6 MJ只换算一次；整流电不再加第二个供方，不将native能量计作kg。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_control_power`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### 冷却回路补水（`cooling_makeup`）

仅用于实际加入冷却回路的市政处理水。区分初装、补水、泄漏、蒸发及期末在装水。真实新增水即使留在完整湿态期末资产库存中仍为流入。内部循环不是重复外购新水。 native产品是供应用户或工厂的处理市政自来水，以质量/kg为基准。其次级体积系数不是实际流体密度证据。区分外供新水、循环水、原水取水及去离子水；其他真实水供货须独立身份。计量真实水质量，或在所测温压下独立确定其密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cooling_makeup`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### 设备清理水（`cleaning_water`）

实际采用水清理或湿法除尘时纳入对应市政处理水。保留每种真实水相、来源及湿态库存质量；不向干式除尘线强加湿式洗涤或化学提纯。 native产品是供应用户或工厂的处理市政自来水，以质量/kg为基准。其次级体积系数不是实际流体密度证据。区分外供新水、循环水、原水取水及去离子水；其他真实水供货须独立身份。计量真实水质量，或在所测温压下独立确定其密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_water`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

##### 基本流

###### 大气分子氧进入（`air_oxygen`）

依据独立组分和流量状态证据记录进入的通风或工艺空气中本真实分子物种的毛流。累计体积只使用一次，仅对真实速率积分。保留气压、温度、湿度基准和组分。不得再增加空气集合流。环境二氧化碳不自动成为化石源或生物源固碳；进入水蒸气不是外购液态水。 native候选别名未一致保留本精确分子/相态身份; 核实相容native身份前不采用UUID。 本具体物理身份的相容精确流UUID未解决; 不得替换为集合类别或冲突泛候选。

- 选定流：大气分子氧进入
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air_oxygen`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### 大气二氮进入（`air_nitrogen`）

依据独立组分和流量状态证据记录进入的通风或工艺空气中本真实分子物种的毛流。累计体积只使用一次，仅对真实速率积分。保留气压、温度、湿度基准和组分。不得再增加空气集合流。环境二氧化碳不自动成为化石源或生物源固碳；进入水蒸气不是外购液态水。 native基本流为CAS 7727-37-9的二氮，作为来自空气的可再生元素资源，以质量/kg为基准。只用于真实大气进入；外购压缩或分离气体是带有自身上游供方的产品输入。本资源行不能代表尾气排放。 只纳入中性分子N2; 不替换为氮原子或总氮。

- 选定流：二氮 `08a91e70-3ddc-11dd-96e4-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air_nitrogen`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### 大气氩进入（`air_argon`）

依据独立组分和流量状态证据记录进入的通风或工艺空气中本真实分子物种的毛流。累计体积只使用一次，仅对真实速率积分。保留气压、温度、湿度基准和组分。不得再增加空气集合流。环境二氧化碳不自动成为化石源或生物源固碳；进入水蒸气不是外购液态水。 native基本流为CAS 7440-37-1的氩，作为来自空气的可再生元素资源，以质量/kg为基准。只用于真实大气进入；外购压缩或分离气体是带有自身上游供方的产品输入。本资源行不能代表尾气排放。 使用主体中性大气氩; 宽泛Ar-41别名不允许绑定特定放射性同位素交换。

- 选定流：氩 `fe0acd60-3ddc-11dd-a354-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air_argon`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### 环境二氧化碳进入（`air_co2`）

依据独立组分和流量状态证据记录进入的通风或工艺空气中本真实分子物种的毛流。累计体积只使用一次，仅对真实速率积分。保留气压、温度、湿度基准和组分。不得再增加空气集合流。环境二氧化碳不自动成为化石源或生物源固碳；进入水蒸气不是外购液态水。 本具体物理身份的相容精确流UUID未解决; 不得替换为集合类别或冲突泛候选。

- 选定流：环境空气中的二氧化碳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air_co2`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### 环境水蒸气进入（`air_vapour`）

依据独立组分和流量状态证据记录进入的通风或工艺空气中本真实分子物种的毛流。累计体积只使用一次，仅对真实速率积分。保留气压、温度、湿度基准和组分。不得再增加空气集合流。环境二氧化碳不自动成为化石源或生物源固碳；进入水蒸气不是外购液态水。 本具体物理身份的相容精确流UUID未解决; 不得替换为集合类别或冲突泛候选。

- 选定流：环境空气中的水蒸气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air_vapour`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

#### 输出

##### 产品流

###### 首次放行整份人工石墨粉（`released_powder`）

这是唯一参考输出：焦石墨化、冷却、分离及真实粒度整理、清理后，首次通过供货质量放行的整份净未涂碳人工石墨粉。真实石墨相、微量非石墨相、灰分及水分保留在整份供货粉质量内；石墨含量仅为子账。Q包含全部本次新放行且留在期末成品库存的材料。复检、发运和退回均不是新增首次放行。 native产品族为加工石墨粉；CAS 7782-42-5；未声明固定天然来源、等级、纯度或供货地理。其矿物分类是独立的分类缺陷，不能证明天然来源。此处由primary证据和真实焦转石墨历史将使用限定为粒度整理后的整份未涂碳人工粉。排除天然开采石墨、炭黑、胶体液、球化涂碳负极料和成形电极。不以CAS单独推断人工来源。

- 选定流：石墨粉 `642a19a2-c6c5-4c76-bc4f-84e3b8d7a67f`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：固定参考（`fixed_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_released_powder`
- 来源：`imerys-graphite-powder-patent-2015`; `asbury-synthetic-graphite-2006`; `asbury-graphite-introduction-2026`

###### 回收导电石墨对外转移（`external_fill`）

只纳入形态、污染状态和去向均有实测的真实对外转移。炉内重复使用须配对抵消。独立判断转移是否提供真实独立功能或仍属制造弃料；出售或正价格本身不能将本cohort的制造或处理负荷移走。 本具体物理身份的相容精确流UUID未解决; 不得替换为集合类别或冲突泛候选。

- 选定流：回收人工石墨导电粒料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_external_fill`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### 回收保温焦对外转移（`external_insulation`）

保留真实回收焦对外毛质量及继承向量。接收水分、灰分和使用后状态须与接收方相容。不得将全部拆出炉填料视为共产品或给予替代抵扣。 本具体物理身份的相容精确流UUID未解决; 不得替换为集合类别或冲突泛候选。

- 选定流：回收石油焦保温粒料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_external_insulation`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### 向供方返回温冷却水（`cooling_return`）

外部冷却水合同确有向供方回水时，保留产品返回，并记录真实质量、温度、压力、焓及水质。核对供方水和热负荷所有权。不得复制不存在的蒸汽锅炉或凝结水回路；真实外购蒸汽须另列载体质量、热交换及其真实凝结水返回。 本具体物理身份的相容精确流UUID未解决; 不得替换为集合类别或冲突泛候选。

- 选定流：向供方返回的温冷却水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cooling_return`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

##### 废物流

###### 不合格煅后焦细料（`coke_waste`）

未转化焦细料、样品及洒落料与废石墨分别保留；实际湿质量包括其中水和污染物。 即使材料外送，也应保留为制造参考粉体所引起的处理负荷。 本具体物理身份的相容精确流UUID未解决; 不得替换为集合类别或冲突泛候选。

- 选定流：不合格煅烧石油焦细料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_coke_waste`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### 不合格人工石墨粉（`powder_waste`）

记录失败产品及测试样品的真实处置和处理。制造损失出售不自动形成向其他功能的负荷转移。 即使材料外送，也应保留为制造参考粉体所引起的处理负荷。 本具体物理身份的相容精确流UUID未解决; 不得替换为集合类别或冲突泛候选。

- 选定流：不合格人工石墨粉
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_powder_waste`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### 捕集石墨质粉尘（`captured_dust`）

计量焦转化及粉体整理线单独收集的粉尘，明确真实相态、残余焦及杂质组成。外送废物中的粉尘与排向空气粉尘、经核实内部再用材料分别记录。 即使材料外送，也应保留为制造参考粉体所引起的处理负荷。 本具体物理身份的相容精确流UUID未解决; 不得替换为集合类别或冲突泛候选。

- 选定流：捕集石墨质粉尘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_captured_dust`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### 废弃石油焦保温料（`spent_insulation`）

废弃炉填料与内部回收库存及任何真实对外产品转移分别保留。 即使材料外送，也应保留为制造参考粉体所引起的处理负荷。 本具体物理身份的相容精确流UUID未解决; 不得替换为集合类别或冲突泛候选。

- 选定流：废弃石油焦保温料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_spent_insulation`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### 碳粉清理废水（`process_wastewater`）

只纳入实际单独收集的废水流，保留全部水、悬浮物、溶解组分及真实处理去向。COD和总碳是指标，不是指定分子质量；在环境排放跨越处理边界前，组分仍为该整份废水的子账。 即使材料外送，也应保留为制造参考粉体所引起的处理负荷。 本具体物理身份的相容精确流UUID未解决; 不得替换为集合类别或冲突泛候选。

- 选定流：碳粉清理废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_process_wastewater`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

##### 基本流

###### 化石源二氧化碳释放（`fossil_co2`）

仅用于独立归属的化石碳转化所形成的分子CO2。 通过有流量状态证据的代表性采样量化每种真实物种、相态和来源。保留气体、颗粒的捕集和释放去向；未知不等于零。数据集完成前，每种其他实际检出物种都须另列卡片。 native候选别名未一致保留本精确分子/相态身份; 核实相容native身份前不采用UUID。 本具体物理身份的相容精确流UUID未解决; 不得替换为集合类别或冲突泛候选。

- 选定流：排向空气的化石源分子二氧化碳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fossil_co2`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### 化石源一氧化碳释放（`fossil_co`）

仅用于独立归属的化石源分子CO；不得作为扣除CO2后的余额推定。 通过有流量状态证据的代表性采样量化每种真实物种、相态和来源。保留气体、颗粒的捕集和释放去向；未知不等于零。数据集完成前，每种其他实际检出物种都须另列卡片。 native基本流是分子一氧化碳（化石源）；CAS 630-08-0；排向空气且子区室未指定，基准质量/kg。它不是空气资源输入、水土排放、室内排放或长期排放。实际烟囱或城市/非城市区室已明确时应另核验更具体native流；将物理来源归属与化学含量检验分别保留。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fossil_co`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### 二氧化硫释放（`sulfur_dioxide`）

SOx或总硫不能确立SO2质量。 通过有流量状态证据的代表性采样量化每种真实物种、相态和来源。保留气体、颗粒的捕集和释放去向；未知不等于零。数据集完成前，每种其他实际检出物种都须另列卡片。 native候选别名未一致保留本精确分子/相态身份; 核实相容native身份前不采用UUID。 本具体物理身份的相容精确流UUID未解决; 不得替换为集合类别或冲突泛候选。

- 选定流：排向空气的二氧化硫
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_sulfur_dioxide`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### 一氧化氮释放（`nitric_oxide`）

将NO与NO2、N2O及任何NOx当量报告区分。 通过有流量状态证据的代表性采样量化每种真实物种、相态和来源。保留气体、颗粒的捕集和释放去向；未知不等于零。数据集完成前，每种其他实际检出物种都须另列卡片。 native候选别名未一致保留本精确分子/相态身份; 核实相容native身份前不采用UUID。 本具体物理身份的相容精确流UUID未解决; 不得替换为集合类别或冲突泛候选。

- 选定流：排向空气的一氧化氮
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_nitric_oxide`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### 二氧化氮释放（`nitrogen_dioxide`）

区分实测NO2、NO及以NO2当量报告的NOx。 通过有流量状态证据的代表性采样量化每种真实物种、相态和来源。保留气体、颗粒的捕集和释放去向；未知不等于零。数据集完成前，每种其他实际检出物种都须另列卡片。 native候选别名未一致保留本精确分子/相态身份; 核实相容native身份前不采用UUID。 本具体物理身份的相容精确流UUID未解决; 不得替换为集合类别或冲突泛候选。

- 选定流：排向空气的二氧化氮
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_nitrogen_dioxide`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### 化石源甲烷释放（`fossil_methane`）

实测化石源CH4排放不等于总烃、VOC或PAH。 通过有流量状态证据的代表性采样量化每种真实物种、相态和来源。保留气体、颗粒的捕集和释放去向；未知不等于零。数据集完成前，每种其他实际检出物种都须另列卡片。 native候选别名未一致保留本精确分子/相态身份; 核实相容native身份前不采用UUID。 本具体物理身份的相容精确流UUID未解决; 不得替换为集合类别或冲突泛候选。

- 选定流：排向空气的化石源分子甲烷
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fossil_methane`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### 尾气分子氧（`oxygen_out`）

将毛剩余分子O2与进气物种及真实反应分别保留。 通过有流量状态证据的代表性采样量化每种真实物种、相态和来源。保留气体、颗粒的捕集和释放去向；未知不等于零。数据集完成前，每种其他实际检出物种都须另列卡片。 native候选别名未一致保留本精确分子/相态身份; 核实相容native身份前不采用UUID。 本具体物理身份的相容精确流UUID未解决; 不得替换为集合类别或冲突泛候选。

- 选定流：排向空气的分子氧
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_oxygen_out`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### 尾气二氮（`nitrogen_out`）

保留毛分子N2；不得通过总氮平衡生成NOx。 通过有流量状态证据的代表性采样量化每种真实物种、相态和来源。保留气体、颗粒的捕集和释放去向；未知不等于零。数据集完成前，每种其他实际检出物种都须另列卡片。 native基本流是分子二氮；CAS 7727-37-9；排向空气且子区室未指定，基准质量/kg。它不是空气资源输入、水土排放、室内排放或长期排放。实际烟囱或城市/非城市区室已明确时应另核验更具体native流；将物理来源归属与化学含量检验分别保留。 只纳入中性分子N2; 宽泛总氮或特定同位素别名不代表另一种已接受物种。

- 选定流：二氮 `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_nitrogen_out`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### 尾气氩（`argon_out`）

保留真实氩毛出口，不再增加空气集合出口。 通过有流量状态证据的代表性采样量化每种真实物种、相态和来源。保留气体、颗粒的捕集和释放去向；未知不等于零。数据集完成前，每种其他实际检出物种都须另列卡片。 native基本流是分子氩；CAS 7440-37-1；排向空气且子区室未指定，基准质量/kg。它不是空气资源输入、水土排放、室内排放或长期排放。实际烟囱或城市/非城市区室已明确时应另核验更具体native流；将物理来源归属与化学含量检验分别保留。 使用主体中性大气氩; 宽泛Ar-41别名不允许绑定特定放射性同位素交换。

- 选定流：氩 `fe0acd60-3ddc-11dd-a350-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_argon_out`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### 尾气水蒸气（`vapour_out`）

区分真实蒸发水、独立证实的反应水及进入湿度；不编造结构水或化学计量因子。 通过有流量状态证据的代表性采样量化每种真实物种、相态和来源。保留气体、颗粒的捕集和释放去向；未知不等于零。数据集完成前，每种其他实际检出物种都须另列卡片。 native候选别名未一致保留本精确分子/相态身份; 核实相容native身份前不采用UUID。 本具体物理身份的相容精确流UUID未解决; 不得替换为集合类别或冲突泛候选。

- 选定流：排向空气的水蒸气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_vapour_out`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### 空气中颗粒石墨碳（`graphite_air`）

核实真实颗粒石墨相及粒径计量。PM总量、烟炱或炭黑身份均不能确立本石墨物种。 通过有流量状态证据的代表性采样量化每种真实物种、相态和来源。保留气体、颗粒的捕集和释放去向；未知不等于零。数据集完成前，每种其他实际检出物种都须另列卡片。 本具体物理身份的相容精确流UUID未解决; 不得替换为集合类别或冲突泛候选。

- 选定流：排向空气的颗粒石墨碳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_graphite_air`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### 未转化环境二氧化碳返回（`ambient_co2_out`）

保留独立追溯的环境入口二氧化碳回到空气的毛流。它不是生物源移除抵扣，也不得改称为化石焦氧化。 通过有流量状态证据的代表性采样量化每种真实物种、相态和来源。保留气体、颗粒的捕集和释放去向；未知不等于零。数据集完成前，每种其他实际检出物种都须另列卡片。 本具体物理身份的相容精确流UUID未解决; 不得替换为集合类别或冲突泛候选。

- 选定流：排回空气的未转化环境二氧化碳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_ambient_co2_out`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

### 过程：资产及维护服务（`support`）

真实炉、电极、各耐火料及维护液体，并单独归属当期服务.

#### 输入

##### 产品流

###### 电阻石墨化炉服役（`furnace_service`）

保留真实完整炉配置、新旧购入及已安装和未安装实物存量。使用kg时独立测量本配置净设备质量；不得假定整机质量、密度或固定寿命。携带原资产负荷向量，只记一次有证据的当期服役负荷；即使负荷分摊，也单独保留完整资产毛实物腿。不得每kg粉体计一整台新炉，也不得因已放行粉体留库扣除已经完成的cohort服务。 本具体物理身份的相容精确流UUID未解决; 不得替换为集合类别或冲突泛候选。

- 选定流：电阻式艾奇逊石墨化炉
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_furnace_service`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### 石墨导电电极服役（`electrode_service`）

纳入炉设备电路真实石墨导电电极。记录完整新购、在装旧存量、更换、侵蚀及拆出材料；区分当期服役负荷与实物购入。不规定每kg电极损耗；转为其他相态的石墨损失须独立计量。 native产品是经电极材料制备并描述为在生产中消耗的石墨电极。仅作为真实导电组件输入，不是参考粉体。不得替换为固定机械回收路线的另一电极族或电池浆料。声明实际供方、等级及电极配置；不推定性能。

- 选定流：石墨电极 `c2c70bef-5b23-4f7c-8fc8-ae4b5a844396`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_electrode_service`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### 碳化硅耐火衬服役（`sic_liner`）

以真实SiC耐火衬为条件；记录整份供货结合制品、其基体和真实状态，不用半导体SiC原料代替。保留新件和拆出件完整湿质量、真实在装存量及当期服役分配。 本具体物理身份的相容精确流UUID未解决; 不得替换为集合类别或冲突泛候选。

- 选定流：碳化硅耐火衬
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_sic_liner`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### 烧成铝硅质炉砖服役（`aluminosilicate_brick`）

限实际采用且符合本宽泛烧成炉衬族的烧成铝硅质耐火砖。声明整砖等级、基体、水及污染状态。留在期末的维修材料仍为完整实物流入并进入完整期末质量；只可与其他已计入流项去重。 native产品族是主要基于高铝、硅质或镁质材料的烧成耐火炉衬砖。本卡只选实际烧成铝硅质砖；不代表SiC炉衬、未烧维修料或普通建筑砖。

- 选定流：耐火砖 `daa9b8ab-d153-43e0-a265-48e14527f6dc`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_aluminosilicate_brick`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### 石油基配方润滑油（`lubricant`）

真实机械传动维护只接收一次整份配方润滑油，基础油和添加剂保留为子账。记录期初在装油、补加、排油、泄漏及期末在装液体。不从不相容native候选假定固定热值、纯度或PAO合成路线。 本具体物理身份的相容精确流UUID未解决; 不得替换为集合类别或冲突泛候选。

- 选定流：石油基配方润滑油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_lubricant`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

#### 输出

##### 废物流

###### 维护产生的废润滑油（`used_oil`）

在产生点记录整份真实受污染润滑油废物及其真实水和固体；保留处理和外送，不假定回收抵扣。与洁净再生油产品区分。 native废物是产生点经使用污染的石油基或合成润滑油，处理路线明确未指定。仅识别真实产生废物，不能确立接收方相容性或回收产率。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_used_oil`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### 废弃石墨导电电极（`spent_electrode`）

以含水和污染的完整真实状态计量拆出制品，并明确剩余材料身份。其毛实物流出不得按服役或经济分配比例缩量。将转为粉尘或气体的实测侵蚀与拆出库存分别记录；不设固定寿命或每kg损失。 本具体物理身份的相容精确流UUID未解决; 不得替换为集合类别或冲突泛候选。

- 选定流：废弃石墨导电电极
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_spent_electrode`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### 废弃碳化硅耐火衬（`spent_sic`）

以含水和污染的完整真实状态计量拆出制品，并明确剩余材料身份。其毛实物流出不得按服役或经济分配比例缩量。将转为粉尘或气体的实测侵蚀与拆出库存分别记录；不设固定寿命或每kg损失。 本具体物理身份的相容精确流UUID未解决; 不得替换为集合类别或冲突泛候选。

- 选定流：废弃碳化硅耐火衬
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_spent_sic`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

###### 废弃铝硅质炉砖（`spent_brick`）

以含水和污染的完整真实状态计量拆出制品，并明确剩余材料身份。其毛实物流出不得按服役或经济分配比例缩量。将转为粉尘或气体的实测侵蚀与拆出库存分别记录；不设固定寿命或每kg损失。 本具体物理身份的相容精确流UUID未解决; 不得替换为集合类别或冲突泛候选。

- 选定流：废弃铝硅质耐火砖
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_spent_brick`
- 来源：`imerys-graphite-powder-patent-2015`; `jrc-ilcd-attributional-allocation-2010`

### 过程：已放行cohort包装及实际服务（`service`）

原cohort观测H内的真实包装、仓储/搬运/发运及获准放行后作业.

#### 输入

##### 产品流

###### 牛皮纸粉体袋（`paperbag`）

本相同合格物理制品的P/I/ER原始分账按packaging_receipt_basis分类；单独非采购接收归I，即使尚未使用而留在期末。保留本卡原有实物/负荷角色及分母。对应真实接收或保管事件发生时纳入这一种包装材料或供货制品，实际使用另记。分别记录外购P、随供应物进入I、外部退回接收ER，以及期初期末空置、附着WIP、附着FG和可复用库存。完整供货制品已包含的P或I只计一次并明确唯一上游负荷所有者。真实新增流入即使留在期末也保留；内部重复使用不是新增采购。 native产品为已制造纸袋，常用原生或再生纤维牛皮纸，可为开口或阀口。核对真实粉体供货袋结构及强度规范，不引入普遍袋尺寸、袋重或认证。真实单独供应内衬另作交换；整袋采购已含内衬时只有一个采购所有者并保留组分子账。

- 选定流：纸袋 `0a8faf13-9861-4805-bcee-a212c6dceb04`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_paperbag`
- 来源：`asbury-graphite-introduction-2026`; `jrc-ilcd-attributional-allocation-2010`

###### LDPE粉体袋内衬（`ldpe_liner`）

本相同合格物理制品的P/I/ER原始分账按packaging_receipt_basis分类；单独非采购接收归I，即使尚未使用而留在期末。保留本卡原有实物/负荷角色及分母。对应真实接收或保管事件发生时纳入这一种包装材料或供货制品，实际使用另记。分别记录外购P、随供应物进入I、外部退回接收ER，以及期初期末空置、附着WIP、附着FG和可复用库存。完整供货制品已包含的P或I只计一次并明确唯一上游负荷所有者。真实新增流入即使留在期末也保留；内部重复使用不是新增采购。 native产品是已制造低密度聚乙烯薄膜，以质量/kg为基准，未声明固定路线或地理。仅用于相容PE-LD膜；不得替换为聚乙烯树脂、HDPE或PET。核对真实添加剂、膜结构及是否已包含于整份供货袋。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_ldpe_liner`
- 来源：`asbury-graphite-introduction-2026`; `jrc-ilcd-attributional-allocation-2010`

###### 粉体发运木托盘（`wood_pallet`）

本相同合格物理制品的P/I/ER原始分账按packaging_receipt_basis分类；单独非采购接收归I，即使尚未使用而留在期末。保留本卡原有实物/负荷角色及分母。对应真实接收或保管事件发生时纳入这一种包装材料或供货制品，实际使用另记。分别记录外购P、随供应物进入I、外部退回接收ER，以及期初期末空置、附着WIP、附着FG和可复用库存。完整供货制品已包含的P或I只计一次并明确唯一上游负荷所有者。真实新增流入即使留在期末也保留；内部重复使用不是新增采购。 native产品为木材厂生产混合、以木板或木条制造的木质托盘，基准质量/kg。限定一个真实托盘配置、实测质量及湿态；不推定欧标尺寸、固定周转数、寿命或熏蒸认证。

- 选定流：木质托盘 `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wood_pallet`
- 来源：`asbury-graphite-introduction-2026`; `jrc-ilcd-attributional-allocation-2010`

###### 包装仓储发运用电（`service_power`）

保留原放行cohort在实际观测H内的服务增量用电。将每次服务事件关联原cohort的Qc，明确报告截止时已实施的操作。不得因粉体留库递延已完成服务；只有真实未用或未分配服务计费可结转。 native产品为中国CN电网平均、用户端1–35 kV交流电，以净热值能量属性和MJ为基准。只绑定实际相符供电接口；其他国家、电压或特定发电合同须另核验流与供方。保留原始kWh计量，并按量纲恒等式1 kWh = 3.6 MJ只换算一次；整流电不再加第二个供方，不将native能量计作kg。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_service_power`
- 来源：`asbury-graphite-introduction-2026`; `jrc-ilcd-attributional-allocation-2010`

###### 获准放行后粉体返工（`service_work`）

仅纳入有制造商或产品规范许可、返工后测试、验收及处置证据的真实再处理服务。使用前将工作中每种真实材料、能量和废物另列原子卡；此服务凭证不能掩盖这些实物流，也不赋予普遍可回收性。增量负荷留在原cohort，复测或退回粉体永不新增Q。 本具体物理身份的相容精确流UUID未解决; 不得替换为集合类别或冲突泛候选。

- 选定流：放行后人工石墨粉再处理服务
- 流属性/单位：件数 / item
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_service_work`
- 来源：`asbury-graphite-introduction-2026`; `jrc-ilcd-attributional-allocation-2010`

#### 输出

##### 产品流

###### 牛皮纸粉体袋对外腿（`paperbag_out`）

将随毛实物发运的本材料S与向外部所有者返回的材料EO分别保留。使用真实产品毛运动、包装状态及原所有者；这些实物质量不得按负荷份额或产品退回净额缩减。包装不进入粉体Q。 native产品为已制造纸袋，常用原生或再生纤维牛皮纸，可为开口或阀口。核对真实粉体供货袋结构及强度规范，不引入普遍袋尺寸、袋重或认证。真实单独供应内衬另作交换；整袋采购已含内衬时只有一个采购所有者并保留组分子账。

- 选定流：纸袋 `0a8faf13-9861-4805-bcee-a212c6dceb04`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_paperbag_out`
- 来源：`asbury-graphite-introduction-2026`; `jrc-ilcd-attributional-allocation-2010`

###### LDPE粉体袋内衬对外腿（`ldpe_liner_out`）

将随毛实物发运的本材料S与向外部所有者返回的材料EO分别保留。使用真实产品毛运动、包装状态及原所有者；这些实物质量不得按负荷份额或产品退回净额缩减。包装不进入粉体Q。 native产品是已制造低密度聚乙烯薄膜，以质量/kg为基准，未声明固定路线或地理。仅用于相容PE-LD膜；不得替换为聚乙烯树脂、HDPE或PET。核对真实添加剂、膜结构及是否已包含于整份供货袋。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_ldpe_liner_out`
- 来源：`asbury-graphite-introduction-2026`; `jrc-ilcd-attributional-allocation-2010`

###### 粉体发运木托盘对外腿（`wood_pallet_out`）

将随毛实物发运的本材料S与向外部所有者返回的材料EO分别保留。使用真实产品毛运动、包装状态及原所有者；这些实物质量不得按负荷份额或产品退回净额缩减。包装不进入粉体Q。 native产品为木材厂生产混合、以木板或木条制造的木质托盘，基准质量/kg。限定一个真实托盘配置、实测质量及湿态；不推定欧标尺寸、固定周转数、寿命或熏蒸认证。

- 选定流：木质托盘 `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wood_pallet_out`
- 来源：`asbury-graphite-introduction-2026`; `jrc-ilcd-attributional-allocation-2010`

##### 废物流

###### 牛皮纸粉体袋废弃（`paperbag_waste`）

记录完整真实废物腿W、残留物和湿态及真实接收处理。不向整份废物再加一遍已包含的残留物质量；组分保留为子账。废物出售不自动产生共产品或回收抵扣。 本具体物理身份的相容精确流UUID未解决; 不得替换为集合类别或冲突泛候选。

- 选定流：废弃牛皮纸粉体袋
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_paperbag_waste`
- 来源：`asbury-graphite-introduction-2026`; `jrc-ilcd-attributional-allocation-2010`

###### LDPE粉体袋内衬废弃（`ldpe_liner_waste`）

记录完整真实废物腿W、残留物和湿态及真实接收处理。不向整份废物再加一遍已包含的残留物质量；组分保留为子账。废物出售不自动产生共产品或回收抵扣。 本具体物理身份的相容精确流UUID未解决; 不得替换为集合类别或冲突泛候选。

- 选定流：废弃LDPE粉体袋内衬
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_ldpe_liner_waste`
- 来源：`asbury-graphite-introduction-2026`; `jrc-ilcd-attributional-allocation-2010`

###### 粉体发运木托盘废弃（`wood_pallet_waste`）

记录完整真实废物腿W、残留物和湿态及真实接收处理。不向整份废物再加一遍已包含的残留物质量；组分保留为子账。废物出售不自动产生共产品或回收抵扣。 本具体物理身份的相容精确流UUID未解决; 不得替换为集合类别或冲突泛候选。

- 选定流：废弃粉体发运木托盘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节本交换及原cohort唯一归一化结果; 不再相除。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wood_pallet_waste`
- 来源：`asbury-graphite-introduction-2026`; `jrc-ilcd-attributional-allocation-2010`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_scope | multifunctional attributional processes | 只在确有未解决多功能性的归因情景使用此层次。先专属归属并实施真实或虚拟过程细分。再对每项剩余交换论证其与真实共功能之间决定性的物理因果关系。不预设所有交换共用一个物理份额。 | jrc-ilcd-attributional-allocation-2010 |
| a_residual | remaining common-process burden | 只有经过前述因果步骤仍真实剩余的共同过程负荷，才使用真实分离门和状态下的同期市场价值。记录数量、价格及后续整理/包装/运输的调整。价格缺失不等于零；披露敏感性。不提供固定分配比例或自动替代抵扣。 | jrc-ilcd-attributional-allocation-2010 |
| a_discard | losses and recovered filler | 普通失败粉、样品、粉尘及废炉填料即使外送或出售仍保留制造和处理负荷。只有有记录的真实其他cohort/功能且具有正当分配/移交决定时，才转移一次负荷向量。内部回收填料携带实测继承向量，复用时不抵扣也不再次采购。不论负荷所有权如何，毛实物转移始终完整保留。 | jrc-ilcd-attributional-allocation-2010 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_coke_feed | manufacture | coke_feed | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_conductive_fill | manufacture | conductive_fill | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_insulation_coke | manufacture | insulation_coke | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_process_power | manufacture | process_power | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 读取真实电能表; 保留原kWh并核对计量边界后仅作一次kWh到MJ量纲换算。 | MJ | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_control_power | manufacture | control_power | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 读取真实电能表; 保留原kWh并核对计量边界后仅作一次kWh到MJ量纲换算。 | MJ | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_cooling_makeup | manufacture | cooling_makeup | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_cleaning_water | manufacture | cleaning_water | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_air_oxygen | manufacture | air_oxygen | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_air_nitrogen | manufacture | air_nitrogen | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_air_argon | manufacture | air_argon | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_air_co2 | manufacture | air_co2 | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_air_vapour | manufacture | air_vapour | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_released_powder | manufacture | released_powder | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 用经校准的秤称量首次放行整份粉体，排除可拆包装; 匹配唯一批次放行、真实等级、水分、相态测试和配置范围。保留全部失败运行及已放行期末FG。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_external_fill | manufacture | external_fill | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_external_insulation | manufacture | external_insulation | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_cooling_return | manufacture | cooling_return | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_coke_waste | manufacture | coke_waste | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_powder_waste | manufacture | powder_waste | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_captured_dust | manufacture | captured_dust | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_spent_insulation | manufacture | spent_insulation | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_process_wastewater | manufacture | process_wastewater | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_fossil_co2 | manufacture | fossil_co2 | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_fossil_co | manufacture | fossil_co | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_sulfur_dioxide | manufacture | sulfur_dioxide | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_nitric_oxide | manufacture | nitric_oxide | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_nitrogen_dioxide | manufacture | nitrogen_dioxide | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_fossil_methane | manufacture | fossil_methane | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_oxygen_out | manufacture | oxygen_out | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_nitrogen_out | manufacture | nitrogen_out | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_argon_out | manufacture | argon_out | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_vapour_out | manufacture | vapour_out | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_graphite_air | manufacture | graphite_air | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_ambient_co2_out | manufacture | ambient_co2_out | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_furnace_service | support | furnace_service | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_electrode_service | support | electrode_service | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_sic_liner | support | sic_liner | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_aluminosilicate_brick | support | aluminosilicate_brick | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_lubricant | support | lubricant | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_used_oil | support | used_oil | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_spent_electrode | support | spent_electrode | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_spent_sic | support | spent_sic | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_spent_brick | support | spent_brick | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_paperbag | service | paperbag | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H ；包装接收来源；付费/非采购依据；所有者/保管者；同件原外发ID | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。  仅对包装按packaging_receipt_basis分类，单独非采购接收归I，不得虚构ER或X。| kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_paperbag_out | service | paperbag_out | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_paperbag_waste | service | paperbag_waste | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_ldpe_liner | service | ldpe_liner | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H ；包装接收来源；付费/非采购依据；所有者/保管者；同件原外发ID | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。  仅对包装按packaging_receipt_basis分类，单独非采购接收归I，不得虚构ER或X。| kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_ldpe_liner_out | service | ldpe_liner_out | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_ldpe_liner_waste | service | ldpe_liner_waste | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_wood_pallet | service | wood_pallet | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H ；包装接收来源；付费/非采购依据；所有者/保管者；同件原外发ID | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。  仅对包装按packaging_receipt_basis分类，单独非采购接收归I，不得虚构ER或X。| kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_wood_pallet_out | service | wood_pallet_out | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_wood_pallet_waste | service | wood_pallet_waste | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | kg | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_service_power | service | service_power | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 读取真实电能表; 保留原kWh并核对计量边界后仅作一次kWh到MJ量纲换算。 | MJ | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_service_work | service | service_work | foreground_record | cohort ID; 事件时间; 原读数及单位; 总量或速率标识; 区间; 净毛及干湿基准; 真实组分与相态; 期初期末库存; 毛收发腿; 上游所有者; 继承交换向量; 归属证据; 原Qc及H | 通过经校准称量/仪表、真实组分/相态检验，采集本物理交换未相除的原始测量、收发及库存记录。保留总量与速率、湿干基和随供货所有权。服务保留原cohort及实际观测期; 当期服务与完整毛资产/材料腿分别量化。 | item | 逐事件或连续计量 | 包括失败/零产出及启停/待机/清理/返工的完整报告期和真实H | 明确场址、操作、真实对外接口及原cohort | 每参考流 | 原始日志; 校准; 采样; 供方/接收记录; 放行测试; 不确定性及相容性证据 |
| cp_release | manufacture | cohort first release and FG bridge | foreground_record | 唯一首次放行ID; 验收整份净粉质量; 真实等级/相态/水分; 拒绝及样品质量; Q; 期初期末FG; 毛G和R; 真实X_in和X_out; 返工许可及作业后测试; 原cohort Qc; H | 核对经校准首次放行称量、唯一批次验收及完整FG运动; 发运或退回不作新产量。 | kg | 逐放行及实物运动 | 完整cohort及观测H | manufacture and service | 保留未相除原始放行记录; 只有calc_normalize归一化。 | 放行/质量账; 湿质量及实物运动核对 |
| cp_vectors | support | gross stocks and inheritance and services | foreground_record | 每流历史向量; 原料/WIP/未分配库存期初期末; 完整湿态资产及新旧维修/液体库存; 包装P I ER S EO W及期初期末附着; 唯一上游所有者; 当期服务证据; Qc; H; 真实Tother决定 | 独立闭合实物门和负荷门; 真实新增量即使留在期末也保留。原资产向量与真实服役分别记录; 毛实物腿不得按负荷份额缩减。 | native extensive unit | 逐事件及报告期期初期末 | 完整报告期及真实服务H | all actual gates | 保留未相除实物腿和历史向量; 仅在calc_normalize归一化。 | 配对转移及盘点; 真实服务及正当分配/移交记录 |

每参考流聚合标签仅说明目标报告基准。协议只采原始未相除值; 换算及归属先于唯一calc_normalize操作。不把未来未知数量描述为实测通过。

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_raw | all inventory rows | 将原始读数换为各行native广延单位；累计体积只用一次，仅真实速率积分。整份制剂及随供应进入包装的所有权只确定一次。先专属归属再用逐交换决定性物理因果关系，之后才处理残余分配。保留未除原始活动I_e、服务增量S_e及全部实物毛腿g_e。不得再校正已作库存校正的消耗。 | raw observations; cp_vectors; cp_release | I_e; S_e; g_e; Q | jrc-ilcd-attributional-allocation-2010 |
| calc_burden | all inventory rows | 制造使用A_e = I_e + Bopen_e - Bclose_e - Tother_e，仅限I_e尚未校正库存时；否则用有记录的等价形式而不二次校正。Bopen/Bclose包括原料/WIP及真实未分配库存；Bclose排除已放行FG。Tother仅为有正当决定的真实其他cohort/功能的一次转移，不自动扣普通损失或出售。资产当期服务来自继承资产向量和实际服役归属，与完整资产实物质量分开。放行后A_e使用真实原cohort服务S_e及继承未分配计费，只扣真实未用/未分配期末计费或正当转移；不得因FG留库扣除已完成服务。 | I_e; S_e; Bopen_e; Bclose_e; Tother_e; cp_vectors | A_e | jrc-ilcd-attributional-allocation-2010 |
| calc_physical | all physical gates | 按b_physical和b_pack逐制造、FG/服务及合并门独立核对毛湿态库存及真实输入输出。仅合并门时抵消内部首次放行Q及配对内部回收。真实新增维修/水流入与完整湿态期末库存同时保留。独立检查质量、相关元素及每种真实物种；余额不能指定多个缺失气体或反应水。 | g_e; opening wet stocks; closing wet stocks; cp_vectors | physical gate balances; element balances | imerys-graphite-powder-patent-2015; jrc-ilcd-attributional-allocation-2010 |
| calc_normalize | all inventory rows | 当Qc>0时，仅执行一次q_e = A_e / Qc。制造Qc为原cohort首次放行Q；已观测放行后服务仍使用该原cohort Q并声明H。Qc=0保留真实负荷和继承实物记录，但不产生单位结果。卡片及协议聚合仅引用此结果，不再相除。参考输出为1千克整份未涂碳粉体。 | A_e; Qc; H; cp_release; cp_vectors | q_e | jrc-ilcd-attributional-allocation-2010 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | 将整份供货状态、真实人工路线、每项native限制与实际供方一并核对。相容宽泛制造粉体不证明具体等级或工厂。辅料UUID未解或数量未知须明示；不得编造观察值。 | 供货和路线历史; native记录; 等级及相态检测 |
| dq_measure | all inventory rows | 保留原单位、总量/速率标识、计量边界、校准及采样不确定性。质量/kg不统辖电力MJ或独立实测流体体积。目录密度或专利表格因子不能替代当前场址测量。 | 原始日志与校准; 实际流体状态及实验报告 |
| dq_cohort | release and stocks and services | 保留唯一放行事件及失败、WIP和已放行FG的逐流继承向量；保留原服务cohort及H。采集阶段不归一化数量。 | 放行账; 配对实物转移; 服务记录 |
| dq_complete | manufacture and support and service | 每种真实化学品/燃料/水/包装/废物/物种及维修/资产腿有自身身份和所有者。将有证据缺席与未知区分。宣称数据集完整前须补齐全部真实遗漏交换。 | 现场核查; 供货平衡; 排放物种分析; 接收方证据 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_scope | reference product | 确认真实焦转化及未涂碳粉体半制品门；拒绝天然开采石墨、纯再包装路线、成品电极及不相容native形态。必须声明整份质量和真实微量相/水分。 | imerys-graphite-powder-patent-2015; asbury-synthetic-graphite-2006; asbury-graphite-introduction-2026 |
| v_identity | all inventory rows | 对全部native名称/同义词/备注/CAS、等级/路线/形态/地理/媒体/类型及全部属性核对所选流。使用精确基准属性到单位组再到基准单位链。未指定空气区室不得掩盖已知具体区室。拒绝硬冲突，不能用CAS或分类豁免。 | imerys-graphite-powder-patent-2015 |
| v_quantity | release and all inventory rows | 以包括期末FG的唯一首次放行整份净质量核实Q；所有输入输出及协议使用同一声明参考基准。原始采集不相除。核对仅一次calc_normalize、原Qc及实际H；Q0没有单位结果。有限关系检查不能确立场址实测值或物理合理性。 | jrc-ilcd-attributional-allocation-2010 |
| v_balance | all physical and burden gates | 逐制造、FG/服务及合并门闭合完整湿质量及独立相关元素/物种平衡。核对包装六腿、随供货所有者及完整资产/维修/液体实物存量。留在期末的真实新增流入仍保留。负荷份额不缩毛质量，普通废弃/出售不自动产生Tother。不支持或数量未知关系仍未决。 | imerys-graphite-powder-patent-2015; jrc-ilcd-attributional-allocation-2010 |
| v_work | post-release rework | 要求真实制造商/规范许可、作业后测试/验收/处置及原cohort可追溯性；不推断所有不合格粉或破损资产均可恢复。补齐全部真实增量实物交换并保留处理负荷。 | jrc-ilcd-attributional-allocation-2010 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 作为工业用粉过程输入，前提为质量及门独立相容 |
| allowed_use | 声明焦基未涂碳粉路线及真实地理/年份/供方和实测整份产品基准 |
| excluded_use | 泛天然石墨、涂碳电池粉或电极/制品; 法规认证; 炉操作指令; 未经审查代理未解身份 |
| required_metadata | 整份未涂碳人工石墨粉及真实石墨相微量相灰分和水分; 可石墨化煅烧石油焦来源及上游炼油焦化煅烧完整覆盖; 真实无粘结剂颗粒艾奇逊批式路线及装料分离和填料回收; 无天然开采路线无沥青成形无有意表面涂碳无催化掺杂且无成品电极功能; 真实前粉碎后粉碎分级除尘操作及全部损失; 场址报告期供货地理及实际电力电压和供方; 整份粉体首次放行净质量Q唯一放行ID实际水分及声明产品等级; 参考量包括期末已放行FG并排除可拆包装及重复复检; 逐流期初期末原料WIP及未分配库存继承负荷向量; 包装仓储发运及获准返工的原放行cohort Qc与实际服务观测H; 按相态来源及接收区室区分的完整分子物种毛流及独立质量元素平衡; 每种包装P I ER S EO W腿和空置附着WIP附着FG可复用库存及唯一上游所有者; 完整在装资产新旧维修件及真实液体的实测实物质量和单独当期服役负荷; 制造商或规范返工许可及返工后测试验收和处置; 每张采用卡的native限制真实相容供方及全部未解决数据披露 |
| required_quality_disclosure | 真实primary观察与技术综合区分; 每项native限制及未知; 唯一Q归一化; 全部实物/负荷平衡; 原cohort服务H; 分配敏感性; 未审查范围 |
| update_trigger | 焦历史、粘结/涂碳/添加剂路线、粉体门、等级/相态/水分、供方/电压/地理、服务/库存/分配实践或source/native身份变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-structure-2025 | official_guidance | UN Statistics Division. CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 仅确定37950与37990非电制品及46950电用制品的分类边界; 不自动建立mapping或整叶覆盖 |
| imerys-graphite-powder-patent-2015 | literature | Rota et al. US9102539B2, Process for the production and treatment of graphite powders, 11 August 2015. https://patents.google.com/patent/US9102539B2/en | 颗粒焦转化及石墨填料分离的primary技术路线; 图3–7与例1–3保留替代配置及已石墨化原料反例; 不采用示例数量或操作设定 |
| asbury-synthetic-graphite-2006 | handbook | Asbury Graphite Mills, A. V. Tamashausky. An Introduction to Synthetic Graphite, 2006, pp. 3–12. https://www.asbury.com/wp-content/uploads/An-Introduction-to-Synthetic-Graphite.pdf | 人工与天然路线及煅后焦上游历史; 电极混合/成形/焙烧/浸渍示例为不同路线，不构成通用粉体配方 |
| asbury-graphite-introduction-2026 | handbook | Asbury Advanced Materials. Graphite 101: Introduction, 1 January 2026. https://www.asbury.com/resources/graphite-101-introduction/ | 制造商关于天然/人工区别及工业石墨粉粉碎/粒度分级的定性证据; 不推定特定供货等级或当前工厂清单 |
| jrc-ilcd-attributional-allocation-2010 | official_guidance | European Commission JRC. ILCD Handbook, General guide for Life Cycle Assessment — Detailed guidance, first edition March 2010, sections 7.9.2–7.9.3, especially PDF pp. 275–288. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 仅限需要分配的归因情形: 细分/虚拟细分及逐交换决定性物理因果关系之后，才用真实门状态的剩余市场价值; 不支持工业操作因子 |
