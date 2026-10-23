---
pcr_id: pcr.chemicals.pharmaceutical-ingredients.mupirocin-calcium-dihydrate-aqueous-carbonate
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 水中非均相碳酸盐法莫匹罗星钙二水合物生产与交付

## 1. 范围与适用性

适用于指定的散装结晶二水合钙盐及上述水中非均相成盐路线。外购游离酸的发酵、提取与纯化以完整上游数据衔接；若在场内实施则展开真实过程，不能消失。异质的 CPC 35250 产品不共用参考。相同分子因用途变化不再建方法。专利与药典分别支持真实路线及物理身份；所有厂级数量由实际记录确定。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.chemicals.pharmaceutical-ingredients.mupirocin-calcium-dihydrate-aqueous-carbonate |
| classification_refs | CPC 3.0 35250：仅为抗生素钙盐的较窄语义范围，不据此产生已接受映射。 |
| covered_products | 由发酵来源固体莫匹罗星游离酸与固体碳酸钙在水中非均相反应，经分离、洗涤、干燥，在声明的工厂发运门交付的散装结晶莫匹罗星钙二水合物。 |
| excluded_products | 其他维生素、激素、糖苷、生物碱或抗生素；作为终产品的莫匹罗星游离酸；钠盐或锂盐；无水或无定形钙盐；成品软膏与乳膏；共溶剂、有机羧酸钙或氧化钙转制路线。 |
| representative_product | 莫匹罗星钙二水合物，CAS 115074-43-6，C52H86CaO18·2H2O；声明单一放行规格、结晶性、颗粒形态及供货水分。 |
| production_route | 带完整上游负荷的外购发酵来源游离酸 → 水中非均相碳酸盐成盐 → 分离洗涤 → 保留水合态的干燥放行 → 包装、库存与工厂净发运。 |
| market_state | 散装原料药盐，不是药物制剂、剂量单位、效价当量或治疗服务。必须声明实际地理与供应方；不能从通用参考身份推定。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供下游制造使用的一种指定结晶抗生素钙盐二水合物原料。 |
| How much | 工厂实际发运交接处净供货产品 1 千克。 |
| How well | 同一声明的二水合形态、含量基准、杂质、粒度规格、水分与放行验收条件；不声称临床等效。 |
| How long or cycle | 覆盖实际发运的完整声明报告期间及匹配批群，包括跨期库存结转负荷。 |
| reference_flow_link | delivered_salt |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 莫匹罗星钙 `104a2107-4bc8-4a1b-8267-3ff0ff7614a1` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | CAS 与分子式; 二水合结晶性及颗粒形态; 供货含量及其分析基准; 结构水与游离水及杂质; 实际路线与起始物来源; 实际场址地理及供应方; 完整报告期间与批群; 签认净交付 Q 与唯一批次及退回历史; 放行 R 与成品库存核对; 在制品及成品期初末结转负荷; 实际包装及仓储发运边界 |

必需限定信息须保存在数据包元数据、过程说明、参考流备注或等效字段；缺失即不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| net_delivery | reference_product | Mass | kg | Q 为实际验收净发运盐质量，不含包装及散装游离液。保留结晶水和规格许可水分；效价、无水质量、纯游离酸当量与剂量只作单独说明子账，不得替代 Q。 |
| period_matching | all inventory rows | Declared numerator property | Declared row unit | 保留未归一的完整原始期间分子及继承负荷。按唯一归一化规则将每项分配分子只报告一次为每 1 千克参考流；内部交接与退回不产生另一分母。 |
| physical_units | all inventory rows | Mass or Energy | kg or MJ | 原始千瓦时按 3.6 MJ/kWh 换成兆焦。体积换质量须有声明温度、组成与压力下独立实测密度。速率按实测时间只积分一次；已积分体积不再乘时长。 |
| hydrate_species | carbonate_co2, water_vapour | Mass and molar amount | kg and mol | 将物理质量与元素闭合同独立约束的反应进度、水相物种、生成水、结晶水、蒸发及凝结水分开。未知出口与未知反应水不能同时由一个残差拟合。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 成盐厂收到的有据可查发酵来源分离固体莫匹罗星游离酸、碳酸钙试剂及公用工程；期初成品另行结转，不计新增生产。 |
| starting_condition_role | 明确的外购前体接口，并不允许从摇篮至发运结果中遗漏发酵、提取或纯化。 |
| product_classification_scope | 仅限 CPC 35250 中指定抗生素钙盐二水合物子集。 |
| recursive_input_rule | 每项外购投入都要求路线、状态及品级兼容的从摇篮至接收数据集。若前体在场内制造或供应方覆盖不足，应展开实际种子培养、发酵、回收与纯化过程，逐项记录原子交换并核对内部交接。 |
| upstream_dataset_requirement | 整份商业供货前体、试剂及包装数量，带实际组成、地理与技术；不得使用零负荷前体，或把盐的负荷当作游离酸负荷。 |
| disclosure | 纳入实际接收、反应、分离、洗涤、干燥、清洗、质量控制份额、返工、废物处理、包装、仓储停留、搬运及至签认工厂交接的发运。此门之外的下游运输、制剂加工、患者使用及报废不在本声明边界内；另增服务须单独披露记录。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_route | salt, finish | 使用所述水中非均相、无共溶剂碳酸盐路线；核实最终水合态，不把其他溶剂路线或无定形盐视为等同。专利证明一条路线，并非通用操作配方或品级保证。 | `pliva-2009-carbonate-route` |
| b_complete | all processes | 保留每项实际投入、排放及处理。数据使用前将新增化学品、每种燃料、清洗剂、制冷剂及实际废物流逐一拆卡。工艺蒸汽卡只表示热交付；若蒸汽实际接触并进入物料平衡，另记物理蒸汽水。 |  |
| b_stocks | all processes | R 只记录新增合格放行质量。R 与仓库接收匹配，合并时抵消内部盐及滤饼边；不得将期末成品库存加到 R。Q 只记录实际交付，须带完整在制品及成品期初末库存和继承负荷。未交付库存不计 Q，其仓储负荷仍须按声明库存账保留并分配。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| salt | 成盐反应与初分离 | required | 声明的水中非均相路线 | foreground | 湿滤饼交接及其组分 |
| finish | 洗涤干燥及质量放行 | required | 保持二水合态 | foreground | 新增放行 R，不是 Q |
| dispatch | 仓储包装搬运与净发运 | required | 到签认工厂交接处 | foreground | delivered_salt: 1 千克 |

### 过程：成盐反应与初分离（`salt`）

#### 输入

##### 产品流

###### 发酵来源莫匹罗星游离酸（`free_acid`）

记录整份收到的固体批次及其水分、含量和杂质子账。要求实际假单胞菌发酵、回收和纯化背景；不得用钙盐或整份药物乳膏替代。

- 选定流：莫匹罗星游离酸固体
- 流属性/单位：Mass / kg
- 数量规则：同批群原始记录分配后的一次最终报告数量，按第 8 节执行。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_salt_records`
- 来源：`pliva-2009-carbonate-route`

###### 碳酸钙试剂（`carbonate`）

计量试剂品级、整份质量及碳酸钙含量。过量固体碳酸盐是实际库存或出口，不能据此断言全部采购碳酸盐都释放了二氧化碳。

- 选定流：碳酸钙固体试剂
- 流属性/单位：Mass / kg
- 数量规则：同批群原始记录分配后的一次最终报告数量，按第 8 节执行。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_salt_records`
- 来源：`pliva-2009-carbonate-route`

###### 反应用水（`reaction_water`）

计量送入非均相反应器的新鲜水。已购湿原料所含的分析水分属于子账，不再重复采购水。

- 选定流：去离子水 `5b3acbab-2518-4406-8736-d21f222d757a`
- 流属性/单位：Mass / kg
- 数量规则：同批群原始记录分配后的一次最终报告数量，按第 8 节执行。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_salt_records`
- 来源：`pliva-2009-carbonate-route`

###### 反应及真空用电（`salt_electricity`）

计量搅拌、泵送、真空及实际温控用电；保留本批群应承担的待机、失败及零产出运行。

- 选定流：电网交流电
- 流属性/单位：Energy / MJ
- 数量规则：同批群原始记录分配后的一次最终报告数量，按第 8 节执行。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_salt_records`
- 来源：`pliva-2009-carbonate-route`

#### 输出

##### 产品流

###### 湿晶滤饼交接（`wet_cake_out`）

称量含夹带母液的整份内部湿滤饼，分别分析盐与游离水。与 wet_cake_in 核对，在合并清单中抵消内部交接。

- 选定流：莫匹罗星钙二水合物湿滤饼
- 流属性/单位：Mass / kg
- 数量规则：同批群原始记录分配后的一次最终报告数量，按第 8 节执行。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_salt_records`
- 来源：`pliva-2009-carbonate-route`

##### 废物流

###### 分离反应母液（`mother_liquor`）

这是送往有据可查处理的一股实际分流母液，保留悬浮碳酸盐、溶解原料药及实测物种。内部循环不重复记为采购或外排废物。

- 选定流：含莫匹罗星与碳酸盐的水性母液
- 流属性/单位：Mass / kg
- 数量规则：同批群原始记录分配后的一次最终报告数量，按第 8 节执行。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_salt_records`
- 来源：`pliva-2009-carbonate-route`

##### 基本流

###### 进入大气的碳酸盐来源二氧化碳（`carbonate_co2`）

采用独立确定的反应进度及实测排气去向。区分溶解碳酸盐、溶解二氧化碳、捕集及实际大气释放；披露碳来源，不默认化石或生物源系数。

- 选定流：排入大气的二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：同批群原始记录分配后的一次最终报告数量，按第 8 节执行。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species_records`
- 来源：`pliva-2009-carbonate-route`

### 过程：洗涤干燥及质量放行（`finish`）

#### 输入

##### 产品流

###### 湿晶滤饼接收（`wet_cake_in`）

接收完全匹配的内部湿滤饼及其结转负荷；这不是新采购的原料药。

- 选定流：莫匹罗星钙二水合物湿滤饼
- 流属性/单位：Mass / kg
- 数量规则：同批群原始记录分配后的一次最终报告数量，按第 8 节执行。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finish_records`
- 来源：`pliva-2009-carbonate-route`

###### 晶体洗涤水（`wash_water`）

在原始字段中分别计量新鲜洗涤水和设备漂洗水，不能假定反应水等于洗涤水用量。

- 选定流：去离子水 `5b3acbab-2518-4406-8736-d21f222d757a`
- 流属性/单位：Mass / kg
- 数量规则：同批群原始记录分配后的一次最终报告数量，按第 8 节执行。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finish_records`
- 来源：`pliva-2009-carbonate-route`

###### 分离与干燥用电（`finish_electricity`）

纳入离心、过滤、流化床风机、空气调节及实际干燥用电，包括不合格和返工批次。

- 选定流：电网交流电
- 流属性/单位：Energy / MJ
- 数量规则：同批群原始记录分配后的一次最终报告数量，按第 8 节执行。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finish_records`
- 来源：`pliva-2009-carbonate-route`

###### 外购蒸汽热（`steam_heat`）

仅在实际使用时纳入。由蒸汽与凝结水的焓及流量计量交付热量。若为场内锅炉，应改为逐项记录真实燃料、水与排放，不重复计算外购热。

- 选定流：送至干燥器的工艺蒸汽热
- 流属性/单位：Energy / MJ
- 数量规则：同批群原始记录分配后的一次最终报告数量，按第 8 节执行。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finish_records`
- 来源：`pliva-2009-carbonate-route`

#### 输出

##### 产品流

###### 新放行散装盐交接（`released_salt`）

受控干燥和质量放行后，只记录一次新增合格散装二水合盐质量 R；保留的结晶水属于产品。这是向发运环节的内部交接，不是交付 Q；不得再将同批群期末成品库存加到 R。

- 选定流：莫匹罗星钙 `104a2107-4bc8-4a1b-8267-3ff0ff7614a1`
- 流属性/单位：Mass / kg
- 数量规则：同批群原始记录分配后的一次最终报告数量，按第 8 节执行。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finish_records`
- 来源：`pliva-2009-carbonate-route`

##### 废物流

###### 分离洗涤液（`wash_liquor`）

记录送至其处理终点的实际整份洗涤废液及实测原料药与碳酸盐物种。纳入清洗负荷；废水体积及 COD 不能确定分子物种。

- 选定流：含莫匹罗星的水性晶体洗涤液
- 流属性/单位：Mass / kg
- 数量规则：同批群原始记录分配后的一次最终报告数量，按第 8 节执行。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finish_records`
- 来源：`pliva-2009-carbonate-route`

###### 废弃不合格盐（`offspec_salt`）

只记录实际废弃固体。回收或返工盐应作为带继承负荷的内部物料，不得计为第二次新增生产批次。

- 选定流：不合格莫匹罗星钙二水合物固体
- 流属性/单位：Mass / kg
- 数量规则：同批群原始记录分配后的一次最终报告数量，按第 8 节执行。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finish_records`
- 来源：`pliva-2009-carbonate-route`

##### 基本流

###### 进入大气的干燥水（`water_vapour`）

独立确定游离水脱除、凝结回收及实际排入大气的水。脱去结晶水会改变产品状态；只有重新形成二水合物并检验后才满足本参考。

- 选定流：排入大气的水蒸气
- 流属性/单位：Mass / kg
- 数量规则：同批群原始记录分配后的一次最终报告数量，按第 8 节执行。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species_records`
- 来源：`pliva-2009-carbonate-route`

### 过程：仓储包装搬运与净发运（`dispatch`）

#### 输入

##### 产品流

###### 仓库接收放行盐（`warehouse_receipt`）

按批次和质量与 released_salt 匹配，另保留期初库存及负荷。合并时抵消接收与放行内部边，保留交付所承担的全部生产负荷。

- 选定流：莫匹罗星钙 `104a2107-4bc8-4a1b-8267-3ff0ff7614a1`
- 流属性/单位：Mass / kg
- 数量规则：同批群原始记录分配后的一次最终报告数量，按第 8 节执行。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_dispatch_records`
- 来源：

###### 聚乙烯产品内袋（`liner`）

使用时记录实际整只袋及其制造背景。包装皮重不计入 Q；更换和损坏袋的负荷保留。

- 选定流：聚乙烯内衬袋
- 流属性/单位：Mass / kg
- 数量规则：同批群原始记录分配后的一次最终报告数量，按第 8 节执行。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_dispatch_records`
- 来源：

###### 纤维运输桶（`drum`）

记录实际指定整只桶，附件只计一次。这是有条件的包装选项，并非通用桶尺寸或材料的证据。

- 选定流：纤维板运输桶
- 流属性/单位：Mass / kg
- 数量规则：同批群原始记录分配后的一次最终报告数量，按第 8 节执行。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_dispatch_records`
- 来源：

###### 木质发运托盘（`pallet`）

使用时保留真实复用趟次、维修、回收与更换分配，不假定托盘质量或复用次数。

- 选定流：木质运输托盘
- 流属性/单位：Mass / kg
- 数量规则：同批群原始记录分配后的一次最终报告数量，按第 8 节执行。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_dispatch_records`
- 来源：

###### 仓储包装搬运与发运用电（`warehouse_electricity`）

计量实际仓库环境控制、包装及电动搬运用电，包括库存停留和退回；附实测停留时间分配及期初末负荷账。

- 选定流：电网交流电
- 流属性/单位：Energy / MJ
- 数量规则：同批群原始记录分配后的一次最终报告数量，按第 8 节执行。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_dispatch_records`
- 来源：

#### 输出

##### 产品流

###### 实际净交付二水合原料药（`delivered_salt`）

唯一终端产品输出是指定工厂发运交接处验收的净供货二水合盐，不含包装。

- 选定流：莫匹罗星钙 `104a2107-4bc8-4a1b-8267-3ff0ff7614a1`
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_dispatch_records`
- 来源：

##### 废物流

###### 仓库废弃盐（`warehouse_api_discard`）

记录实际损坏、过期或最终拒收而送去销毁的原料药及销毁负荷。回库或返工仍是带原有负荷的内部物料。

- 选定流：废弃莫匹罗星钙二水合物固体
- 流属性/单位：Mass / kg
- 数量规则：同批群原始记录分配后的一次最终报告数量，按第 8 节执行。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_dispatch_records`
- 来源：

###### 废弃聚乙烯内袋（`liner_scrap`）

记录送处理的实际分流内袋废物；残留原料药污染作为组分分析，不重复计废物质量。

- 选定流：聚乙烯内袋废物
- 流属性/单位：Mass / kg
- 数量规则：同批群原始记录分配后的一次最终报告数量，按第 8 节执行。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_dispatch_records`
- 来源：

###### 废弃纤维桶（`drum_scrap`）

记录实际分流桶废物及去向。回收复用桶保留在资产账中，不重复记为新采购。

- 选定流：纤维板桶废物
- 流属性/单位：Mass / kg
- 数量规则：同批群原始记录分配后的一次最终报告数量，按第 8 节执行。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_dispatch_records`
- 来源：

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_subdivide | all processes | 先拆分有计量的产品专属负荷，再按有据可查的物理驱动因素分配共用公用工程。本产品批群的失败、零产出运行、待机、返工及不可逆损失均保留；不默认按效价或药品售价分配。 | jrc-ilcd-2010-allocation |
| a_returns | dispatch | 逐项将退回实物与原验收记录对应。若原交付已计量，后续再验收前必须冲回或重述原 Q 及结转负荷；复验、重包装及返工增加实际负荷，但不形成第二次生产或重复交付。披露跨期修正。 |  |
| a_no_credit | mother_liquor, offspec_salt, warehouse_api_discard | 循环母液及返工盐在内部保留已有负荷。回收不获避免生产信用，不将拒收药物视为共产品，不假定处理去除率。真实可售共产品须另验身份、产率并披露分配；二氧化碳排气不是这种产品。 |  |

## 8. 前景数据采集、计算与质量规则

以下 aggregation_rule 只标识同一次报告的最终基准，不是采集端计算。每位 owner 仅保存未除的原始期间分子、换算依据和完整负荷结转；先核对第 8 节库存分配，再由 normalize_delivery 唯一执行 A_i/Q。卡片和聚合标签不会再相除。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_salt_records | salt | 前体反应分离 | 供应收货与批记录 | 批次；供应方；来源路线；品级；收货及消耗千克；含量；水分；库存变化；反应批次时长；新鲜及循环水；千瓦时；湿滤饼千克；整份母液千克；物种分析；失败及零产出运行 | 成盐操作与采购保管人为 owner。对含清洗及失败在内的完整期间采集经校准称量、仪表与供应记录；保留整份购入湿供货及组分子账，不重复采购。仅保留原始分子及库存变化。 | kg; kWh | 每次收货及每批 | 含失败运行的完整报告期间 | 声明的成盐场址及供应链 | 每 1 kg 参考流 | 称量单、校准、分析证书、批账及供应路线覆盖 |
| cp_finish_records | finish | 分离洗涤干燥放行 | 批次与质量记录 | 湿滤饼接收千克；洗涤与漂洗千克；废液千克；千瓦时；蒸汽千克及焓；凝结水；拒收千克；回收千克；R 千克；水分结果及方法；结晶性；颗粒形态；放行签名 | 分离操作、公用工程工程师及质量放行人为 owner。核对完整期间的滤饼交接、实际洗涤干燥清洗及经检验放行质量 R。保留原始分子、失败返工历史及继承在制品负荷；采集端不除以 Q。 | kg; kWh; MJ | 每批及每次放行 | 同一完整期间及可追溯在制品结转 | 声明的分离干燥场址 | 每 1 kg 参考流 | 交接单、仪表、分析证书、水合态身份及质量决定 |
| cp_dispatch_records | dispatch | 成品库存包装及 Q | 仓库与发运记录 | 期初及期末成品千克与结转负荷向量；R 接收；净发运千克；承运人签名；拒收交付千克；带原批次 id 的退回及再验收数量；包装皮重；每项包装材料千克；千瓦时；停留时长；销毁质量及处理 | 仓库发运保管人与质量人为 owner。独立于包装称量净产品，按唯一批次和数量核对签认验收交接及退回；连同内部返工移动核对期初＋新放行＋退回＝发运＋销毁＋期末。仅采集原始包装、仓储、搬运及发运负荷和库存负荷向量；未解决的既往交付修正须在确定 Q 前重述。 | kg; kWh; hours | 每次移动及期末 | 同一报告期间及期初库存来源 | 声明的工厂交接处及实际仓库 | 每 1 kg 参考流 | 库存卡、皮重记录、签认交接、退回链及包装物料清单 |
| cp_species_records | salt | 质量元素水及物种 | 分析与排气记录 | 各整份物流质量；碳氢氧钙分析；前体及碳酸盐含量；反应进度；未反应碳酸盐；溶解无机碳；水相原料药；气体流量及时长或积分体积；压力温度及水基准；二氧化碳浓度；水蒸气；凝结水；结构水及游离水 | 分析实验室与环境工程师为 owner。独立测量物流质量、水气相物种及反应进度；分子式计量只作有限一致性关系，不用于拟合出口。保留无需再乘时间的原始积分体积，并在需要积分时保留原始速率日志。不从 COD 推断水或原料药物种。 | kg; mol; m3; hours | 每批及经核实代表性排气测试 | 同一完整期间及分析覆盖 | 反应排气、干燥出口及真实处理接口 | 每 1 kg 参考流 | 实验室方法与检出限、物种分析、校准仪表及不确定性 |
| cp_stock_burdens | dispatch | 在制品与成品负荷结转 | 实物库存及继承清单账 | 按阶段的期初及期末在制品；整份质量及组分质量；期初及期末成品盐；继承交换分子向量；匹配期间投入；失败运行负荷；内部交接 id；退回修正；有据可查先进先出或加权平均法 | 生产会计及各过程 owner 共同负责。按同一产品、路线和形态批群及声明的先进先出或加权平均法，核对实物库存及原始未归一负荷向量。期末在制品和成品保留应承担负荷进入下期。保留真实返工及损失负荷；未记录库存不能视为零。 | 原交换单位 | 每次交接及期末 | 期初来源加当前完整期间 | 所有纳入场址及内部接口 | 每 1 kg 参考流 | 盘点、继承向量、核对内部边及修正账 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_conversions | all inventory rows | 先将原始记录换成声明的分子单位：MJ＝3.6×kWh；质量＝积分体积×声明条件下有独立依据的密度。只有速率记录才用速率×时长。保留原件及不确定性。 | cp_salt_records; cp_finish_records; cp_dispatch_records; cp_species_records | 换算后的原始交换分子 |  |
| assigned_numerators | all inventory rows | 对每项交换 i：A_i＝期初继承分子＋本期应承担原始分子－期末继承分子－有独立记录的其他批群转出。匹配的内部滤饼及盐边与重复继承交接只抵消一次，保留原有外部负荷。纳入全部应承担的失败、损失、清洗、返工及库存服务。期初或期末负荷向量不明时暂停结果。 | cp_stock_burdens; cp_salt_records; cp_finish_records; cp_dispatch_records | 原分子单位的 A_i |  |
| normalize_delivery | all inventory rows | 原始换算及库存分配后，只执行一次 v_i＝A_i/Q；Q 是声明交接处实际交付、经退回及既往已计交付修正的唯一正验收净千克数。Q 为零时不生成每千克清单。采集、卡片及聚合标签描述的都是同一次报告操作，不再重复相除。 | A_i; Q; cp_stock_burdens; cp_dispatch_records | 每 1 千克参考流的一份清单 |  |
| reaction_water_check | carbonate_co2, water_vapour | 令 HA 为 C26H44O9，A 为其失去一个质子的阴离子。由分子式推导的核对式：2 HA＋CaCO3＋H2O → CaA2·2H2O＋CO2。每摩尔反应碳酸盐的中和生成一摩尔水，而二水合物形成结合两摩尔，故此理想路径净消耗一摩尔水。实际进度、过量碳酸盐、杂质、溶解物种、游离水蒸发及水解降解须有独立记录；本式不能确定采购投料率、反应收率或排气量。 | cp_species_records; cp_salt_records; cp_finish_records | 独立物种及水一致性发现 | `pliva-2009-carbonate-route`; `pmda-jpxvii-mupirocin` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | reference_product | 参考 native 限制：MUPIROCIN CALCIUM／莫匹罗星钙；CAS 115074-43-6；产品流；生产混合，在工厂；路线、品级与形态名称分量缺失；地理及 locationOfSupply 缺失；唯一参考属性为质量，系数 1，参考单位为 kg。native 备注描述了钙盐、荧光假单胞菌来源、抑制蛋白合成及抗生素作用，但英文的夫西地酸衍生物说法与中文巴豆酸衍生物描述及独立药典不符。不能将该英文化学家族断言用于路线或身份依据。CAS、钙盐名称及菌种与独立二水合物身份一致；未采用任何固定冲突的 CAS、制造路线或品级。native 身份不等于供应方、数量、获准品级、粒度或指定地理的清单。 | 精确 native 原件、独立药典、规格及供应声明 |
| q_water | reaction_water, wash_water | 水 native 限制：Deionised water／去离子水；CAS 7732-18-5；产品流；生产混合，在工厂；离子交换或反渗透，纯净物；没有额外形态或品级名称分量，也无供货地理。其备注还泛指蒸馏、生产及消费混合和工厂及用户供应，且未设合规标准。须核验供应方后才能采用名称中较窄的路线；该 UUID 及备注都不能证明无菌或药典水、通用密度或实际供应技术。仅有系数为 1 的质量属性，没有密度属性。 | native 直读、实际制水链及水检 |
| q_stocks | all inventory rows | 要求完整匹配的实物及负荷账，包括在制品及成品期初末、失败批次、零产出、返工、损失及退回。不得隐含负调整或假定无库存。 | stock_burdens 及签认期间核对 |
| q_species | salt, finish | 保留独立碳氢氧钙及总质量平衡，并附已识别物种与结构水及游离水平衡。不得用 COD、通用中和水模板或同时残差拟合虚构反应水或出口。 | species_records、方法、不确定性及未解释残差 |
| q_case | all processes | 专利放大实例证明真实路线及单元操作，不给出默认收率、消耗、时间、真空、品级或水比。JP XVII 药典是历史身份及分析基准证据，并不证明每批制造物符合当前批准。要求实际获准规格及批检。 | 原始专利及药典，附批次放行证据 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_reference | delivered_salt | 拒绝以纯游离酸、无水盐、药物制剂、活性、剂量、整桶毛重、仅放行 R 或未发库存为参考。要求所述二水合物实物身份、规格及已签认修正的正 Q。 | `pmda-jpxvii-mupirocin` |
| v_inventory | all inventory rows | 核验原子交换、完整原始期间及库存负荷覆盖、内部抵消、一次归一、真实处理、分相排放及独立物种水证据。任何未知平衡、未匹配交接或缺失继承负荷都保留为明确数据缺口。 |  |
| v_native | reference_product, reaction_water, wash_water | 供应方使用前重新核验 native 名称各分量、CAS、路线、品级、地理、产品介质及全部精确属性单位引用。保留已披露的备注矛盾及水限制。普通未解决辅助 UUID 须以后核验身份及供应方，不是零数量，也不是免计交换。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 供同一物理盐及路线在声明工厂交接门的原料供应使用。 |
| allowed_use | 带完整前体背景并披露库存、规格、地理与服务范围的从摇篮至发运清单。 |
| excluded_use | 临床等效、治疗比较、游离酸替代、整份乳膏清单、未经核验其他路线或批准声称。 |
| required_metadata | CAS 与分子式; 二水合结晶性及颗粒形态; 供货含量及其分析基准; 结构水与游离水及杂质; 实际路线与起始物来源; 实际场址地理及供应方; 完整报告期间与批群; 签认净交付 Q 与唯一批次及退回历史; 放行 R 与成品库存核对; 在制品及成品期初末结转负荷; 实际包装及仓储发运边界 |
| required_quality_disclosure | 清单缺口、整份投入组成、q_identity 与 q_water 的全部 native 限制、独立反应水证据、期间库存负荷分配、供应方兼容性、处理终点、不确定性及任何退回重述。 |
| update_trigger | 分子、盐及水合态、路线、品级、供应地理、交付门、库存核算、分析方法或实质运行条件改变。 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| pliva-2009-carbonate-route | literature | PLIVA, WO2009092991A1 (2009-07-30), paragraphs 0008, 0011, 0019, 0022, 0044 and Example 1.19; https://patents.google.com/patent/WO2009092991A1/en | 原始发明人的水中非均相成盐、分离、洗涤及干燥实例；二氧化碳物种证据；不移植投料量、真空、温度、时长、收率、粒径或纯度为通用默认，也不证明每家工厂都在用本路线。 |
| pmda-jpxvii-mupirocin | standard | PMDA, Japanese Pharmacopoeia XVII (2016), Mupirocin Calcium Hydrate, printed pp.1279-1280, PDF pp.151-152; https://www.pmda.go.jp/files/000217654.pdf | 独立官方原件的 CAS、分子式、菌种来源、二水合身份、效价与实物质量区别以及密闭容器信息；历史药典不代替当前获准批规格。该药典以无水基准的微克效价每毫克表示分析结果；效价不作清单分母。 |
| jrc-ilcd-2010-allocation | handbook | 欧盟委员会JRC，ILCD Handbook General guide Detailed guidance，2010年3月第一版，第7.9.3节，PDF第277–278页／印刷第257–258页；https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 仅支持归属型共用服务负荷归集中的虚拟拆分及决定性物理因果。不提供产品特定路线、组成、收率、排放或公用工程因子、固定分配份额、替代信用或完整PEF符合性。库存与归一化规则仍属本PCR的一致性推理。 |
