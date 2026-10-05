---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.unpowered-glider
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 配置复合材料无动力滑翔机制造

## 1. 范围与适用性

本制造前景针对新完整配置非充气无动力刚性翼滑翔机，本地成型玻璃碳环氧机体及粘接夹层结构。选定路线为批准湿法铺层受控固化及实际声明芯材结构增强材，不是通用生产配方。现有机织玻璃织物电气线束航空发动机材料组件PCR覆盖上游产品，不覆盖本无推进完整航空器集成。manifest扫描未发现完整实质滑翔机PCR。排除气球飞艇悬挂滑翔机充气航空器动力辅助动力滑翔机套件不完整机体独立部件全金属木制预浸路线修理翻新。排除客户飞行使用期航空拖曳绞盘服务滑翔性能旅客运输机场基础设施寿命报废。实际执行制造验收试验按实测工厂边界纳入。历史LS8配置称重及另一制造商碳材料生产示例不建立一个组合型号配方或当前工厂数量。候选自撰方法等待独立科学审查。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.unpowered-glider |
| classification_refs | CPC 3.0 49610; 较窄语义候选；无已接受映射 |
| covered_products | 新验收配置湿法铺层复合材料无动力刚性翼滑翔机 |
| excluded_products | 其他无动力航空器形式辅助推进航空器其他机体路线散件使用修理 |
| representative_product | 历史LS8刚性翼完整配置及独立Schempp-Hirth复材生产示例；以实际验收型号为准 |
| production_route | 湿增强材环氧成型受控固化；粘接修整检验；可选精整；机械座舱集成；完整空机质量验收 |
| market_state | 指定制造边界新完整验收航空器 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一种完整配置无动力刚性翼滑翔机制造 |
| How much | 1 kg验收净完整设备；每架验收滑翔机具有实际核验M kg |
| How well | 满足当前受控铺层固化粘接尺寸结构检验控制行程释放起落架完整配置验收准则；保留实际记录，不虚构公差认证 |
| How long or cycle | 一次制造交付；无飞行小时滑翔距离寿命单位 |
| reference_flow_link | `finished_glider` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 气球及飞艇，滑翔机、悬挂式滑翔机及其他无动力航空器 `1b1f7cc3-1fb0-4c7d-9735-454a34fd1006` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 航空器序号型号；完整翼展翼梢尾翼配置；批准树脂纤维前驱体芯材铺层固化粘接精整路线；完整竣工清单自制外购范围；永久起落架控制拖曳释放座舱仪表电气设备余留充注；场址期间；执行试验；实际空机称重方法校准原始重量皮重独立质量平衡；正值净M kg；干燥压载箱排除人员载荷工装包装；相符供货运输废物链接 |

在元数据或等效注释声明必需限定。宽泛公开质量产品身份不提供型号重量或等飞行功能；仅限准确验收无动力刚性翼配置。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `electric_energy` | electricity rows | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 计量实际供货阶段能量；1kWh=3.6MJ。保留实测能量实际归属记录；按M归一每台MJ。 |

## 5. 系统边界

前景始于在厂实际树脂干增强材芯材独立限定采购设备，终于完整配置制造验收。纳入实际模具准备实测铺层固化温控结构粘接固化后修整钻孔检验可选精整装配返工执行验收工作。真空压实烘箱后固化加工冷却液脱模剂丙酮清洗胶衣仅实际受控路线记录显示使用时纳入，不普遍强制高压釜溶剂排放固化条件。完整前景声明前由全部清单路线展开实际真空膜脱模布透气毡磨料过滤器催化剂无线电蓄电池线束润滑固定配重压载管包装运输其他缺少具体交换。采购完整机体壳将改变本地成型边界，不能与已含树脂纤维固化重复计量。上游生产接收处理仅由相符独立数据集链接，本文件不建立完整摇篮到工厂门覆盖。运行飞行客户拖曳绞盘维护在外。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在厂实际未混合坯料及独立限定完整设备 |
| starting_condition_role | boundary_abstraction |
| product_classification_scope | 完整配置复材无动力刚性翼航空器；较窄CPC49610 |
| recursive_input_rule | 供货总成含声明内部件仅计一次；本地制造另行展开 |
| upstream_dataset_requirement | 匹配材料化学形态前驱体设备设计完整性实际供电地区电压废物接收路线 |
| disclosure | 制造前景，明确未解决身份当前清单重量路线观察及缺少链接 |
| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_supplied` | assemblies | 核对供货已含独立实测安装组件kg与完整航空器净M，无实测状态修正不扣减。已含液体精整硬件不重复另作收货。 |  |
| `boundary_acceptance` | factory tests | 纳入实际控制释放起落架检查执行试验返工。实际制造飞行验收若用拖机绞盘，另列明确实测供货试验服务及实际能量接收交换，不把拖曳燃油归作无动力滑翔机消耗，不推定运行寿命飞行。试验载荷水不作为余留净M。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `mould` | 复合材料壳体翼梁成型 | required | 实际批准干增强材环氧铺层芯材安装受控固化 | foreground | same accepted glider; q_item / M |
| `join` | 结构粘接修整检验 | required | 批准接头准备粘接固化后修整钻孔结构检查 | foreground | same accepted glider; q_item / M |
| `finish` | 可选表面精整 | conditional | 仅实际批准本地胶衣精整作业 | foreground | same accepted glider; q_item / M |
| `outfit` | 机械座舱仪表集成 | required | 实际起落架控制拖曳释放座舱盖座椅仪表安装配置 | foreground | same accepted glider; q_item / M |
| `acceptance` | 完整装配功能检验物理质量验收 | required | 声明完整翼配置设备实际试验校准空机质量依据 | final_product | finished_glider; 1 kg |

### 过程：复合材料壳体翼梁成型 (`mould`)

#### 输入

##### 产品流

###### 未混合DGEBA环氧基树脂 (`epoxy_base`)

仅当前批准湿法铺层配方实际使用与本身份相符供货DGEBA基树脂时采用。记录供货证书活性稀释剂实际余留配方，超出身份的填充混合树脂须独立未解决卡。称量净领用退回并分开固化剂计量。历史维修树脂商品名不证明DGEBA纯度或新生产配方。

- 选定流： 环氧树脂 `e2bab6ae-d42f-4fca-bab5-ae9c6692f105`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

###### 未混合环氧铺层用胺固化剂配方 (`hardener`)

批准树脂体系中的一种实际供货证实胺固化配方，数据集限定保留准确SDS组分浓度。记录净供货kg批次实际混合记录，分开基树脂，不从维修手册推定混合比。其他固化化学体系須另卡。

- 选定流： 未混合环氧铺层用胺固化剂配方
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

###### 干燥机织E玻璃增强织物 (`glass_fabric`)

批准铺层表中的一种实际干燥机织E玻璃织物结构，保留供货织法浸润剂单位面积质量依据及实测领用退回kg。不规定历史维修层数。可另记面积，但换算kg须本批实测卷材面积质量。选定已制造机织玻璃身份比E玻璃等级浸润剂宽，须实际证书限定；其一般说明提及制成纺织品，为不一致套用文字，不作为生产路线采用。

- 选定流： 玻璃纤维织物（包括狭幅织物） `59caf1b9-5a05-4eef-8ba2-bc94aa28f43f`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

###### 干燥PAN基碳纤维翼梁粗纱 (`carbon_roving`)

仅采用与批准设计前驱体证书相符实际供货干燥PAN基碳翼梁增强纱。称量领用退回kg标识纤束浸润剂批次；宽泛纤维身份不提供含量铺层方向隐含影响。不能以机织或预浸织物默替供货干粗纱卡。

- 选定流： 聚丙烯腈基碳纤维 `1289c769-931c-4746-9ae6-b8294d9bc1c9`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

###### 刚性多孔PVC夹层芯板 (`pvc_core`)

仅本配置规定实际证实刚性多孔PVC芯板；称量裁料领用退回，保留厚度孔结构实测状态。并非全部滑翔机通用芯材。不采用历史维修表数值密度或kg/m2。其他批准芯材另列行。

- 选定流： 刚性多孔PVC夹层芯板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

###### 聚乙烯醇水性脱模溶液 (`pva_release`)

仅实际批准工装做法使用本单一水性PVA脱模配方时纳入。保留实际PVA质量浓度并称量排除容器供货湿溶液，配方已含水不另作收货。不假设蜡硅或通用剂量。

- 选定流： 聚乙烯醇水性脱模溶液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

###### 用户端低压交流工厂电力 (`electricity_mould`)

实际阶段归属用户端低于1kV电力。公开身份仅相符中国电网平均供电适用，其他地区电压供电方须独立核验流。仅执行时记录模具温控实际固化修整工具装配检验需求，含待机返工。计量kWh换算MJ，无额定功率或通用固化能耗估计。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_energy`
- 来源：

#### 输出

##### 废物流

###### 容器收集未固化混合环氧铺层残留 (`mixed_epoxy_residue`)

实际未使用混合铺层树脂固化剂配方作为一种湿残留流离厂，排容器称量并记反应状态组分接收方。不是纯树脂固化复材空气排放。

- 选定流： 容器收集未固化混合环氧铺层残留
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_waste`
- 来源：

### 过程：结构粘接修整检验 (`join`)

#### 输入

##### 产品流

###### 未固化填充环氧结构粘接配方 (`epoxy_adhesive`)

本滑翔机壳体结构接头的一种实际批准混合填充环氧粘接配方。称量实际混合用量退回，保留树脂固化剂填料已含溶剂范围，组分不再重复供货收货。按当前生产记录保留表面准备胶缝程序检验，不移植维修固化限值。

- 选定流： 未固化填充环氧结构粘接配方
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

###### 液态丙酮清洗溶剂 (`acetone_cleaner`)

仅实际批准清洗使用供货证实液态丙酮CAS67-64-1时纳入，称量净领用回收kg并记浓度。复合材料制造不暗示必须本清洗路线。粘接涂层已含溶剂不另作收货丙酮。

- 选定流： 液态丙酮清洗溶剂
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

###### 用户端低压交流工厂电力 (`electricity_join`)

实际阶段归属用户端低于1kV电力。公开身份仅相符中国电网平均供电适用，其他地区电压供电方须独立核验流。仅执行时记录模具温控实际固化修整工具装配检验需求，含待机返工。计量kWh换算MJ，无额定功率或通用固化能耗估计。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_energy`
- 来源：

#### 输出

##### 废物流

###### 分类固化玻璃环氧层板边角料 (`gfrp_offcut`)

实际分类固化GFRP修整边角料离厂至具名接收方，实测干净kg并记树脂纤维组分污染。排除未固化树脂收集磨尘内部再用块，不扣理论回收信用。

- 选定流： 分类固化玻璃环氧层板边角料
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_waste`
- 来源：

###### 分类固化碳环氧层板边角料 (`cfrp_offcut`)

实际分类固化CFRP修整边角料外运至明确接收方，与GFRP未固化树脂分开称量。保留碳树脂状态实际接收路线，再生碳纤维产品身份不是本废物外运。

- 选定流： 分类固化碳环氧层板边角料
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_waste`
- 来源：

###### 收集已用丙酮清洗溶剂 (`spent_acetone`)

可选实际收集含丙酮已用清洗液外运至明确废物接收方，测量湿净kg及分析丙酮浓度溶解树脂。分开内部回收大气损失，不认为稀释实验室丙酮原料就是本废物。

- 选定流： 收集已用丙酮清洗溶剂
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_waste`
- 来源：

##### 基本流

###### 即时空气未分粒级颗粒物 (`trim_air_dust`)

仅实际修整打磨经已装捕集控制后观察定量残余大气释放纳入。保留实测颗粒组分粒级区别采样浓度流量时间不确定性。选定身份为即时空气未分粒级未指定空气子介质；PM10/PM2.5须自身流。捕集滤料是独立废物不是大气释放。

- 选定流： 颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_emission`
- 来源：

###### 即时丙酮向未指定空气排放 (`acetone_air`)

仅实际执行丙酮清洗经控制后实测CAS67-64-1向室外空气残余释放纳入。按代表采样或解析回收残留余留的文件化闭合溶剂平衡定量物质特异质量，含不确定性。拒绝室内空气农业土壤高空候选。不假设溶剂全蒸发或通用VOC代理。

- 选定流： 丙酮 `08a91e70-3ddc-11dd-9520-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_emission`
- 来源：

### 过程：可选表面精整 (`finish`)

#### 输入

##### 产品流

###### 未固化聚酯表面胶衣配方 (`gelcoat`)

仅实际生产精整计划采用本一种供货聚酯胶衣配方时可选纳入。保留准确树脂催化剂颜料挥发范围及实测混合领用回收固化涂层余留。维修胶衣页不证明工厂精整必须采用或规定混合固化值。

- 选定流： 未固化聚酯表面胶衣配方
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_stock`
- 来源：

###### 用户端低压交流工厂电力 (`electricity_finish`)

实际阶段归属用户端低于1kV电力。公开身份仅相符中国电网平均供电适用，其他地区电压供电方须独立核验流。仅执行时记录模具温控实际固化修整工具装配检验需求，含待机返工。计量kWh换算MJ，无额定功率或通用固化能耗估计。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_energy`
- 来源：

#### 输出

### 过程：机械座舱仪表集成 (`outfit`)

#### 输入

##### 产品流

###### 一种等级成品钢装配螺栓 (`steel_bolt`)

仅实际安装一种证实设计等级钢螺栓，称量净领用减退回kg。保留图样安装件数追溯，分开不同等级，排除供货起落架控制总成已含螺栓。宽泛紧固件身份不证明航空等级验收。

- 选定流： 钢紧固件 `cad280ce-7850-46a1-9060-4f8b68bf5532`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 完整带框透明滑翔机座舱盖 (`canopy`)

一种实际批准供货航空组件设计，测量安装供货净kg并记录图样材料序号件数收货已含硬件。起落架机轮拆分卡仅分开收货适用，完整机轮制动范围为一项物理供货总成。铝推杆钢索复合座椅仅相应证实设计适用。采购完整模块替代已含组分供货工序，本地制造须另列实际坯料工序。额外仪表电气安全设备须由实际完整清单展开。

- 选定流： 完整带框透明滑翔机座舱盖
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 完整不含机轮可收放主起落架模块 (`landing_gear`)

一种实际批准供货航空组件设计，测量安装供货净kg并记录图样材料序号件数收货已含硬件。起落架机轮拆分卡仅分开收货适用，完整机轮制动范围为一项物理供货总成。铝推杆钢索复合座椅仅相应证实设计适用。采购完整模块替代已含组分供货工序，本地制造须另列实际坯料工序。额外仪表电气安全设备须由实际完整清单展开。

- 选定流： 完整不含机轮可收放主起落架模块
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 完整滑翔机主机轮轮胎制动总成 (`wheel`)

一种实际批准供货航空组件设计，测量安装供货净kg并记录图样材料序号件数收货已含硬件。起落架机轮拆分卡仅分开收货适用，完整机轮制动范围为一项物理供货总成。铝推杆钢索复合座椅仅相应证实设计适用。采购完整模块替代已含组分供货工序，本地制造须另列实际坯料工序。额外仪表电气安全设备须由实际完整清单展开。

- 选定流： 完整滑翔机主机轮轮胎制动总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 完整航空器拖曳钩释放总成 (`tow_release`)

一种实际批准供货航空组件设计，测量安装供货净kg并记录图样材料序号件数收货已含硬件。起落架机轮拆分卡仅分开收货适用，完整机轮制动范围为一项物理供货总成。铝推杆钢索复合座椅仅相应证实设计适用。采购完整模块替代已含组分供货工序，本地制造须另列实际坯料工序。额外仪表电气安全设备须由实际完整清单展开。

- 选定流： 完整航空器拖曳钩释放总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 成品钢方向舵控制索总成 (`rudder_cable`)

一种实际批准供货航空组件设计，测量安装供货净kg并记录图样材料序号件数收货已含硬件。起落架机轮拆分卡仅分开收货适用，完整机轮制动范围为一项物理供货总成。铝推杆钢索复合座椅仅相应证实设计适用。采购完整模块替代已含组分供货工序，本地制造须另列实际坯料工序。额外仪表电气安全设备须由实际完整清单展开。

- 选定流： 成品钢方向舵控制索总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 成品铝合金飞行控制推杆总成 (`pushrod`)

一种实际批准供货航空组件设计，测量安装供货净kg并记录图样材料序号件数收货已含硬件。起落架机轮拆分卡仅分开收货适用，完整机轮制动范围为一项物理供货总成。铝推杆钢索复合座椅仅相应证实设计适用。采购完整模块替代已含组分供货工序，本地制造须另列实际坯料工序。额外仪表电气安全设备须由实际完整清单展开。

- 选定流： 成品铝合金飞行控制推杆总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 完整机械滑翔机机翼气动刹车总成 (`airbrake`)

一种实际批准供货航空组件设计，测量安装供货净kg并记录图样材料序号件数收货已含硬件。起落架机轮拆分卡仅分开收货适用，完整机轮制动范围为一项物理供货总成。铝推杆钢索复合座椅仅相应证实设计适用。采购完整模块替代已含组分供货工序，本地制造须另列实际坯料工序。额外仪表电气安全设备须由实际完整清单展开。

- 选定流： 完整机械滑翔机机翼气动刹车总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 完整航空器驾驶员约束带总成 (`harness`)

一种实际批准供货航空组件设计，测量安装供货净kg并记录图样材料序号件数收货已含硬件。起落架机轮拆分卡仅分开收货适用，完整机轮制动范围为一项物理供货总成。铝推杆钢索复合座椅仅相应证实设计适用。采购完整模块替代已含组分供货工序，本地制造须另列实际坯料工序。额外仪表电气安全设备须由实际完整清单展开。

- 选定流： 完整航空器驾驶员约束带总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 完整机械航空器空速表 (`airspeed`)

一种实际批准供货航空组件设计，测量安装供货净kg并记录图样材料序号件数收货已含硬件。起落架机轮拆分卡仅分开收货适用，完整机轮制动范围为一项物理供货总成。铝推杆钢索复合座椅仅相应证实设计适用。采购完整模块替代已含组分供货工序，本地制造须另列实际坯料工序。额外仪表电气安全设备须由实际完整清单展开。

- 选定流： 完整机械航空器空速表
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 完整机械航空器气压高度表 (`altimeter`)

一种实际批准供货航空组件设计，测量安装供货净kg并记录图样材料序号件数收货已含硬件。起落架机轮拆分卡仅分开收货适用，完整机轮制动范围为一项物理供货总成。铝推杆钢索复合座椅仅相应证实设计适用。采购完整模块替代已含组分供货工序，本地制造须另列实际坯料工序。额外仪表电气安全设备须由实际完整清单展开。

- 选定流： 完整机械航空器气压高度表
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 完整固定复合材料滑翔机座舱座椅壳体 (`seat`)

一种实际批准供货航空组件设计，测量安装供货净kg并记录图样材料序号件数收货已含硬件。起落架机轮拆分卡仅分开收货适用，完整机轮制动范围为一项物理供货总成。铝推杆钢索复合座椅仅相应证实设计适用。采购完整模块替代已含组分供货工序，本地制造须另列实际坯料工序。额外仪表电气安全设备须由实际完整清单展开。

- 选定流： 完整固定复合材料滑翔机座舱座椅壳体
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_parts`
- 来源：

###### 用户端低压交流工厂电力 (`electricity_outfit`)

实际阶段归属用户端低于1kV电力。公开身份仅相符中国电网平均供电适用，其他地区电压供电方须独立核验流。仅执行时记录模具温控实际固化修整工具装配检验需求，含待机返工。计量kWh换算MJ，无额定功率或通用固化能耗估计。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_energy`
- 来源：

#### 输出

### 过程：完整装配功能检验物理质量验收 (`acceptance`)

#### 输入

##### 产品流

###### 用户端低压交流工厂电力 (`electricity_acceptance`)

实际阶段归属用户端低于1kV电力。公开身份仅相符中国电网平均供电适用，其他地区电压供电方须独立核验流。仅执行时记录模具温控实际固化修整工具装配检验需求，含待机返工。计量kWh换算MJ，无额定功率或通用固化能耗估计。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_energy`
- 来源：

#### 输出

##### 产品流

###### 验收完整配置无动力刚性翼滑翔机 (`finished_glider`)

一种验收完整配置非充气无动力刚性翼滑翔机，声明机翼尾翼永久座舱控制起落架交付设备仅计一次。无推进发动机螺旋桨推进蓄电池。水压载箱空置，排除驾驶员运行载荷临时工装包装。制造按物理净M缩放为1kg；宽泛公开航空类别由这些限定缩小。

- 选定流： 气球及飞艇，滑翔机、悬挂式滑翔机及其他无动力航空器 `1b1f7cc3-1fb0-4c7d-9735-454a34fd1006`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 1 千克
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_mass`
- 来源：

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct` | shared tooling/production | 先分开实际航空器工单配置，计量可识别模具固化修整精整试验作业。共享固化批采用记录热循环占用计量需求及证实因果分配；架数kg并非普遍因果。保留总能量坯料实际拒收试制返工验收分母，含敏感性中间记录。 |  |
| `allocation_recovery` | waste and reuse | 独立记录内部干料再用溶剂回收与实际外运。真实共产品采用细分证实因果分配，不可得时披露替代敏感性。无自动回收率避免原生纤维树脂信用市价规则。捕集排放为不同质量去向。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | reference product | 受控完整设备验收重量 | 配置；验收净质量 M；航空器序号；原始组件支撑重量；校准皮重；干燥箱；安装设备；独立实测状态修正质量平衡 | 使用受控的验收质量记录核对同一配置的验收设备。 | kg | 每验收航空器配置改变 | 声明代表当前生产期间 | 具名实际制造场址 | 每台验收净质量 | 原始实际校准空机称重独立组件平衡 |
| `cp_stock` | all processes | single chemical/material stock | 坯料领用批次记录 | 单一材料SDS批次配方；领用；退回；余留；拒收返工；混合固化铺层记录；验收数 | 称量实际净坯料领用退回并匹配各批准铺层混合接头精整批；保留供货化学已含。分开实测消耗固化余留残留，无目录树脂纤维含量维修混合比代理。 | kg | 每批报告期间 | 声明代表当前生产期间 | 具名实际制造场址 | 应归属实际坯料kg / 同一配置的验收设备数 | 秤皮重供货SDS签认批次铺层固化记录平衡 |
| `cp_parts` | outfit | single supplied component | 收货安装重量配置记录 | 一种组件图样材料序号件数；供货净kg；安装kg；已含硬件充注；退回；验收数 | 测量实际安装供货组件kg，件数序号用于追溯。核对完整模块起落架机轮拆分收货，避免已含紧固件液体重复。独立组件质量核对完整M。 | kg | 每设计批次航空器 | 声明代表当前生产期间 | 具名实际制造场址 | 实际安装供货kg / 同一配置的验收设备数 | 校准收货安装重量图样已含序号核对 |
| `cp_energy` | all processes | single electricity interface | 表计阶段归属 | 表计场址供电方电压；总能量kWh；期间批次循环待机返工；实际验收数；因果归属 | 读取实际供电阶段接口校准电表，保留阶段批时实际共享依据。按1kWh=3.6MJ换算并保留输入明确供货边界。 | MJ | 每批期间路线改变 | 声明代表当前生产期间 | 具名实际制造场址 | 实际归属阶段MJ / 同一配置的验收设备数 | 表计校准账单循环因果平衡 |
| `cp_waste` | all processes | single physical waste stream | 分类接收外运 | 一种废物化学固化污染；净kg皮重；源过程；再用回收；接收路线；验收数 | 排容器称量各独立明确实际外运流，保留接收票据状态分析。不合并GFRP/CFRP固化未固化料已用溶剂捕集尘。 | kg | 每外运期间 | 声明代表当前生产期间 | 具名实际制造场址 | 实际外运净废物kg / 同一配置的验收设备数 | 秤皮重分析接收源平衡 |
| `cp_emission` | join | single residual atmospheric substance | 采样空气释放 | 物质CAS粒级；空气子介质；控制后采样浓度流量时间；检出限不确定性；实际验收数 | 按物质介质特异测量定量实际控制后颗粒或独立丙酮质量；丙酮在解析回收残留余留时可由文件化闭合溶剂平衡支持数量。保留不确定性区分不存在未测低于检出，不自动零。 | kg | 代表实际路线控制期间 | 声明代表当前生产期间 | 具名实际制造场址 | 实际释放kg / 同一配置的验收设备数 | 采样实验室校准运行时长物质平衡 |
| `cp_configuration` | all processes | complete glider configuration | 受控竣工验收 | 型号序号；完整翼翼梢尾翼配置；完整清单路线修订；设备压载箱；自制外购；实际试验；交付状态 | 追溯当前批准竣工清单铺层固化粘接程序偏差执行试验。限定完整交付设备净空机状态，保留独立实测状态修正而非来源目录重。 | kg | 每航空器配置路线改变 | 声明代表当前生产期间 | 具名实际制造场址 | 限定伴随每同配置验收设备 | 签认图样清单程序检验物理状态记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |
| `period_conversion` | order records | 对一种实际相同配置，以文件化因果记录归属实测期间总量至验收航空器，由归属交换/验收架数计算q_item。保留原总量拒收返工验收数中间值。不凭无明确物理模型混合不同机翼设备配置。 | cp_stock; cp_parts; cp_energy; cp_mass | q_item |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `mass_provenance` | cp_mass | 受控验收M须源于同一完整序号配置当前实际校准空航空器称重，保留原始读数组件支撑标识水平支撑条件校准零点辅助支撑皮重不确定性。实际方法可求和分开称量互不重复完整部件或采用证实完整支撑航空器称重方法；核对同一完整安装配置全部独立组件质量。不规定虚构整航空器台秤。支撑反力若报力须实际计量力质量基准，不假定通用重力常数。保留LS8手册2-1页仅历史物理方法依据，不是当前型号记录通用新航空器验收协议。无实际原件闭合时保留计量科学缺口，不声明实测物理完整数据。 | dg-ls8-historical; cp_mass; cp_parts; cp_configuration |
| `net_empty_configuration` | accepted glider | M包括验收声明完整机翼翼梢尾翼结构机体永久控制起落架舱盖座椅约束带仪表实际交付永久非推进设备余留工作充注仅一次。声明原称重状态独立实测签认修正。排除驾驶员可拆运行载荷降落伞（除非明确为永久交付配置）、水压载临时平衡试验载荷支撑吊具包装。干燥压载箱硬件余留。纳入固定配重座舱蓄电池时须单独标识称量。不用最大起飞质量目录空重法律限值猜测树脂含量满压载重量作M。 | cp_mass; cp_parts; cp_configuration |
| `route_and_balance` | all exchanges | 当前批准全部清单铺层芯材结构实际供货化学生产流转记录确定准确数量条件。核验树脂固化剂粘接混合已含反应余留及GFRP/CFRP坯料产品废物平衡。捕集不是空气排放。完整声明前添加全部实际缺少具体设备真空消耗充注清洗包装试验服务运输接收交换；核验当前验收准则返工检出限不确定性供货链接。不设通用产率树脂比例固化循环芯材密度设备重量寿命。 | cp_stock; cp_parts; cp_energy; cp_waste; cp_emission; cp_configuration |
| `source_limits` | external evidence | LS8保留手册（2009年12月基准，后续修订至2016年6月）仅提供历史系统物理称重背景。维修树脂织物芯材精整表不是新生产清单固化配方密度换算现行法律批准寿命强制。Schempp-Hirth2018年10月MINIMOA04/07页为独立历史碳翼梁生产示例，不证明本滑翔机准确配方芯材化学工艺条件。当前工厂资格称重原件完整配置仍为独立科学审查要求。 | dg-ls8-historical; schempp-minimoa-2018 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference_flow | 核验完整无动力刚性翼配置正值物理生成M kg及独立mass_provenance/net_empty_configuration。参考产品须等于finished_glider选定流，较宽产品UUID不证明准确配置型号重量。 |  |
| `validation_route` | all processes | 核验实际湿铺层芯材固化粘接精整资格及执行修整装配试验，含阶段计量坯料返工废物平衡。不以维修处方替当前新生产依据，采购模块内部坯料不得重复。 |  |
| `validation_identity` | all flow rows | 核验实际类型物质参考属性单位组状态浓度前驱体供货边界官方双语名。裸玻璃纤维不是机织物，晶圆生产丙酮不自动作清洗供货，非多孔塑料不是PVC泡沫，一般脱模剂不证明PVA溶液。室内土壤高空丙酮不是即时未指定室外空气。按准确row_id保留未匹配行，不改公开属性。 |  |
| `validation_claims` | claims | PCR机械通过不是科学批准现行航空器法律型式批准实际工厂清单完整质量观察等飞行功能。更广数据集声明须当前完整制造称重供货记录相符链接。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置湿铺层复合材料无动力滑翔机制造前景；标题不声明发表 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 按实际净M缩放相同验收完整配置产品制造及独立相符上游运输接收链接 |
| excluded_use | 飞行小时滑翔性能动力航空器其他机体路线散件使用拖曳修理寿命报废批准 |
| required_metadata | 型号序号完整翼永久设备配置；当前完整清单铺层固化粘接精整程序；供货已含充注；场址期间试验计划；校准当前空机称重原件皮重状态修正独立平衡；净M kg；因果分配相符链接 |
| required_quality_disclosure | 余留身份清单路线重量链接缺口历史依据适用性不确定性检出限实际试制返工回收外运分配敏感性 |
| update_trigger | 机翼机体材料铺层芯材固化粘接精整永久设备自制外购实际空机测量交付状态工厂期间试验供货接口改变 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| dg-ls8-historical | handbook | DG Flugzeugbau, Maintenance Manual LS8 (LS8/LS8-a/LS8-b/LS8-18), retained December2009 baseline with amendments through June2016 TN8024; printed1-1/1-3/2-1/10-1/10-2 (physical PDF11/13/30/99/100). Manufacturer original retained by Finnish gliding organisation: https://www.nil.fi/sites/default/files/MM-LS8.pdf | 历史系统物理称重示例；核对维修材料仅限定适用性。不采用当前生产配方密度寿命适航或实际M。 |
| schempp-minimoa-2018 | handbook | Schempp-Hirth, MINIMOA, issue3 October2018, printed04/07 (physical PDF4/7), Carbon Fibre: The Game Changer and production photograph. https://www.schempp-hirth.com/fileadmin/Minimoa/Minimoa_Sn3_October_2018.pdf | 独立历史碳翼梁发展复材生产图示；不定义LS8或当前工厂树脂芯材配方循环实际kg数量因子。 |
