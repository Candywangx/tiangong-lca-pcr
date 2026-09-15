---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.other-recording-media-including-matrices-and-masters-for-the-production-of-disks
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 其他记录介质，包括用于生产唱片的模版和母版

## 1. 范围与适用性

本 PCR 适用于未录制的实体母版和模版坯，以及未录制的声音记录蜡坯的制造。已录制母版、已录制蜡坯和唱片不在本边界内。磁性介质、激光可记录光学介质、固态存储设备及智能卡分别属于其他产品类别。即使产品拟用于后续复制，交付时也必须处于未录制状态。上述区分依据 `un-cpc-3-0-notes-2025`。

代表路线为在刻录声音之前交付的铝基硝化纤维素漆层空白录音盘。记录表面与基材应分别核算材料；涂布损失、溶剂释放、质量不合格品和防护包装均需明确采集数据。材料构成依据 `cci-recording-media-care`；涂布与干燥的建模采用 `us-epa-ap42-industrial-coating` 的通用涂装原理。这些来源不规定通用的漆料配方或生产成品率。

对于蜡坯或其他未录制母版基材，应建立独立的产品特定前景数据包，明确实际配方、基材、成型和精整工序及每一项独立交换。不得将代表性漆盘清单直接用于蜡坯。不得为每个产品变体重复展开公共公用工程。本文件提供前景数据集生产规则，不构成完整生命周期或环境标志认证声明。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.other-recording-media-including-matrices-and-masters-for-the-production-of-disks |
| classification_refs | CPC 3.0 47590；分类背景依据 `un-cpc-3-0-structure-2025` 和 `un-cpc-3-0-notes-2025` |
| covered_products | 未录制母版和模版坯；未录制的声音记录蜡坯 |
| excluded_products | 含已录制信息的母版和压模；已录制蜡坯；唱片；磁性和光学记录介质；半导体存储设备；智能卡；录音设备；录音服务及知识产权原作 |
| representative_product | 检验合格的未录制铝基硝化纤维素漆层空白录音盘 |
| production_route | 接收预制铝盘基材和配制漆料；按需湿法清洗；涂布与干燥；检验；防护包装 |
| market_state | 干燥、检验合格、可供后续刻录的未录制盘坯，具有明确的基材、尺寸和记录表面规格 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应适用于所声明的后续声音母版刻录工序的未录制实体盘坯 |
| How much | 声明单位：同一设计的合格盘坯净质量 1 kg；披露对应盘坯数量及可用记录表面积 |
| How well | 符合采购方书面规定的尺寸、平整度、表面完整性、附着力和刻录适配性要求；出厂时不含已录制信息 |
| How long or cycle | 一个生产批次至出厂；披露供应商贮存条件和保质期依据，不假定录音寿命或复制次数 |
| reference_flow_link | `reference_blank` 是 `inspection_pack` 唯一定量参考输出，不含包装质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 未录制铝基硝化纤维素漆层空白录音盘 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 未录制状态；母版坯用途；基材材质和合金；涂料配方标识及固含量；盘坯直径和厚度；涂布面数；可用记录面积；单片净质量；合格数量；表面和刻录验收规格；贮存要求；制造地域及技术；报告期；供应商交付起始状态；纳入的包装；前景及上游边界 |

前景数据包必须记录这些限定信息。按质量声明单位不表示不同盘坯设计在等质量下具有等效记录功能。下游录音时长和复制产率需要独立的功能单位建模。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `net_reference_mass` | 合格盘坯与内部转移 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 调湿后称量干燥盘坯，不含纸套和纸箱。数量换算采用该批次实测平均单片质量，保留样本数、变异情况和秤校准记录。 |
| `coating_basis` | 液体漆料与丙酮 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别记录供应配方质量、干固体及每种溶剂质量分数。不得将液体配方质量等同于干涂层质量，也不得将其中组分重复计为外购投入。体积换算须使用供应商或实测密度并记录温度。 |
| `alkali_basis` | 氢氧化钠 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 由实测溶液质量和含量计算 NaOH 质量；仅将现场加入的稀释水另行记录。关联上游数据集时保留供应浓度。 |
| `electricity_conversion` | 电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留实测 kWh 并按准确单位恒等式 1 kWh = 3.6 MJ 换算；记录电网、电压和计量边界。不得将能量单位换算作为排放因子。 |

## 5. 系统边界

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_unrecorded` | 产品适用性 | 制造边界止于向盘坯录制或刻入信息之前。已录制母版制造、从已录制母版进行的电铸及唱片压制属于独立下游系统。 | `un-cpc-3-0-notes-2025` |
| `boundary_foreground` | 场址作业 | 纳入可归属的准备、涂布、干燥、通风、检验、不合格品、包装和废物交接。供应商上游工序及进厂运输若在场址记录之外，应另行记录。披露任何排除的可归属作业及其理由。 | `us-epa-ap42-industrial-coating`; `ghg-protocol-product-standard-2011` |
| `boundary_emissions` | 涂布与清洗 | 纳入来自配方、稀释剂和清洗溶剂的释放。根据实际组成及测量或经过核对的逐物种平衡确定每种排放物；丙酮行仅在实际含丙酮时适用。若现场运行捕集、回收或处理设施，应纳入其投入和产物。 | `us-epa-ap42-industrial-coating` |
| `boundary_extension` | 其他路线与辅助设备 | 计算前记录路线适用性。若现场进行基材成型、蜡坯成型、燃烧、溶剂治理或制冷，应采集其独立材料、能源、废物和基本流交换；缺失清单行不能作为该活动不存在的证据。 | `ghg-protocol-product-standard-2011` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 预制裸铝盘基材和配制硝化纤维素漆料到达制造场址；记录各供应商所含加工及运输工序 |
| starting_condition_role | 前景数据采集入口，不免除基材或漆料制造的上游负荷 |
| product_classification_scope | CPC 注释确定的未录制实体盘坯；剩余类别归类并不证明无关介质具有相同路线 |
| recursive_input_rule | 外购未录制盘坯用于进一步精整时，作为同类别上游投入记录其准确状态和供应商数据集，不在同一前景过程中递归重建。内部转移仅配对一次，并在汇总时抵消。 |
| upstream_dataset_requirement | 为交付基材、涂料、化学品、电力和包装关联适配的上游数据集，为外运废物关联实际处理。披露数据缺口；仅含场址的数据包属于门到门，不得标为摇篮到大门。 |
| disclosure | 披露场址、日期、路线、外包、供应商、背景版本及地域、运输纳入情况、现场处理、废物去向及排除项。下游刻录、播放、复制和最终产品处置不在本生产数据包内。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `blank_coating` | 基材准备、漆料涂布与干燥 | required | 代表性漆盘路线；湿法清洗和丙酮使用以实际记录为条件 | 前景制造 | 转入检验的干燥未录制涂漆盘坯 |
| `inspection_pack` | 检验、不合格品分离与防护包装 | required | 每个交付批次；纸套和纸箱行仅在实际使用时适用 | 前景精整与出厂 | 不含包装质量的合格未录制盘坯 1 kg |

下列卡片是代表路线的最低采集模式。实际其他交换应逐项记录。全部数量使用同一个合格产出分母归一化。内部转移不属于额外最终产品，其接收量和发出量必须核对一致。

### 过程：基材准备、漆料涂布与干燥（`blank_coating`）

#### 输入

##### 产品流

###### 漆层录音盘坯用裸铝盘基材（`aluminium_substrate`）

按实际合金、几何形状和表面状态记录外购预制盘；上游盘材成型保留在供应商数据集中。

- 选定流：漆层录音盘坯用裸铝盘基材
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：基材领用净质量扣除退回量，包括最终不合格盘所耗基材，再除以 M_accept。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未录制盘坯净产出，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_coating_materials`
- 来源：`cci-recording-media-care`

###### 录音盘涂布用配制硝化纤维素漆料（`nitrocellulose_lacquer`）

这是具有配方标识、固含量及溶剂组成的一种供应涂料配方。若现场配制，应以分别计量的各组分替代该外购投入边界。

- 选定流：录音盘涂布用配制硝化纤维素漆料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：扣除库存变化及退回量的液体漆料净消耗除以 M_accept；另行保留干固体质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未录制盘坯净产出，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_coating_materials`
- 来源：`us-epa-ap42-industrial-coating`

###### 工艺用水（`process_water`）

inclusion_condition：现场实施水洗基材、漂洗或稀释。仅计供应补水，内部循环不作为新供应水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：供应水计量质量除以 M_accept；从体积换算时采用实测密度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未录制盘坯净产出，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_coating_utilities`
- 来源：`ghg-protocol-product-standard-2011`

###### 氢氧化钠（`sodium_hydroxide`）

inclusion_condition：使用有记录的 NaOH 基材清洗槽。分别记录含量、稀释和排出。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：NaOH 溶液领用量乘实测 NaOH 质量分数，扣除退回量后除以 M_accept。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未录制盘坯净产出，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_coating_materials`
- 来源：`ghg-protocol-product-standard-2011`

###### 电力（`coating_electricity`）

纳入准备、涂布、电干燥及通风；若实际采用非电热源，应另行记录相应交换。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ；能量 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：可归属的实测 kWh 乘以 3.6，再除以 M_accept。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未录制盘坯净产出，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_coating_utilities`
- 来源：`ghg-protocol-product-standard-2011`

###### 丙酮溶剂（`acetone_solvent`）

inclusion_condition：单独加入丙酮作为稀释剂或清洗溶剂。供应漆料中已含丙酮进入物种平衡，不计入本外购投入数量。

- 选定流：丙酮溶剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按库存变化修正的单独加入丙酮溶剂净质量除以 M_accept。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未录制盘坯净产出，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_solvent_balance`
- 来源：`us-epa-ap42-industrial-coating`

#### 输出

##### 产品流

###### 待检的干燥未录制铝基硝化纤维素漆层空白录音盘（`coated_blank_out`）

向检验转移的内部物流，实测基材与干涂层总质量；不得作为第二个最终参考输出。

- 选定流：待检的干燥未录制铝基硝化纤维素漆层空白录音盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：干燥转移质量除以 M_accept；按有记录的库存变化与 coated_blank_in 核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未录制盘坯净产出，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_coating_materials`
- 来源：`cci-recording-media-care`

##### 废物流

###### 废碱液（`alkaline_wash_liquor`）

inclusion_condition：使用后的 NaOH 基材清洗液离开过程。记录湿质量、pH、溶解铝及实际处理；该行是一股碱性水相废液。

- 选定流：废碱液 `ce738ef0-a711-4650-a38b-34479efd7559`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：经贮存变化修正的外运废液湿质量除以 M_accept。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未录制盘坯净产出，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_coating_wastes`
- 来源：`ghg-protocol-product-standard-2011`

###### 含溶剂的液态硝化纤维素废漆料（`liquid_lacquer_waste`）

将不可用液体涂料与清洗废液及干燥不合格盘分别收集；保留固体及逐物种组成。

- 选定流：含溶剂的液态硝化纤维素废漆料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测外运液态废漆料质量除以 M_accept；其中溶剂含量同时进入物种平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未录制盘坯净产出，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_coating_wastes`
- 来源：`us-epa-ap42-industrial-coating`

##### 基本流

###### 丙酮（`acetone_air`）

inclusion_condition：涂布、干燥或清洗中含有并释放丙酮。记录进入环境空气的释放量，不包括已回收或已销毁丙酮。

- 选定流：丙酮 `08a91e70-3ddc-11dd-9520-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测或经核对的物种平衡丙酮释放量除以 M_accept；记录方法及不确定性。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未录制盘坯净产出，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_solvent_balance`
- 来源：`us-epa-ap42-industrial-coating`

### 过程：检验、不合格品分离与防护包装（`inspection_pack`）

#### 输入

##### 产品流

###### 待检的干燥未录制铝基硝化纤维素漆层空白录音盘（`coated_blank_in`）

接收对应的内部涂漆盘坯转移。若改为外购涂漆盘坯，则须披露上游数据集并消除重复的厂内涂布负荷。

- 选定流：待检的干燥未录制铝基硝化纤维素漆层空白录音盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：接收的干盘坯质量除以 M_accept；与 coated_blank_out 核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未录制盘坯净产出，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_dispatch`
- 来源：`cci-recording-media-care`

###### 录音盘防护纸套（`paper_sleeve`）

inclusion_condition：交付时使用纸套。声明纸张等级、涂层和纸套质量；实际其他包装组件应各列一行。

- 选定流：录音盘防护纸套
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：纸套领用质量扣除未用退回量，再除以 M_accept。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未录制盘坯净产出，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_dispatch`
- 来源：`ghg-protocol-product-standard-2011`

###### 瓦楞纸箱（`corrugated_box`）

inclusion_condition：出厂盘坯使用瓦楞纸箱防护。记录纸板等级，将包装净质量与盘坯参考质量分开。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：纸箱消耗净质量除以 M_accept；共用纸箱采用有记录的发运分配。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未录制盘坯净产出，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_dispatch`
- 来源：`ghg-protocol-product-standard-2011`

###### 电力（`packing_electricity`）

将检验和包装设备电力与涂布分开记录，防止共享计量重复核算。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ；能量 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：可归属的实测 kWh 乘以 3.6，再除以 M_accept。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未录制盘坯净产出，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_pack_energy`
- 来源：`ghg-protocol-product-standard-2011`

#### 输出

##### 产品流

###### 未录制铝基硝化纤维素漆层空白录音盘（`reference_blank`）

唯一合格参考输出，不含包装、不合格品及含已录制信息的盘坯。保留验收证据及该批次质量与数量换算。

- 选定流：未录制铝基硝化纤维素漆层空白录音盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每声明单位 M_accept / M_accept = 1 kg；M_accept 必须为正实测值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未录制盘坯净产出，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_dispatch`
- 来源：`un-cpc-3-0-notes-2025`

##### 废物流

###### 不合格硝化纤维素漆层铝盘（`rejected_disc`）

纳入作为废物离开的不合格盘坯和破坏性样品，包含其漆层；内部返工另行记录并披露处理去向。

- 选定流：不合格硝化纤维素漆层铝盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：送往处理的实测不合格复合盘质量除以 M_accept。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格未录制盘坯净产出，不含包装
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_dispatch`
- 来源：`ghg-protocol-product-standard-2011`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | 共享制造活动 | 优先分离生产线和计量。对于剩余共享消耗，使用经论证的因果驱动量，例如设备占用时间或相同配方的涂布面积，并保留分子和分母。仅质量相等不能证明不同盘坯设计等效。 | `ghg-protocol-product-standard-2011` |
| `allocation_rejects` | 不合格品与内部返工 | 将不合格盘坯、破坏性验收样品及未回收涂料损失保留在批次负荷中。内部返工属于内部转移，不是可销售共产品或避免原生材料的信用。 | `ghg-protocol-product-standard-2011` |
| `allocation_coproduct` | 可销售回收产物 | 对真正的共产品采用有依据的物理关系；若不存在适用物理关系，则记录经济分配或其他有依据的分配。记录回收边界及接收方，采用并披露一致的循环利用方法。 | `ghg-protocol-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_coating_materials` | blank_coating | 基材、漆料和碱投入；涂漆盘坯转移 | 称量和库存记录 | lot_id; supplier; substrate_alloy; received_mass; opening_stock; closing_stock; issued_mass; returned_mass; formulation_id; solids_fraction; NaOH_fraction; transfer_mass | 校准称量、库存核对、供应商规格及含量测定 | kg；质量分数 | 每批次及库存结算时 | 声明的连续报告期内全部批次，包括开机和返工 | 指定涂布场址及外包交接 | 净消耗及转移分别求和，再除以合格干产出质量 | 秤校准；发票；配方及含量记录；关联批次单 |
| `cp_coating_utilities` | blank_coating | 水与电力 | 仪表记录 | meter_id; timestamps; opening_reading; closing_reading; process_assignment; shared_driver; water_density; water_temperature | 仪表读数差；共享时采用书面说明的物理分配 | kg; m3; kWh | 每班次或计量生产周期 | 与生产同期，包括实际涂布时间以外的干燥和通风 | 涂布、准备及可归属辅助设备 | 仪表净差仅分配一次；按密度换算水量并准确换算能量；按合格产出归一化 | 校准；计量布置图；账单；驱动量核对 |
| `cp_solvent_balance` | blank_coating | 丙酮供应及空气释放 | 组成、测试和平衡记录 | species; formulation_mass; solvent_fraction; added_solvent_mass; inventory_change; residual_in_product; waste_solvent_mass; recovered_export; destruction_mass; stack_mass; fugitive_mass | 供应商组成结合场址含量测定、库存平衡及有代表性的有组织和无组织排放测量；记录治理设施运行 | kg/物种 | 每种配方及生产周期；配方或治理变更后 | 相同完整生产报告期 | 整个涂布和清洗溶剂系统，包括干燥和现场回收 | 按物种核对投入与空气释放、产品残留、废物、外运回收物、销毁量及库存增量；内部回收复用相互抵消 | 组成证明；测试方法；采样覆盖；残留和回收记录；平衡不确定性 |
| `cp_coating_wastes` | blank_coating | 碱性清洗废液与液态废漆料 | 废物交接记录 | stream_id; batch; wet_mass; water_fraction; solvent_fraction; pH; destination; carrier; transfer_date | 每次交接分别称量；采样测定物流组成；核实处理接收方 | kg；质量分数；pH | 每次交接及代表性采样周期 | 生产期内全部交接及库存变化 | 涂布场址至指定处理交接点 | 按物流分别记录外运湿质量及组成，不得合并废漆料与清洗废液 | 地磅单；废物联单；分析结果；处理合同 |
| `cp_dispatch` | inspection_pack | 涂漆盘坯转移、包装、合格品和不合格品 | 批次检验及出厂记录 | lot_id; incoming_blank_mass; accepted_count; unit_mass_samples; accepted_mass; reject_mass; stock_change; sleeve_mass; box_mass; surface_test; dimensions; cutting_test; unrecorded_check; storage_conditions | 校准称量及数量核对；按采购方要求检验；包装领退记录 | kg；片数；mm；m2 | 每批次；按书面验收计划抽测单片质量和质量指标 | 与涂布同期，包括不合格品及期初期末库存 | 指定检验和包装场址 | 核对转入量与合格产出、不合格品和库存；净包装消耗按合格产出归一化；不混合不兼容设计 | 测试记录；采样计划；秤校准证明；出厂单；包装规格 |
| `cp_pack_energy` | inspection_pack | 检验及包装电力 | 仪表及设备记录 | meter_id; kWh; run_time; standby_time; allocation_driver; lot_id | 分表计量或与场址总表核对的有效设备测定 | kWh | 每批次或班次 | 与合格产出同期 | 检验和包装设备 | 仅归属一次，纳入实测待机，换算为 MJ 并归一化 | 校准；设备测定；场址核对 |

### 计算规则

下表的 formula_or_rule、inputs 和 output 分别表示公式或规则、输入及输出。

| rule_id | 适用对象 | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_lot` | 每个清单行 | q_i = Q_i / M_accept，且 M_accept > 0；兼容批次按 sum(Q_i)/sum(M_accept) 合并，不采用批次强度的无权平均。Q_i 是声明期内经分配的净消耗、转移、废物或释放量。 | 各协议对应 Q_i；cp_dispatch 合格干质量 | 每 1 kg 合格盘坯的交换 | `ghg-protocol-product-standard-2011` |
| `blank_mass_balance` | 干盘坯转移 | 检验过程 M_in = M_accept + M_reject + delta_M_stock；另行核算任何取样或返工材料。汇总前配对 coated_blank_out 与 coated_blank_in。 | cp_coating_materials; cp_dispatch | 批次和转移核对；由实际记录计算合格率 | `ghg-protocol-product-standard-2011` |
| `solvent_species_balance` | 丙酮及每种实际额外溶剂 | E_air = M_in - M_retained - M_waste - M_recovered_export - M_destroyed - delta_M_stock。M_in 包括供应漆料中的该物种及另加溶剂。以测量和不确定性核验；负结果必须调查，不能直接截断为零。销毁项须有平衡的处理模型。 | cp_solvent_balance | 各物种剩余空气释放量；区分实测与平衡推算结果 | `us-epa-ap42-industrial-coating` |
| `coating_solids_check` | 漆料沉积 | 将干涂层增重与供应非挥发固体扣除废物固体及库存变化后比较。保留基材质量和残留溶剂修正，不得将不平衡质量强行填入通用排放。 | cp_coating_materials; cp_solvent_balance; cp_coating_wastes | 涂层和溶剂平衡闭合证据 | `us-epa-ap42-industrial-coating` |

### 数据质量要求

下表的 requirement 和 evidence 分别表示要求及证据。

| requirement_id | 适用对象 | requirement | evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品与路线 | 保留未录制状态和全部参考限定信息。历史介质组成不能作为现代供应商配方或生产强度数据集。 | 供应商及验收记录；`un-cpc-3-0-notes-2025`；`cci-recording-media-care` |
| `dq_coverage` | 前景记录 | 覆盖披露的连续期间，纳入开机、待机、返工、不合格品和库存变化。评价时间、地域及技术代表性、完整性和可靠性，不得将缺失数据视为零。 | 协议记录及覆盖矩阵；`ghg-protocol-product-standard-2011` |
| `dq_uncertainty` | 平衡与分配 | 保留测量不确定性、分析检出限、共享计量驱动量及未测残差。依据仪表不确定性建立场址特定平衡验收条件，调查异常。 | 校准、采样和平衡审查；`ghg-protocol-product-standard-2011` |
| `dq_composition` | 涂料与废物 | 获取实际配方和废物组成。通过受控证据访问保护保密信息，同时保留足以开展独立核验的信息。 | 配方证明、含量测定和废物测试；`us-epa-ap42-industrial-coating` |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | 参考定义 | 必须有且仅有一个合格参考输出、净质量基准、全部限定信息及未录制状态证据。不得采用已录制母版或最终压制唱片作为参考产品。 | `un-cpc-3-0-notes-2025` |
| `validate_inventory` | 交换与可追溯性 | 每行仅含一个原子交换，方向和类型一致、单位兼容，并有与协议关联的采集或计算数量。不得用近似材料或汇总废物名称替代缺失流身份。 | `ghg-protocol-product-standard-2011` |
| `validate_balance` | 生产和溶剂平衡 | 核对内部转移、合格质量、不合格品、库存和包装。逐物种闭合溶剂平衡并说明不确定性。不得将电力供应排放再次计为前景直接排放。 | `us-epa-ap42-industrial-coating`; `ghg-protocol-product-standard-2011` |
| `validate_applicability` | 条件交换与路线扩展 | 对不适用卡片记录实际不存在的依据。代表模式以外的任何实际溶剂、燃料、处理投入、处理产物或排放均须新增独立行，之后才能声明场址覆盖完整。 | `us-epa-ap42-industrial-coating`; `ghg-protocol-product-standard-2011` |
| `validate_evidence` | 数量与下游使用 | 数量采用实际前景记录。通用涂装表格和保存条件不能作为盘坯制造范围。区分门到门结果与补全上游后的结果，并披露缺失阶段和数据。 | `cci-recording-media-care`; `us-epa-ap42-industrial-coating`; `ghg-protocol-product-standard-2011` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 为下游录音或复制模型中相匹配的未录制母版坯提供生产投入数据 |
| allowed_use | 材料、尺寸、表面规格、技术、地域和交付边界相匹配的使用；仅在具有书面单片质量时换算为片数 |
| excluded_use | 已录制内容、已录制压模、压制唱片、光学或磁性介质、固态设备；无依据的跨设计功能比较；依据场址数据作完整播放或消费者生命周期声明 |
| required_metadata | 全部参考限定信息；数据集所有者和版本；报告期；供应商及背景关联；制造路线；过程图；分配；运输边界；废物处理；协议标识 |
| required_quality_disclosure | 各过程和交换的覆盖情况；测量及模型不确定性；组成质量；采样；内部转移核对；缺失身份或数据集；排除阶段；可比性限制 |
| update_trigger | 基材、配方、几何尺寸、验收规格、涂布或干燥技术、电力供应、治理、废物去向、包装、供应商边界或报告期代表性发生变化 |

## 11. 数据源

下表的 source_id、type、reference 和 used_for 分别表示来源标识、类型、参考文献及用途。

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，CPC 3.0 结构，2025 年 6 月 30 日，47590 行。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv ；检索日期 2026-09-09 | 分类身份；independence_key: un-cpc-3-0-2025 |
| `un-cpc-3-0-notes-2025` | official_guidance | 联合国统计司，CPC 3.0 解释性注释，2025 年 6 月 30 日，第 260 页，47540、47550、47590 和 47610 子类。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf ；检索日期 2026-09-09 | 原文所列适用范围及已录制/未录制排除项；independence_key: un-cpc-3-0-2025 |
| `cci-recording-media-care` | official_guidance | Joe Iraci，加拿大文物保护研究所（2020），《音频、视频和数据记录介质的保护》，出版物目录号 CH57-4/6-2-2020E-PDF，ISBN 978-0-660-35113-1；表 1 及漆盘劣化相关章节。https://www.canada.ca/en/conservation-institute/services/preventive-conservation/guidelines-collections/caring-audio-video-data-recording-media.html ；检索日期 2026-09-09 | 基材/涂层构成及表面状态的重要性；属于历史保存指南，不提供制造数量；independence_key: cci-caring-recording-media |
| `us-epa-ap42-industrial-coating` | official_guidance | 美国环保署，AP-42 第 4.2.2.1 节《一般工业表面涂装》，1981 年 4 月，1995 年 1 月重排，第 1-3 页工艺及排放讨论。https://www.epa.gov/sites/default/files/2020-10/documents/c4s02_2a.pdf ；检索日期 2026-09-09 | 涂布/干燥及涂装/清洗溶剂核算。美国通用涂装指南仅用于物理方法原理，不采用默认密度、溶剂比例、排放因子或治理效率；independence_key: us-epa-ap42-4-2-2-1 |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD，《产品生命周期核算与报告标准》，2011 年，第 7-9 和 13 章。https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf ；检索日期 2026-09-09 | 将边界披露、数据质量及分配原则用于本清单；本 PCR 不声明认证，也不将 LCA 限定为温室气体；independence_key: wri-wbcsd-product-standard-2011 |
